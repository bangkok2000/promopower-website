import Link from "next/link";
import LeadershipSelector from "@/components/LeadershipSelector";
import PageHero from "@/components/PageHero";
import PageSectionNavGroup from "@/components/PageSectionNavGroup";

const aboutNav = [
  { id: "section-experience", label: "Experience" },
  { id: "section-values", label: "How we work" },
  { id: "section-leadership", label: "Leadership" },
  { id: "section-credentials", label: "License" },
];

const values = [
  {
    title: "Professionalism",
    body: "Every deployment represents the client's brand. We emphasise conduct, preparation and accountability.",
    icon: "workspace_premium",
  },
  {
    title: "Reliability",
    body: "Campaign plans depend on dependable attendance, clear communication and responsive support.",
    icon: "schedule",
  },
  {
    title: "Partnership",
    body: "We work collaboratively with client teams to understand campaign objectives and operating realities.",
    icon: "handshake",
  },
  {
    title: "Continuous Improvement",
    body: "Campaign learnings are reviewed to strengthen consistency, quality and future execution outcomes.",
    icon: "insights",
  },
];

// Leadership cards — add remaining names before go-live.
const leadership = [
  {
    // Confirmed: https://www.linkedin.com/in/khing-koh-ba9a6036/
    name: "Khing Koh",
    role: "Director",
    photo: "/team/khing-koh.jpg",
    responsibility:
      "Overall direction, client relationships and long-term partnerships across PromoPower's promotional staffing operations.",
  },
  {
    name: "Name to be confirmed",
    role: "Operations Manager",
    photo: null,
    responsibility:
      "Recruitment, screening, deployment planning and day-to-day campaign coordination across multiple concurrent activations.",
  },
  {
    name: "Name to be confirmed",
    role: "Client Services Manager",
    photo: null,
    responsibility:
      "Campaign briefings, client engagement and ongoing communication throughout the campaign lifecycle.",
  },
  {
    name: "Name to be confirmed",
    role: "Field Operations Lead",
    photo: null,
    responsibility:
      "On-site supervision, schedule management and operational support for personnel across deployment locations.",
  },
];

export default function AboutUsContent() {
  return (
    <>
      <PageHero
        badge="About PromoPower"
        title="Trusted Workforce Support Since 2002"
        description="PromoPower helps organisations execute customer-facing campaigns through professional people, structured processes and responsive operational support."
      />

      <PageSectionNavGroup navItems={aboutNav} navLabel="About sections" scrollHint="Scroll sideways for more sections">
            <section id="section-experience" className="page-section-anchor">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="section-title">Built On Practical Experience</h2>
                  <div className="prose-block">
                    <p>
                      Over the past two decades, we have supported organisations across promotions, retail activations,
                      roadshows, exhibitions and events in Singapore.
                    </p>
                    <p>
                      Our role is to help clients execute consistently by supplying suitable personnel and supporting campaign
                      operations from recruitment and preparation through deployment and coordination.
                    </p>
                    <p>
                      We focus on the fundamentals that matter most in customer-facing execution: professionalism, reliability,
                      communication and accountability.
                    </p>
                  </div>
                </div>
                <div className="content-card">
                  <h3 className="text-2xl font-headline font-normal text-on-surface mb-5">What Clients Value</h3>
                  <ul className="space-y-4 text-on-surface-variant">
                    <li className="flex gap-3">
                      <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
                      <span>A responsive operations team that supports campaign requirements.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
                      <span>Personnel selection aligned with campaign profile and customer context.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
                      <span>Structured deployment management that improves execution confidence.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
                      <span>Long-term partnership built on consistency and service quality.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="section-values" className="page-section-anchor">
              <h2 className="section-title text-center mb-10">How We Work</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {values.map((value) => (
                  <article key={value.title} className="content-card h-full">
                    <div className="icon-badge">
                      <span className="material-symbols-outlined">{value.icon}</span>
                    </div>
                    <h3 className="text-2xl font-headline font-normal text-on-surface mb-3">{value.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed">{value.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="section-leadership" className="page-section-anchor">
              <div className="max-w-3xl mb-12">
                <h2 className="section-title">Leadership</h2>
                <p className="page-intro mt-4">
                  A small, experienced team accountable for service quality, operational consistency and the day-to-day
                  delivery of every PromoPower campaign.
                </p>
              </div>
              <LeadershipSelector members={leadership} />
            </section>

            <section id="section-credentials" className="page-section-anchor">
              <div className="content-card text-center bokeh-overlay">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-normal text-on-surface mb-6">
                  MOM Licensed Employment Agency
                </h2>
                <p className="page-intro mx-auto mb-8">
                  PromoPower is a licensed employment agency in Singapore (EA License No: 20C0109), supporting
                  clients with compliance-conscious staffing operations and dependable service delivery.
                </p>
                <Link href="/services" className="btn-secondary">
                  Explore Our Services
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </section>
      </PageSectionNavGroup>
    </>
  );
}
