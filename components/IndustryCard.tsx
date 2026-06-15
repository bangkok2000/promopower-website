interface IndustryCardProps {
  name: string;
  description: string;
  icon?: string;
}

export default function IndustryCard({ name, description, icon = "domain" }: IndustryCardProps) {
  return (
    <article className="bg-surface border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-accent-amber/40 transition-colors">
      <div className="w-12 h-12 rounded-full bg-accent-amber/15 border border-accent-amber/40 flex items-center justify-center mb-5">
        <span className="material-symbols-outlined text-accent-amber">{icon}</span>
      </div>
      <h3 className="text-2xl font-headline font-normal text-on-surface mb-3">{name}</h3>
      <p className="text-on-surface-variant leading-relaxed">{description}</p>
    </article>
  );
}
