import Link from "next/link";
import type { Metadata } from "next";
import AwardsStrip from "@/components/AwardsStrip";
import CTASection from "@/components/CTASection";
import DualAudiencePanel from "@/components/DualAudiencePanel";
import ExpandableProse from "@/components/ExpandableProse";
import HomeHero from "@/components/HomeHero";
import HomepageAnchorScroll from "@/components/HomepageAnchorScroll";
import HomepageWayfinding from "@/components/HomepageWayfinding";
import PromoPowerFramework from "@/components/PromoPowerFramework";
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
    <>
      <HomepageAnchorScroll />
      <HomeHero />
      <AwardsStrip />
      <HomepageWayfinding />

      <section id="trust" className="page-section scroll-mt-section">
        <div className="page-container grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="section-title">Trusted Workforce Solutions Since 2002</h2>
            <ExpandableProse paragraphs={trustParagraphs} visibleCount={2} expandLabel="Read more about our experience" />
            <Link href="/about-us" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all mt-8">
              Read our full story
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {trustIndicators.map((indicator) => (
              <TrustCard
                key={indicator.title}
                title={indicator.title}
                description={indicator.description}
                icon={indicator.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="page-section section-muted scroll-mt-section">
        <div className="page-container grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-10 lg:gap-16 items-start">
          <div>
            <h2 className="section-title">More Than Staffing. A Partner In Execution.</h2>
            <p className="page-intro">{approachParagraphs[0]}</p>
          </div>
          <ExpandableProse paragraphs={approachParagraphs.slice(1)} visibleCount={1} expandLabel="How we partner with clients" />
        </div>
      </section>

      <PromoPowerFramework
        id="framework"
        heading="A Structured Approach To Successful Campaigns"
        intro="Consistent execution is rarely achieved by chance. Over the years, PromoPower has developed a practical framework that helps ensure quality, accountability and reliability across every deployment. While every campaign is different, the principles of successful execution remain remarkably consistent."
        steps={[
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
        ]}
      />

      <section id="services" className="page-section scroll-mt-section">
        <div className="page-container">
          <div className="max-w-3xl mb-12">
            <h2 className="section-title">Workforce Solutions Designed Around Your Objectives</h2>
            <p className="page-intro">
              Every campaign presents different objectives, customer expectations and operational requirements. PromoPower provides flexible workforce solutions that help organisations engage customers effectively while maintaining a high standard of professionalism and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {serviceHighlights.map((service) => (
              <article key={service.title} className="content-card service-card flex flex-col h-full">
                <div className="icon-badge">
                  <span className="material-symbols-outlined">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-headline font-normal text-on-surface mb-3">{service.title}</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6 flex-1">{service.summary}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all mt-auto"
                >
                  Learn More
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary">
              View all services
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="industries" className="page-section section-muted scroll-mt-section">
        <div className="page-container">
          <div className="max-w-3xl mb-10">
            <h2 className="section-title">Supporting Organisations Across Diverse Industries</h2>
            <ExpandableProse
              paragraphs={[
                "Different industries present different customer expectations, operational environments and engagement requirements.",
                "Over the years, PromoPower has supported organisations across a wide range of sectors, allowing us to develop a practical understanding of how staffing requirements vary across different environments.",
                "Our experience enables us to recommend workforce solutions that align with the specific needs of each campaign while maintaining professionalism and consistency throughout execution.",
              ]}
              visibleCount={1}
              expandLabel="How industry experience shapes our recommendations"
            />
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {industryNames.map((industry) => (
              <span key={industry} className="pillar-chip">
                {industry}
              </span>
            ))}
          </div>

          <Link href="/industries" className="btn-secondary">
            Explore industries we support
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </section>

      <section className="page-section section-elevated">
        <div className="page-container-narrow">
          <h2 className="section-title text-center">Supporting Organisations Across Singapore</h2>
          <div className="text-center mb-8">
            <p className="text-on-surface font-headline text-xl sm:text-2xl">Our focus is not on who we have worked for.</p>
            <p className="text-primary font-headline text-xl sm:text-2xl mt-2">Our focus is on how we can help you succeed.</p>
          </div>
          <ExpandableProse paragraphs={proofParagraphs} visibleCount={0} expandLabel="Our approach to client confidentiality" className="max-w-3xl mx-auto" />
          <div className="text-center mt-10">
            <Link href="/our-work" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              View our work approach
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="why-us" className="page-section scroll-mt-section">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="section-title">Why Organisations Continue To Work With PromoPower</h2>
            <p className="page-intro">{whyParagraphs[0]}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {differentiators.map((item) => (
              <div key={item} className="pillar-chip text-center">
                {item}
              </div>
            ))}
          </div>

          <ExpandableProse paragraphs={whyParagraphs.slice(1)} visibleCount={0} expandLabel="Read more about our approach" className="max-w-3xl mx-auto" />

          <div className="text-center mt-10">
            <Link href="/why-promopower" className="btn-secondary">
              Why PromoPower
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <DualAudiencePanel />

      <CTASection
        heading="Let's Start A Conversation"
        bodyParagraphs={ctaParagraphs}
        primaryLabel="Speak With Our Team"
        primaryHref="/contact-us"
      />
    </>
  );
}
