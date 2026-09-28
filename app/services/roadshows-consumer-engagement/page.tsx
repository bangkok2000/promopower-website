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
    "Mall and public-site roadshows",
    "Sampling",
    "Product demonstration",
    "Lead capture, when the brief requires it",
    "Product introductions",
    "Touring stands across more than one location",
  ];

  return (
    <>
      <ServicePageWayfinding
        hero={
          <PageHero
            badge="Service"
            title="Roadshow Teams For Public Sites, Malls And Sampling Drives"
            description="Shorter conversations, uneven footfall, and site rules that are not the same as a store. Teams are rostered by site and shift, and briefed on what they can hand out or record."
            compact
          />
        }
        title="Roadshows & Consumer Engagement"
        path="/services/roadshows-consumer-engagement"
        description="Roadshow and consumer engagement staffing in Singapore for islandwide promotional tours, consumer festivals, sampling drives and on-ground brand experiences."
        navItems={serviceNav}
      >
      <section id="section-overview" className="page-section-anchor">
          <div className="prose-block max-w-3xl">
            <h2 className="section-title">What Is Different From A Store Shift</h2>
            <p>
              A roadshow is usually a temporary site: a mall atrium, a public event or a touring stand. Peak hours are uneven, interactions are short, and the venue often sets what can be set up, sampled or collected.
            </p>
            <p>
              Confirm site rules, call times and whether lead capture is required before the briefing. If names or contact details are collected, say what staff may ask for and where that information goes.
            </p>
          </div>
      </section>

      <section id="section-support" className="page-section-anchor">
          <div className="max-w-3xl">
            <h2 className="section-title">Support Areas</h2>
            <p className="page-intro mb-8">
              Work we staff on the ground. Overlapping labels below are the same job unless your brief splits them.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2" aria-label="Roadshow support areas">
              {supportAreas.map((item) => (
                <li key={item} className="text-slate-700 pl-4 border-l-2 border-slate-300 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
      </section>

      <section id="section-value" className="page-section-anchor">
          <div className="prose-block max-w-3xl">
            <h2 className="section-title">What To Include In The Brief</h2>
            <p>
              Sites and dates, headcount per site, what is being sampled or demonstrated, and whether staff collect leads. If the tour moves, send the order of locations so travel and call times can be rostered.
            </p>
          </div>
      </section>
      </ServicePageWayfinding>

      <CTASection
        heading="Planning A Roadshow Or Consumer Campaign?"
        body="Send the sites, dates and whether sampling or lead capture is part of the job."
        primaryLabel="Get In Touch"
        primaryHref="/contact-us"
        secondaryLabel="Explore All Services"
        secondaryHref="/services"
      />
    </>
  );
}
