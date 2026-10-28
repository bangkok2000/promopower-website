import { json } from "./responses";

const MAX_BODY_BYTES = 6 * 1024 * 1024;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_POSTS = 5;

const recentPosts = new Map<string, number[]>();

const EXTRA_ORIGINS = new Set(["https://promopower.com.sg", "https://www.promopower.com.sg"]);

export function rejectOversized(request: Request): Response | null {
  const length = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(length) && length > MAX_BODY_BYTES) {
    return json({ success: false, error: "The submission is too large." }, 413);
  }
  return null;
}

export function rejectUntrustedOrigin(request: Request): Response | null {
  const origin = request.headers.get("origin");
  if (!origin) {
    return json({ success: false, error: "This form only accepts submissions from the PromoPower website." }, 403);
  }

  let requestOrigin = "";
  try {
    requestOrigin = new URL(request.url).origin;
  } catch {
    return json({ success: false, error: "This form only accepts submissions from the PromoPower website." }, 403);
  }

  if (origin !== requestOrigin && !EXTRA_ORIGINS.has(origin)) {
    return json({ success: false, error: "This form only accepts submissions from the PromoPower website." }, 403);
  }

  return null;
}

export function rejectRateLimit(request: Request): Response | null {
  const ip = request.headers.get("cf-connecting-ip") ?? "unknown";
  const now = Date.now();
  const stamps = (recentPosts.get(ip) ?? []).filter((stamp) => now - stamp < WINDOW_MS);
  if (stamps.length >= MAX_POSTS) {
    return json({ success: false, error: "Too many submissions. Please wait a few minutes or email us." }, 429);
  }
  stamps.push(now);
  recentPosts.set(ip, stamps);
  return null;
}

export function guardFormPost(request: Request): Response | null {
  return rejectOversized(request) ?? rejectUntrustedOrigin(request) ?? rejectRateLimit(request);
}
