/** Recent campaign photography (2026) — shown on Our Work before the full portfolio listing. */
const LATEST_WORK_INDICES = Array.from({ length: 30 }, (_, index) => index + 1).filter((n) => n !== 1);

export const LATEST_WORK_PHOTOS: string[] = LATEST_WORK_INDICES.map((n) => {
  const id = String(n).padStart(2, "0");
  return `/gallery/latest-work/latest-work-${id}.jpeg`;
});
