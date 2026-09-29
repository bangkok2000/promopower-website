import Link from "next/link";
import LeadershipSelector from "@/components/LeadershipSelector";
import PageHero from "@/components/PageHero";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import PageSectionNavGroup from "@/components/PageSectionNavGroup";
import { simplePageBreadcrumb } from "@/lib/page-nav-config";

const aboutNav = [
  { id: "section-experience", label: "Experience" },
  { id: "section-values", label: "How we work" },
  { id: "section-leadership", label: "Leadership" },
  { id: "section-credentials", label: "License" },
];

const values = [
  {
    title: "Professionalism",
    body: "Appearance, conduct and what is said to customers follow the client's brief. That is part of the job.",
    icon: "workspace_premium",
  },
  {
    title: "Reliability",
    body: "Shifts are confirmed, attendance is checked, and gaps are dealt with rather than left to the store or event team.",
    icon: "schedule",
  },
  {
    title: "Partnership",
    body: "We ask what the campaign has to achieve, and where, before we propose headcount or profiles.",
    icon: "handshake",
  },
  {
    title: "Continuous Improvement",
    body: "Notes from the campaign, including PowerCoach records, are used when the same client or a similar brief comes back.",
    icon: "insights",
  },
];

// Leadership — full copy template: content/leadership-profile-template.md
const leadership = [
  {
    name: "Khing Koh",
    role: "Director",
    photo: "/team/khing-koh.jpg",
    linkedIn: "https://www.linkedin.com/in/khing-koh-ba9a6036/",
    bio: [
      "Khing Koh has been Director of PromoPower Pte Ltd since the agency was established in 2002. She leads general management, client relationships and the promotional staffing operations that support retail activations, roadshows, exhibitions and customer engagement programmes in Singapore.",
      "Her work stays close to live delivery: how teams are recruited, briefed, rostered and supported on the ground, and how issues are handled when campaigns are running. She works with operations colleagues, brand ambassadors, promoters and business partners so deployments stay accountable from initial briefing through to completion.",
      "She invests in ongoing learning connected to premium retail and brand presentation—including structured study in luxury brand principles—so briefing and frontline standards stay aligned with what clients expect in high-touch environments.",
    ],
  },
  {
    name: "Name to be confirmed",
    role: "Operations Manager",
    photo: null,
    bio: [
      "This profile will be published once the appointment and wording are confirmed.",
      "It will cover accountability for recruitment, screening, deployment planning and day-to-day coordination across multiple concurrent activations, and how this role works with clients and field teams.",
    ],
  },
  {
    name: "Name to be confirmed",
    role: "Client Services Manager",
    photo: null,
    bio: [
      "This profile will be published once the appointment and wording are confirmed.",
      "It will cover campaign briefings, client engagement and communication throughout the campaign lifecycle, and what clients should expect from enquiry through to live delivery.",
    ],
  },
  {
    name: "Name to be confirmed",
    role: "Field Operations Lead",
    photo: null,
    bio: [
      "This profile will be published once the appointment and wording are confirmed.",
      "It will cover on-site supervision, schedule management and operational support for personnel across deployment locations, including how field issues are escalated and resolved.",
    ],
  },
];

export default function AboutUsContent() {
  return (
    <>
      <PageSectionNavGroup
        hero={
          <PageHero
            badge="About PromoPower"
            title="Staffing Promotions And Events In Singapore Since 2002"
            description="PromoPower recruits, briefs and rosters people for retail promotions, roadshows, exhibitions and customer engagement programmes."
            compact
          />
        }
        breadcrumb={<PageBreadcrumb items={simplePageBreadcrumb("About Us")} />}
        navItems={aboutNav}
        navLabel="About sections"
        scrollHint="Scroll sideways for more sections"
      >
            <section id="section-experience" className="page-section-anchor">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                <div className="lg:col-span-7">
                  <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary mb-5 font-label">
                    Our Foundation
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-6">What The Company Does</h2>
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p>
                      PromoPower was set up in 2002 to supply people for promotions and events in Singapore. The work is still that: recruit for a brief, prepare the team, put them on a roster, and stay available while the campaign runs.
                    </p>
                    <p>
                      Clients deal with one operations team from the enquiry through the briefing and the days the campaign is live.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
                    <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-slate-400 mb-5 font-label">
                      What Clients Value
                    </p>
                    <ul className="space-y-3 text-slate-600 text-sm">
                      <li className="pl-4 border-l-2 border-slate-300">
                        One operations contact for the enquiry, the briefing and the live campaign.
                      </li>
                      <li className="pl-4 border-l-2 border-slate-300">
                        People matched to the brief, not a general send-out.
                      </li>
                      <li className="pl-4 border-l-2 border-slate-300">
                        Rosters by location and shift, with attendance followed up.
                      </li>
                      <li className="pl-4 border-l-2 border-slate-300">
                        Performance recorded so a later campaign can reuse people who worked well.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="section-values" className="page-section-anchor">
              <div className="text-center mb-10">
                <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary mb-4 font-label">
                  Our Principles
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">How We Work</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <article key={value.title} className="border-t border-slate-200 pt-5">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 block">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{value.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="section-leadership" className="page-section-anchor">
              <div className="max-w-3xl mb-10">
                <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary mb-4 font-label">
                  Our Team
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">Leadership</h2>
                <p className="text-slate-600 leading-relaxed">
                  The people accountable for client work, recruitment, rosters and what happens on site. Names still being confirmed are marked as such.
                </p>
              </div>
              <LeadershipSelector members={leadership} />
            </section>

            <section id="section-credentials" className="page-section-anchor">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 lg:p-12 text-center">
                <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary mb-4 font-label">
                  Official Credential
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-5">
                  MOM Licensed Employment Agency
                </h2>
                <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
                  PromoPower Pte Ltd holds MOM employment agency licence 20C0109. Personnel engaged through PromoPower are handled under that licence.
                </p>
                <Link href="/services" className="px-6 py-3 border border-slate-300 rounded-full text-slate-700 font-semibold hover:border-primary hover:text-primary transition-all">
                  Explore Our Services
                </Link>
              </div>
            </section>
      </PageSectionNavGroup>
    </>
  );
}
