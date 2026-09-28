import { SCROLL_GUTTER_PX, measureHeaderHeight } from "@/lib/scroll-offset";

export type SectionNavItem = {
  id: string;
  label: string;
};

export const PAGE_SECTION_NAV_ID = "page-section-nav";

export const SITE_FOOTER_ID = "site-footer";

export function scrollToPageTop(behavior: ScrollBehavior = "smooth") {
  window.scrollTo({ top: 0, left: 0, behavior });
}

export function scrollToPageBottom(behavior: ScrollBehavior = "smooth") {
  const footer = document.getElementById(SITE_FOOTER_ID);
  if (footer) {
    const headerHeight = measureHeaderHeight();
    const top =
      footer.getBoundingClientRect().top + window.scrollY - headerHeight - SCROLL_GUTTER_PX;
    window.scrollTo({ top: Math.max(0, top), behavior });
    return;
  }

  window.scrollTo({
    top: document.documentElement.scrollHeight,
    left: 0,
    behavior,
  });
}

export function scrollToSectionId(sectionId: string, behavior: ScrollBehavior = "smooth") {
  const nav = document.getElementById(PAGE_SECTION_NAV_ID);
  const headerHeight = measureHeaderHeight();
  const navHeight = nav?.offsetHeight ?? 52;
  const target = document.getElementById(sectionId);
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - navHeight - SCROLL_GUTTER_PX;
  window.scrollTo({ top: Math.max(0, top), behavior });
}

export function syncPageSectionNavHeight() {
  const nav = document.getElementById(PAGE_SECTION_NAV_ID);
  document.documentElement.style.setProperty("--page-section-nav-height", `${nav?.offsetHeight ?? 0}px`);
}
