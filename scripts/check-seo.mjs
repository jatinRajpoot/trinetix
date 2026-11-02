import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";

// Validate the exported HTML that crawlers receive, without starting a server.
const output = "out";
const origin = "https://trinetix.in";
assert.ok(existsSync(join(output, "sitemap.xml")), "Run npm run build first");

function filesIn(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? filesIn(path) : [path];
  });
}

function decode(value) {
  return value.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

function tags(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b([^>]*)>`, "g"))].map((match) =>
    Object.fromEntries([...match[1].matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key.toLowerCase(), decode(value)])),
  );
}

const pages = new Map(filesIn(output).filter((path) => path.endsWith(".html")).map((path) => {
  const route = `/${relative(output, path).replaceAll("\\", "/").replace(/\.html$/, "").replace(/(^|\/)index$/, "")}`.replace(/\/$/, "") || "/";
  return [route, readFileSync(path, "utf8")];
}));
const sitemap = readFileSync(join(output, "sitemap.xml"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => decode(match[1]));
assert.equal(new Set(sitemapUrls).size, sitemapUrls.length, "Duplicate sitemap URLs");
const indexable = new Set();
const titles = new Set();

for (const [route, html] of pages) {
  const metas = tags(html, "meta");
  const meta = (name) => metas.find((tag) => tag.name === name || tag.property === name)?.content;
  const canonical = tags(html, "link").filter((tag) => tag.rel === "canonical");
  const noindex = /noindex/.test(meta("robots") ?? "");
  const redirect = metas.some((tag) => tag["http-equiv"]?.toLowerCase() === "refresh");

  if (!noindex && !redirect) {
    const url = new URL(route, origin).href;
    indexable.add(url);
    assert.equal(canonical.length, 1, `${route}: expected one canonical`);
    assert.equal(new URL(canonical[0].href).href, url, `${route}: canonical must point to itself`);
    const title = decode(html.match(/<title>([^<]+)<\/title>/)?.[1] ?? "");
    assert.ok(title, `${route}: missing title`);
    assert.ok(!titles.has(title), `${route}: duplicate title`);
    titles.add(title);
    assert.ok(meta("description")?.length > 20, `${route}: missing description`);
    assert.equal(new URL(meta("og:url")).href, url, `${route}: incorrect Open Graph URL`);
    assert.equal(meta("og:title"), title, `${route}: stale Open Graph title`);
    assert.equal(meta("twitter:title"), title, `${route}: stale Twitter title`);
    assert.equal(meta("og:description"), meta("description"), `${route}: stale Open Graph description`);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${route}: expected one main heading`);

    // Only real links count; client hydration payloads cannot satisfy this check.
    for (const link of tags(html, "a")) {
      if (!link.href) continue;
      const target = new URL(link.href, url);
      if (target.origin !== origin) continue;
      const targetRoute = decodeURIComponent(target.pathname).replace(/\/$/, "") || "/";
      const targetHtml = pages.get(targetRoute);
      assert.ok(targetHtml, `${route}: broken internal link ${link.href}`);
      if (target.hash) {
        const id = decodeURIComponent(target.hash.slice(1));
        assert.ok(tags(targetHtml, "[a-z][a-z0-9]*").some((tag) => tag.id === id), `${route}: missing anchor ${link.href}`);
      }
    }
  }

  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
  for (const schema of schemas) {
    if (schema["@type"] !== "BlogPosting") continue;
    assert.equal(schema.url, new URL(route, origin).href, `${route}: article URL mismatch`);
    assert.equal(meta("og:type"), "article", `${route}: incorrect article type`);
    assert.match(schema.datePublished, /^\d{4}-\d{2}-\d{2}$/, `${route}: date must use ISO format`);
    assert.ok(Number.isFinite(Date.parse(schema.datePublished)), `${route}: invalid publication date`);
    assert.ok(tags(html, "time").some((time) => time.datetime === schema.datePublished), `${route}: visible publication date mismatch`);
    assert.ok(sitemap.includes(`<lastmod>${schema.dateModified}</lastmod>`), `${route}: sitemap date mismatch`);
  }
  if (route.startsWith("/blog/")) assert.ok(schemas.some((schema) => schema["@type"] === "BlogPosting"), `${route}: missing article schema`);
}

assert.deepEqual(new Set(sitemapUrls), indexable, "Sitemap must contain exactly the indexable canonical pages");
assert.ok(!sitemap.includes("/maintenance"), "Maintenance page must stay out of sitemap");
assert.ok(!sitemapUrls.includes(`${origin}/services`), "Redirect must stay out of sitemap");
assert.ok(/noindex/.test(pages.get("/404")), "404 page must not be indexable");
assert.ok(/noindex/.test(pages.get("/maintenance")), "Maintenance page must not be indexable");
assert.ok(readFileSync(join(output, "robots.txt"), "utf8").includes(`Sitemap: ${origin}/sitemap.xml`), "Robots sitemap URL is missing");
console.log(`SEO checks passed for ${indexable.size} indexable pages: metadata, sitemap, internal links, anchors, article data and noindex pages.`);
