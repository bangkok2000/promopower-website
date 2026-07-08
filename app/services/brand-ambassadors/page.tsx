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
      <PageHero
        badge="Service"
        title="Trained Brand Ambassadors Who Represent Your Brand With Confidence"
        description="Brand ambassadors play a vital role in creating positive first impressions, strengthening customer engagement and helping organisations build meaningful connections with their audiences. PromoPower provides trained brand ambassadors who can support both brand representation and product promotion across a wide range of customer-facing environments."
      />

      <ServicePageWayfinding
        title="Brand Ambassadors"
        path="/services/brand-ambassadors"
        description="Trained brand ambassadors in Singapore for product launches, product promotion, retail activations, sampling and customer-facing campaigns."
        navItems={serviceNav}
      >
      <section id="section-overview" className="page-section-anchor">
          <div className="prose-block max-w-3xl">
            <h2 className="section-title">Supporting Brand Representation And Product Promotion</h2>
            <p>Brand ambassadors often serve as the face of a campaign while also helping customers understand the product in front of them.</p>
            <p>
              Whether introducing a new product, supporting an activation, engaging customers at an event or representing
              a brand in a retail environment, they play an important role in shaping customer perceptions and influencing
              experiences.
            </p>
            <p>
              At PromoPower, we understand that effective brand representation requires more than simply placing people
              on-site. It requires selecting individuals who align with campaign objectives, communicate effectively,
              understand the product they are promoting and recognise the importance of professionalism.
            </p>
            <p>
              Our ambassadors are chosen based on communication ability, confidence, presentation and suitability for the
              specific environment in which they will operate.
            </p>
          </div>
      </section>

      <section id="section-support" className="page-section-anchor">
          <div className="max-w-3xl">
            <h2 className="section-title">Supporting Customer-Facing Campaign Activity</h2>
            <p className="page-intro mb-8">Our brand ambassadors can support a variety of activities including:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3" aria-label="Supported activities">
              {supportAreas.map((item) => (
                <li key={item} className="flex items-start gap-3 text-on-surface">
                  <span aria-hidden="true" className="material-symbols-outlined text-primary text-base mt-1">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="prose-block mt-8">
              Each deployment is supported by structured preparation, clear briefing and ongoing coordination to help
              ensure consistent representation throughout the campaign while helping customers receive clear, confident
              product information.
            </p>
          </div>
      </section>

      <section id="section-value" className="page-section-anchor">
          <div className="prose-block max-w-3xl">
            <h2 className="section-title">People Shape Perceptions And Purchase Confidence</h2>
            <p>Customers often remember the people they interacted with long after they have forgotten the details of a campaign.</p>
            <p>
              Trained brand ambassadors help create positive experiences, reinforce brand values, explain products clearly
              and encourage meaningful engagement. By placing the right people in front of the right audiences,
              organisations can strengthen campaign effectiveness while protecting brand reputation.
            </p>
          </div>
      </section>
      </ServicePageWayfinding>

      <CTASection
        heading="Looking For Trained Brand Ambassadors?"
        body="Contact our team to discuss your campaign objectives and staffing requirements."
        primaryLabel="Speak With Our Team"
        primaryHref="/contact-us"
        secondaryLabel="Explore All Services"
        secondaryHref="/services"
      />
    </>
  );
}
