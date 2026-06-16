import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PageContentRail from "@/components/PageContentRail";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Retail Activation Teams",
  description:
    "Coordinated retail activation teams in Singapore for multi-location campaigns, mall promotions, counter takeovers and structured retail rollouts.",
  keywords: [
    "retail activation Singapore",
    "retail activation teams",
    "mall activation staffing",
    "counter takeover staffing",
    "multi-location retail campaign",
  ],
  alternates: { canonical: "/services/retail-activation-teams" },
  openGraph: {
    title: "Retail Activation Teams | PromoPower",
    description:
      "Coordinated retail activation teams for multi-location campaigns and mall promotions in Singapore.",
    url: "https://promopower.com.sg/services/retail-activation-teams",
    siteName: "PromoPower",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Activation Teams | PromoPower",
    description:
      "Retail activation teams for multi-location campaigns and structured rollouts in Singapore.",
  },
};

export default function RetailActivationTeamsPage() {
  const activationSupport = [
    "Product demonstrations",
    "Retail promotions",
    "Seasonal campaigns",
    "In-store activations",
    "Product launches",
    "Sampling programmes",
    "Customer engagement initiatives",
    "Promotional support activities",
  ];

  return (
    <>
      <PageHero
        badge="Service"
        title="Helping Brands Engage Customers At The Point Of Decision"
        description="Retail environments provide valuable opportunities to influence customer decisions, encourage product discovery and strengthen brand visibility. PromoPower provides retail activation teams who help organisations engage customers effectively while maintaining professional standards of representation and service."
      />

      <section className="page-section">
        <PageContentRail>
          <div className="prose-block max-w-3xl">
            <h2 className="section-title">Supporting Meaningful Retail Engagement</h2>
            <p>Many purchasing decisions are made in-store.</p>
            <p>
              Creating positive customer interactions at this critical moment can significantly influence awareness,
              consideration and purchasing behaviour.
            </p>
            <p>
              Our retail activation teams help organisations engage shoppers through product demonstrations, promotional
              activities, customer interaction and brand education initiatives designed to support campaign objectives.
            </p>
            <p>
              By combining strong communication skills with professional preparation, our personnel help brands create
              memorable and productive retail experiences.
            </p>
          </div>
        </PageContentRail>
      </section>

      <section className="page-section section-muted">
        <PageContentRail>
          <div className="max-w-3xl">
            <h2 className="section-title">Activation Support</h2>
            <p className="page-intro mb-8">
              Our teams are deployed across a range of retail engagement activities, including:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3" aria-label="Activation support areas">
              {activationSupport.map((item) => (
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
            <h2 className="section-title">The Retail Environment Remains A Powerful Touchpoint</h2>
            <p>
              Even in an increasingly digital world, physical retail environments continue to play an important role in
              influencing customer behaviour.
            </p>
            <p>
              Well-executed retail activations help brands create stronger customer connections, encourage product
              exploration and reinforce brand presence where purchasing decisions are often made.
            </p>
          </div>
        </PageContentRail>
      </section>

      <CTASection
        heading="Planning A Retail Campaign?"
        body="Let’s discuss how PromoPower can support your retail activation objectives."
        primaryLabel="Speak With Our Team"
        primaryHref="/contact-us"
        secondaryLabel="Explore All Services"
        secondaryHref="/services"
      />
    </>
  );
}
