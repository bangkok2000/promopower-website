import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_GROUPS } from "@/lib/data";
import { portfolioClientSlug, portfolioSectionId } from "@/lib/portfolio";

const PREVIEW_CLIENTS = ["APB Singapore", "Bvlgari", "Chanel", "Dior", "Lancome"] as const;

export default function PortfolioPreview() {
  const groups = PREVIEW_CLIENTS.map((client) => PORTFOLIO_GROUPS.find((group) => group.client === client)).filter(
    (group): group is (typeof PORTFOLIO_GROUPS)[number] => Boolean(group?.photos[0]),
  );

  if (groups.length === 0) return null;

  return (
    <section className="portfolio-preview" aria-label="Selected campaign photography">
      <div className="page-container portfolio-preview-header">
        <h2 className="section-title mb-2">Campaign Portfolio</h2>
        <Link href="/our-work" className="text-sm font-semibold text-primary hover:underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-all">
          Our Work
        </Link>
      </div>
      <ul className="portfolio-preview-grid">
        {groups.map((group) => {
          const slug = portfolioClientSlug(group.client);
          return (
            <li key={group.client}>
              <Link href={`/our-work#${portfolioSectionId(slug)}`} className="portfolio-preview-card group">
                <Image
                  src={group.photos[0]}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 70vw, 20vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span className="portfolio-preview-caption">
                  {group.client}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
