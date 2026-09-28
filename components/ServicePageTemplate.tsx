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

      <section className="py-12 sm:py-14 lg:py-16">
        <div className="page-container-narrow">{children}</div>
      </section>

      <section className="py-12 sm:py-14 lg:py-16 bg-slate-50 border-y border-slate-200">
        <div className="page-container text-center">
          <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary mb-4 font-label">
            Ready To Discuss Your Campaign?
          </p>
          <Link
            href={ctaHref}
            className="glow-button px-8 sm:px-10 py-4 sm:py-5 text-white font-semibold text-lg hover:scale-[1.02] transition-all"
          >
            {ctaLabel}
          </Link>
        </div>
      </section>
    </>
  );
}
