import Link from "next/link";
import type { Metadata } from "next";
import DualAudienceCards from "@/components/DualAudienceCards";
import ExpandableProse from "@/components/ExpandableProse";
import HomeHero from "@/components/HomeHero";
import HomepageExplore from "@/components/HomepageExplore";
import { HomepageTabLayout, HomepageTabSubsection } from "@/components/HomepageTabLayout";
import { HomepageTabPanel, HomepageTabsProvider } from "@/components/HomepageTabs";
import StatBand from "@/components/StatBand";
import ClientMarquee from "@/components/ClientMarquee";
import TrustCard from "@/components/TrustCard";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Professional Staffing Solutions Since 2002",
    description:
      "PromoPower provides professional staffing solutions for promotions, retail activations, events, roadshows and customer engagement campaigns across Singapore. MOM licensed employment agency since 2002.",
    path: "/",
    keywords: [
      "staffing solutions Singapore",
      "brand ambassadors Singapore",
      "event personnel Singapore",
      "retail activation Singapore",
      "PromoPower Singapore",
    ],
  }),
  title: {
    absolute: "PromoPower Singapore | Professional Staffing Solutions Since 2002",
  },
};

const trustIndicators = [
  {
    title: "Established Since 2002",
    description:
      "More than two decades supporting organisations with professional staffing solutions across Singapore.",
    icon: "history",
  },
  {
    title: "MOM Licensed Employment Agency",
    description:
      "Licensed employment agency support grounded in compliance, accountability and operational reliability.",
    icon: "verified_user",
  },
  {
    title: "Professional Talent Pool",
    description:
      "Personnel selected for communication skills, professionalism and campaign suitability.",
    icon: "groups",
  },
  {
    title: "Operational Support & Coordination",
    description:
      "Structured deployment planning and campaign coordination to support smooth execution.",
    icon: "support_agent",
  },
  {
    title: "Multi-Industry Experience",
    description:
      "Campaign support across diverse customer environments and operational contexts.",
    icon: "domain",
  },
  {
    title: "End-to-End Workforce Solutions",
    description:
      "Recruitment, preparation, deployment and ongoing support tailored to campaign needs.",
    icon: "checklist",
  },
];

const trustParagraphs = [
  "Successful campaigns depend on far more than creative ideas.",
  "No matter how strong the strategy, customers ultimately interact with the people representing the brand. Those interactions influence perceptions, shape experiences and often determine how a campaign is remembered.",
  "Since 2002, PromoPower has partnered with organisations across Singapore to provide professional staffing solutions for promotions, retail activations, product launches, roadshows, exhibitions and customer engagement initiatives.",
  "Over the years, we have learned that successful execution depends on preparation, professionalism and reliability. This understanding continues to guide the way we recruit, prepare, deploy and support our people today.",
  "Our clients value us not only for the quality of our personnel, but also for the responsiveness of our team, the consistency of our processes and our commitment to helping campaigns run smoothly from start to finish.",
];

const approachParagraphs = [
  "At PromoPower, we believe that every customer interaction matters.",
  "Whether a customer is encountering a product for the first time, attending an event, visiting a retail environment or engaging with a brand ambassador, those moments contribute to how a brand is perceived.",
  "That is why our role extends beyond supplying manpower.",
  "We work closely with clients to understand campaign objectives, customer profiles and operational requirements before identifying personnel who are suitable for the task. By taking the time to understand what success looks like for each campaign, we are able to recommend workforce solutions that support both business goals and customer expectations.",
  "Our involvement continues throughout the campaign. From deployment planning and scheduling to ongoing support and coordination, our team remains focused on helping clients execute with confidence.",
  "For more than twenty years, this approach has enabled us to build long-term relationships with organisations that value professionalism, reliability and accountability.",
];

