import type { Metadata, Viewport } from "next";
import { Geist, Syne } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteMotion from "@/components/SiteMotion";
import { SITE_URL as siteUrl, SITE_NAME as siteName, SITE_TITLE, SITE_DESCRIPTION as defaultDesc, jsonLd } from "@/lib/seo";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist",
  display: "swap",
  preload: true,
});

const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-space", display: "swap" });

const defaultTitle = `${SITE_TITLE} | ${siteName}`;

export const viewport: Viewport = {
  themeColor: "#ec0038",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: defaultTitle, template: `%s | ${siteName}` },
  description: defaultDesc,
  icons: { icon: "/icon.svg" },
  applicationName: siteName,
  authors: [{ name: "Jatin Rajput" }, { name: "Bharti Singh" }],
  creator: siteName,
  publisher: siteName,
  category: "Technology",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDesc,
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: defaultDesc,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  alternateName: "TriNetix Digital Studio",
  url: siteUrl,
  description: defaultDesc,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "Support@trinetix.in",
    telephone: "+91-72063-82346",
    availableLanguage: ["en"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${syne.variable} scroll-smooth`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(orgSchema) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col antialiased selection:bg-[var(--accent)] selection:text-white">
        <a href="#main" className="skip-link">Skip to content</a>
        <SiteMotion />
        <Header />
        <main id="main" className="site-main flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
