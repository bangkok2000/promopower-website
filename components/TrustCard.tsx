import type { ReactNode } from "react";

interface TrustCardProps {
  title: string;
  description: string;
  icon?: string;
  highlight?: ReactNode;
}

export default function TrustCard({ title, description, highlight }: TrustCardProps) {
  return (
    <article className="border-t border-slate-200 pt-4">
      <h3 className="text-base font-bold text-slate-900 mb-1.5">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
      {highlight ? <div className="mt-3 text-xs text-primary font-bold uppercase tracking-wider">{highlight}</div> : null}
    </article>
  );
}
