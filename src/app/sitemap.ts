import type { MetadataRoute } from "next";
import { BLOGS } from "@/data/blogs";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/", "/features", "/pricing", "/services/business-websites", "/about", "/contact", "/faq", "/blog",
    "/docs", "/careers",
    "/privacy", "/terms", "/cookies", "/refund", "/shipping", "/disclaimer",
  ];
  return [
    ...routes.map((path) => ({ url: absoluteUrl(path) })),
    ...BLOGS.map((post) => ({
      url: absoluteUrl(`/blog/${post.id}`),
      lastModified: post.updatedAt ?? post.publishedAt,
    })),
  ];
}
