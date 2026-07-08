"use client";

import PageSectionNav from "@/components/PageSectionNav";
import type { PortfolioNavItem } from "@/lib/portfolio";
import { portfolioSectionId } from "@/lib/portfolio";
import type { SectionNavItem } from "@/lib/section-navigation";

type PortfolioClientNavProps = {
  items: PortfolioNavItem[];
};

export default function PortfolioClientNav({ items }: PortfolioClientNavProps) {
  const navItems: SectionNavItem[] = items.map((item) => ({
    id: portfolioSectionId(item.slug),
    label: item.client,
  }));

  return (
    <PageSectionNav
      items={navItems}
      ariaLabel="Portfolio clients"
      scrollHint="Scroll sideways for more clients"
    />
  );
}
