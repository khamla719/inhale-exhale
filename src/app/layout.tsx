import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "Inhale/Exhale - Elegant Herbal Inhalers",
  description: "Discover premium herbal inhalers for calm, focus, and reinvigoration. Handcrafted with sustainably sourced botanicals.",
  keywords: "herbal inhalers, aromatherapy, wellness, natural remedies, calm, focus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased bg-white text-gray-800`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
