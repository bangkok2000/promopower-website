import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import ServicePageWayfinding from "@/components/ServicePageWayfinding";

const serviceNav = [
  { id: "section-overview", label: "Overview" },
  { id: "section-support", label: "Support areas" },
];

export const metadata: Metadata = {
  title: "Event Personnel",
  description:
    "Reliable event personnel in Singapore for corporate events, conferences, brand activations, VIP hospitality and large-scale public events.",
  keywords: [
    "event staffing Singapore",
    "event personnel",
    "corporate event staff",
    "VIP event hostess",
    "conference staffing Singapore",
  ],
  alternates: { canonical: "/services/event-personnel" },
  openGraph: {
    title: "Event Personnel | PromoPower",
    description:
      "Professional event personnel for corporate events, brand activations and VIP hospitality in Singapore.",
    url: "https://promopower.com.sg/services/event-personnel",
    siteName: "PromoPower",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Personnel | PromoPower",
    description:
      "Event staffing for corporate, conference and VIP hospitality programmes in Singapore.",
  },
};

export default function EventPersonnelPage() {
  const supportAreas = [
    "Registration",
    "Guest management",
    "Ushering",
    "Customer assistance",
    "Crowd coordination",
    "Information counters",
    "VIP support",
    "General event operations",
  ];

  return (
    <>
      <PageHero
        badge="Service"
        title="Event Personnel For Registration, Ushering And Guest Flow"
        description="Floor roles for exhibitions, conferences, launches and corporate events. The organiser keeps the event plan. PromoPower staffs the positions, briefs them on the run of show, and covers the roster."
      />

      <ServicePageWayfinding
        title="Event Personnel"
        path="/services/event-personnel"
        description="Reliable event personnel in Singapore for corporate events, conferences, brand activations, VIP hospitality and large-scale public events."
        navItems={serviceNav}
      >
      <section id="section-overview" className="page-section-anchor">
          <div className="prose-block max-w-3xl">
            <h2 className="section-title">What The Team Is Briefed On</h2>
            <p>
              Position, shift, who they report to on site, and which questions they answer versus refer. Registration staff need the badge and queue process. Ushers need the room flow. Information counters need the approved answers, not a general script.
            </p>
            <p>
              Send the run of show and the position list before the briefing. If a call time or uniform is set by the venue or client, include that too.
            </p>
          </div>
      </section>

      <section id="section-support" className="page-section-anchor">
          <div className="max-w-3xl">
            <h2 className="section-title">Support Areas</h2>
            <p className="page-intro mb-8">
              Roles we roster. Say which positions you need and how many per shift.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2" aria-label="Event support areas">
              {supportAreas.map((item) => (
                <li key={item} className="text-slate-700 pl-4 border-l-2 border-slate-300 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
      </section>
      </ServicePageWayfinding>

      <CTASection
        heading="Planning An Event?"
        body="Send the date, venue, positions and headcount per shift."
        primaryLabel="Speak With Our Team"
        primaryHref="/contact-us"
        secondaryLabel="Explore All Services"
        secondaryHref="/services"
      />
    </>
  );
}
