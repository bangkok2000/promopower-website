import Link from "next/link";
import { HOME_ENTITY_SUMMARY_VISIBLE } from "@/lib/site";

type StatItem = {
  value: string;
  label: string;
  labelShort?: string;
};

const STATS: StatItem[] = [
  { value: "2002", label: "Trusted Since" },
  { value: "20+ Yrs", label: "Industry Experience" },
  {
    value: "MOM",
    label: "Licensed Agency · 20C0109",
    labelShort: "Licensed · 20C0109",
  },
  { value: "9+", label: "Industries Served" },
  { value: "5-Step", label: "Execution Framework" },
];

export default function StatBand() {
  return (
    <section className="stat-band" aria-labelledby="home-company-summary-heading">
      <div className="page-container stat-band-metrics-wrap">
        <div className="stat-band-metrics" aria-label="PromoPower credentials">
          <dl className="stat-band-grid">
            {STATS.map((stat) => (
              <div key={stat.label} className="stat-item">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="stat-value">{stat.value}</dd>
                <p className="stat-label">
                  <span className="sm:hidden">{stat.labelShort ?? stat.label}</span>
                  <span className="hidden sm:inline">{stat.label}</span>
                </p>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="stat-band-summary">
        <div className="page-container stat-band-summary-layout">
          <h2 id="home-company-summary-heading" className="stat-band-summary-heading">
            In brief
          </h2>
          <div className="stat-band-summary-body">
            <p className="home-about-definition stat-band-summary-text">
              <span className="font-semibold text-slate-800">PromoPower Pte Ltd</span>
              {` ${HOME_ENTITY_SUMMARY_VISIBLE}`}
            </p>
            <p className="stat-band-summary-link">
              <Link href="/about-us">Company background, leadership and how we work</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
