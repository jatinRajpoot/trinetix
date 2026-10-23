import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Code2, Globe, GraduationCap, LifeBuoy, LockKeyhole, Smartphone, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore TriNetix services: business websites, custom web apps, Android apps and student project support.",
};

const offerings = [
  {
    icon: Globe,
    title: "Business websites",
    intro: "Make it easy for the right people to find you, understand what you offer and take the next step.",
    points: ["Custom look and feel for your business", "Mobile-first, quick-loading pages", "Clear service information and calls to action", "Contact, map and WhatsApp integration", "Easy content updates and handover"],
    from: "From ₹3,999",
    href: "/contact?service=WordPress",
    cta: "Plan a website",
  },
  {
    icon: Code2,
    title: "Custom web apps",
    intro: "Replace a clunky manual process or bring your product idea online with a web app that fits your workflow.",
    points: ["Dashboards, portals and internal tools", "Accounts, roles and secure data flows", "APIs and third-party integrations", "Built around your requirements", "Clear documentation and handover"],
    from: "From ₹8,000",
    href: "/contact?service=CustomProject",
    cta: "Discuss a web app",
  },
  {
    icon: Smartphone,
    title: "Android apps",
    intro: "Give customers or your team a useful mobile experience, with the features that actually matter.",
    points: ["App structure and interface design", "Backend and API integration", "Offline and notification features", "Testing on Android devices", "Help preparing for Play Store"],
    from: "From ₹15,000",
    href: "/contact?service=AndroidApp",
    cta: "Discuss an Android app",
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-[var(--background)] pb-16 sm:pb-20">
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-5 pb-12 pt-12 sm:px-7 sm:pb-16 sm:pt-16 lg:px-10">
          <p className="section-kicker"><Zap className="h-4 w-4" /> What we do</p>
          <div className="mt-4 grid gap-5 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <h1 className="max-w-[780px] text-[40px] font-semibold leading-[1.03] tracking-[-.06em] sm:text-[54px]">Digital products made useful, clear and easy to own.</h1>
            <p className="max-w-[510px] text-[14px] leading-7 text-[var(--foreground-tertiary)] sm:text-[15px]">Whether you’re putting your business online or building a custom tool, we help you choose the right approach and make the whole process understandable.</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-2 text-[11px] font-medium text-[var(--foreground-secondary)]">
            {["Clear scope before work", "Built for phones", "Direct communication", "Help after launch"].map((item) => <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--background)] px-3 py-1.5"><Check className="h-3.5 w-3.5 text-[#16805c]" />{item}</span>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pt-10 sm:px-7 sm:pt-14 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-3">
          {offerings.map((offering) => (
            <article key={offering.title} className="flex flex-col rounded-[22px] border border-[var(--border-subtle)] bg-white p-6 shadow-[0_8px_25px_rgba(16,32,51,.04)] sm:p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[var(--accent-soft)] text-[var(--accent)]"><offering.icon className="h-5 w-5" /></span>
              <h2 className="mt-5 text-[20px] font-semibold tracking-[-.04em]">{offering.title}</h2>
              <p className="mt-2 min-h-[70px] text-[13px] leading-6 text-[var(--foreground-tertiary)]">{offering.intro}</p>
              <ul className="mt-5 flex-1 space-y-3 border-t border-[var(--border-subtle)] pt-5 text-[12.5px] leading-5 text-[var(--foreground-secondary)]">
                {offering.points.map((point) => <li key={point} className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#16805c]" /><span>{point}</span></li>)}
              </ul>
              <div className="mt-6 flex items-center justify-between gap-3"><span className="text-[13px] font-semibold text-[var(--foreground)]">{offering.from}</span><Link href={offering.href} className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[var(--accent)] hover:underline">{offering.cta}<ArrowRight className="h-3.5 w-3.5" /></Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-[1280px] px-5 sm:px-7 lg:px-10">
        <div className="grid gap-8 overflow-hidden rounded-[26px] bg-[#10233d] p-6 text-white sm:p-9 lg:grid-cols-[.8fr_1.2fr] lg:p-10">
          <div>
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.1em] text-[#a9c1ff]"><GraduationCap className="h-4 w-4" /> Student project support</p>
            <h2 className="mt-3 text-[28px] font-semibold leading-tight tracking-[-.05em] sm:text-[34px]">Understand the project you submit.</h2>
            <p className="mt-3 max-w-[440px] text-[13px] leading-6 text-white/65">Support for college projects with runnable code, a structured report, diagrams and a clear setup guide.</p>
            <div className="mt-5 flex items-center gap-3"><span className="text-[24px] font-semibold tracking-[-.05em]">From ₹3,000</span><Link href="/pricing#students" className="text-[12px] font-medium text-[#b8cbff] hover:underline">View full details <ArrowRight className="inline h-3.5 w-3.5" /></Link></div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Runnable source code", "Project report", "System and database diagrams", "Setup notes and guidance"].map((item) => <div key={item} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[.06] px-4 py-3 text-[12.5px] text-white/85"><Check className="h-4 w-4 shrink-0 text-[#83e2b6]" />{item}</div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1280px] px-5 sm:px-7 lg:px-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: LockKeyhole, title: "Thoughtful by default", body: "We take care with performance, accessibility and the details people rely on." },
            { icon: LifeBuoy, title: "Help when you need it", body: "We’ll answer questions, share a useful handover and support you after delivery." },
            { icon: Zap, title: "No needless complexity", body: "We pick tools that fit the problem—not the other way around." },
          ].map((item) => <div key={item.title} className="rounded-[18px] border border-[var(--border-subtle)] bg-white p-5"><item.icon className="h-5 w-5 text-[var(--accent)]" /><h3 className="mt-4 text-[14px] font-semibold">{item.title}</h3><p className="mt-1.5 text-[12px] leading-5 text-[var(--foreground-tertiary)]">{item.body}</p></div>)}
        </div>
      </section>

      <div className="mx-auto mt-12 max-w-[1280px] px-5 text-center sm:px-7 lg:px-10"><p className="text-[13px] text-[var(--foreground-tertiary)]">Not sure what you need yet? That’s okay—we can figure it out together.</p><Link href="/contact" className="btn-primary mt-4">Tell us about your idea <ArrowRight className="h-4 w-4" /></Link></div>
    </div>
  );
}
