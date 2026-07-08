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
  title: "Roadshows & Consumer Engagement",
  description:
    "Roadshow and consumer engagement staffing in Singapore for islandwide promotional tours, consumer festivals, sampling drives and on-ground brand experiences.",
  keywords: [
    "roadshow staffing Singapore",
    "consumer engagement",
    "islandwide roadshow",
    "on-ground brand activation",
    "consumer festival staffing",
  ],
  alternates: { canonical: "/services/roadshows-consumer-engagement" },
  openGraph: {
    title: "Roadshows & Consumer Engagement | PromoPower",
    description:
      "Roadshow and consumer engagement staffing for islandwide promotional tours and on-ground brand experiences in Singapore.",
    url: "https://promopower.com.sg/services/roadshows-consumer-engagement",
    siteName: "PromoPower",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roadshows & Consumer Engagement | PromoPower",
    description:
      "Staffing for islandwide roadshows and on-ground consumer engagement campaigns in Singapore.",
  },
};

export default function RoadshowsConsumerEngagementPage() {
  const supportAreas = [
    "Roadshows",
    "Public activations",
    "Consumer engagement campaigns",
    "Lead generation activities",
    "Sampling initiatives",
    "Awareness campaigns",
    "Product introductions",
    "Community engagement programmes",
  ];

  return (
    <>
      <PageHero
        badge="Service"
        title="Creating Positive Customer Experiences Through Meaningful Engagement"
        description="Roadshows and public-facing campaigns provide valuable opportunities for organisations to engage directly with customers, increase visibility and strengthen awareness. PromoPower provides experienced personnel who help brands create positive customer experiences in dynamic and highly interactive environments."
      />

      <ServicePageWayfinding
        title="Roadshows & Consumer Engagement"
        path="/services/roadshows-consumer-engagement"
        description="Roadshow and consumer engagement staffing in Singapore for islandwide promotional tours, consumer festivals, sampling drives and on-ground brand experiences."
        navItems={serviceNav}
      >
      <section id="section-overview" className="page-section-anchor">
          <div className="prose-block max-w-3xl">
            <h2 className="section-title">Connecting Brands With People</h2>
            <p>
              Roadshows create opportunities for brands to step outside traditional environments and engage directly
              with customers.
            </p>
            <p>
              Whether the objective is awareness building, lead generation, product introduction or customer engagement,
              the quality of interactions often determines the success of the campaign.
            </p>
            <p>
              Our teams are selected and prepared to support these objectives while ensuring customers experience
              professional, positive and engaging interactions throughout the campaign.
            </p>
          </div>
      </section>

      <section id="section-support" className="page-section-anchor">
          <div className="max-w-3xl">
            <h2 className="section-title">Support Areas</h2>
            <p className="page-intro mb-8">
              Our roadshow and engagement teams support a range of consumer-facing initiatives, including:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3" aria-label="Roadshow support areas">
              {supportAreas.map((item) => (
                <li key={item} className="flex items-start gap-3 text-on-surface">
                  <span aria-hidden="true" className="material-symbols-outlined text-primary text-base mt-1">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
      </section>

      <section id="section-value" className="page-section-anchor">
          <div className="prose-block max-w-3xl">
            <h2 className="section-title">Every Interaction Shapes Perception</h2>
            <p>Roadshows place brands directly in front of customers.</p>
            <p>
              Professional engagement helps organisations maximise these opportunities by creating memorable
              experiences, encouraging participation and strengthening brand awareness through meaningful conversations.
            </p>
          </div>
      </section>
      </ServicePageWayfinding>

      <CTASection
        heading="Planning A Roadshow Or Consumer Campaign?"
        body="Speak with our team about your staffing requirements."
        primaryLabel="Get In Touch"
        primaryHref="/contact-us"
        secondaryLabel="Explore All Services"
        secondaryHref="/services"
      />
    </>
  );
}
