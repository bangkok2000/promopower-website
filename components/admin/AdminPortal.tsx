"use client";

import { useCallback, useEffect, useState, type FormEvent } from "react";
import { adminApi } from "@/lib/admin-api";
import AdminInbox from "@/components/admin/AdminInbox";
import AdminJobsEditor from "@/components/admin/AdminJobsEditor";
import AdminPortfolioEditor from "@/components/admin/AdminPortfolioEditor";
import { AdminButton, StatusMessage, inputClass, labelClass } from "@/components/admin/admin-ui";

const TABS = [
  { id: "inbox", label: "Inbox" },
  { id: "jobs", label: "Job listings" },
  { id: "portfolio", label: "Portfolio photos" },
  { id: "password", label: "Password" },
] as const;
type TabId = (typeof TABS)[number]["id"];

function SignIn({ notice, onSignedIn }: { notice: string | null; onSignedIn: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setBusy(true);
    const result = await adminApi.login(password);
    setBusy(false);
    if (result.success) onSignedIn();
    else setError(result.error);
  };

  return (
    <form onSubmit={submit} className="mx-auto max-w-md space-y-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Website admin</h1>
        <p className="mt-2 text-sm text-slate-600">Sign in to read enquiries and applications, and to update job listings and portfolio photos.</p>
      </div>
      {notice && !error && <StatusMessage tone="error">{notice}</StatusMessage>}
      {error && <StatusMessage tone="error">{error}</StatusMessage>}
      <div>
        <label htmlFor="admin-password" className={labelClass}>Password</label>
        <input
          id="admin-password"
          type="password"
          autoComplete="current-password"
          className={inputClass}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      <AdminButton type="submit" variant="primary" className="w-full" disabled={busy || !password}>
        {busy ? "Signing in…" : "Sign in"}
      </AdminButton>
    </form>
  );
}

function ChangePassword({ onSessionExpired }: { onSessionExpired: () => void }) {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<{ tone: "success" | "error"; text: string } | null>(null);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (next !== confirm) {
      setMessage({ tone: "error", text: "The new passwords do not match." });
      return;
    }
    setBusy(true);
    const result = await adminApi.changePassword(current, next);
    setBusy(false);
    if (result.success) {
      setCurrent("");
      setNext("");
      setConfirm("");
      setMessage({ tone: "success", text: "Password changed. Anyone else signed in has been signed out." });
    } else if (result.status === 401) {
      onSessionExpired();
    } else {
      setMessage({ tone: "error", text: result.error });
    }
  };

  const fields = [
    { id: "pw-current", label: "Current password", value: current, set: setCurrent, auto: "current-password" },
    { id: "pw-new", label: "New password (at least 10 characters)", value: next, set: setNext, auto: "new-password" },
    { id: "pw-confirm", label: "Type the new password again", value: confirm, set: setConfirm, auto: "new-password" },
  ];

  return (
    <form onSubmit={submit} className="max-w-md space-y-5">
      <p className="text-slate-600">Everyone who updates the website shares this password. Change it when someone leaves.</p>
      {fields.map((field) => (
        <div key={field.id}>
          <label htmlFor={field.id} className={labelClass}>{field.label}</label>
          <input
            id={field.id}
            type="password"
            autoComplete={field.auto}
            className={inputClass}
            value={field.value}
            onChange={(event) => field.set(event.target.value)}
            required
          />
        </div>
      ))}
      {message && <StatusMessage tone={message.tone}>{message.text}</StatusMessage>}
      <AdminButton type="submit" variant="primary" disabled={busy || !current || !next || !confirm}>
        {busy ? "Saving…" : "Change password"}
      </AdminButton>
    </form>
  );
}

export default function AdminPortal() {
  const [state, setState] = useState<"checking" | "signed-out" | "signed-in">("checking");
  const [notice, setNotice] = useState<string | null>(null);
  const [tab, setTab] = useState<TabId>("inbox");
  const [unread, setUnread] = useState(0);
  const [dirtyJobs, setDirtyJobs] = useState(false);
  const [dirtyPortfolio, setDirtyPortfolio] = useState(false);
  const unsaved = dirtyJobs || dirtyPortfolio;

  useEffect(() => {
    adminApi.session().then((result) => setState(result.success && result.signedIn ? "signed-in" : "signed-out"));
  }, []);

  useEffect(() => {
    if (!unsaved) return;
    const warn = (event: BeforeUnloadEvent) => event.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [unsaved]);

  const sessionExpired = useCallback(() => {
    setNotice("You were signed out. Sign in again, then press Save and publish once more.");
    setState("signed-out");
  }, []);

  if (state === "checking") return <p className="text-center text-slate-600">Loading…</p>;

  if (state === "signed-out") {
    return (
      <SignIn
        notice={notice}
        onSignedIn={() => {
          setNotice(null);
          setState("signed-in");
        }}
      />
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Website admin</h1>
        <AdminButton
          onClick={async () => {
            if (unsaved && !window.confirm("You have unsaved changes. Sign out anyway?")) return;
            await adminApi.logout();
            setDirtyJobs(false);
            setDirtyPortfolio(false);
            setState("signed-out");
          }}
        >
          Sign out
        </AdminButton>
      </div>

      <div role="tablist" aria-label="Admin sections" className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
        {TABS.map((item) => (
          <button
            key={item.id}
            id={`admin-tab-${item.id}`}
            type="button"
            role="tab"
            aria-selected={tab === item.id}
            aria-controls={`admin-panel-${item.id}`}
            onClick={() => setTab(item.id)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              tab === item.id ? "bg-primary text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {item.label}
            {item.id === "inbox" && unread > 0 && (
              <span className={`ml-2 rounded-full px-2 py-0.5 text-xs ${tab === item.id ? "bg-white text-primary" : "bg-primary text-white"}`}>
                {unread}
                <span className="sr-only"> unread</span>
              </span>
            )}
            {((item.id === "jobs" && dirtyJobs) || (item.id === "portfolio" && dirtyPortfolio)) && (
              <span className="ml-1" aria-label="(unsaved changes)">•</span>
            )}
          </button>
        ))}
      </div>

      {TABS.map((item) => (
        <div
          key={item.id}
          id={`admin-panel-${item.id}`}
          role="tabpanel"
          aria-labelledby={`admin-tab-${item.id}`}
          hidden={tab !== item.id}
        >
          {item.id === "inbox" && <AdminInbox onUnreadChange={setUnread} onSessionExpired={sessionExpired} />}
          {item.id === "jobs" && <AdminJobsEditor onDirtyChange={setDirtyJobs} onSessionExpired={sessionExpired} />}
          {item.id === "portfolio" && (
            <AdminPortfolioEditor onDirtyChange={setDirtyPortfolio} onSessionExpired={sessionExpired} />
          )}
          {item.id === "password" && <ChangePassword onSessionExpired={sessionExpired} />}
        </div>
      ))}
    </div>
  );
}
