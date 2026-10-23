import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import type { Metadata } from "next";
import { BLOGS, getBlogById } from "@/data/blogs";

export function generateStaticParams() {
  return BLOGS.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const article = getBlogById(id);
  if (!article) return { title: "Article | TriNetix" };
  return { title: article.title, description: article.excerpt.slice(0, 150) };
}

export default async function BlogDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = getBlogById(id) ?? BLOGS[0];
  const visual = article.category === "Web Design" ? "/images/urban-architecture.jpg" : "/images/digital-workspace.jpg";
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: article.title, author: { "@type": "Person", name: article.author }, datePublished: article.date };

  return (
    <div className="bg-[var(--background)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}/>
      <section className="bg-[#20241f] text-[#f4f1ea]"><div className="mx-auto max-w-[1440px] px-5 pb-12 pt-8 sm:px-8 sm:pb-16 lg:px-12"><Link href="/blog" className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.1em] text-white/55 hover:text-white"><ArrowLeft className="h-3.5 w-3.5"/>Back to the journal</Link><div className="mt-8 max-w-[940px]"><div className="flex flex-wrap items-center gap-3 text-[9px] font-semibold uppercase tracking-[.1em] text-[#ef8b6e]"><span>{article.category}</span><span className="h-px w-6 bg-[#ef8b6e]"/><span className="inline-flex items-center gap-1.5 text-white/50"><Clock3 className="h-3 w-3"/>{article.readTime} read</span></div><h1 className="mt-4 text-[38px] font-medium leading-[1.03] tracking-[-.065em] sm:text-[56px]">{article.title}</h1><p className="mt-4 max-w-[680px] text-[13px] leading-7 text-white/65 sm:text-[15px]">{article.excerpt}</p><p className="mt-5 text-[9px] font-medium uppercase tracking-[.1em] text-white/45">{article.author} <span className="mx-2 text-[#ef8b6e]">/</span> {article.date}</p></div></div></section>
      <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,760px)_minmax(220px,1fr)] lg:gap-16 lg:px-12 lg:py-20">
        <article><div className="relative aspect-[1.8/1] overflow-hidden bg-[#ddd7cd]"><Image src={visual} alt="Editorial image accompanying this article" fill priority sizes="(max-width: 1024px) 100vw, 760px" className="object-cover"/></div><div className="mt-8 space-y-5">{article.content.map((paragraph,index)=><p key={index} className="max-w-[690px] text-[14px] leading-[1.9] text-[var(--foreground-secondary)] sm:text-[15px]">{paragraph}</p>)}</div><div className="mt-10 border-y border-[var(--border)] py-5"><Link href="/blog" className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.1em] text-[var(--accent)]"><ArrowLeft className="h-3.5 w-3.5"/>More notes</Link></div></article>
        <aside className="lg:sticky lg:top-28 lg:self-start"><div className="border-t border-[var(--border)] pt-4"><p className="section-kicker">Take it further</p><h2 className="mt-3 text-[23px] font-medium leading-tight tracking-[-.05em]">Working on something similar?</h2><p className="mt-2 text-[11px] leading-6 text-[var(--foreground-tertiary)]">Tell us what you’re trying to make easier. We’ll help you work out a practical next step.</p><Link href="/contact" className="group mt-5 inline-flex items-center gap-3 bg-[var(--accent)] px-4 py-3 text-[9px] font-semibold uppercase tracking-[.09em] text-white hover:bg-[var(--accent-hover)]">Talk to the team <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></Link></div><div className="mt-8 border-t border-[var(--border)] pt-4"><p className="text-[9px] font-semibold uppercase tracking-[.1em] text-[var(--foreground-quaternary)]">About the journal</p><p className="mt-2 text-[11px] leading-6 text-[var(--foreground-tertiary)]">Practical notes from the TriNetix team about websites, apps and project work.</p></div></aside>
      </section>
    </div>
  );
}
