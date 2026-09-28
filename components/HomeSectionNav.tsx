"use client";

import PageSectionNav from "@/components/PageSectionNav";
import { HOMEPAGE_SECTIONS } from "@/lib/navigation";

const navItems = HOMEPAGE_SECTIONS.map((section) => ({
  id: section.id,
  label: section.label,
}));

export default function HomeSectionNav() {
  return (
    <div className="home-section-nav-wrap">
      <PageSectionNav
        items={navItems}
        ariaLabel="Homepage sections"
        scrollHint="Scroll sideways for more sections"
        showTop
        showBottom
      />
    </div>
  );
}
