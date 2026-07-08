export const MAX_FIELD_LENGTH = 1000;
export const MAX_FILE_SIZE = 5 * 1024 * 1024;
export const ALLOWED_FILE_TYPES = new Set(["application/pdf", "image/jpeg", "image/png"]);

export function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  const stripped = value
    .replace(/<\s*(script|style|iframe|object|embed)\b[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, "")
    .replace(/<\/?[a-z][^>]*>/gi, "");
  return stripped.trim().slice(0, MAX_FIELD_LENGTH);
}

export function isValidEmail(email: string): boolean {
  return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email) && email.length <= 254;
}

export function validateFile(file: File): string | null {
  if (file.size === 0) return null;
  if (file.size > MAX_FILE_SIZE) return "File exceeds the 5MB size limit.";
  if (!ALLOWED_FILE_TYPES.has(file.type)) return "Invalid file type. Please upload a PDF, JPG, or PNG file.";
  return null;
}

export function isHoneypotTriggered(value: unknown): boolean {
  return sanitize(value).length > 0;
}
