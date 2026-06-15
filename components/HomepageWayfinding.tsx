"use client";

import { syncScrollOffsetVars } from "@/lib/scroll-offset";
import { useHomepageTabs } from "@/components/HomepageTabs";
import { HOMEPAGE_QUICK_PATHS, HOMEPAGE_SECTIONS } from "@/lib/navigation";
import { useEffect } from "react";

export default function HomepageWayfinding() {
  const { activeId, activateTab } = useHomepageTabs();

  useEffect(() => {
    syncScrollOffsetVars({ includeSectionNav: true });

    const handleResize = () => syncScrollOffsetVars({ includeSectionNav: true });
    window.addEventListener("resize", handleResize);

    const sectionNav = document.getElementById("homepage-section-nav");
    const resizeObserver = sectionNav ? new ResizeObserver(() => syncScrollOffsetVars({ includeSectionNav: true })) : null;
    if (sectionNav) resizeObserver?.observe(sectionNav);

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver?.disconnect();
    };
  }, []);

  return (
    <section id="wayfinding" className="relative z-20 page-section pt-6 pb-2" aria-label="Explore the homepage">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {HOMEPAGE_QUICK_PATHS.map((path) => (
            <button
              key={path.title}
              type="button"
              className="quick-path-card group text-left w-full"
              onClick={() => activateTab(path.sectionId, { scrollToPanels: true })}
            >
              <div className="icon-badge mb-4 group-hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined">{path.icon}</span>
              </div>
              <h2 className="text-xl font-headline font-normal text-on-surface mb-2">{path.title}</h2>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4 flex-1">{path.description}</p>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-bold group-hover:gap-2 transition-all">
                Continue
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </button>
          ))}
        </div>

        <div
          id="homepage-section-nav"
          data-visible="true"
          role="tablist"
          aria-label="Homepage sections"
          className="sticky top-[var(--site-header-height,5rem)] z-40 -mx-6 px-6 sm:-mx-8 sm:px-8 md:-mx-0 md:px-0 py-3 border-y border-white/5 bg-background/95 backdrop-blur-xl"
        >
          <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar">
            {HOMEPAGE_SECTIONS.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  role="tab"
                  id={`homepage-tab-${section.id}`}
                  aria-selected={isActive}
                  aria-controls={section.id}
                  onClick={() => activateTab(section.id, { scrollToPanels: false })}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary/20 text-primary border border-primary/30"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
