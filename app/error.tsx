"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="min-h-[60vh] px-6 sm:px-8 md:px-16 py-24 flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-normal text-on-surface mb-6">
          Something Went Wrong
        </h1>
        <p className="text-lg text-on-surface-variant mb-10">
          An unexpected error occurred. Please try again or return to the homepage.
        </p>
        <nav aria-label="Helpful links" className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
          <button
            type="button"
            onClick={reset}
            className="glow-button text-on-primary px-8 py-4 rounded-full font-headline font-normal"
          >
            Try again
          </button>
          <Link
            href="/"
            className="bg-surface-container backdrop-blur-md text-on-surface border border-black/15 px-8 py-4 rounded-full font-headline font-normal inline-flex items-center justify-center gap-2 hover:bg-black/5 transition-all"
          >
            Return home
          </Link>
          <Link
            href="/contact-us"
            className="bg-surface-container backdrop-blur-md text-on-surface border border-black/15 px-8 py-4 rounded-full font-headline font-normal inline-flex items-center justify-center gap-2 hover:bg-black/5 transition-all"
          >
            Contact us
          </Link>
        </nav>
      </div>
    </section>
  );
}
