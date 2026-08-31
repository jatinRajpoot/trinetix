"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowUpRight, Sparkles } from "lucide-react";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--border-subtle)] bg-white">
      {/* Newsletter — premium sage band */}
      <div className="border-b border-[var(--border-subtle)] bg-[var(--accent-soft)]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-[520px]">
            <p className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]"><Sparkles className="h-3 w-3" /> Updates</p>
            <h3 className="mt-1 text-[15.5px] font-semibold tracking-[-0.015em] text-[var(--foreground)]">Stay in touch</h3>
            <p className="mt-1 text-[13.5px] leading-5 text-[var(--foreground-tertiary)]">News, launches and simple tips. No spam, ever.</p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-[420px] items-center gap-2"
            aria-label="Newsletter"
          >
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@studio.com"
              className="field-input !rounded-full flex-1 bg-white"
            />
            <button type="submit" className="btn-primary shrink-0">Join</button>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-[11px] bg-[var(--accent)] shadow-sm">
                <Image src="/logo.png" alt="" width={36} height={36} className="h-9 w-9 scale-[1.35] object-cover object-left" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[17px] font-semibold tracking-[-0.02em] text-[var(--foreground)]">TriNetix</span>
                <span className="text-[10px] font-semibold tracking-[0.14em] text-[var(--foreground-quaternary)] uppercase">Atelier</span>
              </span>
            </Link>
            <p className="mt-3 max-w-[32ch] text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">
              We build simple, premium WordPress sites, Android apps and academic projects that are fast, reliable and easy to manage.
            </p>
            <div className="mt-4 flex items-center gap-2 text-[13px]">
              <Mail className="h-4 w-4 text-[var(--accent-light)]" aria-hidden />
              <a href="mailto:Support@trinetix.in" className="font-medium text-[var(--foreground-secondary)] hover:text-[var(--accent)] hover:underline underline-offset-4">Support@trinetix.in</a>
            </div>
            <p className="mt-2 text-[11.5px] leading-4 text-[var(--foreground-quaternary)]">Work with us directly. <br/>We reply in 2–4 hours.</p>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--foreground-quaternary)]">Atelier</h4>
            <ul className="mt-3 space-y-2.5 text-[13.5px]">
              {[
                { label: "Capabilities", href: "/features" },
                { label: "Investment", href: "/pricing" },
                { label: "Selected Works", href: "/previous-work" },
                { label: "Documentation", href: "/docs" },
                { label: "Journal", href: "/blog" },
              ].map((i) => (
                <li key={i.href}><Link href={i.href} className="text-[var(--foreground-tertiary)] hover:text-[var(--accent)] transition-colors">{i.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--foreground-quaternary)]">Studio</h4>
            <ul className="mt-3 space-y-2.5 text-[13.5px]">
              {[
                { label: "About us", href: "/about" },
                { label: "Journal", href: "/blog" },
                { label: "FAQ", href: "/faq" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((i) => (
                <li key={i.href}><Link href={i.href} className="text-[var(--foreground-tertiary)] hover:text-[var(--accent)] transition-colors">{i.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--foreground-quaternary)]">Legal</h4>
            <ul className="mt-3 space-y-2.5 text-[13.5px]">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Cookie Policy", href: "/cookies" },
                { label: "Refund Policy", href: "/refund" },
                { label: "Disclaimer", href: "/disclaimer" },
              ].map((i) => (
                <li key={i.href}><Link href={i.href} className="text-[var(--foreground-tertiary)] hover:text-[var(--accent)] transition-colors">{i.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[var(--border-subtle)] pt-6 text-[12.5px] text-[var(--foreground-quaternary)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} TriNetix Atelier. Crafted with intent in India. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="https://x.com/Trinetixin" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1">X <ArrowUpRight className="h-3 w-3" aria-hidden /></a>
            <a href="https://www.instagram.com/trinetix.in1/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1">Instagram <ArrowUpRight className="h-3 w-3" aria-hidden /></a>
            <a href="https://www.facebook.com/profile.php?id=61593020440116" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1">Facebook <ArrowUpRight className="h-3 w-3" aria-hidden /></a>
            <a href="https://www.linkedin.com/in/bharti-singh-00583b426/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1">LinkedIn <ArrowUpRight className="h-3 w-3" aria-hidden /></a>
            <a href="https://github.com/jatinRajpoot/trinetix" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1">GitHub <ArrowUpRight className="h-3 w-3" aria-hidden /></a>
            <Link href="/shipping" className="hover:text-[var(--accent)] transition-colors">Shipping</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
