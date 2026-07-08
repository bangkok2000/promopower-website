import { isHoneypotTriggered, isValidEmail, sanitize, validateFile } from "@/lib/form-validation";

export interface FormSubmitResult {
  success: boolean;
  timestamp?: string;
  error?: string;
  demo?: boolean;
}

async function parseApiResponse(response: Response): Promise<FormSubmitResult> {
  const result = (await response.json()) as FormSubmitResult & { error?: string };

  if (!response.ok || !result.success) {
    return {
      success: false,
      error: result.error ?? "Unable to send your submission. Please try again or email us directly.",
    };
  }

  return {
    success: true,
    timestamp: result.timestamp ?? new Date().toISOString(),
    demo: result.demo,
  };
}

export async function submitContactInquiry(formData: FormData): Promise<FormSubmitResult> {
  if (isHoneypotTriggered(formData.get("companyWebsite"))) {
    return { success: true, timestamp: new Date().toISOString() };
  }

  const payload = {
    serviceType: sanitize(formData.get("serviceType")),
    headcount: sanitize(formData.get("headcount")),
    campaignDate: sanitize(formData.get("campaignDate")),
    location: sanitize(formData.get("location")),
    campaignBrief: sanitize(formData.get("campaignBrief")),
    fullName: sanitize(formData.get("fullName")),
    company: sanitize(formData.get("company")),
    email: sanitize(formData.get("email")),
    phone: sanitize(formData.get("phone")),
    pdpaConsent: sanitize(formData.get("pdpaConsent")),
    companyWebsite: sanitize(formData.get("companyWebsite")),
  };

  if (!payload.fullName || !payload.email) {
    return { success: false, error: "Full name and email are required." };
  }

  if (!isValidEmail(payload.email)) {
    return { success: false, error: "Please provide a valid email address." };
  }

  if (payload.pdpaConsent !== "true") {
    return { success: false, error: "Please accept the Data Protection Policy before submitting." };
  }

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return parseApiResponse(response);
}

export async function submitJobseekerApplication(formData: FormData): Promise<FormSubmitResult> {
  if (isHoneypotTriggered(formData.get("companyWebsite"))) {
    return { success: true, timestamp: new Date().toISOString() };
  }

  const fullName = sanitize(formData.get("fullName"));
  const email = sanitize(formData.get("email"));
  const phone = sanitize(formData.get("phone"));
  const pdpaConsent = sanitize(formData.get("pdpaConsent"));

  if (!fullName || !email || !phone) {
    return { success: false, error: "Full name, email, and phone are required." };
  }

  if (!isValidEmail(email)) {
    return { success: false, error: "Please provide a valid email address." };
  }

  if (pdpaConsent !== "true") {
    return { success: false, error: "Please accept the Data Protection Policy before submitting." };
  }

  const file = formData.get("compCard");
  if (file instanceof File && file.size > 0) {
    const fileError = validateFile(file);
    if (fileError) return { success: false, error: fileError };
  }

  const response = await fetch("/api/jobseekers", {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  });

  return parseApiResponse(response);
}
