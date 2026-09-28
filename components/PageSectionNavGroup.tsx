import PageContentRail from "@/components/PageContentRail";
import PageEndLinks from "@/components/PageEndLinks";
import PageWayfindingBand from "@/components/PageWayfindingBand";
import type { SectionNavItem } from "@/lib/section-navigation";
import type { ReactNode } from "react";

type PageSectionNavGroupProps = {
  hero?: ReactNode;
  navItems: SectionNavItem[];
  navLabel?: string;
  scrollHint?: string;
  breadcrumb?: ReactNode;
  contentClassName?: string;
  showTop?: boolean;
  showBottom?: boolean;
  showEndLinks?: boolean;
  children: ReactNode;
};

export default function PageSectionNavGroup({
  hero,
  navItems,
  navLabel,
  scrollHint,
  breadcrumb,
  contentClassName = "space-y-12 pt-8",
  showTop = false,
  showBottom = false,
  showEndLinks = true,
  children,
}: PageSectionNavGroupProps) {
  return (
    <>
      <PageWayfindingBand
        breadcrumb={breadcrumb}
        navItems={navItems}
        navLabel={navLabel}
        scrollHint={scrollHint}
        showTop={showTop}
        showBottom={showBottom}
      />
      {hero}
      <section className="page-section">
        <PageContentRail>
          <div className={contentClassName}>{children}</div>
          {showEndLinks ? <PageEndLinks /> : null}
        </PageContentRail>
      </section>
    </>
  );
}
