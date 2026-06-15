"use client";

import { useHomepageTabs } from "@/components/HomepageTabs";
import type { HomepageSectionId } from "@/lib/navigation";

export default function HomeHeroActions() {
  const { activateTab } = useHomepageTabs();

  return (
    <div className="hero-actions">
      <button
        type="button"
        className="glow-button text-on-primary px-6 sm:px-8 py-4 rounded-full font-headline font-normal text-base hover:scale-105 active:scale-95 transition-all text-center"
        onClick={() => activateTab("contact", { scrollToPanels: true })}
      >
        Get In Touch
      </button>
      <button
        type="button"
        className="btn-secondary px-6 sm:px-8 py-4 text-base"
        onClick={() => activateTab("services", { scrollToPanels: true })}
      >
        Explore Our Services
      </button>
    </div>
  );
}

export function HomepageTabButton({
  sectionId,
  className,
  children,
  scrollToPanels = true,
}: {
  sectionId: HomepageSectionId;
  className?: string;
  children: React.ReactNode;
  scrollToPanels?: boolean;
}) {
  const { activateTab } = useHomepageTabs();

  return (
    <button
      type="button"
      className={className}
      onClick={() => activateTab(sectionId, { scrollToPanels })}
    >
      {children}
    </button>
  );
}
