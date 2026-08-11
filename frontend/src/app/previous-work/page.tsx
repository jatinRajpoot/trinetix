"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Globe,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Search,
  ShieldCheck,
  Zap,
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
      "Mobile-First Responsive Design",
    ],
    techStack: ["WordPress CMS", "SEO Optimized", "SSL Secured", "Fast Loading"],
    status: "Live Project",
    isFeatured: true,
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
      "Quick Online Inquiry Form",
    ],
    techStack: ["WordPress", "Custom Styling", "Speed Optimized", "Mobile Ready"],
    status: "Live Project",
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
      "Direct Call & WhatsApp Connect",
    ],
    techStack: ["WordPress", "Healthcare Schema", "Fast CDN", "Custom UI"],
    status: "Live Project",
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
      "Instant Inquiry Form",
    ],
    techStack: ["WordPress", "PHP Engine", "Security Hardened", "Responsive Layout"],
    status: "Live Project",
    isFeatured: true,
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
      "Google Maps Direction Link",
    ],
    techStack: ["WordPress CMS", "High Performance", "Mobile Optimization", "Custom Theme"],
    status: "Live Project",
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
      "Corporate Profile Showcase",
    ],
    techStack: ["WordPress CMS", "High-Res Gallery", "Lead Automation", "SEO Enabled"],
    status: "Live Project",
    isFeatured: true,
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
      "Hostinger Cloud Powered",
    ],
    techStack: ["WordPress", "Hostinger Cloud", "PHP 8.2", "Custom Theme"],
    status: "Live Demo",
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
      "Ultra Fast Cloud Hosting",
    ],
    techStack: ["WordPress", "Hostinger Cloud", "Speed Optimized", "Mobile First"],
    status: "Live Demo",
  },
];

