import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | PromoPower",
  description:
    "Find answers to common questions about PromoPower's staffing solutions and campaign support services.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <section className="min-h-[60vh] px-6 sm:px-8 md:px-16 py-24 flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-normal text-on-surface mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-on-surface-variant">
          Page scaffold created for Phase 4. Approved content will be implemented in the next phase.
        </p>
      </div>
    </section>
  );
}
