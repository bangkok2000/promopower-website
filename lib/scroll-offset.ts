export const SCROLL_GUTTER_PX = 24;

export function measureHeaderHeight(): number {
  const header = document.getElementById("site-header");
  return header?.offsetHeight ?? 80;
}

export function measureSectionNavHeight(): number {
  const sectionNav = document.getElementById("homepage-section-nav");
  if (!sectionNav) return 0;
  return sectionNav.offsetHeight || 52;
}

export function syncScrollOffsetVars(options?: { includeSectionNav?: boolean }) {
  const headerHeight = measureHeaderHeight();
  const includeSectionNav =
    options?.includeSectionNav ?? Boolean(document.getElementById("homepage-section-nav"));
  const sectionNavHeight = includeSectionNav ? measureSectionNavHeight() : 0;
  const root = document.documentElement;

  root.style.setProperty("--site-header-height", `${headerHeight}px`);
  root.style.setProperty("--site-section-nav-height", `${sectionNavHeight}px`);
  root.style.setProperty(
    "--site-scroll-offset",
    `${headerHeight + sectionNavHeight + SCROLL_GUTTER_PX}px`
  );
}

export function scrollToElement(id: string) {
  syncScrollOffsetVars({ includeSectionNav: Boolean(document.getElementById("homepage-section-nav")) });
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ block: "start", behavior: "auto" });
}
