import type { SectionNavItem } from "@/lib/section-navigation";

export const PRIVACY_NAV: SectionNavItem[] = [
  { id: "privacy-section-1", label: "Introduction" },
  { id: "privacy-section-2", label: "Data collected" },
  { id: "privacy-section-3", label: "How we use data" },
  { id: "privacy-section-4", label: "Disclosure" },
  { id: "privacy-section-5", label: "Consent" },
  { id: "privacy-section-6", label: "Access" },
  { id: "privacy-section-7", label: "Retention" },
  { id: "privacy-section-8", label: "Protection" },
  { id: "privacy-section-9", label: "Cookies" },
  { id: "privacy-section-10", label: "Children" },
  { id: "privacy-section-11", label: "Transfers" },
  { id: "privacy-section-12", label: "Updates" },
  { id: "privacy-section-13", label: "Contact DPO" },
];

export const TERMS_NAV: SectionNavItem[] = [
  { id: "terms-section-1", label: "Acceptance" },
  { id: "terms-section-2", label: "Information" },
  { id: "terms-section-3", label: "IP" },
  { id: "terms-section-4", label: "Acceptable use" },
  { id: "terms-section-5", label: "Submissions" },
  { id: "terms-section-6", label: "Third-party links" },
  { id: "terms-section-7", label: "Warranties" },
  { id: "terms-section-8", label: "Liability" },
  { id: "terms-section-9", label: "Privacy" },
  { id: "terms-section-10", label: "Changes" },
  { id: "terms-section-11", label: "Governing law" },
  { id: "terms-section-12", label: "Contact" },
];

export function serviceBreadcrumb(title: string) {
  return [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: title },
  ];
}
