"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Our work", href: "/#clients" },
  { label: "Services", href: "/features" },
  { label: "The studio", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") { setMenuOpen(false); toggleRef.current?.focus(); }
      if (event.key !== "Tab") return;
      const items = [toggleRef.current, ...Array.from(menuRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [])].filter((item): item is HTMLButtonElement | HTMLAnchorElement => item !== null);
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", onKey); };
  }, [menuOpen]);

  const light = (pathname === "/" && !scrolled) || menuOpen;
  return <>
    <header className={`awake-header${light?" on-red":""}${scrolled&&!menuOpen?" is-scrolled":""}${menuOpen?" menu-is-open":""}`}>
      <Link href="/" onClick={()=>setMenuOpen(false)} className="awake-brand" aria-label="TriNetix home">trinetix<span aria-hidden="true">✳</span></Link>
      <nav className="awake-desktop-nav" aria-label="Primary"><Link href="/#clients">Work</Link><Link href="/features" aria-current={pathname==="/features"?"page":undefined}>Services</Link><Link href="/about" aria-current={pathname==="/about"?"page":undefined}>Studio</Link></nav>
      <div className="awake-header-actions"><Link className="nav-contact" href="/contact" onClick={()=>setMenuOpen(false)}>Let’s talk <ArrowUpRight size={16}/></Link><button ref={toggleRef} className="awake-menu-toggle" type="button" onClick={()=>setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="site-menu" aria-label={menuOpen?"Close menu":"Open menu"}><span>{menuOpen?"Close":"Menu"}</span>{menuOpen?<X size={18}/>:<span className="menu-lines" aria-hidden="true"><i/><i/></span>}</button></div>
    </header>
    {menuOpen&&<div className="awake-menu" id="site-menu" ref={menuRef} role="dialog" aria-modal="true" aria-label="Site navigation"><div className="awake-menu-content"><nav aria-label="All pages">{links.map(link=><Link key={link.href} href={link.href} onClick={()=>setMenuOpen(false)} aria-current={pathname===link.href?"page":undefined}>{link.label}<ArrowUpRight strokeWidth={1}/></Link>)}</nav><aside><p>Have something in mind?</p><a href="mailto:Support@trinetix.in">Support@trinetix.in<ArrowUpRight size={18}/></a><div><Link href="/pricing" onClick={()=>setMenuOpen(false)}>Pricing</Link><Link href="/blog" onClick={()=>setMenuOpen(false)}>Journal</Link><Link href="/faq" onClick={()=>setMenuOpen(false)}>FAQs</Link><Link href="/careers" onClick={()=>setMenuOpen(false)}>Careers</Link></div><span>Independent studio.<br/>India & everywhere.</span></aside></div></div>}
  </>;
}
