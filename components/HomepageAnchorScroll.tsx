"use client";

import { useEffect } from "react";
import { HOMEPAGE_SECTIONS } from "@/lib/navigation";

const SCROLL_GUTTER_PX = 24;

function measureHeaderHeight(): number {
  const header = document.getElementById("site-header");
  return header?.offsetHeight ?? 80;
}

function measureSectionNavHeight(): number {
  const sectionNav = document.getElementById("homepage-section-nav");
  return sectionNav?.offsetHeight ?? 52;
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

function scrollToSection(id: string, behavior: ScrollBehavior = "smooth") {
  const target = document.getElementById(id);
  if (!target) return;

  syncScrollOffsetVars();
  const top = target.getBoundingClientRect().top + window.scrollY - getScrollOffset(id);
  window.scrollTo({ top: Math.max(0, top), behavior });
}

export default function HomepageAnchorScroll() {
  useEffect(() => {
    syncScrollOffsetVars();

    const handleResize = () => syncScrollOffsetVars();
    window.addEventListener("resize", handleResize);

    const sectionNav = document.getElementById("homepage-section-nav");
    const sectionNavObserver =
      sectionNav &&
      new MutationObserver(() => {
        syncScrollOffsetVars();
      });

    if (sectionNav) {
      sectionNavObserver?.observe(sectionNav, {
        attributes: true,
        attributeFilter: ["data-visible", "class"],
      });
    }

    const handleClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href^='#']");
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const id = hash.slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      scrollToSection(id);
      window.history.pushState(null, "", hash);
    };

    document.addEventListener("click", handleClick);

    const initialHash = window.location.hash.slice(1);
    if (initialHash && HOMEPAGE_SECTIONS.some((section) => section.id === initialHash)) {
      window.requestAnimationFrame(() => {
        scrollToSection(initialHash, "auto");
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      sectionNavObserver?.disconnect();
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
