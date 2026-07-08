import { isHoneypotTriggered, isValidEmail, sanitize } from "../../lib/form-validation";
import { sendMail } from "../mail";
import { getMailConfig, isDemoMode, json, type FormEnv } from "../responses";

type ContactPayload = {
  serviceType?: unknown;
  headcount?: unknown;
  campaignDate?: unknown;
  location?: unknown;
  campaignBrief?: unknown;
  fullName?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  pdpaConsent?: unknown;
  companyWebsite?: unknown;
};

function formatContactEmail(data: Record<string, string>) {
  return [
    "New contact enquiry from promopower.com.sg",
    "",
    `Service: ${data.serviceType || "—"}`,
    `Headcount: ${data.headcount || "—"}`,
    `Campaign start: ${data.campaignDate || "—"}`,
    `Location(s): ${data.location || "—"}`,
    "",
    `Name: ${data.fullName}`,
    `Company: ${data.company || "—"}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "—"}`,
    "",
    "Campaign brief:",
    data.campaignBrief || "—",
    "",
    `PDPA consent: ${data.pdpaConsent}`,
    `Submitted at: ${new Date().toISOString()}`,
  ].join("\n");
}

export async function handleContact(request: Request, env: FormEnv): Promise<Response> {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return json({ success: false, error: "Invalid submission payload." }, 400);
  }

  if (isHoneypotTriggered(payload.companyWebsite)) {
    return json({ success: true, timestamp: new Date().toISOString() });
  }

  const data = {
    serviceType: sanitize(payload.serviceType),
    headcount: sanitize(payload.headcount),
    campaignDate: sanitize(payload.campaignDate),
    location: sanitize(payload.location),
    campaignBrief: sanitize(payload.campaignBrief),
    fullName: sanitize(payload.fullName),
    company: sanitize(payload.company),
    email: sanitize(payload.email),
    phone: sanitize(payload.phone),
    pdpaConsent: sanitize(payload.pdpaConsent),
  };

  if (!data.fullName || !data.email) {
    return json({ success: false, error: "Full name and email are required." }, 400);
  }

  if (!isValidEmail(data.email)) {
    return json({ success: false, error: "Please provide a valid email address." }, 400);
  }

  if (data.pdpaConsent !== "true") {
    return json({ success: false, error: "Please accept the Data Protection Policy before submitting." }, 400);
  }

  if (isDemoMode(env)) {
    console.info("[DEMO] Contact enquiry received", { email: data.email, serviceType: data.serviceType });
    return json({ success: true, timestamp: new Date().toISOString(), demo: true });
  }

  const { recipient, fromEmail, fromName } = getMailConfig(env);
  const result = await sendMail({
    to: recipient,
    fromEmail,
    fromName,
    replyTo: data.email,
    subject: "PromoPower — Contact enquiry",
    text: formatContactEmail(data),
  });

  if (!result.ok) {
    return json({ success: false, error: result.error }, 502);
  }

  return json({ success: true, timestamp: new Date().toISOString() });
}
