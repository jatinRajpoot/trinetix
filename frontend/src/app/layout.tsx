import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
const defaultTitle = "TriNetix — Web Development, Android Apps & Academic Solutions";
const defaultDesc =
  "TriNetix builds high-performance WordPress sites from ₹3,999, Android apps from ₹15k, and complete college projects with reports from ₹3,000. Founded by Jatin Rajput & Bharti Singh.";

export const viewport: Viewport = {
  themeColor: "#fbfbfd",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: defaultTitle, template: `%s — ${siteName}` },
  description: defaultDesc,
  applicationName: siteName,
  authors: [{ name: "Jatin Rajput" }, { name: "Bharti Singh" }],
  creator: siteName,
  publisher: siteName,
  category: "Technology",
  keywords: ["TriNetix", "Web Development", "WordPress", "Android App", "Next.js", "Flask", "College Projects"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDesc,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "TriNetix — Web & App Development" }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDesc,
    images: ["/opengraph-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  verification: {},
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TriNetix",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: defaultDesc,
  founder: [{ "@type": "Person", name: "Jatin Rajput" }, { "@type": "Person", name: "Bharti Singh" }],
  contactPoint: { "@type": "ContactPoint", contactType: "customer support", email: "Support@trinetix.in", availableLanguage: ["en"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col antialiased">
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main" className="flex-grow pt-[64px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
