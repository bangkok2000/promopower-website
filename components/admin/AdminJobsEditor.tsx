"use client";

import { useEffect, useState } from "react";
import { adminApi } from "@/lib/admin-api";
import { JOB_CATEGORIES, type Job, type JobCategory } from "@/lib/site-content";
import { DEFAULT_JOBS } from "@/lib/site-content-defaults";
import { AdminButton, SaveBar, inputClass, labelClass } from "@/components/admin/admin-ui";

/** Scope is edited as free text so new lines can be typed; split into points on save. */
type JobDraft = Omit<Job, "scope"> & { scopeText: string };

const toDraft = (job: Job): JobDraft => {
  const { scope, ...rest } = job;
  return { ...rest, scopeText: scope.join("\n") };
};

const fromDraft = ({ scopeText, ...job }: JobDraft): Job => ({
  ...job,
  scope: scopeText.split("\n").map((line) => line.replace(/^\s*[*•-]\s*/, "").trim()).filter(Boolean),
});

const emptyJob = (): JobDraft => ({
  id: crypto.randomUUID(),
  title: "",
  category: "Full Time",
  typeLabel: "",
  experience: "",
  scopeText: "",
  applyNote: "",
  active: true,
});

type Props = { onDirtyChange: (dirty: boolean) => void; onSessionExpired: () => void };

export default function AdminJobsEditor({ onDirtyChange, onSessionExpired }: Props) {
  const [jobs, setJobs] = useState<JobDraft[] | null>(null);
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ tone: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    adminApi.published().then((content) => setJobs((content?.jobs ?? DEFAULT_JOBS).map(toDraft)));
  }, []);

  useEffect(() => onDirtyChange(dirty), [dirty, onDirtyChange]);

  const update = (next: JobDraft[]) => {
    setJobs(next);
    setDirty(true);
    setMessage(null);
  };

  const edit = (id: string, changes: Partial<JobDraft>) =>
    update((jobs ?? []).map((job) => (job.id === id ? { ...job, ...changes } : job)));

  const move = (index: number, by: number) => {
    const next = [...(jobs ?? [])];
    const [job] = next.splice(index, 1);
    next.splice(index + by, 0, job);
    update(next);
  };

  const save = async () => {
    if (!jobs) return;
    setSaving(true);
    const result = await adminApi.saveJobs(jobs.map(fromDraft));
    setSaving(false);
    if (result.success) {
      setJobs(result.jobs.map(toDraft));
      setDirty(false);
      setMessage({ tone: "success", text: "Published. The Jobseekers page now shows these jobs." });
    } else if (result.status === 401) {
      onSessionExpired();
    } else {
      setMessage({ tone: "error", text: result.error });
    }
  };

  if (!jobs) return <p className="text-slate-600">Loading jobs…</p>;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-slate-600 max-w-2xl">
          Jobs shown on the <a className="text-primary underline" href="/jobseekers" target="_blank" rel="noopener">Jobseekers page</a>.
          Untick &ldquo;Show on website&rdquo; to hide a job without deleting it.
        </p>
        <AdminButton onClick={() => update([...jobs, emptyJob()])}>
          <span className="material-symbols-outlined text-lg" aria-hidden="true">add</span>
          Add a job
        </AdminButton>
      </div>

      {jobs.length === 0 && (
        <p className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-slate-600">
          No jobs yet. The Jobseekers page says there are no openings at the moment.
        </p>
      )}

      {jobs.map((job, index) => {
        const field = (name: string) => `job-${job.id}-${name}`;
        return (
          <fieldset key={job.id} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-5">
            <legend className="sr-only">Job {index + 1}</legend>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-bold text-slate-900">
                Job {index + 1}
                {!job.active && <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Hidden</span>}
              </p>
              <div className="flex flex-wrap gap-2">
                <AdminButton onClick={() => move(index, -1)} disabled={index === 0} aria-label={`Move job ${index + 1} up`}>
                  <span className="material-symbols-outlined text-lg" aria-hidden="true">arrow_upward</span>
                </AdminButton>
                <AdminButton
                  onClick={() => move(index, 1)}
                  disabled={index === jobs.length - 1}
                  aria-label={`Move job ${index + 1} down`}
                >
                  <span className="material-symbols-outlined text-lg" aria-hidden="true">arrow_downward</span>
                </AdminButton>
                <AdminButton
                  variant="danger"
                  onClick={() => {
                    if (window.confirm(`Delete "${job.title || `Job ${index + 1}`}"?`)) {
                      update(jobs.filter((item) => item.id !== job.id));
                    }
                  }}
                >
                  Delete
                </AdminButton>
              </div>
            </div>

            <div>
              <label htmlFor={field("title")} className={labelClass}>Job title</label>
              <input
                id={field("title")}
                className={inputClass}
                value={job.title}
                onChange={(event) => edit(job.id, { title: event.target.value })}
                placeholder="Brand Ambassador for FMCG brand"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label htmlFor={field("category")} className={labelClass}>Filter tab</label>
                <select
                  id={field("category")}
                  className={inputClass}
                  value={job.category}
                  onChange={(event) => edit(job.id, { category: event.target.value as JobCategory })}
                >
                  {JOB_CATEGORIES.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor={field("type")} className={labelClass}>Job type (as shown)</label>
                <input
                  id={field("type")}
                  className={inputClass}
                  value={job.typeLabel}
                  onChange={(event) => edit(job.id, { typeLabel: event.target.value })}
                  placeholder={job.category}
                />
              </div>
              <div>
                <label htmlFor={field("experience")} className={labelClass}>Years of experience</label>
                <input
                  id={field("experience")}
                  className={inputClass}
                  value={job.experience}
                  onChange={(event) => edit(job.id, { experience: event.target.value })}
                  placeholder="1"
                />
              </div>
            </div>

            <div>
              <label htmlFor={field("scope")} className={labelClass}>Main job scope</label>
              <p id={field("scope-hint")} className="px-1 mb-2 text-sm text-slate-500">One point per line.</p>
              <textarea
                id={field("scope")}
                aria-describedby={field("scope-hint")}
                className={`${inputClass} min-h-40`}
                value={job.scopeText}
                onChange={(event) => edit(job.id, { scopeText: event.target.value })}
              />
            </div>

            <div>
              <label htmlFor={field("apply")} className={labelClass}>How to apply (optional)</label>
              <textarea
                id={field("apply")}
                className={`${inputClass} min-h-24`}
                value={job.applyNote}
                onChange={(event) => edit(job.id, { applyNote: event.target.value })}
                placeholder="Interested candidates do send in resume to …"
              />
            </div>

            <label className="flex items-center gap-3 text-slate-800 font-medium">
              <input
                type="checkbox"
                className="h-5 w-5 accent-[var(--color-primary)]"
                checked={job.active}
                onChange={(event) => edit(job.id, { active: event.target.checked })}
              />
              Show on website
            </label>
          </fieldset>
        );
      })}

      <SaveBar dirty={dirty} saving={saving} onSave={save} message={message} />
    </div>
  );
}
