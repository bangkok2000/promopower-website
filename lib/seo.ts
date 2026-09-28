import type { Metadata } from "next";
import { SERVICE_PAGES, SITE, SOCIAL } from "@/lib/site";

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;
const HOME_PAGE_ID = `${SITE.url}/#home`;
const EMPLOYMENT_AGENCY_ID = `${SITE.url}/#employment-agency`;

function serviceItemList(name: string) {
  return {
    "@type": "ItemList" as const,
    name,
    itemListElement: SERVICE_PAGES.map((service, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: service.title,
      url: absoluteUrl(`/services/${service.slug}`),
      description: service.description,
    })),
  };
}

function staffingOfferCatalog() {
  return {
    "@type": "OfferCatalog" as const,
    name: "PromoPower staffing services",
    itemListElement: SERVICE_PAGES.map((service) => ({
      "@type": "Offer" as const,
      itemOffered: {
        "@type": "Service" as const,
        name: service.title,
        description: service.description,
        url: absoluteUrl(`/services/${service.slug}`),
        provider: { "@id": EMPLOYMENT_AGENCY_ID },
        areaServed: {
          "@type": "Country" as const,
          name: "Singapore",
        },
      },
    })),
  };
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: path },
    robots: noIndex
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title: `${title} | ${SITE.shortName}`,
      description,
      url,
      siteName: SITE.shortName,
      locale: SITE.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.shortName}`,
      description,
    },
  };
}

export function getSiteGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: SITE.name,
        legalName: SITE.name,
        alternateName: SITE.shortName,
        url: SITE.url,
        email: SITE.email,
        foundingDate: SITE.foundingDate,
        description: SITE.defaultDescription,
        identifier: [
          {
            "@type": "PropertyValue",
            name: "UEN / Company Registration",
            value: SITE.companyReg,
          },
          {
            "@type": "PropertyValue",
            name: "MOM Employment Agency License",
            value: SITE.eaLicense,
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.streetAddress,
          addressLocality: SITE.locality,
          postalCode: SITE.postalCode,
          addressCountry: SITE.countryCode,
        },
        areaServed: {
          "@type": "Country",
          name: "Singapore",
        },
        sameAs: [SOCIAL.linkedin, SOCIAL.instagram, SOCIAL.facebook],
        knowsAbout: [
          "Brand ambassadors",
          "Event personnel",
          "Retail activation teams",
          "Roadshows",
          "Consumer engagement",
          "Campaign coordination",
          "Staffing solutions Singapore",
        ],
      },
      {
        "@type": "EmploymentAgency",
        "@id": EMPLOYMENT_AGENCY_ID,
        name: SITE.name,
        url: SITE.url,
        email: SITE.email,
        foundingDate: SITE.foundingDate,
        description: SITE.defaultDescription,
        parentOrganization: { "@id": ORG_ID },
        hasOfferCatalog: staffingOfferCatalog(),
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.streetAddress,
          addressLocality: SITE.locality,
          postalCode: SITE.postalCode,
          addressCountry: SITE.countryCode,
        },
        areaServed: {
          "@type": "Country",
          name: "Singapore",
        },
        sameAs: [SOCIAL.linkedin, SOCIAL.instagram, SOCIAL.facebook],
        identifier: {
          "@type": "PropertyValue",
          name: "MOM Employment Agency License",
          value: SITE.eaLicense,
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: SITE.shortName,
        url: SITE.url,
        description: SITE.defaultDescription,
        inLanguage: "en-SG",
        publisher: { "@id": ORG_ID },
        about: { "@id": EMPLOYMENT_AGENCY_ID },
      },
    ],
  };
}

type FaqItem = {
  question: string;
  answer: string;
};

export function faqPageJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };
}

export function servicePageJsonLd(title: string, path: string, description: string) {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: title },
      ]),
      {
        "@type": "Service",
        name: title,
        description,
        url,
        provider: { "@id": EMPLOYMENT_AGENCY_ID },
        areaServed: {
          "@type": "Country",
          name: "Singapore",
        },
        serviceType: title,
      },
    ],
  };
}

export function servicesHubJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([
        { label: "Home", href: "/" },
        { label: "Services" },
      ]),
      serviceItemList("PromoPower Staffing Services"),
    ],
  };
}

export function webPageJsonLd(title: string, path: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-SG",
  };
}

const HOME_PAGE_TITLE =
  "PromoPower Singapore | Professional Staffing Solutions Since 2002";

export function homePageJsonLd(description: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": HOME_PAGE_ID,
        name: HOME_PAGE_TITLE,
        description,
        url: absoluteUrl("/"),
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": EMPLOYMENT_AGENCY_ID },
        mainEntity: { "@id": EMPLOYMENT_AGENCY_ID },
        inLanguage: "en-SG",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [
            ".home-hero-headline",
            ".home-hero-lead",
            ".home-about-definition",
          ],
        },
      },
      serviceItemList("PromoPower staffing services in Singapore"),
    ],
  };
}

export { HOME_PAGE_TITLE };
