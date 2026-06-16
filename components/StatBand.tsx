const STATS = [
  { value: "2002", label: "Trusted Since" },
  { value: "20+ Yrs", label: "Industry Experience" },
  { value: "MOM", label: "Licensed Agency · 20C0109" },
  { value: "9+", label: "Industries Served" },
  { value: "5-Step", label: "Execution Framework" },
] as const;

export default function StatBand() {
  return (
    <section className="stat-band" aria-label="PromoPower credentials at a glance">
      <div className="page-container px-0">
        <dl className="stat-band-grid">
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-item">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="stat-value">{stat.value}</dd>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
