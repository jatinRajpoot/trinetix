import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, CircleHelp, Code2, GraduationCap, Globe2, Smartphone, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Clear starting prices for business websites, custom web apps, Android apps and student projects. Get a tailored quote from TriNetix.",
};

const businessServices = [
  {
    title: "Business website",
    price: "₹3,999",
    summary: "For local businesses and growing teams who need a professional online presence.",
    icon: Globe2,
    href: "/contact?service=WordPress",
    cta: "Plan my website",
    popular: true,
    features: ["Custom design tailored to your business", "Mobile-friendly pages", "Contact form and WhatsApp link", "SEO-ready page structure", "Training and 30 days of support"],
  },
  {
    title: "Custom web app",
    price: "₹8,000",
    summary: "For teams that need a custom workflow, dashboard, portal or web-based tool.",
    icon: Code2,
    href: "/contact?service=CustomProject",
    cta: "Discuss my app",
    features: ["Scope based on your requirements", "Frontend, database and API setup", "Accounts, roles and integrations", "Secure and maintainable build", "Handover documentation"],
  },
  {
    title: "Android app",
    price: "₹15,000",
    summary: "For businesses with a clear idea for a dedicated Android experience.",
    icon: Smartphone,
    href: "/contact?service=AndroidApp",
    cta: "Discuss my app",
    features: ["A clean, intuitive app experience", "Backend connection where needed", "Offline and notification options", "Play Store-ready preparation", "Support through handover"],
  },
];

