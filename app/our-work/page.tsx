import type { Metadata } from "next";
import { PORTFOLIO_GROUPS } from "@/lib/data";
import { getPortfolioNavItems, portfolioClientSlug, portfolioSectionId } from "@/lib/portfolio";
import CTASection from "@/components/CTASection";
import GalleryGrid from "@/components/GalleryGrid";
import JsonLd from "@/components/JsonLd";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import PageContentRail from "@/components/PageContentRail";
import PageEndLinks from "@/components/PageEndLinks";
import PageHero from "@/components/PageHero";
import PageWayfindingBand from "@/components/PageWayfindingBand";
import { simplePageBreadcrumb } from "@/lib/page-nav-config";
import PortfolioClientNav from "@/components/PortfolioClientNav";
import { buildPageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Our Work",
  description:
    "Browse PromoPower portfolio of campaign activations, retail promotions, roadshows and customer engagement initiatives supported across Singapore.",
  path: "/our-work",
  keywords: [
    "PromoPower portfolio",
    "retail activation Singapore examples",
    "roadshow campaigns Singapore",
    "brand activation portfolio",
  ],
});

const portfolioNavItems = getPortfolioNavItems();

export default function OurWork() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd(
          "Campaign Portfolio",
          "/our-work",
          "Portfolio of retail promotions, roadshows and customer engagement campaigns supported by PromoPower in Singapore.",
        )}
      />
      <PageWayfindingBand breadcrumb={<PageBreadcrumb items={simplePageBreadcrumb("Our Work")} />} />
      <PageHero
        badge="Our Work"
        title="Campaign Portfolio"
        description="A selection of activations, retail promotions, roadshows and customer engagement campaigns supported by PromoPower across Singapore."
        compact
      />

      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <PageContentRail>
          <PortfolioClientNav items={portfolioNavItems} />

          <div className="space-y-12 pt-8">
            {PORTFOLIO_GROUPS.map((group) => {
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
          <PageEndLinks />
        </PageContentRail>
      </section>

      <CTASection
        heading="Planning Something Similar?"
        body="Send the dates, locations and headcount. The portfolio shows the kind of sites we staff. It is not a client list for publication."
        primaryLabel="Contact Our Team"
        primaryHref="/contact-us"
      />
    </>
  );
}
