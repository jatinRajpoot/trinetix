"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, GraduationCap, ChevronRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services & Pricing", href: "/services" },
    { name: "Previous Work", href: "/previous-work" },
    { name: "Blog", href: "/blog" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm shadow-slate-100"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group">
            <div className="relative w-10 h-10 sm:w-14 sm:h-14 shrink-0">
              {/* Pulse ring behind logo */}
              <span className="absolute inset-0 rounded-full border-2 border-[#00A5CF]/40 animate-ping" style={{ animationDuration: '2.8s' }} />
              <div className="relative w-full h-full rounded-full bg-[#002b36] border-2 border-[#00A5CF]/60 p-0.5 sm:p-1 flex items-center justify-center shadow-lg shadow-[#00A5CF]/20 group-hover:border-[#9FFFCB] group-hover:scale-105 transition-all duration-300 overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="TriNetix Symbol"
                  width={120}
                  height={120}
                  className="w-full h-full object-cover object-left scale-150"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#002b36] flex items-center gap-0.5" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>
                <span className="text-[#004E64] font-extrabold">त्रि</span>
                <span className="purple-text-gradient">Netix</span>
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#00A5CF] inline-block animate-pulse ml-1"></span>
              </span>
              <span className="text-[9px] sm:text-[11px] text-[#1d5563] tracking-widest uppercase font-bold hidden xs:block">
                Web Development Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-0.5 lg:gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-2.5 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-semibold transition-all duration-200 nav-link-underline ${
                    isActive
                      ? "text-[#004E64] bg-[#9FFFCB]/30 border border-[#25A18E]/40 shadow-xs active"
                      : "text-[#1d5563] hover:text-[#004E64] hover:bg-[#9FFFCB]/15"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/services#student-section"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#9FFFCB]/25 border border-[#25A18E]/30 text-[#004E64] hover:bg-[#9FFFCB]/40 transition-all hover:scale-105"
            >
              <GraduationCap className="w-4 h-4 text-[#25A18E]" />
              <span>For Students</span>
            </Link>

            <Link
              href="/contact"
              className="purple-btn-gradient text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:scale-105"
            >
              <span>Get Started</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              href="/contact"
              className="purple-btn-gradient text-white px-3 py-2 rounded-full text-xs font-semibold hidden sm:flex items-center gap-1"
            >
              <span>Get Started</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 hover:text-teal-700 focus:outline-none transition-all hover:bg-teal-50"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-teal-600" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 mt-1 space-y-3 shadow-lg animate-slide-down">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium flex items-center justify-between transition-all animate-fade-slide-up ${
                    isActive
                      ? "text-teal-700 bg-teal-50 border border-teal-200"
                      : "text-slate-600 hover:bg-slate-50 hover:text-teal-700"
                  }`}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <span>{link.name}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-teal-500" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
            <Link
              href="/services#student-section"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-teal-50 border border-teal-200 text-teal-700 hover:bg-teal-100 transition-all"
            >
              <GraduationCap className="w-4 h-4 text-teal-600" />
              <span>For Students Special Portal</span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full purple-btn-gradient text-white text-center py-2.5 rounded-full text-sm font-semibold"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
