import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const year = new Date().getFullYear();

const serviceLinks = [
  { label: "Business websites", href: "/features" },
  { label: "Custom web development", href: "/features" },
  { label: "Android apps", href: "/features" },
  { label: "Student projects", href: "/pricing#students" },
  { label: "Pricing", href: "/pricing" },
];

const companyLinks = [
  { label: "Our work", href: "/previous-work" },
  { label: "About TriNetix", href: "/about" },
  { label: "Client reviews", href: "/testimonials" },
  { label: "Insights", href: "/blog" },
  { label: "FAQs", href: "/faq" },
];

const legalLinks = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms of service", href: "/terms" },
  { label: "Cookie policy", href: "/cookies" },
  { label: "Refund policy", href: "/refund" },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--border-subtle)] bg-white">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-7 lg:px-10">
        <div className="relative -mt-10 flex flex-col gap-6 overflow-hidden rounded-[26px] bg-[#10233d] px-6 py-7 text-white shadow-[0_20px_50px_rgba(16,35,61,.17)] sm:px-9 sm:py-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" aria-hidden />
          <div className="relative max-w-[650px]">
            <p className="text-[11px] font-semibold uppercase tracking-[.13em] text-blue-200">Your next step</p>
            <h2 className="mt-1 text-[24px] font-semibold tracking-[-.04em] sm:text-[28px]">Let’s make your next move a good one.</h2>
            <p className="mt-2 text-[13.5px] leading-6 text-white/70">Tell us what you need. We’ll reply with a clear recommendation, price and timeline.</p>
          </div>
          <Link href="/contact" className="relative inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-[13.5px] font-semibold text-[#10233d] transition-colors hover:bg-blue-50">Talk to our team <ArrowRight className="h-4 w-4" aria-hidden /></Link>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr] lg:gap-12 lg:py-14">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="TriNetix home">
              <span className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-[var(--accent)] text-[18px] font-bold tracking-[-.08em] text-white">T<span className="text-[#9bb8ff]">N</span></span>
              <span className="flex flex-col leading-none"><span className="text-[18px] font-bold tracking-[-.055em] text-[var(--foreground)]">TriNetix</span><span className="mt-1 text-[9px] font-semibold uppercase tracking-[.16em] text-[var(--foreground-quaternary)]">Digital studio</span></span>
            </Link>
            <p className="mt-4 max-w-[35ch] text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">Thoughtful websites, apps and digital projects that help people and businesses move forward.</p>
            <div className="mt-5 space-y-2.5 text-[13px]">
              <a href="mailto:Support@trinetix.in" className="flex w-fit items-center gap-2 text-[var(--foreground-secondary)] transition-colors hover:text-[var(--accent)]"><Mail className="h-4 w-4 text-[var(--accent)]" /> Support@trinetix.in</a>
              <a href="tel:+917027782346" className="flex w-fit items-center gap-2 text-[var(--foreground-secondary)] transition-colors hover:text-[var(--accent)]"><Phone className="h-4 w-4 text-[var(--accent)]" /> +91 70277 82346</a>
              <span className="flex items-center gap-2 text-[var(--foreground-tertiary)]"><MapPin className="h-4 w-4 text-[var(--accent)]" /> Working with clients across India</span>
            </div>
            <a href="https://wa.me/917027782346?text=Hi%20TriNetix%2C%20I%20want%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#b6e8cb] bg-[#effaf3] px-3.5 py-2 text-[12px] font-semibold text-[#177247] transition-colors hover:bg-[#e2f6e9]"><WhatsAppIcon className="h-4 w-4" /> Message us on WhatsApp <ArrowUpRight className="h-3.5 w-3.5" /></a>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[.1em] text-[var(--foreground)]">What we do</h3>
            <ul className="mt-4 space-y-3 text-[13px]">{serviceLinks.map((item) => <li key={item.label}><Link href={item.href} className="text-[var(--foreground-tertiary)] transition-colors hover:text-[var(--accent)]">{item.label}</Link></li>)}</ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[.1em] text-[var(--foreground)]">Explore</h3>
            <ul className="mt-4 space-y-3 text-[13px]">{companyLinks.map((item) => <li key={item.label}><Link href={item.href} className="text-[var(--foreground-tertiary)] transition-colors hover:text-[var(--accent)]">{item.label}</Link></li>)}</ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[.1em] text-[var(--foreground)]">Helpful links</h3>
            <ul className="mt-4 space-y-3 text-[13px]">{legalLinks.map((item) => <li key={item.label}><Link href={item.href} className="text-[var(--foreground-tertiary)] transition-colors hover:text-[var(--accent)]">{item.label}</Link></li>)}</ul>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--accent)] hover:underline">Get in touch <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[var(--border-subtle)] py-5 text-[11.5px] text-[var(--foreground-quaternary)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} TriNetix. Built with care in India.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="https://www.instagram.com/trinetix.in1/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)]">Instagram</a>
            <a href="https://www.linkedin.com/in/bharti-singh-00583b426/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)]">LinkedIn</a>
            <Link href="/shipping" className="hover:text-[var(--accent)]">Shipping policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
