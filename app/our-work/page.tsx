import type { Metadata } from "next";
import { PORTFOLIO_GROUPS } from "@/lib/data";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Our Work & Portfolio | PromoPower",
  description:
    "Browse our portfolio of campaign activations, retail promotions, roadshows and customer engagement initiatives across Singapore.",
  alternates: { canonical: "/our-work" },
  openGraph: {
    title: "Our Work | PromoPower",
    description:
      "Portfolio of professional staffing activations and customer-facing campaign executions across Singapore.",
    url: "https://promopower.com.sg/our-work",
    siteName: "PromoPower",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | PromoPower",
    description:
      "Portfolio of professional staffing activations across Singapore.",
  },
};

export default function OurWork() {
  return (
    <>
      <PageHero
        badge="Our Work"
        title="Campaign Portfolio"
        description="A selection of activations, retail promotions, roadshows and customer engagement campaigns supported by PromoPower across Singapore."
      />

      <section className="page-section">
        <div className="page-container">
          <div className="space-y-12">
            {PORTFOLIO_GROUPS.map((group) => (
              <section key={group.client} className="space-y-5">
                <div className="border-b border-white/10 pb-4">
                  <h2 className="font-headline text-3xl sm:text-4xl font-normal text-on-surface">
                    {group.client}
                  </h2>
                </div>

                <GalleryGrid photos={group.photos} label={group.client} />
              </section>
            ))}
          </div>
        </div>
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
