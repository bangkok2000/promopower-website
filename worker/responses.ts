export function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

export type FormEnv = {
  FORM_RECIPIENT_EMAIL?: string;
  FORM_FROM_EMAIL?: string;
  FORM_FROM_NAME?: string;
  FORM_FORCE_DEMO?: string;
};

export function isDemoMode(env: FormEnv): boolean {
  if (env.FORM_FORCE_DEMO === "true") return true;
  return !sanitizeEmail(env.FORM_RECIPIENT_EMAIL);
}

function sanitizeEmail(value: string | undefined): string {
  return (value ?? "").trim();
}

export function getMailConfig(env: FormEnv) {
  const recipient = sanitizeEmail(env.FORM_RECIPIENT_EMAIL);
  const fromEmail = sanitizeEmail(env.FORM_FROM_EMAIL) || "noreply@promopower.com.sg";
  const fromName = (env.FORM_FROM_NAME ?? "PromoPower Website").trim() || "PromoPower Website";
  return { recipient, fromEmail, fromName };
}
