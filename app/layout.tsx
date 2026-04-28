import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { CookieBanner } from "@/components/CookieBanner";
import { GrainOverlay } from "@/components/GrainOverlay";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B0B0D",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gls-zonwering.nl"),
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  title: {
    default: "GLS Zonwering & Rolluiken | Specialist in Gelderland & Brabant",
    template: "%s | GLS Zonwering & Rolluiken",
  },
  description:
    "Specialist in rolluiken, screens en zonneschermen in Gelderland en Brabant. Gratis inmeting, vakkundige montage en uitstekende service. Vraag nu een vrijblijvende offerte aan.",
  keywords: [
    "zonwering",
    "rolluiken",
    "screens",
    "zonneschermen",
    "solar motoren",
    "Gelderland",
    "Brabant",
    "Nijmegen",
    "Arnhem",
    "Eindhoven",
  ],
  authors: [{ name: "GLS Zonwering & Rolluiken" }],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://gls-zonwering.nl",
    siteName: "GLS Zonwering & Rolluiken",
    title: "GLS Zonwering & Rolluiken | Specialist in Gelderland & Brabant",
    description:
      "Specialist in rolluiken, screens en zonneschermen. Gratis inmeting en vakkundige montage.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GLS Zonwering & Rolluiken",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GLS Zonwering & Rolluiken",
    description:
      "Specialist in rolluiken, screens en zonneschermen in Gelderland en Brabant.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-body bg-bg text-text antialiased">
        <GrainOverlay />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        <CookieBanner />
      </body>
    </html>
  );
}