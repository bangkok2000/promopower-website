import Link from "next/link";
import PageHero from "@/components/PageHero";

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

      <section className="page-section section-elevated">
        <div className="page-container grid lg:grid-cols-2 gap-12 items-start">
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

      <section className="page-section section-muted">
        <div className="page-container">
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
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <div className="max-w-3xl mb-12">
            <h2 className="section-title">Leadership</h2>
            <p className="page-intro mt-4">
              A small, experienced team accountable for service quality, operational consistency and the day-to-day
              delivery of every PromoPower campaign.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6" style={{gridTemplateRows: 'auto auto'}}>
            {leadership.map((member) => (
              <article key={member.role} className="content-card leadership-card relative" style={{display:'grid', gridRow:'span 2', gridTemplateRows:'subgrid', gap:0}}>
                <div className="relative" style={{paddingRight: "6rem"}}>
                  <div className="leadership-avatar absolute top-0 right-0" aria-hidden="true">
                    {member.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <span className="material-symbols-outlined">person</span>
                    )}
                  </div>
                  <p className="leadership-name">{member.name}</p>
                  <h3 className="leadership-role">{member.role}</h3>
                </div>
                <p className="leadership-body">{member.responsibility}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bokeh-overlay">
        <div className="page-container-narrow content-card text-center">
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
    </>
  );
}
