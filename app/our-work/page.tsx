import Link from "next/link";
import type { Metadata } from "next";
import { FEATURED_CASES, PORTFOLIO_CAMPAIGNS } from "@/lib/data";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";

const FEATURED_ICONS = ["hub", "auto_awesome"];
const PORTFOLIO_ICONS = [
  "storefront",
  "campaign",
  "celebration",
  "diamond",
  "local_bar",
  "spa",
  "shopping_bag",
  "event",
];

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
          {FEATURED_CASES.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 sm:gap-14 group`}
            >
              <div className="md:w-3/5 relative">
                <div className="bg-primary/15 absolute -inset-4 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="relative z-10 w-full aspect-video rounded-lg shadow-2xl border border-white/10 overflow-hidden">
                  <div className={`portfolio-visual pv-${index % 4} !items-center !justify-center`}>
                    <span className="relative z-[2] material-symbols-outlined text-on-surface/25" style={{ fontSize: "5rem" }} aria-hidden="true">
                      {FEATURED_ICONS[index % FEATURED_ICONS.length]}
                    </span>
                  </div>
                </div>
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
              <div className={`rounded-2xl overflow-hidden shadow-xl border border-white/10 group cursor-pointer w-full relative ${i % 4 === 0 ? "aspect-[3/4]" : i % 3 === 0 ? "aspect-[4/5]" : "aspect-square"}`}>
                <div className={`portfolio-visual pv-${i % 4} transition-transform duration-700 group-hover:scale-105`}>
                  <span className="portfolio-visual-watermark">
                    <span className="material-symbols-outlined" aria-hidden="true">{PORTFOLIO_ICONS[i % PORTFOLIO_ICONS.length]}</span>
                  </span>
                  <div className="relative z-[2] w-full p-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                    <p className="font-headline font-normal text-2xl text-on-surface drop-shadow-md">{campaign.title}</p>
                    <p className="text-white/75 text-sm">{campaign.subtitle}</p>
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
