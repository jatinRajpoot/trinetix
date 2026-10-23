import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, MoveUpRight } from "lucide-react";
import WorkCarousel from "@/components/WorkCarousel";

const questions = [
  { q: "What does a website cost?", a: "Business websites start at ₹3,999. The final quote depends on the pages, content and features you need. We agree the scope and price with you before work starts." },
  { q: "How long does a project take?", a: "A typical business website takes around 3–5 days once we have the content. Larger builds take longer; we’ll give you a realistic timeline up front." },
  { q: "Will I be able to update the website?", a: "Yes. We build with everyday updates in mind and walk you through the handover so you can manage your content with confidence." },
  { q: "What if I don’t know exactly what I need?", a: "That’s a normal place to start. Tell us what’s not working or what you want to achieve, and we’ll help you choose a sensible next step." },
];

const services = [
  { n: "01", name: "Business websites", detail: "Turn a first visit into a confident next step—with a site that explains your value and makes it easy to reach you.", price: "From ₹3,999", href: "/features#business-websites" },
  { n: "02", name: "Custom web apps", detail: "Bring a product idea, customer portal or clunky internal process into a useful, well-made web app.", price: "From ₹8,000", href: "/features#custom-web-apps" },
  { n: "03", name: "Android apps", detail: "Make the mobile experience your customers or team need, with a clear plan from first screen to release.", price: "From ₹15,000", href: "/features#android-apps" },
];

