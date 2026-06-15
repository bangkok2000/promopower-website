"use client";

import { useEffect } from "react";
import { HOMEPAGE_SECTIONS } from "@/lib/navigation";

const SCROLL_GUTTER_PX = 24;
const VALID_SECTION_IDS = new Set<string>([
  ...HOMEPAGE_SECTIONS.map((section) => section.id),
  "top",
  "why-us",
  "approach",
]);

function measureHeaderHeight(): number {
  const header = document.getElementById("site-header");
  return header?.offsetHeight ?? 80;
}

function getScrollOffset(forSectionId?: string): number {
  const headerHeight = measureHeaderHeight();
  const sectionNav = document.getElementById("homepage-section-nav");
  const sectionNavHeight =
    forSectionId === "top" || !sectionNav ? 0 : sectionNav.offsetHeight || 52;

  return headerHeight + sectionNavHeight + SCROLL_GUTTER_PX;
}

function syncScrollOffsetVars() {
  const headerHeight = measureHeaderHeight();
  const sectionNav = document.getElementById("homepage-section-nav");
  const sectionNavHeight = sectionNav?.offsetHeight ?? 52;
  const root = document.documentElement;

  root.style.setProperty("--site-header-height", `${headerHeight}px`);
  root.style.setProperty("--site-section-nav-height", `${sectionNavHeight}px`);
  root.style.setProperty(
    "--site-scroll-offset",
    `${headerHeight + sectionNavHeight + SCROLL_GUTTER_PX}px`
  );
}

function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  syncScrollOffsetVars();
  const top = target.getBoundingClientRect().top + window.scrollY - getScrollOffset(id);
  window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
}

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id || !VALID_SECTION_IDS.has(id)) return;
  scrollToSection(id);
}

export default function HomepageAnchorScroll() {
  useEffect(() => {
    syncScrollOffsetVars();

    const handleResize = () => syncScrollOffsetVars();
    window.addEventListener("resize", handleResize);

    const sectionNav = document.getElementById("homepage-section-nav");
    const resizeObserver = sectionNav ? new ResizeObserver(syncScrollOffsetVars) : null;
    if (sectionNav) resizeObserver?.observe(sectionNav);

    const handleClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href^='#']");
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const id = hash.slice(1);
      if (!VALID_SECTION_IDS.has(id) || !document.getElementById(id)) return;

      event.preventDefault();
      scrollToSection(id);
      window.history.pushState(null, "", hash);
    };

    const handleHashChange = () => scrollToHash(window.location.hash);

    document.addEventListener("click", handleClick);
    window.addEventListener("hashchange", handleHashChange);

    const initialHash = window.location.hash;
    if (initialHash) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => scrollToHash(initialHash));
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver?.disconnect();
      document.removeEventListener("click", handleClick);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return null;
}
