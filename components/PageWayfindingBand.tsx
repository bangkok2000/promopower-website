import PageSectionNav from "@/components/PageSectionNav";
import PageWayfindingHeader from "@/components/PageWayfindingHeader";
import type { SectionNavItem } from "@/lib/section-navigation";
import type { ReactNode } from "react";

type PageWayfindingBandProps = {
  breadcrumb?: ReactNode;
  navItems?: SectionNavItem[];
  navLabel?: string;
  scrollHint?: string;
  showTop?: boolean;
  showBottom?: boolean;
};

export default function PageWayfindingBand({
  breadcrumb,
  navItems = [],
  navLabel,
  scrollHint,
  showTop = false,
  showBottom = false,
}: PageWayfindingBandProps) {
  const showNav = navItems.length > 0;

  if (!breadcrumb && !showNav) return null;

  return (
    <div className="page-wayfinding-band">
      <div className="page-container page-wayfinding-band-inner">
        <PageWayfindingHeader breadcrumb={breadcrumb} />
        {showNav ? (
          <PageSectionNav
            items={navItems}
            ariaLabel={navLabel}
            scrollHint={scrollHint}
            showTop={showTop}
            showBottom={showBottom}
          />
        ) : null}
      </div>
    </div>
  );
}
