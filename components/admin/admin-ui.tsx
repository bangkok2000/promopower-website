import type { ButtonHTMLAttributes, ReactNode } from "react";

export const inputClass =
  "w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-400";

export const labelClass = "block text-xs font-bold text-primary px-1 mb-2 uppercase tracking-widest";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "danger" };

const variants = {
  primary: "glow-button text-white px-6 py-3",
  secondary: "bg-white border border-slate-300 text-slate-700 hover:border-primary hover:text-primary px-4 py-2",
  danger: "bg-white border border-red-200 text-red-700 hover:bg-red-50 px-4 py-2",
};

export function AdminButton({ variant = "secondary", className = "", type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

export function StatusMessage({ tone, children }: { tone: "success" | "error"; children: ReactNode }) {
  return (
    <p
      role={tone === "error" ? "alert" : "status"}
      className={`rounded-xl border p-3 text-sm ${
        tone === "error" ? "border-red-200 bg-red-50 text-red-700" : "border-emerald-200 bg-emerald-50 text-emerald-800"
      }`}
    >
      {children}
    </p>
  );
}

/** Sticky bar holding the "Save and publish" action for an editor. */
export function SaveBar({
  dirty,
  saving,
  onSave,
  message,
}: {
  dirty: boolean;
  saving: boolean;
  onSave: () => void;
  message: { tone: "success" | "error"; text: string } | null;
}) {
  return (
    <div className="sticky bottom-0 z-10 -mx-4 sm:mx-0 border-t border-slate-200 bg-white/95 backdrop-blur px-4 py-4 sm:rounded-b-2xl space-y-3">
      {message && <StatusMessage tone={message.tone}>{message.text}</StatusMessage>}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-600">{dirty ? "You have unsaved changes." : "Everything is published."}</p>
        <AdminButton variant="primary" onClick={onSave} disabled={saving || !dirty}>
          {saving ? "Publishing…" : "Save and publish"}
        </AdminButton>
      </div>
    </div>
  );
}