const frameworkSteps = [
  {
    title: "Recruit",
    description:
      "Every successful campaign begins with selecting the right people. We identify suitable personnel based on communication skills, experience, campaign requirements and customer engagement capabilities.",
    icon: "group_add",
  },
  {
    title: "Prepare",
    description:
      "Personnel receive campaign briefings, product information and engagement guidance designed to help them represent brands professionally and confidently.",
    icon: "school",
  },
  {
    title: "Deploy",
    description:
      "Careful planning helps ensure that the right people are assigned to the right locations at the right time, supporting smooth execution and operational efficiency.",
    icon: "location_on",
  },
  {
    title: "Support",
    description:
      "Our team remains actively involved throughout the campaign, providing coordination, oversight and ongoing performance feedback to keep personnel focused on the standards each brand expects.",
    icon: "support_agent",
  },
  {
    title: "Review",
    description:
      "Performance is logged consistently throughout the campaign, giving every review an evidence-based picture of how the team performed and clear inputs to strengthen future outcomes.",
    icon: "insights",
  },
];

const serviceHighlights = [
  {
    title: "Brand Ambassadors",
    summary:
      "For launches and activations where customer engagement, product explanation and strong brand presentation are especially important.",
    href: "/services/brand-ambassadors",
    icon: "person_celebrate",
  },
  {
    title: "Event Personnel",
    summary:
      "Events often involve numerous moving parts and operational requirements.",
    href: "/services/event-personnel",
    icon: "event_available",
  },
  {
    title: "Retail Activation Teams",
    summary:
      "Retail environments provide valuable opportunities to engage customers at the point of decision.",
    href: "/services/retail-activation-teams",
    icon: "storefront",
  },
  {
    title: "Roadshows & Consumer Engagement",
    summary:
      "Roadshows offer brands valuable opportunities to interact directly with consumers.",
    href: "/services/roadshows-consumer-engagement",
    icon: "route",
  },
  {
    title: "Campaign Support & Coordination",
    summary:
      "Successful campaigns require effective coordination behind the scenes.",
    href: "/services/campaign-support-coordination",
    icon: "monitoring",
  },
];

const industryNames = [
  { name: "Beauty & Cosmetics", icon: "spa" },
  { name: "Luxury Retail", icon: "diamond" },
  { name: "Travel Retail", icon: "flight" },
  { name: "Consumer Electronics", icon: "memory" },
  { name: "FMCG", icon: "shopping_basket" },
  { name: "Food & Beverage", icon: "restaurant" },
  { name: "Healthcare & Wellness", icon: "health_and_safety" },
  { name: "Financial Services", icon: "account_balance" },
  { name: "Lifestyle Brands", icon: "checkroom" },
  { name: "Corporate Events & Exhibitions", icon: "event" },
];

const ctaParagraphs = [
  "Every campaign presents its own opportunities and challenges.",
  "Whether you are planning a product launch, organising a roadshow, supporting a retail promotion or preparing for a large-scale activation, having the right people in place can make a significant difference to the outcome.",
  "At PromoPower, we take the time to understand your objectives, operational requirements and desired outcomes before recommending a solution tailored to your needs.",
  "If you are looking for an experienced partner that can provide professional staffing solutions supported by proven operational processes, we would welcome the opportunity to discuss how we can help.",
];

