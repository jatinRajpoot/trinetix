"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check, Clock3, Mail, MessageCircle, Phone, Send } from "lucide-react";

const services = [
  "Business website — from ₹3,999",
  "Custom web app — from ₹8,000",
  "Android app — from ₹15,000",
  "Student project support — from ₹3,000",
  "Not sure yet",
];

export default function ContactClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(services[0]);
  const [message, setMessage] = useState("");
  const [student, setStudent] = useState(false);
  const [feedback, setFeedback] = useState<{ ok: boolean; message: string } | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const selectedService = params.get("service");
    const project = params.get("project");
    const studentQuery = params.get("type") === "student";
    if (project) setMessage(`I’m interested in a project similar to ${project}.`);
    if (studentQuery) {
      setStudent(true);
      setService(services[3]);
    } else if (selectedService === "CustomProject") setService(services[1]);
    else if (selectedService === "AndroidApp") setService(services[2]);
  }, []);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFeedback({ ok: false, message: "Please add your name, email and a short project note." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setFeedback({ ok: false, message: "Please enter a valid email address." });
      return;
    }

    const brief = encodeURIComponent(
      `Hi TriNetix, I'd like to talk about a project.\n\nName: ${name.trim()}\nEmail: ${email.trim()}\nPhone: ${phone.trim() || "Not provided"}\nService: ${service}\nStudent support: ${student ? "Yes" : "No"}\n\nProject details: ${message.trim()}`
    );
    window.open(`https://wa.me/917206382346?text=${brief}`, "_blank", "noopener,noreferrer");
    setFeedback({ ok: true, message: "Your brief is ready in WhatsApp. Press Send there to get the conversation started." });
  }

  return (
    <section className="contact-layout site-container">
      <div className="contact-form">
        <div className="contact-form-heading"><p className="section-label"><span/> A short brief is all we need</p><h2>Tell us a little about the project.</h2><p className="contact-form-intro">No fancy pitch needed. Just a little about what you’re hoping to make.</p></div>
        {feedback && <div role={feedback.ok?"status":"alert"} aria-live="polite" className={`contact-form-feedback ${feedback.ok?"success":"error"}`}><span><Check className="h-4 w-4"/></span><p>{feedback.message}</p></div>}
        <form onSubmit={submit} noValidate className="mt-6">
          <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
            <div><label htmlFor="brief-name" className="field-label">Your name <span className="text-[var(--accent)]">*</span></label><input id="brief-name" autoComplete="name" required value={name} onChange={(event)=>setName(event.target.value)} placeholder="How should we address you?" className="field-input"/></div>
            <div><label htmlFor="brief-email" className="field-label">Email address <span className="text-[var(--accent)]">*</span></label><input id="brief-email" type="email" autoComplete="email" required value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="you@business.com" className="field-input"/></div>
            <div><label htmlFor="brief-phone" className="field-label">Phone <span className="font-normal normal-case tracking-normal text-[var(--foreground-quaternary)]">Optional</span></label><input id="brief-phone" type="tel" autoComplete="tel" value={phone} onChange={(event)=>setPhone(event.target.value)} placeholder="+91" className="field-input"/></div>
            <div><label htmlFor="brief-service" className="field-label">What are you looking for?</label><select id="brief-service" value={service} onChange={(event)=>{setService(event.target.value);setStudent(event.target.value===services[3]);}} className="field-input">{services.map((option)=><option key={option}>{option}</option>)}</select></div>
          </div>
          <label htmlFor="brief-student" className="mt-4 flex w-fit cursor-pointer items-center gap-2.5 text-[11px] text-[var(--foreground-secondary)]"><input id="brief-student" type="checkbox" checked={student} onChange={(event)=>{setStudent(event.target.checked);if(event.target.checked)setService(services[3]);}} className="h-4 w-4 accent-[var(--accent)]"/>I’m a student looking for project support.</label>
          <div className="mt-4"><label htmlFor="brief-message" className="field-label">A little about what you need <span className="text-[var(--accent)]">*</span></label><textarea id="brief-message" rows={5} required value={message} onChange={(event)=>setMessage(event.target.value)} placeholder="What are you hoping the website or app will help you do? A few rough notes are fine." className="field-input min-h-[132px] resize-y"/></div>
          <div className="contact-send"><button type="submit" className="button button-purple">Send your brief on WhatsApp <Send size={16}/></button><p>WhatsApp opens with your details filled in. You can review the message before sending it.</p></div>
        </form>
      </div>

      <aside className="contact-aside">
        <p className="section-kicker">What happens next</p><h2 className="mt-3 max-w-[350px] text-[27px] font-medium leading-[1.02] tracking-[-.055em]">A real conversation, not an automated funnel.</h2>
        <ol className="mt-6 border-t border-[#d1cabd]">{[{n:"01",title:"We read your brief",body:"We’ll get a feel for your project and may ask a few follow-up questions."},{n:"02",title:"We suggest a direction",body:"You’ll get a practical recommendation, clear price and realistic timeline."},{n:"03",title:"You decide",body:"No pressure to continue until the scope makes sense to you."}].map((step)=><li key={step.n} className="grid grid-cols-[28px_1fr] gap-3 border-b border-[#d1cabd] py-4"><span className="pt-0.5 text-[9px] font-semibold text-[var(--accent)]">{step.n}</span><div><h3 className="text-[12px] font-semibold">{step.title}</h3><p className="mt-1 text-[10px] leading-5 text-[var(--foreground-tertiary)]">{step.body}</p></div></li>)}</ol>
        <div className="contact-direct"><p>Prefer to reach us directly?</p><a href="mailto:Support@trinetix.in"><Mail/>Support@trinetix.in</a><a href="tel:+917206382346"><Phone/>+91 72063 82346</a><span><Clock3/>Mon–Sat · 9:00–20:00 IST</span><a className="contact-whatsapp" href="https://wa.me/917206382346?text=Hi%20TriNetix%2C%20I%20have%20a%20question%20about%20a%20project." target="_blank" rel="noopener noreferrer"><MessageCircle/>Open WhatsApp <ArrowRight/></a></div>
      </aside>
    </section>
  );
}
