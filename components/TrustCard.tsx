import type { ReactNode } from "react";

interface TrustCardProps {
  title: string;
  description: string;
  icon?: string;
  highlight?: ReactNode;
}

export default function TrustCard({ title, description, icon = "verified", highlight }: TrustCardProps) {
  return (
    <article className="bg-surface border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-colors">
      <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mb-5">
        <span className="material-symbols-outlined text-primary">{icon}</span>
      </div>
      <h3 className="text-2xl font-headline font-normal text-on-surface mb-3">{title}</h3>
      <p className="text-on-surface-variant leading-relaxed">{description}</p>
      {highlight ? <div className="mt-5 text-sm text-primary font-bold uppercase tracking-wider">{highlight}</div> : null}
    </article>
  );
}
