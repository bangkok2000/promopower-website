import { formLabel } from "../../lib/form-labels";
import {
  fileHasAllowedSignature,
  isBelowMinimumAge,
  isHoneypotTriggered,
  isValidEmail,
  sanitize,
  validateFile,
} from "../../lib/form-validation";
import { saveSubmission, type InboxEnv } from "../inbox";
import { fileToAttachment, sendMail } from "../mail";
import { getMailConfig, isDemoMode, json, type FormEnv } from "../responses";

function formatJobseekerEmail(data: Record<string, string>, hasAttachment: boolean) {
  return [
    "New jobseeker application from promopower.com.sg",
    "",
    `Interested to be: ${data.position || "—"}`,
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

export async function handleJobseekers(request: Request, env: FormEnv & InboxEnv): Promise<Response> {
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
    position: sanitize(formData.get("position")),
    fullName: sanitize(formData.get("fullName")),
    email: sanitize(formData.get("email")),
    phone: sanitize(formData.get("phone")),
    dateOfBirth: sanitize(formData.get("dateOfBirth")),
    age: sanitize(formData.get("age")),
    gender: formLabel("gender", sanitize(formData.get("gender"))),
    qualification: formLabel("qualification", sanitize(formData.get("qualification"))),
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

  if (isBelowMinimumAge(data.age, data.dateOfBirth)) {
    return json({ success: false, error: "Applicants must be 16 or older." }, 400);
  }

  const fileEntry = formData.get("compCard");
  let attachment: Awaited<ReturnType<typeof fileToAttachment>> | undefined;
  let upload: File | undefined;

  if (fileEntry instanceof File && fileEntry.size > 0) {
    const fileError = validateFile(fileEntry);
    if (fileError) return json({ success: false, error: fileError }, 400);
    if (!(await fileHasAllowedSignature(fileEntry))) {
      return json({ success: false, error: "Invalid file type. Please upload a PDF, JPG, or PNG file." }, 400);
    }
    attachment = await fileToAttachment(fileEntry);
    upload = fileEntry;
  }

  const saved = await saveSubmission(
    env,
    "jobseeker",
    [
      ["Interested to be", data.position],
      ["Name", data.fullName],
      ["Email", data.email],
      ["Phone", data.phone],
      ["Date of birth", data.dateOfBirth],
      ["Age", data.age],
      ["Gender", data.gender],
      ["Qualification", data.qualification],
      ["Portfolio", data.portfolio],
      ["Experience / strengths", data.traits],
      ["Data protection consent", "Given on the form"],
    ],
    { name: data.fullName, email: data.email, subject: data.position },
    upload && attachment
      ? { name: attachment.filename, type: upload.type, bytes: await upload.arrayBuffer() }
      : undefined,
  );

  if (isDemoMode(env)) {
    console.info("[DEMO] Jobseeker application received");
    return json({ success: true, timestamp: new Date().toISOString(), demo: true });
  }

  const { recipient, fromEmail, fromName } = getMailConfig(env);
  const result = await sendMail({
    to: recipient,
    fromEmail,
    fromName,
    replyTo: data.email,
    subject: data.position
      ? `PromoPower — Jobseeker application: ${data.position}`
      : "PromoPower — Jobseeker application",
    text: formatJobseekerEmail(data, Boolean(attachment)),
    attachments: attachment ? [attachment] : undefined,
  });

  if (!result.ok && !saved) {
    return json({ success: false, error: result.error }, 502);
  }
  if (!result.ok) console.error("Jobseeker email failed; application kept in admin inbox");

  return json({ success: true, timestamp: new Date().toISOString() });
}
