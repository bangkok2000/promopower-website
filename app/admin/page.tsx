import type { Metadata } from "next";
import AdminPortal from "@/components/admin/AdminPortal";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Website admin",
  description: "PromoPower website administration.",
  path: "/admin",
  noIndex: true,
});

export default function AdminPage() {
  return (
    <section className="admin-portal bg-white py-12 sm:py-16">
      <div className="page-container">
        <AdminPortal />
      </div>
    </section>
  );
}
