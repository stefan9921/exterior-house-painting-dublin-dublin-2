import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IconFontLoader from "@/components/IconFontLoader";
import { JsonLd, localBusinessSchema, websiteSchema } from "@/components/JsonLd";
import { business } from "@/lib/business";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = business.siteUrl;
const OG_IMAGE = `${SITE_URL}/images/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Exterior House Painting Dublin | Exterior Painters Dublin 2",
    template: "%s | Exterior House Painting Dublin",
  },
  description:
    "Exterior House Painting Dublin delivers durable, weather-ready exterior paintwork across Dublin 2 and Greater Dublin. Free quotes, 7-day availability, call +353 1 230 8892.",
  applicationName: business.name,
  authors: [{ name: business.name }],
  creator: business.name,
  publisher: business.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: SITE_URL,
    siteName: business.name,
    title: "Exterior House Painting Dublin | Exterior Painters Dublin 2",
    description:
      "Durable, weather-ready exterior paintwork across Dublin 2 and Greater Dublin. Free quotes, 7-day availability.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Freshly painted exterior of a Dublin home by Exterior House Painting Dublin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exterior House Painting Dublin | Exterior Painters Dublin 2",
    description:
      "Durable, weather-ready exterior paintwork across Dublin 2 and Greater Dublin. Free quotes, 7-day availability.",
    images: [OG_IMAGE],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-surface font-body-md text-on-surface">
        <IconFontLoader />
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
        <Header />
        <main className="mt-[80px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
