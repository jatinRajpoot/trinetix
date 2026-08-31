"use client";

import { useState } from "react";
import { Mail, Phone, Clock, Send, CheckCircle2, AlertCircle, ChevronDown, Leaf } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function ContactClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState("WordPress Website — from ₹3,999");
  const [isStudent, setIsStudent] = useState(false);
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState<{ success: boolean; text: string } | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFeedback({ success: false, text: "Please fill in all required fields." });
      return;
    }
    const text = encodeURIComponent(
      `*New Inquiry from Website*\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Phone:* ${phone || "—"}\n` +
      `*Service:* ${serviceType}\n` +
      `*Student:* ${isStudent ? "Yes" : "No"}\n\n` +
      `*Message:* ${message}`
    );
    window.open(`https://wa.me/917027782346?text=${text}`, "_blank");
    setFeedback({
      success: true,
      text: `Thank you ${name}! Redirecting you to WhatsApp to send your inquiry...`,
    });
  };

  const faqs = [
    { q: "What’s included in the WordPress website?", a: "Custom design, fast loading, SEO basics, contact forms, and simple training to manage your site." },
    { q: "How does the student project work?", a: "You get working code, full report, diagrams, setup guide, and help for your viva." },
    { q: "Need it fast in 24–48 hours?", a: "Add Priority Support (+ ₹1,000) — we work faster and make it ready in 24–48 hours." },
    { q: "Price for custom and Android apps?", a: "Android apps from ₹15,000. Custom websites from ₹8,000 — price depends on what you need." },
  ];

  return (
    <>
      <section className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_0.85fr] items-start">
        <div className="card-premium p-6 sm:p-8">
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-[var(--accent)]" aria-hidden />
            <h2 className="text-[16px] font-semibold tracking-[-0.015em]">Send a message</h2>
          </div>
          <p className="mt-1 text-[12.5px] text-[var(--foreground-quaternary)]">We are here to help. All fields marked * are required.</p>

          {feedback && (
            <div className={`mt-4 flex gap-2.5 rounded-xl border p-3 text-[13.5px] ${feedback.success ? "border-[var(--accent-muted)] bg-[var(--accent-soft)] text-[var(--accent)]" : "border-red-200 bg-red-50 text-red-800"}`}>
              {feedback.success ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" /> : <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />}
              <span>{feedback.text}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label htmlFor="c-name" className="field-label">Full name *</label><input id="c-name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Sameer Malhotra" className="field-input" autoComplete="name" /></div>
              <div><label htmlFor="c-email" className="field-label">Email *</label><input id="c-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="sameer@company.com" className="field-input" autoComplete="email" /></div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label htmlFor="c-phone" className="field-label">Phone</label><input id="c-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 70277 82346" className="field-input" autoComplete="tel" /></div>
              <div><label htmlFor="c-service" className="field-label">Service</label>
                <select id="c-service" value={serviceType} onChange={(e) => setServiceType(e.target.value)} className="field-input">
                  <option>WordPress Website — from ₹3,999</option>
                  <option>Custom Website — from ₹8,000</option>
                  <option>Android App — from ₹15,000</option>
                  <option>Student Project & Report — ₹3,000</option>
                  <option>Priority Support (+ ₹1,000)</option>
                  <option>General inquiry</option>
                </select>
              </div>
            </div>
            <label className="flex items-center gap-2 rounded-xl border border-[var(--accent-muted)] bg-[var(--accent-soft)] px-3 py-2.5 text-[13px] text-[var(--foreground-secondary)]">
              <input type="checkbox" checked={isStudent} onChange={(e) => setIsStudent(e.target.checked)} className="h-4 w-4 accent-[var(--accent)]" />
              I’m a student — need academic support
            </label>
            <div><label htmlFor="c-msg" className="field-label">Message *</label><textarea id="c-msg" required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us what you need, timeline or budget…" className="field-input resize-none" /></div>
            <button type="submit" className="btn-primary w-full justify-center">
              <Send className="h-4 w-4" aria-hidden /> Send message
            </button>
            <p className="text-center text-[11px] text-[var(--foreground-quaternary)]">By sending, you agree to our <a href="/privacy" className="underline underline-offset-4 hover:text-[var(--accent)]">Privacy Policy</a>.</p>
          </form>
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="text-[14px] font-semibold">Contact us</h3>
            <div className="mt-4 space-y-4 text-[13.5px]">
              <div className="flex gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--accent-muted)] bg-[var(--accent-soft)] text-[var(--accent)]"><Mail className="h-4 w-4" aria-hidden /></span><div><p className="text-[12px] text-[var(--foreground-quaternary)]">Email</p><a href="mailto:Support@trinetix.in" className="font-medium hover:underline underline-offset-4">Support@trinetix.in</a></div></div>
              <div className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--accent-muted)] bg-[var(--accent-soft)] text-[var(--accent)]"><Phone className="h-4 w-4" aria-hidden /></span>
                <div>
                  <p className="text-[12px] text-[var(--foreground-quaternary)]">Phone & WhatsApp</p>
                  <a href="tel:+917027782346" className="font-medium hover:underline underline-offset-4">+91 70277 82346</a>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <a href="tel:+917027782346" className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent-muted)] bg-white px-3 py-1.5 text-[12px] font-medium text-[var(--accent)] transition-colors hover:bg-[var(--accent-soft)]">
                      <Phone className="h-3.5 w-3.5" aria-hidden /> Call now
                    </a>
                    <a href="https://wa.me/917027782346?text=Hi%20TriNetix%2C%20I%20want%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-[#bfe8cf] bg-[#e9f9ef] px-3 py-1.5 text-[12px] font-medium text-[#1a7f4b] transition-colors hover:bg-[#d9f3e3]">
                      <WhatsAppIcon className="h-3.5 w-3.5" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--accent-muted)] bg-[var(--accent-soft)] text-[var(--accent)]"><Clock className="h-4 w-4" aria-hidden /></span><div><p className="text-[12px] text-[var(--foreground-quaternary)]">Hours</p><p className="font-medium">Mon–Sat 9:00–20:00</p><p className="text-[12px] text-[var(--accent)] font-medium">We reply in 2–4 hours</p></div></div>
            </div>
          </div>

          <div className="card p-6 bg-[var(--accent-soft)] border-[var(--accent-muted)]">
            <h3 className="text-[13px] font-semibold text-[var(--accent)]">Work with us</h3>
            <p className="mt-2 text-[13.5px] leading-6 text-[var(--foreground-secondary)]">Want to start a project? Send us a message and we’ll share a simple plan and price within hours.</p>
            <div className="mt-4 rounded-xl bg-white border border-[var(--accent-muted)] p-4">
              <p className="text-[13px] font-medium">What you get:</p>
              <ul className="mt-2 space-y-1 text-[12.5px] text-[var(--foreground-tertiary)] list-disc pl-4">
                <li>Clear plan and price</li>
                <li>Live preview in 48 hours</li>
                <li>Help for 30 days after launch</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-[800px] rounded-2xl border border-[var(--border-subtle)] bg-white p-6 sm:p-8">
        <h2 className="text-[16px] font-semibold tracking-[-0.015em] text-center">Common questions</h2>
        <div className="mt-6 divide-y divide-[var(--border-subtle)] rounded-xl border border-[var(--border-subtle)] overflow-hidden">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[13.5px] font-medium hover:bg-[var(--accent-soft)] transition-colors">
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
