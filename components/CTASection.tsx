import Link from "next/link";
import ExpandableProse from "@/components/ExpandableProse";

interface CTASectionProps {
  heading: string;
  body?: string;
  bodyParagraphs?: string[];
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  heading,
  body,
  bodyParagraphs,
  primaryLabel = "Speak With Our Team",
  primaryHref = "/contact-us",
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-slate-50 border-y border-slate-200">
      <div className="page-container-narrow text-center">
        <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary mb-4 font-label">
          Get Started
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-5">{heading}</h2>
        {bodyParagraphs ? (
          <ExpandableProse paragraphs={bodyParagraphs} visibleCount={1} expandLabel="Read full message" className="mx-auto mb-10 text-left sm:text-center" />
        ) : (
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">{body}</p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={primaryHref} className="glow-button px-8 py-4 text-white font-semibold hover:scale-[1.02] transition-all">
            {primaryLabel}
          </Link>

          {secondaryLabel && secondaryHref ? (
            <Link href={secondaryHref} className="px-6 py-3 border border-slate-300 rounded-full text-slate-700 font-semibold hover:border-primary hover:text-primary transition-all">
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