export default function PricingPage() {
  return (
    <div className="bg-[var(--background)] pb-16 sm:pb-20">
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-5 pb-12 pt-12 text-center sm:px-7 sm:pb-16 sm:pt-16 lg:px-10">
          <p className="section-kicker justify-center"><Sparkles className="h-4 w-4" /> Straightforward pricing</p>
          <h1 className="mx-auto mt-4 max-w-[820px] text-[38px] font-semibold leading-[1.04] tracking-[-.06em] sm:text-[52px]">Know what it costs.<br className="hidden sm:block" /> Know what you’re getting.</h1>
          <p className="mx-auto mt-4 max-w-[600px] text-[14px] leading-7 text-[var(--foreground-tertiary)] sm:text-[16px]">These are clear starting prices, not a one-size-fits-all promise. We’ll confirm the exact scope, price and timeline with you before work begins.</p>
          <Link href="/contact" className="btn-primary mt-6">Get a tailored quote <ArrowRight className="h-4 w-4" /></Link>
          <p className="mt-3 text-[11.5px] text-[var(--foreground-quaternary)]">No obligation to proceed. No hidden add-ons.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pt-10 sm:px-7 sm:pt-14 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-3">
          {businessServices.map((service) => (
            <article key={service.title} className={`relative flex flex-col rounded-[22px] border bg-white p-6 sm:p-7 ${service.popular ? "border-[var(--accent)] shadow-[0_15px_40px_rgba(36,89,211,.11)]" : "border-[var(--border-subtle)] shadow-[0_8px_25px_rgba(16,32,51,.04)]"}`}>
              {service.popular && <span className="absolute right-5 top-5 rounded-full bg-[var(--accent)] px-3 py-1 text-[10px] font-semibold text-white">A good place to start</span>}
              <span className={`flex h-11 w-11 items-center justify-center rounded-[14px] ${service.popular ? "bg-[var(--accent)] text-white" : "bg-[var(--accent-soft)] text-[var(--accent)]"}`}><service.icon className="h-5 w-5" /></span>
              <h2 className="mt-5 text-[20px] font-semibold tracking-[-.04em]">{service.title}</h2>
              <p className="mt-2 min-h-[48px] max-w-[360px] text-[13px] leading-6 text-[var(--foreground-tertiary)]">{service.summary}</p>
              <div className="mt-5 border-b border-[var(--border-subtle)] pb-5">
                <p className="text-[11px] font-medium text-[var(--foreground-quaternary)]">Projects start at</p>
                <p className="mt-0.5 text-[32px] font-semibold tracking-[-.06em] text-[var(--foreground)]">{service.price}<span className="ml-1 text-[12px] font-medium tracking-normal text-[var(--foreground-quaternary)]">INR</span></p>
              </div>
              <ul className="mt-5 flex-1 space-y-3 text-[12.5px] leading-5 text-[var(--foreground-secondary)]">
                {service.features.map((feature) => <li key={feature} className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#17865d]" /><span>{feature}</span></li>)}
              </ul>
              <Link href={service.href} className={`${service.popular ? "btn-primary" : "btn-secondary"} mt-7 w-full`}>{service.cta} <ArrowRight className="h-4 w-4" /></Link>
            </article>
          ))}
        </div>
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[var(--border-subtle)] bg-white px-5 py-4 sm:items-center sm:px-6">
          <CircleHelp className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)] sm:mt-0" />
          <p className="text-[12.5px] leading-5 text-[var(--foreground-tertiary)]"><span className="font-semibold text-[var(--foreground)]">What affects the final price?</span> Number of pages, content support, integrations, custom features and your timeline. We’ll explain any cost clearly before you decide.</p>
        </div>
      </section>

      <section id="students" className="mx-auto mt-16 max-w-[1280px] scroll-mt-24 px-5 sm:px-7 lg:px-10">
        <div className="overflow-hidden rounded-[26px] border border-[#e9d8bd] bg-white shadow-[0_12px_35px_rgba(48,42,32,.05)]">
          <div className="grid lg:grid-cols-[.9fr_1.1fr]">
            <div className="bg-[#fff8ed] p-6 sm:p-9">
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.1em] text-[#9b6627]"><GraduationCap className="h-4 w-4" /> For students</p>
              <h2 className="mt-3 text-[28px] font-semibold leading-tight tracking-[-.05em] sm:text-[34px]">Make your final-year project easier to present.</h2>
              <p className="mt-3 text-[13px] leading-6 text-[var(--foreground-tertiary)]">Get practical project support, clear documentation and help understanding how your work fits together.</p>
              <p className="mt-6 text-[12px] text-[var(--foreground-quaternary)]">Project + report starts at</p>
              <p className="text-[33px] font-semibold tracking-[-.055em] text-[#895b22]">₹3,000</p>
              <Link href="/contact?type=student" className="btn-primary mt-4 !bg-[#935e20] !border-[#935e20] hover:!bg-[#764b18]">Ask about a student project <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="p-6 sm:p-9">
              <h3 className="text-[15px] font-semibold">What can be included</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {["Runnable project source code", "Project report and diagrams", "Database design and setup guide", "Help understanding your implementation"].map((item) => <div key={item} className="flex gap-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--background)] px-3.5 py-3 text-[12.5px] leading-5 text-[var(--foreground-secondary)]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#17865d]" />{item}</div>)}
              </div>
              <div className="mt-5 rounded-xl border border-[#efe0c8] bg-[#fffaf3] p-4">
                <p className="text-[12px] font-semibold text-[#80551f]">Need a shorter turnaround?</p>
                <p className="mt-1 text-[12px] leading-5 text-[var(--foreground-tertiary)]">Priority delivery may be available for an additional ₹1,000. Ask us first so we can confirm a realistic deadline.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-[900px] px-5 sm:px-7 lg:px-10">
        <div className="rounded-[22px] bg-[#10233d] px-6 py-7 text-white sm:flex sm:items-center sm:justify-between sm:gap-8 sm:px-8">
          <div><h2 className="text-[20px] font-semibold tracking-[-.04em]">Not sure which option fits?</h2><p className="mt-1 text-[12.5px] text-white/65">Tell us what you’re trying to achieve. We’ll help you find the right starting point.</p></div>
          <Link href="/contact" className="mt-5 inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-[#10233d] hover:bg-blue-50 sm:mt-0">Talk it through <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </div>
  );
}
