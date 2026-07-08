import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageBreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function PageBreadcrumb({ items }: PageBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="page-breadcrumb">
      <ol className="page-breadcrumb-list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="page-breadcrumb-item">
              {item.href && !isLast ? (
                <Link href={item.href} className="page-breadcrumb-link">
                  {item.label}
                </Link>
              ) : (
                <span className="page-breadcrumb-current" aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
