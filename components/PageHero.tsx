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
      className={`magazine-page-hero relative overflow-hidden scroll-mt-header border-b border-slate-200 bg-white ${compact ? "pt-6 pb-10 sm:pt-8 sm:pb-12" : "pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16"}`}
    >
      <div className="relative z-10 w-full">
        <div className="page-container">
          {/* Editorial Dateline */}
          <div className="flex flex-wrap items-center gap-2.5 border-b border-slate-200/80 pb-3 mb-6 sm:mb-8 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-slate-500 font-label">
            <span className="inline-block w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
            {badge ? (
              <span className="text-primary">{badge}</span>
            ) : null}
            <span className="text-slate-300">/</span>
            <span>PromoPower Singapore</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.035em] text-slate-900 leading-[1.1] font-headline mb-6 sm:mb-8">
              {title}
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-slate-600 max-w-3xl">
              {description}
            </p>
            {children ? <div className="mt-8">{children}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
