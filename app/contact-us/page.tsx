import type { Metadata } from "next";
import ContactUsContent from "./ContactUsContent";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import PageHero from "@/components/PageHero";
import PageWayfindingBand from "@/components/PageWayfindingBand";
import { simplePageBreadcrumb } from "@/lib/page-nav-config";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us",
  description:
    "Speak with PromoPower about your campaign objectives, timeline and staffing requirements for promotions, activations, events and customer engagement initiatives in Singapore.",
  path: "/contact-us",
  keywords: [
    "contact PromoPower",
    "staffing enquiry Singapore",
    "campaign staffing quote",
    "employment agency Singapore contact",
  ],
});

export default function ContactUsPage() {
  return (
    <>
      <PageWayfindingBand breadcrumb={<PageBreadcrumb items={simplePageBreadcrumb("Contact Us")} />} />
      <PageHero
        badge="Contact Us"
        title="Send A Campaign Brief"
        description="Include the service, approximate headcount, start date, locations and what customers should be told. That is what the reply is based on."
        compact
      />
      <ContactUsContent />
    </>
  );
}
