import type { Metadata } from "next";
import OurStoryPage from "../our-story/page";

export const metadata: Metadata = {
  title: "About Us | PromoPower",
  description:
    "Learn about PromoPower's experience and professional workforce support for customer-facing campaigns in Singapore.",
  alternates: { canonical: "/about-us" },
};

export default function AboutUsPage() {
  return <OurStoryPage />;
}
