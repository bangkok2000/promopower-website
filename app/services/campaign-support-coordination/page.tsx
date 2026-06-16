import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaign Support & Coordination",
  description:
    "Campaign support and on-ground coordination for promotional rollouts in Singapore \u2014 supervisors, deployment management and end-to-end operational oversight.",
  keywords: [
    "campaign coordination Singapore",
    "campaign supervisors",
    "on-ground coordinator",
    "deployment management",
    "promotional rollout support",
  ],
  alternates: { canonical: "/services/campaign-support-coordination" },
  openGraph: {
    title: "Campaign Support & Coordination | PromoPower",
    description:
      "On-ground coordinators and supervisors for structured campaign rollouts in Singapore.",
    url: "https://promopower.com.sg/services/campaign-support-coordination",
    siteName: "PromoPower",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campaign Support & Coordination | PromoPower",
    description:
      "Supervisors and deployment management for promotional rollouts in Singapore.",
  },
};

export default function CampaignSupportCoordinationPage() {
  return (
    <section className="min-h-[60vh] px-6 sm:px-8 md:px-16 py-24 flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-normal text-on-surface mb-6">
          Campaign Support & Coordination
        </h1>
        <p className="text-lg text-on-surface-variant mb-10">Page scaffold created for Phase 4.</p>
        <Link href="/services" className="text-primary font-bold hover:text-white transition-colors">Back to Services</Link>
      </div>
    </section>
  );
}
