const API_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
  "x-content-type-options": "nosniff",
  "x-frame-options": "DENY",
  "referrer-policy": "no-referrer",
  "content-security-policy": "default-src 'none'; frame-ancestors 'none'",
};

export function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: API_HEADERS,
  });
}

export type FormEnv = {
  FORM_RECIPIENT_EMAIL?: string;
  FORM_FROM_EMAIL?: string;
  FORM_FROM_NAME?: string;
  FORM_FORCE_DEMO?: string;
  MAILCHANNELS_API_KEY?: string;
};

/** True while email is not set up; submissions then go to the admin inbox only. */
export function isDemoMode(env: FormEnv): boolean {
  if (env.FORM_FORCE_DEMO === "true") return true;
  return !sanitizeEmail(env.FORM_RECIPIENT_EMAIL) || !(env.MAILCHANNELS_API_KEY ?? "").trim();
}

export const NOT_SAVED_ERROR = "We could not receive your submission. Please try again or contact us directly.";

function sanitizeEmail(value: string | undefined): string {
  return (value ?? "").trim();
}

export function getMailConfig(env: FormEnv) {
  const recipient = sanitizeEmail(env.FORM_RECIPIENT_EMAIL);
  const fromEmail = sanitizeEmail(env.FORM_FROM_EMAIL) || "noreply@promopower.com.sg";
  const fromName = (env.FORM_FROM_NAME ?? "PromoPower Website").trim() || "PromoPower Website";
  const apiKey = (env.MAILCHANNELS_API_KEY ?? "").trim();
  return { recipient, fromEmail, fromName, apiKey };
}
