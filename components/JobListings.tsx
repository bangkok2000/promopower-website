"use client";

import { useState, useEffect } from "react";

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vT2060jyYiZtaif7KAkM3VU2TYPjMet1TAm71kvS1PkJQnfHwYiSyD4kUT0QsyAE1DXmrqqzwzoefaX/pub?gid=0&single=true&output=csv";

interface Job {
  title: string;
  type: string;
  experience: string;
  scope: string;
  applyEmail: string;
  isActive: boolean;
}

function parseCSV(raw: string): Job[] {
  const lines = raw.trim().split("\n");
  if (lines.length < 2) return [];

  // Normalise headers
  const headers = lines[0].split(",").map((h) => h.trim().toLowerCase().replace(/[^a-z_]/g, ""));

  const col = (row: string[], name: string) => {
    const idx = headers.indexOf(name);
    return idx >= 0 ? (row[idx] ?? "").trim() : "";
  };

  const rows: Job[] = [];

  // Simple CSV parser — handles quoted fields containing commas/newlines
  const allText = lines.slice(1).join("\n");
  const records = splitCSVRecords(allText);

  for (const record of records) {
    const cells = splitCSVCells(record);
    const isActive =
      col(cells, "is_active").toLowerCase() === "true" ||
      col(cells, "is_active").toLowerCase() === "yes";
    if (!isActive) continue;
    rows.push({
      title: col(cells, "title"),
      type: col(cells, "type"),
      experience: col(cells, "experience"),
      scope: col(cells, "scope"),
      applyEmail: col(cells, "apply_email"),
      isActive,
    });
  }
  return rows;
}

/** Split raw CSV text into individual records (handles multi-line quoted fields) */
function splitCSVRecords(text: string): string[] {
  const records: string[] = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
      current += ch;
    } else if (ch === "\n" && !inQuotes) {
      if (current.trim()) records.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  if (current.trim()) records.push(current);
  return records;
}

/** Split a single CSV record into cells (handles quoted fields) */
function splitCSVCells(record: string): string[] {
  const cells: string[] = [];
  let cell = "";
  let inQuotes = false;
  for (let i = 0; i < record.length; i++) {
    const ch = record[i];
    if (ch === '"') {
      // Escaped quote inside quoted field
      if (inQuotes && record[i + 1] === '"') {
        cell += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      cells.push(cell.trim());
      cell = "";
    } else {
      cell += ch;
    }
  }
  cells.push(cell.trim());
  return cells;
}

const TYPE_ORDER = ["All", "Full Time", "Part Time", "Contract", "Temporary"];

export default function JobListings() {
  const [jobs, setJobs] = useState<Job[] | null>(null);
  const [error, setError] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch(CSV_URL)
      .then((r) => {
        if (!r.ok) throw new Error("fetch failed");
        return r.text();
      })
      .then((text) => setJobs(parseCSV(text)))
      .catch(() => setError(true));
  }, []);

  if (error) return null; // Fail silently — don't break the page

  if (jobs === null) {
    return (
      <section className="py-16 sm:py-20 px-6 sm:px-8 md:px-16 max-w-7xl mx-auto">
        <div className="text-center text-on-surface-variant/60 text-sm">Loading opportunities…</div>
      </section>
    );
  }

  if (jobs.length === 0) {
    return (
      <section className="py-16 sm:py-20 px-6 sm:px-8 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-headline font-normal tracking-widest text-sm uppercase block mb-4">
            Career Opportunities
          </span>
          <h2 className="text-3xl sm:text-4xl font-headline font-normal text-on-surface">
            Current Job Openings
          </h2>
        </div>
        <p className="text-center text-on-surface-variant/70">
          No openings at the moment. Check back soon or submit your general application below.
        </p>
      </section>
    );
  }

  // Build filter tabs — only show types that exist in data
  const presentTypes = Array.from(new Set(jobs.map((j) => j.type).filter(Boolean)));
  const tabs = ["All", ...TYPE_ORDER.slice(1).filter((t) => presentTypes.includes(t))];

  // Also include any types not in our predefined order
  presentTypes.forEach((t) => {
    if (!TYPE_ORDER.includes(t) && !tabs.includes(t)) tabs.push(t);
  });

  const filtered = activeFilter === "All" ? jobs : jobs.filter((j) => j.type === activeFilter);

  return (
    <section className="py-16 sm:py-20 px-6 sm:px-8 md:px-16 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <span className="text-primary font-headline font-normal tracking-widest text-sm uppercase block mb-4">
          Career Opportunities
        </span>
        <h2 className="text-3xl sm:text-4xl font-headline font-normal text-on-surface">
          Current Job Openings
        </h2>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {tabs.map((tab) => {
          const count = tab === "All" ? jobs.length : jobs.filter((j) => j.type === tab).length;
          const isActive = activeFilter === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => { setActiveFilter(tab); setOpenIndex(null); }}
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
        {filtered.map((job, i) => {
          const isOpen = openIndex === i;
          // Parse scope sentences for bullet display
          const bullets = job.scope
            .split(/\.\s+/)
            .map((s) => s.replace(/^\*/, "").trim())
            .filter(Boolean);

          // Parse apply emails — handles formats:
          //   "Primary: a@b.com; CC: c@b.com d@b.com"
          //   "a@b.com cc b@b.com"
          //   "a@b.com"
          const emailRaw = job.applyEmail.replace(/\n|\r/g, " ");
          // Extract all email addresses from the raw string
          const allEmails = (emailRaw.match(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/g) ?? []);
          const primaryEmail = allEmails[0] ?? "";
          const ccEmails = allEmails.slice(1);

          const mailtoCC = ccEmails.length > 0 ? `?cc=${ccEmails.join(",")}&subject=${encodeURIComponent(`Application: ${job.title}`)}` : `?subject=${encodeURIComponent(`Application: ${job.title}`)}`;
          const mailtoHref = `mailto:${primaryEmail}${mailtoCC}`;

          return (
            <div
              key={i}
              className="border border-on-surface/10 rounded-lg overflow-hidden"
            >
              {/* Accordion header */}
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
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
                    {job.type && (
                      <div>
                        <p className="text-xs font-headline tracking-widest uppercase text-primary mb-1">Job Type</p>
                        <p className="text-on-surface">{job.type}</p>
                      </div>
                    )}
                  </div>

                  {bullets.length > 0 && (
                    <div className="mb-6">
                      <p className="text-xs font-headline tracking-widest uppercase text-primary mb-3">Main Job Scope</p>
                      <ul className="space-y-2">
                        {bullets.map((b, bi) => (
                          <li key={bi} className="flex gap-2 text-on-surface-variant">
                            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary/60" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {primaryEmail && (
                    <div className="text-center pt-2">
                      <a
                        href={mailtoHref}
                        className="glow-button inline-flex items-center gap-2 px-8 py-3 rounded-full text-on-primary font-headline font-normal text-base hover:scale-105 transition-transform"
                      >
                        Apply Now
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
