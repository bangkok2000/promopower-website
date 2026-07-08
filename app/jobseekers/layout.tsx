import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Join Our Roster",
  description:
    "Apply to join PromoPower for customer-facing campaign assignments, retail activations and event support opportunities in Singapore.",
  path: "/jobseekers",
  keywords: [
    "PromoPower careers",
    "brand ambassador jobs Singapore",
    "promoter jobs Singapore",
    "event staff jobs Singapore",
  ],
});

export default function JobseekersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