export default function Home() {
  return (
    <HomepageTabsProvider>
      <HomeHero />
      <StatBand />
      <ClientMarquee />

      <HomepageExplore>
        <HomepageTabPanel sectionId="trust">
          <HomepageTabLayout
            title="Trusted Workforce Solutions Since 2002"
            intro={<ExpandableProse paragraphs={trustParagraphs} visibleCount={2} expandLabel="Read more about our experience" />}
            link={{ href: "/about-us", label: "Read our full story" }}
            sections={
              <HomepageTabSubsection
                title="More Than Staffing. A Partner In Execution."
                intro={<p className="page-intro">{approachParagraphs[0]}</p>}
              >
                <ExpandableProse paragraphs={approachParagraphs.slice(1)} visibleCount={1} expandLabel="How we partner with clients" />
              </HomepageTabSubsection>
            }
          >
            <div className="homepage-tab-card-grid">
              {trustIndicators.map((indicator) => (
                <TrustCard
                  key={indicator.title}
                  title={indicator.title}
                  description={indicator.description}
                  icon={indicator.icon}
                />
              ))}
            </div>
          </HomepageTabLayout>
        </HomepageTabPanel>

        <HomepageTabPanel sectionId="framework">
          <div className="homepage-tab-panel-inner">
            <div className="page-container-prose mb-8 sm:mb-10">
              <h2 className="section-title">A Structured Approach To Successful Campaigns</h2>
              <p className="page-intro">
                Consistent execution is rarely achieved by chance. Over the years, PromoPower has developed a practical
                framework that helps ensure quality, accountability and reliability across every deployment. While every
                campaign is different, the principles of successful execution remain remarkably consistent.
              </p>
            </div>

            <div className="blueprint-panel">
              <p className="blueprint-caption mb-6">The PromoPower Execution Framework</p>
              <div className="process-flow">
                <div className="process-rail" aria-hidden="true" />
                {frameworkSteps.map((step, index) => (
                  <div key={step.title} className="process-step">
                    <div className="process-node">
                      <span className="material-symbols-outlined" aria-hidden="true">
                        {step.icon}
                      </span>
                    </div>
                    <p className="process-step-label">Step {index + 1}</p>
                    <h3 className="process-step-title">{step.title}</h3>
                    <p className="process-step-body">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </HomepageTabPanel>

        <HomepageTabPanel sectionId="services">
          <HomepageTabLayout
            title="Workforce Solutions Designed Around Your Objectives"
            intro={
              <p className="page-intro">
                Every campaign presents different objectives, customer expectations and operational requirements.
                PromoPower provides flexible workforce solutions that help organisations engage customers effectively
                while maintaining a high standard of professionalism and execution.
              </p>
            }
            link={{ href: "/services", label: "Read the full Services page" }}
          >
            <div className="homepage-tab-card-grid">
              {serviceHighlights.map((service) => (
                <article key={service.title} className="content-card service-card flex flex-col h-full">
                  <div className="icon-badge">
                    <span className="material-symbols-outlined">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-headline font-normal text-on-surface mb-3">{service.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-6 flex-1">{service.summary}</p>
                  <Link
                    href={service.href}
                    className="homepage-tab-link mt-auto"
                  >
                    Learn More
                    <span className="material-symbols-outlined text-base" aria-hidden="true">
                      arrow_forward
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </HomepageTabLayout>
        </HomepageTabPanel>

        <HomepageTabPanel sectionId="industries">
          <HomepageTabLayout
            title="Supporting Organisations Across Diverse Industries"
            intro={
              <p className="page-intro">
                Different industries present different customer expectations, operational environments and
                engagement requirements. Over the years, PromoPower has supported organisations across a wide
                range of sectors.
              </p>
            }
            link={{ href: "/industries", label: "Read the full Industries page" }}
          >
            <div className="homepage-tab-chip-grid">
              {industryNames.map((industry) => (
                <span key={industry.name} className="industry-chip">
                  <span className="industry-chip-icon">
                    <span className="material-symbols-outlined" aria-hidden="true">
                      {industry.icon}
                    </span>
                  </span>
                  <span className="industry-chip-label">{industry.name}</span>
                </span>
              ))}
            </div>
          </HomepageTabLayout>
        </HomepageTabPanel>

        <HomepageTabPanel sectionId="contact">
          <HomepageTabLayout
            title="Let's Start A Conversation"
            intro={
              <ExpandableProse paragraphs={ctaParagraphs} visibleCount={1} expandLabel="Read full message" />
            }
            link={{ href: "/contact-us", label: "Speak With Our Team" }}
          >
            <DualAudienceCards />
          </HomepageTabLayout>
        </HomepageTabPanel>
      </HomepageExplore>
    </HomepageTabsProvider>
  );
}
