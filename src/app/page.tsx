import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Code2,
  Globe,
  Layers,
  LifeBuoy,
  MessageCircle,
  MousePointerClick,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

const projects = [
  {
    name: "Keshav Hospital",
    sector: "Healthcare",
    url: "https://keshavhospitalkharkhoda.in",
    description: "A clear, patient-friendly website that makes services, doctors and urgent contact details easy to find.",
    initials: "KH",
    style: "from-sky-100 to-blue-50 text-blue-800",
  },
  {
    name: "Roshni Healthcare",
    sector: "Healthcare",
    url: "https://roshnihealthcaregohana.com",
    description: "A practical digital home for clinic services, patient guidance and enquiries.",
    initials: "RH",
    style: "from-emerald-100 to-teal-50 text-emerald-800",
  },
  {
    name: "Nav Durga Group",
    sector: "Real estate",
    url: "https://navdurgagrouprealestatepvtltd.com",
    description: "A professional property platform built to present projects and make enquiries simple.",
    initials: "ND",
    style: "from-amber-100 to-orange-50 text-amber-800",
  },
];

const services = [
  {
    title: "Business websites",
    description: "Turn first impressions into enquiries with a custom, mobile-ready website that is easy to update.",
    price: "From ₹3,999",
    icon: Globe,
    href: "/contact?service=WordPress",
    points: ["Custom design", "SEO-ready foundations", "Contact & WhatsApp links"],
    featured: true,
  },
  {
    title: "Custom web apps",
    description: "Build the tools your business needs—from customer portals to dashboards and booking flows.",
    price: "From ₹8,000",
    icon: Code2,
    href: "/contact?service=CustomProject",
    points: ["Designed around your workflow", "APIs and integrations", "Secure, scalable foundations"],
  },
  {
    title: "Android apps",
    description: "Give your customers a useful, intuitive mobile experience with an app built for Android.",
    price: "From ₹15,000",
    icon: Smartphone,
    href: "/contact?service=AndroidApp",
    points: ["Thoughtful app design", "Backend and integrations", "Launch support"],
  },
];

