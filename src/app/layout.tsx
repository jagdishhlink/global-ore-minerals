import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrganizationJsonLd, WebsiteJsonLd, LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://globaloreandminerals.com"),
  title: {
    default: "Global Ore & Minerals | Premium Silica Sand, Bauxite & Calcined Bauxite Exporter",
    template: "%s | Global Ore & Minerals",
  },
  description:
    "Leading exporter of premium quality Silica Sand, Bauxite Ore, and Calcined Bauxite from India. Serving glass, cement, refractory, and construction industries worldwide with 10+ years of excellence.",
  keywords: [
    "silica sand exporter",
    "bauxite ore supplier",
    "calcined bauxite",
    "industrial minerals India",
    "mineral exporter Gujarat",
    "silica sand manufacturer",
    "bauxite mining company",
    "Global Ore Minerals",
  ],
  authors: [{ name: "Global Ore & Minerals" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Global Ore & Minerals",
    title: "Global Ore & Minerals | Premium Industrial Minerals Exporter",
    description:
      "India's trusted exporter of Silica Sand, Bauxite Ore, and Calcined Bauxite. Premium quality minerals for global industries.",
    images: [{ url: "/images/calcined-bauxite-plant.jpeg", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/images/logo.jpeg" />
      </head>
      <body className="min-h-screen antialiased">
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <LocalBusinessJsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
