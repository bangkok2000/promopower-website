import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Our Roster | PromoPower Careers",
  description: "Apply to join PromoPower's elite roster of brand ambassadors and event talent. Flexible work with top global brands in Singapore.",
  alternates: { canonical: "/jobseekers" },
};

export default function JobseekersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
