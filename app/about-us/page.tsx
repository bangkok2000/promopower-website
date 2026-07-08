import type { Metadata } from "next";
import AboutUsContent from "@/components/AboutUsContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us",
  description:
    "Learn about PromoPower's experience since 2002, leadership team and professional workforce support for customer-facing campaigns in Singapore.",
  path: "/about-us",
  keywords: [
    "about PromoPower",
    "staffing company Singapore",
    "employment agency history Singapore",
    "PromoPower leadership",
  ],
});

export default function AboutUsPage() {
  return <AboutUsContent />;
}
