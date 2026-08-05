"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  Code2, 
  Smartphone, 
  Globe, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  UserCheck,
  Clock
} from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"pro" | "student">("pro");

  return (
    <div className="space-y-12 sm:space-y-20 lg:space-y-24 pb-16 sm:pb-20 relative overflow-hidden">

      {/* ─── HERO SECTION ─────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/hero-bg.png"
          alt="TriNetix Tech Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#003342]/90 via-[#004E64]/80 to-[#002530]/95 z-10" />

        {/* Geometric Decorative Elements */}
        <div className="absolute z-10 pointer-events-none">
          <div className="geo-circle w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
          <div className="geo-circle w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
        </div>
        {/* Dot grid top-left */}
        <div className="absolute top-10 left-10 w-48 h-48 geo-dot-grid opacity-[0.08] z-10 pointer-events-none" />
        {/* Dot grid bottom-right */}
        <div className="absolute bottom-20 right-10 w-48 h-48 geo-dot-grid opacity-[0.06] z-10 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {/* Badge — animate first */}
          <div className="animate-fade-slide-up delay-100 inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#9FFFCB]/20 border border-[#9FFFCB]/40 text-[#9FFFCB] text-[10px] sm:text-sm font-bold tracking-wide backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#9FFFCB]" />
            <span>त्रिNetix Web &amp; Mobile Development Lab</span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-slide-up delay-200 text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight drop-shadow-xl" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>
            Building Digital Products That{" "}
            <span className="text-shimmer">Innovate &amp; Scale</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-slide-up delay-300 text-base sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto px-2">
            From high-converting WordPress sites and native Android apps to enterprise custom software and full college project reports — त्रिNetix delivers perfection.
          </p>

          {/* Hero Buttons */}
          <div className="animate-fade-slide-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link
              href="/services"
              className="purple-btn-gradient w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 group shadow-xl"
            >
              <span>Explore Services &amp; Pricing</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/services#student-section"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/10 border border-[#9FFFCB]/30 hover:bg-white/20 hover:border-[#9FFFCB]/60 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all backdrop-blur-sm"
            >
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-[#9FFFCB]" />
              <span>For Students Portal (₹3k)</span>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="animate-fade-slide-up delay-500 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-6 sm:pt-8 max-w-4xl mx-auto">
            {[
              { value: "₹3,999", label: "WordPress Site Starting" },
              { value: "₹15,000", label: "Android Apps Starting" },
              { value: "₹3,000", label: "College Project + Report" },
              { value: "100%", label: "Satisfaction Guaranteed" },
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-md border border-[#9FFFCB]/30 p-3 sm:p-4 rounded-2xl text-center space-y-1 hover:bg-white/15 hover:border-[#9FFFCB]/50 hover:-translate-y-1 transition-all duration-300 card-lift"
                style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
              >
                <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>{stat.value}</p>
                <p className="text-[10px] sm:text-xs text-[#9FFFCB] font-medium leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom wave fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f0f7f9] to-transparent z-20" />
      </section>

      {/* ─── SERVICES & PRICING ───────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section background glow */}
        <div className="purple-glow-bg -top-20 right-0 opacity-20 pointer-events-none" />

        <div className="text-center space-y-4 mb-10 sm:mb-12">
          <div className="animate-fade-slide-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full label-pill">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Offerings</span>
          </div>
          <h2 className="animate-fade-slide-up delay-100 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>
            Transparent <span className="purple-text-gradient">Pricing &amp; Services</span>
          </h2>
          <p className="animate-fade-slide-up delay-200 text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
            No hidden fees. Premium web &amp; mobile engineering tailored to your budget and exact requirements.
          </p>

          {/* Toggle Switch */}
          <div className="inline-flex p-1.5 rounded-xl bg-slate-100 border border-slate-200 mt-4">
            <button
              onClick={() => setActiveTab("pro")}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "pro"
                  ? "bg-white text-teal-700 shadow-sm border border-slate-200"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Professional Services
            </button>
            <button
              onClick={() => setActiveTab("student")}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 transition-all ${
                activeTab === "student"
                  ? "bg-white text-teal-700 shadow-sm border border-slate-200"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">For Students Special</span>
              <span className="xs:hidden">Students</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        {activeTab === "pro" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WordPress Card */}
            <div className="glass-card-purple p-8 rounded-3xl relative flex flex-col justify-between card-lift border border-teal-200 animate-fade-slide-up">
              <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#004E64] text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                Most Popular
              </div>
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl teal-icon-box flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>WordPress Website</h3>
                  <p className="text-slate-500 text-xs mt-1">Fast, responsive &amp; custom designed</p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>₹3,999</span>
                    <span className="text-slate-400 text-xs">/ fixed price</span>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 border-t border-teal-100 pt-6">
                  {["Custom WordPress Theme Setup", "SEO & Speed Optimized (<1s load)", "Mobile Responsive Layout", "Contact Form & Social Integration"].map(f => (
                    <li key={f} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact" className="mt-8 purple-btn-gradient w-full py-3.5 rounded-full text-center font-semibold text-sm text-white block">
                Get WordPress Site
              </Link>
            </div>

            {/* Custom Projects Card */}
            <div className="glass-card p-8 rounded-3xl relative flex flex-col justify-between card-lift animate-fade-slide-up delay-100">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl teal-icon-box flex items-center justify-center">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>Custom Web Projects</h3>
                  <p className="text-slate-500 text-xs mt-1">Next.js / React / Flask Solutions</p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>₹8,000</span>
                    <span className="text-slate-400 text-xs">starting rate</span>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 border-t border-slate-100 pt-6">
                  {["Fullstack Architecture (Next.js + Flask)", "Custom RESTful API & Database", "High Security & Scalability", "Pricing adjusted per requirement"].map(f => (
                    <li key={f} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact" className="mt-8 bg-slate-100 hover:bg-slate-200 border border-slate-200 w-full py-3.5 rounded-full text-center font-semibold text-sm text-slate-700 block transition-all">
                Discuss Custom Project
              </Link>
            </div>

            {/* Android App Card */}
            <div className="glass-card p-8 rounded-3xl relative flex flex-col justify-between card-lift animate-fade-slide-up delay-200">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl teal-icon-box flex items-center justify-center">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>Android Application</h3>
                  <p className="text-slate-500 text-xs mt-1">Native &amp; Cross-Platform Mobile Apps</p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>₹15,000</span>
                    <span className="text-slate-400 text-xs">starting rate</span>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 border-t border-slate-100 pt-6">
                  {["Sleek Mobile UI/UX Interface", "Backend Sync & Push Notifications", "Google Play Store Ready Package", "Full Maintenance & Support"].map(f => (
                    <li key={f} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact" className="mt-8 bg-slate-100 hover:bg-slate-200 border border-slate-200 w-full py-3.5 rounded-full text-center font-semibold text-sm text-slate-700 block transition-all">
                Order Android App
              </Link>
            </div>
          </div>
        ) : (
          /* Student Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-card-purple p-8 rounded-3xl relative flex flex-col justify-between card-lift border-2 border-teal-300/60 animate-fade-slide-up">
              <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-teal-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                Student Pack
              </div>
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl teal-icon-box flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>College Project &amp; Report</h3>
                  <p className="text-slate-500 text-xs mt-1">Complete source code + IEEE/University report</p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>₹3,000</span>
                    <span className="text-slate-400 text-xs">all-inclusive</span>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 border-t border-teal-100 pt-6">
                  {["Fully Tested Bug-Free Source Code", "Detailed Project Documentation & Report", "System Architecture Diagrams & ERDs", "Viva Voce Questions & Setup Guide"].map(f => (
                    <li key={f} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/services#student-section" className="mt-8 purple-btn-gradient w-full py-3.5 rounded-full text-center font-semibold text-sm text-white block">
                Order College Project
              </Link>
            </div>

            <div className="glass-card p-8 rounded-3xl relative flex flex-col justify-between card-lift animate-fade-slide-up delay-100">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-[#9FFFCB]/25 border border-[#25A18E]/30 flex items-center justify-center text-[#004E64]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>Urgent Express Delivery</h3>
                  <p className="text-slate-500 text-xs mt-1">Need project within 24 to 48 hours?</p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-[#004E64]" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>+ ₹1,000</span>
                    <span className="text-slate-400 text-xs">add-on fee</span>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 border-t border-slate-100 pt-6">
                  {["Guaranteed 24-48 Hours Turnaround", "Priority Developer Assignment", "Direct Remote Setup Support (AnyDesk/TeamViewer)"].map(f => (
                    <li key={f} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#25A18E] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact?type=urgent" className="mt-8 bg-[#9FFFCB]/20 hover:bg-[#9FFFCB]/35 border border-[#25A18E]/30 w-full py-3.5 rounded-full text-center font-semibold text-sm text-[#004E64] block transition-all">
                Request Express Delivery
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* ─── LEADERSHIP SECTION ───────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-6 sm:p-8 lg:p-12 rounded-3xl relative overflow-hidden">
          {/* decorative corner glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
          <div className="geo-dot-grid absolute top-0 right-0 w-48 h-48 opacity-[0.04]" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full label-pill">
                <UserCheck className="w-3.5 h-3.5" />
                <span>Leadership Team</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>
                Meet the Experts Behind <span className="purple-text-gradient">त्रिNetix</span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                त्रिNetix is driven by passion, technical precision, and a commitment to helping businesses and students succeed. Founded by visionary developers with years of hands-on software engineering experience.
              </p>
              <Link href="/about" className="purple-btn-gradient px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-white font-semibold text-sm inline-flex items-center justify-center gap-2 hover:gap-3 transition-all">
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Founder Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="glass-card-purple p-5 sm:p-6 rounded-2xl space-y-3 sm:space-y-4 text-center card-lift group">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 to-teal-700 opacity-0 group-hover:opacity-100 blur-md scale-110 transition-all duration-500" />
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-teal-400 to-teal-700 flex items-center justify-center text-white text-xl sm:text-2xl font-bold border-2 border-teal-300 shadow-lg" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>
                    JR
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">Mr. Jatin Rajput</h3>
                  <p className="text-xs text-teal-600 font-semibold uppercase tracking-wider mt-1">
                    Co-Founder &amp; Tech Lead
                  </p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Fullstack Architect specializing in Next.js, Python Flask APIs, scalable cloud backends, and app security.
                </p>
              </div>

              <div className="glass-card-purple p-5 sm:p-6 rounded-2xl space-y-3 sm:space-y-4 text-center card-lift group">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00A5CF] to-[#004E64] opacity-0 group-hover:opacity-100 blur-md scale-110 transition-all duration-500" />
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#00A5CF] to-[#004E64] flex items-center justify-center text-white text-xl sm:text-2xl font-bold border-2 border-[#9FFFCB] shadow-lg" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>
                    BS
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">Ms. Bharti Singh</h3>
                  <p className="text-xs text-teal-600 font-semibold uppercase tracking-wider mt-1">
                    Co-Founder &amp; Creative Lead
                  </p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Web &amp; UI/UX Expert specializing in WordPress, Android frontend, and interactive web application design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ──────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl group">
          <Image src="/hero-bg.png" alt="CTA Background" fill className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
          <div className="absolute inset-0 bg-[#0d1b2e]/85" />
          {/* Geometric overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="geo-circle w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
            <div className="geo-dot-grid absolute top-0 right-0 w-64 h-64 opacity-[0.04]" />
          </div>
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center space-y-5 sm:space-y-6">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>
              Ready to Launch Your <span className="text-shimmer">Next Project?</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Whether you need a business website, an Android app, or urgent college project documentation, त्रिNetix is here for you.
            </p>
            <Link href="/contact" className="purple-btn-gradient px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-white font-bold text-sm sm:text-base inline-flex items-center gap-2 shadow-xl group/btn">
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
