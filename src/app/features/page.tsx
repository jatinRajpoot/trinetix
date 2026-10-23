import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Business websites, custom web apps, Android apps and student project support—with clear scope and practical handover.",
};

const detail = [
  { number: "01", id: "business-websites", title: "Business websites", start: "From ₹3,999", image: "/images/doctor-portrait.jpg", alt: "Doctor portrait, an example of a business that needs a clear online presence", intro: "Your website should answer the important questions before a customer needs to ask. We bring your services, proof and contact options together in one clear place.", points: ["Custom design shaped around your business", "Mobile-friendly pages and clear calls to action", "Contact forms, maps and WhatsApp links", "SEO-ready structure and a useful handover"], link: "/contact?service=WordPress", action: "Plan my website" },
  { number: "02", id: "custom-web-apps", title: "Custom web apps", start: "From ₹8,000", image: "/images/digital-workspace.jpg", alt: "Developer workspace with an app open on a laptop", intro: "When off-the-shelf tools don’t fit, a small custom app can make a clunky process easier for your team or your customers.", points: ["Customer portals, dashboards and booking flows", "Accounts, permissions and data handling", "APIs and third-party integrations", "Built around a clear, agreed scope"], link: "/contact?service=CustomProject", action: "Discuss a web app" },
  { number: "03", id: "android-apps", title: "Android apps", start: "From ₹15,000", image: "/images/healthcare-clinic.jpg", alt: "Person using a phone as part of a healthcare interaction", intro: "A useful app starts with a job worth doing. We’ll help shape the experience, build the core features and support you through release.", points: ["Product flow and interface design", "Backend and API integration", "Offline and notification features where useful", "Testing and Play Store preparation"], link: "/contact?service=AndroidApp", action: "Talk about an app" },
];

