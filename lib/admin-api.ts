"use client";

import type { Job, PortfolioContent, PublishedContent } from "@/lib/site-content";
import type { InboxEntry, InboxSummary } from "@/worker/inbox";

type ApiResult<T = unknown> = ({ success: true } & T) | { success: false; error: string; status: number };

async function call<T>(path: string, init?: RequestInit): Promise<ApiResult<T>> {
  try {
    const response = await fetch(path, { credentials: "same-origin", ...init });
    const body = (await response.json().catch(() => ({}))) as { success?: boolean; error?: string } & T;
    if (response.ok && body.success) return { ...body, success: true };
    return {
      success: false,
      status: response.status,
      error: body.error ?? "Something went wrong. Please try again.",
    };
  } catch {
    return { success: false, status: 0, error: "No connection. Check the internet and try again." };
  }
}

const jsonInit = (method: string, body: unknown): RequestInit => ({
  method,
  headers: { "content-type": "application/json" },
  body: JSON.stringify(body),
});

export const adminApi = {
  session: () => call<{ signedIn: boolean }>("/api/admin/session"),
  login: (password: string) => call("/api/admin/login", jsonInit("POST", { password })),
  logout: () => call("/api/admin/logout", { method: "POST" }),
  changePassword: (current: string, next: string) => call("/api/admin/password", jsonInit("POST", { current, next })),
  saveJobs: (jobs: Job[]) => call<{ jobs: Job[] }>("/api/admin/jobs", jsonInit("PUT", jobs)),
  savePortfolio: (portfolio: PortfolioContent) =>
    call<{ portfolio: PortfolioContent }>("/api/admin/portfolio", jsonInit("PUT", portfolio)),
  inbox: () => call<{ items: InboxSummary[] }>("/api/admin/inbox", { cache: "no-store" }),
  openMessage: (token: string) => call<{ entry: InboxEntry }>(`/api/admin/inbox/${token}`, { cache: "no-store" }),
  deleteMessage: (token: string) => call(`/api/admin/inbox/${token}`, { method: "DELETE" }),
  attachmentUrl: (token: string) => `/api/admin/inbox/${token}/file`,
  published: async (): Promise<PublishedContent | null> => {
    const response = await fetch("/api/content", { cache: "no-store" }).catch(() => null);
    return response?.ok ? ((await response.json()) as PublishedContent) : null;
  },
};

const FULL_SIZE = 2000;
const THUMB_SIZE = 640;

async function resize(bitmap: ImageBitmap, maxSide: number, quality: number): Promise<Blob> {
  const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  const context = canvas.getContext("2d");
  if (!context) throw new Error("canvas");
  context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  return new Promise((resolve, reject) =>
    canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error("encode"))), "image/jpeg", quality),
  );
}

/** Shrinks the photo in the browser, uploads it with a grid thumbnail, and returns its address. */
export async function uploadPhoto(file: File): Promise<{ ok: true; src: string } | { ok: false; error: string }> {
  let bitmap: ImageBitmap;
  try {
    bitmap = await createImageBitmap(file);
  } catch {
    return { ok: false, error: `${file.name} could not be opened. Please use a JPEG or PNG photo.` };
  }

  try {
    const form = new FormData();
    form.set("photo", await resize(bitmap, FULL_SIZE, 0.82), "photo.jpg");
    form.set("thumb", await resize(bitmap, THUMB_SIZE, 0.72), "thumb.jpg");
    const result = await call<{ src: string }>("/api/admin/media", { method: "POST", body: form });
    return result.success ? { ok: true, src: result.src } : { ok: false, error: `${file.name}: ${result.error}` };
  } catch {
    return { ok: false, error: `${file.name} could not be prepared for upload.` };
  } finally {
    bitmap.close();
  }
}
