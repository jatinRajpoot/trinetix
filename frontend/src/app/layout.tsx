import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "TriNetix | Modern Web Development & App Solutions",
  description: "TriNetix is a premier web development agency specializing in WordPress websites (₹3,999), Android Applications (from ₹15k), Custom Software (from ₹8k), and College Student Projects with reports (₹3,000). Founded by Mr. Jatin Rajput and Ms. Bharti Singh.",
  keywords: ["Web Development", "TriNetix", "WordPress Website", "Android App", "College Projects", "Student Report", "Jatin Rajput", "Bharti Singh"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#eef2f7] text-slate-900 flex flex-col antialiased selection:bg-teal-500 selection:text-white animate-fade-in">
        <Header />
        <main className="flex-grow pt-20 sm:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
