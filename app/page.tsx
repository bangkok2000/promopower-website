import Link from "next/link";
import type { Metadata } from "next";
import DualAudienceCards from "@/components/DualAudienceCards";
import ExpandableProse from "@/components/ExpandableProse";
import HomeHero from "@/components/HomeHero";
import HomepageExplore from "@/components/HomepageExplore";
import { HomepageTabLayout, HomepageTabSubsection } from "@/components/HomepageTabLayout";
import { HomepageTabPanel, HomepageTabsProvider } from "@/components/HomepageTabs";
import TrustCard from "@/components/TrustCard";

export const metadata: Metadata = {
  title: "PromoPower Singapore | Professional Staffing Solutions Since 2002",
  description:
    "PromoPower provides professional staffing solutions for promotions, retail activations, events, roadshows and customer engagement campaigns across Singapore. Trusted since 2002.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "PromoPower | Professional Staffing Solutions",
    description:
      "Trusted workforce solutions since 2002, supporting customer-facing campaigns through professional staffing, preparation, deployment and operational support.",
    url: "https://promopower.com.sg",
    siteName: "PromoPower",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PromoPower | Professional Staffing Solutions",
    description:
      "Professional staffing solutions for promotions, retail activations, events and customer engagement programmes in Singapore.",
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
      "Our team remains actively involved throughout the campaign, providing coordination, oversight and assistance whenever required.",
    icon: "support_agent",
  },
  {
    title: "Review",
    description:
      "Every campaign provides valuable insights. We review learnings and feedback to support continuous improvement and strengthen future outcomes.",
    icon: "insights",
  },
];

const serviceHighlights = [
  {
    title: "Brand Ambassadors",
    summary:
      "Brand ambassadors play an important role in shaping customer perceptions and creating memorable interactions.",
    href: "/services/brand-ambassadors",
    icon: "person_celebrate",
  },
  {
    title: "Product Promoters",
    summary:
      "Consumers increasingly expect informed and engaging interactions before making purchasing decisions.",
    href: "/services/product-promoters",
    icon: "campaign",
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

const proofParagraphs = [
  "Over the years, PromoPower has supported organisations across a wide range of industries, campaign types and customer engagement environments.",
  "From retail promotions and product launches to exhibitions, roadshows and customer engagement programmes, our focus has always been on helping clients execute professionally through quality people and reliable operational support.",
  "The relationships we have built over the years reflect our commitment to professionalism, responsiveness and service excellence.",
  "To respect client confidentiality, intellectual property rights and brand ownership, client names and logos are only featured where appropriate permissions have been obtained.",
];

const whyParagraphs = [
  "Choosing a staffing partner is about more than filling positions.",
  "Organisations need confidence that their partner understands the importance of reliability, professionalism and accountability.",
  "For more than two decades, PromoPower has earned that confidence by focusing on the fundamentals that matter most: quality people, structured processes, responsive support and professional execution.",
  "We understand that every deployment represents an extension of our client's brand. This understanding influences every aspect of our work, from recruitment and preparation to deployment and ongoing support.",
  "While campaigns may vary in size and complexity, our commitment remains the same: helping clients execute with confidence while delivering positive experiences for their customers.",
  "Successful customer-facing campaigns require more than manpower.",
  "They require experience, preparation, operational discipline and the ability to adapt to different customer environments.",
  "For more than two decades, PromoPower has helped organisations execute professionally through structured workforce solutions and dependable support.",
  "While every campaign is unique, our commitment remains consistent: helping clients execute professionally through quality people and reliable operational support.",
  "Specific campaign volumes, deployment figures and project statistics are not published in order to respect client confidentiality requirements.",
];

const differentiators = [
  "More Than 20 Years Of Experience",
  "Professional Recruitment & Screening",
  "Structured Preparation & Briefing",
  "Reliable Deployment Management",
  "Responsive Operations Team",
  "Flexible Workforce Solutions",
  "Customer-Focused Service Approach",
  "Long-Term Partnership Mindset",
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
          <HomepageTabLayout
            title="A Structured Approach To Successful Campaigns"
            intro={
              <p className="page-intro">
                Consistent execution is rarely achieved by chance. Over the years, PromoPower has developed a practical
                framework that helps ensure quality, accountability and reliability across every deployment. While every
                campaign is different, the principles of successful execution remain remarkably consistent.
              </p>
            }
          >
            <div className="homepage-tab-card-grid">
              {frameworkSteps.map((step, index) => (
                <article key={step.title} className="content-card h-full">
                  <div className="icon-badge">
                    <span className="material-symbols-outlined">{step.icon}</span>
                  </div>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-2">Step {index + 1}</p>
                  <h3 className="text-2xl font-headline font-normal text-on-surface mb-3">{step.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{step.description}</p>
                </article>
              ))}
            </div>
          </HomepageTabLayout>
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
              <ExpandableProse
                paragraphs={[
                  "Different industries present different customer expectations, operational environments and engagement requirements.",
                  "Over the years, PromoPower has supported organisations across a wide range of sectors, allowing us to develop a practical understanding of how staffing requirements vary across different environments.",
                  "Our experience enables us to recommend workforce solutions that align with the specific needs of each campaign while maintaining professionalism and consistency throughout execution.",
                ]}
                visibleCount={1}
                expandLabel="How industry experience shapes our recommendations"
              />
            }
            link={{ href: "/industries", label: "Read the full Industries page" }}
            sections={
              <>
                <HomepageTabSubsection
                  title="Supporting Organisations Across Singapore"
                  intro={
                    <>
                      <p className="page-intro">Our focus is not on who we have worked for.</p>
                      <p className="page-intro text-primary">Our focus is on how we can help you succeed.</p>
                    </>
                  }
                  link={{ href: "/our-work", label: "View our work approach" }}
                >
                  <ExpandableProse
                    paragraphs={proofParagraphs}
                    visibleCount={0}
                    expandLabel="Our approach to client confidentiality"
                  />
                </HomepageTabSubsection>
                <HomepageTabSubsection
                  title="Why Organisations Continue To Work With PromoPower"
                  intro={<p className="page-intro">{whyParagraphs[0]}</p>}
                  link={{ href: "/why-promopower", label: "Read the full Why PromoPower page" }}
                >
                  <>
                    <div className="homepage-tab-chip-grid mb-6">
                      {differentiators.map((item) => (
                        <span key={item} className="pillar-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                    <ExpandableProse
                      paragraphs={whyParagraphs.slice(1)}
                      visibleCount={0}
                      expandLabel="Read more about our approach"
                    />
                  </>
                </HomepageTabSubsection>
              </>
            }
          >
            <div className="homepage-tab-chip-grid">
              {industryNames.map((industry) => (
                <span key={industry} className="pillar-chip">
                  {industry}
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
