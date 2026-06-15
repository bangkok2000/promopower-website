import type { ReactNode } from "react";

interface PageHeroProps {
  badge?: string;
  title: string;
  description: string;
  align?: "center" | "left";
  children?: ReactNode;
  compact?: boolean;
}

export default function PageHero({
  badge,
  title,
  description,
  align = "center",
  children,
  compact = false,
}: PageHeroProps) {
  const isCentered = align === "center";

  return (
    <section
      className={`page-hero relative flex items-center overflow-hidden ${compact ? "min-h-[40vh]" : "min-h-[45vh]"}`}
    >
      <div className="absolute inset-0 midnight-gradient opacity-80" aria-hidden="true" />
      <div className="hero-glow hero-glow-primary -top-24 -left-20" aria-hidden="true" />
      <div className="hero-glow hero-glow-accent -bottom-16 right-0" aria-hidden="true" />

      <div
        className={`relative z-10 page-section w-full ${isCentered ? "max-w-5xl mx-auto text-center" : "max-w-5xl mx-auto"}`}
      >
        {badge ? <span className="section-label">{badge}</span> : null}
        <h1 className={`page-title ${isCentered ? "mx-auto" : ""}`}>{title}</h1>
        <p className={`page-intro ${isCentered ? "mx-auto" : "max-w-4xl"}`}>{description}</p>
        {children}
      </div>
    </section>
  );
}
