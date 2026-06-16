import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Promoters",
  description:
    "Trained product promoters in Singapore for retail demonstrations, in-store sampling, FMCG campaigns and consumer trial programmes.",
  keywords: [
    "product promoters Singapore",
    "retail promoters",
    "in-store sampling",
    "FMCG promoter staffing",
    "product demonstration staff",
  ],
  alternates: { canonical: "/services/product-promoters" },
  openGraph: {
    title: "Product Promoters | PromoPower",
    description:
      "Product promoters for in-store demonstrations, sampling and FMCG retail campaigns in Singapore.",
    url: "https://promopower.com.sg/services/product-promoters",
    siteName: "PromoPower",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Promoters | PromoPower",
    description:
      "Product promoters for retail demonstrations and consumer trial programmes in Singapore.",
  },
};

export default function ProductPromotersPage() {
  return (
    <section className="min-h-[60vh] px-6 sm:px-8 md:px-16 py-24 flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-normal text-on-surface mb-6">
          Product Promoters
        </h1>
        <p className="text-lg text-on-surface-variant mb-10">Page scaffold created for Phase 4.</p>
        <Link href="/services" className="text-primary font-bold hover:text-white transition-colors">Back to Services</Link>
      </div>
    </section>
  );
}
