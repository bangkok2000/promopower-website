import Link from "next/link";

export default function DualAudienceCards() {
  return (
    <div className="dual-audience-editorial">
      <article className="dual-audience-item">
        <span className="section-label">For Clients</span>
        <h3 className="text-xl font-bold text-slate-900 mb-3">Plan Your Campaign Workforce</h3>
        <p className="text-slate-600 leading-relaxed mb-6 flex-1">
          Include the service, headcount, dates and locations. We will reply with who we would field and how the roster would be run.
        </p>
        <Link href="/contact-us" className="text-sm font-semibold text-primary hover:underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-all mt-auto">
          Speak With Our Team
        </Link>
      </article>

      <article className="dual-audience-item">
        <span className="section-label">For Jobseekers</span>
        <h3 className="text-xl font-bold text-slate-900 mb-3">Join Our Talent Pool</h3>
        <p className="text-slate-600 leading-relaxed mb-6 flex-1">
          Apply for promotional, retail and event shifts. Recruitment contacts you only when a campaign matches your profile and availability. An application is not a job offer.
        </p>
        <Link href="/jobseekers" className="text-sm font-semibold text-primary hover:underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-all mt-auto">
          Submit Application
        </Link>
      </article>
    </div>
  );
}
