"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { BLOGS } from "@/data/blogs";

const topics = ["All notes", "Web Design", "Architecture", "Students"];
const cover: Record<string, { src: string; alt: string }> = {
  Architecture: { src: "/images/digital-workspace.jpg", alt: "Laptop and code in a bright workspace" },
  "Web Design": { src: "/images/urban-architecture.jpg", alt: "Modern building facade" },
  Students: { src: "/images/digital-workspace.jpg", alt: "Laptop and tools in a workspace" },
};

export default function BlogClient() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("All notes");
  const articles = useMemo(() => BLOGS.filter((post) => {
    const matchesTopic = topic === "All notes" || post.category === topic;
    const haystack = `${post.title} ${post.excerpt}`.toLowerCase();
    return matchesTopic && haystack.includes(query.trim().toLowerCase());
  }), [query, topic]);

  return (
    <div className="mt-10">
      <div className="flex flex-col gap-4 border-y border-[var(--border)] py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" aria-label="Filter articles">{topics.map((item)=><button type="button" key={item} onClick={()=>setTopic(item)} aria-pressed={topic===item} className={`px-3 py-2 text-[9px] font-semibold uppercase tracking-[.07em] transition-colors ${topic===item?"bg-[var(--foreground)] text-white":"border border-[var(--border)] text-[var(--foreground-tertiary)] hover:border-[var(--foreground)] hover:text-[var(--foreground)]"}`}>{item}</button>)}</div>
        <label className="relative w-full sm:max-w-[260px]"><span className="sr-only">Search articles</span><Search className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--foreground-quaternary)]"/><input value={query} onChange={(event)=>setQuery(event.target.value)} placeholder="Search the journal" className="w-full border-b border-[var(--border-strong)] bg-transparent py-2.5 pl-6 text-[11px] outline-none placeholder:text-[var(--foreground-quaternary)] focus:border-[var(--accent)]"/></label>
      </div>

      <section className="grid gap-x-5 gap-y-8 py-8 text-left sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((post, index)=>{
          const image = cover[post.category] ?? cover.Architecture;
          return <article key={post.id} className="group">
            <Link href={`/blog/${post.id}`} className="block">
              <div className="relative aspect-[1.35/1] overflow-hidden bg-[#e3ded4]"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"/><span className="absolute left-3 top-3 bg-[#f4f1ea] px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[.08em]">{post.category}</span><span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center bg-[var(--accent)] text-white"><span className="text-[9px] font-semibold">0{index+1}</span></span></div>
              <div className="border-b border-[var(--border)] pb-4 pt-4"><div className="flex items-center gap-3 text-[9px] font-medium uppercase tracking-[.08em] text-[var(--foreground-quaternary)]"><span>{post.date}</span><span className="h-px w-4 bg-[var(--accent)]"/><span>{post.readTime} read</span></div><h2 className="mt-2 text-[19px] font-medium leading-tight tracking-[-.045em] group-hover:text-[var(--accent)]">{post.title}</h2><p className="mt-2 text-[11px] leading-5 text-[var(--foreground-tertiary)]">{post.excerpt}</p><span className="mt-4 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.1em] text-[var(--foreground)]">Read article <ArrowUpRight className="h-3.5 w-3.5 text-[var(--accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></span></div>
            </Link>
          </article>;
        })}
        {articles.length===0&&<div className="col-span-full border-y border-[var(--border)] py-14 text-center"><p className="text-[18px] font-medium tracking-[-.04em]">No notes found.</p><button type="button" onClick={()=>{setTopic("All notes");setQuery("")}} className="mt-3 text-[9px] font-semibold uppercase tracking-[.1em] text-[var(--accent)]">Clear search</button></div>}
      </section>
    </div>
  );
}
