import { parseJobs, parsePortfolio, type PortfolioContent, type PublishedContent } from "../../lib/site-content";
import {
  MIN_PASSWORD_LENGTH,
  clearFailedLogins,
  clearSessionCookie,
  createSessionCookie,
  hasValidSession,
  isLoginLocked,
  isPasswordConfigured,
  recordFailedLogin,
  setPassword,
  verifyPassword,
  type AuthEnv,
} from "../admin-auth";
import { rejectOversized, rejectUntrustedOrigin } from "../guard";
import { json } from "../responses";

const JOBS_KEY = "content:jobs";
const PORTFOLIO_KEY = "content:portfolio";
const MEDIA_PREFIX = "media:";
const MAX_JSON_BYTES = 1024 * 1024;
const MAX_PHOTO_BYTES = 5 * 1024 * 1024;
const MAX_THUMB_BYTES = 1024 * 1024;
/** Uploads not yet saved into the portfolio are kept this long before clean-up. */
const UNSAVED_UPLOAD_GRACE_MS = 24 * 60 * 60 * 1000;
const MEDIA_PATH = /^\/media\/([a-f0-9-]{36})(-thumb)?\.jpg$/;

type MediaMetadata = { uploadedAt: number };

function withCookie(response: Response, cookie: string): Response {
  response.headers.append("set-cookie", cookie);
  return response;
}

async function readJson(request: Request): Promise<unknown> {
  const text = await request.text();
  if (text.length > MAX_JSON_BYTES) throw new Error("too large");
  return JSON.parse(text);
}

async function isJpeg(file: File): Promise<boolean> {
  const head = new Uint8Array(await file.slice(0, 3).arrayBuffer());
  return head[0] === 0xff && head[1] === 0xd8 && head[2] === 0xff;
}

export async function handlePublicContent(env: AuthEnv): Promise<Response> {
  const [jobs, portfolio] = await Promise.all([
    env.SITE_CONTENT.get<PublishedContent["jobs"]>(JOBS_KEY, "json"),
    env.SITE_CONTENT.get<PublishedContent["portfolio"]>(PORTFOLIO_KEY, "json"),
  ]);
  const content: PublishedContent = { jobs: jobs ?? null, portfolio: portfolio ?? null };
  return json(content);
}

export async function serveMedia(pathname: string, env: AuthEnv): Promise<Response | null> {
  const match = MEDIA_PATH.exec(pathname);
  if (!match) return null;
  const { value } = await env.SITE_CONTENT.getWithMetadata<MediaMetadata>(
    `${MEDIA_PREFIX}${match[1]}${match[2] ?? ""}`,
    "stream",
  );
  if (!value) return new Response("Not found", { status: 404 });
  return new Response(value, {
    headers: {
      "content-type": "image/jpeg",
      "cache-control": "public, max-age=31536000, immutable",
      "x-content-type-options": "nosniff",
    },
  });
}

/** Deletes uploads that are no longer in the portfolio (older than the grace period). */
async function removeUnusedMedia(env: AuthEnv, portfolio: PortfolioContent): Promise<void> {
  const used = new Set(
    [portfolio.latestWork, ...portfolio.groups.map((group) => group.photos)]
      .flat()
      .map((src) => MEDIA_PATH.exec(src)?.[1])
      .filter(Boolean),
  );
  let cursor: string | undefined;
  do {
    const page = await env.SITE_CONTENT.list<MediaMetadata>({ prefix: MEDIA_PREFIX, cursor });
    for (const key of page.keys) {
      const id = key.name.slice(MEDIA_PREFIX.length).replace(/-thumb$/, "");
      const uploadedAt = key.metadata?.uploadedAt ?? 0;
      if (!used.has(id) && Date.now() - uploadedAt > UNSAVED_UPLOAD_GRACE_MS) {
        await env.SITE_CONTENT.delete(key.name);
      }
    }
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor);
}

