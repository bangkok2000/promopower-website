import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lora, Manrope } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import JsonLd from "@/components/JsonLd";
import ScrollToTop from "@/components/ScrollToTop";
import { getSiteGraphJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.shortName} | Professional Staffing Solutions Singapore`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.defaultDescription,
  keywords: [
    "Professional staffing solutions Singapore",
    "Brand ambassadors Singapore",
    "Event personnel Singapore",
    "Retail activation teams Singapore",
    "Roadshow staffing Singapore",
    "Campaign support Singapore",
    "MOM licensed employment agency",
    "PromoPower",
  ],
  authors: [{ name: SITE.shortName, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Staffing and Recruitment",
  alternates: {
    canonical: "/",
  },
  robots: {
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
    title: `${SITE.shortName} | Professional Staffing Solutions Singapore`,
    description: SITE.defaultDescription,
    url: SITE.url,
    siteName: SITE.shortName,
    locale: SITE.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.shortName} | Professional Staffing Solutions Singapore`,
    description: SITE.defaultDescription,
  },
  other: {
    "geo.region": "SG",
    "geo.placename": "Singapore",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-SG"
      className={`h-full antialiased ${playfair.variable} ${lora.variable} ${manrope.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link rel="author" href="/llms.txt" type="text/plain" title="LLMs content guidance" />
      </head>
      <body className="min-h-full flex flex-col selection:bg-primary selection:text-on-primary">
        <JsonLd data={getSiteGraphJsonLd()} />
        <ScrollToTop />
        <NavBar />
        <main className="flex-1 pt-[var(--site-header-height,5rem)]">{children}</main>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
