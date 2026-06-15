type ContentListItem = {
  title: string;
  description: string;
  icon: string;
};

type ContentListProps = {
  items: ContentListItem[];
  ariaLabel?: string;
};

export default function ContentList({ items, ariaLabel = "Key points" }: ContentListProps) {
  return (
    <ul className="content-list" aria-label={ariaLabel}>
      {items.map((item) => (
        <li key={item.title} className="content-list-item">
          <div className="content-list-icon" aria-hidden="true">
            <span className="material-symbols-outlined">{item.icon}</span>
          </div>
          <div className="content-list-copy">
            <h2 className="content-list-title">{item.title}</h2>
            <p className="content-list-description">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
