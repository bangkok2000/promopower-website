import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Our Roster | PromoPower Careers",
  description:
    "Apply to join PromoPower for customer-facing campaign assignments and event support opportunities in Singapore.",
  alternates: { canonical: "/jobseekers" },
  openGraph: {
    title: "Join Our Roster | PromoPower Careers",
    description:
      "Submit your application to join PromoPower for campaign staffing opportunities across promotions, retail activations and events.",
    url: "https://promopower.com.sg/jobseekers",
    siteName: "PromoPower",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Our Roster | PromoPower Careers",
    description:
      "Explore staffing opportunities with PromoPower in customer-facing campaigns and events.",
  },
};

export default function JobseekersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
