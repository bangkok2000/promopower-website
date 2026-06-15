import Link from "next/link";
import type { ReactNode } from "react";

interface ServicePageTemplateProps {
  badge?: string;
  title: string;
  intro: string;
  children?: ReactNode;
  ctaHref?: string;
  ctaLabel?: string;
}

export default function ServicePageTemplate({
  badge = "Service",
  title,
  intro,
  children,
  ctaHref = "/contact-us",
  ctaLabel = "Contact Us",
}: ServicePageTemplateProps) {
  return (
    <>
      <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 text-center max-w-5xl mx-auto mt-12">
        <span className="text-primary font-headline font-normal tracking-widest text-sm uppercase mb-6 block">{badge}</span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-normal text-on-surface tracking-tight mb-8 leading-tight">
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">{intro}</p>
      </section>

      <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 max-w-6xl mx-auto">{children}</section>

      <section className="py-16 sm:py-24 px-6 sm:px-8 text-center bg-surface-container border-t border-white/5">
        <Link
          href={ctaHref}
          className="glow-button px-8 sm:px-10 py-4 sm:py-5 rounded-full text-on-primary font-headline font-normal text-lg sm:text-xl hover:scale-105 transition-transform inline-flex items-center gap-3"
        >
          {ctaLabel}
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </section>
    </>
  );
}
