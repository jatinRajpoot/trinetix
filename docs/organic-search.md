# Organic search maintenance

Every indexable page needs a canonical URL that identifies that page. Use `pageMetadata` from `src/lib/seo.ts` for titles, descriptions, canonicals and matching social metadata. Keep the homepage canonical on its own page; a canonical in the root layout would be inherited by other routes.

The business website page at `/services/business-websites` answers service buying questions. The guide at `/blog/business-website-cost-india` explains TriNetix pricing and links to the service and pricing pages. Update these when the offering changes; the figures describe TriNetix, not market-wide price estimates.

## Adding and updating content

- Add articles to `src/data/blogs.ts`. Use an ISO `publishedAt` date and an `updatedAt` date only when the article materially changes. Keep the visible date aligned with the publication date.
- Use optional `sections` for headed articles with a table of contents, and `relatedLinks` for useful next steps.
- Article URLs enter the sitemap automatically. Add new static indexable pages to `src/app/sitemap.ts`; exclude redirects and pages marked `noindex`.
- Omit static-page modification dates unless their actual content update dates are maintained. Do not substitute the build time.
- Link new pages from relevant existing content so visitors and crawlers can discover them.

## Validate before publishing

```sh
npm ci
npm run build
npm run check:seo
```

The build checks TypeScript. The SEO check reads `out/` and verifies canonical URLs, unique titles, descriptions, social metadata, main headings, internal links and anchors, article data, sitemap coverage and non-indexable utility pages. Both the PR workflow and Firebase deployment run these checks. They validate the export, not live hosting redirects or Google indexing.

## After deployment

1. Submit `https://trinetix.in/sitemap.xml` in the verified Google Search Console property. No Search Console account or credentials were added by this change.
2. Inspect the homepage, `/features`, `/services/business-websites` and the new pricing guide with URL Inspection. Check that Google can fetch each URL and that its selected canonical matches the page.
3. Check the Page indexing report for unexpected exclusions, and review search queries, impressions, clicks and relevant enquiries over time. Use the questions customers ask to choose further content work.

These changes correct search signals and add useful service content. Traffic and ranking improvements must be measured after deployment and recrawling.

## References

- [Google: canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google: sitemap URLs and accurate modification dates](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Next.js: metadata evaluation and inheritance](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
