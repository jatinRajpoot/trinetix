import Link from "next/link";
import { ArrowLeft, User, Calendar, Clock, Leaf } from "lucide-react";
import type { Metadata } from "next";
import { BLOGS, getBlogById } from "@/data/blogs";

export function generateStaticParams() {
  return BLOGS.map((b) => ({ id: b.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const a = getBlogById(id);
  if (!a) return { title: "Atelier Note — TriNetix" };
  return { title: a.title, description: a.excerpt.slice(0, 150) };
}

export default async function BlogDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = getBlogById(id) ?? BLOGS[0];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    author: { "@type": "Person", name: article.author },
    datePublished: article.date,
  };

  return (
    <div className="mx-auto max-w-[720px] px-6 lg:px-8 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Link href="/blog" className="inline-flex items-center gap-1.5 pt-8 text-[13px] font-medium text-[var(--foreground-tertiary)] hover:text-[var(--accent)]">
        <ArrowLeft className="h-4 w-4" aria-hidden /> Back to journal
      </Link>

      <article className="mt-6 rounded-2xl border border-[var(--border-subtle)] bg-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="badge-accent">{article.category}</span>
          <span className="inline-flex items-center gap-1 text-[12px] text-[var(--foreground-quaternary)]"><Clock className="h-3.5 w-3.5 text-[var(--accent)]/60" aria-hidden /> {article.readTime}</span>
        </div>
        <h1 className="mt-4 text-[28px] font-semibold leading-tight tracking-[-0.025em] text-[var(--foreground)] sm:text-[32px]">{article.title}</h1>
        <div className="mt-4 flex flex-wrap gap-4 border-y border-[var(--border-subtle)] py-3 text-[12px] text-[var(--foreground-tertiary)]">
          <span className="inline-flex items-center gap-1.5"><User className="h-3.5 w-3.5 text-[var(--accent)]/60" aria-hidden /> {article.author}</span>
          <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-[var(--accent)]/60" aria-hidden /> {article.date}</span>
        </div>
        <div className="prose prose-neutral mt-6 max-w-none prose-p:text-[14.5px] prose-p:leading-7 prose-p:text-[var(--foreground-secondary)]">
          {article.content.map((para, i) => <p key={i}>{para}</p>)}
        </div>
        <div className="mt-8 flex items-center justify-between rounded-xl border border-[var(--accent-muted)] bg-[var(--accent-soft)] p-4">
          <div><p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--accent)] flex items-center gap-1"><Leaf className="h-3 w-3" /> Author</p><p className="text-[14px] font-semibold">{article.author}</p><p className="text-[12px] text-[var(--foreground-tertiary)]">Founder @ TriNetix Atelier</p></div>
          <Link href="/contact" className="btn-primary text-[13px]">Contact atelier</Link>
        </div>
      </article>
    </div>
  );
}
