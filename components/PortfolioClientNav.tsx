"use client";

import { SCROLL_GUTTER_PX, measureHeaderHeight } from "@/lib/scroll-offset";
import type { PortfolioNavItem } from "@/lib/portfolio";
import { portfolioSectionId } from "@/lib/portfolio";
import { useCallback, useEffect, useState } from "react";

type PortfolioClientNavProps = {
  items: PortfolioNavItem[];
};

function scrollToPageTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

function scrollToPortfolioSection(slug: string) {
  const nav = document.getElementById("portfolio-client-nav");
  const headerHeight = measureHeaderHeight();
  const navHeight = nav?.offsetHeight ?? 52;
  const target = document.getElementById(portfolioSectionId(slug));
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - navHeight - SCROLL_GUTTER_PX;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

export default function PortfolioClientNav({ items }: PortfolioClientNavProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const syncNavHeight = useCallback(() => {
    const nav = document.getElementById("portfolio-client-nav");
    document.documentElement.style.setProperty("--portfolio-nav-height", `${nav?.offsetHeight ?? 0}px`);
  }, []);

  useEffect(() => {
    syncNavHeight();
    window.addEventListener("resize", syncNavHeight);

    const nav = document.getElementById("portfolio-client-nav");
    const resizeObserver = nav ? new ResizeObserver(syncNavHeight) : null;
    if (nav) resizeObserver?.observe(nav);

    return () => {
      window.removeEventListener("resize", syncNavHeight);
      resizeObserver?.disconnect();
    };
  }, [syncNavHeight]);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(portfolioSectionId(item.slug)))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSlug(visible[0].target.id.replace(/^portfolio-/, ""));
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

  return (
    <nav id="portfolio-client-nav" aria-label="Portfolio clients" className="portfolio-client-nav">
      <div className="portfolio-client-nav-list">
        <button
          type="button"
          className="portfolio-client-nav-pill"
          onClick={scrollToPageTop}
        >
          Top
        </button>
        {items.map((item) => {
          const isActive = activeSlug === item.slug;
          return (
            <button
              key={item.slug}
              type="button"
              className={`portfolio-client-nav-pill ${isActive ? "portfolio-client-nav-pill-active" : ""}`}
              aria-current={isActive ? "true" : undefined}
              onClick={() => scrollToPortfolioSection(item.slug)}
            >
              {item.client}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export function PortfolioBackToTop() {
  return (
    <div className="pt-6 flex justify-end">
      <button
        type="button"
        onClick={scrollToPageTop}
        className="portfolio-back-to-top"
      >
        Back to top
        <span className="material-symbols-outlined text-base" aria-hidden="true">
          arrow_upward
        </span>
      </button>
    </div>
  );
}
