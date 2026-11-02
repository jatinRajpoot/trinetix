import type { Metadata } from "next";

export const SITE_URL = "https://trinetix.in";
export const SITE_NAME = "TriNetix";
export const SITE_TITLE = "Website Design & Development in India";
export const SITE_DESCRIPTION =
  "TriNetix builds business websites from ₹3,999, custom web apps and Android apps in India. Explore our work, pricing and support, then discuss your project.";

export function absoluteUrl(path: string): string {
  return new URL(path, `${SITE_URL}/`).toString();
}

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: SITE_NAME,
      url: absoluteUrl(path),
      title: fullTitle,
      description,
    },
    twitter: { card: "summary", title: fullTitle, description },
  };
}

export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
