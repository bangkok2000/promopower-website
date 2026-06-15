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
      const panels = document.getElementById("homepage-tab-panels");
      if (!panels) return;

      const header = document.getElementById("site-header");
      const nav = document.getElementById("homepage-section-nav");
      const offset = (header?.offsetHeight ?? 80) + (nav?.offsetHeight ?? 52) + 16;
      const top = panels.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
    });
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (isHomepageSectionId(hash)) {
      activateTab(hash, { scrollToPanels: true });
    }

    const handleReset = () => {
      setActiveId(HOMEPAGE_SECTIONS[0].id);
    };

    window.addEventListener("homepage-reset", handleReset);
    return () => window.removeEventListener("homepage-reset", handleReset);
  }, [activateTab]);

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
  const { activeId } = useHomepageTabs();
  const isActive = activeId === sectionId;

  return (
    <div
      id={sectionId}
      role="tabpanel"
      aria-labelledby={`homepage-tab-${sectionId}`}
      hidden={!isActive}
      tabIndex={isActive ? 0 : -1}
    >
      {children}
    </div>
  );
}
