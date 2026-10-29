import { formLabel } from "../../lib/form-labels";
import { isHoneypotTriggered, isValidEmail, sanitize } from "../../lib/form-validation";
import { saveSubmission, type InboxEnv } from "../inbox";
import { sendMail } from "../mail";
import { getMailConfig, isDemoMode, json, NOT_SAVED_ERROR, type FormEnv } from "../responses";

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
    "Campaign details:",
    data.campaignBrief || "—",
    "",
    `PDPA consent: ${data.pdpaConsent}`,
    `Submitted at: ${new Date().toISOString()}`,
  ].join("\n");
}

export async function handleContact(request: Request, env: FormEnv & InboxEnv): Promise<Response> {
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
    serviceType: formLabel("serviceType", sanitize(payload.serviceType)),
    headcount: formLabel("headcount", sanitize(payload.headcount)),
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

  const saved = await saveSubmission(
    env,
    "contact",
    [
      ["Service", data.serviceType],
      ["Headcount", data.headcount],
      ["Campaign start", data.campaignDate],
      ["Location(s)", data.location],
      ["Name", data.fullName],
      ["Company", data.company],
      ["Email", data.email],
      ["Phone", data.phone],
      ["Campaign details", data.campaignBrief],
      ["Data protection consent", "Given on the form"],
    ],
    { name: data.fullName, email: data.email, subject: [data.company, data.serviceType].filter(Boolean).join(" · ") },
  );

  if (isDemoMode(env)) {
    if (!saved) return json({ success: false, error: NOT_SAVED_ERROR }, 502);
    return json({ success: true, timestamp: new Date().toISOString() });
  }

  const { recipient, fromEmail, fromName, apiKey } = getMailConfig(env);
  const result = await sendMail({
    apiKey,
    to: recipient,
    fromEmail,
    fromName,
    replyTo: data.email,
    subject: "PromoPower — Contact enquiry",
    text: formatContactEmail(data),
  });

  if (!result.ok && !saved) {
    return json({ success: false, error: result.error }, 502);
  }
  if (!result.ok) console.error("Contact email failed; enquiry kept in admin inbox");

  return json({ success: true, timestamp: new Date().toISOString() });
}
