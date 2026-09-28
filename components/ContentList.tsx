type ContentListItem = {
  title: string;
  description: string;
  icon?: string;
};

type ContentListProps = {
  items: ContentListItem[];
  ariaLabel?: string;
};

export default function ContentList({ items, ariaLabel = "Key points" }: ContentListProps) {
  return (
    <ul className="content-list" aria-label={ariaLabel}>
      {items.map((item, index) => (
        <li key={item.title} className="content-list-item">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 w-8">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="content-list-copy">
            <h2 className="content-list-title">{item.title}</h2>
            <p className="content-list-description">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
