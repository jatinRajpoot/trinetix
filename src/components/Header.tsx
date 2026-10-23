"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "/previous-work" },
  { label: "Services", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Studio", href: "/about" },
  { label: "Notes", href: "/blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#ded9cf] bg-[#f4f1ea]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="group flex items-center gap-3" aria-label="TriNetix home">
          <span className="relative flex h-9 w-9 items-center justify-center border border-[#242821] text-[15px] font-black tracking-[-.12em] text-[#242821] after:absolute after:-bottom-1 after:-right-1 after:h-2.5 after:w-2.5 after:bg-[var(--accent)]">t<span className="text-[var(--accent)]">n</span></span>
          <span className="flex flex-col leading-none"><span className="text-[18px] font-semibold tracking-[-.06em] text-[var(--foreground)]">trinetix</span><span className="mt-1.5 text-[8px] font-semibold uppercase tracking-[.17em] text-[var(--foreground-tertiary)]">Digital studio</span></span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={`relative py-2 text-[12px] font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-[2px] after:h-px after:origin-left after:scale-x-0 after:bg-[var(--accent)] after:transition-transform hover:text-[var(--accent)] hover:after:scale-x-100 ${active ? "text-[var(--accent)] after:scale-x-100" : "text-[var(--foreground-secondary)]"}`}>{link.label}</Link>;
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href="tel:+917027782346" className="text-[11px] font-medium tracking-[.01em] text-[var(--foreground-tertiary)] hover:text-[var(--foreground)]">+91 70277 82346</a>
          <Link href="/contact" className="group inline-flex items-center gap-2 bg-[var(--accent)] px-4 py-3 text-[11px] font-semibold uppercase tracking-[.05em] text-white transition-colors hover:bg-[var(--accent-hover)]">Start a project <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
        </div>

        <button type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-menu" className="flex h-10 w-10 items-center justify-center border border-[#d4cfc5] text-[var(--foreground)] lg:hidden">
          {menuOpen ? <X className="h-[19px] w-[19px]" /> : <Menu className="h-[19px] w-[19px]" />}
        </button>
      </div>

      {menuOpen && <div className="fixed inset-0 top-[74px] z-40 bg-[#20241f] px-6 pb-8 pt-4 text-[#f4f1ea] lg:hidden" id="mobile-menu">
        <p className="border-b border-white/15 pb-4 text-[9px] font-semibold uppercase tracking-[.16em] text-white/45">Navigation</p>
        <nav aria-label="Mobile" className="mt-2">
          {links.map((link, i) => <Link key={link.href} href={link.href} className="flex items-center justify-between border-b border-white/15 py-4 text-[28px] font-medium tracking-[-.05em] transition-colors hover:text-[#ef8b6e]"><span>{link.label}</span><span className="text-[10px] font-medium tracking-normal text-white/35">0{i + 1}</span></Link>)}
        </nav>
        <Link href="/contact" className="mt-7 flex items-center justify-between bg-[var(--accent)] px-5 py-4 text-[13px] font-semibold uppercase tracking-[.04em] text-white">Tell us about your project <ArrowUpRight className="h-4 w-4" /></Link>
        <a href="tel:+917027782346" className="mt-5 inline-block text-[12px] text-white/60">+91 70277 82346</a>
      </div>}
    </header>
  );
}
