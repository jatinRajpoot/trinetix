import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#20241f] text-[#f4f1ea]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <section className="grid gap-8 border-b border-white/15 py-12 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-end lg:py-20">
          <div className="max-w-[770px]">
            <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-[#ef8b6e]">A good first step is a conversation</p>
            <h2 className="mt-4 text-[38px] font-medium leading-[.98] tracking-[-.065em] sm:text-[58px]">Have a website-shaped problem?</h2>
            <p className="mt-4 max-w-[570px] text-[13px] leading-6 text-white/58">Tell us what’s getting in your way. We’ll help you decide whether a new website, an app or a smaller change is the right move.</p>
          </div>
          <Link href="/contact" className="group inline-flex w-fit items-center gap-8 border border-white/35 px-5 py-4 text-[11px] font-semibold uppercase tracking-[.07em] transition-colors hover:border-[#ef8b6e] hover:bg-[#ef8b6e] hover:text-[#20241f]">Start with a short brief <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
        </section>

        <div className="grid gap-9 py-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:py-12">
          <div>
            <Link href="/" aria-label="TriNetix home" className="inline-flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center border border-white/70 text-[14px] font-black tracking-[-.12em]">t<span className="text-[#ef8b6e]">n</span></span>
              <span className="text-[18px] font-semibold tracking-[-.06em]">trinetix</span>
            </Link>
            <p className="mt-4 max-w-[320px] text-[12px] leading-6 text-white/55">Clear, useful digital experiences for real businesses. Designed and built with care in India.</p>
            <div className="mt-5 flex flex-col gap-2.5 text-[12px]">
              <a href="mailto:Support@trinetix.in" className="inline-flex w-fit items-center gap-2 text-white/75 hover:text-white"><Mail className="h-3.5 w-3.5 text-[#ef8b6e]" />Support@trinetix.in</a>
              <a href="tel:+917027782346" className="inline-flex w-fit items-center gap-2 text-white/75 hover:text-white"><Phone className="h-3.5 w-3.5 text-[#ef8b6e]" />+91 70277 82346</a>
              <a href="https://wa.me/917027782346?text=Hi%20TriNetix%2C%20I%20want%20to%20talk%20about%20a%20website." target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 text-white/75 hover:text-white"><WhatsAppIcon className="h-3.5 w-3.5 text-[#70d395]" />WhatsApp <ArrowUpRight className="h-3 w-3" /></a>
            </div>
          </div>

          <div><h3 className="text-[9px] font-semibold uppercase tracking-[.15em] text-white/40">Explore</h3><ul className="mt-4 space-y-3 text-[12px]">{[{ label: "Work", href: "/previous-work" }, { label: "Services", href: "/features" }, { label: "Pricing", href: "/pricing" }, { label: "About the studio", href: "/about" }].map((link) => <li key={link.href}><Link href={link.href} className="text-white/70 transition-colors hover:text-[#ef8b6e]">{link.label}</Link></li>)}</ul></div>
          <div><h3 className="text-[9px] font-semibold uppercase tracking-[.15em] text-white/40">Useful</h3><ul className="mt-4 space-y-3 text-[12px]">{[{ label: "Frequently asked questions", href: "/faq" }, { label: "Client feedback", href: "/testimonials" }, { label: "Journal", href: "/blog" }, { label: "Careers", href: "/careers" }].map((link) => <li key={link.href}><Link href={link.href} className="text-white/70 transition-colors hover:text-[#ef8b6e]">{link.label}</Link></li>)}</ul></div>
          <div><h3 className="text-[9px] font-semibold uppercase tracking-[.15em] text-white/40">Policies</h3><ul className="mt-4 space-y-3 text-[12px]">{[{ label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }, { label: "Cookies", href: "/cookies" }, { label: "Refunds", href: "/refund" }].map((link) => <li key={link.href}><Link href={link.href} className="text-white/70 transition-colors hover:text-[#ef8b6e]">{link.label}</Link></li>)}</ul></div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/15 py-5 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} TriNetix. All rights reserved.</p>
          <div className="flex items-center gap-5"><a href="https://www.instagram.com/trinetix.in1/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram <ArrowUpRight className="inline h-3 w-3" /></a><a href="https://www.linkedin.com/in/bharti-singh-00583b426/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn <ArrowUpRight className="inline h-3 w-3" /></a></div>
        </div>
      </div>
    </footer>
  );
}
