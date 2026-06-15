"use client";

import { useEffect, useState } from "react";
import { HOMEPAGE_SECTIONS } from "@/lib/navigation";

export default function HomepageSectionNav() {
  const [activeId, setActiveId] = useState<string>(HOMEPAGE_SECTIONS[0].id);

  useEffect(() => {
    const sections = HOMEPAGE_SECTIONS.map((section) => document.getElementById(section.id)).filter(
      (element): element is HTMLElement => element !== null
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-[76px] z-40 border-b border-white/5 bg-background/90 backdrop-blur-xl"
    >
      <div className="page-container flex items-center gap-2 overflow-x-auto py-3 custom-scrollbar">
        <span className="hidden sm:inline text-xs font-label uppercase tracking-widest text-on-surface-variant shrink-0 mr-2">
          On this page
        </span>
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
