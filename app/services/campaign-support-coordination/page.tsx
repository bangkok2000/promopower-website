import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaign Support & Coordination | PromoPower",
  description: "Service route scaffold for Campaign Support & Coordination.",
  alternates: { canonical: "/services/campaign-support-coordination" },
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
