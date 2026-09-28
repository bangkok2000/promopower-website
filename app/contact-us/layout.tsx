import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | PromoPower",
  description:
    "Speak with PromoPower about your campaign objectives, timeline and staffing requirements for promotions, activations, events and customer engagement initiatives.",
  alternates: { canonical: "/contact-us" },
  openGraph: {
    title: "Contact Us | PromoPower",
    description:
      "Discuss your staffing requirements with PromoPower and explore professional workforce solutions tailored to your campaign objectives.",
    url: "https://promopower.com.sg/contact-us",
    siteName: "PromoPower",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | PromoPower",
    description:
      "Get in touch with PromoPower to discuss campaign staffing requirements and workforce support.",
  },
};

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