const faqs = [
  { question: "How much does a website cost?", answer: "Business websites start at ₹3,999. The final quote depends on your pages and features, and we confirm it before any work begins." },
  { question: "How long will my project take?", answer: "A typical business website takes around 3–5 days once we have the content. Larger websites and custom apps take longer; we’ll agree on a realistic timeline with you." },
  { question: "Will I be able to update the site myself?", answer: "Yes. We build with day-to-day editing in mind and include a handover so you know how to update the content." },
  { question: "What happens after I contact you?", answer: "We’ll ask a few questions, recommend the right approach, and send a clear scope, price and timeline. There’s no obligation to proceed." },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-[var(--background)]">
      <section className="relative bg-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute -right-52 -top-60 h-[650px] w-[650px] rounded-full bg-[#eaf1ff] blur-3xl" />
          <div className="absolute -left-48 top-72 h-[400px] w-[400px] rounded-full bg-[#f0f6ff] blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-5 pb-16 pt-12 sm:px-7 sm:pb-20 sm:pt-16 lg:grid-cols-[1fr_1.03fr] lg:gap-12 lg:px-10 lg:pb-24 lg:pt-20">
          <div className="rise max-w-[650px]">
            <p className="section-kicker"><span className="h-2 w-2 rounded-full bg-[#31ad83] shadow-[0_0_0_4px_rgba(49,173,131,.13)]" /> Websites & apps for growing businesses</p>
            <h1 className="mt-5 text-[42px] font-semibold leading-[1.04] tracking-[-.06em] text-[var(--foreground)] sm:text-[54px] lg:text-[65px]">
              A website that earns attention <span className="text-[var(--accent)]">and turns it into business.</span>
            </h1>
            <p className="mt-5 max-w-[550px] text-[16px] leading-7 text-[var(--foreground-tertiary)] sm:text-[17px] sm:leading-8">
              We design and build fast, clear websites and apps that make it easier for customers to choose you. A real person, a clear plan, and support from start to launch.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-primary min-h-[50px] px-6 text-[14px]">Get a free project plan <ArrowRight className="h-4 w-4" aria-hidden /></Link>
              <Link href="/previous-work" className="btn-secondary min-h-[50px] px-6">See our work <ArrowUpRight className="h-4 w-4" aria-hidden /></Link>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-[var(--foreground-tertiary)]">
              <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-[#1c946b]" /> Websites from ₹3,999</span>
              <span className="hidden h-3.5 w-px bg-[var(--border)] sm:block" />
              <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-[#1c946b]" /> Clear quote before we start</span>
            </div>
            <div className="mt-9 flex items-center gap-3 border-t border-[var(--border-subtle)] pt-5">
              <div className="flex -space-x-2" aria-hidden>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-[9px] font-bold text-blue-800">KH</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-emerald-100 text-[9px] font-bold text-emerald-800">RH</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-amber-100 text-[9px] font-bold text-amber-800">ND</span>
              </div>
              <p className="text-[12px] leading-5 text-[var(--foreground-tertiary)]"><span className="font-semibold text-[var(--foreground-secondary)]">Built for real businesses.</span><br className="sm:hidden" /> Explore live work in healthcare and property.</p>
              <Link href="/previous-work" aria-label="Explore our work" className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--accent)] transition-colors hover:bg-[var(--accent-soft)]"><ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>

          <div className="rise delay-100 relative mx-auto w-full max-w-[610px] lg:ml-auto">
            <div className="absolute -right-5 -top-7 h-36 w-36 rounded-full border border-blue-100" aria-hidden />
            <div className="absolute -bottom-6 -left-5 h-28 w-28 rounded-full bg-[#deebff]" aria-hidden />
            <div className="relative rounded-[26px] border border-[#dce5f0] bg-white p-2.5 shadow-[0_28px_80px_rgba(31,62,110,.18)] sm:p-3">
              <div className="flex h-9 items-center gap-1.5 rounded-t-[17px] bg-[#f4f7fa] px-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff756a]" /><span className="h-2.5 w-2.5 rounded-full bg-[#f4bd4f]" /><span className="h-2.5 w-2.5 rounded-full bg-[#54c88b]" />
                <span className="mx-auto flex h-6 w-[54%] items-center justify-center rounded-md bg-white text-[9px] font-medium text-[#8290a0]">yourbusiness.in</span>
              </div>
              <div className="relative min-h-[330px] overflow-hidden rounded-b-[17px] bg-[#eef5fb] p-5 sm:min-h-[390px] sm:p-7">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_0%,rgba(84,158,224,.19),transparent_42%)]" aria-hidden />
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-2"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#2461a2] text-[10px] font-bold text-white">YB</span><span className="text-[11px] font-bold tracking-[-.02em] text-[#193652]">YOUR BUSINESS</span></div>
                  <div className="hidden items-center gap-4 text-[9px] font-medium text-[#61748a] sm:flex"><span>Services</span><span>About</span><span>Contact</span><span className="rounded-full bg-[#1e5e99] px-3 py-1.5 text-white">Get in touch</span></div>
                  <span className="h-6 w-6 rounded-md border border-[#ccdae6] sm:hidden" aria-hidden />
                </div>
                <div className="relative mt-7 grid gap-4 sm:mt-10 sm:grid-cols-[1fr_.75fr] sm:items-center">
                  <div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[.1em] text-[#39749e]"><Sparkles className="h-2.5 w-2.5" /> Made for your customers</span>
                    <h2 className="mt-3 max-w-[240px] text-[28px] font-semibold leading-[1.05] tracking-[-.06em] text-[#17314b] sm:text-[36px]">Good service deserves a great website.</h2>
                    <p className="mt-2 max-w-[230px] text-[10px] leading-5 text-[#60758a] sm:text-[11px]">Clear answers, thoughtful design, and a simple way to get in touch.</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#1e5e99] px-3.5 py-2 text-[9px] font-semibold text-white shadow-lg shadow-blue-900/10">Explore our services <ArrowRight className="h-3 w-3" /></span>
                  </div>
                  <div className="relative hidden h-[210px] rounded-2xl bg-gradient-to-br from-[#a7c7dd] via-[#c9e0e6] to-[#7098b8] p-3 sm:flex sm:items-end">
                    <div className="absolute inset-3 rounded-xl border border-white/40" />
                    <div className="absolute right-7 top-7 h-16 w-16 rounded-full bg-[#f5d38c] shadow-[0_0_36px_rgba(245,211,140,.55)]" />
                    <div className="absolute bottom-3 left-3 right-3 h-[82px] rounded-b-xl bg-gradient-to-t from-[#355a71]/55 to-transparent" />
                    <span className="relative rounded-full bg-white/85 px-3 py-1.5 text-[8px] font-semibold text-[#36556b]">A clear first impression</span>
                  </div>
                </div>
                <div className="relative mt-6 grid grid-cols-3 gap-2 border-t border-[#dbe5ec] pt-4 sm:mt-7">
                  <div><p className="text-[14px] font-bold tracking-[-.04em] text-[#1e5e99]">Fast</p><p className="text-[8px] text-[#74869a]">Loads on mobile</p></div>
                  <div><p className="text-[14px] font-bold tracking-[-.04em] text-[#1e5e99]">Clear</p><p className="text-[8px] text-[#74869a]">Easy to navigate</p></div>
                  <div><p className="text-[14px] font-bold tracking-[-.04em] text-[#1e5e99]">Yours</p><p className="text-[8px] text-[#74869a]">Simple to manage</p></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 right-3 flex items-center gap-2 rounded-2xl border border-[#dce5ef] bg-white px-3.5 py-2.5 shadow-[0_12px_30px_rgba(26,51,82,.13)] sm:-right-5 sm:bottom-8 sm:px-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e9f7f1] text-[#17875d]"><BadgeCheck className="h-4 w-4" /></span>
              <span><span className="block text-[10px] font-semibold text-[var(--foreground)]">A real person, all the way</span><span className="block text-[9px] text-[var(--foreground-tertiary)]">Direct support from our team</span></span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border-subtle)] bg-[#f9fbfd]">
        <div className="mx-auto grid max-w-[1280px] gap-4 px-5 py-6 sm:grid-cols-3 sm:px-7 lg:px-10">
          {[
            { icon: ShieldCheck, title: "No surprise costs", text: "Know the scope and price before work starts." },
            { icon: MessageCircle, title: "Talk to the makers", text: "Work directly with the people building your project." },
            { icon: Zap, title: "Support beyond launch", text: "We help you get comfortable with what we build." },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-3 px-2 py-1 sm:justify-center sm:px-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--accent)] shadow-sm ring-1 ring-[var(--border-subtle)]"><item.icon className="h-[18px] w-[18px]" /></span>
              <span><span className="block text-[13px] font-semibold text-[var(--foreground)]">{item.title}</span><span className="mt-0.5 block text-[11.5px] text-[var(--foreground-tertiary)]">{item.text}</span></span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[680px]">
            <p className="section-kicker"><Layers className="h-4 w-4" /> What we build</p>
            <h2 className="mt-3 text-[32px] font-semibold leading-[1.08] tracking-[-.05em] sm:text-[42px]">The right digital tools for your next stage.</h2>
            <p className="mt-3 max-w-[600px] text-[14px] leading-6 text-[var(--foreground-tertiary)] sm:text-[15px]">Start with what you need now. We’ll recommend the simplest way to get there—without making the project more complicated than it needs to be.</p>
          </div>
          <Link href="/features" className="inline-flex w-fit items-center gap-1.5 text-[13px] font-semibold text-[var(--accent)] hover:underline">Explore all services <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className={`group flex flex-col rounded-[22px] border p-6 transition-all hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(16,32,51,.08)] sm:p-7 ${service.featured ? "border-[var(--accent)] bg-white shadow-[0_12px_32px_rgba(36,89,211,.09)]" : "border-[var(--border-subtle)] bg-white"}`}>
              <div className="flex items-start justify-between">
                <span className={`flex h-11 w-11 items-center justify-center rounded-[14px] ${service.featured ? "bg-[var(--accent)] text-white" : "bg-[var(--accent-soft)] text-[var(--accent)]"}`}><service.icon className="h-5 w-5" /></span>
                {service.featured && <span className="rounded-full bg-[#e9f7f1] px-2.5 py-1 text-[10px] font-semibold text-[#18845c]">Most requested</span>}
              </div>
              <h3 className="mt-5 text-[19px] font-semibold tracking-[-.04em]">{service.title}</h3>
              <p className="mt-2 min-h-[48px] text-[13px] leading-6 text-[var(--foreground-tertiary)]">{service.description}</p>
              <p className="mt-5 text-[20px] font-semibold tracking-[-.04em] text-[var(--foreground)]">{service.price}</p>
              <ul className="mt-4 space-y-2.5 border-t border-[var(--border-subtle)] pt-4 text-[12.5px] text-[var(--foreground-secondary)]">
                {service.points.map((point) => <li key={point} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#179265]" /><span>{point}</span></li>)}
              </ul>
              <Link href={service.href} className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-[13px] font-semibold transition-colors ${service.featured ? "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]" : "border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent-muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"}`}>Discuss your project <ArrowRight className="h-4 w-4" /></Link>
            </article>
          ))}
        </div>
        <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-[#f0dfc7] bg-[#fffaf3] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-start gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#ad7027] shadow-sm"><Sparkles className="h-4 w-4" /></span><div><h3 className="text-[13.5px] font-semibold">College project support</h3><p className="mt-0.5 text-[12px] text-[var(--foreground-tertiary)]">Working code, report, diagrams and guidance for your project.</p></div></div>
          <div className="flex items-center gap-4 sm:justify-end"><span className="text-[13px] font-semibold text-[#94601f]">From ₹3,000</span><Link href="/pricing#students" className="text-[12.5px] font-semibold text-[var(--accent)] hover:underline">See student pricing <ArrowRight className="inline h-3.5 w-3.5" /></Link></div>
        </div>
      </section>

      <section className="bg-[#10233d] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-7 lg:px-10">
          <div className="grid gap-9 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.11em] text-[#9dbaff]"><MousePointerClick className="h-4 w-4" /> Built around real needs</p>
              <h2 className="mt-3 text-[32px] font-semibold leading-[1.08] tracking-[-.05em] sm:text-[42px]">A good website makes the next step obvious.</h2>
              <p className="mt-4 max-w-[470px] text-[14px] leading-7 text-white/65">People arrive with questions. We help you answer them clearly, show what makes you different and make it easy to get in touch.</p>
              <Link href="/about" className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-white hover:text-[#b8cbff]">How we work <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { icon: Sparkles, title: "Look trustworthy", body: "A professional first impression that feels like your business." },
                { icon: MousePointerClick, title: "Make it easy", body: "Clear pages and calls to action, built for phones first." },
                { icon: LifeBuoy, title: "Stay in control", body: "Simple handover and help when you need it after launch." },
              ].map((benefit, i) => (
                <div key={benefit.title} className="rounded-[18px] border border-white/10 bg-white/[.055] p-5 sm:p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#a9c1ff]"><benefit.icon className="h-[18px] w-[18px]" /></span>
                  <p className="mt-5 text-[14px] font-semibold">0{i + 1} · {benefit.title}</p>
                  <p className="mt-2 text-[12px] leading-5 text-white/60">{benefit.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker"><Globe className="h-4 w-4" /> Selected work</p>
            <h2 className="mt-3 text-[32px] font-semibold leading-[1.08] tracking-[-.05em] sm:text-[42px]">Good work, out in the world.</h2>
            <p className="mt-3 max-w-[580px] text-[14px] leading-6 text-[var(--foreground-tertiary)]">A few live websites we’ve built for healthcare and property businesses.</p>
          </div>
          <Link href="/previous-work" className="inline-flex w-fit items-center gap-1.5 text-[13px] font-semibold text-[var(--accent)] hover:underline">See all projects <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="group overflow-hidden rounded-[22px] border border-[var(--border-subtle)] bg-white transition-all hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(16,32,51,.08)]">
              <div className={`relative flex h-[170px] items-center justify-center overflow-hidden bg-gradient-to-br ${project.style}`}>
                <div className="absolute -right-8 -top-12 h-40 w-40 rounded-full border border-current/10" />
                <div className="absolute -bottom-16 -left-12 h-48 w-48 rounded-full border border-current/10" />
                <span className="relative flex h-[74px] w-[74px] items-center justify-center rounded-[22px] border border-white/70 bg-white/65 text-[21px] font-bold tracking-[-.06em] shadow-[0_15px_30px_rgba(25,50,75,.1)] backdrop-blur">{project.initials}</span>
                <span className="absolute bottom-4 left-4 rounded-full border border-white/80 bg-white/80 px-3 py-1 text-[10px] font-semibold text-[var(--foreground-secondary)] backdrop-blur">{project.sector}</span>
                <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name}`} className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--accent)] shadow-sm transition-transform group-hover:-translate-y-0.5"><ArrowUpRight className="h-4 w-4" /></a>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-[17px] font-semibold tracking-[-.035em]">{project.name}</h3>
                <p className="mt-2 min-h-[60px] text-[12.5px] leading-5 text-[var(--foreground-tertiary)]">{project.description}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[var(--accent)]">Visit live site <ArrowUpRight className="h-3.5 w-3.5" /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--border-subtle)] bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-7 lg:px-10">
          <div className="mx-auto max-w-[680px] text-center">
            <p className="section-kicker justify-center"><Zap className="h-4 w-4" /> Simple from day one</p>
            <h2 className="mt-3 text-[32px] font-semibold leading-[1.08] tracking-[-.05em] sm:text-[42px]">No mystery process. Just good communication.</h2>
            <p className="mx-auto mt-3 max-w-[560px] text-[14px] leading-6 text-[var(--foreground-tertiary)]">You’ll know what happens next, what it costs, and who to talk to at every step.</p>
          </div>
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { title: "Tell us what you need", body: "Share your goals, audience and any deadline. A rough idea is enough to start.", icon: MessageCircle },
              { title: "Get a clear plan", body: "We’ll recommend an approach and send you the scope, price and timeline." , icon: Layers },
              { title: "Review, launch, grow", body: "See your project taking shape, share feedback, and get help after launch.", icon: BadgeCheck },
            ].map((step, i) => (
              <li key={step.title} className="relative rounded-[20px] border border-[var(--border-subtle)] bg-[var(--background)] p-6 sm:p-7">
                <div className="flex items-center justify-between"><span className="text-[12px] font-bold tracking-[.08em] text-[var(--accent)]">STEP 0{i + 1}</span><step.icon className="h-5 w-5 text-[var(--accent)]" /></div>
                <h3 className="mt-5 text-[17px] font-semibold tracking-[-.035em]">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-[var(--foreground-tertiary)]">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-7 text-center"><Link href="/contact" className="btn-primary">Tell us about your project <ArrowRight className="h-4 w-4" /></Link><p className="mt-3 text-[11.5px] text-[var(--foreground-quaternary)]">No pressure. Just an honest conversation.</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="section-kicker"><MessageCircle className="h-4 w-4" /> Good to know</p>
            <h2 className="mt-3 text-[32px] font-semibold leading-[1.08] tracking-[-.05em] sm:text-[40px]">Questions before you start?</h2>
            <p className="mt-3 max-w-[400px] text-[14px] leading-6 text-[var(--foreground-tertiary)]">We believe it should be easy to understand what you’re buying. Here are a few things people ask us.</p>
            <Link href="/faq" className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--accent)] hover:underline">Browse all FAQs <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="divide-y divide-[var(--border-subtle)] overflow-hidden rounded-[20px] border border-[var(--border-subtle)] bg-white">
            {faqs.map((faq) => (
              <details key={faq.question} className="group px-5 py-4 open:bg-[#fbfcfe] sm:px-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[13.5px] font-semibold text-[var(--foreground)] [&::-webkit-details-marker]:hidden">{faq.question}<ChevronRight className="h-4 w-4 shrink-0 text-[var(--accent)] transition-transform group-open:rotate-90" /></summary>
                <p className="mt-3 max-w-[680px] pr-7 text-[12.5px] leading-6 text-[var(--foreground-tertiary)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pb-16 sm:px-7 sm:pb-20 lg:px-10 lg:pb-24">
        <div className="relative overflow-hidden rounded-[28px] bg-[var(--accent)] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div className="pointer-events-none absolute -right-24 -top-36 h-[420px] w-[420px] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-12 -top-24 h-[320px] w-[320px] rounded-full bg-white/[.07] blur-2xl" />
          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[680px]">
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.12em] text-blue-100"><span className="h-2 w-2 rounded-full bg-[#8df0be]" /> Let’s build something that works</p>
              <h2 className="mt-3 text-[32px] font-semibold leading-[1.07] tracking-[-.05em] sm:text-[42px]">Ready for a website that does more for your business?</h2>
              <p className="mt-3 text-[14px] leading-6 text-white/75">Tell us what you have in mind. We’ll help you figure out the right next step.</p>
            </div>
            <div className="relative flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/contact" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-[var(--accent)] transition-colors hover:bg-blue-50">Get your free project plan <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/pricing" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-white/10">Explore pricing <ArrowUpRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
