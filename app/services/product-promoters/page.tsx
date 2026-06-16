import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PageContentRail from "@/components/PageContentRail";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Product Promoters",
  description:
    "Trained product promoters in Singapore for retail demonstrations, in-store sampling, FMCG campaigns and consumer trial programmes.",
  keywords: [
    "product promoters Singapore",
    "retail promoters",
    "in-store sampling",
    "FMCG promoter staffing",
    "product demonstration staff",
  ],
  alternates: { canonical: "/services/product-promoters" },
  openGraph: {
    title: "Product Promoters | PromoPower",
    description:
      "Product promoters for in-store demonstrations, sampling and FMCG retail campaigns in Singapore.",
    url: "https://promopower.com.sg/services/product-promoters",
    siteName: "PromoPower",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Promoters | PromoPower",
    description:
      "Product promoters for retail demonstrations and consumer trial programmes in Singapore.",
  },
};

export default function ProductPromotersPage() {
  const keyResponsibilities = [
    "Product demonstrations",
    "Customer education",
    "Sampling programmes",
    "Product launches",
    "Retail promotions",
    "Consumer engagement",
    "Lead generation support",
    "Brand awareness activities",
  ];

  return (
    <>
      <PageHero
        badge="Service"
        title="Helping Customers Understand, Experience And Engage"
        description="Product promoters help bridge the gap between products and customers by creating informed, engaging and professional interactions. PromoPower provides trained promoters who help organisations communicate product benefits, answer customer questions and support customer decision-making."
      />

      <section className="page-section">
        <PageContentRail>
          <div className="prose-block max-w-3xl">
            <h2 className="section-title">Supporting Product Awareness And Customer Engagement</h2>
            <p>In today’s competitive marketplace, customers often require more information before making purchasing decisions.</p>
            <p>
              Effective promoters do more than explain product features. They help customers understand benefits, answer
              questions confidently and create positive interactions that encourage engagement.
            </p>
            <p>
              PromoPower helps organisations identify promoters who can communicate effectively while representing brands
              professionally.
            </p>
          </div>
        </PageContentRail>
      </section>

      <section className="page-section section-muted">
        <PageContentRail>
          <div className="max-w-3xl">
            <h2 className="section-title">Key Responsibilities</h2>
            <p className="page-intro mb-8">
              Our promoters are prepared to support a range of customer-facing activities, including:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3" aria-label="Key responsibilities">
              {keyResponsibilities.map((item) => (
                <li key={item} className="flex items-start gap-3 text-on-surface">
                  <span aria-hidden="true" className="material-symbols-outlined text-primary text-base mt-1">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </PageContentRail>
      </section>

      <section className="page-section">
        <PageContentRail>
          <div className="prose-block max-w-3xl">
            <h2 className="section-title">Knowledge Builds Confidence</h2>
            <p>Customers are more likely to engage with products when they receive clear, accurate and helpful information.</p>
            <p>
              Professional promoters help create informed customer experiences while supporting campaign objectives
              through positive and meaningful interactions.
            </p>
          </div>
        </PageContentRail>
      </section>

      <CTASection
        heading="Let’s Discuss Your Promotion Requirements"
        body="Tell us about your campaign objective, location and timeline. Our team will recommend a workforce solution suited to your needs."
        primaryLabel="Get In Touch"
        primaryHref="/contact-us"
        secondaryLabel="Explore All Services"
        secondaryHref="/services"
      />
    </>
  );
}
