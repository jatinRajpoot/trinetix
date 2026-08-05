import React from "react";
import Link from "next/link";
import { Home, Sparkles, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Glows & Patterns */}
      <div className="purple-glow-bg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none" />
      <div className="geo-dot-grid absolute inset-0 opacity-[0.04] pointer-events-none" />
      <div className="geo-circle w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 pointer-events-none" />

      <div className="max-w-2xl w-full text-center space-y-8 relative z-10 py-12">
        {/* 404 Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full label-pill animate-fade-slide-up">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Page Not Found</span>
        </div>

        {/* Big 404 Graphic Heading */}
        <div className="space-y-3 animate-fade-slide-up delay-100">
          <h1 className="text-7xl sm:text-9xl font-black text-shimmer tracking-tighter">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Oops! This page could not be found.
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            The link you followed doesn't exist or may have been moved. Let's get you back on track!
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-slide-up delay-200">
          <Link
            href="/"
            className="purple-btn-gradient w-full sm:w-auto px-6 py-3.5 rounded-full text-white font-semibold text-sm flex items-center justify-center gap-2 hover:scale-105 transition-transform"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white border border-slate-200 hover:border-teal-300 text-slate-700 font-semibold text-sm flex items-center justify-center gap-2 shadow-xs hover:scale-105 transition-transform"
          >
            <Compass className="w-4 h-4 text-teal-600" />
            <span>Explore Services</span>
          </Link>
        </div>

        {/* Quick Route Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 animate-fade-slide-up delay-300">
          <Link
            href="/services#student-section"
            className="p-4 rounded-2xl bg-white/80 border border-slate-200 hover:border-teal-300 text-left space-y-1 card-lift group"
          >
            <p className="font-bold text-slate-900 text-xs group-hover:text-teal-600 transition-colors">Student Projects</p>
            <p className="text-[11px] text-slate-500">₹3,000 Academic Pack</p>
          </Link>
          <Link
            href="/blog"
            className="p-4 rounded-2xl bg-white/80 border border-slate-200 hover:border-teal-300 text-left space-y-1 card-lift group"
          >
            <p className="font-bold text-slate-900 text-xs group-hover:text-teal-600 transition-colors">Tech Articles</p>
            <p className="text-[11px] text-slate-500">Guides &amp; Tech Blog</p>
          </Link>
          <Link
            href="/contact"
            className="p-4 rounded-2xl bg-white/80 border border-slate-200 hover:border-teal-300 text-left space-y-1 card-lift group"
          >
            <p className="font-bold text-slate-900 text-xs group-hover:text-teal-600 transition-colors">Contact Support</p>
            <p className="text-[11px] text-slate-500">24/7 Helpline &amp; WhatsApp</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
