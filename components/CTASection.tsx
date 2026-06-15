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
    <section className="page-section section-muted">
      <div className="page-container-narrow text-center">
        <h2 className="section-title">{heading}</h2>
        <p className="page-intro mx-auto mb-10">{body}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="glow-button text-on-primary px-8 py-4 rounded-full font-headline font-normal hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            {primaryLabel}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>

          {secondaryLabel && secondaryHref ? (
            <Link href={secondaryHref} className="btn-secondary">
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
