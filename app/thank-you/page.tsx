import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | PromoPower",
  description:
    "Thank you for contacting PromoPower. Our team will review your request and respond as soon as possible.",
  alternates: { canonical: "/thank-you" },
};

export default function ThankYouPage() {
  return (
    <section className="min-h-[60vh] px-6 sm:px-8 md:px-16 py-24 flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-normal text-on-surface mb-6">
          Thank You
        </h1>
        <p className="text-lg text-on-surface-variant mb-10">
          Your enquiry has been received. Our team will get back to you as soon as possible.
        </p>
        <Link
          href="/"
          className="bg-white/10 backdrop-blur-md text-on-surface border border-white/20 px-8 py-4 rounded-full font-headline font-normal inline-flex items-center gap-2 hover:bg-white/20 transition-all"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
