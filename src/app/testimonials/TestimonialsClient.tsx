"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

export default function TestimonialsClient() {
  const [filter, setFilter] = useState<"All" | "Client" | "Student">("All");
  const notes = useMemo(() => TESTIMONIALS.filter((item) => filter === "All" || item.type === filter), [filter]);
  return (
    <div className="mt-10 text-left">
      <div className="flex flex-wrap items-center justify-between gap-4 border-y border-[var(--border)] py-4"><div className="flex gap-2">{(["All", "Client", "Student"] as const).map((item)=><button type="button" key={item} aria-pressed={filter===item} onClick={()=>setFilter(item)} className={`px-3 py-2 text-[9px] font-semibold uppercase tracking-[.08em] transition-colors ${filter===item?"bg-[var(--foreground)] text-white":"border border-[var(--border)] text-[var(--foreground-tertiary)] hover:border-[var(--foreground)] hover:text-[var(--foreground)]"}`}>{item === "All" ? "Everyone" : item === "Client" ? "Businesses" : "Students"}</button>)}</div><p className="text-[9px] font-medium uppercase tracking-[.1em] text-[var(--foreground-quaternary)]">Words from people we’ve worked with</p></div>
      <div className="border-b border-[var(--border)]">{notes.map((note,index)=><article key={note.id} className="grid gap-3 border-t border-[var(--border)] py-6 sm:grid-cols-[50px_1fr_190px] sm:gap-6 sm:py-8"><Quote className="h-5 w-5 text-[var(--accent)]"/><div><div className="flex gap-0.5" aria-label={`${note.rating} out of 5 stars`}>{Array.from({length:note.rating}).map((_,i)=><Star key={i} className="h-3 w-3 fill-[var(--gold)] text-[var(--gold)]"/>)}</div><blockquote className="mt-3 max-w-[680px] text-[20px] font-medium leading-[1.23] tracking-[-.045em] sm:text-[25px]">“{note.comment}”</blockquote></div><div className="flex items-end justify-between gap-3 sm:flex-col sm:items-start sm:justify-end"><div><p className="text-[11px] font-semibold">{note.name}</p><p className="mt-0.5 text-[10px] text-[var(--foreground-tertiary)]">{note.role}</p></div><span className="text-[8px] font-semibold uppercase tracking-[.11em] text-[var(--accent)]">0{index+1} · {note.type}</span></div></article>)}</div>
      <div className="mt-8 flex flex-col gap-4 border-b border-[var(--border)] pb-8 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-[490px] text-[12px] leading-6 text-[var(--foreground-tertiary)]">Every project starts with a conversation about your goals. Tell us what you want to make easier for your customers.</p><Link href="/contact" className="group inline-flex w-fit items-center gap-3 bg-[var(--accent)] px-4 py-3 text-[9px] font-semibold uppercase tracking-[.09em] text-white hover:bg-[var(--accent-hover)]">Talk through your project <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"/></Link></div>
    </div>
  );
}
