"use server";

export interface ActionResult {
  success: boolean;
  timestamp?: string;
  error?: string;
}

const MAX_FIELD_LENGTH = 1000;

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, MAX_FIELD_LENGTH);
}

export async function submitJobseekerApplication(prevState: ActionResult | null, formData: FormData): Promise<ActionResult> {
  const name = sanitize(formData.get("fullName"));
  const email = sanitize(formData.get("email"));
  const phone = sanitize(formData.get("phone"));

  if (!name || !email || !phone) {
    return { success: false, error: "Full name, email, and phone are required." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please provide a valid email address." };
  }

  const payload: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string") {
      payload[key] = sanitize(value);
    }
  }
  
  console.log("🔥 [SERVER] Received Jobseeker Application:", payload);
  
  return { success: true, timestamp: new Date().toISOString() };
}

export async function submitContactInquiry(prevState: ActionResult | null, formData: FormData): Promise<ActionResult> {
  const name = sanitize(formData.get("fullName"));
  const email = sanitize(formData.get("email"));

  if (!name || !email) {
    return { success: false, error: "Full name and email are required." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please provide a valid email address." };
  }

  const payload: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string") {
      payload[key] = sanitize(value);
    }
  }
  
  console.log("💼 [SERVER] Received Corporate Inquiry:", payload);
  
  return { success: true, timestamp: new Date().toISOString() };
}
