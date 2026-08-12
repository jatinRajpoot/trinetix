"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, Quote, PlusCircle, CheckCircle2, X, Leaf } from "lucide-react";
import { TESTIMONIALS, type Testimonial } from "@/data/testimonials";

export default function TestimonialsClient() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS);
  const [filter, setFilter] = useState<"All"|"Client"|"Student">("All");
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", role: "", type: "Client", comment: "", rating: 5 });
  const [done, setDone] = useState(false);

  const filtered = testimonials.filter(t=> filter==="All" || t.type===filter);

  return (
    <>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        <div className="inline-flex rounded-full border border-[var(--border-subtle)] bg-white p-1">
          {(["All","Client","Student"] as const).map(k=>(
            <button key={k} onClick={()=>setFilter(k)} className={`rounded-full px-4 py-1.5 text-[12.5px] font-medium transition-colors ${filter===k ? "bg-[var(--accent)] text-white" : "text-[var(--foreground-tertiary)] hover:text-[var(--accent)]"}`}>{k}</button>
          ))}
        </div>
        <button onClick={()=>setOpen(true)} className="btn-primary text-[13px]"><PlusCircle className="h-4 w-4" aria-hidden /> Share note</button>
      </div>

      <section className="mt-8 grid gap-5 sm:grid-cols-2">
        {filtered.map(t=>(
          <div key={t.id} className="card relative p-6 flex flex-col">
            <Quote className="absolute right-5 top-5 h-6 w-6 text-[var(--accent)]/15" aria-hidden />
            <div className="flex gap-1">{Array.from({length:t.rating}).map((_,i)=><Star key={i} className="h-4 w-4 fill-[#1b4330] text-[#1b4330]" aria-hidden />)}</div>
            <p className="mt-3 text-[14px] leading-6 text-[var(--foreground-secondary)]">“{t.comment}”</p>
            <div className="mt-4 flex items-center gap-3 border-t border-[var(--border-subtle)] pt-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-[12px] font-bold text-white">{t.name[0]}</span>
              <div className="min-w-0"><p className="text-[13.5px] font-semibold leading-none">{t.name}</p><p className="text-[12px] text-[var(--foreground-tertiary)]">{t.role}</p></div>
              <span className="ml-auto badge-accent !text-[11px]">{t.type}</span>
            </div>
          </div>
        ))}
      </section>

      <div className="mt-8 flex justify-center">
        <Link href="/contact" className="btn-primary">Work with us</Link>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#122019]/40 backdrop-blur-sm" onClick={()=>setOpen(false)} aria-hidden />
          <div className="relative w-full max-w-md rounded-2xl border border-[var(--border-subtle)] bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between"><h3 className="text-[16px] font-semibold flex items-center gap-1.5"><Leaf className="h-4 w-4 text-[var(--accent)]" /> Share your feedback</h3><button onClick={()=>setOpen(false)} aria-label="Close" className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-subtle)] hover:bg-[var(--accent-soft)]"><X className="h-4 w-4" /></button></div>
            {done ? (
              <div className="mt-4 flex items-center gap-2 rounded-xl border border-[var(--accent-muted)] bg-[var(--accent-soft)] p-3 text-[13.5px] text-[var(--accent)]"><CheckCircle2 className="h-4 w-4 text-[var(--accent)]" /> Thank you — your note is live.</div>
            ) : (
              <form onSubmit={(e)=>{e.preventDefault(); setTestimonials([{id:testimonials.length+1, ...form}, ...testimonials]); setDone(true); setTimeout(()=>{setDone(false); setOpen(false); setForm({name:"",role:"",type:"Client",comment:"",rating:5});},1200);}} className="mt-4 space-y-3">
                <div><label className="field-label">Name</label><input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="field-input" placeholder="Rahul Verma" /></div>
                <div><label className="field-label">Role</label><input required value={form.role} onChange={e=>setForm({...form,role:e.target.value})} className="field-input" placeholder="Founder / B.Tech Student" /></div>
                <div className="grid grid-cols-2 gap-3">
                  <div><label className="field-label">Type</label><select value={form.type} onChange={e=>setForm({...form,type:e.target.value})} className="field-input"><option>Client</option><option>Student</option></select></div>
                  <div><label className="field-label">Rating</label><select value={form.rating} onChange={e=>setForm({...form,rating:Number(e.target.value)})} className="field-input"><option value={5}>5 — Excellent</option><option value={4}>4 — Very good</option></select></div>
                </div>
                <div><label className="field-label">Note</label><textarea required rows={3} value={form.comment} onChange={e=>setForm({...form,comment:e.target.value})} className="field-input resize-none" placeholder="How was your experience with us?" /></div>
                <button type="submit" className="btn-primary w-full justify-center">Submit</button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