export default function PreviousWorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = activeFilter === "All" || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = [
    { label: "All Projects", value: "All", count: projects.length },
    {
      label: "Healthcare",
      value: "Healthcare",
      count: projects.filter((p) => p.category === "Healthcare").length,
    },
    {
      label: "Real Estate",
      value: "Real Estate",
      count: projects.filter((p) => p.category === "Real Estate").length,
    },
    {
      label: "Staging Demos",
      value: "Hostinger Demos",
      count: projects.filter((p) => p.category === "Hostinger Demos").length,
    },
  ];

  return (
    <div className="bg-[var(--background)]">
      {/* ── HERO — matches Features / Pricing header ── */}
      <section className="mx-auto max-w-[1200px] px-6 lg:px-8 pt-10 sm:pt-12 pb-8">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--foreground-quaternary)]">
            Portfolio — Live deliveries
          </p>
          <h1 className="mt-3 text-[34px] font-semibold tracking-[-0.03em] leading-[0.95] text-[#1d1d1f] sm:text-[44px]">
            Previous work, live.
          </h1>
          <p className="mx-auto mt-4 max-w-[58ch] text-[15px] leading-7 text-[var(--foreground-tertiary)]">
            A curated showcase of sites by <span className="font-semibold text-[var(--foreground)]">TriNetix</span> — hospital portals, doctor portfolios, and corporate property platforms. All responsive, fast, and live in production.
          </p>

          {/* Stats — quiet strip like Home, but inside hero */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-[640px] mx-auto">
            {[
              { k: "8+", v: "Live projects" },
              { k: "100%", v: "Responsive" },
              { k: "99.9%", v: "Uptime" },
              { k: "24/7", v: "Support" },
            ].map((s) => (
              <div key={s.k} className="rounded-xl border border-[var(--border-subtle)] bg-white px-4 py-3 text-center">
                <p className="text-[20px] font-semibold tracking-[-0.02em] text-[#1d1d1f]">{s.k}</p>
                <p className="text-[11px] font-medium tracking-[0.02em] text-[var(--foreground-quaternary)] uppercase">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER BAR — Apple-like toolbar ── */}
      <section className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex flex-col gap-4 rounded-2xl border border-[var(--border-subtle)] bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const active = activeFilter === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveFilter(cat.value)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                    active
                      ? "bg-[#1d1d1f] text-white shadow-sm"
                      : "bg-[var(--surface-subtle)] text-[var(--foreground-secondary)] hover:bg-white hover:border-[var(--border)] border border-transparent"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`rounded-full px-1.5 py-0.5 text-[11px] font-semibold leading-none ${active ? "bg-white/15 text-white" : "bg-white border border-[var(--border-subtle)] text-[var(--foreground-quaternary)]"}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-[300px] shrink-0">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--foreground-quaternary)]" />
            <input
              type="text"
              placeholder="Search project or domain…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="field-input !pl-9 !py-2.5 !rounded-full bg-[var(--surface-subtle)] focus:bg-white"
              aria-label="Search projects"
            />
          </div>
        </div>
        <p className="mt-3 text-[12.5px] text-[var(--foreground-quaternary)]">
          Showing <span className="font-semibold text-[var(--foreground-secondary)]">{filteredProjects.length}</span> of {projects.length} projects
          {activeFilter !== "All" && <> · Filter: <span className="font-medium text-[var(--foreground)]">{activeFilter}</span></>}
        </p>
      </section>

      {/* ── PROJECT GRID ── */}
      <section className="mx-auto max-w-[1200px] px-6 lg:px-8 mt-6 pb-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card flex flex-col overflow-hidden p-0">
              {/* Browser chrome — subtle, matches Home preview */}
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] bg-[var(--surface-subtle)] px-3.5 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56] border border-black/10" aria-hidden />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-black/10" aria-hidden />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f] border border-black/10" aria-hidden />
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-white px-2.5 py-1">
                  <Globe className="h-3 w-3 text-[var(--foreground-quaternary)]" />
                  <span className="max-w-[160px] truncate font-mono text-[11px] text-[var(--foreground-tertiary)]">{project.domain}</span>
                </div>
                <span className="hidden items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 sm:inline-flex">
                  <ShieldCheck className="h-3 w-3" /> SSL
                </span>
              </div>

              {/* Header — category + featured */}
              <div className="px-6 pt-5">
                <div className="flex items-start justify-between gap-3">
                  <span className="badge">{project.categoryLabel}</span>
                  {project.isFeatured && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#1d1d1f] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-white">
                      <Sparkles className="h-3 w-3" aria-hidden /> Featured
                    </span>
                  )}
                </div>
                <h3 className="mt-3 text-[17px] font-semibold leading-tight tracking-[-0.015em] text-[#1d1d1f]">{project.title}</h3>
                <p className="mt-1 flex items-center gap-1 font-mono text-[11.5px] text-[var(--foreground-quaternary)]">
                  <Globe className="h-3 w-3" /> {project.domain}
                </p>
                <p className="mt-3 text-[13.5px] leading-6 text-[var(--foreground-tertiary)] line-clamp-3">{project.description}</p>
              </div>

              {/* Body */}
              <div className="px-6 pt-4 space-y-4 flex-1">
                <div className="border-t border-[var(--border-subtle)] pt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--foreground-quaternary)]">Key deliverables</p>
                  <ul className="mt-2 space-y-1.5">
                    {project.features.map((feat) => (
                      <li key={feat} className="flex gap-2 text-[13px] leading-5 text-[var(--foreground-secondary)]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="badge !text-[11px] !py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer actions */}
              <div className="p-6 pt-4 mt-4 border-t border-[var(--border-subtle)] bg-[var(--surface-subtle)]/50 space-y-2.5">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  Visit live website <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
                <Link
                  href={`/contact?project=${encodeURIComponent(project.title)}`}
                  className="btn-secondary w-full justify-center bg-white"
                >
                  Need similar? Contact us
                </Link>
                <p className="text-center text-[11px] text-[var(--foreground-quaternary)]">{project.status}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mx-auto mt-12 max-w-[520px] rounded-2xl border border-[var(--border-subtle)] bg-white p-8 text-center">
            <Search className="mx-auto h-10 w-10 text-[var(--border)]" />
            <h3 className="mt-3 text-[15px] font-semibold">No projects found</h3>
            <p className="mt-1 text-[13.5px] leading-5 text-[var(--foreground-tertiary)]">Try clearing the filter or search term.</p>
            <button onClick={() => { setActiveFilter("All"); setSearchQuery(""); }} className="btn-secondary mt-4">
              Reset filters
            </button>
          </div>
        )}
      </section>

      {/* ── BOTTOM CTA — restrained dark block like Home ── */}
      <section className="mx-auto max-w-[1200px] px-6 lg:px-8 pb-16">
        <div className="rounded-2xl bg-[#1d1d1f] px-8 py-10 sm:px-10 sm:py-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1">
              <Zap className="h-3.5 w-3.5 text-white/80" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/80">Start your project</span>
            </div>
            <h2 className="mt-4 text-[24px] font-semibold tracking-[-0.02em] text-white sm:text-[28px]">Want a site like these for your business?</h2>
            <p className="mt-2 max-w-[56ch] text-[14px] leading-6 text-white/60">
              WordPress from <span className="font-semibold text-white">₹3,999</span> · Hospital & real-estate portals · Android apps from ₹15k. Fixed price, 48h preview, founder-led.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#1d1d1f] hover:bg-white/90 transition-colors">
              Start your project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-[14px] font-medium text-white hover:bg-white/10 transition-colors">
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
