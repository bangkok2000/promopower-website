interface IndustryCardProps {
  name: string;
  description: string;
  icon?: string;
}

export default function IndustryCard({ name, description }: IndustryCardProps) {
  return (
    <article className="border-t border-slate-200 pt-5">
      <h3 className="text-lg font-bold text-slate-900 mb-2">{name}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </article>
  );
}
