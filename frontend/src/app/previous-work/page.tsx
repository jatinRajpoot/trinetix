"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Globe,
  ExternalLink,
  Building2,
  Stethoscope,
  LayoutGrid,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Monitor,
  Zap,
  Server,
  HeartPulse,
  Briefcase,
  Search
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  domain: string;
  url: string;
  category: "Healthcare" | "Real Estate" | "Hostinger Demos";
  categoryLabel: string;
  description: string;
  features: string[];
  techStack: string[];
  status: string;
  gradient: string;
  badgeBg: string;
  badgeText: string;
  isFeatured?: boolean;
}

const projects: Project[] = [
  {
    id: "keshav-hospital",
    title: "Keshav Hospital Kharkhoda",
    domain: "keshavhospitalkharkhoda.in",
    url: "https://keshavhospitalkharkhoda.in",
    category: "Healthcare",
    categoryLabel: "Multi-Specialty Hospital",
    description:
      "Full-featured hospital web portal featuring doctor consultation directory, emergency 24x7 hotline integration, patient appointment request system, and mobile-friendly responsive layout.",
    features: [
      "Doctor Directory & Timings",
      "24x7 Emergency Helpline Banner",
      "Specialty Healthcare Services",
      "Mobile-First Responsive Design"
    ],
    techStack: ["WordPress CMS", "SEO Optimized", "SSL Secured", "Fast Loading"],
    status: "Live Project",
    gradient: "from-teal-600 to-[#004E64]",
    badgeBg: "bg-teal-50 border-teal-200 text-teal-700",
    badgeText: "Hospital Portal",
    isFeatured: true
  },
  {
    id: "roshni-healthcare",
    title: "Roshni Healthcare Gohana",
    domain: "roshnihealthcaregohana.com",
    url: "https://roshnihealthcaregohana.com",
    category: "Healthcare",
    categoryLabel: "Clinic & Diagnostic Center",
    description:
      "Modern healthcare platform built for diagnostic lab services, doctor consultations, patient care guidelines, and online inquiry form routing.",
    features: [
      "Diagnostic Lab Service List",
      "Patient OPD Guidance",
      "Interactive Location Map & Contact",
      "Quick Online Inquiry Form"
    ],
    techStack: ["WordPress", "Custom Styling", "Speed Optimized", "Mobile Ready"],
    status: "Live Project",
    gradient: "from-[#00A5CF] to-[#004E64]",
    badgeBg: "bg-cyan-50 border-cyan-200 text-cyan-700",
    badgeText: "Clinic & Diagnostics"
  },
  {
    id: "dr-parveen-lakra",
    title: "Dr. Parveen Lakra",
    domain: "drparveenlakra.in",
    url: "https://drparveenlakra.in",
    category: "Healthcare",
    categoryLabel: "Specialist Doctor Portfolio",
    description:
      "Medical specialist website designed to highlight clinical expertise, qualifications, patient testimonials, treatment procedures, and direct contact booking.",
    features: [
      "Medical Qualifications Showcase",
      "Specialized Treatment Info",
      "Patient Care Testimonials",
      "Direct Call & WhatsApp Connect"
    ],
    techStack: ["WordPress", "Healthcare Schema", "Fast CDN", "Custom UI"],
    status: "Live Project",
    gradient: "from-[#25A18E] to-[#003342]",
    badgeBg: "bg-emerald-50 border-emerald-200 text-emerald-700",
    badgeText: "Doctor Portfolio"
  },
  {
    id: "aneja-hospitals",
    title: "Aneja Hospitals",
    domain: "anejahospitals.com",
    url: "https://anejahospitals.com",
    category: "Healthcare",
    categoryLabel: "Hospital & Diagnostic Facility",
    description:
      "Complete hospital management portal with multi-department navigation, OPD schedules, facility showcase, and online inquiry management.",
    features: [
      "Multi-Department OPD Schedules",
      "Health Checkup Packages",
      "Hospital Infrastructure Tour",
      "Instant Inquiry Form"
    ],
    techStack: ["WordPress", "PHP Engine", "Security Hardened", "Responsive Layout"],
    status: "Live Project",
    gradient: "from-blue-600 to-[#004E64]",
    badgeBg: "bg-blue-50 border-blue-200 text-blue-700",
    badgeText: "Hospital Network",
    isFeatured: true
  },
  {
    id: "noble-hospital",
    title: "Noble Hospital Kundli",
    domain: "noblehospitalkundli.com",
    url: "https://noblehospitalkundli.com",
    category: "Healthcare",
    categoryLabel: "Emergency & Critical Care",
    description:
      "High-speed emergency healthcare portal designed for rapid information access, ICU & trauma care details, specialist doctor roster, and maps integration.",
    features: [
      "Emergency Response Top Bar",
      "ICU & Critical Care Details",
      "Specialist Doctor Roster",
      "Google Maps Direction Link"
    ],
    techStack: ["WordPress CMS", "High Performance", "Mobile Optimization", "Custom Theme"],
    status: "Live Project",
    gradient: "from-teal-700 to-[#003342]",
    badgeBg: "bg-teal-50 border-teal-200 text-teal-800",
    badgeText: "Emergency Hospital"
  },
  {
    id: "nav-durga-realestate",
    title: "Nav Durga Group Real Estate Pvt Ltd",
    domain: "navdurgagrouprealestatepvtltd.com",
    url: "https://navdurgagrouprealestatepvtltd.com",
    category: "Real Estate",
    categoryLabel: "Real Estate & Property Development",
    description:
      "Corporate property showcase website featuring residential & commercial plot listings, floor plans, company profile, and automated lead capture.",
    features: [
      "Property Project Portfolio",
      "Plot & Floor Plan Gallery",
      "Inquiry & Callback Booking",
      "Corporate Profile Showcase"
    ],
    techStack: ["WordPress CMS", "High-Res Gallery", "Lead Automation", "SEO Enabled"],
    status: "Live Project",
    gradient: "from-slate-800 to-[#004E64]",
    badgeBg: "bg-purple-50 border-purple-200 text-purple-700",
    badgeText: "Real Estate Portal",
    isFeatured: true
  },
  {
    id: "hostinger-demo-1",
    title: "Hostinger Business Portal Demo",
    domain: "darkgreen-quail-641409.hostingersite.com",
    url: "https://darkgreen-quail-641409.hostingersite.com",
    category: "Hostinger Demos",
    categoryLabel: "Corporate Business Showcase",
    description:
      "Live staging environment on Hostinger Cloud showcasing custom business layout, service highlight cards, and high-conversion landing structure.",
    features: [
      "Staging Preview Environment",
      "Corporate Branding Structure",
      "Interactive Content Modules",
      "Hostinger Cloud Powered"
    ],
    techStack: ["WordPress", "Hostinger Cloud", "PHP 8.2", "Custom Theme"],
    status: "Live Demo Environment",
    gradient: "from-emerald-600 to-[#004E64]",
    badgeBg: "bg-slate-100 border-slate-300 text-slate-700",
    badgeText: "Cloud Staging Demo"
  },
  {
    id: "hostinger-demo-2",
    title: "Hostinger Enterprise Solution Demo",
    domain: "aqua-goat-720104.hostingersite.com",
    url: "https://aqua-goat-720104.hostingersite.com",
    category: "Hostinger Demos",
    categoryLabel: "Service Showcase Staging",
    description:
      "Live staging client site designed for multi-tier service catalogs, user feedback forms, modern hero banners, and lightning-fast loading speeds.",
    features: [
      "Interactive UI Elements",
      "Service Catalog Grid",
      "Smooth Navigation Bar",
      "Ultra Fast Cloud Hosting"
    ],
    techStack: ["WordPress", "Hostinger Cloud", "Speed Optimized", "Mobile First"],
    status: "Live Demo Environment",
    gradient: "from-cyan-600 to-[#003342]",
    badgeBg: "bg-slate-100 border-slate-300 text-slate-700",
    badgeText: "Cloud Staging Demo"
  }
];

