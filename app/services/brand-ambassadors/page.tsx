import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PageContentRail from "@/components/PageContentRail";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Brand Ambassadors",
  description:
    "Professionally trained brand ambassadors in Singapore for product launches, retail activations, customer-facing campaigns and premium brand engagement.",
  keywords: [
    "brand ambassadors Singapore",
    "luxury brand ambassadors",
    "product launch staffing",
    "retail activation ambassadors",
    "PromoPower brand ambassadors",
  ],
  alternates: { canonical: "/services/brand-ambassadors" },
  openGraph: {
    title: "Brand Ambassadors | PromoPower",
    description:
      "Professional brand ambassadors for customer-facing campaigns, product launches and retail activations in Singapore.",
    url: "https://promopower.com.sg/services/brand-ambassadors",
    siteName: "PromoPower",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Ambassadors | PromoPower",
    description:
      "Professional brand ambassadors for product launches and retail activations in Singapore.",
  },
};

export default function BrandAmbassadorsPage() {
  const supportAreas = [
    "Product launches",
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
        title="Professional Brand Ambassadors Who Represent Your Brand With Confidence"
        description="Brand ambassadors play a vital role in creating positive first impressions, strengthening customer engagement and helping organisations build meaningful connections with their audiences. PromoPower provides professional brand ambassadors who are selected, prepared and supported to represent brands confidently across a wide range of customer-facing environments."
      />

      <section className="page-section">
        <PageContentRail>
          <div className="prose-block max-w-3xl">
            <h2 className="section-title">Creating Meaningful Customer Connections</h2>
            <p>Brand ambassadors often serve as the face of a campaign.</p>
            <p>
              Whether introducing a new product, supporting an activation, engaging customers at an event or representing
              a brand in a retail environment, they play an important role in shaping customer perceptions and influencing
              experiences.
            </p>
            <p>
              At PromoPower, we understand that effective brand representation requires more than simply placing people
              on-site. It requires selecting individuals who align with campaign objectives, communicate effectively and
              understand the importance of professionalism.
            </p>
            <p>
              Our ambassadors are chosen based on communication ability, confidence, presentation and suitability for the
              specific environment in which they will operate.
            </p>
          </div>
        </PageContentRail>
      </section>

      <section className="page-section section-muted">
        <PageContentRail>
          <div className="max-w-3xl">
            <h2 className="section-title">Supporting Professional Brand Representation</h2>
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
              ensure consistent representation throughout the campaign.
            </p>
          </div>
        </PageContentRail>
      </section>

      <section className="page-section">
        <PageContentRail>
          <div className="prose-block max-w-3xl">
            <h2 className="section-title">People Shape Perceptions</h2>
            <p>Customers often remember the people they interacted with long after they have forgotten the details of a campaign.</p>
            <p>
              Professional brand ambassadors help create positive experiences, reinforce brand values and encourage
              meaningful engagement. By placing the right people in front of the right audiences, organisations can
              strengthen campaign effectiveness while protecting brand reputation.
            </p>
          </div>
        </PageContentRail>
      </section>

      <CTASection
        heading="Looking For Professional Brand Ambassadors?"
        body="Contact our team to discuss your campaign objectives and staffing requirements."
        primaryLabel="Speak With Our Team"
        primaryHref="/contact-us"
        secondaryLabel="Explore All Services"
        secondaryHref="/services"
      />
    </>
  );
}
