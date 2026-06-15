import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why PromoPower | PromoPower",
  description:
    "Learn why organisations trust PromoPower for professional staffing solutions and operational support.",
  alternates: { canonical: "/why-promopower" },
};

export default function WhyPromoPowerPage() {
  return (
    <section className="min-h-[60vh] px-6 sm:px-8 md:px-16 py-24 flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-normal text-on-surface mb-6">
          Why PromoPower
        </h1>
        <p className="text-lg text-on-surface-variant mb-10">
          Page scaffold created for Phase 4. Approved content will be implemented in the next phase.
        </p>
        <Link
          href="/contact-us"
          className="glow-button text-on-primary px-8 py-4 rounded-full font-headline font-normal inline-flex items-center gap-2"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
