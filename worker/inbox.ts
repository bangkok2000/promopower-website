/**
 * Contact enquiries and jobseeker applications, kept for the admin portal inbox.
 * Saved alongside the notification email so nothing is lost if mail fails.
 */

export type InboxEnv = { SITE_CONTENT: KVNamespace };

export type InboxKind = "contact" | "jobseeker";

export type InboxAttachment = { name: string; type: string; size: number };

export type InboxEntry = {
  token: string;
  kind: InboxKind;
  receivedAt: string;
  /** Label/value pairs in the order they appear on the form. */
  fields: [string, string][];
  attachment: InboxAttachment | null;
};

export type InboxSummary = {
  token: string;
  kind: InboxKind;
  receivedAt: string;
  name: string;
  email: string;
  subject: string;
  hasAttachment: boolean;
  read: boolean;
};

const ENTRY_PREFIX = "inbox:";
const FILE_PREFIX = "inbox-file:";
/** Privacy policy: personal data is kept only as long as necessary. */
const RETENTION_SECONDS = 365 * 24 * 60 * 60;
const MAX_TIMESTAMP = 9_999_999_999_999;
export const INBOX_TOKEN = /^\d{13}-[a-f0-9-]{36}$/;

const short = (value: string, max: number) => (value.length > max ? `${value.slice(0, max - 1)}…` : value);

const tokenId = (token: string) => token.slice(14);

export async function saveSubmission(
  env: InboxEnv,
  kind: InboxKind,
  fields: [string, string][],
  summary: { name: string; email: string; subject: string },
  file?: { name: string; type: string; bytes: ArrayBuffer },
): Promise<boolean> {
  const now = Date.now();
  // Newest first: KV lists keys in ascending order.
  const token = `${String(MAX_TIMESTAMP - now).padStart(13, "0")}-${crypto.randomUUID()}`;
  const attachment = file ? { name: short(file.name, 120), type: file.type, size: file.bytes.byteLength } : null;
  const entry: InboxEntry = { token, kind, receivedAt: new Date(now).toISOString(), fields, attachment };
  const metadata: InboxSummary = {
    token,
    kind,
    receivedAt: entry.receivedAt,
    name: short(summary.name, 80),
    email: short(summary.email, 120),
    subject: short(summary.subject, 120),
    hasAttachment: Boolean(attachment),
    read: false,
  };

  try {
    if (file) {
      await env.SITE_CONTENT.put(`${FILE_PREFIX}${tokenId(token)}`, file.bytes, {
        expirationTtl: RETENTION_SECONDS,
        metadata: attachment,
      });
    }
    await env.SITE_CONTENT.put(`${ENTRY_PREFIX}${token}`, JSON.stringify(entry), {
      expirationTtl: RETENTION_SECONDS,
      metadata,
    });
    return true;
  } catch (error) {
    console.error("Inbox save failed", error);
    return false;
  }
}

export async function listInbox(env: InboxEnv): Promise<InboxSummary[]> {
  const items: InboxSummary[] = [];
  let cursor: string | undefined;
  do {
    const page = await env.SITE_CONTENT.list<InboxSummary>({ prefix: ENTRY_PREFIX, cursor });
    for (const key of page.keys) if (key.metadata) items.push(key.metadata);
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor);
  return items;
}

/** Returns the full entry and marks it as read. */
export async function openInboxEntry(env: InboxEnv, token: string): Promise<InboxEntry | null> {
  const key = `${ENTRY_PREFIX}${token}`;
  const { value, metadata } = await env.SITE_CONTENT.getWithMetadata<InboxSummary>(key, "text");
  if (!value) return null;
  const entry = JSON.parse(value) as InboxEntry;
  if (metadata && !metadata.read) {
    const remaining = Math.max(60, RETENTION_SECONDS - Math.floor((Date.now() - Date.parse(entry.receivedAt)) / 1000));
    await env.SITE_CONTENT.put(key, value, { expirationTtl: remaining, metadata: { ...metadata, read: true } });
  }
  return entry;
}

export async function deleteInboxEntry(env: InboxEnv, token: string): Promise<void> {
  await Promise.all([
    env.SITE_CONTENT.delete(`${ENTRY_PREFIX}${token}`),
    env.SITE_CONTENT.delete(`${FILE_PREFIX}${tokenId(token)}`),
  ]);
}

export async function inboxAttachmentResponse(env: InboxEnv, token: string): Promise<Response> {
  const { value, metadata } = await env.SITE_CONTENT.getWithMetadata<InboxAttachment>(
    `${FILE_PREFIX}${tokenId(token)}`,
    "stream",
  );
  if (!value || !metadata) return new Response("Not found", { status: 404 });
  const filename = metadata.name.replace(/[^\w.\- ]+/g, "") || "attachment";
  return new Response(value, {
    headers: {
      "content-type": metadata.type || "application/octet-stream",
      "content-disposition": `attachment; filename="${filename}"`,
      "cache-control": "no-store",
      "x-content-type-options": "nosniff",
      "content-security-policy": "default-src 'none'; sandbox",
    },
  });
}
