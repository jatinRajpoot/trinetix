"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowUpRight } from "lucide-react";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--border-subtle)] bg-white">
      {/* Newsletter strip — Apple-like subtle band */}
      <div className="border-b border-[var(--border-subtle)] bg-[var(--surface-subtle)]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-[520px]">
            <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-[var(--foreground)]">Stay in the loop</h3>
            <p className="mt-1 text-[13.5px] leading-5 text-[var(--foreground-tertiary)]">Product updates, pricing changes, and student deadline reminders. No spam.</p>
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
              placeholder="you@company.com"
              className="field-input !rounded-full flex-1 bg-white"
            />
            <button type="submit" className="btn-primary shrink-0">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-[10px] bg-[#1d1d1f]">
                <Image src="/logo.png" alt="" width={36} height={36} className="h-9 w-9 scale-[1.35] object-cover object-left" />
              </span>
              <span className="text-[17px] font-semibold tracking-[-0.02em] text-[#1d1d1f]">TriNetix</span>
            </Link>
            <p className="mt-3 max-w-[32ch] text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">
              A web development laboratory building WordPress sites, Android apps, and academic systems for businesses and students. Crafted by Jatin Rajput &amp; Bharti Singh.
            </p>
            <div className="mt-4 flex items-center gap-2 text-[13px]">
              <Mail className="h-4 w-4 text-[var(--foreground-quaternary)]" aria-hidden />
              <a href="mailto:Support@trinetix.in" className="font-medium text-[var(--foreground-secondary)] hover:text-[var(--foreground)] hover:underline underline-offset-4">Support@trinetix.in</a>
            </div>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--foreground-quaternary)]">Product</h4>
            <ul className="mt-3 space-y-2.5 text-[13.5px]">
              {[
                { label: "Features", href: "/features" },
                { label: "Pricing", href: "/pricing" },
                { label: "Previous Work", href: "/previous-work" },
                { label: "Documentation", href: "/docs" },
                { label: "Changelog", href: "/blog" },
              ].map((i) => (
                <li key={i.href}><Link href={i.href} className="text-[var(--foreground-tertiary)] hover:text-[var(--foreground)] transition-colors">{i.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--foreground-quaternary)]">Resources</h4>
            <ul className="mt-3 space-y-2.5 text-[13.5px]">
              {[
                { label: "About us", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "FAQ", href: "/faq" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((i) => (
                <li key={i.href}><Link href={i.href} className="text-[var(--foreground-tertiary)] hover:text-[var(--foreground)] transition-colors">{i.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--foreground-quaternary)]">Legal</h4>
            <ul className="mt-3 space-y-2.5 text-[13.5px]">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Cookie Policy", href: "/cookies" },
                { label: "Refund Policy", href: "/refund" },
                { label: "Disclaimer", href: "/disclaimer" },
              ].map((i) => (
                <li key={i.href}><Link href={i.href} className="text-[var(--foreground-tertiary)] hover:text-[var(--foreground)] transition-colors">{i.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[var(--border-subtle)] pt-6 text-[12.5px] text-[var(--foreground-quaternary)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} TriNetix Laboratory. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="https://x.com" aria-label="X" className="hover:text-[var(--foreground-tertiary)] transition-colors inline-flex items-center gap-1">X <ArrowUpRight className="h-3 w-3" aria-hidden /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-[var(--foreground-tertiary)] transition-colors inline-flex items-center gap-1">LinkedIn <ArrowUpRight className="h-3 w-3" aria-hidden /></a>
            <a href="https://github.com" aria-label="GitHub" className="hover:text-[var(--foreground-tertiary)] transition-colors inline-flex items-center gap-1">GitHub <ArrowUpRight className="h-3 w-3" aria-hidden /></a>
            <Link href="/shipping" className="hover:text-[var(--foreground-tertiary)] transition-colors">Shipping</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
