"use client";

import {
  PAGE_SECTION_NAV_ID,
  scrollToPageBottom,
  scrollToPageTop,
  scrollToSectionId,
  syncPageSectionNavHeight,
  type SectionNavItem,
} from "@/lib/section-navigation";
import { useCallback, useEffect, useRef, useState } from "react";

type PageSectionNavProps = {
  items: SectionNavItem[];
  ariaLabel?: string;
  showTop?: boolean;
  showBottom?: boolean;
  scrollHint?: string;
};

export default function PageSectionNav({
  items,
  ariaLabel = "On this page",
  showTop = false,
  showBottom = false,
  scrollHint,
}: PageSectionNavProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const syncNavHeight = useCallback(() => {
    syncPageSectionNavHeight();
  }, []);

  const updateScrollAffordance = useCallback(() => {
    const list = listRef.current;
    if (!list) return;

    const { scrollLeft, scrollWidth, clientWidth } = list;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  const scrollListBy = useCallback((direction: "left" | "right") => {
    const list = listRef.current;
    if (!list) return;

    const amount = Math.max(list.clientWidth * 0.7, 160);
    list.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    syncNavHeight();
    window.addEventListener("resize", syncNavHeight);

    const nav = document.getElementById(PAGE_SECTION_NAV_ID);
    const resizeObserver = nav ? new ResizeObserver(syncNavHeight) : null;
    if (nav) resizeObserver?.observe(nav);

    return () => {
      window.removeEventListener("resize", syncNavHeight);
      resizeObserver?.disconnect();
    };
  }, [syncNavHeight]);

  useEffect(() => {
    updateScrollAffordance();

    const list = listRef.current;
    if (!list) return;

    list.addEventListener("scroll", updateScrollAffordance, { passive: true });

    const resizeObserver = new ResizeObserver(updateScrollAffordance);
    resizeObserver.observe(list);

    return () => {
      list.removeEventListener("scroll", updateScrollAffordance);
      resizeObserver.disconnect();
    };
  }, [items, updateScrollAffordance]);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    // Track visibility state for all sections
    const visibilityMap = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibilityMap.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibilityMap.delete(entry.target.id);
          }
        });

        // Find the section with highest visibility
        let bestId: string | null = null;
        let bestRatio = 0;
        visibilityMap.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestId) {
          setActiveId(bestId);
        }
      },
      {
        rootMargin: "-20% 0px -30% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  const showScrollAffordance = canScrollLeft || canScrollRight;

  return (
    <nav id={PAGE_SECTION_NAV_ID} aria-label={ariaLabel} className="page-section-nav">
      {scrollHint && showScrollAffordance ? (
        <p className="page-section-nav-hint">{scrollHint}</p>
      ) : null}
      <div className="page-section-nav-scroll">
        {canScrollLeft ? (
          <button
            type="button"
            className="page-section-nav-scroll-btn page-section-nav-scroll-btn-left"
            aria-label="Scroll section list left"
            onClick={() => scrollListBy("left")}
          >
            <span className="material-symbols-outlined text-base" aria-hidden="true">
              chevron_left
            </span>
          </button>
        ) : null}

        <div
          ref={listRef}
          className="page-section-nav-list"
          tabIndex={showScrollAffordance ? 0 : undefined}
          aria-roledescription={showScrollAffordance ? "scrollable section list" : undefined}
        >
          {showTop ? (
            <button type="button" className="page-section-nav-pill" onClick={() => scrollToPageTop()}>
              Page top
            </button>
          ) : null}
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                className={`page-section-nav-pill ${isActive ? "page-section-nav-pill-active" : ""}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => scrollToSectionId(item.id)}
              >
                {item.label}
              </button>
            );
          })}
          {showBottom ? (
            <button
              type="button"
              className="page-section-nav-pill"
              onClick={() => scrollToPageBottom()}
            >
              Page bottom
            </button>
          ) : null}
        </div>

        {canScrollRight ? (
          <button
            type="button"
            className="page-section-nav-scroll-btn page-section-nav-scroll-btn-right"
            aria-label="Scroll section list right"
            onClick={() => scrollListBy("right")}
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
    </nav>
  );
}

export function BackToTopLink() {
  return (
    <div className="pt-6 flex justify-end">
      <button type="button" onClick={() => scrollToPageTop()} className="page-back-to-top">
        Back to top
        <span className="material-symbols-outlined text-base" aria-hidden="true">
          arrow_upward
        </span>
      </button>
    </div>
  );
}
