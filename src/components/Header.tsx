"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

const NAV = [
  { name: "Atelier", href: "/about" },
  { name: "Capabilities", href: "/features" },
  { name: "Works", href: "/previous-work" },
  { name: "Investment", href: "/pricing" },
  { name: "Journal", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-[var(--border-subtle)] shadow-[0_4px_20px_rgba(18,32,25,0.06)]"
          : "bg-[#f9fbf8]/70 backdrop-blur-xl border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[64px] max-w-[1200px] items-center justify-between px-6 lg:px-8">
        {/* Brand — premium */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="TriNetix Atelier home">
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-[11px] bg-[var(--accent)] ring-1 ring-black/10 shadow-sm">
            <Image src="/logo.png" alt="" width={36} height={36} className="h-9 w-9 object-cover scale-[1.35] object-left opacity-95" priority />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[18.5px] font-semibold tracking-[-0.025em] text-[var(--foreground)]">TriNetix</span>
            <span className="flex items-center gap-1 text-[10px] font-semibold tracking-[0.14em] text-[var(--foreground-quaternary)] uppercase">
              <Sparkles className="h-3 w-3 text-[var(--gold)]" aria-hidden /> Atelier
            </span>
          </span>
        </Link>

        {/* Desktop nav — pill, premium hover */}
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV.map((l) => {
            const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-[13px] font-medium tracking-[-0.01em] transition-all ${
                  active ? "bg-[var(--accent)] text-white shadow-sm" : "text-[var(--foreground-secondary)] hover:bg-[var(--accent-subtle)] hover:text-[var(--accent)]"
                }`}
              >
                {l.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2.5 md:flex">
          <Link href="/contact" className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium text-[var(--foreground-secondary)] hover:bg-[var(--surface-subtle)] hover:text-[var(--accent)] transition-colors">
            Contact us
            <ArrowUpRight className="h-3.5 w-3.5 opacity-60" aria-hidden />
          </Link>
          <Link href="/pricing" className="btn-primary text-[13px] !px-5 !py-2.5">
            Work with us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-white text-[var(--foreground-secondary)] md:hidden hover:border-[var(--accent-muted)] hover:bg-[var(--accent-soft)] transition-colors"
        >
          {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div id="mobile-nav" className="md:hidden">
          <div className="absolute inset-0 top-[64px] bg-[#122019]/10 backdrop-blur-sm" onClick={() => setOpen(false)} aria-hidden />
          <div className="absolute inset-x-0 top-[64px] border-t border-[var(--border-subtle)] bg-white px-6 py-6 shadow-2xl animate-[slideDown_180ms_ease]">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--gold)]">TriNetix Atelier — Simple, premium websites</p>
            <nav className="flex flex-col gap-1">
              {NAV.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-[15px] font-medium ${
                    pathname === l.href ? "bg-[var(--accent)] text-white" : "text-[var(--foreground)] hover:bg-[var(--accent-soft)]"
                  }`}
                >
                  {l.name}
                </Link>
              ))}
              <Link href="/docs" onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-[15px] font-medium text-[var(--foreground)] hover:bg-[var(--accent-soft)]">Documentation</Link>
              <Link href="/faq" onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-[15px] font-medium text-[var(--foreground)] hover:bg-[var(--accent-soft)]">FAQ</Link>
            </nav>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-secondary justify-center w-full">Contact</Link>
              <Link href="/pricing" onClick={() => setOpen(false)} className="btn-primary justify-center w-full">Get started</Link>
            </div>
            <p className="mt-4 text-center text-[11px] leading-4 text-[var(--foreground-quaternary)]">Direct support · No middlemen<br/>Reply within 2–4 hours</p>
          </div>
        </div>
      )}
      <style>{`@keyframes slideDown{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </header>
  );
}
