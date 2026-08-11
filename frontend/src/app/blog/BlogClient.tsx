"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { User, Clock, ArrowRight, Search } from "lucide-react";

interface BlogPost { id: string; title: string; excerpt: string; category: string; date: string; author: string; readTime: string; content: string; }

const FALLBACK: BlogPost[] = [
  { id: "nextjs-flask-architecture", title: "Why Next.js + Flask is the modern stack that ships", excerpt: "Server rendering + lightweight APIs — how we keep TriNetix sites fast and maintainable.", category: "Architecture", date: "Aug 01, 2026", author: "Jatin Rajput", readTime: "5 min", content: "" },
  { id: "wordpress-conversion-tips", title: "5 elements of a WordPress site that converts", excerpt: "Typography, speed, and CTAs — what actually moves the needle.", category: "Web Design", date: "Jul 28, 2026", author: "Bharti Singh", readTime: "4 min", content: "" },
  { id: "student-project-guide", title: "How to earn an A+ on your final-year project", excerpt: "A practical checklist for SRS, diagrams, code quality, and viva prep.", category: "Students", date: "Jul 20, 2026", author: "Jatin Rajput", readTime: "6 min", content: "" },
];

export default function BlogClient() {
  const [blogs, setBlogs] = useState<BlogPost[]>(FALLBACK);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs").then(r=>r.json()).then(d=>{ if(d.success && d.data) setBlogs(d.data); }).catch(()=>{});
  }, []);

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
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search articles" aria-label="Search articles" className="field-input pl-9 !rounded-full bg-white" />
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-1.5 flex-wrap">
        {cats.map(c=>(
          <button key={c} onClick={()=>setCat(c)} className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-medium border transition-colors ${cat===c ? "bg-[#1d1d1f] text-white border-[#1d1d1f]" : "bg-white border-[var(--border-subtle)] text-[var(--foreground-secondary)] hover:border-[var(--border)]"}`}>{c}</button>
        ))}
      </div>
      <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(b=>(
          <article key={b.id} className="card p-6 flex flex-col">
            <div className="flex items-center justify-between gap-2">
              <span className="badge !text-[11px]">{b.category}</span>
              <span className="inline-flex items-center gap-1 text-[11px] text-[var(--foreground-quaternary)]"><Clock className="h-3 w-3" aria-hidden /> {b.readTime}</span>
            </div>
            <h2 className="mt-3 text-[17px] font-semibold leading-tight tracking-[-0.015em]"><Link href={`/blog/${b.id}`} className="hover:underline underline-offset-4">{b.title}</Link></h2>
            <p className="mt-2 line-clamp-3 text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">{b.excerpt}</p>
            <div className="mt-4 flex items-center justify-between border-t border-[var(--border-subtle)] pt-4 text-[12px]">
              <span className="inline-flex items-center gap-1.5 text-[var(--foreground-tertiary)]"><User className="h-3.5 w-3.5 text-[var(--foreground-quaternary)]" aria-hidden /> {b.author}</span>
              <Link href={`/blog/${b.id}`} className="inline-flex items-center gap-1 font-medium text-[#1d1d1f] hover:underline underline-offset-4">Read <ArrowRight className="h-3.5 w-3.5" aria-hidden /></Link>
            </div>
          </article>
        ))}
        {filtered.length===0 && <p className="col-span-full py-12 text-center text-[13.5px] text-[var(--foreground-tertiary)]">No articles match your filters.</p>}
      </section>
    </>
  );
}
