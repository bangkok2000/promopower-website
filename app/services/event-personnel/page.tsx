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
        title="Reliable Event Personnel For Professional Event Execution"
        description="Events often involve numerous moving parts, tight schedules and high customer expectations. PromoPower provides dependable event personnel who help organisations deliver smooth, professional and well-organised events."
      />

      <ServicePageWayfinding
        title="Event Personnel"
        path="/services/event-personnel"
        description="Reliable event personnel in Singapore for corporate events, conferences, brand activations, VIP hospitality and large-scale public events."
        navItems={serviceNav}
      >
      <section id="section-overview" className="page-section-anchor">
          <div className="prose-block max-w-3xl">
            <h2 className="section-title">Supporting Successful Events</h2>
            <p>
              From exhibitions and conferences to launches and corporate functions, event personnel play a critical role
              in shaping attendee experiences.
            </p>
            <p>
              Our personnel can assist with registration, customer assistance, crowd management, guest engagement and
              general event support.
            </p>
            <p>
              Every deployment is supported by preparation, coordination and operational oversight designed to help
              events run efficiently.
            </p>
          </div>
      </section>

      <section id="section-support" className="page-section-anchor">
          <div className="max-w-3xl">
            <h2 className="section-title">Support Areas</h2>
            <p className="page-intro mb-8">
              Our event teams support the customer-facing operations that keep events running smoothly:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3" aria-label="Event support areas">
              {supportAreas.map((item) => (
                <li key={item} className="flex items-start gap-3 text-on-surface">
                  <span aria-hidden="true" className="material-symbols-outlined text-primary text-base mt-1">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
      </section>
      </ServicePageWayfinding>

      <CTASection
        heading="Planning An Event?"
        body="Let’s discuss how PromoPower can support your event staffing requirements."
        primaryLabel="Speak With Our Team"
        primaryHref="/contact-us"
        secondaryLabel="Explore All Services"
        secondaryHref="/services"
      />
    </>
  );
}
