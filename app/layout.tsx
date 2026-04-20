import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Playfair_Display, Lora, Manrope } from 'next/font/google';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
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
  title: "PromoPower | Premium Event Staffing",
  description: "Singapore's Premier Event Staffing & Brand Talent Agency. We combine operational precision with kinetic human energy to execute flawless on-site activations.",
  keywords: ["Event Staffing Singapore", "Brand Ambassadors", "Talent Agency", "Event Management", "PromoPower", "Roving Talent"],
  authors: [{ name: "PromoPower" }],
  metadataBase: new URL("https://promopower.com.sg"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PromoPower | Premium Event Staffing in Singapore",
    description: "Singapore's Premier Event Staffing & Brand Talent Agency.",
    url: "https://promopower.com.sg",
    siteName: "PromoPower",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PromoPower | Premium Event Staffing",
    description: "Singapore's Premier Event Staffing & Brand Talent Agency.",
  },
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
        <NavBar />
        <main className="flex-1 pt-[76px]">{children}</main>
        <Footer />
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
      </body>
    </html>
  );
}

