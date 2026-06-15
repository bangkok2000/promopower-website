import Link from "next/link";
import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import IndustryCard from "@/components/IndustryCard";
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

const serviceHighlights = [
  {
    title: "Brand Ambassadors",
    descriptionOne:
      "Brand ambassadors play an important role in shaping customer perceptions and creating memorable interactions.",
    descriptionTwo:
      "Our ambassadors are selected based on their communication skills, professionalism and ability to represent brands confidently in customer-facing environments. Whether supporting experiential campaigns, product launches or promotional activities, they help create meaningful connections between brands and customers.",
    href: "/services/brand-ambassadors",
    icon: "person_celebrate",
  },
  {
    title: "Product Promoters",
    descriptionOne:
      "Consumers increasingly expect informed and engaging interactions before making purchasing decisions.",
    descriptionTwo:
      "Our product promoters are trained to communicate key product benefits clearly, answer customer questions confidently and support customer decision-making through positive engagement. By combining product knowledge with strong interpersonal skills, they help brands create meaningful customer experiences.",
    href: "/services/product-promoters",
    icon: "campaign",
  },
  {
    title: "Event Personnel",
    descriptionOne:
      "Events often involve numerous moving parts and operational requirements.",
    descriptionTwo:
      "From registration and guest management to customer assistance and event support, our personnel help ensure smooth and professional event execution. We provide dependable staffing solutions for exhibitions, conferences, corporate functions, launches and public events.",
    href: "/services/event-personnel",
    icon: "event_available",
  },
  {
    title: "Retail Activation Teams",
    descriptionOne:
      "Retail environments provide valuable opportunities to engage customers at the point of decision.",
    descriptionTwo:
      "Our activation teams support in-store promotions, product demonstrations and customer engagement activities designed to increase visibility, encourage product discovery and support campaign objectives.",
    href: "/services/retail-activation-teams",
    icon: "storefront",
  },
  {
    title: "Roadshows & Consumer Engagement",
    descriptionOne:
      "Roadshows offer brands valuable opportunities to interact directly with consumers.",
    descriptionTwo:
      "Our teams help organisations create positive experiences through professional customer engagement, strong operational support and consistent brand representation.",
    href: "/services/roadshows-consumer-engagement",
    icon: "route",
  },
  {
    title: "Campaign Support & Coordination",
    descriptionOne:
      "Successful campaigns require effective coordination behind the scenes.",
    descriptionTwo:
      "Beyond staffing solutions, PromoPower provides operational support that helps campaigns remain organised and well-managed throughout their duration. This includes deployment planning, scheduling support, attendance monitoring and ongoing coordination.",
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

const experienceIndicators = [
  "Established Since 2002",
  "More Than 20 Years Of Workforce Experience",
  "Multi-Industry Campaign Support",
  "Professional Recruitment & Screening",
  "Structured Preparation & Briefing",
  "End-To-End Workforce Solutions",
  "Responsive Operational Coordination",
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

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden min-h-[72vh] py-20 sm:py-24 px-6 sm:px-8 md:px-16 flex items-center">
        <div className="absolute inset-0 bg-charcoal-dark"></div>
        <div className="absolute inset-0 midnight-gradient opacity-80"></div>
        <div className="absolute -top-24 -left-20 w-72 h-72 bg-primary/15 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute -bottom-16 right-0 w-80 h-80 bg-accent-amber/10 blur-3xl rounded-full animate-pulse"></div>

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-normal text-on-surface leading-tight tracking-tight mb-8">
            Building Successful Brand Experiences Through Exceptional People
          </h1>
          <div className="space-y-6 text-lg sm:text-xl text-on-surface-variant max-w-4xl leading-relaxed mb-12">
            <p>
              For more than two decades, PromoPower has helped organisations connect with customers through professional promoters, brand ambassadors, event personnel and retail support teams.
            </p>
            <p>
              Behind every successful campaign is a team of people responsible for representing the brand, engaging customers and delivering positive customer experiences. Finding, preparing and managing those people requires more than simply filling positions. It requires experience, planning, operational discipline and a deep understanding of what it takes to execute successfully in real-world environments.
            </p>
            <p>
              PromoPower provides end-to-end workforce solutions that cover recruitment, screening, preparation, deployment and ongoing campaign support. Whether supporting a single activation or coordinating multiple locations across Singapore, our team helps organisations execute confidently while maintaining the standards their brands deserve.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
            <Link
              href="/contact-us"
              className="glow-button text-on-primary px-9 sm:px-11 py-4 sm:py-5 rounded-full font-headline font-normal text-base sm:text-lg hover:scale-105 active:scale-95 transition-all text-center"
            >
              Get In Touch
            </Link>
            <Link
              href="/services"
              className="bg-white/10 backdrop-blur-md text-on-surface border border-white/20 px-9 sm:px-11 py-4 sm:py-5 rounded-full font-headline font-normal text-base sm:text-lg hover:bg-white/20 transition-all text-center"
            >
              Explore Our Services
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="rounded-xl border border-white/10 bg-surface/60 px-4 py-3 text-sm sm:text-base text-on-surface-variant">
              20+ Years Experience
            </div>
            <div className="rounded-xl border border-white/10 bg-surface/60 px-4 py-3 text-sm sm:text-base text-on-surface-variant">
              MOM Licensed Employment Agency
            </div>
            <div className="rounded-xl border border-white/10 bg-surface/60 px-4 py-3 text-sm sm:text-base text-on-surface-variant">
              Professional Staffing Solutions
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-normal text-on-surface mb-6">
              Trusted Workforce Solutions Since 2002
            </h2>
            <div className="space-y-5 text-on-surface-variant text-lg leading-relaxed">
              <p>Successful campaigns depend on far more than creative ideas.</p>
              <p>
                No matter how strong the strategy, customers ultimately interact with the people representing the brand. Those interactions influence perceptions, shape experiences and often determine how a campaign is remembered.
              </p>
              <p>
                Since 2002, PromoPower has partnered with organisations across Singapore to provide professional staffing solutions for promotions, retail activations, product launches, roadshows, exhibitions and customer engagement initiatives.
              </p>
              <p>
                Over the years, we have learned that successful execution depends on preparation, professionalism and reliability. This understanding continues to guide the way we recruit, prepare, deploy and support our people today.
              </p>
              <p>
                Our clients value us not only for the quality of our personnel, but also for the responsiveness of our team, the consistency of our processes and our commitment to helping campaigns run smoothly from start to finish.
              </p>
            </div>
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

      <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-normal text-on-surface mb-6 text-center">
          More Than Staffing. A Partner In Execution.
        </h2>
        <div className="max-w-5xl mx-auto space-y-5 text-on-surface-variant text-lg leading-relaxed">
          <p>At PromoPower, we believe that every customer interaction matters.</p>
          <p>
            Whether a customer is encountering a product for the first time, attending an event, visiting a retail environment or engaging with a brand ambassador, those moments contribute to how a brand is perceived.
          </p>
          <p>That is why our role extends beyond supplying manpower.</p>
          <p>
            We work closely with clients to understand campaign objectives, customer profiles and operational requirements before identifying personnel who are suitable for the task. By taking the time to understand what success looks like for each campaign, we are able to recommend workforce solutions that support both business goals and customer expectations.
          </p>
          <p>
            Our involvement continues throughout the campaign. From deployment planning and scheduling to ongoing support and coordination, our team remains focused on helping clients execute with confidence.
          </p>
          <p>
            For more than twenty years, this approach has enabled us to build long-term relationships with organisations that value professionalism, reliability and accountability.
          </p>
        </div>
      </section>

      <PromoPowerFramework
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

      <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 max-w-7xl mx-auto bokeh-overlay">
        <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-normal text-on-surface mb-6">
            Workforce Solutions Designed Around Your Objectives
          </h2>
          <div className="space-y-4 text-on-surface-variant text-lg leading-relaxed">
            <p>
              Every campaign presents different objectives, customer expectations and operational requirements.
            </p>
            <p>
              PromoPower provides flexible workforce solutions that help organisations engage customers effectively while maintaining a high standard of professionalism and execution.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {serviceHighlights.map((service) => (
            <article
              key={service.title}
              className="bg-surface rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-primary">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-headline font-normal text-on-surface mb-4">{service.title}</h3>
              <p className="text-on-surface-variant leading-relaxed mb-4">{service.descriptionOne}</p>
              <p className="text-on-surface-variant leading-relaxed mb-6">{service.descriptionTwo}</p>
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
              >
                Learn More
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 bg-charcoal-dark/45 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-normal text-on-surface mb-6">
              Supporting Organisations Across Diverse Industries
            </h2>
            <div className="space-y-4 text-on-surface-variant text-lg leading-relaxed">
              <p>
                Different industries present different customer expectations, operational environments and engagement requirements.
              </p>
              <p>
                Over the years, PromoPower has supported organisations across a wide range of sectors, allowing us to develop a practical understanding of how staffing requirements vary across different environments.
              </p>
              <p>
                Our experience enables us to recommend workforce solutions that align with the specific needs of each campaign while maintaining professionalism and consistency throughout execution.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industryNames.map((industry) => (
              <IndustryCard
                key={industry}
                name={industry}
                description="Different industries present different customer expectations, operational environments and engagement requirements."
                icon="business_center"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-normal text-on-surface mb-6 text-center">
          Supporting Organisations Across Singapore
        </h2>
        <div className="max-w-5xl mx-auto space-y-5 text-on-surface-variant text-lg leading-relaxed text-center">
          <p>
            Over the years, PromoPower has supported organisations across a wide range of industries, campaign types and customer engagement environments.
          </p>
          <p>
            From retail promotions and product launches to exhibitions, roadshows and customer engagement programmes, our focus has always been on helping clients execute professionally through quality people and reliable operational support.
          </p>
          <p>
            The relationships we have built over the years reflect our commitment to professionalism, responsiveness and service excellence.
          </p>
          <p>
            To respect client confidentiality, intellectual property rights and brand ownership, client names and logos are only featured where appropriate permissions have been obtained.
          </p>
          <p className="text-on-surface font-headline text-xl sm:text-2xl pt-4">Our focus is not on who we have worked for.</p>
          <p className="text-primary font-headline text-xl sm:text-2xl">Our focus is on how we can help you succeed.</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 bg-surface-container/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-normal text-on-surface mb-6 text-center">
            Built On Experience
          </h2>
          <div className="max-w-5xl mx-auto space-y-4 text-on-surface-variant text-lg leading-relaxed text-center mb-10">
            <p>Successful customer-facing campaigns require more than manpower.</p>
            <p>
              They require experience, preparation, operational discipline and the ability to adapt to different customer environments.
            </p>
            <p>
              For more than two decades, PromoPower has helped organisations execute professionally through structured workforce solutions and dependable support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {experienceIndicators.map((item) => (
              <div
                key={item}
                className="rounded-xl bg-surface border border-white/10 px-5 py-4 text-on-surface-variant text-sm sm:text-base"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto space-y-3 text-center text-on-surface-variant leading-relaxed">
            <p>
              While every campaign is unique, our commitment remains consistent: helping clients execute professionally through quality people and reliable operational support.
            </p>
            <p className="text-sm">
              Specific campaign volumes, deployment figures and project statistics are not published in order to respect client confidentiality requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-normal text-on-surface mb-6 text-center">
          Why Organisations Continue To Work With PromoPower
        </h2>
        <div className="max-w-5xl mx-auto space-y-5 text-on-surface-variant text-lg leading-relaxed text-center mb-10">
          <p>Choosing a staffing partner is about more than filling positions.</p>
          <p>
            Organisations need confidence that their partner understands the importance of reliability, professionalism and accountability.
          </p>
          <p>
            For more than two decades, PromoPower has earned that confidence by focusing on the fundamentals that matter most: quality people, structured processes, responsive support and professional execution.
          </p>
          <p>
            We understand that every deployment represents an extension of our client&apos;s brand. This understanding influences every aspect of our work, from recruitment and preparation to deployment and ongoing support.
          </p>
          <p>
            While campaigns may vary in size and complexity, our commitment remains the same: helping clients execute with confidence while delivering positive experiences for their customers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {differentiators.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-surface px-5 py-4 text-on-surface-variant"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <CTASection
        heading="Let's Start A Conversation"
        body="Every campaign presents its own opportunities and challenges. Whether you are planning a product launch, organising a roadshow, supporting a retail promotion or preparing for a large-scale activation, having the right people in place can make a significant difference to the outcome. At PromoPower, we take the time to understand your objectives, operational requirements and desired outcomes before recommending a solution tailored to your needs. If you are looking for an experienced partner that can provide professional staffing solutions supported by proven operational processes, we would welcome the opportunity to discuss how we can help."
        primaryLabel="Speak With Our Team"
        primaryHref="/contact-us"
      />
    </>
  );
}
