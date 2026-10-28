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
  const extension = file.name.toLowerCase();
  const extensionOk =
    extension.endsWith(".pdf") ||
    extension.endsWith(".jpg") ||
    extension.endsWith(".jpeg") ||
    extension.endsWith(".png");
  if (!extensionOk || !ALLOWED_FILE_TYPES.has(file.type)) {
    return "Invalid file type. Please upload a PDF, JPG, or PNG file.";
  }
  return null;
}

export async function fileHasAllowedSignature(file: File): Promise<boolean> {
  const header = new Uint8Array(await file.slice(0, 8).arrayBuffer());
  const name = file.name.toLowerCase();
  if (name.endsWith(".pdf")) {
    return header[0] === 0x25 && header[1] === 0x50 && header[2] === 0x44 && header[3] === 0x46;
  }
  if (name.endsWith(".jpg") || name.endsWith(".jpeg")) {
    return header[0] === 0xff && header[1] === 0xd8 && header[2] === 0xff;
  }
  if (name.endsWith(".png")) {
    return header[0] === 0x89 && header[1] === 0x50 && header[2] === 0x4e && header[3] === 0x47;
  }
  return false;
}

/** True when a stated age or date of birth is under the minimum, or the date cannot be read. */
export function isBelowMinimumAge(age: string, dateOfBirth: string, minimum = 16): boolean {
  if (age) {
    const parsed = Number(age);
    if (!Number.isInteger(parsed) || parsed < minimum || parsed > 100) return true;
  }
  if (dateOfBirth) {
    const birth = new Date(`${dateOfBirth}T00:00:00`);
    if (Number.isNaN(birth.getTime())) return true;
    const today = new Date();
    let years = today.getFullYear() - birth.getFullYear();
    const month = today.getMonth() - birth.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) years -= 1;
    if (years < minimum) return true;
  }
  return false;
}

export function isHoneypotTriggered(value: unknown): boolean {
  return sanitize(value).length > 0;
}
