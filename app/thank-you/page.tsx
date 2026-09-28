import Link from "next/link";
import type { Metadata } from "next";
import PageContentRail from "@/components/PageContentRail";
import PageHero from "@/components/PageHero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Thank You",
  description:
    "Thank you for contacting PromoPower. Our team will review your request and respond as soon as possible.",
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        badge="Thank you"
        title="Your Enquiry Has Been Received"
        description="Our team will review your request and respond as soon as possible."
        compact
      />

      <section className="page-section">
        <PageContentRail>
          <nav aria-label="Next steps" className="flex flex-wrap gap-4">
            <Link href="/" className="px-5 py-2.5 border border-slate-300 rounded-full text-slate-700 font-semibold text-sm hover:border-primary hover:text-primary transition-all">
              Return Home
            </Link>
            <Link href="/services" className="px-5 py-2.5 border border-slate-300 rounded-full text-slate-700 font-semibold text-sm hover:border-primary hover:text-primary transition-all">
              View Services
            </Link>
            <Link href="/our-work" className="px-5 py-2.5 border border-slate-300 rounded-full text-slate-700 font-semibold text-sm hover:border-primary hover:text-primary transition-all">
              Our Work
            </Link>
            <Link href="/contact-us" className="px-5 py-2.5 border border-slate-300 rounded-full text-slate-700 font-semibold text-sm hover:border-primary hover:text-primary transition-all">
              Contact Us
            </Link>
          </nav>
        </PageContentRail>
      </section>
    </>
  );
}
