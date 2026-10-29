"use client";

import { useCallback, useEffect, useState } from "react";
import { adminApi } from "@/lib/admin-api";
import type { InboxEntry, InboxKind, InboxSummary } from "@/worker/inbox";
import { AdminButton, StatusMessage } from "@/components/admin/admin-ui";

const KIND_LABEL: Record<InboxKind, string> = {
  contact: "Customer enquiry",
  jobseeker: "Job application",
};

const FILTERS = [
  { id: "all", label: "All" },
  { id: "contact", label: "Customer enquiries" },
  { id: "jobseeker", label: "Job applications" },
] as const;
type FilterId = (typeof FILTERS)[number]["id"];

const formatDate = (iso: string) =>
  new Date(iso).toLocaleString("en-SG", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Singapore" });

function MessageDetail({
  entry,
  onDelete,
  deleting,
}: {
  entry: InboxEntry;
  onDelete: () => void;
  deleting: boolean;
}) {
  const field = (label: string) => entry.fields.find(([name]) => name === label)?.[1] ?? "";
  const email = field("Email");
  const phone = field("Phone").replace(/[^\d+]/g, "");
  const replySubject =
    entry.kind === "contact" ? "Re: Your enquiry to PromoPower" : `Re: Your application to PromoPower${field("Interested to be") ? ` — ${field("Interested to be")}` : ""}`;

  return (
    <div className="space-y-5 border-t border-slate-200 p-4 sm:p-5">
      <dl className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
        {entry.fields
          .filter(([, value]) => value)
          .map(([label, value]) => (
            <div key={label} className={value.length > 80 || value.includes("\n") ? "sm:col-span-2" : undefined}>
              <dt className="text-xs font-bold uppercase tracking-widest text-primary">{label}</dt>
              <dd className="mt-1 whitespace-pre-line text-slate-800 [overflow-wrap:anywhere]">{value}</dd>
            </div>
          ))}
      </dl>

      <div className="flex flex-wrap gap-2">
        {email && (
          <a
            href={`mailto:${email}?subject=${encodeURIComponent(replySubject)}`}
            className="glow-button inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white"
          >
            <span className="material-symbols-outlined text-lg" aria-hidden="true">reply</span>
            Reply by email
          </a>
        )}
        {phone && (
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-primary hover:text-primary"
          >
            <span className="material-symbols-outlined text-lg" aria-hidden="true">call</span>
            Call
          </a>
        )}
        {entry.attachment && (
          <a
            href={adminApi.attachmentUrl(entry.token)}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-primary hover:text-primary"
          >
            <span className="material-symbols-outlined text-lg" aria-hidden="true">download</span>
            Download {entry.attachment.name}
          </a>
        )}
        <AdminButton variant="danger" onClick={onDelete} disabled={deleting}>
          {deleting ? "Deleting…" : "Delete"}
        </AdminButton>
      </div>
    </div>
  );
}

type Props = { onUnreadChange: (count: number) => void; onSessionExpired: () => void };

export default function AdminInbox({ onUnreadChange, onSessionExpired }: Props) {
  const [items, setItems] = useState<InboxSummary[] | null>(null);
  const [filter, setFilter] = useState<FilterId>("all");
  const [openToken, setOpenToken] = useState<string | null>(null);
  const [entries, setEntries] = useState<Record<string, InboxEntry>>({});
  const [deleting, setDeleting] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const applyResult = useCallback(
    (result: Awaited<ReturnType<typeof adminApi.inbox>>) => {
      if (result.success) {
        setItems(result.items);
        setError(null);
      } else if (result.status === 401) onSessionExpired();
      else setError(result.error);
    },
    [onSessionExpired],
  );

  const load = () => adminApi.inbox().then(applyResult);

  useEffect(() => {
    adminApi.inbox().then(applyResult);
  }, [applyResult]);

  useEffect(() => {
    onUnreadChange(items?.filter((item) => !item.read).length ?? 0);
  }, [items, onUnreadChange]);

  const toggle = async (token: string) => {
    if (openToken === token) {
      setOpenToken(null);
      return;
    }
    setOpenToken(token);
    if (entries[token]) return;
    const result = await adminApi.openMessage(token);
    if (result.success) {
      setEntries((current) => ({ ...current, [token]: result.entry }));
      setItems((current) => current?.map((item) => (item.token === token ? { ...item, read: true } : item)) ?? null);
    } else if (result.status === 401) {
      onSessionExpired();
    } else {
      setError(result.error);
    }
  };

  const remove = async (token: string) => {
    if (!window.confirm("Delete this message permanently? This also deletes any attached file.")) return;
    setDeleting(token);
    const result = await adminApi.deleteMessage(token);
    setDeleting(null);
    if (result.success) {
      setItems((current) => current?.filter((item) => item.token !== token) ?? null);
      setOpenToken(null);
    } else if (result.status === 401) {
      onSessionExpired();
    } else {
      setError(result.error);
    }
  };

  if (!items) return error ? <StatusMessage tone="error">{error}</StatusMessage> : <p className="text-slate-600">Loading messages…</p>;

  const shown = items.filter((item) => filter === "all" || item.kind === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-slate-600 max-w-2xl">
          Every Contact Us enquiry and Jobseekers application is saved here as well as emailed. Messages are deleted
          automatically 12 months after they arrive.
        </p>
        <AdminButton onClick={() => void load()}>
          <span className="material-symbols-outlined text-lg" aria-hidden="true">refresh</span>
          Refresh
        </AdminButton>
      </div>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Show messages">
        {FILTERS.map((option) => {
          const count = items.filter((item) => option.id === "all" || item.kind === option.id).length;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={filter === option.id}
              onClick={() => setFilter(option.id)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                filter === option.id ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {option.label} ({count})
            </button>
          );
        })}
      </div>

      {error && <StatusMessage tone="error">{error}</StatusMessage>}

      {shown.length === 0 ? (
        <p className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-slate-600">
          No messages yet.
        </p>
      ) : (
        <ul className="space-y-3">
          {shown.map((item) => {
            const isOpen = openToken === item.token;
            const entry = entries[item.token];
            return (
              <li key={item.token} className="rounded-2xl border border-slate-200 bg-white">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => void toggle(item.token)}
                  className="flex w-full items-start gap-3 p-4 text-left sm:p-5"
                >
                  <span
                    className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${item.read ? "bg-transparent" : "bg-primary"}`}
                    aria-hidden="true"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <span className={`text-slate-900 [overflow-wrap:anywhere] ${item.read ? "font-semibold" : "font-bold"}`}>
                        {item.name}
                        {!item.read && <span className="sr-only"> (unread)</span>}
                      </span>
                      <span className="text-sm text-slate-500">{formatDate(item.receivedAt)}</span>
                    </span>
                    <span className="mt-1 block text-sm text-slate-600 [overflow-wrap:anywhere]">
                      {KIND_LABEL[item.kind]}
                      {item.subject && ` · ${item.subject}`}
                      {item.hasAttachment && " · File attached"}
                    </span>
                  </span>
                  <span className="material-symbols-outlined shrink-0 text-slate-500" aria-hidden="true">
                    {isOpen ? "expand_less" : "expand_more"}
                  </span>
                </button>
                {isOpen &&
                  (entry ? (
                    <MessageDetail entry={entry} deleting={deleting === item.token} onDelete={() => void remove(item.token)} />
                  ) : (
                    <p className="border-t border-slate-200 p-5 text-slate-600">Opening…</p>
                  ))}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
