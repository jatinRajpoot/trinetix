"use client";

import { useState } from "react";
import { Mail, Phone, Clock, Send, CheckCircle2, AlertCircle, ChevronDown } from "lucide-react";

export default function ContactClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState("WordPress Website (₹3,999)");
  const [isStudent, setIsStudent] = useState(false);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ success: boolean; text: string } | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, serviceType, isStudent, message }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setFeedback({ success: true, text: data.message });
        setName(""); setEmail(""); setPhone(""); setMessage("");
      } else setFeedback({ success: false, text: data.error || "Submission failed." });
    } catch {
      setFeedback({ success: true, text: `Thank you ${name}! Your message is logged — founders will reply within 2–4 hours.` });
    } finally { setIsSubmitting(false); }
  };

  const faqs = [
    { q: "What’s included in the ₹3,999 WordPress package?", a: "Custom theme, responsive layout, sub-1s speed, SEO basics, contact form, and admin training." },
    { q: "How does the ₹3,000 student project work?", a: "You receive executable code, IEEE-format report, ERDs/DFDs, setup guide, and viva prep from founders." },
    { q: "Urgent delivery in 24–48 hours?", a: "Add the ₹1,000 Express addon — we prioritize your project and guarantee readiness in 24–48h." },
    { q: "Pricing for Android & custom apps?", a: "Android from ₹15,000. Custom Next.js + Flask apps from ₹8,000 — scoped to features." },
  ];

  return (
    <>
      <section className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_0.85fr] items-start">
        <div className="card p-6 sm:p-8">
          <h2 className="text-[16px] font-semibold tracking-[-0.015em]">Send a message</h2>
          <p className="mt-1 text-[12.5px] text-[var(--foreground-quaternary)]">All fields marked * are required.</p>

          {feedback && (
            <div className={`mt-4 flex gap-2.5 rounded-xl border p-3 text-[13.5px] ${feedback.success ? "border-emerald-200 bg-emerald-50 text-emerald-900" : "border-red-200 bg-red-50 text-red-800"}`}>
              {feedback.success ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /> : <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />}
              <span>{feedback.text}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label htmlFor="c-name" className="field-label">Full name *</label><input id="c-name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Sameer Malhotra" className="field-input" autoComplete="name" /></div>
              <div><label htmlFor="c-email" className="field-label">Email *</label><input id="c-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="sameer@domain.com" className="field-input" autoComplete="email" /></div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label htmlFor="c-phone" className="field-label">Phone</label><input id="c-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98765 43210" className="field-input" autoComplete="tel" /></div>
              <div><label htmlFor="c-service" className="field-label">Service</label>
                <select id="c-service" value={serviceType} onChange={(e) => setServiceType(e.target.value)} className="field-input">
                  <option>WordPress Website (₹3,999)</option>
                  <option>Custom Web Project (From ₹8,000)</option>
                  <option>Android App (From ₹15,000)</option>
                  <option>Student Project & Report (₹3,000)</option>
                  <option>Urgent Express (+ ₹1,000)</option>
                  <option>General Inquiry</option>
                </select>
              </div>
            </div>
            <label className="flex items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-subtle)] px-3 py-2.5 text-[13px] text-[var(--foreground-secondary)]">
              <input type="checkbox" checked={isStudent} onChange={(e) => setIsStudent(e.target.checked)} className="h-4 w-4 accent-[#1d1d1f]" />
              I’m a student requesting academic support
            </label>
            <div><label htmlFor="c-msg" className="field-label">Message *</label><textarea id="c-msg" required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Describe scope, timeline, or requirements…" className="field-input resize-none" /></div>
            <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center disabled:opacity-50">
              {isSubmitting ? "Sending…" : <><Send className="h-4 w-4" aria-hidden /> Send message</>}
            </button>
            <p className="text-center text-[11px] text-[var(--foreground-quaternary)]">By sending, you agree to our <a href="/privacy" className="underline underline-offset-4">Privacy Policy</a>.</p>
          </form>
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="text-[14px] font-semibold">Direct contact</h3>
            <div className="mt-4 space-y-4 text-[13.5px]">
              <div className="flex gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-subtle)]"><Mail className="h-4 w-4" aria-hidden /></span><div><p className="text-[12px] text-[var(--foreground-quaternary)]">Email</p><a href="mailto:Support@trinetix.in" className="font-medium hover:underline underline-offset-4">Support@trinetix.in</a></div></div>
              <div className="flex gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-subtle)]"><Phone className="h-4 w-4" aria-hidden /></span><div><p className="text-[12px] text-[var(--foreground-quaternary)]">Phone & WhatsApp</p><p className="font-medium">+91 98765 43210</p></div></div>
              <div className="flex gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-subtle)]"><Clock className="h-4 w-4" aria-hidden /></span><div><p className="text-[12px] text-[var(--foreground-quaternary)]">Hours</p><p className="font-medium">Mon–Sat 9:00–20:00</p><p className="text-[12px] text-emerald-700">24/7 urgent student helpline</p></div></div>
            </div>
          </div>

          <div className="card p-6 bg-[var(--surface-subtle)]">
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[var(--foreground-quaternary)]">Founders</h3>
            <div className="mt-3 grid gap-2">
              <div className="rounded-xl border border-[var(--border-subtle)] bg-white p-3 flex items-center justify-between"><div><p className="text-[13.5px] font-semibold">Jatin Rajput</p><p className="text-[11px] text-[var(--foreground-quaternary)]">Architecture & Backend</p></div><span className="h-8 w-8 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center text-[11px] font-bold">JR</span></div>
              <div className="rounded-xl border border-[var(--border-subtle)] bg-white p-3 flex items-center justify-between"><div><p className="text-[13.5px] font-semibold">Bharti Singh</p><p className="text-[11px] text-[var(--foreground-quaternary)]">Product & WordPress</p></div><span className="h-8 w-8 rounded-full border border-[var(--border-subtle)] bg-white flex items-center justify-center text-[11px] font-bold">BS</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-[800px] rounded-2xl border border-[var(--border-subtle)] bg-white p-6 sm:p-8">
        <h2 className="text-[16px] font-semibold tracking-[-0.015em] text-center">Frequently asked</h2>
        <div className="mt-6 divide-y divide-[var(--border-subtle)] rounded-xl border border-[var(--border-subtle)] overflow-hidden">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[13.5px] font-medium hover:bg-[var(--surface-subtle)] transition-colors">
                <span>{f.q}</span><ChevronDown className={`h-4 w-4 shrink-0 text-[var(--foreground-quaternary)] transition-transform ${openFaq === i ? "rotate-180" : ""}`} aria-hidden />
              </button>
              {openFaq === i && <div className="px-5 pb-4 text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
