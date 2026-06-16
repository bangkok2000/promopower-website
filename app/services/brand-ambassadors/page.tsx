import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Ambassadors",
  description:
    "Professionally trained brand ambassadors in Singapore for product launches, retail activations, customer-facing campaigns and premium brand engagement.",
  keywords: [
    "brand ambassadors Singapore",
    "luxury brand ambassadors",
    "product launch staffing",
    "retail activation ambassadors",
    "PromoPower brand ambassadors",
  ],
  alternates: { canonical: "/services/brand-ambassadors" },
  openGraph: {
    title: "Brand Ambassadors | PromoPower",
    description:
      "Professional brand ambassadors for customer-facing campaigns, product launches and retail activations in Singapore.",
    url: "https://promopower.com.sg/services/brand-ambassadors",
    siteName: "PromoPower",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Ambassadors | PromoPower",
    description:
      "Professional brand ambassadors for product launches and retail activations in Singapore.",
  },
};

export default function BrandAmbassadorsPage() {
  return (
    <section className="min-h-[60vh] px-6 sm:px-8 md:px-16 py-24 flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-normal text-on-surface mb-6">
          Brand Ambassadors
        </h1>
        <p className="text-lg text-on-surface-variant mb-10">Page scaffold created for Phase 4.</p>
        <Link href="/services" className="text-primary font-bold hover:text-white transition-colors">Back to Services</Link>
      </div>
    </section>
  );
}
