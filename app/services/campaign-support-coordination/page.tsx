import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import ServicePageWayfinding from "@/components/ServicePageWayfinding";

const serviceNav = [
  { id: "section-overview", label: "Overview" },
  { id: "section-services", label: "Support services" },
  { id: "section-reliability", label: "Reliability" },
  { id: "section-execution", label: "Execution" },
];

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
    "Deployment plan by location and shift",
    "Schedules issued before the first day",
    "Attendance checked against the roster",
    "Replacements when someone cannot attend",
    "Client updates while the campaign is running",
    "Briefing coordinated before people go on site",
    "A field contact where the brief requires one",
  ];

  return (
    <>
      <ServicePageWayfinding
        hero={
          <PageHero
            badge="Service"
            title="Rosters, Attendance And A Contact While The Campaign Is Live"
            description="Coordination is the work behind the people on site: who is where, whether they attended, and who the client calls when something changes. It is included with a frontline team, or booked on its own."
            compact
          />
        }
        title="Campaign Support & Coordination"
        path="/services/campaign-support-coordination"
        description="Campaign support and on-ground coordination for promotional rollouts in Singapore — supervisors, deployment management and end-to-end operational oversight."
        navItems={serviceNav}
      >
      <section id="section-overview" className="page-section-anchor">
          <div className="prose-block max-w-3xl">
            <h2 className="section-title">What Coordination Covers</h2>
            <p>
              A plan that names locations, shifts and headcount. Attendance checked against that plan. A replacement if someone cannot attend. A person the client can call during the campaign.
            </p>
            <p>
              If you already have your own supervisors and only need people on the floor, say so. Coordination is then limited to the roster and attendance, not a second management layer.
            </p>
          </div>
      </section>

      <section id="section-services" className="page-section-anchor">
          <div className="max-w-3xl">
            <h2 className="section-title">Support Services</h2>
            <p className="page-intro mb-8">
              Tasks included. They are not eight different products.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2" aria-label="Campaign support services">
              {supportServices.map((item) => (
                <li key={item} className="text-slate-700 pl-4 border-l-2 border-slate-300 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
      </section>

      <section id="section-reliability" className="page-section-anchor">
          <div className="prose-block max-w-3xl">
            <h2 className="section-title">Who You Deal With</h2>
            <p>
              One operations contact for the roster and for changes. If a site needs someone physically present, that is agreed in the brief. It is not assumed.
            </p>
          </div>
      </section>

      <section id="section-execution" className="page-section-anchor">
          <div className="prose-block max-w-3xl">
            <h2 className="section-title">What We Need To Build The Roster</h2>
            <p>
              Dates, locations, hours, headcount per site, and who on your side approves changes. If uniforms, call times or reporting lines are already set, send those with the brief.
            </p>
          </div>
      </section>
      </ServicePageWayfinding>

      <CTASection
        heading="Send The Site List"
        body="Include dates, hours and headcount per location. Say whether you also need a field contact."
        primaryLabel="Speak With Our Team"
        primaryHref="/contact-us"
        secondaryLabel="Explore All Services"
        secondaryHref="/services"
      />
    </>
  );
}
