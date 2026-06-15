import type { ReactNode } from "react";

interface TrustCardProps {
  title: string;
  description: string;
  icon?: string;
  highlight?: ReactNode;
}

export default function TrustCard({ title, description, icon = "verified", highlight }: TrustCardProps) {
  return (
    <article className="content-card h-full">
      <div className="icon-badge">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <h3 className="text-2xl font-headline font-normal text-on-surface mb-3">{title}</h3>
      <p className="text-on-surface-variant leading-relaxed">{description}</p>
      {highlight ? <div className="mt-5 text-sm text-primary font-bold uppercase tracking-wider">{highlight}</div> : null}
    </article>
  );
}
