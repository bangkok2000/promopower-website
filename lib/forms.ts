export interface FormSubmitResult {
  success: boolean;
  timestamp?: string;
  error?: string;
  demo?: boolean;
}

const MAX_FIELD_LENGTH = 1000;
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_FILE_TYPES = new Set(["application/pdf", "image/jpeg", "image/png"]);

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, MAX_FIELD_LENGTH);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateFile(file: File): string | null {
  if (file.size === 0) return null;
  if (file.size > MAX_FILE_SIZE) return "File exceeds the 5MB size limit.";
  if (!ALLOWED_FILE_TYPES.has(file.type)) return "Invalid file type. Please upload a PDF, JPG, or PNG file.";
  return null;
}

function shouldUseDemoMode(): boolean {
  if (process.env.NEXT_PUBLIC_FORM_DEMO_MODE === "true") return true;
  if (!process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY) return true;
  return false;
}

async function postToWeb3Forms(formData: FormData, subject: string): Promise<FormSubmitResult> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return { success: false, error: "Form delivery is not configured yet." };
  }

  const payload = new FormData();
  payload.append("access_key", accessKey);
  payload.append("subject", subject);

  for (const [key, value] of formData.entries()) {
    if (value instanceof File) {
      if (value.size > 0) payload.append(key, value);
      continue;
    }
    payload.append(key, sanitize(value));
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: payload,
    headers: { Accept: "application/json" },
  });

  const result = (await response.json()) as { success?: boolean; message?: string };

  if (!response.ok || !result.success) {
    return {
      success: false,
      error: result.message ?? "Unable to send your submission. Please try again or email us directly.",
    };
  }

  return { success: true, timestamp: new Date().toISOString() };
}

export async function submitContactInquiry(formData: FormData): Promise<FormSubmitResult> {
  const name = sanitize(formData.get("fullName"));
  const email = sanitize(formData.get("email"));

  if (!name || !email) {
    return { success: false, error: "Full name and email are required." };
  }

  if (!isValidEmail(email)) {
    return { success: false, error: "Please provide a valid email address." };
  }

  if (shouldUseDemoMode()) {
    if (process.env.NODE_ENV === "development") {
      console.info("[DEMO] Contact inquiry", Object.fromEntries(formData.entries()));
    }
    return { success: true, timestamp: new Date().toISOString(), demo: true };
  }

  return postToWeb3Forms(formData, "PromoPower — Contact enquiry");
}

export async function submitJobseekerApplication(formData: FormData): Promise<FormSubmitResult> {
  const name = sanitize(formData.get("fullName"));
  const email = sanitize(formData.get("email"));
  const phone = sanitize(formData.get("phone"));
  const pdpaConsent = sanitize(formData.get("pdpaConsent"));

  if (!name || !email || !phone) {
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

  if (shouldUseDemoMode()) {
    if (process.env.NODE_ENV === "development") {
      console.info("[DEMO] Jobseeker application", Object.fromEntries(formData.entries()));
    }
    return { success: true, timestamp: new Date().toISOString(), demo: true };
  }

  return postToWeb3Forms(formData, "PromoPower — Jobseeker application");
}
