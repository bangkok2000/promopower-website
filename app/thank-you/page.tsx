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
            <Link href="/" className="btn-secondary">
              Return home
              <span className="material-symbols-outlined text-base">home</span>
            </Link>
            <Link href="/services" className="btn-secondary">
              View services
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
            <Link href="/our-work" className="btn-secondary">
              Our work
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
            <Link href="/contact-us" className="btn-secondary">
              Contact us
              <span className="material-symbols-outlined text-base">mail</span>
            </Link>
          </nav>
        </PageContentRail>
      </section>
    </>
  );
}
