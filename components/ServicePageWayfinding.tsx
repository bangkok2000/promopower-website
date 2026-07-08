import JsonLd from "@/components/JsonLd";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import PageSectionNavGroup from "@/components/PageSectionNavGroup";
import { serviceBreadcrumb } from "@/lib/page-nav-config";
import { servicePageJsonLd } from "@/lib/seo";
import type { SectionNavItem } from "@/lib/section-navigation";
import type { ReactNode } from "react";

type ServicePageWayfindingProps = {
  title: string;
  path: string;
  description: string;
  navItems: SectionNavItem[];
  children: ReactNode;
};

export default function ServicePageWayfinding({
  title,
  path,
  description,
  navItems,
  children,
}: ServicePageWayfindingProps) {
  return (
    <>
      <JsonLd data={servicePageJsonLd(title, path, description)} />
      <PageSectionNavGroup
        breadcrumb={<PageBreadcrumb items={serviceBreadcrumb(title)} />}
        navItems={navItems}
        navLabel={`${title} sections`}
        scrollHint="Scroll sideways for more sections"
      >
        {children}
      </PageSectionNavGroup>
    </>
  );
}
