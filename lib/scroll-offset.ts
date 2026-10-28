export const SCROLL_GUTTER_PX = 16;

const PINNED_BAR_SELECTOR = ".page-wayfinding-band, .page-section-nav, .home-section-nav-wrap";

export function measureHeaderHeight(): number {
  const header = document.getElementById("site-header");
  return header?.offsetHeight ?? 80;
}

/**
 * Height covered at the top of the viewport when the page is scrolled to `targetDocTop`:
 * the fixed header plus any sticky bar that is still pinned at that point. A sticky bar only
 * stays pinned while its parent is on screen, so bars whose parent ends before the target
 * (e.g. the homepage hero pills) are not counted.
 */
export function measurePinnedInset(targetDocTop: number): number {
  const headerHeight = measureHeaderHeight();
  let inset = headerHeight;

  document.querySelectorAll<HTMLElement>(PINNED_BAR_SELECTOR).forEach((bar) => {
    const style = getComputedStyle(bar);
    if (style.position !== "sticky" || style.display === "none") return;
    const container = bar.parentElement?.getBoundingClientRect();
    if (!container) return;
    const containerTop = container.top + window.scrollY;
    const containerBottom = container.bottom + window.scrollY;
    if (containerTop > targetDocTop || containerBottom < targetDocTop + bar.offsetHeight) return;
    inset = Math.max(inset, (parseFloat(style.top) || headerHeight) + bar.offsetHeight);
  });

  return Math.round(inset);
}

/** Pinned bar height below the header for CSS `scroll-margin-top` on hash links. */
export function measureSectionNavHeight(): number {
  const midPage = document.documentElement.scrollHeight / 2;
  return Math.max(0, measurePinnedInset(midPage) - measureHeaderHeight());
}

export function syncScrollOffsetVars() {
  const headerHeight = measureHeaderHeight();
  const sectionNavHeight = measureSectionNavHeight();
  const root = document.documentElement;

  root.style.setProperty("--site-header-height", `${headerHeight}px`);
  root.style.setProperty("--site-section-nav-height", `${sectionNavHeight}px`);
  root.style.setProperty("--page-section-nav-height", `${sectionNavHeight}px`);
  root.style.setProperty(
    "--site-scroll-offset",
    `${headerHeight + sectionNavHeight + SCROLL_GUTTER_PX}px`
  );
}
