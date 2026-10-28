import { SCROLL_GUTTER_PX, measurePinnedInset, syncScrollOffsetVars } from "@/lib/scroll-offset";

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
    const footerTop = footer.getBoundingClientRect().top + window.scrollY;
    const top = footerTop - measurePinnedInset(footerTop) - SCROLL_GUTTER_PX;
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
  const target = document.getElementById(sectionId);
  if (!target) return;

  // Land on where the section's content starts, not its outer padding.
  const style = getComputedStyle(target);
  const targetTop =
    target.getBoundingClientRect().top +
    window.scrollY +
    (parseFloat(style.paddingTop) || 0) +
    (parseFloat(style.borderTopWidth) || 0);
  const top = targetTop - measurePinnedInset(targetTop) - SCROLL_GUTTER_PX;
  window.scrollTo({ top: Math.max(0, top), behavior });
}

export function syncPageSectionNavHeight() {
  syncScrollOffsetVars();
}
