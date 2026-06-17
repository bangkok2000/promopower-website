import Link from "next/link";
import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Services | PromoPower",
  description:
    "Explore PromoPower's workforce solutions, including brand ambassadors, event personnel, retail activation teams and campaign support services in Singapore.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | PromoPower",
    description:
      "Professional workforce solutions designed around campaign objectives, supported by structured recruitment, preparation and coordination.",
    url: "https://promopower.com.sg/services",
    siteName: "PromoPower",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | PromoPower",
    description:
      "Professional staffing services for promotions, retail activations, events and customer engagement programmes.",
  },
};

const services = [
  {
    title: "Brand Ambassadors",
    summary:
      "Customer-facing personnel suited to launches and activations where presentation, confidence, product explanation and engagement matter.",
    points: [
      "Selected based on communication ability, professionalism and campaign fit.",
      "Prepared with campaign briefings, product information and engagement guidance before deployment.",
      "Suitable for product launches, demonstrations, experiential activities and brand engagement programmes.",
    ],
    href: "/services/brand-ambassadors",
    icon: "person_celebrate",
  },
  {
    title: "Event Personnel",
    summary:
      "Dependable event teams for registration, guest management and on-site customer support.",
    points: [
      "Supports exhibitions, conferences, roadshows and corporate events.",
      "Helps maintain smooth operational flow across customer touchpoints.",
      "Backed by structured coordination and responsive support.",
    ],
    href: "/services/event-personnel",
    icon: "event_available",
  },
  {
    title: "Retail Activation Teams",
    summary:
      "Customer-facing teams for in-store activities and retail engagement programmes.",
    points: [
      "Supports promotions, product discovery and point-of-decision engagement.",
      "Adapted to different store environments and campaign objectives.",
      "Focused on consistent brand representation and service quality.",
    ],
    href: "/services/retail-activation-teams",
    icon: "storefront",
  },
  {
    title: "Roadshows & Consumer Engagement",
    summary:
      "Flexible staffing support for roadshows and high-footfall public activation environments.",
    points: [
      "Designed for campaigns requiring visibility and direct customer interaction.",
      "Supports outreach, lead capture and brand engagement activities.",
      "Delivered with operational planning and on-ground coordination.",
    ],
    href: "/services/roadshows-consumer-engagement",
    icon: "route",
  },
  {
    title: "Campaign Support & Coordination",
    summary:
      "Operational support services that keep campaigns organised and execution-ready.",
    points: [
      "Includes deployment planning, scheduling and attendance monitoring.",
      "Supports campaign continuity through responsive communication.",
      "Helps clients reduce operational friction from start to finish.",
    ],
    href: "/services/campaign-support-coordination",
    icon: "monitoring",
  },
];

const servicePillars = [
  "Professional recruitment and screening",
  "Structured campaign preparation",
  "Reliable deployment planning",
  "Responsive operational support",
];

export default function Services() {
  return (
    <>
      <PageHero
        badge="Services"
        title="Workforce Solutions Built Around Campaign Objectives"
        description="Every campaign has different customer expectations, operating conditions and staffing requirements. PromoPower provides practical workforce solutions that help organisations execute with confidence."
      />

      <section className="page-section">
        <div className="page-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service) => (
            <article key={service.title} className="content-card flex flex-col h-full">
              <div className="icon-badge">
                <span className="material-symbols-outlined">{service.icon}</span>
              </div>
              <h2 className="text-2xl font-headline font-normal text-on-surface mb-4">{service.title}</h2>
              <p className="text-on-surface-variant leading-relaxed mb-5">{service.summary}</p>
              <ul className="space-y-3 mb-6 flex-1">
                {service.points.map((point) => (
                  <li key={point} className="text-on-surface-variant text-sm leading-relaxed flex gap-2">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link href={service.href} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all mt-auto">
                Learn More
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section section-elevated">
        <div className="page-container grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="section-title">A Structured Service Approach</h2>
            <p className="prose-block">
              Our service model combines professional staffing with structured operational processes. This helps
              clients maintain quality, consistency and control across customer-facing campaigns.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {servicePillars.map((pillar) => (
              <div key={pillar} className="pillar-chip">
                {pillar}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Discuss Your Campaign Requirements"
        body="If you are planning a campaign and need professional workforce support, our team can recommend a solution aligned with your objectives, timeline and operational requirements."
        primaryLabel="Speak With Our Team"
        primaryHref="/contact-us"
      />
    </>
  );
}