export default function HomePage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative overflow-hidden bg-[#f4f1ea]">
        <div className="mx-auto grid max-w-[1440px] gap-9 px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:gap-12 lg:px-12 lg:pb-20 lg:pt-16">
          <div className="relative z-10 max-w-[720px] rise">
            <h1 className="mt-0 max-w-[760px] text-[46px] font-medium leading-[.98] tracking-[-.075em] sm:text-[62px] lg:text-[76px]">Make it easy for customers <span className="font-serif italic font-normal text-[var(--accent)]">to choose you.</span></h1>
            <p className="mt-6 max-w-[550px] text-[14px] leading-7 text-[var(--foreground-secondary)] sm:text-[16px] sm:leading-8">We plan, design and build clear, fast websites and apps for real businesses. A better first impression, a smoother customer journey, and a team that stays with you after launch.</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn-primary min-h-[48px] px-5">Talk through your project <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/previous-work" className="inline-flex min-h-[48px] items-center gap-2 border-b border-[var(--foreground)] px-1 text-[12px] font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">See the work <MoveUpRight className="h-3.5 w-3.5" /></Link>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#d5d0c7] pt-4 text-[10px] font-medium uppercase tracking-[.06em] text-[var(--foreground-tertiary)]">
              <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-[var(--accent)]" /> Websites from ₹3,999</span><span className="hidden h-3 w-px bg-[#c9c3b8] sm:block" /><span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-[var(--accent)]" /> Clear quote before work starts</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[650px] lg:ml-auto rise delay-100">
            <div className="relative aspect-[1.1/1] overflow-hidden bg-[#d4d3cb] sm:aspect-[1.2/1]">
              <Image src="/images/digital-workspace.jpg" alt="A bright, practical workspace with a website being built on screen" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="hero-photo object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191d18]/65 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white sm:bottom-7 sm:left-7 sm:right-7">
                <p className="max-w-[330px] text-[20px] font-medium leading-tight tracking-[-.045em] sm:text-[26px]">Help the right people take the next step.</p>
                <Link href="/features" className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/60 text-white transition-colors hover:bg-white hover:text-[var(--foreground)]" aria-label="Explore services"><ArrowUpRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        </div>
        <a href="#what-good-looks-like" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[9px] font-semibold uppercase tracking-[.14em] text-[var(--foreground-quaternary)] lg:flex">Scroll to explore <ArrowDown className="h-3 w-3" /></a>
      </section>

      <div className="overflow-hidden border-y border-[#d9d4ca] bg-[#eeeae1] py-3.5" aria-label="Services">
        <div className="service-ticker flex w-max items-center gap-7 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[.16em] text-[var(--foreground-tertiary)]">
          {Array.from({ length: 2 }).map((_, i) => <span key={i} className="flex items-center gap-7" aria-hidden={i === 1}><span>Business websites</span><span className="h-1 w-1 rounded-full bg-[var(--accent)]"/><span>Custom web apps</span><span className="h-1 w-1 rounded-full bg-[var(--accent)]"/><span>Android applications</span><span className="h-1 w-1 rounded-full bg-[var(--accent)]"/><span>Student project support</span><span className="h-1 w-1 rounded-full bg-[var(--accent)]"/></span>)}
        </div>
      </div>

      <section id="what-good-looks-like" className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="mt-0 max-w-[470px] text-[34px] font-medium leading-[1.04] tracking-[-.065em] sm:text-[46px]">Your website is often the first conversation you have with a customer.</h2>
          </div>
          <div className="lg:pt-2">
            <p className="max-w-[620px] text-[14px] leading-7 text-[var(--foreground-tertiary)] sm:text-[15px]">Before someone calls, books or buys, they want to know if you can help them. We shape every page around the questions real people ask—not around a pile of features.</p>
            <div className="mt-7 grid border-t border-[var(--border)] sm:grid-cols-3">
              {[{ n: "01", title: "Understand", body: "Say clearly what you do, who it’s for and what makes it useful." }, { n: "02", title: "Trust", body: "Show the details and proof people need to feel confident." }, { n: "03", title: "Take action", body: "Make calling, booking or asking a question feel effortless." }].map((item) => <div key={item.n} className="border-b border-[var(--border)] py-5 sm:border-b-0 sm:pr-5 sm:first:pr-6 sm:odd:border-r sm:odd:border-[var(--border)] sm:even:px-5"><p className="text-[9px] font-semibold tracking-[.13em] text-[var(--accent)]">{item.n}</p><h3 className="mt-2 text-[15px] font-semibold tracking-[-.03em]">{item.title}</h3><p className="mt-1.5 max-w-[235px] text-[11px] leading-5 text-[var(--foreground-tertiary)]">{item.body}</p></div>)}</div>
          </div>
        </div>
      </section>

      <section className="bg-[#20241f] py-14 text-[#f4f1ea] sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div><h2 className="mt-0 max-w-[690px] text-[34px] font-medium leading-[1.04] tracking-[-.065em] sm:text-[46px]">A few things we’ve put out into the world.</h2></div>
            <Link href="/previous-work" className="group inline-flex w-fit items-center gap-2 border-b border-white/35 pb-1 text-[10px] font-semibold uppercase tracking-[.1em] text-white/80 hover:border-[#ef8b6e] hover:text-[#ef8b6e]">All projects <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></Link>
          </div>
          <WorkCarousel />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="mt-0 max-w-[410px] text-[36px] font-medium leading-[1.02] tracking-[-.07em] sm:text-[48px]">One studio. The right digital help.</h2>
            <p className="mt-4 max-w-[350px] text-[13px] leading-6 text-[var(--foreground-tertiary)]">Start with your goal. We’ll help you choose the work that will get you there—nothing more complicated than it needs to be.</p>
            <Link href="/features" className="mt-5 inline-flex items-center gap-2 border-b border-[var(--accent)] pb-1 text-[10px] font-semibold uppercase tracking-[.1em] text-[var(--accent)]">Explore services <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>
          <div className="border-t border-[var(--border)]">
            {services.map((service) => <article key={service.n} className="group grid gap-3 border-b border-[var(--border)] py-6 sm:grid-cols-[50px_1fr_auto] sm:items-start sm:gap-6 sm:py-7"><span className="text-[10px] font-semibold tracking-[.1em] text-[var(--accent)]">{service.n}</span><div><Link href={service.href} className="group/title inline-flex items-center gap-2 text-[21px] font-medium tracking-[-.05em] sm:text-[25px]">{service.name}<ArrowUpRight className="h-4 w-4 text-[var(--accent)] opacity-0 transition-all group-hover/title:-translate-y-0.5 group-hover/title:translate-x-0.5 group-hover/title:opacity-100" /></Link><p className="mt-2 max-w-[560px] text-[12px] leading-6 text-[var(--foreground-tertiary)]">{service.detail}</p></div><div className="flex items-center justify-between gap-4 sm:justify-end"><span className="text-[11px] font-medium text-[var(--foreground-tertiary)]">{service.price}</span><Link href={service.href} className="flex h-8 w-8 items-center justify-center border border-[var(--border)] text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white" aria-label={`Learn about ${service.name}`}><ArrowRight className="h-3.5 w-3.5" /></Link></div></article>)}
            <article className="grid gap-3 border-b border-[var(--border)] py-6 sm:grid-cols-[50px_1fr_auto] sm:items-start sm:gap-6 sm:py-7"><span className="text-[10px] font-semibold tracking-[.1em] text-[var(--accent)]">04</span><div><Link href="/pricing#students" className="text-[21px] font-medium tracking-[-.05em] sm:text-[25px]">Student project support</Link><p className="mt-2 max-w-[560px] text-[12px] leading-6 text-[var(--foreground-tertiary)]">Practical help with working code, project documentation and a handover you can understand.</p></div><div className="flex items-center justify-between gap-4 sm:justify-end"><span className="text-[11px] font-medium text-[var(--foreground-tertiary)]">From ₹3,000</span><Link href="/pricing#students" className="flex h-8 w-8 items-center justify-center border border-[var(--border)] text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white" aria-label="View student project support"><ArrowRight className="h-3.5 w-3.5" /></Link></div></article>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d5d0c6] bg-[#ebe7de]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <div><h2 className="mt-0 max-w-[430px] text-[34px] font-medium leading-[1.04] tracking-[-.065em] sm:text-[44px]">A simple process, with you in the loop.</h2><p className="mt-4 max-w-[360px] text-[12px] leading-6 text-[var(--foreground-tertiary)]">No long mystery phase. No vanishing act. You’ll know what we need, what happens next and what you’re paying for.</p></div>
            <ol className="border-t border-[#cfc9bd]">{[{n:"01",title:"Tell us what’s not working",body:"A short conversation to understand your business, audience and goals."},{n:"02",title:"Agree the plan",body:"A clear scope, fixed quote and sensible timeline before any build begins."},{n:"03",title:"Review and launch",body:"See the work in progress, give feedback and get support through handover."}].map((s)=><li key={s.n} className="grid grid-cols-[42px_1fr] gap-4 border-b border-[#cfc9bd] py-5 sm:grid-cols-[58px_1fr] sm:gap-6"><span className="pt-1 text-[10px] font-semibold text-[var(--accent)]">{s.n}</span><div><h3 className="text-[16px] font-medium tracking-[-.03em]">{s.title}</h3><p className="mt-1 text-[12px] leading-5 text-[var(--foreground-tertiary)]">{s.body}</p></div></li>)}</ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
          <div><h2 className="mt-0 max-w-[410px] text-[34px] font-medium leading-[1.04] tracking-[-.065em] sm:text-[44px]">A few things you might be wondering.</h2><p className="mt-3 max-w-[360px] text-[12px] leading-6 text-[var(--foreground-tertiary)]">If your question isn’t here, send us a note. We’re happy to talk it through.</p><Link href="/faq" className="mt-4 inline-flex items-center gap-2 border-b border-[var(--accent)] pb-1 text-[10px] font-semibold uppercase tracking-[.1em] text-[var(--accent)]">Every answer <ArrowRight className="h-3.5 w-3.5" /></Link></div>
          <div className="border-t border-[var(--border)]">{questions.map((item)=><details key={item.q} className="group border-b border-[var(--border)]"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-[14px] font-medium tracking-[-.025em] [&::-webkit-details-marker]:hidden">{item.q}<ChevronDown className="h-4 w-4 shrink-0 text-[var(--accent)] transition-transform group-open:rotate-180" /></summary><p className="max-w-[680px] pb-5 pr-8 text-[12px] leading-6 text-[var(--foreground-tertiary)]">{item.a}</p></details>)}</div>
        </div>
      </section>

      <section className="mx-5 mb-16 bg-[var(--accent)] text-white sm:mx-8 lg:mx-12">
        <div className="mx-auto grid max-w-[1440px] gap-7 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-end lg:px-14 lg:py-16">
          <div><h2 className="mt-0 max-w-[760px] text-[37px] font-medium leading-[.98] tracking-[-.065em] sm:text-[55px]">What should your website help you do?</h2><p className="mt-4 max-w-[570px] text-[13px] leading-6 text-white/80">Tell us a little about your business. We’ll come back with the right questions and a clear way forward.</p></div>
          <Link href="/contact" className="group inline-flex w-fit items-center gap-7 border border-white/70 px-5 py-4 text-[10px] font-semibold uppercase tracking-[.1em] transition-colors hover:bg-white hover:text-[var(--accent)]">Let’s talk <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
        </div>
      </section>
    </div>
  );
}