export default function PreviousWorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      activeFilter === "All" || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = [
    { label: "All Projects", value: "All", count: projects.length },
    {
      label: "Healthcare & Hospitals",
      value: "Healthcare",
      count: projects.filter((p) => p.category === "Healthcare").length
    },
    {
      label: "Real Estate & Corporate",
      value: "Real Estate",
      count: projects.filter((p) => p.category === "Real Estate").length
    },
    {
      label: "Hostinger Staging Demos",
      value: "Hostinger Demos",
      count: projects.filter((p) => p.category === "Hostinger Demos").length
    }
  ];

  return (
    <div className="space-y-16 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Background ambient glows */}
      <div className="purple-glow-bg top-10 right-10 opacity-20 pointer-events-none" />
      <div className="purple-glow-bg top-[700px] left-5 opacity-15 pointer-events-none" />
      <div className="geo-dot-grid absolute top-0 right-0 w-80 h-80 opacity-[0.04] pointer-events-none" />

      {/* Hero Header Section */}
      <section className="text-center space-y-6 pt-6 sm:pt-10 max-w-4xl mx-auto">
        <div className="animate-fade-slide-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full label-pill">
          <Sparkles className="w-3.5 h-3.5 text-teal-600" />
          <span>Our Proven Portfolio</span>
        </div>

        <h1
          className="animate-fade-slide-up delay-100 text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight"
          style={{ fontFamily: "var(--font-syne, sans-serif)" }}
        >
          Explore Our <span className="purple-text-gradient">Previous Work</span> &amp; Digital Deliveries
        </h1>

        <p className="animate-fade-slide-up delay-200 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Here is a curated showcase of websites built and managed by <strong className="text-slate-900 font-bold">TriNetix</strong> — from multi-specialty hospital portals and doctor platforms to corporate real estate websites and custom staging environments.
        </p>

        {/* Quick Stats Grid */}
        <div className="animate-fade-slide-up delay-300 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4">
          <div className="glass-card p-4 rounded-2xl text-center border border-teal-100">
            <p className="text-2xl sm:text-3xl font-black text-[#004E64]" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>8+</p>
            <p className="text-xs text-slate-500 font-medium">Live Projects</p>
          </div>
          <div className="glass-card p-4 rounded-2xl text-center border border-teal-100">
            <p className="text-2xl sm:text-3xl font-black text-[#25A18E]" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>100%</p>
            <p className="text-xs text-slate-500 font-medium">Responsive &amp; Mobile-Ready</p>
          </div>
          <div className="glass-card p-4 rounded-2xl text-center border border-teal-100">
            <p className="text-2xl sm:text-3xl font-black text-[#00A5CF]" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>99.9%</p>
            <p className="text-xs text-slate-500 font-medium">Speed &amp; Uptime Optimized</p>
          </div>
          <div className="glass-card p-4 rounded-2xl text-center border border-teal-100">
            <p className="text-2xl sm:text-3xl font-black text-[#004E64]" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>24/7</p>
            <p className="text-xs text-slate-500 font-medium">Technical Support</p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-sm">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveFilter(cat.value)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? "bg-[#004E64] text-white shadow-md shadow-[#004E64]/20 scale-105"
                      : "bg-slate-100 text-slate-600 hover:bg-teal-50 hover:text-teal-700"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search website or domain..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#00A5CF] focus:bg-white transition-all"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 flex flex-col justify-between card-lift group animate-fade-slide-up"
            style={{ animationDelay: `${idx * 0.08}s` }}
          >
            <div>
              {/* Browser Window Header Mockup */}
              <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500 inline-block opacity-80" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block opacity-80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block opacity-80" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700/60 max-w-[200px] sm:max-w-[240px] truncate">
                  <Globe className="w-3 h-3 text-teal-400 shrink-0" />
                  <span className="text-[11px] text-slate-300 font-mono truncate">
                    {project.domain}
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  SSL
                </span>
              </div>

              {/* Card Banner Header */}
              <div className={`p-6 bg-gradient-to-r ${project.gradient} text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-start justify-between gap-3 relative z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${project.badgeBg}`}>
                    {project.badgeText}
                  </span>
                  {project.isFeatured && (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-900 text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3 fill-slate-900 text-slate-900" />
                      Featured
                    </span>
                  )}
                </div>

                <h3
                  className="text-xl font-bold mt-4 tracking-tight group-hover:text-[#9FFFCB] transition-colors"
                  style={{ fontFamily: "var(--font-syne, sans-serif)" }}
                >
                  {project.title}
                </h3>
                <p className="text-xs text-slate-200/90 font-mono mt-1 flex items-center gap-1">
                  <Globe className="w-3 h-3 text-[#9FFFCB]" />
                  {project.domain}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-5">
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 pt-1 border-t border-slate-100">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Key Deliverables:
                  </p>
                  <ul className="space-y-1.5">
                    {project.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="text-xs text-slate-700 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[11px] font-medium text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="p-6 pt-0 space-y-2">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full purple-btn-gradient text-white text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-lg transition-all"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
              </a>

              <Link
                href={`/contact?project=${encodeURIComponent(project.title)}`}
                className="w-full bg-slate-50 hover:bg-teal-50 border border-slate-200 text-slate-700 hover:text-teal-800 text-xs font-semibold py-2 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Need a similar website? Contact Us</span>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 glass-card rounded-3xl p-8 max-w-lg mx-auto space-y-4">
          <Search className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-xl font-bold text-slate-800">No Projects Found</h3>
          <p className="text-xs text-slate-500">
            No previous projects matched your search query. Try clearing the filter or search term.
          </p>
          <button
            onClick={() => {
              setActiveFilter("All");
              setSearchQuery("");
            }}
            className="px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-bold hover:bg-teal-700 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* High-Conversion Bottom Banner */}
      <section className="glass-card-purple p-8 sm:p-12 rounded-3xl text-center space-y-6 relative overflow-hidden shadow-xl">
        <div className="purple-glow-bg -top-20 -left-20 opacity-30 pointer-events-none" />
        <div className="geo-dot-grid absolute inset-0 opacity-[0.03] pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full label-pill">
          <Zap className="w-3.5 h-3.5 text-teal-600" />
          <span>Launch Your Website with TriNetix</span>
        </div>

        <h2
          className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          style={{ fontFamily: "var(--font-syne, sans-serif)" }}
        >
          Want a High-Performance Website Like These for Your Business?
        </h2>

        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Whether you need a custom WordPress site starting at <strong className="text-teal-700 font-bold">₹3,999</strong>, a hospital portal, a real estate web platform, or a native Android app, TriNetix delivers top-tier software solutions tailored for growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="purple-btn-gradient px-8 py-3.5 rounded-full text-white font-bold text-sm sm:text-base inline-flex items-center gap-2 shadow-lg group"
          >
            <span>Start Your Project Today</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/services"
            className="teal-btn px-7 py-3.5 rounded-full font-bold text-sm sm:text-base inline-flex items-center gap-2"
          >
            <span>Explore Services &amp; Pricing</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