export default function FeaturesPage() {
  return (
    <div className="bg-[var(--background)]">
      <section className="relative overflow-hidden bg-[#20241f] text-[#f4f1ea]">
        <div className="mx-auto grid max-w-[1440px] gap-9 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1fr_.82fr] lg:items-end lg:px-12 lg:py-20">
          <div><p className="section-kicker !text-[#ef8b6e]">A good fit, not a bigger package</p><h1 className="mt-5 max-w-[790px] text-[45px] font-medium leading-[.97] tracking-[-.075em] sm:text-[62px]">Build the thing your business actually needs.</h1><p className="mt-5 max-w-[570px] text-[13px] leading-7 text-white/65 sm:text-[15px]">Websites, web apps and mobile apps designed around your customers and your day-to-day work. Clear goals first; sensible technology second.</p><Link href="/contact" className="mt-7 inline-flex items-center gap-3 border border-[#ef8b6e] bg-[#ef8b6e] px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[.1em] text-[#20241f] transition-colors hover:border-white hover:bg-white">Tell us what you need <ArrowUpRight className="h-4 w-4" /></Link></div>
          <div className="relative aspect-[1.45/1] overflow-hidden bg-[#5b5b50]"><Image src="/images/digital-workspace.jpg" alt="Laptop and tools on a desk in a bright workspace" fill priority sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" /><p className="absolute bottom-4 left-4 text-[9px] font-medium uppercase tracking-[.12em] text-white/80">Build with care, from the first conversation.</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid gap-3 border-t border-[var(--border)] pt-5 sm:grid-cols-[.55fr_1.45fr] sm:gap-10"><p className="section-kicker">How we help</p><p className="max-w-[740px] text-[22px] font-medium leading-tight tracking-[-.045em] sm:text-[31px]">From your first web presence to a tool that removes friction, we make digital work feel more straightforward.</p></div>
        <div className="mt-12 border-t border-[var(--border)]">
          {detail.map((service, index) => <article id={service.id} key={service.id} className={`grid scroll-mt-28 gap-7 border-b border-[var(--border)] py-8 sm:py-10 lg:grid-cols-2 lg:gap-14 ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
            <div className="relative min-h-[240px] overflow-hidden bg-[#ded9ce] sm:min-h-[320px]"><Image src={service.image} alt={service.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-[1.025]" /><span className="absolute left-4 top-4 bg-[#f4f1ea] px-3 py-2 text-[9px] font-semibold uppercase tracking-[.1em]">{service.number} / Service</span></div>
            <div className="flex flex-col justify-center lg:py-4"><div className="flex flex-wrap items-center justify-between gap-3"><p className="section-kicker">{service.number} — {service.start}</p><span className="text-[9px] font-medium uppercase tracking-[.12em] text-[var(--foreground-quaternary)]">Scope confirmed before work</span></div><h2 className="mt-4 text-[34px] font-medium leading-[1.02] tracking-[-.065em] sm:text-[43px]">{service.title}</h2><p className="mt-4 max-w-[500px] text-[13px] leading-7 text-[var(--foreground-tertiary)]">{service.intro}</p><ul className="mt-5 grid gap-x-5 gap-y-2.5 text-[11px] text-[var(--foreground-secondary)] sm:grid-cols-2">{service.points.map((point) => <li key={point} className="flex gap-2"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent)]" />{point}</li>)}</ul><Link href={service.link} className="group mt-7 inline-flex w-fit items-center gap-3 border-b border-[var(--accent)] pb-1.5 text-[10px] font-semibold uppercase tracking-[.1em]">{service.action}<ArrowRight className="h-3.5 w-3.5 text-[var(--accent)] transition-transform group-hover:translate-x-1" /></Link></div>
          </article>)}
        </div>
      </section>

      <section className="mx-5 mb-14 grid gap-0 bg-[#e9e4da] sm:mx-8 lg:mx-12 lg:grid-cols-[.8fr_1.2fr]">
        <div className="p-6 sm:p-9 lg:p-11"><p className="section-kicker">For students</p><h2 className="mt-3 text-[30px] font-medium leading-[1.03] tracking-[-.06em] sm:text-[40px]">Build it. Understand it. Present it.</h2><p className="mt-4 max-w-[400px] text-[12px] leading-6 text-[var(--foreground-tertiary)]">Practical support for college projects: runnable code, a structured report, diagrams and guidance to help you understand your work.</p><p className="mt-5 text-[10px] font-medium uppercase tracking-[.1em] text-[var(--foreground-tertiary)]">Project + report from</p><p className="text-[28px] font-medium tracking-[-.06em]">₹3,000</p><Link href="/contact?type=student" className="group mt-4 inline-flex items-center gap-3 border-b border-[var(--accent)] pb-1 text-[10px] font-semibold uppercase tracking-[.1em] text-[var(--accent)]">Ask about student support <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></Link></div>
        <div className="grid grid-cols-2 border-t border-[#d4cec2] lg:border-l lg:border-t-0">{["Runnable source code", "Project report", "System & database diagrams", "Setup guide and guidance"].map((item, index) => <div key={item} className={`flex min-h-[110px] flex-col justify-between border-[#d4cec2] p-4 sm:min-h-[150px] sm:p-6 ${index % 2 === 0 ? "border-r" : ""} ${index < 2 ? "border-b" : ""}`}><span className="text-[9px] font-semibold tracking-[.1em] text-[var(--accent)]">0{index + 1}</span><span className="max-w-[180px] text-[13px] font-medium leading-snug tracking-[-.02em]">{item}</span></div>)}</div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-20 sm:px-8 lg:px-12"><div className="flex flex-col gap-4 border-t border-[var(--border)] pt-5 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-[640px] text-[17px] font-medium tracking-[-.035em]">Not sure which route to take? Describe the problem. We’ll help you find the smallest useful solution.</p><Link href="/contact" className="group inline-flex w-fit items-center gap-3 bg-[var(--foreground)] px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[.1em] text-white hover:bg-[var(--accent)]">Talk to a person <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></Link></div></section>
    </div>
  );
}
