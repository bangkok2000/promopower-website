"use client";

import {
  PAGE_SECTION_NAV_ID,
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
  scrollHint?: string;
};

export default function PageSectionNav({
  items,
  ariaLabel = "On this page",
  showTop = false,
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
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0, 0.25, 0.5],
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
