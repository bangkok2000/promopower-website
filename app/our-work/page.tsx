import type { Metadata } from "next";
import { PORTFOLIO_GROUPS } from "@/lib/data";
import { getPortfolioNavItems, portfolioClientSlug, portfolioSectionId } from "@/lib/portfolio";
import CTASection from "@/components/CTASection";
import GalleryGrid from "@/components/GalleryGrid";
import JsonLd from "@/components/JsonLd";
import PageContentRail from "@/components/PageContentRail";
import PageHero from "@/components/PageHero";
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
      <PageHero
        badge="Our Work"
        title="Campaign Portfolio"
        description="A selection of activations, retail promotions, roadshows and customer engagement campaigns supported by PromoPower across Singapore."
      />

      <section className="page-section">
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
                  <div className="border-b border-white/10 pb-4">
                    <h2 id={`portfolio-heading-${slug}`} className="font-headline text-3xl sm:text-4xl font-normal text-on-surface">
                      {group.client}
                    </h2>
                  </div>

                  <GalleryGrid photos={group.photos} label={group.client} />
                </section>
              );
            })}
          </div>
        </PageContentRail>
      </section>

      <CTASection
        heading="Ready to Discuss Your Next Campaign?"
        body="Tell us about your upcoming activation and we'll help you plan the right workforce solution."
        primaryLabel="Contact Our Team"
        primaryHref="/contact-us"
      />
    </>
  );
}
