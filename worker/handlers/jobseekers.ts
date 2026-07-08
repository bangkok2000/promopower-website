import { ALLOWED_FILE_TYPES, isHoneypotTriggered, isValidEmail, MAX_FILE_SIZE, sanitize } from "../../lib/form-validation";
import { fileToAttachment, sendMail } from "../mail";
import { getMailConfig, isDemoMode, json, type FormEnv } from "../responses";

function formatJobseekerEmail(data: Record<string, string>, hasAttachment: boolean) {
  return [
    "New jobseeker application from promopower.com.sg",
    "",
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Date of birth: ${data.dateOfBirth || "—"}`,
    `Age: ${data.age || "—"}`,
    `Gender: ${data.gender || "—"}`,
    `Qualification: ${data.qualification || "—"}`,
    `Portfolio: ${data.portfolio || "—"}`,
    "",
    "Experience / strengths:",
    data.traits || "—",
    "",
    `Attachment included: ${hasAttachment ? "Yes" : "No"}`,
    `PDPA consent: ${data.pdpaConsent}`,
    `Submitted at: ${new Date().toISOString()}`,
  ].join("\n");
}

export async function handleJobseekers(request: Request, env: FormEnv): Promise<Response> {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return json({ success: false, error: "Invalid submission payload." }, 400);
  }

  if (isHoneypotTriggered(formData.get("companyWebsite"))) {
    return json({ success: true, timestamp: new Date().toISOString() });
  }

  const data = {
    fullName: sanitize(formData.get("fullName")),
    email: sanitize(formData.get("email")),
    phone: sanitize(formData.get("phone")),
    dateOfBirth: sanitize(formData.get("dateOfBirth")),
    age: sanitize(formData.get("age")),
    gender: sanitize(formData.get("gender")),
    qualification: sanitize(formData.get("qualification")),
    portfolio: sanitize(formData.get("portfolio")),
    traits: sanitize(formData.get("traits")),
    pdpaConsent: sanitize(formData.get("pdpaConsent")),
  };

  if (!data.fullName || !data.email || !data.phone) {
    return json({ success: false, error: "Full name, email, and phone are required." }, 400);
  }

  if (!isValidEmail(data.email)) {
    return json({ success: false, error: "Please provide a valid email address." }, 400);
  }

  if (data.pdpaConsent !== "true") {
    return json({ success: false, error: "Please accept the Data Protection Policy before submitting." }, 400);
  }

  const fileEntry = formData.get("compCard");
  let attachment: Awaited<ReturnType<typeof fileToAttachment>> | undefined;

  if (fileEntry instanceof File && fileEntry.size > 0) {
    if (fileEntry.size > MAX_FILE_SIZE) {
      return json({ success: false, error: "File exceeds the 5MB size limit." }, 400);
    }
    if (!ALLOWED_FILE_TYPES.has(fileEntry.type)) {
      return json({ success: false, error: "Invalid file type. Please upload a PDF, JPG, or PNG file." }, 400);
    }
    attachment = await fileToAttachment(fileEntry);
  }

  if (isDemoMode(env)) {
    console.info("[DEMO] Jobseeker application received", { email: data.email, hasAttachment: Boolean(attachment) });
    return json({ success: true, timestamp: new Date().toISOString(), demo: true });
  }

  const { recipient, fromEmail, fromName } = getMailConfig(env);
  const result = await sendMail({
    to: recipient,
    fromEmail,
    fromName,
    replyTo: data.email,
    subject: "PromoPower — Jobseeker application",
    text: formatJobseekerEmail(data, Boolean(attachment)),
    attachments: attachment ? [attachment] : undefined,
  });

  if (!result.ok) {
    return json({ success: false, error: result.error }, 502);
  }

  return json({ success: true, timestamp: new Date().toISOString() });
}
