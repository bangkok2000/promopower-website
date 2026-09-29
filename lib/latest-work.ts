/** Recent campaign photography (2026) — shown on Our Work before the full portfolio listing. */
const LATEST_WORK_COUNT = 30;

export const LATEST_WORK_PHOTOS: string[] = Array.from({ length: LATEST_WORK_COUNT }, (_, index) => {
  const n = String(index + 1).padStart(2, "0");
  return `/gallery/latest-work/latest-work-${n}.jpeg`;
});
