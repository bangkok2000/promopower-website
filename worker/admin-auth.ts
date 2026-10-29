const PASSWORD_KEY = "auth:password";
const SESSION_KEY_KEY = "auth:session-key";
const COOKIE_NAME = "__Host-pp_admin";
const SESSION_SECONDS = 12 * 60 * 60;
const PBKDF2_ITERATIONS = 100_000;
const MAX_FAILED_LOGINS = 10;
const FAILED_LOGIN_WINDOW_SECONDS = 15 * 60;
export const MIN_PASSWORD_LENGTH = 10;

export type AuthEnv = {
  SITE_CONTENT: KVNamespace;
  /** First-time password, until the team sets their own in the portal. */
  ADMIN_PASSWORD?: string;
};

type StoredPassword = { salt: string; hash: string; iterations: number };

const encoder = new TextEncoder();

const toHex = (buffer: ArrayBuffer) =>
  Array.from(new Uint8Array(buffer), (byte) => byte.toString(16).padStart(2, "0")).join("");

const fromHex = (hex: string) => new Uint8Array((hex.match(/.{2}/g) ?? []).map((pair) => parseInt(pair, 16)));

function randomHex(bytes: number): string {
  return toHex(crypto.getRandomValues(new Uint8Array(bytes)).buffer);
}

function equalBytes(a: Uint8Array, b: Uint8Array): boolean {
  return a.byteLength === b.byteLength && crypto.subtle.timingSafeEqual(a, b);
}

async function pbkdf2(password: string, salt: Uint8Array, iterations: number): Promise<Uint8Array> {
  const key = await crypto.subtle.importKey("raw", encoder.encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", hash: "SHA-256", salt: salt as BufferSource, iterations },
    key,
    256,
  );
  return new Uint8Array(bits);
}

async function sha256(value: string): Promise<Uint8Array> {
  return new Uint8Array(await crypto.subtle.digest("SHA-256", encoder.encode(value)));
}

export async function verifyPassword(env: AuthEnv, password: string): Promise<boolean> {
  const stored = await env.SITE_CONTENT.get<StoredPassword>(PASSWORD_KEY, "json");
  if (stored) {
    const actual = await pbkdf2(password, fromHex(stored.salt), stored.iterations);
    return equalBytes(actual, fromHex(stored.hash));
  }
  const initial = env.ADMIN_PASSWORD?.trim();
  if (!initial) return false;
  return equalBytes(await sha256(password), await sha256(initial));
}

export async function isPasswordConfigured(env: AuthEnv): Promise<boolean> {
  return Boolean(env.ADMIN_PASSWORD?.trim()) || Boolean(await env.SITE_CONTENT.get(PASSWORD_KEY, "text"));
}

/** Saves a new password and signs out every existing session. */
export async function setPassword(env: AuthEnv, password: string): Promise<void> {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const hash = await pbkdf2(password, salt, PBKDF2_ITERATIONS);
  const stored: StoredPassword = {
    salt: toHex(salt.buffer),
    hash: toHex(hash.buffer as ArrayBuffer),
    iterations: PBKDF2_ITERATIONS,
  };
  await env.SITE_CONTENT.put(PASSWORD_KEY, JSON.stringify(stored));
  await env.SITE_CONTENT.put(SESSION_KEY_KEY, randomHex(32));
}

async function sessionKey(env: AuthEnv): Promise<CryptoKey> {
  let secret = await env.SITE_CONTENT.get(SESSION_KEY_KEY, "text");
  if (!secret) {
    secret = randomHex(32);
    await env.SITE_CONTENT.put(SESSION_KEY_KEY, secret);
  }
  return crypto.subtle.importKey("raw", fromHex(secret), { name: "HMAC", hash: "SHA-256" }, false, [
    "sign",
    "verify",
  ]);
}

async function sign(env: AuthEnv, expires: number): Promise<string> {
  const signature = await crypto.subtle.sign("HMAC", await sessionKey(env), encoder.encode(`admin:${expires}`));
  return toHex(signature);
}

export async function createSessionCookie(env: AuthEnv): Promise<string> {
  const expires = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  const token = `${expires}.${await sign(env, expires)}`;
  return `${COOKIE_NAME}=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${SESSION_SECONDS}`;
}

export const clearSessionCookie = `${COOKIE_NAME}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;

export async function hasValidSession(request: Request, env: AuthEnv): Promise<boolean> {
  const cookie = request.headers.get("cookie") ?? "";
  const token = cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${COOKIE_NAME}=`))
    ?.slice(COOKIE_NAME.length + 1);
  if (!token) return false;

  const [expiresText, signature] = token.split(".");
  const expires = Number(expiresText);
  if (!Number.isInteger(expires) || expires < Date.now() / 1000 || !/^[a-f0-9]{64}$/.test(signature ?? "")) {
    return false;
  }
  return equalBytes(fromHex(await sign(env, expires)), fromHex(signature));
}

const failKey = (request: Request) => `auth:fail:${request.headers.get("cf-connecting-ip") ?? "unknown"}`;

export async function isLoginLocked(request: Request, env: AuthEnv): Promise<boolean> {
  const count = Number((await env.SITE_CONTENT.get(failKey(request), "text")) ?? "0");
  return count >= MAX_FAILED_LOGINS;
}

export async function recordFailedLogin(request: Request, env: AuthEnv): Promise<void> {
  const key = failKey(request);
  const count = Number((await env.SITE_CONTENT.get(key, "text")) ?? "0") + 1;
  await env.SITE_CONTENT.put(key, String(count), { expirationTtl: FAILED_LOGIN_WINDOW_SECONDS });
}

export async function clearFailedLogins(request: Request, env: AuthEnv): Promise<void> {
  await env.SITE_CONTENT.delete(failKey(request));
}
