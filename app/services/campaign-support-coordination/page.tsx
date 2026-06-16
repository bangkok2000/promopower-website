import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PageContentRail from "@/components/PageContentRail";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Campaign Support & Coordination",
  description:
    "Campaign support and on-ground coordination for promotional rollouts in Singapore \u2014 supervisors, deployment management and end-to-end operational oversight.",
  keywords: [
    "campaign coordination Singapore",
    "campaign supervisors",
    "on-ground coordinator",
    "deployment management",
    "promotional rollout support",
  ],
  alternates: { canonical: "/services/campaign-support-coordination" },
  openGraph: {
    title: "Campaign Support & Coordination | PromoPower",
    description:
      "On-ground coordinators and supervisors for structured campaign rollouts in Singapore.",
    url: "https://promopower.com.sg/services/campaign-support-coordination",
    siteName: "PromoPower",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campaign Support & Coordination | PromoPower",
    description:
      "Supervisors and deployment management for promotional rollouts in Singapore.",
  },
};

export default function CampaignSupportCoordinationPage() {
  const supportServices = [
    "Deployment planning",
    "Scheduling coordination",
    "Attendance monitoring",
    "Personnel coordination",
    "Campaign communication",
    "Operational support",
    "Field coordination",
    "Execution oversight",
  ];

  return (
    <>
      <PageHero
        badge="Service"
        title="Supporting Successful Campaign Execution Behind The Scenes"
        description="Successful campaigns depend on more than the people customers see. They also depend on effective planning, coordination, communication and operational support working behind the scenes. PromoPower helps organisations maintain control, visibility and confidence throughout the campaign lifecycle through practical campaign support services."
      />

      <section className="page-section">
        <PageContentRail>
          <div className="prose-block max-w-3xl">
            <h2 className="section-title">Helping Campaigns Run Smoothly</h2>
            <p>
              Managing customer-facing campaigns often involves coordinating multiple moving parts, locations, schedules
              and personnel.
            </p>
            <p>
              Without proper oversight, even well-planned campaigns can encounter operational challenges that affect
              execution quality.
            </p>
            <p>
              PromoPower provides support that helps organisations maintain consistency, improve coordination and reduce
              operational complexity throughout campaign delivery.
            </p>
          </div>
        </PageContentRail>
      </section>

      <section className="page-section section-muted">
        <PageContentRail>
          <div className="max-w-3xl">
            <h2 className="section-title">Support Services</h2>
            <p className="page-intro mb-8">
              Our coordination services keep campaign operations on track from briefing through to execution:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3" aria-label="Campaign support services">
              {supportServices.map((item) => (
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
            <h2 className="section-title">Focused On Reliability And Accountability</h2>
            <p>
              Our role is to help create an environment where campaigns can operate efficiently and confidently.
            </p>
            <p>
              By maintaining visibility across staffing activities and supporting communication between stakeholders,
              we help organisations focus on campaign outcomes while we help manage operational requirements.
            </p>
          </div>
        </PageContentRail>
      </section>

      <section className="page-section section-muted">
        <PageContentRail>
          <div className="prose-block max-w-3xl">
            <h2 className="section-title">Execution Often Determines Success</h2>
            <p>
              Many campaigns succeed or fail based on operational execution rather than strategic intent.
            </p>
            <p>
              Strong coordination helps reduce uncertainty, improve consistency and ensure that plans are translated
              into successful customer experiences.
            </p>
          </div>
        </PageContentRail>
      </section>

      <CTASection
        heading="Need Additional Campaign Support?"
        body="Let’s discuss how PromoPower can help support your next campaign."
        primaryLabel="Speak With Our Team"
        primaryHref="/contact-us"
      />
    </>
  );
}
