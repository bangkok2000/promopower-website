"use client";

import { useEffect, useState } from "react";
import { HOMEPAGE_SECTIONS } from "@/lib/navigation";

export default function HomepageSectionNav() {
  const [activeId, setActiveId] = useState<string>(HOMEPAGE_SECTIONS[0].id);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setIsVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
    );

    heroObserver.observe(hero);
    return () => heroObserver.disconnect();
  }, []);

  useEffect(() => {
    const nav = document.getElementById("homepage-section-nav");
    if (!nav) return;

    nav.dataset.visible = isVisible ? "true" : "false";

    const header = document.getElementById("site-header");
    const headerHeight = header?.offsetHeight ?? 80;
    const sectionHeight = nav.offsetHeight;
    const scrollOffset = headerHeight + sectionHeight + 24;

    document.documentElement.style.setProperty("--site-section-nav-height", `${sectionHeight}px`);
    document.documentElement.style.setProperty("--site-scroll-offset", `${scrollOffset}px`);
  }, [isVisible]);

  useEffect(() => {
    const sections = HOMEPAGE_SECTIONS.map((section) => document.getElementById(section.id)).filter(
      (element): element is HTMLElement => element !== null
    );

    if (sections.length === 0) return;

    const headerOffset = () => {
      const header = document.getElementById("site-header");
      const sectionNav = document.getElementById("homepage-section-nav");
      const sectionNavHeight = sectionNav?.offsetHeight ?? 52;
      return (header?.offsetHeight ?? 80) + sectionNavHeight + 24;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: `-${headerOffset()}px 0px -55% 0px`,
        threshold: [0, 0.15, 0.35],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <nav
      id="homepage-section-nav"
      data-visible={isVisible ? "true" : "false"}
      aria-label="Page sections"
      aria-hidden={!isVisible}
      className={`fixed left-0 right-0 z-40 border-b border-white/5 bg-background/95 backdrop-blur-xl transition-[transform,opacity] duration-300 top-[var(--site-header-height,5rem)] ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="page-container flex items-center gap-2 overflow-x-auto py-3 custom-scrollbar">
        {HOMEPAGE_SECTIONS.map((section) => {
          const isActive = activeId === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary/20 text-primary border border-primary/30"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-white/5 border border-transparent"
              }`}
            >
              {section.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
