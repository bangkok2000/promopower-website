interface ExpandableProseProps {
  paragraphs: string[];
  visibleCount?: number;
  expandLabel?: string;
  className?: string;
}

export default function ExpandableProse({
  paragraphs,
  visibleCount = 1,
  expandLabel = "Read more",
  className = "",
}: ExpandableProseProps) {
  if (paragraphs.length === 0) return null;

  const visible = paragraphs.slice(0, visibleCount);
  const hidden = paragraphs.slice(visibleCount);
  const hasMore = hidden.length > 0;

  return (
    <div className={className}>
      {visible.length > 0 ? (
        <div className="prose-block">
          {visible.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {hasMore ? (
        <details className="prose-details group mt-5">
          <summary className="prose-details-summary">{expandLabel}</summary>
          <div className="prose-block mt-5">
            {hidden.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </details>
      ) : null}
    </div>
  );
}
