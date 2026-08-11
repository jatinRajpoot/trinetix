"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Previous Work", href: "/previous-work" },
  { name: "Blog", href: "/blog" },
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

  // lock scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-200 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-[var(--border-subtle)] shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-white/60 backdrop-blur-xl border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[64px] max-w-[1200px] items-center justify-between px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="TriNetix home">
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-[10px] bg-[#1d1d1f] ring-1 ring-black/10">
            <Image src="/logo.png" alt="" width={36} height={36} className="h-9 w-9 object-cover scale-[1.35] object-left" priority />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[19px] font-semibold tracking-[-0.02em] text-[#1d1d1f]">TriNetix</span>
            <span className="text-[11px] font-medium tracking-[0.08em] text-[var(--foreground-quaternary)] uppercase">Laboratory</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV.map((l) => {
            const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors ${
                  active ? "bg-[#1d1d1f] text-white" : "text-[var(--foreground-secondary)] hover:bg-[var(--surface-subtle)] hover:text-[var(--foreground)]"
                }`}
              >
                {l.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Link href="/contact" className="btn-secondary text-[13px] !px-4 !py-2">
            Talk to founders
            <ArrowUpRight className="h-3.5 w-3.5 opacity-60" aria-hidden />
          </Link>
          <Link href="/pricing" className="btn-primary text-[13px] !px-5 !py-2.5">
            Start project
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-white text-[var(--foreground-secondary)] md:hidden hover:border-[var(--border)] transition-colors"
        >
          {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div id="mobile-nav" className="md:hidden">
          <div className="absolute inset-0 top-[64px] bg-black/20 backdrop-blur-sm" onClick={() => setOpen(false)} aria-hidden />
          <div className="absolute inset-x-0 top-[64px] border-t border-[var(--border-subtle)] bg-white px-6 py-6 shadow-2xl animate-[slideDown_180ms_ease]">
            <nav className="flex flex-col gap-1">
              {NAV.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-[15px] font-medium ${
                    pathname === l.href ? "bg-[#1d1d1f] text-white" : "text-[var(--foreground)] hover:bg-[var(--surface-subtle)]"
                  }`}
                >
                  {l.name}
                </Link>
              ))}
              <Link href="/docs" onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-[15px] font-medium text-[var(--foreground)] hover:bg-[var(--surface-subtle)]">Documentation</Link>
              <Link href="/faq" onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-[15px] font-medium text-[var(--foreground)] hover:bg-[var(--surface-subtle)]">FAQ</Link>
            </nav>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-secondary justify-center w-full">Contact</Link>
              <Link href="/pricing" onClick={() => setOpen(false)} className="btn-primary justify-center w-full">Get started</Link>
            </div>
          </div>
        </div>
      )}
      <style>{`@keyframes slideDown{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </header>
  );
}
