import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Playfair_Display, Lora, Manrope } from 'next/font/google';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "PromoPower | Professional Staffing Solutions",
    template: "%s | PromoPower",
  },
  description:
    "PromoPower provides professional staffing solutions for promotions, retail activations, events and customer engagement programmes in Singapore.",
  keywords: [
    "Professional staffing solutions Singapore",
    "Brand ambassadors Singapore",
    "Product promoters Singapore",
    "Event personnel Singapore",
    "Retail activation teams",
    "Campaign support and coordination",
    "PromoPower",
  ],
  authors: [{ name: "PromoPower" }],
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PromoPower | Professional Staffing Solutions",
    description:
      "Professional staffing solutions for promotions, retail activations, events and customer engagement programmes in Singapore.",
    url: SITE.url,
    siteName: "PromoPower",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PromoPower | Professional Staffing Solutions",
    description:
      "Professional staffing solutions for promotions, retail activations, events and customer engagement programmes in Singapore.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "65 Airport Boulevard, #03-37 Changi Airport Terminal 3",
    addressLocality: "Singapore",
    postalCode: "819663",
    addressCountry: "SG",
  },
  foundingDate: SITE.foundingDate,
  description:
    "Professional staffing solutions for promotions, retail activations, events and customer engagement programmes in Singapore.",
  sameAs: [
    "https://www.linkedin.com/company/promopowersg/",
    "https://www.instagram.com/promopowersg/",
    "https://www.facebook.com/PromoPower.com.sg",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  
  return (
    <html
      lang="en"
      className={`h-full antialiased scroll-smooth ${playfair.variable} ${lora.variable} ${manrope.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col selection:bg-primary selection:text-on-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <NavBar />
        <main className="flex-1 pt-[var(--site-header-height,5rem)]">{children}</main>
        <Footer />
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
      </body>
    </html>
  );
}

