"use client";

import { useState } from "react";
import { JOB_CATEGORIES, type Job } from "@/lib/site-content";
import { usePublishedJobs } from "@/lib/use-site-content";

const TYPE_TABS = ["All", ...JOB_CATEGORIES];

/** Fired by "Apply Now" so the application form can pre-fill the position. */
export const JOB_APPLY_EVENT = "jobseeker-apply";

const matchesTab = (job: Job, tab: string) => tab === "All" || job.category === tab;

export default function JobListings() {
  const published = usePublishedJobs();
  const [activeFilter, setActiveFilter] = useState("All");
  const [openId, setOpenId] = useState<string | null>(null);

  if (published === null) {
    return (
      <section className="py-16 sm:py-20 px-6 sm:px-8 md:px-16 max-w-7xl mx-auto">
        <div className="text-center text-on-surface-variant/60 text-sm">Loading opportunities…</div>
      </section>
    );
  }

  const jobs = published.filter((job) => job.active);

  if (jobs.length === 0) {
    return (
      <section className="py-16 sm:py-20 px-6 sm:px-8 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-normal text-on-surface">
            Jobseekers
          </h2>
        </div>
        <p className="text-center text-on-surface-variant/70">
          No openings at the moment. Check back soon or submit your general application below.
        </p>
      </section>
    );
  }

  const filtered = jobs.filter((j) => matchesTab(j, activeFilter));

  return (
    <section className="py-16 sm:py-20 px-6 sm:px-8 md:px-16 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-headline font-normal text-on-surface">
          Jobseekers
        </h2>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {TYPE_TABS.map((tab) => {
          const count = jobs.filter((j) => matchesTab(j, tab)).length;
          const isActive = activeFilter === tab;
          return (
            <button
              key={tab}
              type="button"
              aria-pressed={isActive}
              onClick={() => { setActiveFilter(tab); setOpenId(null); }}
              className={`px-5 py-2 rounded-full text-sm font-headline font-normal tracking-wide transition-colors duration-200 ${
                isActive
                  ? "bg-primary text-on-primary"
                  : "bg-surface-variant/40 text-on-surface-variant hover:bg-surface-variant/70"
              }`}
            >
              {tab} ({count})
            </button>
          );
        })}
      </div>

      {/* Listings */}
      <div className="space-y-3">
        {filtered.map((job) => {
          const isOpen = openId === job.id;

          return (
            <div
              key={job.id}
              className="border border-on-surface/10 rounded-lg overflow-hidden"
            >
              {/* Accordion header */}
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenId(isOpen ? null : job.id)}
                className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200 ${
                  isOpen ? "bg-primary text-on-primary" : "bg-surface-variant/20 hover:bg-surface-variant/40 text-on-surface"
                }`}
              >
                <span className="font-headline font-normal text-base sm:text-lg pr-4">{job.title}</span>
                <span className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-colors duration-200 ${isOpen ? "border-on-primary/50" : "border-on-surface/30"}`}>
                  <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    {isOpen ? <path d="M3 8h10" /> : <><path d="M8 3v10" /><path d="M3 8h10" /></>}
                  </svg>
                </span>
              </button>

              {/* Accordion body */}
              {isOpen && (
                <div className="px-6 py-6 bg-surface border-t border-on-surface/10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {job.experience && (
                      <div>
                        <p className="text-xs font-headline tracking-widest uppercase text-primary mb-1">Years of Experience</p>
                        <p className="text-on-surface">{job.experience}</p>
                      </div>
                    )}
                    {job.typeLabel && (
                      <div>
                        <p className="text-xs font-headline tracking-widest uppercase text-primary mb-1">Job Type</p>
                        <p className="text-on-surface">{job.typeLabel}</p>
                      </div>
                    )}
                  </div>

                  {job.scope.length > 0 && (
                    <div className="mb-6">
                      <p className="text-xs font-headline tracking-widest uppercase text-primary mb-3">Main Job Scope</p>
                      <ul className="space-y-2">
                        {job.scope.map((line, li) => (
                          <li key={li} className="flex gap-2 text-on-surface-variant">
                            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary/60" />
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {job.applyNote && (
                    <p className="mb-6 text-on-surface-variant whitespace-pre-line [overflow-wrap:anywhere]">{job.applyNote}</p>
                  )}

                  <div className="text-center pt-2">
                    <a
                      href="#section-apply"
                      onClick={() => window.dispatchEvent(new CustomEvent(JOB_APPLY_EVENT, { detail: job.title }))}
                      className="glow-button inline-flex items-center gap-2 px-8 py-3 rounded-full text-on-primary font-headline font-normal text-base hover:scale-105 transition-transform"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
