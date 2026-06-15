import Link from "next/link";
import type { ReactNode } from "react";
import PageHero from "@/components/PageHero";

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
      <PageHero badge={badge} title={title} description={intro} />

      <section className="page-section">
        <div className="page-container-narrow">{children}</div>
      </section>

      <section className="page-section section-muted text-center">
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
