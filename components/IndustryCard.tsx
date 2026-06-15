interface IndustryCardProps {
  name: string;
  description: string;
  icon?: string;
}

export default function IndustryCard({ name, description, icon = "domain" }: IndustryCardProps) {
  return (
    <article className="content-card h-full">
      <div className="icon-badge">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <h3 className="text-2xl font-headline font-normal text-on-surface mb-3">{name}</h3>
      <p className="text-on-surface-variant leading-relaxed">{description}</p>
    </article>
  );
}
