"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HOMEPAGE_QUICK_PATHS, HOMEPAGE_SECTIONS } from "@/lib/navigation";

function syncScrollOffset() {
  const header = document.getElementById("site-header");
  const sectionNav = document.getElementById("homepage-section-nav");
  const headerHeight = header?.offsetHeight ?? 80;
  const sectionNavHeight = sectionNav?.offsetHeight ?? 52;
  const scrollOffset = headerHeight + sectionNavHeight + 24;

  document.documentElement.style.setProperty("--site-section-nav-height", `${sectionNavHeight}px`);
  document.documentElement.style.setProperty("--site-scroll-offset", `${scrollOffset}px`);
}

export default function HomepageWayfinding() {
  const [activeId, setActiveId] = useState<string>(HOMEPAGE_SECTIONS[0].id);

  useEffect(() => {
    syncScrollOffset();
    window.addEventListener("resize", syncScrollOffset);

    const sectionNav = document.getElementById("homepage-section-nav");
    const resizeObserver = sectionNav ? new ResizeObserver(syncScrollOffset) : null;
    if (sectionNav) resizeObserver?.observe(sectionNav);

    const sections = HOMEPAGE_SECTIONS.map((section) => document.getElementById(section.id)).filter(
      (element): element is HTMLElement => element !== null
    );

    if (sections.length === 0) {
      return () => {
        window.removeEventListener("resize", syncScrollOffset);
        resizeObserver?.disconnect();
      };
    }

    const headerOffset = () => {
      const header = document.getElementById("site-header");
      const nav = document.getElementById("homepage-section-nav");
      return (header?.offsetHeight ?? 80) + (nav?.offsetHeight ?? 52) + 24;
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

    return () => {
      window.removeEventListener("resize", syncScrollOffset);
      resizeObserver?.disconnect();
      observer.disconnect();
    };
  }, []);

  return (
    <section id="wayfinding" className="relative z-20 page-section pt-6 pb-2" aria-label="Explore the homepage">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {HOMEPAGE_QUICK_PATHS.map((path) => (
            <Link key={path.title} href={path.href} className="quick-path-card group">
              <div className="icon-badge mb-4 group-hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined">{path.icon}</span>
              </div>
              <h2 className="text-xl font-headline font-normal text-on-surface mb-2">{path.title}</h2>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4 flex-1">{path.description}</p>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-bold group-hover:gap-2 transition-all">
                Continue
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </Link>
          ))}
        </div>

        <nav
          id="homepage-section-nav"
          data-visible="true"
          aria-label="Page sections"
          className="sticky top-[var(--site-header-height,5rem)] z-40 -mx-6 px-6 sm:-mx-8 sm:px-8 md:-mx-0 md:px-0 py-3 border-y border-white/5 bg-background/95 backdrop-blur-xl"
        >
          <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar">
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
      </div>
    </section>
  );
}
