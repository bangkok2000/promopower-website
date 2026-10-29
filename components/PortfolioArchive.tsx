"use client";

import GalleryGrid from "@/components/GalleryGrid";
import PortfolioClientNav from "@/components/PortfolioClientNav";
import { portfolioClientSlug, portfolioSectionId } from "@/lib/portfolio";
import { usePublishedPortfolio } from "@/lib/use-site-content";

/** Client-by-client archive on Our Work. Edited from /admin. */
export default function PortfolioArchive() {
  const groups = usePublishedPortfolio().groups.filter((group) => group.photos.length > 0);
  const navItems = groups.map(({ client }) => ({ client, slug: portfolioClientSlug(client) }));

  return (
    <>
      <PortfolioClientNav items={navItems} />

      <div className="space-y-12 pt-8">
        {groups.map((group) => {
          const slug = portfolioClientSlug(group.client);

          return (
            <section
              key={group.client}
              id={portfolioSectionId(slug)}
              className="page-section-anchor space-y-5"
              aria-labelledby={`portfolio-heading-${slug}`}
            >
              <h2 id={`portfolio-heading-${slug}`} className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-4">
                {group.client}
              </h2>

              <GalleryGrid photos={group.photos} label={group.client} />
            </section>
          );
        })}
      </div>
    </>
  );
}
