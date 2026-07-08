"use client";

import { syncScrollOffsetVars } from "@/lib/scroll-offset";
import { useHomepageTabs } from "@/components/HomepageTabs";
import { HOMEPAGE_QUICK_PATHS, HOMEPAGE_SECTIONS } from "@/lib/navigation";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type HomepageExploreProps = {
  children: ReactNode;
};

export default function HomepageExplore({ children }: HomepageExploreProps) {
  const { activeId, activateTab } = useHomepageTabs();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const tabListRef = useRef<HTMLElement>(null);

  const updateScrollAffordance = useCallback(() => {
    const list = tabListRef.current;
    if (!list) return;

    const { scrollLeft, scrollWidth, clientWidth } = list;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  const scrollTabListBy = useCallback((direction: "left" | "right") => {
    const list = tabListRef.current;
    if (!list) return;

    const amount = Math.max(list.clientWidth * 0.7, 160);
    list.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }, []);

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

  useEffect(() => {
    updateScrollAffordance();

    const list = tabListRef.current;
    if (!list) return;

    list.addEventListener("scroll", updateScrollAffordance, { passive: true });

    const resizeObserver = new ResizeObserver(updateScrollAffordance);
    resizeObserver.observe(list);

    return () => {
      list.removeEventListener("scroll", updateScrollAffordance);
      resizeObserver.disconnect();
    };
  }, [updateScrollAffordance]);

  const showScrollAffordance = canScrollLeft || canScrollRight;

  return (
    <section id="wayfinding" className="homepage-explore page-section" aria-label="Explore PromoPower">
      <div className="page-container">
        <div className="homepage-quick-paths">
          {HOMEPAGE_QUICK_PATHS.map((path) => {
            const isActive = activeId === path.sectionId;
            return (
              <button
                key={path.title}
                type="button"
                className={`quick-path-card group ${isActive ? "quick-path-card-active" : ""}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => activateTab(path.sectionId, { scrollToPanels: true })}
              >
                <div className="icon-badge mb-4 group-hover:border-accent-steel/50 transition-colors">
                  <span className="material-symbols-outlined">{path.icon}</span>
                </div>
                <h2 className="text-xl font-headline font-normal text-on-surface mb-2">{path.title}</h2>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4 flex-1">{path.description}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-bold group-hover:gap-2 transition-all">
                  Continue
                  <span className="material-symbols-outlined text-base" aria-hidden="true">
                    arrow_forward
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="homepage-section-nav"
          data-visible="true"
          aria-label="Homepage sections"
          className="homepage-tab-bar lg:grid lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14"
        >
          <div className="hidden lg:block lg:col-span-4 xl:col-span-3" aria-hidden="true" />
          <div className="homepage-tab-nav lg:col-span-8 xl:col-span-9">
            {showScrollAffordance ? (
              <p className="page-section-nav-hint">Scroll sideways for more sections</p>
            ) : null}
            <div className="page-section-nav-scroll">
              {canScrollLeft ? (
                <button
                  type="button"
                  className="page-section-nav-scroll-btn page-section-nav-scroll-btn-left"
                  aria-label="Scroll section tabs left"
                  onClick={() => scrollTabListBy("left")}
                >
                  <span className="material-symbols-outlined text-base" aria-hidden="true">
                    chevron_left
                  </span>
                </button>
              ) : null}

              <nav
                ref={tabListRef}
                aria-label="Jump to section"
                className="homepage-tab-list"
                tabIndex={showScrollAffordance ? 0 : undefined}
                aria-roledescription={showScrollAffordance ? "scrollable section list" : undefined}
              >
                {HOMEPAGE_SECTIONS.map((section) => {
                  const isActive = activeId === section.id;
                  return (
                    <button
                      key={section.id}
                      type="button"
                      id={`homepage-tab-${section.id}`}
                      aria-current={isActive ? "true" : undefined}
                      onClick={() => activateTab(section.id)}
                      className={`homepage-tab-pill ${isActive ? "homepage-tab-pill-active" : ""}`}
                    >
                      {section.label}
                    </button>
                  );
                })}
              </nav>

              {canScrollRight ? (
                <button
                  type="button"
                  className="page-section-nav-scroll-btn page-section-nav-scroll-btn-right"
                  aria-label="Scroll section tabs right"
                  onClick={() => scrollTabListBy("right")}
                >
                  <span className="material-symbols-outlined text-base" aria-hidden="true">
                    chevron_right
                  </span>
                </button>
              ) : null}

              <span
                className={`page-section-nav-fade page-section-nav-fade-left ${canScrollLeft ? "page-section-nav-fade-visible" : ""}`}
                aria-hidden="true"
              />
              <span
                className={`page-section-nav-fade page-section-nav-fade-right ${canScrollRight ? "page-section-nav-fade-visible" : ""}`}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        <div id="homepage-tab-panels" className="homepage-tab-panels">
          {children}
        </div>
      </div>
    </section>
  );
}
