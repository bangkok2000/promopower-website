import Link from "next/link";

interface CTASectionProps {
  heading: string;
  body: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  heading,
  body,
  primaryLabel = "Speak With Our Team",
  primaryHref = "/contact-us",
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 border-t border-white/10 bg-charcoal-dark/70">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-normal text-on-surface mb-6">{heading}</h2>
        <p className="text-lg text-on-surface-variant leading-relaxed mb-10">{body}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="glow-button text-on-primary px-8 py-4 rounded-full font-headline font-normal hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            {primaryLabel}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>

          {secondaryLabel && secondaryHref ? (
            <Link
              href={secondaryHref}
              className="bg-white/10 backdrop-blur-md text-on-surface border border-white/20 px-8 py-4 rounded-full font-headline font-normal hover:bg-white/20 transition-all"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
