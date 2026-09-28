import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import ServicePageWayfinding from "@/components/ServicePageWayfinding";

const serviceNav = [
  { id: "section-overview", label: "Overview" },
  { id: "section-support", label: "Support areas" },
  { id: "section-value", label: "Value" },
];

export const metadata: Metadata = {
  title: "Brand Ambassadors",
  description:
    "Trained brand ambassadors in Singapore for product launches, product promotion, retail activations, sampling and customer-facing campaigns.",
  keywords: [
    "brand ambassadors Singapore",
    "product promoters Singapore",
    "product launch staffing",
    "retail activation ambassadors",
    "sampling promoters Singapore",
    "PromoPower brand ambassadors",
  ],
  alternates: { canonical: "/services/brand-ambassadors" },
  openGraph: {
    title: "Brand Ambassadors | PromoPower",
    description:
      "Trained brand ambassadors for customer-facing campaigns, product launches, product promotion and retail activations in Singapore.",
    url: "https://promopower.com.sg/services/brand-ambassadors",
    siteName: "PromoPower",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Ambassadors | PromoPower",
    description:
      "Trained brand ambassadors for product launches, product promotion and retail activations in Singapore.",
  },
};

export default function BrandAmbassadorsPage() {
  const supportAreas = [
    "Product launches",
    "Product demonstrations",
    "Customer education",
    "Retail activations",
    "Roadshows",
    "Exhibitions",
    "Corporate events",
    "Consumer engagement campaigns",
    "Sampling programmes",
    "Awareness initiatives",
  ];

  return (
    <>
      <ServicePageWayfinding
        hero={
          <PageHero
            badge="Service"
            title="Brand Ambassadors For Launches, Sampling And Counters"
            description="They explain a product, sample it, or represent the brand at a launch, counter or event. They are briefed on what to say, what not to say, and how the brand expects them to present."
            compact
          />
        }
        title="Brand Ambassadors"
        path="/services/brand-ambassadors"
        description="Trained brand ambassadors in Singapore for product launches, product promotion, retail activations, sampling and customer-facing campaigns."
        navItems={serviceNav}
      >
      <section id="section-overview" className="page-section-anchor">
          <div className="prose-block max-w-3xl">
            <h2 className="section-title">Who Is Fielded, And On What Basis</h2>
            <p>
              Selection is against the brief: communication, presentation, and whether the person suits that counter, launch or event. A beauty sampling stand and a luxury counter are not staffed from the same shortlist.
            </p>
            <p>
              Before the first shift, the team is briefed on the product points, the customer approach, and any restrictions the brand sets. If you have an approved script or claims list, that is what they use.
            </p>
          </div>
      </section>

      <section id="section-support" className="page-section-anchor">
          <div className="max-w-3xl">
            <h2 className="section-title">Typical Assignments</h2>
            <p className="page-intro mb-8">The role covers these jobs. Tell us which ones apply so the briefing matches the site.</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2" aria-label="Supported activities">
              {supportAreas.map((item) => (
                <li key={item} className="text-slate-700 pl-4 border-l-2 border-slate-300 text-sm">
                  {item}
                </li>
              ))}
            </ul>
            <p className="prose-block mt-8">
              You provide the product points, any dos and don&apos;ts, and appearance rules if you have them. PromoPower screens, briefs, rosters and stays contactable once shifts start.
            </p>
          </div>
      </section>

      <section id="section-value" className="page-section-anchor">
          <div className="prose-block max-w-3xl">
            <h2 className="section-title">What We Need From You</h2>
            <p>
              Dates, locations, headcount, and the product information customers should hear. If sampling or a demonstration is involved, include the handling rules and what staff are allowed to claim.
            </p>
            <p>
              Without that, the briefing is guesswork. With it, the same points are used at every site on the roster.
            </p>
          </div>
      </section>
      </ServicePageWayfinding>

      <CTASection
        heading="Send The Product Brief"
        body="Include dates, sites, headcount and the points customers should hear."
        primaryLabel="Speak With Our Team"
        primaryHref="/contact-us"
        secondaryLabel="Explore All Services"
        secondaryHref="/services"
      />
    </>
  );
}
