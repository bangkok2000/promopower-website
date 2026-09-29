import AwardsRecognitionSection from "@/components/AwardsRecognitionSection";
import ContentList from "@/components/ContentList";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import PageSectionNavGroup from "@/components/PageSectionNavGroup";
import { simplePageBreadcrumb } from "@/lib/page-nav-config";
import type { Metadata } from "next";
import { buildPageMetadata, webPageJsonLd } from "@/lib/seo";

const whyNav = [
  { id: "section-reasons", label: "Why us" },
  { id: "section-recognition", label: "Recognition" },
  { id: "section-partner", label: "Partnership" },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Why PromoPower",
  description:
    "Learn why organisations trust PromoPower for professional staffing support, structured preparation, reliable deployment and campaign execution in Singapore since 2002.",
  path: "/why-promopower",
  keywords: [
    "why choose PromoPower",
    "staffing partner Singapore",
    "reliable campaign staffing",
    "MOM licensed agency",
  ],
});

const reasons = [
  {
    title: "Experience Since 2002",
    description:
      "Promotions, retail activations, roadshows and events in Singapore since 2002. The licence and the operating model are the same business, not a recent add-on.",
    icon: "history",
  },
  {
    title: "Shortlisted Against The Brief",
    description:
      "Communication, presentation and fit for the setting come before availability. A supermarket sampling stand and a luxury counter are not staffed the same way.",
    icon: "groups",
  },
  {
    title: "Briefed Before The First Shift",
    description:
      "Product points, what to say, what not to say, and any appearance rules the brand sets. The briefing happens before people are on site.",
    icon: "school",
  },
  {
    title: "A Roster, Not A Name List",
    description:
      "Locations, shifts and attendance are managed while the campaign is live, including cover when someone cannot attend.",
    icon: "support_agent",
  },
  {
    title: "Performance Is Recorded",
    description:
      "Coaching continues after deployment. Each person has a performance record in PowerCoach, PromoPower's in-house coaching and performance system, and that record is used on later campaigns.",
    icon: "trending_up",
  },
  {
    title: "MOM Licensed Agency",
    description:
      "PromoPower Pte Ltd, EA License No. 20C0109. Engagement of personnel is licensed employment agency work.",
    icon: "verified_user",
  },
  {
    title: "We Ask Before We Propose",
    description:
      "Dates, sites, headcount and what customers need to hear come first. If the brief is incomplete, we ask rather than send a generic team.",
    icon: "handshake",
  },
];

export default function WhyPromoPowerPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd(
          "Why Organisations Choose PromoPower",
          "/why-promopower",
          "Experience since 2002, structured preparation, reliable deployment and MOM licensed employment agency support in Singapore.",
        )}
      />
      <PageSectionNavGroup
        hero={
          <PageHero
            badge="Why PromoPower"
            title="Why Organisations Choose PromoPower"
            description="A licensed agency since 2002, with briefing before the shift, a live roster, and a performance record for the people we field."
            compact
          />
        }
        breadcrumb={<PageBreadcrumb items={simplePageBreadcrumb("Why PromoPower")} />}
        navItems={whyNav}
        navLabel="Why PromoPower sections"
        scrollHint="Scroll sideways for more sections"
      >
        <section id="section-reasons" className="page-section-anchor">
          <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary mb-8 font-label">
            Our Differentiators
          </p>
          <ContentList items={reasons} ariaLabel="Why organisations choose PromoPower" />
        </section>

        <AwardsRecognitionSection />

        <section id="section-partner" className="page-section-anchor">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 lg:p-12 max-w-3xl">
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary mb-4 font-label">
              Enquiry
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-6">What To Send Us</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Objective, dates, locations, headcount and the product points customers should hear. From that we say who we would field, how they will be briefed, and how the roster will be run.
              </p>
              <p className="text-sm text-slate-500 pt-2 border-t border-slate-200/80 mt-6">
                PromoPower Pte Ltd is a MOM licensed employment agency. EA License No: 20C0109.
              </p>
            </div>
          </div>
        </section>
      </PageSectionNavGroup>

      <CTASection
        heading="Send The Brief"
        body="Include dates, locations and headcount if you have them. We will reply with a proposed team and how the roster would be run."
        primaryLabel="Contact PromoPower"
        primaryHref="/contact-us"
        secondaryLabel="Explore Services"
        secondaryHref="/services"
      />
    </>
  );
}
