"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Clock, ArrowRight, Search } from "lucide-react";
import { BLOGS } from "@/data/blogs";

export default function BlogClient() {
  const [blogs, setBlogs] = useState(BLOGS);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const cats = ["All","Architecture","Web Design","Students"];
  const filtered = blogs.filter(b => {
    const m = b.title.toLowerCase().includes(q.toLowerCase()) || b.excerpt.toLowerCase().includes(q.toLowerCase());
    const c = cat==="All" || b.category.toLowerCase().includes(cat.toLowerCase());
    return m && c;
  });

  return (
    <>
      <div className="mx-auto mt-6 flex max-w-[560px] items-center gap-2">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--foreground-quaternary)]" aria-hidden />
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search atelier notes" aria-label="Search articles" className="field-input pl-9 !rounded-full bg-white" />
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-1.5 flex-wrap">
        {cats.map(c=>(
          <button key={c} onClick={()=>setCat(c)} className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-medium border transition-colors ${cat===c ? "bg-[var(--accent)] text-white border-[var(--accent)]" : "bg-white border-[var(--border-subtle)] text-[var(--foreground-secondary)] hover:border-[var(--accent-muted)] hover:text-[var(--accent)]"}`}>{c}</button>
        ))}
      </div>
      <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(b=>(
          <article key={b.id} className="card p-6 flex flex-col">
            <div className="flex items-center justify-between gap-2">
              <span className="badge-accent !text-[11px]">{b.category}</span>
              <span className="inline-flex items-center gap-1 text-[11px] text-[var(--foreground-quaternary)]"><Clock className="h-3 w-3" aria-hidden /> {b.readTime}</span>
            </div>
            <h2 className="mt-3 text-[17px] font-semibold leading-tight tracking-[-0.015em]"><Link href={`/blog/${b.id}`} className="hover:text-[var(--accent)] hover:underline underline-offset-4">{b.title}</Link></h2>
            <p className="mt-2 line-clamp-3 text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">{b.excerpt}</p>
            <div className="mt-4 flex items-center justify-between border-t border-[var(--border-subtle)] pt-4 text-[12px]">
              <span className="inline-flex items-center gap-1.5 text-[var(--foreground-tertiary)]"><User className="h-3.5 w-3.5 text-[var(--accent)]/60" aria-hidden /> {b.author}</span>
              <Link href={`/blog/${b.id}`} className="inline-flex items-center gap-1 font-medium text-[var(--accent)] hover:underline underline-offset-4">Read <ArrowRight className="h-3.5 w-3.5" aria-hidden /></Link>
            </div>
          </article>
        ))}
        {filtered.length===0 && <p className="col-span-full py-12 text-center text-[13.5px] text-[var(--foreground-tertiary)]">No notes match your filters.</p>}
      </section>
    </>
  );
}
