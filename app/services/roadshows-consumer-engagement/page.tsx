import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadshows & Consumer Engagement",
  description:
    "Roadshow and consumer engagement staffing in Singapore for islandwide promotional tours, consumer festivals, sampling drives and on-ground brand experiences.",
  keywords: [
    "roadshow staffing Singapore",
    "consumer engagement",
    "islandwide roadshow",
    "on-ground brand activation",
    "consumer festival staffing",
  ],
  alternates: { canonical: "/services/roadshows-consumer-engagement" },
  openGraph: {
    title: "Roadshows & Consumer Engagement | PromoPower",
    description:
      "Roadshow and consumer engagement staffing for islandwide promotional tours and on-ground brand experiences in Singapore.",
    url: "https://promopower.com.sg/services/roadshows-consumer-engagement",
    siteName: "PromoPower",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roadshows & Consumer Engagement | PromoPower",
    description:
      "Staffing for islandwide roadshows and on-ground consumer engagement campaigns in Singapore.",
  },
};

export default function RoadshowsConsumerEngagementPage() {
  return (
    <section className="min-h-[60vh] px-6 sm:px-8 md:px-16 py-24 flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-normal text-on-surface mb-6">
          Roadshows & Consumer Engagement
        </h1>
        <p className="text-lg text-on-surface-variant mb-10">Page scaffold created for Phase 4.</p>
        <Link href="/services" className="text-primary font-bold hover:text-white transition-colors">Back to Services</Link>
      </div>
    </section>
  );
}
