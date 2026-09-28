import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import ServicePageWayfinding from "@/components/ServicePageWayfinding";

const serviceNav = [
  { id: "section-overview", label: "Overview" },
  { id: "section-support", label: "Activation support" },
  { id: "section-value", label: "Value" },
];

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
        title="Retail Teams For Demonstrations, Promotions And Sampling"
        description="In-store work at the shelf or counter, including campaigns that run in more than one outlet. The script, trading hours and sampling rules are set before the roster is issued."
      />

      <ServicePageWayfinding
        title="Retail Activation Teams"
        path="/services/retail-activation-teams"
        description="Coordinated retail activation teams in Singapore for multi-location campaigns, mall promotions, counter takeovers and structured retail rollouts."
        navItems={serviceNav}
      >
      <section id="section-overview" className="page-section-anchor">
          <div className="prose-block max-w-3xl">
            <h2 className="section-title">How A Multi-Store Roster Is Set</h2>
            <p>
              Send the store list, trading hours, headcount per store and the product points staff should use. If sampling is involved, include what can be handed out and any store restrictions.
            </p>
            <p>
              The same briefing is used across outlets unless you tell us a store needs a change. Attendance is checked against that roster.
            </p>
          </div>
      </section>

      <section id="section-support" className="page-section-anchor">
          <div className="max-w-3xl">
            <h2 className="section-title">Activation Support</h2>
            <p className="page-intro mb-8">
              In-store work we staff. Say which activities apply so the briefing is not a generic retail script.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2" aria-label="Activation support areas">
              {activationSupport.map((item) => (
                <li key={item} className="text-slate-700 pl-4 border-l-2 border-slate-300 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
      </section>

      <section id="section-value" className="page-section-anchor">
          <div className="prose-block max-w-3xl">
            <h2 className="section-title">What Changes By Store Type</h2>
            <p>
              A department-store counter, a supermarket aisle and a travel-retail unit do not share the same footfall, uniform standard or sampling rules. Name the banner and the fixture when you enquire.
            </p>
          </div>
      </section>
      </ServicePageWayfinding>

      <CTASection
        heading="Planning A Retail Campaign?"
        body="Send the store list, dates, hours and headcount per outlet."
        primaryLabel="Speak With Our Team"
        primaryHref="/contact-us"
        secondaryLabel="Explore All Services"
        secondaryHref="/services"
      />
    </>
  );
}
