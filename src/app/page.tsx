import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Globe, Smartphone, Code2, GraduationCap, Shield, Zap, Clock, Sparkles, Leaf } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-[var(--background)]">
      {/* ── HERO — premium editorial, light green ── */}
      <section className="mx-auto max-w-[1200px] px-6 pt-8 pb-10 lg:px-8 lg:pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="rise">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--accent-muted)] bg-white px-3.5 py-1.5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">TriNetix Atelier — Est. 2024</span>
              <span className="hidden h-3 w-px bg-[var(--border-subtle)] sm:block" aria-hidden />
              <span className="hidden items-center gap-1 text-[11px] font-medium text-[var(--foreground-quaternary)] sm:inline-flex"><Leaf className="h-3 w-3 text-[var(--accent-light)]" /> India</span>
            </div>

            <h1 className="mt-6 text-[36px] font-semibold leading-[0.9] tracking-[-0.035em] text-[var(--foreground)] sm:text-[48px] lg:text-[54px]">
              Bespoke websites
              <span className="block font-normal text-[var(--foreground-tertiary)]">& apps, <span className="italic font-light text-[var(--accent)]">crafted</span> to endure.</span>
            </h1>

            <p className="mt-5 max-w-[52ch] text-[16px] leading-7 text-[var(--foreground-tertiary)] sm:text-[17px]">
              We build simple, premium websites and apps that are fast, clear and easy to manage. No clutter, just good work that lasts.
            </p>
            <p className="mt-2 text-[13px] font-medium text-[var(--accent)]">Premium quality, made simple.</p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/pricing" className="btn-primary">
                Explore investment <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/previous-work" className="btn-secondary">
                View selected works
              </Link>
            </div>

            {/* Trust — simple values */}
            <div className="mt-10 border-t border-[var(--border-subtle)] pt-6">
              <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--foreground-quaternary)]"><Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" /> Premium quality · Simple process · Reliable support</p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[13px] font-medium text-[var(--foreground-secondary)]">
                <span className="inline-flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-[var(--accent-light)]" /> Clean, fast code</span>
                <span className="text-[var(--border)]">·</span>
                <span className="inline-flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-[var(--accent-light)]" /> Preview in 48 hours</span>
                <span className="text-[var(--border)]">·</span>
                <span>Support when you need it</span>
              </div>
            </div>
          </div>

          {/* Visual — premium studio card */}
          <div className="rise delay-100 lg:pl-6">
            <div className="card-premium overflow-hidden">
              {/* Window chrome — sage */}
              <div className="flex items-center gap-1.5 border-b border-[var(--border-subtle)] bg-[var(--accent-soft)] px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56] border border-black/10" aria-hidden />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-black/10" aria-hidden />
                <span className="h-3 w-3 rounded-full bg-[#27c93f] border border-black/10" aria-hidden />
                <span className="ml-3 hidden text-[11px] font-medium tracking-[0.02em] text-[var(--foreground-quaternary)] sm:inline">trinetix.in — Atelier Preview</span>
                <span className="ml-auto badge-accent text-[10px]">Live preview</span>
              </div>
              <div className="grid gap-4 p-6 sm:grid-cols-5">
                <div className="sm:col-span-3 space-y-3">
                  <div className="rounded-xl bg-[var(--accent-soft)] border border-[var(--accent-muted)] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">Project timeline</p>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center justify-between text-[13px]"><span className="text-[var(--foreground-tertiary)]">Atelier build</span><span className="font-semibold text-[var(--accent)]">48h</span></div>
                      <div className="h-1.5 rounded-full bg-white border border-[var(--border-subtle)] overflow-hidden"><span className="block h-full w-[72%] bg-[var(--accent)]" /></div>
                      <div className="flex gap-2 text-[11px]"><span className="badge-accent !py-1">Next.js</span><span className="badge !py-1">Flask API</span></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[var(--accent-muted)] bg-white p-3">
                      <p className="text-[11px] text-[var(--foreground-quaternary)]">Performance</p>
                      <p className="text-[22px] font-semibold tracking-[-0.02em] text-[var(--accent)]">98</p>
                      <p className="text-[11px] text-[var(--accent-light)] font-medium">Lighthouse</p>
                    </div>
                    <div className="rounded-xl border border-[var(--accent)] bg-[var(--accent)] p-3 text-white">
                      <p className="text-[11px] text-white/60">Atelier</p>
                      <p className="text-[13px] font-medium leading-tight">Ready for review</p>
                      <p className="mt-2 text-[11px] text-white/60">2.4s · precision tuned</p>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2 rounded-xl bg-[var(--accent)] p-4 text-white flex flex-col">
                  <p className="text-[11px] uppercase tracking-[0.08em] text-white/60">Work with us</p>
                  <div className="mt-3 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[var(--accent)]"><Shield className="h-4 w-4" /></span>
                      <div><p className="text-[13px] font-medium leading-none">Fast & reliable</p><p className="text-[11px] text-white/60">Preview in 48 hours</p></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 border border-white/20"><Clock className="h-4 w-4" /></span>
                      <div><p className="text-[13px] font-medium leading-none">Simple support</p><p className="text-[11px] text-white/60">We reply in 2–4 hours</p></div>
                    </div>
                  </div>
                  <Link href="/contact" className="mt-auto inline-flex items-center gap-1 text-[12px] font-medium text-white hover:text-white/80 pt-6">
                    Contact us <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
              <div className="hairline-gold" />
              <div className="bg-white px-6 py-3 flex items-center justify-between">
                <span className="text-[11px] font-medium text-[var(--foreground-quaternary)]">Crafted, not mass-produced — TriNetix Atelier</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">Sage + Forest</span>
              </div>
            </div>
            <p className="mt-3 text-center text-[11px] text-[var(--foreground-quaternary)]">Every project is checked for quality before it ships.</p>
          </div>
        </div>
      </section>

      {/* ── PROOF STRIP — premium quiet ── */}
      <section className="border-y border-[var(--border-subtle)] bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-6 lg:px-8 flex flex-wrap items-center justify-between gap-6 text-[13px]">
          <div className="flex items-center gap-8">
            <div><span className="block text-[22px] font-semibold tracking-[-0.02em] text-[var(--accent)]">120+</span><span className="text-[var(--foreground-tertiary)]">Crafted deliveries</span></div>
            <div className="hidden h-10 w-px bg-[var(--border-subtle)] sm:block" aria-hidden />
            <div><span className="block text-[22px] font-semibold tracking-[-0.02em] text-[var(--accent)]">&lt;1s</span><span className="text-[var(--foreground-tertiary)]">Avg load time</span></div>
            <div className="hidden h-10 w-px bg-[var(--border-subtle)] sm:block" aria-hidden />
            <div><span className="block text-[22px] font-semibold tracking-[-0.02em] text-[var(--accent)]">4.9/5</span><span className="text-[var(--foreground-tertiary)]">Client regard</span></div>
          </div>
          <Link href="/testimonials" className="text-[13px] font-medium text-[var(--accent)] hover:underline underline-offset-4 inline-flex items-center gap-1">
            Client notes <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* ── SERVICES — premium investment framing ── */}
      <section className="mx-auto max-w-[1200px] px-6 py-14 lg:px-8 lg:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--gold-strong)]">The Atelier Collection</p>
            <h2 className="mt-1 text-[28px] font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-[32px]">Investment in lasting quality</h2>
            <p className="mt-2 max-w-[60ch] text-[14.5px] leading-6 text-[var(--foreground-tertiary)]">Each project is planned clearly and built with care — no middlemen, no messy templates.</p>
          </div>
          <Link href="/pricing" className="btn-secondary !border-[var(--accent-muted)] !text-[var(--accent)]">View investment →</Link>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Featured — sage highlight */}
          <div className="card-premium p-6 flex flex-col">
            <div className="flex items-start justify-between">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent)] text-white shadow-sm"><Globe className="h-4 w-4" aria-hidden /></span>
              <span className="badge-premium">Atelier Choice</span>
            </div>
            <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.015em]">Bespoke WordPress</h3>
            <p className="mt-1 text-[13.5px] leading-5 text-[var(--foreground-tertiary)]">Crafted theme, editorial rhythm, SEO & speed atelier-tuned.</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-[13px] font-medium text-[var(--foreground-quaternary)]">Investment from</span><span className="text-[26px] font-semibold tracking-[-0.02em] text-[var(--accent)]">₹3,999</span>
            </div>
            <p className="text-[11px] text-[var(--foreground-quaternary)]">Commissioned in 3–5 days · 1 month atelier care</p>
            <ul className="mt-4 space-y-2 text-[13.5px] text-[var(--foreground-secondary)]">
              {["Bespoke theme — no template debt", "Core Web Vitals atelier-tuned", "Contact & WhatsApp concierge", "1-month care & handover"].map((f) => (
                <li key={f} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden /><span>{f}</span></li>
              ))}
            </ul>
            <Link href="/contact?service=WordPress" className="btn-primary mt-6 w-full justify-center">Commission website</Link>
          </div>

          <div className="card p-6 flex flex-col">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent-soft)] border border-[var(--accent-muted)] text-[var(--accent)]"><Code2 className="h-4 w-4" /></span>
            <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.015em]">Custom Web Atelier</h3>
            <p className="mt-1 text-[13.5px] leading-5 text-[var(--foreground-tertiary)]">Next.js + Flask APIs, composed for scale & clarity.</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-[13px] font-medium text-[var(--foreground-quaternary)]">Investment from</span><span className="text-[26px] font-semibold tracking-[-0.02em] text-[var(--foreground)]">₹8,000</span>
            </div>
            <p className="text-[11px] text-[var(--foreground-quaternary)]">Scoped to your needs · Built to last</p>
            <ul className="mt-4 space-y-2 text-[13.5px] text-[var(--foreground-secondary)]">
              {["Auth, roles & refined dashboards", "REST APIs & integrations", "Secure & enduring by design"].map((f) => (
                <li key={f} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--foreground-quaternary)]" aria-hidden /><span>{f}</span></li>
              ))}
            </ul>
            <Link href="/contact?service=CustomProject" className="btn-secondary mt-6 w-full justify-center">Scope my commission</Link>
          </div>

          <div className="card p-6 flex flex-col">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-white"><Smartphone className="h-4 w-4 text-[var(--accent)]" /></span>
            <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.015em]">Android Atelier</h3>
            <p className="mt-1 text-[13.5px] leading-5 text-[var(--foreground-tertiary)]">Considered, native-feel — Play Store ready.</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-[13px] font-medium text-[var(--foreground-quaternary)]">Investment from</span><span className="text-[26px] font-semibold tracking-[-0.02em] text-[var(--foreground)]">₹15,000</span>
            </div>
            <p className="text-[11px] text-[var(--foreground-quaternary)]">Including backend sync & deployment</p>
            <ul className="mt-4 space-y-2 text-[13.5px] text-[var(--foreground-secondary)]">
              {["Material & iOS refinement", "Push & offline grace", "Backend & store handover"].map((f) => (
                <li key={f} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--foreground-quaternary)]" aria-hidden /><span>{f}</span></li>
              ))}
            </ul>
            <Link href="/contact?service=AndroidApp" className="btn-secondary mt-6 w-full justify-center">Commission app</Link>
          </div>
        </div>

        {/* Academic — premium but accessible */}
        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-[var(--accent-muted)] bg-[var(--accent-soft)] p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <span className="hidden h-10 w-10 items-center justify-center rounded-xl bg-white border border-[var(--border-subtle)] shadow-sm sm:inline-flex"><GraduationCap className="h-5 w-5 text-[var(--accent)]" aria-hidden /></span>
            <div>
              <h3 className="text-[15px] font-semibold tracking-[-0.01em]">Academic Atelier — Project + Report</h3>
              <p className="mt-1 max-w-[62ch] text-[13.5px] leading-5 text-[var(--foreground-tertiary)]">Complete source, IEEE report, ERDs, deployment & viva prep — held to the same atelier standard. Express 24–48h priority available.</p>
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-start gap-2 sm:items-end">
            <span className="text-[22px] font-semibold tracking-[-0.02em] text-[var(--accent)]">₹3,000<span className="text-[11px] font-medium text-[var(--foreground-quaternary)]"> · investment</span></span>
            <Link href="/pricing#students" className="btn-secondary shrink-0 bg-white">Explore academic →</Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="border-y border-[var(--border-subtle)] bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-12 lg:px-8 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[380px_1fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">How we work</p>
              <h2 className="mt-3 text-[24px] font-semibold tracking-[-0.02em]">Simple and clear.</h2>
              <p className="mt-2 text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">We keep it simple: clear plan, live preview, and support until your site is live.</p>
              <Link href="/about" className="mt-5 inline-flex text-[13.5px] font-medium text-[var(--accent)] hover:underline underline-offset-4">Learn more about us →</Link>
            </div>
            <ol className="grid gap-0 divide-y divide-[var(--border-subtle)] rounded-2xl border border-[var(--border-subtle)] overflow-hidden bg-[var(--surface-subtle)]">
              {[
                { n: "01", t: "Plan & proposal", d: "We make a simple 1-page plan with clear price and timeline.", icon: Zap },
                { n: "02", t: "Build & preview", d: "You get a live link to see progress — not just screenshots.", icon: Code2 },
                { n: "03", t: "Launch & support", d: "We launch, train you, and stay for 30 days if you need help.", icon: Clock },
              ].map((s) => (
                <li key={s.n} className="flex gap-5 bg-white p-6">
                  <span className="text-[12px] font-semibold tracking-[0.08em] text-[var(--accent)]/60">{s.n}</span>
                  <div className="flex-1">
                    <h3 className="text-[14.5px] font-semibold">{s.t}</h3>
                    <p className="mt-1 text-[13.5px] leading-5 text-[var(--foreground-tertiary)]">{s.d}</p>
                  </div>
                  <s.icon className="hidden h-5 w-5 text-[var(--accent)]/30 sm:block" aria-hidden />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── CTA — premium forest ── */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 lg:px-8">
        <div className="rounded-2xl bg-[var(--accent)] px-8 py-10 text-white sm:px-10 sm:py-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent pointer-events-none" aria-hidden />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl pointer-events-none" aria-hidden />
          <div className="relative">
            <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/70"><Leaf className="h-3.5 w-3.5" /> Atelier availability</p>
            <h2 className="mt-2 text-[24px] font-semibold tracking-[-0.02em] sm:text-[28px]">Begin your commission</h2>
            <p className="mt-2 max-w-[52ch] text-[14px] leading-6 text-white/70">Whether a site, app, or academic piece — we respond within hours with a considered proposal.</p>
          </div>
          <div className="relative flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-colors">
              Get proposal <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-[14px] font-medium text-white hover:bg-white/10 transition-colors">
              View investment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
