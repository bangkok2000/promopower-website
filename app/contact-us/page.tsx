import ContactUsContent from "./ContactUsContent";
import PageHero from "@/components/PageHero";

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
