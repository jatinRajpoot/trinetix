"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Star, Quote, PlusCircle, CheckCircle2, X } from "lucide-react";

interface Testimonial { id: number; name: string; role: string; type: string; comment: string; rating: number; }

const INITIAL: Testimonial[] = [
  { id: 1, name: "Rohan Sharma", role: "E-Commerce Founder", type: "Client", comment: "WordPress site for ₹3,999 — fast, responsive, live in 3 days. Sales up 40%.", rating: 5 },
  { id: 2, name: "Priya Verma", role: "B.Tech Student", type: "Student", comment: "Urgent project with IEEE report in 48h. Flawless code, A+ grade.", rating: 5 },
  { id: 3, name: "Vikramaditya Singh", role: "Mobile App Client", type: "Client", comment: "Android app for ₹15k — clean, fast, and Play Store ready.", rating: 5 },
  { id: 4, name: "Aman Gupta", role: "BCA Final Year", type: "Student", comment: "Source, ERD, setup guide, viva Q&A — everything included.", rating: 5 },
];

export default function TestimonialsClient() {
  const [testimonials, setTestimonials] = useState(INITIAL);
  const [filter, setFilter] = useState<"All"|"Client"|"Student">("All");
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", role: "", type: "Client", comment: "", rating: 5 });
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/testimonials").then(r=>r.json()).then(d=>{ if(d.success&&d.data) setTestimonials(d.data.map((t:any)=>({id:t.id,name:t.name,role:t.role,type:t.type,comment:t.comment,rating:t.rating}))); }).catch(()=>{});
  }, []);

  const filtered = testimonials.filter(t=> filter==="All" || t.type===filter);

  return (
    <>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        <div className="inline-flex rounded-full border border-[var(--border-subtle)] bg-white p-1">
          {(["All","Client","Student"] as const).map(k=>(
            <button key={k} onClick={()=>setFilter(k)} className={`rounded-full px-4 py-1.5 text-[12.5px] font-medium transition-colors ${filter===k ? "bg-[#1d1d1f] text-white" : "text-[var(--foreground-tertiary)] hover:text-[var(--foreground)]"}`}>{k}</button>
          ))}
        </div>
        <button onClick={()=>setOpen(true)} className="btn-primary text-[13px]"><PlusCircle className="h-4 w-4" aria-hidden /> Submit review</button>
      </div>

      <section className="mt-8 grid gap-5 sm:grid-cols-2">
        {filtered.map(t=>(
          <div key={t.id} className="card relative p-6 flex flex-col">
            <Quote className="absolute right-5 top-5 h-6 w-6 text-[var(--border)]" aria-hidden />
            <div className="flex gap-1">{Array.from({length:t.rating}).map((_,i)=><Star key={i} className="h-4 w-4 fill-[#ffb020] text-[#ffb020]" aria-hidden />)}</div>
            <p className="mt-3 text-[14px] leading-6 text-[var(--foreground-secondary)]">“{t.comment}”</p>
            <div className="mt-4 flex items-center gap-3 border-t border-[var(--border-subtle)] pt-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1d1d1f] text-[12px] font-bold text-white">{t.name[0]}</span>
              <div className="min-w-0"><p className="text-[13.5px] font-semibold leading-none">{t.name}</p><p className="text-[12px] text-[var(--foreground-tertiary)]">{t.role}</p></div>
              <span className="ml-auto badge !text-[11px]">{t.type}</span>
            </div>
          </div>
        ))}
      </section>

      <div className="mt-8 flex justify-center">
        <Link href="/contact" className="btn-primary">Start your project</Link>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={()=>setOpen(false)} aria-hidden />
          <div className="relative w-full max-w-md rounded-2xl border border-[var(--border-subtle)] bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between"><h3 className="text-[16px] font-semibold">Submit review</h3><button onClick={()=>setOpen(false)} aria-label="Close" className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-subtle)] hover:bg-[var(--surface-subtle)]"><X className="h-4 w-4" /></button></div>
            {done ? (
              <div className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-[13.5px] text-emerald-900"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Thank you — your review is live.</div>
            ) : (
              <form onSubmit={(e)=>{e.preventDefault(); setTestimonials([{id:testimonials.length+1, ...form}, ...testimonials]); setDone(true); setTimeout(()=>{setDone(false); setOpen(false); setForm({name:"",role:"",type:"Client",comment:"",rating:5});},1200);}} className="mt-4 space-y-3">
                <div><label className="field-label">Name</label><input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="field-input" placeholder="Rahul Verma" /></div>
                <div><label className="field-label">Role</label><input required value={form.role} onChange={e=>setForm({...form,role:e.target.value})} className="field-input" placeholder="Founder / B.Tech Student" /></div>
                <div className="grid grid-cols-2 gap-3">
                  <div><label className="field-label">Type</label><select value={form.type} onChange={e=>setForm({...form,type:e.target.value})} className="field-input"><option>Client</option><option>Student</option></select></div>
                  <div><label className="field-label">Rating</label><select value={form.rating} onChange={e=>setForm({...form,rating:Number(e.target.value)})} className="field-input"><option value={5}>5 — Excellent</option><option value={4}>4 — Very good</option></select></div>
                </div>
                <div><label className="field-label">Comment</label><textarea required rows={3} value={form.comment} onChange={e=>setForm({...form,comment:e.target.value})} className="field-input resize-none" placeholder="Your experience with TriNetix…" /></div>
                <button type="submit" className="btn-primary w-full justify-center">Submit</button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
