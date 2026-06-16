import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Personnel",
  description:
    "Reliable event personnel in Singapore for corporate events, conferences, brand activations, VIP hospitality and large-scale public events.",
  keywords: [
    "event staffing Singapore",
    "event personnel",
    "corporate event staff",
    "VIP event hostess",
    "conference staffing Singapore",
  ],
  alternates: { canonical: "/services/event-personnel" },
  openGraph: {
    title: "Event Personnel | PromoPower",
    description:
      "Professional event personnel for corporate events, brand activations and VIP hospitality in Singapore.",
    url: "https://promopower.com.sg/services/event-personnel",
    siteName: "PromoPower",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Personnel | PromoPower",
    description:
      "Event staffing for corporate, conference and VIP hospitality programmes in Singapore.",
  },
};

export default function EventPersonnelPage() {
  return (
    <section className="min-h-[60vh] px-6 sm:px-8 md:px-16 py-24 flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-normal text-on-surface mb-6">
          Event Personnel
        </h1>
        <p className="text-lg text-on-surface-variant mb-10">Page scaffold created for Phase 4.</p>
        <Link href="/services" className="text-primary font-bold hover:text-white transition-colors">Back to Services</Link>
      </div>
    </section>
  );
}
