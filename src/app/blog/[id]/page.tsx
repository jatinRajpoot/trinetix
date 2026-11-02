import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import { BLOGS, getBlogById } from "@/data/blogs";
import PageHeading from "@/components/PageHeading";
import { absoluteUrl, jsonLd, pageMetadata, SITE_URL } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOGS.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const article = getBlogById(id);
  if (!article) notFound();
  const metadata = pageMetadata(`/blog/${article.id}`, article.title, article.excerpt);
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      authors: [article.author],
    },
  };
}

export default async function BlogDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = getBlogById(id);
  if (!article) notFound();
  const url = absoluteUrl(`/blog/${article.id}`);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: article.title,
    description: article.excerpt,
    inLanguage: "en-IN",
    author: { "@type": article.author === "TriNetix Team" ? "Organization" : "Person", name: article.author },
    publisher: { "@id": `${SITE_URL}/#organization` },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
  };
  const relatedArticles = BLOGS.filter((post) => post.id !== article.id).slice(0, 2);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema) }} />
      <PageHeading label="From the studio journal" title={article.title} description={article.excerpt} action={{ label: "Back to all notes", href: "/blog" }} />
      <section className="site-container journal-article-layout">
        <article className="journal-article">
          <div className="journal-article-meta">
            <span>{article.category}</span>
            <span><Clock3 size={15} />{article.readTime} read</span>
            <span>{article.author}</span>
            <time dateTime={article.publishedAt}>{article.date}</time>
          </div>
          {article.sections && (
            <nav className="article-contents" aria-label="In this guide">
              <h2>In this guide</h2>
              <ul>{article.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ul>
            </nav>
          )}
          <div className="journal-article-body">
            {article.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            {article.sections?.map((section) => (
              <section key={section.id} id={section.id} className="article-section">
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              </section>
            ))}
          </div>
          {article.relatedLinks && (
            <nav className="article-contents" aria-label="Useful next steps">
              <h2>Useful next steps</h2>
              <ul>{article.relatedLinks.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul>
            </nav>
          )}
          <Link href="/blog" className="text-link"><ArrowLeft size={17} />More notes</Link>
        </article>
        <aside className="journal-article-aside">
          <p className="section-label"><span /> Take it further</p>
          <h2>Working on something similar?</h2>
          <p>Tell us what you’re trying to make easier. We’ll help you work out a practical next step.</p>
          <Link href="/contact" className="button button-purple">Talk to the team<ArrowUpRight size={17} /></Link>
          <nav className="article-contents" aria-label="Related articles">
            <h2>Keep reading</h2>
            <ul>{relatedArticles.map((post) => <li key={post.id}><Link href={`/blog/${post.id}`}>{post.title}</Link></li>)}</ul>
          </nav>
        </aside>
      </section>
    </div>
  );
}
