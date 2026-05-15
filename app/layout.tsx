import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import StickyCallButton from "@/components/mobile/StickyCallButton";
import { generateLocalBusinessSchema, generateWebSiteSchema } from "@/lib/schema";
import { generateSharedMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/lib/constants";
import CookieConsentManager from "@/components/CookieConsent";
import { Analytics } from "@vercel/analytics/react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = generateSharedMetadata({
  title: `${BUSINESS.name} | 24/7 Notdienst & 100% Festpreis`,
  description: "Ihr lokaler Schlüsseldienst in Limburg an der Lahn. 24/7 Schlüsselnotdienst, Türöffnung ohne Schäden, garantierte Festpreise. In 15–30 Minuten vor Ort im gesamten Landkreis Limburg-Weilburg, Diez & Bad Camberg.",
  path: "/",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth scroll-pt-28">
      <head />
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} min-h-screen bg-[var(--color-blue-dark)] text-[var(--color-text-main)] antialiased font-sans flex flex-col pb-24 sm:pb-0`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-[var(--color-blue-primary)] focus:px-4 focus:py-2 focus:text-white focus:font-bold focus:shadow-lg focus:outline-none">
          Zum Hauptinhalt springen
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebSiteSchema()) }}
        />
        <StickyHeader />
        <main id="main-content" className="flex-grow">{children}</main>
        <Footer />
        <StickyCallButton />
        <CookieConsentManager />
        <Analytics />
      </body>
    </html>
  );
}
