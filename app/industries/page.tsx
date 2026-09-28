import type { Metadata } from "next";
import IndustryCard from "@/components/IndustryCard";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import PageContentRail from "@/components/PageContentRail";
import PageEndLinks from "@/components/PageEndLinks";
import PageHero from "@/components/PageHero";
import PageWayfindingBand from "@/components/PageWayfindingBand";
import { simplePageBreadcrumb } from "@/lib/page-nav-config";
import { buildPageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Industries",
  description:
    "Explore the industries PromoPower supports with professional staffing and campaign execution in Singapore, including FMCG, luxury retail, electronics, F&B and events.",
  path: "/industries",
  keywords: [
    "staffing by industry Singapore",
    "FMCG promoters Singapore",
    "luxury retail staffing",
    "event staffing Singapore",
  ],
});

const industryGroups = [
  {
    name: "Beauty & Cosmetics",
    description: "Sampling, launches and counter work. Staff need the product points and the brand's presentation standard before the shift.",
    icon: "spa",
  },
  {
    name: "Luxury Retail",
    description: "Selected for stores where the brief sets a higher bar for presentation, conduct and how customers are approached.",
    icon: "diamond",
  },
  {
    name: "Consumer Electronics",
    description: "Demonstrations and in-store explanation of features. The approved comparison points are part of the briefing.",
    icon: "memory",
  },
  {
    name: "FMCG",
    description: "Higher headcount across outlets for promotions and sampling. The same script is used unless a banner needs a change.",
    icon: "shopping_basket",
  },
  {
    name: "Food & Beverage",
    description: "Tasting and in-store promotion. The briefing covers how the product is offered and any sampling limits.",
    icon: "restaurant",
  },
  {
    name: "Events & Exhibitions",
    description: "Registration, visitor flow and front-of-house roles. Positions and the run of show are briefed before call time.",
    icon: "event",
  },
  {
    name: "Travel Retail",
    description: "Airport and transit counters, where footfall is uneven and shifts have to match retail hours.",
    icon: "flight",
  },
  {
    name: "Financial Services",
    description: "Booths, roadshows and customer-education stands. Staff use the approved script and do not go beyond it.",
    icon: "account_balance",
  },
  {
    name: "Healthcare & Wellness",
    description: "Awareness and product explanation where claims stay inside the approved brief.",
    icon: "health_and_safety",
  },
  {
    name: "Lifestyle Brands",
    description: "Apparel, home and personal-care work where the brief is about how the product is shown, worn or used.",
    icon: "checkroom",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd(
          "Industries We Support",
          "/industries",
          "Professional staffing support across beauty, luxury retail, FMCG, electronics, F&B, events and more in Singapore.",
        )}
      />
      <PageWayfindingBand breadcrumb={<PageBreadcrumb items={simplePageBreadcrumb("Industries")} />} />
      <PageHero
        badge="Industries"
        title="Industries We Support"
        description="The setting changes the briefing. A luxury counter, a supermarket sampling stand and an exhibition desk do not use the same script, uniform standard or customer approach."
        compact
      />

      <section className="py-12 sm:py-14 lg:py-16">
        <PageContentRail>
          <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary mb-8 font-label">
            Sector Experience
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industryGroups.map((industry) => (
              <IndustryCard
                key={industry.name}
                name={industry.name}
                description={industry.description}
                icon={industry.icon}
              />
            ))}
          </div>
          <PageEndLinks />
        </PageContentRail>
      </section>

      <section className="py-12 sm:py-14 lg:py-16 bg-slate-50 border-y border-slate-200">
        <div className="page-container-narrow text-center">
          <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary mb-4 font-label">
            Our Approach
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-6">Name The Setting In The Brief</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed max-w-2xl mx-auto">
            <p>
              Tell us the banner or venue, what customers should be told, and any rules on sampling, claims or appearance. That is what the shortlist and the briefing are built from.
            </p>
            <p className="text-sm text-slate-500 pt-2">
              Client names and campaign details are not published here.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Send The Setting With The Brief"
        body="Name the stores or venues, the dates, and what customers are allowed to be told."
        primaryLabel="Speak With Our Team"
        primaryHref="/contact-us"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
