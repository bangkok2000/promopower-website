import Link from "next/link";

export default function DualAudienceCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">
      <article className="content-card flex flex-col h-full">
        <span className="section-label">For Clients</span>
        <h3 className="text-2xl font-headline font-normal text-on-surface mb-3">Plan Your Campaign Workforce</h3>
        <p className="text-on-surface-variant leading-relaxed mb-6 flex-1">
          Discuss your objectives, timeline and staffing requirements with our team. We will recommend a practical
          workforce solution aligned with your campaign goals.
        </p>
        <Link href="/contact-us" className="homepage-tab-link mt-auto">
          Speak With Our Team
          <span className="material-symbols-outlined text-base" aria-hidden="true">
            arrow_forward
          </span>
        </Link>
      </article>

      <article className="content-card flex flex-col h-full border-primary/20 bg-primary/5">
        <span className="section-label">For Jobseekers</span>
        <h3 className="text-2xl font-headline font-normal text-on-surface mb-3">Join Our Talent Pool</h3>
        <p className="text-on-surface-variant leading-relaxed mb-6 flex-1">
          Looking for flexible customer-facing opportunities? Submit your profile and our recruitment team will contact
          you when suitable assignments are available.
        </p>
        <Link href="/jobseekers" className="homepage-tab-link mt-auto">
          Submit Application
          <span className="material-symbols-outlined text-base" aria-hidden="true">
            arrow_forward
          </span>
        </Link>
      </article>
    </div>
  );
}
