import Link from "next/link";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";

const DB: Record<string, { title: string; category: string; date: string; author: string; readTime: string; content: string[] }> = {
  "nextjs-flask-architecture": {
    title: "Why Next.js + Flask is the modern stack that ships",
    category: "Architecture", date: "Aug 01, 2026", author: "Jatin Rajput", readTime: "5 min",
    content: [
      "Speed and maintainability win products. Next.js gives us server rendering, streaming, and excellent image/font ergonomics; Flask gives a minimal, explicit API layer that’s easy to reason about and deploy.",
      "Python’s ecosystem handles everything around the core product — auth, data pipelines, and quick integrations — without bolting on heavy frameworks.",
      "At TriNetix we pair Next.js on the frontend with Flask on the backend for fast loads and a clear ownership boundary. The result is code that’s pleasant to change.",
    ],
  },
  "wordpress-conversion-tips": {
    title: "5 elements of a WordPress site that converts",
    category: "Web Design", date: "Jul 28, 2026", author: "Bharti Singh", readTime: "4 min",
    content: [
      "Templates don’t convert — structure does. Hierarchy, whitespace, and a single primary action beat decorative flourishes.",
      "Start mobile-first, keep fonts to one family with a strict scale, and make your CTA unavoidable. Then obsess over LCP and CLS.",
      "Our ₹3,999 WordPress package bakes these elements in — so you launch with a site that’s fast and ready to measure.",
    ],
  },
  "student-project-guide": {
    title: "How to earn an A+ on your final-year project",
    category: "Students", date: "Jul 20, 2026", author: "Jatin Rajput", readTime: "6 min",
    content: [
      "Reviewers look for clarity: a crisp SRS, coherent diagrams, and code that can be explained. Start there before writing features.",
      "Pick a focused scope, document assumptions, and keep commits small. Clean, commented modules and a reproducible setup script matter more than buzzwords.",
      "TriNetix delivers projects with a complete IEEE report and viva prep — so your submission is defensible on day one.",
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const a = DB[id];
  if (!a) return { title: "Article — TriNetix" };
  return { title: a.title, description: a.content[0].slice(0, 150) };
}

export default async function BlogDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = DB[id] ?? DB["nextjs-flask-architecture"];

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
      <Link href="/blog" className="inline-flex items-center gap-1.5 pt-8 text-[13px] font-medium text-[var(--foreground-tertiary)] hover:text-[var(--foreground)]">
        <ArrowLeft className="h-4 w-4" aria-hidden /> Back to articles
      </Link>

      <article className="mt-6 rounded-2xl border border-[var(--border-subtle)] bg-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="badge">{article.category}</span>
          <span className="inline-flex items-center gap-1 text-[12px] text-[var(--foreground-quaternary)]"><Clock className="h-3.5 w-3.5" aria-hidden /> {article.readTime}</span>
        </div>
        <h1 className="mt-4 text-[28px] font-semibold leading-tight tracking-[-0.025em] text-[#1d1d1f] sm:text-[32px]">{article.title}</h1>
        <div className="mt-4 flex flex-wrap gap-4 border-y border-[var(--border-subtle)] py-3 text-[12px] text-[var(--foreground-tertiary)]">
          <span className="inline-flex items-center gap-1.5"><User className="h-3.5 w-3.5 text-[var(--foreground-quaternary)]" aria-hidden /> {article.author}</span>
          <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-[var(--foreground-quaternary)]" aria-hidden /> {article.date}</span>
        </div>
        <div className="prose prose-neutral mt-6 max-w-none prose-p:text-[14.5px] prose-p:leading-7 prose-p:text-[var(--foreground-secondary)]">
          {article.content.map((para, i) => <p key={i}>{para}</p>)}
        </div>
        <div className="mt-8 flex items-center justify-between rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-subtle)] p-4">
          <div><p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--foreground-quaternary)]">Author</p><p className="text-[14px] font-semibold">{article.author}</p><p className="text-[12px] text-[var(--foreground-tertiary)]">Founder @ TriNetix</p></div>
          <Link href="/contact" className="btn-primary text-[13px]">Contact author</Link>
        </div>
      </article>
    </div>
  );
}
