import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: {
    default: "Exterior House Painting Dublin | Exterior Painters Dublin 2",
    template: "%s | Exterior House Painting Dublin",
  },
  description:
    "Exterior House Painting Dublin delivers durable, weather-ready exterior paintwork across Dublin 2 and Greater Dublin. Free quotes, 7-day availability, call +353 1 230 8892.",
  metadataBase: new URL("https://exterior-house-painting-dublin-dublin-2.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-surface font-body-md text-on-surface">
        <Header />
        <main className="mt-[80px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
