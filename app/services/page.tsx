import Link from "next/link";
import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import PageSectionNavGroup from "@/components/PageSectionNavGroup";
import { simplePageBreadcrumb } from "@/lib/page-nav-config";
import { buildPageMetadata, servicesHubJsonLd } from "@/lib/seo";

const servicesNav = [
  { id: "section-services", label: "Services" },
  { id: "section-approach", label: "Approach" },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Services",
  description:
    "Explore PromoPower workforce solutions in Singapore, including brand ambassadors, event personnel, retail activation teams, roadshows and campaign support coordination.",
  path: "/services",
  keywords: [
    "staffing services Singapore",
    "brand ambassador agency",
    "event staffing services",
    "retail activation staffing",
  ],
});

const services = [
  {
    title: "Brand Ambassadors",
    summary:
      "People who explain a product, sample it, or stand for the brand at a launch, counter or event.",
    points: [
      "Screened for communication and for the presentation standard of that brand.",
      "Briefed on product points and on what they may and may not say.",
      "Used for launches, sampling, demonstrations and in-store or event representation.",
    ],
    href: "/services/brand-ambassadors",
    icon: "person_celebrate",
  },
  {
    title: "Event Personnel",
    summary:
      "Floor roles: registration, ushering, guest management and information counters.",
    points: [
      "Exhibitions, conferences, launches and corporate events.",
      "Briefed on the run of show, their position, and questions they should refer on.",
      "Rostered by shift, with a contact if cover is needed.",
    ],
    href: "/services/event-personnel",
    icon: "event_available",
  },
  {
    title: "Retail Activation Teams",
    summary:
      "In-store demonstrations, promotions and sampling, including more than one outlet.",
    points: [
      "Store list, trading hours and sampling rules are part of the brief.",
      "The same script is used across outlets unless a store needs a change.",
      "Attendance is checked against the roster, not left to each store.",
    ],
    href: "/services/retail-activation-teams",
    icon: "storefront",
  },
  {
    title: "Roadshows & Consumer Engagement",
    summary:
      "Public sites and mall tours, where conversations are short and footfall is uneven.",
    points: [
      "Sampling, product introduction and lead capture when the brief includes it.",
      "Site rules, peak hours and what can be handed out are confirmed before the first day.",
      "Teams are rostered by site and shift, not as one undifferentiated group.",
    ],
    href: "/services/roadshows-consumer-engagement",
    icon: "route",
  },
  {
    title: "Campaign Support & Coordination",
    summary:
      "The roster and the contact behind the people customers see.",
    points: [
      "Deployment plan, schedules and attendance.",
      "Replacements when someone cannot attend.",
      "Updates to the client while the campaign is running.",
    ],
    href: "/services/campaign-support-coordination",
    icon: "monitoring",
  },
];

const servicePillars = [
  "Screening against the brief",
  "Briefing before the first shift",
  "Roster by location and shift",
  "Attendance and cover while live",
];

export default function Services() {
  return (
    <>
      <JsonLd data={servicesHubJsonLd()} />
      <PageSectionNavGroup
        hero={
          <PageHero
            badge="Services"
            title="Five Ways We Staff A Campaign"
            description="Most clients use one frontline team plus coordination. The pages below say what each team does, and what we need from you before the first shift."
            compact
          />
        }
        breadcrumb={<PageBreadcrumb items={simplePageBreadcrumb("Services")} />}
        navItems={servicesNav}
        navLabel="Services sections"
        scrollHint="Scroll sideways for more sections"
      >
        <section id="section-services" className="page-section-anchor">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <article key={service.title} className="border-t border-slate-200 pt-5 flex flex-col h-full">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h2>
              <p className="text-slate-600 leading-relaxed mb-5">{service.summary}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {service.points.map((point) => (
                  <li key={point} className="text-slate-600 text-sm leading-relaxed pl-4 border-l-2 border-slate-200">
                    {point}
                  </li>
                ))}
              </ul>
              <Link href={service.href} className="text-sm font-semibold text-primary hover:underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-all mt-auto">
                Learn More
              </Link>
            </article>
          ))}
        </div>
        </section>

        <section id="section-approach" className="page-section-anchor">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="section-title">Included With The Team</h2>
            <p className="prose-block">
              Whichever frontline service you use, these four items are part of the job. They are not a separate product unless you only need coordination.
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
      </PageSectionNavGroup>

      <CTASection
        heading="Send Dates, Sites And Headcount"
        body="If you already know the service, say which one. If you do not, describe the setting and what customers need to be told."
        primaryLabel="Speak With Our Team"
        primaryHref="/contact-us"
      />
    </>
  );
}