async function handleLogin(request: Request, env: AuthEnv): Promise<Response> {
  if (!(await isPasswordConfigured(env))) {
    return json({ success: false, error: "The admin password has not been set up yet." }, 503);
  }
  if (await isLoginLocked(request, env)) {
    return json({ success: false, error: "Too many attempts. Please wait 15 minutes and try again." }, 429);
  }
  const body = (await readJson(request).catch(() => ({}))) as { password?: unknown };
  const password = typeof body.password === "string" ? body.password : "";
  if (!password || !(await verifyPassword(env, password))) {
    await recordFailedLogin(request, env);
    return json({ success: false, error: "That password is not correct." }, 401);
  }
  await clearFailedLogins(request, env);
  return withCookie(json({ success: true }), await createSessionCookie(env));
}

async function handleChangePassword(request: Request, env: AuthEnv): Promise<Response> {
  const body = (await readJson(request).catch(() => ({}))) as { current?: unknown; next?: unknown };
  const current = typeof body.current === "string" ? body.current : "";
  const next = typeof body.next === "string" ? body.next : "";
  if (!(await verifyPassword(env, current))) {
    return json({ success: false, error: "The current password is not correct." }, 400);
  }
  if (next.length < MIN_PASSWORD_LENGTH) {
    return json({ success: false, error: `The new password needs at least ${MIN_PASSWORD_LENGTH} characters.` }, 400);
  }
  await setPassword(env, next);
  return withCookie(json({ success: true }), await createSessionCookie(env));
}

async function handleUpload(request: Request, env: AuthEnv): Promise<Response> {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ success: false, error: "The upload could not be read." }, 400);
  }
  const photo = form.get("photo");
  const thumb = form.get("thumb");
  if (!(photo instanceof File) || !(thumb instanceof File)) {
    return json({ success: false, error: "The upload is missing a photo." }, 400);
  }
  if (photo.size > MAX_PHOTO_BYTES || thumb.size > MAX_THUMB_BYTES) {
    return json({ success: false, error: "That photo is too large." }, 413);
  }
  if (!(await isJpeg(photo)) || !(await isJpeg(thumb))) {
    return json({ success: false, error: "Photos must be JPEG images." }, 400);
  }

  const id = crypto.randomUUID();
  const metadata: MediaMetadata = { uploadedAt: Date.now() };
  await Promise.all([
    env.SITE_CONTENT.put(`${MEDIA_PREFIX}${id}`, await photo.arrayBuffer(), { metadata }),
    env.SITE_CONTENT.put(`${MEDIA_PREFIX}${id}-thumb`, await thumb.arrayBuffer(), { metadata }),
  ]);
  return json({ success: true, src: `/media/${id}.jpg` });
}

export async function handleAdmin(request: Request, env: AuthEnv, pathname: string): Promise<Response> {
  const action = pathname.slice("/api/admin/".length);
  const method = request.method;

  if (method !== "GET") {
    const blocked = rejectOversized(request) ?? rejectUntrustedOrigin(request);
    if (blocked) return blocked;
  }

  if (action === "login" && method === "POST") return handleLogin(request, env);
  if (action === "logout" && method === "POST") return withCookie(json({ success: true }), clearSessionCookie);

  const signedIn = await hasValidSession(request, env);
  if (action === "session" && method === "GET") return json({ success: true, signedIn });
  if (!signedIn) return json({ success: false, error: "Please sign in again." }, 401);

  if (action === "password" && method === "POST") return handleChangePassword(request, env);
  if (action === "media" && method === "POST") return handleUpload(request, env);

  if ((action === "jobs" || action === "portfolio") && method === "PUT") {
    let body: unknown;
    try {
      body = await readJson(request);
    } catch {
      return json({ success: false, error: "The changes could not be read." }, 400);
    }

    if (action === "jobs") {
      const parsed = parseJobs(body);
      if (!parsed.ok) return json({ success: false, error: parsed.error }, 400);
      await env.SITE_CONTENT.put(JOBS_KEY, JSON.stringify(parsed.value));
      return json({ success: true, jobs: parsed.value });
    }

    const parsed = parsePortfolio(body);
    if (!parsed.ok) return json({ success: false, error: parsed.error }, 400);
    await env.SITE_CONTENT.put(PORTFOLIO_KEY, JSON.stringify(parsed.value));
    await removeUnusedMedia(env, parsed.value);
    return json({ success: true, portfolio: parsed.value });
  }

  return json({ success: false, error: "Not found." }, 404);
}
