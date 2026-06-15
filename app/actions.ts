"use server";

import { FORM_DEMO_MODE } from "@/lib/site";

export interface ActionResult {
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

function buildStringPayload(formData: FormData): Record<string, string> {
  const payload: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string") {
      payload[key] = sanitize(value);
    }
  }
  return payload;
}

function extractFileMetadata(formData: FormData, fieldName: string): Record<string, string> | null {
  const file = formData.get(fieldName);
  if (!(file instanceof File) || file.size === 0) {
    return null;
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error("File exceeds the 5MB size limit.");
  }

  if (!ALLOWED_FILE_TYPES.has(file.type)) {
    throw new Error("Invalid file type. Please upload a PDF, JPG, or PNG file.");
  }

  return {
    fileName: file.name.slice(0, 255),
    fileSize: String(file.size),
    fileType: file.type,
  };
}

function logDemoSubmission(label: string, payload: Record<string, string>) {
  if (process.env.NODE_ENV === "development") {
    console.info(`[DEMO] ${label}`, payload);
  }
}

export async function submitJobseekerApplication(
  prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  try {
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

    const payload = buildStringPayload(formData);
    const fileMetadata = extractFileMetadata(formData, "compCard");
    if (fileMetadata) {
      Object.assign(payload, fileMetadata);
    }

    if (FORM_DEMO_MODE) {
      logDemoSubmission("Jobseeker application", payload);
    }

    return {
      success: true,
      timestamp: new Date().toISOString(),
      demo: FORM_DEMO_MODE,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "An error occurred. Please try again.",
    };
  }
}

export async function submitContactInquiry(
  prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  try {
    const name = sanitize(formData.get("fullName"));
    const email = sanitize(formData.get("email"));

    if (!name || !email) {
      return { success: false, error: "Full name and email are required." };
    }

    if (!isValidEmail(email)) {
      return { success: false, error: "Please provide a valid email address." };
    }

    const payload = buildStringPayload(formData);

    if (FORM_DEMO_MODE) {
      logDemoSubmission("Contact inquiry", payload);
    }

    return {
      success: true,
      timestamp: new Date().toISOString(),
      demo: FORM_DEMO_MODE,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "An error occurred. Please try again.",
    };
  }
}
