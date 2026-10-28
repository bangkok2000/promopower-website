import type { ReactNode } from "react";

type PageContentRailProps = {
  children: ReactNode;
  className?: string;
};

export default function PageContentRail({ children, className = "" }: PageContentRailProps) {
  return (
    <div className={`page-container ${className}`.trim()}>
      <div className="grid grid-cols-1 items-start lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
        <div className="hidden lg:block lg:col-span-4 xl:col-span-3" aria-hidden="true" />
        <div className="min-w-0 lg:col-span-8 xl:col-span-9">{children}</div>
      </div>
    </div>
  );
}
