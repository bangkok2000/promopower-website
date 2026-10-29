/**
 * Content the PromoPower team edits in the admin portal (/admin).
 * Shared by the website and the Worker API, so keep it free of page/data imports.
 */

export const JOB_CATEGORIES = ["Contract", "Full Time", "Part Time", "Temporary"] as const;
export type JobCategory = (typeof JOB_CATEGORIES)[number];

export interface Job {
  id: string;
  title: string;
  /** Which filter tab the job is counted under. */
  category: JobCategory;
  /** Job type as shown in the listing, e.g. "Full Time & Part Time position Available". */
  typeLabel: string;
  experience: string;
  /** Main job scope, one point per entry. */
  scope: string[];
  /** Closing line under the scope, e.g. how to apply. */
  applyNote: string;
  active: boolean;
}

export interface PortfolioGroup {
  client: string;
  photos: string[];
}

export interface PortfolioContent {
  latestWork: string[];
  groups: PortfolioGroup[];
}

/** What GET /api/content returns. `null` means "not edited yet — use the built-in defaults". */
export interface PublishedContent {
  jobs: Job[] | null;
  portfolio: PortfolioContent | null;
}

const MEDIA_SRC = /^\/media\/[a-f0-9-]{36}\.jpg$/;
const GALLERY_SRC = /^\/gallery\/[A-Za-z0-9._\-/]+\.(jpe?g|png|webp)$/i;

/** Photos may only point at the site's own gallery files or uploads. */
export function isAllowedPhotoSrc(src: unknown): src is string {
  return typeof src === "string" && !src.includes("..") && (MEDIA_SRC.test(src) || GALLERY_SRC.test(src));
}

/** Small grid copy of a photo: `npm run gallery:thumbs` output, or the thumb saved with an upload. */
export function photoThumbnailSrc(src: string): string {
  if (MEDIA_SRC.test(src)) return src.replace(/\.jpg$/, "-thumb.jpg");
  return src.replace(/^\/gallery\//, "/gallery-thumbs/");
}

const LIMITS = {
  jobs: 50,
  text: 300,
  longText: 2000,
  scopeLines: 40,
  groups: 100,
  photosPerGroup: 300,
};

function cleanText(value: unknown, max: number): string {
  return typeof value === "string" ? value.replace(/\r\n/g, "\n").trim().slice(0, max) : "";
}

/** Validates admin input. Returns the cleaned value or an error message. */
export function parseJobs(input: unknown): { ok: true; value: Job[] } | { ok: false; error: string } {
  if (!Array.isArray(input)) return { ok: false, error: "Job list is missing." };
  if (input.length > LIMITS.jobs) return { ok: false, error: `No more than ${LIMITS.jobs} jobs.` };

  const jobs: Job[] = [];
  for (const [index, raw] of input.entries()) {
    const item = (raw ?? {}) as Record<string, unknown>;
    const title = cleanText(item.title, LIMITS.text);
    if (!title) return { ok: false, error: `Job ${index + 1} needs a title.` };
    const category = JOB_CATEGORIES.includes(item.category as JobCategory)
      ? (item.category as JobCategory)
      : "Full Time";
    const scope = (Array.isArray(item.scope) ? item.scope : [])
      .map((line) => cleanText(line, LIMITS.longText))
      .filter(Boolean)
      .slice(0, LIMITS.scopeLines);

    jobs.push({
      id: cleanText(item.id, 64) || crypto.randomUUID(),
      title,
      category,
      typeLabel: cleanText(item.typeLabel, LIMITS.text) || category,
      experience: cleanText(item.experience, LIMITS.text),
      scope,
      applyNote: cleanText(item.applyNote, LIMITS.longText),
      active: item.active !== false,
    });
  }
  return { ok: true, value: jobs };
}

function parsePhotos(input: unknown, label: string): { ok: true; value: string[] } | { ok: false; error: string } {
  if (!Array.isArray(input)) return { ok: false, error: `${label}: photo list is missing.` };
  if (input.length > LIMITS.photosPerGroup) return { ok: false, error: `${label}: too many photos.` };
  if (!input.every(isAllowedPhotoSrc)) return { ok: false, error: `${label}: a photo address is not valid.` };
  return { ok: true, value: Array.from(new Set(input)) };
}

export function parsePortfolio(
  input: unknown,
): { ok: true; value: PortfolioContent } | { ok: false; error: string } {
  const raw = (input ?? {}) as Record<string, unknown>;
  const latestWork = parsePhotos(raw.latestWork, "Latest Work");
  if (!latestWork.ok) return latestWork;
  if (!Array.isArray(raw.groups)) return { ok: false, error: "Client list is missing." };
  if (raw.groups.length > LIMITS.groups) return { ok: false, error: `No more than ${LIMITS.groups} clients.` };

  const groups: PortfolioGroup[] = [];
  const names = new Set<string>();
  for (const [index, entry] of raw.groups.entries()) {
    const item = (entry ?? {}) as Record<string, unknown>;
    const client = cleanText(item.client, 120);
    if (!client) return { ok: false, error: `Client ${index + 1} needs a name.` };
    if (names.has(client.toLowerCase())) return { ok: false, error: `"${client}" is listed twice.` };
    names.add(client.toLowerCase());
    const photos = parsePhotos(item.photos, client);
    if (!photos.ok) return photos;
    groups.push({ client, photos: photos.value });
  }
  return { ok: true, value: { latestWork: latestWork.value, groups } };
}
