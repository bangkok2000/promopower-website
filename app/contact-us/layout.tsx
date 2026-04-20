import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | PromoPower",
  description: "Get in touch with PromoPower to plan your next brand activation. Request a custom staffing proposal for your event in Singapore.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
