import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist",
  display: "swap",
  preload: true,
});

const siteUrl = "https://trinetix.in";
const siteName = "TriNetix";
const defaultTitle = "TriNetix — Clear, useful websites for growing businesses";
const defaultDesc =
  "Websites and apps designed to help customers understand what you do, trust your business and take the next step. Clear scope, honest pricing and direct support.";

export const viewport: Viewport = {
  themeColor: "#f4f1ea",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: defaultTitle, template: `%s | ${siteName}` },
  description: defaultDesc,
  applicationName: siteName,
  authors: [{ name: "Jatin Rajput" }, { name: "Bharti Singh" }],
  creator: siteName,
  publisher: siteName,
  category: "Technology",
  keywords: ["TriNetix","Premium Websites","WordPress Development","Android Apps","Student Projects","Next.js Studio","Simple Websites India"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDesc,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDesc,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  verification: {},
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TriNetix",
  alternateName: "TriNetix Digital Studio",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: defaultDesc,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "Support@trinetix.in",
    telephone: "+91-70277-82346",
    availableLanguage: ["en"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col antialiased selection:bg-[var(--accent)] selection:text-white">
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main" className="flex-grow pt-[74px]">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
