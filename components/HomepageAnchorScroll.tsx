"use client";

import { scrollToElement, syncScrollOffsetVars } from "@/lib/scroll-offset";
import { HOMEPAGE_SECTIONS } from "@/lib/navigation";
import { useEffect } from "react";

const VALID_SECTION_IDS = new Set<string>([
  ...HOMEPAGE_SECTIONS.map((section) => section.id),
  "top",
  "why-us",
  "approach",
]);

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id || !VALID_SECTION_IDS.has(id)) return;
  scrollToElement(id);
}

export default function HomepageAnchorScroll() {
  useEffect(() => {
    syncScrollOffsetVars({ includeSectionNav: true });

    const handleResize = () => syncScrollOffsetVars({ includeSectionNav: true });
    window.addEventListener("resize", handleResize);

    const sectionNav = document.getElementById("homepage-section-nav");
    const resizeObserver = sectionNav ? new ResizeObserver(() => syncScrollOffsetVars({ includeSectionNav: true })) : null;
    if (sectionNav) resizeObserver?.observe(sectionNav);

    const handleClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href^='#']");
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const id = hash.slice(1);
      if (!VALID_SECTION_IDS.has(id) || !document.getElementById(id)) return;

      event.preventDefault();
      event.stopPropagation();
      scrollToElement(id);
      window.history.pushState(null, "", hash);
    };

    const handleHashChange = () => scrollToHash(window.location.hash);

    document.addEventListener("click", handleClick, true);
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
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return null;
}
