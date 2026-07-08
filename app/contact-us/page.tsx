import type { Metadata } from "next";
import ContactUsContent from "./ContactUsContent";
import PageHero from "@/components/PageHero";
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
      <PageHero
        badge="Contact Us"
        title="Let's Discuss Your Campaign Requirements"
        description="Share your objectives, timeline and staffing needs. Our team will review your request and recommend a practical workforce solution aligned with your campaign goals."
      />
      <ContactUsContent />
    </>
  );
}
