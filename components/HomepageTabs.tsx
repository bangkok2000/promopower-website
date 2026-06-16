"use client";

import { HOMEPAGE_SECTIONS, type HomepageSectionId } from "@/lib/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type HomepageTabsContextValue = {
  activeId: HomepageSectionId;
  setActiveId: (id: HomepageSectionId) => void;
  activateTab: (id: HomepageSectionId, options?: { scrollToPanels?: boolean }) => void;
};

const HomepageTabsContext = createContext<HomepageTabsContextValue | null>(null);

function isHomepageSectionId(value: string): value is HomepageSectionId {
  return HOMEPAGE_SECTIONS.some((section) => section.id === value);
}

export function HomepageTabsProvider({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState<HomepageSectionId>(HOMEPAGE_SECTIONS[0].id);

  const activateTab = useCallback((id: HomepageSectionId, options?: { scrollToPanels?: boolean }) => {
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);

    if (options?.scrollToPanels === false) return;

    requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (!target) return;

      const header = document.getElementById("site-header");
      const nav = document.getElementById("homepage-section-nav");
      const offset = (header?.offsetHeight ?? 80) + (nav?.offsetHeight ?? 52) + 16;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
    });
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    let raf = 0;
    if (isHomepageSectionId(hash)) {
      raf = requestAnimationFrame(() => activateTab(hash, { scrollToPanels: true }));
    }

    const handleReset = () => {
      setActiveId(HOMEPAGE_SECTIONS[0].id);
    };

    window.addEventListener("homepage-reset", handleReset);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("homepage-reset", handleReset);
    };
  }, [activateTab]);

  // Scroll-spy: reflect the section currently in view in the sticky nav.
  useEffect(() => {
    const sections = HOMEPAGE_SECTIONS.map((section) => document.getElementById(section.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const header = document.getElementById("site-header");
    const nav = document.getElementById("homepage-section-nav");
    const topOffset = (header?.offsetHeight ?? 80) + (nav?.offsetHeight ?? 52) + 24;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const topEntry = visible[0];
        if (topEntry && isHomepageSectionId(topEntry.target.id)) {
          setActiveId(topEntry.target.id);
        }
      },
      { rootMargin: `-${topOffset}px 0px -55% 0px`, threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const value = useMemo(
    () => ({ activeId, setActiveId, activateTab }),
    [activeId, activateTab]
  );

  return <HomepageTabsContext.Provider value={value}>{children}</HomepageTabsContext.Provider>;
}

export function useHomepageTabs() {
  const context = useContext(HomepageTabsContext);
  if (!context) {
    throw new Error("useHomepageTabs must be used within HomepageTabsProvider");
  }
  return context;
}

export function HomepageTabPanel({
  sectionId,
  children,
}: {
  sectionId: HomepageSectionId;
  children: ReactNode;
}) {
  return (
    <section
      id={sectionId}
      role="region"
      aria-labelledby={`homepage-tab-${sectionId}`}
      className="homepage-section section-snap"
    >
      {children}
    </section>
  );
}
