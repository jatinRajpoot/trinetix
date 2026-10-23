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
  Leaf,
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
      "A hospital website with doctor information, emergency contact details, appointment requests and responsive layouts.",
    features: [
      "Doctor Directory & Timings",
      "24×7 Emergency Helpline Banner",
      "Specialty Healthcare Services",
      "Mobile-First Responsive Design",
    ],
    techStack: ["WordPress CMS", "SEO Optimized", "SSL Secured", "Fast Loading"],
    status: "Live website",
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
      "A diagnostic and consultation website with clear service information, patient guidance and a simple enquiry route.",
    features: [
      "Diagnostic Lab Service List",
      "Patient OPD Guidance",
      "Interactive Location Map & Contact",
      "Quick Online Inquiry Form",
    ],
    techStack: ["WordPress", "Custom Styling", "Speed Optimized", "Mobile Ready"],
    status: "Live website",
  },
  {
    id: "dr-parveen-lakra",
    title: "Dr. Parveen Lakra",
    domain: "drparveenlakra.in",
    url: "https://drparveenlakra.in",
    category: "Healthcare",
    categoryLabel: "Specialist Doctor Portfolio",
    description:
      "A specialist profile highlighting qualifications, treatments, patient feedback and ways to book.",
    features: [
      "Medical Qualifications Showcase",
      "Specialized Treatment Info",
      "Patient Care Testimonials",
      "Direct Call & WhatsApp Connect",
    ],
    techStack: ["WordPress", "Healthcare Schema", "Fast CDN", "Custom UI"],
    status: "Live website",
  },
  {
    id: "aneja-hospitals",
    title: "Aneja Hospitals",
    domain: "anejahospitals.com",
    url: "https://anejahospitals.com",
    category: "Healthcare",
    categoryLabel: "Hospital & Diagnostic Facility",
    description:
      "A hospital website bringing departments, OPD schedules, facilities and patient enquiries together.",
    features: [
      "Multi-Department OPD Schedules",
      "Health Checkup Packages",
      "Hospital Infrastructure Tour",
      "Instant Inquiry Form",
    ],
    techStack: ["WordPress", "PHP Engine", "Security Hardened", "Responsive Layout"],
    status: "Live website",
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
      "A hospital website that helps visitors find emergency contact, critical care information and directions.",
    features: [
      "Emergency Response Top Bar",
      "ICU & Critical Care Details",
      "Specialist Doctor Roster",
      "Google Maps Direction Link",
    ],
    techStack: ["WordPress CMS", "High Performance", "Mobile Optimization", "Custom Theme"],
    status: "Live website",
  },
  {
    id: "nav-durga-realestate",
    title: "Nav Durga Group Real Estate Pvt Ltd",
    domain: "navdurgagrouprealestatepvtltd.com",
    url: "https://navdurgagrouprealestatepvtltd.com",
    category: "Real Estate",
    categoryLabel: "Real Estate & Property Development",
    description:
      "A property website for presenting residential and commercial projects, floor plans and enquiry options.",
    features: [
      "Property Project Portfolio",
      "Plot & Floor Plan Gallery",
      "Inquiry & Callback Booking",
      "Corporate Profile Showcase",
    ],
    techStack: ["WordPress CMS", "High-Res Gallery", "Lead Automation", "SEO Enabled"],
    status: "Live website",
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
      "A business website demo exploring a clear service layout, visual highlights and enquiry flow.",
    features: [
      "Staging Preview Environment",
      "Corporate Branding Structure",
      "Interactive Content Modules",
      "Hostinger Cloud Powered",
    ],
    techStack: ["WordPress", "Hostinger Cloud", "PHP 8.2", "Custom Theme"],
    status: "Demo site",
  },
  {
    id: "hostinger-demo-2",
    title: "Hostinger Enterprise Solution Demo",
    domain: "aqua-goat-720104.hostingersite.com",
    url: "https://aqua-goat-720104.hostingersite.com",
    category: "Hostinger Demos",
    categoryLabel: "Service Showcase Staging",
    description:
      "A service website demo with a tiered catalog, enquiry form and flexible content sections.",
    features: [
      "Interactive UI Elements",
      "Service Catalog Grid",
      "Smooth Navigation Bar",
      "Ultra Fast Cloud Hosting",
    ],
    techStack: ["WordPress", "Hostinger Cloud", "Speed Optimized", "Mobile First"],
    status: "Demo site",
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
      {/* ── HERO ── */}
      <section className="mx-auto max-w-[1200px] px-6 lg:px-8 pt-10 sm:pt-12 pb-8">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
            <Leaf className="h-3 w-3" /> Selected work
          </p>
          <h1 className="mt-3 text-[34px] font-semibold tracking-[-0.035em] leading-[1.02] text-[var(--foreground)] sm:text-[48px]">
            Real businesses.<br/><span className="font-normal text-[var(--accent)]">Real websites.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[58ch] text-[15px] leading-7 text-[var(--foreground-tertiary)]">
            See a selection of live websites and demo concepts we’ve built for healthcare and property businesses. Every project starts with the people it needs to serve.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-[640px] mx-auto">
            {[
              { k: "6", v: "Launched websites" },
              { k: "2", v: "Demo concepts" },
              { k: "2", v: "Industries" },
              { k: "1:1", v: "Direct collaboration" },
            ].map((s) => (
              <div key={s.k} className="rounded-xl border border-[var(--accent-muted)] bg-white px-4 py-3 text-center shadow-sm">
                <p className="text-[20px] font-semibold tracking-[-0.02em] text-[var(--accent)]">{s.k}</p>
                <p className="text-[11px] font-medium tracking-[0.04em] text-[var(--foreground-quaternary)] uppercase">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
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
                      ? "bg-[var(--accent)] text-white shadow-sm"
                      : "bg-[var(--accent-soft)] text-[var(--foreground-secondary)] hover:bg-white border border-[var(--accent-muted)]"
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
              placeholder="Search projects…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="field-input !pl-9 !py-2.5 !rounded-full bg-[var(--accent-soft)] focus:bg-white"
              aria-label="Search projects"
            />
          </div>
        </div>
        <p className="mt-3 text-[12.5px] text-[var(--foreground-quaternary)]">
          Showing <span className="font-semibold text-[var(--accent)]">{filteredProjects.length}</span> of {projects.length} projects
          {activeFilter !== "All" && <> · Filter: <span className="font-medium text-[var(--foreground)]">{activeFilter}</span></>}
        </p>
      </section>

      {/* ── PROJECT GRID ── */}
      <section className="mx-auto max-w-[1200px] px-6 lg:px-8 mt-6 pb-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card flex flex-col overflow-hidden p-0">
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] bg-[var(--accent-soft)] px-3.5 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56] border border-black/10" aria-hidden />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-black/10" aria-hidden />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f] border border-black/10" aria-hidden />
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-white px-2.5 py-1">
                  <Globe className="h-3 w-3 text-[var(--accent)]" />
                  <span className="max-w-[160px] truncate font-mono text-[11px] text-[var(--foreground-tertiary)]">{project.domain}</span>
                </div>
                <span className="hidden items-center gap-1 rounded-full bg-[var(--accent-subtle)] border border-[var(--accent-muted)] px-2 py-0.5 text-[10px] font-semibold text-[var(--accent)] sm:inline-flex">
                  <ShieldCheck className="h-3 w-3" /> SSL
                </span>
              </div>

              <div className="px-6 pt-5">
                <div className="flex items-start justify-between gap-3">
                  <span className="badge-accent !text-[10px]">{project.categoryLabel}</span>
                  {project.isFeatured && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[var(--accent)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-white">
                      <Sparkles className="h-3 w-3" aria-hidden /> Featured
                    </span>
                  )}
                </div>
                <h3 className="mt-3 text-[17px] font-semibold leading-tight tracking-[-0.015em] text-[var(--foreground)]">{project.title}</h3>
                <p className="mt-1 flex items-center gap-1 font-mono text-[11.5px] text-[var(--foreground-quaternary)]">
                  <Globe className="h-3 w-3" /> {project.domain}
                </p>
                <p className="mt-3 text-[13.5px] leading-6 text-[var(--foreground-tertiary)] line-clamp-3">{project.description}</p>
              </div>

              <div className="px-6 pt-4 space-y-4 flex-1">
                <div className="border-t border-[var(--border-subtle)] pt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--foreground-quaternary)]">Key deliverables</p>
                  <ul className="mt-2 space-y-1.5">
                    {project.features.map((feat) => (
                      <li key={feat} className="flex gap-2 text-[13px] leading-5 text-[var(--foreground-secondary)]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden />
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

              <div className="p-6 pt-4 mt-4 border-t border-[var(--border-subtle)] bg-[var(--accent-soft)]/50 space-y-2.5">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  Visit live <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
                <Link
                  href={`/contact?project=${encodeURIComponent(project.title)}`}
                  className="btn-secondary w-full justify-center bg-white"
                >
                  Build something similar
                </Link>
                <p className="text-center text-[11px] text-[var(--foreground-quaternary)]">{project.status}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mx-auto mt-12 max-w-[520px] rounded-2xl border border-[var(--border-subtle)] bg-white p-8 text-center">
            <Search className="mx-auto h-10 w-10 text-[var(--accent)]/20" />
            <h3 className="mt-3 text-[15px] font-semibold">No projects found</h3>
            <p className="mt-1 text-[13.5px] leading-5 text-[var(--foreground-tertiary)]">Try a different filter or search.</p>
            <button onClick={() => { setActiveFilter("All"); setSearchQuery(""); }} className="btn-secondary mt-4">
              Reset filters
            </button>
          </div>
        )}
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="mx-auto max-w-[1200px] px-6 lg:px-8 pb-16">
        <div className="rounded-2xl bg-[var(--accent)] px-8 py-10 sm:px-10 sm:py-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent pointer-events-none" aria-hidden />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1">
              <Zap className="h-3.5 w-3.5 text-white/80" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/80">Let’s build yours</span>
            </div>
            <h2 className="mt-4 text-[24px] font-semibold tracking-[-0.02em] text-white sm:text-[28px]">Want a website that works like these?</h2>
            <p className="mt-2 max-w-[56ch] text-[14px] leading-6 text-white/60">
              Business websites from <span className="font-semibold text-white">₹3,999</span>. We’ll help you plan the right pages, features and next steps.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0 relative">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-colors">
              Plan my website <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-[14px] font-medium text-white hover:bg-white/10 transition-colors">
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
