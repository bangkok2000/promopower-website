import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

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
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-PLACEHOLDER";
  
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600;1,700;1,800;1,900&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col selection:bg-primary selection:text-on-primary">
        <NavBar />
        <main className="flex-1 pt-[76px]">{children}</main>
        <Footer />
        <GoogleAnalytics gaId={GA_ID} />
      </body>
    </html>
  );
}

