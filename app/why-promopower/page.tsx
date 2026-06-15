import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Why PromoPower | PromoPower",
  description:
    "Learn why organisations trust PromoPower for professional staffing support, structured processes and reliable campaign execution.",
  alternates: { canonical: "/why-promopower" },
};

const reasons = [
  {
    title: "Experience Since 2002",
    description:
      "More than two decades supporting campaigns across promotions, retail activations, events and customer engagement programmes.",
    icon: "history",
  },
  {
    title: "Professional Recruitment Standards",
    description:
      "Personnel are selected based on communication ability, professionalism and campaign suitability.",
    icon: "groups",
  },
  {
    title: "Structured Preparation",
    description:
      "Briefings and preparation processes help teams represent brands consistently and confidently.",
    icon: "school",
  },
  {
    title: "Operational Coordination",
    description:
      "Deployment planning and responsive campaign support help reduce execution friction.",
    icon: "support_agent",
  },
  {
    title: "MOM Licensed Agency",
    description:
      "Licensed employment agency operations provide compliance-conscious support and client confidence.",
    icon: "verified_user",
  },
  {
    title: "Partnership Mindset",
    description:
      "Our team works alongside clients to align staffing support with campaign objectives and practical realities.",
    icon: "handshake",
  },
];

export default function WhyPromoPowerPage() {
  return (
    <>
      <PageHero
        badge="Why PromoPower"
        title="Why Organisations Choose PromoPower"
        description="A successful staffing partnership requires more than manpower. It requires experience, process discipline, responsive support and consistent execution."
      />

      <section className="page-section">
        <div className="page-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <article key={reason.title} className="content-card h-full">
              <div className="icon-badge">
                <span className="material-symbols-outlined">{reason.icon}</span>
              </div>
              <h2 className="text-2xl font-headline font-normal text-on-surface mb-3">{reason.title}</h2>
              <p className="text-on-surface-variant leading-relaxed">{reason.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section section-muted">
        <div className="page-container-narrow text-center prose-block">
          <h2 className="section-title">A Practical Partner For Campaign Execution</h2>
          <p>
            We understand that each deployment represents your brand in front of real customers. This is why
            our support model combines suitable personnel, clear preparation and dependable coordination.
          </p>
          <p>
            Our objective is to help your team execute with confidence while reducing operational uncertainty.
          </p>
          <p className="text-sm">
            PromoPower Pte Ltd is a MOM licensed employment agency. EA License No: 20C0109.
          </p>
        </div>
      </section>

      <CTASection
        heading="Let Us Support Your Next Campaign"
        body="Speak with our team to discuss your requirements, timeline and staffing objectives. We will recommend a solution aligned with your operational needs."
        primaryLabel="Contact PromoPower"
        primaryHref="/contact-us"
        secondaryLabel="Explore Services"
        secondaryHref="/services"
      />
    </>
  );
}
