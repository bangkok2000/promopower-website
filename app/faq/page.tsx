import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import PageSectionNavGroup from "@/components/PageSectionNavGroup";
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
      "PromoPower provides workforce support for customer-facing campaigns, including brand ambassadors, event personnel, retail activation teams, roadshows and campaign coordination support.",
  },
  {
    question: "How early should we engage your team before a campaign?",
    answer:
      "Lead time depends on campaign scale and complexity. We recommend contacting our team as early as possible so recruitment, preparation and deployment planning can be aligned effectively.",
  },
  {
    question: "Can PromoPower support multi-location campaigns?",
    answer:
      "Yes. We support single-site and multi-location deployments, with coordination support designed to help maintain consistency across locations.",
  },
  {
    question: "How are personnel selected?",
    answer:
      "Personnel are selected based on campaign requirements, communication ability, professionalism and suitability for the customer environment.",
  },
  {
    question: "Do you provide campaign briefing and preparation support?",
    answer:
      "Yes. Our process includes structured campaign preparation so personnel understand campaign objectives, product context and customer interaction expectations.",
  },
  {
    question: "Is PromoPower a licensed employment agency?",
    answer:
      "Yes. PromoPower Pte Ltd is a MOM licensed employment agency in Singapore (EA License No: 20C0109).",
  },
];

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqs)} />
      <PageHero
        badge="FAQ"
        title="Frequently Asked Questions"
        description="Answers to common questions about our staffing services, process and campaign support approach."
        compact
      />

      <PageSectionNavGroup
        navItems={faqNav}
        navLabel="FAQ sections"
        scrollHint="Scroll sideways for more topics"
        contentClassName="space-y-5 pt-8"
      >
        {faqs.map((faq, index) => (
          <article key={faq.question} id={`faq-section-${index + 1}`} className="content-card page-section-anchor">
            <h2 className="text-2xl font-headline font-normal text-on-surface mb-3">{faq.question}</h2>
            <p className="text-on-surface-variant leading-relaxed">{faq.answer}</p>
          </article>
        ))}
      </PageSectionNavGroup>

      <CTASection
        heading="Need More Information?"
        body="If your question is not listed here, contact our team and we will be happy to discuss your campaign requirements."
        primaryLabel="Contact Us"
        primaryHref="/contact-us"
      />
    </>
  );
}
