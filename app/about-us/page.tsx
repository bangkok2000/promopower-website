import type { Metadata } from "next";
import AboutUsContent from "@/components/AboutUsContent";

export const metadata: Metadata = {
  title: "About Us | PromoPower",
  description:
    "Learn about PromoPower's experience and professional workforce support for customer-facing campaigns in Singapore.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About Us | PromoPower",
    description:
      "Built on experience and strengthened by long-term client relationships, PromoPower supports customer-facing campaigns through professional workforce solutions.",
    url: "https://promopower.com.sg/about-us",
    siteName: "PromoPower",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | PromoPower",
    description:
      "Explore PromoPower's experience, approach and commitment to professional staffing solutions since 2002.",
  },
};

export default function AboutUsPage() {
  return <AboutUsContent />;
}
