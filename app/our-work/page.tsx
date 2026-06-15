import Link from "next/link";
import type { Metadata } from "next";
import { PORTFOLIO_CAMPAIGNS } from "@/lib/data";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Our Work & Portfolio | PromoPower",
  description:
    "Browse selected campaign examples that reflect PromoPower's professional staffing support across promotions, retail activations, events and customer engagement initiatives.",
  alternates: { canonical: "/our-work" },
  openGraph: {
    title: "Our Work | PromoPower",
    description:
      "Explore campaign examples that demonstrate PromoPower's structured workforce support and professional customer-facing execution.",
    url: "https://promopower.com.sg/our-work",
    siteName: "PromoPower",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | PromoPower",
    description:
      "Campaign examples showing professional staffing support for customer-facing initiatives in Singapore.",
  },
};

const featuredCases = [
  {
    id: "01",
    title: "Major Global Technology Brand",
    challenge:
      "Deploy and manage a large promoter team across a multi-day convention environment while maintaining service consistency.",
    solution:
      "Provided end-to-end staffing operations, structured campaign briefings and dedicated on-site supervision.",
    outcome:
      "Full deployment achieved across all locations with consistent customer-facing delivery and smooth operations.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7f9Z8zstYE4mr-MVEbvUyKOq47PuzFn3pIEf9RPoRL11vIjlcKN7bE9-6kTtVYr2XL76Naff9FnB_Fz6eV8QzCXqc6kCKDVexPTCG0DO03AdYiXuKnCUcUTfnWHeTvM2d-ZWmfJaUXDEPAT9Tt-0pVsMmeOAz-Ivw19kKJaeM4BNLMZbVOwJoQ7Wk3yZtbwSLBA2xe-NC62sB8yC1bRs1cQqO4mihkCo_b5zMPG_xRUPUw6cHFXMM-p6AulenC6gEpSR_VAXtnxQ",
  },
  {
    id: "02",
    title: "International Beauty Campaign",
    challenge:
      "Support high-volume customer engagement for a flagship launch while preserving premium brand presentation standards.",
    solution:
      "Selected and prepared campaign personnel with clear brand and customer-interaction briefings.",
    outcome:
      "Strong campaign execution and consistent representation maintained throughout the launch period.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDP2SOtLdxFredw6LyC0e7DHwJvFwNQGT2IE1NAMhP3qWRuMayvdElhXj9SWjJbqgP0wW8WQDZvfoQEqgXsRrc7hutiCIhR-4vN2VE-8cUpwEV-KL8l243Vp4aWrCEfZ4RB0BbyhDZcitxnM2ehivDjGWN6jyhnClIeyaLQJ2yP-Hhpm_6hGwAahtQP9jFJTLrdkgrFp0TnbE_JpozXk9Z_BBJXEu1f9HsOsUrWKVgvQ6rRNUy7ovEfmFUWuJG-kTASrFvi1I2WrW0",
  },
];

export default function OurWork() {
  return (
    <>
      <PageHero
        badge="Our Work"
        title="Campaign Case Studies"
        description="Selected examples of how PromoPower supports customer-facing campaigns with professional staffing, structured preparation and dependable operations."
      />

      <section className="page-section">
        <div className="page-container">
        <h2 className="section-title text-center mb-12">
          Featured Examples
        </h2>
        <div className="space-y-12 sm:space-y-20">
          {featuredCases.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 sm:gap-14 group`}
            >
              <div className="md:w-3/5 relative">
                <div className="bg-primary/15 absolute -inset-4 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={`${item.title} case study`}
                  className="relative z-10 w-full aspect-video object-cover rounded-lg shadow-2xl border border-white/10"
                  src={item.imageUrl}
                />
              </div>
              <div className="md:w-2/5">
                <span className="text-primary font-black text-7xl opacity-20 block mb-2 leading-none">{item.id}</span>
                <h3 className="text-3xl sm:text-4xl font-headline font-normal mb-5 text-on-surface">{item.title}</h3>
                <div className="space-y-4 text-on-surface-variant leading-relaxed">
                  <p>
                    <strong className="text-on-surface">Challenge:</strong> {item.challenge}
                  </p>
                  <p>
                    <strong className="text-on-surface">Solution:</strong> {item.solution}
                  </p>
                  <p>
                    <strong className="text-on-surface">Outcome:</strong> {item.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section id="portfolio" className="page-section section-muted relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" aria-hidden="true"></div>
        <div className="page-container relative z-10">
        <div className="text-center mb-12">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Additional Campaigns</h2>
          <p className="page-intro mx-auto">
            Examples span multiple campaign types and industries. Client names and sensitive campaign details
            are shared selectively to respect confidentiality obligations.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-x-6 gap-y-6 space-y-6 relative z-10">
          {PORTFOLIO_CAMPAIGNS.map((campaign, i) => (
            <Link href={`/our-work/${campaign.slug}`} key={campaign.slug} className="block break-inside-avoid w-full">
              <div className={`bg-surface rounded-2xl overflow-hidden shadow-xl border border-white/10 group cursor-pointer w-full relative ${i % 4 === 0 ? "aspect-[3/4]" : i % 3 === 0 ? "aspect-[4/5]" : "aspect-square"}`}>
                <div className="w-full h-full bg-surface-container relative">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-color-dodge"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={campaign.imageUrl} alt={campaign.title} className="w-full h-full object-cover grayscale opacity-35 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105" />
                  <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="font-headline font-normal text-2xl text-on-surface drop-shadow-md">{campaign.title}</p>
                    <p className="text-white/80 text-sm">{campaign.subtitle}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        </div>
      </section>

      <CTASection
        heading="Discuss Your Next Campaign"
        body="If you are planning an upcoming campaign, we can help you align workforce planning with your operational and customer engagement objectives."
        primaryLabel="Contact Our Team"
        primaryHref="/contact-us"
      />
    </>
  );
}
