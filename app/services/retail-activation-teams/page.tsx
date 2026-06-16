import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retail Activation Teams",
  description:
    "Coordinated retail activation teams in Singapore for multi-location campaigns, mall promotions, counter takeovers and structured retail rollouts.",
  keywords: [
    "retail activation Singapore",
    "retail activation teams",
    "mall activation staffing",
    "counter takeover staffing",
    "multi-location retail campaign",
  ],
  alternates: { canonical: "/services/retail-activation-teams" },
  openGraph: {
    title: "Retail Activation Teams | PromoPower",
    description:
      "Coordinated retail activation teams for multi-location campaigns and mall promotions in Singapore.",
    url: "https://promopower.com.sg/services/retail-activation-teams",
    siteName: "PromoPower",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Activation Teams | PromoPower",
    description:
      "Retail activation teams for multi-location campaigns and structured rollouts in Singapore.",
  },
};

export default function RetailActivationTeamsPage() {
  return (
    <section className="min-h-[60vh] px-6 sm:px-8 md:px-16 py-24 flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-normal text-on-surface mb-6">
          Retail Activation Teams
        </h1>
        <p className="text-lg text-on-surface-variant mb-10">Page scaffold created for Phase 4.</p>
        <Link href="/services" className="text-primary font-bold hover:text-white transition-colors">Back to Services</Link>
      </div>
    </section>
  );
}
