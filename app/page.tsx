import Link from "next/link";
import type { Metadata } from "next";
import DualAudienceCards from "@/components/DualAudienceCards";
import ExpandableProse from "@/components/ExpandableProse";
import HomeHero from "@/components/HomeHero";
import { HomepageTabLayout, HomepageTabSubsection } from "@/components/HomepageTabLayout";
import StatBand from "@/components/StatBand";
import ClientMarquee from "@/components/ClientMarquee";
import PortfolioPreview from "@/components/PortfolioPreview";
import TrustCard from "@/components/TrustCard";
import JsonLd from "@/components/JsonLd";
import { buildPageMetadata, HOME_PAGE_TITLE, homePageJsonLd } from "@/lib/seo";
import { HOME_ENTITY_SUMMARY } from "@/lib/site";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Professional Staffing Solutions Since 2002",
    description: HOME_ENTITY_SUMMARY,
    path: "/",
    keywords: [
      "staffing solutions Singapore",
      "employment agency Singapore",
      "MOM licensed employment agency",
      "brand ambassadors Singapore",
      "event personnel Singapore",
      "retail activation staffing Singapore",
      "roadshow staffing Singapore",
      "promotion staffing Singapore",
      "PromoPower Singapore",
    ],
  }),
  title: {
    absolute: HOME_PAGE_TITLE,
  },
  openGraph: {
    title: HOME_PAGE_TITLE,
    description: HOME_ENTITY_SUMMARY,
    url: "https://promopower.com.sg/",
    siteName: "PromoPower",
    locale: "en_SG",
    type: "website",
    images: [
      {
        url: "https://promopower.com.sg/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PromoPower — staffing for promotions, retail and events in Singapore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_PAGE_TITLE,
    description: HOME_ENTITY_SUMMARY,
    images: ["https://promopower.com.sg/opengraph-image"],
  },
};

const trustIndicators = [
  {
    title: "Established Since 2002",
    description: "Promotions, retail activations, roadshows and events in Singapore since 2002.",
    icon: "history",
  },
  {
    title: "MOM Licensed Employment Agency",
    description: "PromoPower Pte Ltd. EA License No. 20C0109.",
    icon: "verified_user",
  },
  {
    title: "Screened For The Campaign",
    description: "People are shortlisted on communication, presentation and whether they fit the store, event or roadshow.",
    icon: "groups",
  },
  {
    title: "Rosters And Attendance",
    description: "Locations, shifts and attendance are tracked while the campaign is live.",
    icon: "support_agent",
  },
  {
    title: "More Than One Setting",
    description: "Beauty counters, supermarkets, electronics stores, F&B sampling, exhibitions and public roadshows.",
    icon: "domain",
  },
  {
    title: "One Operations Contact",
    description: "The same team handles the enquiry, team readiness before shifts and questions during the campaign.",
    icon: "checklist",
  },
];

const trustParagraphs = [
  "PromoPower Pte Ltd is a MOM licensed employment agency (EA License No. 20C0109), based in Singapore and operating since 2002.",
  "Clients use us when one team has to recruit the people, put them on the roster, and stay on attendance after the first shift. That can be one activation or several locations across Singapore.",
];

const approachParagraphs = [
  "A recommendation is based on the campaign requirements, not a general send-out.",
  "We ask for the objective, dates, locations, headcount and the messages customers should hear. From that we shortlist people, prepare them and issue the roster.",
  "During the campaign, that same contact handles attendance, replacements and questions from the field.",
];

const frameworkSteps = [
  {
    title: "Recruit",
    description:
      "Shortlist against the role and setting: communication, relevant experience, and whether the person suits that store, event or roadshow.",
    icon: "group_add",
  },
  {
    title: "Prepare",
    description:
      "Walk the team through the product, approved talking points, and how the brand expects them to present.",
    icon: "school",
  },
  {
    title: "Deploy",
    description:
      "Assign people to locations and shifts, including cover where a site needs more than one person.",
    icon: "location_on",
  },
  {
    title: "Support",
    description:
      "Stay on the campaign for attendance, schedule changes and issues raised by the client or the team.",
    icon: "support_agent",
  },
  {
    title: "Review",
    description:
      "Record how people performed so the next roster is based on the campaign, not only on the original application. Records are kept in PowerCoach, our in-house coaching and performance system.",
    icon: "insights",
  },
];

const serviceHighlights = [
  {
    title: "Brand Ambassadors",
    summary:
      "Explain a product, sample it, or represent the brand at a launch, counter or event.",
    href: "/services/brand-ambassadors",
    icon: "person_celebrate",
  },
  {
    title: "Event Personnel",
    summary:
      "Registration, ushering, guest management and information counters.",
    href: "/services/event-personnel",
    icon: "event_available",
  },
  {
    title: "Retail Activation Teams",
    summary:
      "In-store demonstrations, promotions and sampling at the shelf or counter.",
    href: "/services/retail-activation-teams",
    icon: "storefront",
  },
  {
    title: "Roadshows & Consumer Engagement",
    summary:
      "Mall tours, public sites and sampling drives, including lead capture when the campaign requires it.",
    href: "/services/roadshows-consumer-engagement",
    icon: "route",
  },
  {
    title: "Campaign Support & Coordination",
    summary:
      "Rosters, schedules, attendance and a contact for changes while the campaign is running.",
    href: "/services/campaign-support-coordination",
    icon: "monitoring",
  },
];

const industryNames = [
  "Beauty & Cosmetics",
  "Luxury Retail",
  "Travel Retail",
  "Consumer Electronics",
  "FMCG",
  "Food & Beverage",
  "Healthcare & Wellness",
  "Financial Services",
  "Lifestyle Brands",
  "Corporate Events & Exhibitions",
];

const ctaParagraphs = [
  "Send the service you need, approximate headcount, start date, locations and what customers should be told. If the plan is still open, say what is undecided and we will tell you what we need before proposing a team.",
];

export default function Home() {
  return (
    <>
      <JsonLd data={homePageJsonLd(HOME_ENTITY_SUMMARY)} />
      <HomeHero />
      <StatBand />
      <ClientMarquee />
      <PortfolioPreview />

      <div className="home-editorial">
        <section className="home-paths" aria-label="Explore PromoPower">
          <div className="page-container">
            <div className="home-paths-grid grid grid-cols-1 md:grid-cols-3 md:gap-x-8 lg:gap-x-10">
              {[
                {
                  title: "Workforce Solutions",
                  description: "Ambassadors, event teams, retail activations, roadshows and coordination.",
                  href: "#services",
                },
                {
                  title: "Sector Experience",
                  description: "Beauty, luxury retail, FMCG, electronics, F&B and exhibitions.",
                  href: "#industries",
                },
                {
                  title: "Speak With Us",
                  description: "Share dates, sites, headcount and what customers need to be told.",
                  href: "#contact",
                },
              ].map((path) => (
                <a key={path.title} href={path.href} className="home-path-link group min-w-0">
                  <span className="min-w-0">
                    <strong>{path.title}</strong>
                    <small>{path.description}</small>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="trust" className="home-editorial-section">
          <div className="page-container home-editorial-grid">
            <header className="home-editorial-intro">
              <h2 className="section-title">Licensed Agency, Operating Since 2002</h2>
              <ExpandableProse
                paragraphs={trustParagraphs}
                visibleCount={2}
                expandLabel="Read more about our experience"
              />
              <Link href="/about-us" className="text-sm font-semibold text-primary hover:underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-all">
                Read our full story
              </Link>
            </header>
            <div className="home-proof-list">
              {trustIndicators.map((indicator, index) => (
                <div key={indicator.title} className="home-proof-item">
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <TrustCard title={indicator.title} description={indicator.description} />
                </div>
              ))}
            </div>
          </div>

          <div className="page-container home-approach">
            <HomepageTabSubsection
              title="What We Need Before We Propose A Team"
              intro={<p className="page-intro">{approachParagraphs[0]}</p>}
            >
              <ExpandableProse
                paragraphs={approachParagraphs.slice(1)}
                visibleCount={1}
                expandLabel="How we partner with clients"
              />
            </HomepageTabSubsection>
          </div>
        </section>

        <section id="framework" className="home-editorial-section home-editorial-section-muted">
          <div className="page-container">
            <div className="page-container-prose mb-8 sm:mb-10">
              <h2 className="section-title">How Every Campaign Is Run</h2>
              <p className="page-intro">
                The same five steps apply whether the job is one counter or several outlets. What changes is the scope, the locations and the headcount.
              </p>
            </div>

            <div className="process-panel">
              <p className="blueprint-caption mb-8">Recruit, prepare, deploy, support, review</p>
              <div className="process-flow">
                <div className="process-rail" aria-hidden="true" />
                {frameworkSteps.map((step, index) => (
                  <div key={step.title} className="process-step">
                    <div className="process-node" aria-hidden="true">
                      {index + 1}
                    </div>
                    <p className="process-step-label">Step {index + 1}</p>
                    <h3 className="process-step-title">{step.title}</h3>
                    <p className="process-step-body">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="home-editorial-section">
          <div className="page-container">
          <HomepageTabLayout
            title="What We Staff"
            intro={
              <p className="page-intro">
                Most campaigns use one frontline team plus coordination. Choose the service line that matches the work.
              </p>
            }
            link={{ href: "/services", label: "Read the full Services page" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceHighlights.map((service, index) => (
                <article key={service.title} className="group border-t border-slate-200 pt-5 flex flex-col h-full">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">{service.summary}</p>
                  <Link
                    href={service.href}
                    className="text-sm font-semibold text-primary hover:underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-all"
                  >
                    Learn More
                  </Link>
                </article>
              ))}
            </div>
          </HomepageTabLayout>
          </div>
        </section>

        <section id="industries" className="home-editorial-section home-editorial-section-muted">
          <div className="page-container">
          <HomepageTabLayout
            title="Where The Teams Work"
            intro={
              <p className="page-intro">
                The script changes with the setting. A luxury counter, a supermarket sampling stand and an exhibition desk do not use the same approach.
              </p>
            }
            link={{ href: "/industries", label: "Read the full Industries page" }}
          >
            <div className="flex flex-wrap gap-3">
              {industryNames.map((industry) => (
                <span key={industry} className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:border-primary/40 hover:text-primary transition-colors">
                  {industry}
                </span>
              ))}
            </div>
          </HomepageTabLayout>
          </div>
        </section>

        <section id="contact" className="home-editorial-section">
          <div className="page-container">
          <HomepageTabLayout
            title="Start An Enquiry"
            intro={
              <ExpandableProse paragraphs={ctaParagraphs} visibleCount={1} expandLabel="Read full message" />
            }
            link={{ href: "/contact-us", label: "Speak With Our Team" }}
          >
            <DualAudienceCards />
          </HomepageTabLayout>
          </div>
        </section>

      </div>
    </>
  );
}
