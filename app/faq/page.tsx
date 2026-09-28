import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import PageSectionNavGroup from "@/components/PageSectionNavGroup";
import { simplePageBreadcrumb } from "@/lib/page-nav-config";
import { buildPageMetadata, faqPageJsonLd } from "@/lib/seo";

const faqNav = [
  { id: "faq-section-1", label: "Services" },
  { id: "faq-section-2", label: "Lead time" },
  { id: "faq-section-3", label: "Multi-location" },
  { id: "faq-section-4", label: "Selection" },
  { id: "faq-section-5", label: "Preparation" },
  { id: "faq-section-6", label: "License" },
];

export const metadata: Metadata = buildPageMetadata({
  title: "FAQ",
  description:
    "Find answers to common questions about PromoPower staffing solutions, campaign lead times, multi-location support and MOM employment agency licensing in Singapore.",
  path: "/faq",
  keywords: [
    "PromoPower FAQ",
    "staffing agency Singapore questions",
    "employment agency license Singapore",
    "campaign staffing lead time",
  ],
});

const faqs = [
  {
    question: "What services does PromoPower provide?",
    answer:
      "Brand ambassadors, event personnel, retail activation teams, roadshow teams, and campaign coordination. Coordination covers the roster, attendance and a contact during the campaign. It can be booked with a frontline team or on its own.",
  },
  {
    question: "How early should we engage your team before a campaign?",
    answer:
      "There is no fixed number of weeks. Time is needed to screen people, brief them and issue a roster before the first shift. Headcount, number of locations, language needs and how specific the product script is all affect that. Send dates as soon as they are known, even if the store list is still moving.",
  },
  {
    question: "Can PromoPower support multi-location campaigns?",
    answer:
      "Yes. One plan can cover several outlets or roadshow sites. Each location has its own shifts and headcount. Attendance is checked against that roster so a gap at one site is visible, rather than assumed to be covered.",
  },
  {
    question: "How are personnel selected?",
    answer:
      "Against the brief: communication, presentation, and fit for that store, event or roadshow. Language is included when the brief requires it. Availability alone is not the basis of the shortlist.",
  },
  {
    question: "Do you provide campaign briefing and preparation support?",
    answer:
      "Yes, before the first shift. The briefing uses your product points, what staff may and may not say, and any appearance or sampling rules you set. If you have an approved script or claims list, that is what the team uses.",
  },
  {
    question: "Is PromoPower a licensed employment agency?",
    answer:
      "Yes. PromoPower Pte Ltd is a MOM licensed employment agency in Singapore. EA License No. 20C0109.",
  },
];

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqs)} />
      <PageSectionNavGroup
        hero={
          <PageHero
            badge="FAQ"
            title="Frequently Asked Questions"
            description="What we staff, how early to write, how multi-site rosters work, how people are chosen, what a briefing covers, and the employment agency licence."
            compact
          />
        }
        breadcrumb={<PageBreadcrumb items={simplePageBreadcrumb("FAQ")} />}
        navItems={faqNav}
        navLabel="FAQ sections"
        scrollHint="Scroll sideways for more topics"
        contentClassName="space-y-5 pt-8"
      >
        {faqs.map((faq, index) => (
          <article key={faq.question} id={`faq-section-${index + 1}`} className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 page-section-anchor hover:border-primary/30 transition-colors">
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary mb-3 font-label">
              Q{index + 1}
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">{faq.question}</h2>
            <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
          </article>
        ))}
      </PageSectionNavGroup>

      <CTASection
        heading="Need More Information?"
        body="If your question is about a live brief, send the dates, locations and headcount with it."
        primaryLabel="Contact Us"
        primaryHref="/contact-us"
      />
    </>
  );
}
