import type { ReactNode } from "react";

interface PageHeroProps {
  badge?: string;
  title: string;
  description: string;
  children?: ReactNode;
  compact?: boolean;
}

export default function PageHero({ badge, title, description, children, compact = false }: PageHeroProps) {
  return (
    <section
      id="top"
      className={`page-hero relative overflow-hidden scroll-mt-header ${compact ? "min-h-[40vh]" : "min-h-[45vh]"}`}
    >
      <div className="absolute inset-0 midnight-gradient opacity-80" aria-hidden="true" />
      <div className="hero-glow hero-glow-primary -top-24 -left-20" aria-hidden="true" />
      <div className="hero-glow hero-glow-accent -bottom-16 right-0" aria-hidden="true" />

      <div className="relative z-10 w-full py-10 sm:py-12 lg:py-14">
        <div className="page-container">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
            <div className="hidden lg:block lg:col-span-4 xl:col-span-3" aria-hidden="true" />

            <div className="lg:col-span-8 xl:col-span-9">
              {badge ? <span className="section-label">{badge}</span> : null}
              <h1 className="page-title max-w-3xl">{title}</h1>
              <p className="page-intro max-w-2xl mb-8">{description}</p>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
