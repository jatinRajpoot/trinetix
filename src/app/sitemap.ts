import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = "https://trinetix.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "", "/features", "/pricing", "/services", "/about", "/contact", "/faq", "/blog",
    "/previous-work", "/testimonials", "/docs", "/careers",
    "/privacy", "/terms", "/cookies", "/refund", "/shipping", "/disclaimer",
    "/blog/nextjs-flask-architecture", "/blog/wordpress-conversion-tips", "/blog/student-project-guide",
  ];
  const now = new Date();
  return routes.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : p.startsWith("/blog") ? 0.6 : 0.8,
  }));
}
