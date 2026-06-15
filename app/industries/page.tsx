import type { Metadata } from "next";
import IndustryCard from "@/components/IndustryCard";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Industries | PromoPower",
  description:
    "Explore the industries PromoPower supports with professional staffing and campaign execution solutions in Singapore.",
  alternates: { canonical: "/industries" },
};

const industryGroups = [
  {
    name: "Beauty & Cosmetics",
    description: "Support for launches, sampling and in-store customer engagement across beauty retail environments.",
    icon: "spa",
  },
  {
    name: "Luxury Retail",
    description: "Personnel selected for premium environments where presentation, service standards and discretion matter.",
    icon: "diamond",
  },
  {
    name: "Consumer Electronics",
    description: "Product promoters prepared to communicate key features clearly in high-consideration purchase journeys.",
    icon: "memory",
  },
  {
    name: "FMCG",
    description: "Scalable deployment support for retail campaigns requiring broad customer outreach and consistent execution.",
    icon: "shopping_basket",
  },
  {
    name: "Food & Beverage",
    description: "Customer-facing teams for tasting campaigns, in-store promotions and branded engagement initiatives.",
    icon: "restaurant",
  },
  {
    name: "Events & Exhibitions",
    description: "Operational staffing support for registration, visitor management and front-of-house campaign activities.",
    icon: "event",
  },
  {
    name: "Travel Retail",
    description: "Campaign support tailored to transit environments and service expectations in high-footfall locations.",
    icon: "flight",
  },
  {
    name: "Financial Services",
    description: "Professional staffing support for customer education, outreach and lead-generation activities.",
    icon: "account_balance",
  },
  {
    name: "Healthcare & Wellness",
    description: "Personnel prepared for customer interactions requiring care, professionalism and product clarity.",
    icon: "health_and_safety",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        badge="Industries"
        title="Industries We Support"
        description="PromoPower supports organisations across diverse sectors. Our team adapts staffing strategy, preparation and deployment based on each industry&apos;s customer expectations and operating conditions."
      />

      <section className="page-section">
        <div className="page-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industryGroups.map((industry) => (
            <IndustryCard
              key={industry.name}
              name={industry.name}
              description={industry.description}
              icon={industry.icon}
            />
          ))}
        </div>
      </section>

      <section className="page-section section-muted">
        <div className="page-container-narrow text-center prose-block">
          <h2 className="section-title">Adapted For Each Campaign Environment</h2>
          <p>
            Different industries require different customer engagement approaches, service expectations and
            operational planning. Our experience helps us tailor workforce support accordingly.
          </p>
          <p>
            We focus on consistent execution, professional representation and practical support that aligns
            with campaign objectives.
          </p>
          <p className="text-sm">
            To respect confidentiality and intellectual property requirements, campaign details are shared selectively.
          </p>
        </div>
      </section>

      <CTASection
        heading="Plan An Industry-Specific Campaign"
        body="If you need workforce support for a specific industry context, speak with our team and we will recommend a practical deployment approach."
        primaryLabel="Speak With Our Team"
        primaryHref="/contact-us"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
