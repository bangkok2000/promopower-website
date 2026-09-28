import type { ReactNode } from "react";

type PageWayfindingHeaderProps = {
  breadcrumb?: ReactNode;
};

export default function PageWayfindingHeader({ breadcrumb }: PageWayfindingHeaderProps) {
  if (!breadcrumb) return null;

  return (
    <div className="page-wayfinding-header">
      <div className="page-wayfinding-breadcrumb">{breadcrumb}</div>
    </div>
  );
}
