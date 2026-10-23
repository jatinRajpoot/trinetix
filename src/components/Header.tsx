"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV = [
  { name: "Services", href: "/features" },
  { name: "Our work", href: "/previous-work" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Insights", href: "/blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-200 ${scrolled ? "border-[var(--border-subtle)] bg-white/95 shadow-[0_6px_24px_rgba(16,32,51,.06)] backdrop-blur-xl" : "border-transparent bg-white/90 backdrop-blur-xl"}`}>
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 sm:px-7 lg:px-10">
        <Link href="/" className="group inline-flex shrink-0 items-center gap-2.5" aria-label="TriNetix home">
          <span className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-[var(--accent)] text-[19px] font-bold tracking-[-.08em] text-white shadow-[0_5px_12px_rgba(36,89,211,.24)]">T<span className="text-[#9bb8ff]">N</span></span>
          <span className="flex flex-col leading-none">
            <span className="text-[18px] font-bold tracking-[-.055em] text-[var(--foreground)]">TriNetix</span>
            <span className="mt-1 text-[9px] font-semibold uppercase tracking-[.16em] text-[var(--foreground-quaternary)]">Digital studio</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
            return (
              <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors ${active ? "bg-[var(--accent-soft)] text-[var(--accent)]" : "text-[var(--foreground-secondary)] hover:bg-[var(--surface-subtle)] hover:text-[var(--foreground)]"}`}>
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+917027782346" className="text-[12.5px] font-medium text-[var(--foreground-tertiary)] transition-colors hover:text-[var(--accent)]">+91 70277 82346</a>
          <Link href="/contact" className="btn-primary !px-5 !py-3 text-[13px]">Get a free quote <ArrowUpRight className="h-4 w-4" aria-hidden /></Link>
        </div>

        <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--foreground)] transition-colors hover:bg-[var(--surface-subtle)] lg:hidden">
          {open ? <X className="h-[19px] w-[19px]" /> : <Menu className="h-[19px] w-[19px]" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="absolute inset-x-0 top-[72px] border-t border-[var(--border-subtle)] bg-white px-5 pb-6 pt-4 shadow-xl lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {NAV.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
              return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`rounded-xl px-4 py-3.5 text-[15px] font-medium ${active ? "bg-[var(--accent-soft)] text-[var(--accent)]" : "text-[var(--foreground-secondary)] hover:bg-[var(--surface-subtle)]"}`}>{item.name}</Link>;
            })}
          </nav>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a href="tel:+917027782346" className="btn-secondary">Call us</a>
            <Link href="/contact" className="btn-primary">Get a quote <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
          <p className="mt-4 text-center text-[12px] text-[var(--foreground-quaternary)]">Tell us what you’re building. We’ll take it from there.</p>
        </div>
      )}
    </header>
  );
}
