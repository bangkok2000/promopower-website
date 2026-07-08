import PageContentRail from "@/components/PageContentRail";
import PageSectionNav from "@/components/PageSectionNav";
import type { SectionNavItem } from "@/lib/section-navigation";
import type { ReactNode } from "react";

type PageSectionNavGroupProps = {
  navItems: SectionNavItem[];
  navLabel?: string;
  scrollHint?: string;
  breadcrumb?: ReactNode;
  contentClassName?: string;
  children: ReactNode;
};

export default function PageSectionNavGroup({
  navItems,
  navLabel,
  scrollHint,
  breadcrumb,
  contentClassName = "space-y-12 pt-8",
  children,
}: PageSectionNavGroupProps) {
  return (
    <section className="page-section">
      <PageContentRail>
        {breadcrumb}
        <PageSectionNav items={navItems} ariaLabel={navLabel} scrollHint={scrollHint} />
        <div className={contentClassName}>{children}</div>
      </PageContentRail>
    </section>
  );
}
