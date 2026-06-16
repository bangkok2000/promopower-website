import type { Metadata } from "next";
import { GALLERY_PHOTOS } from "@/lib/data";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Our Work & Portfolio | PromoPower",
  description:
    "Browse our portfolio of campaign activations, retail promotions, roadshows and customer engagement initiatives across Singapore.",
  alternates: { canonical: "/our-work" },
  openGraph: {
    title: "Our Work | PromoPower",
    description:
      "Portfolio of professional staffing activations and customer-facing campaign executions across Singapore.",
    url: "https://promopower.com.sg/our-work",
    siteName: "PromoPower",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | PromoPower",
    description:
      "Portfolio of professional staffing activations across Singapore.",
  },
};

export default function OurWork() {
  return (
    <>
      <PageHero
        badge="Our Work"
        title="Campaign Portfolio"
        description="A selection of activations, retail promotions, roadshows and customer engagement campaigns supported by PromoPower across Singapore."
      />

      <section className="page-section">
        <div className="page-container">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-x-3">
            {GALLERY_PHOTOS.map((src, i) => (
              <div
                key={i}
                className="mb-3 overflow-hidden rounded-lg break-inside-avoid"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`PromoPower campaign activation ${i + 1}`}
                  loading={i < 12 ? "eager" : "lazy"}
                  className="w-full h-auto block object-cover transition-transform duration-300 hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Discuss Your Next Campaign?"
        body="Tell us about your upcoming activation and we'll help you plan the right workforce solution."
        primaryLabel="Contact Our Team"
        primaryHref="/contact-us"
      />
    </>
  );
}
