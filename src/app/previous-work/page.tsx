"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Search } from "lucide-react";

const work = [
  { id:"keshav-hospital", title:"Keshav Hospital Kharkhoda", url:"https://keshavhospitalkharkhoda.in", category:"Healthcare", kind:"Hospital website", description:"Doctor information, emergency contact details, services and appointment enquiries—all easy to reach.", photo:"/images/healthcare-clinic.jpg", alt:"Doctor using a phone, representative healthcare imagery", features:["Doctor directory", "Emergency contact", "Service information"] },
  { id:"roshni-healthcare", title:"Roshni Healthcare Gohana", url:"https://roshnihealthcaregohana.com", category:"Healthcare", kind:"Clinic & diagnostics", description:"A patient-friendly place to understand diagnostic services, clinic information and how to get in touch.", photo:"/images/doctor-portrait.jpg", alt:"Doctor portrait, representative healthcare imagery", features:["Diagnostic services", "Patient guidance", "Enquiry form"] },
  { id:"dr-parveen-lakra", title:"Dr. Parveen Lakra", url:"https://drparveenlakra.in", category:"Healthcare", kind:"Doctor profile", description:"A focused profile for qualifications, treatments and the next step in booking care.", photo:"/images/healthcare-clinic.jpg", alt:"Doctor using a phone, representative healthcare imagery", features:["Qualifications", "Treatment details", "Direct contact"] },
  { id:"aneja-hospitals", title:"Aneja Hospitals", url:"https://anejahospitals.com", category:"Healthcare", kind:"Hospital website", description:"Departments, OPD schedules, facilities and enquiries brought into a straightforward website.", photo:"/images/doctor-portrait.jpg", alt:"Doctor portrait, representative healthcare imagery", features:["Department pages", "OPD information", "Facility details"] },
  { id:"noble-hospital", title:"Noble Hospital Kundli", url:"https://noblehospitalkundli.com", category:"Healthcare", kind:"Hospital website", description:"A clear route to emergency information, critical-care services, specialists and directions.", photo:"/images/doctor-portrait.jpg", alt:"Doctor portrait, representative healthcare imagery", features:["Emergency contact", "Critical care", "Directions"] },
  { id:"nav-durga-realestate", title:"Nav Durga Group Real Estate", url:"https://navdurgagrouprealestatepvtltd.com", category:"Property", kind:"Property website", description:"A professional project showcase with property information, floor plans and enquiry options.", photo:"/images/urban-architecture.jpg", alt:"Contemporary commercial buildings, representative property imagery", features:["Project listings", "Floor plans", "Callback enquiries"] },
  { id:"hostinger-demo-1", title:"Business portal concept", url:"https://darkgreen-quail-641409.hostingersite.com", category:"Demos", kind:"Design concept", description:"A demo exploring a clearer way to present a company, its services and its value.", photo:"/images/digital-workspace.jpg", alt:"Laptop in a workspace, representative digital product imagery", features:["Service overview", "Responsive layout", "Content modules"] },
  { id:"hostinger-demo-2", title:"Service showcase concept", url:"https://aqua-goat-720104.hostingersite.com", category:"Demos", kind:"Design concept", description:"A staging concept for service discovery, grouped information and a clear enquiry route.", photo:"/images/digital-workspace.jpg", alt:"Laptop and code in a workspace, representative digital product imagery", features:["Service catalog", "Enquiry flow", "Flexible sections"] },
];

const filters = ["All work", "Healthcare", "Property", "Demos"];

export default function PreviousWorkPage() {
  const [filter, setFilter] = useState("All work");
  const [search, setSearch] = useState("");
  const projects = useMemo(() => work.filter((project) => {
    const byCategory = filter === "All work" || project.category === filter;
    const query = search.trim().toLowerCase();
    const bySearch = !query || `${project.title} ${project.kind} ${project.description}`.toLowerCase().includes(query);
    return byCategory && bySearch;
  }), [filter, search]);

  return (
    <div className="bg-[var(--background)]">
      <section className="bg-[#20241f] text-[#f4f1ea]">
        <div className="mx-auto grid max-w-[1440px] gap-7 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1fr_.65fr] lg:items-end lg:px-12 lg:py-20">
          <div><p className="section-kicker !text-[#ef8b6e]">Selected work · 6 live websites · 2 concepts</p><h1 className="mt-5 max-w-[800px] text-[44px] font-medium leading-[.97] tracking-[-.075em] sm:text-[62px]">Work built around what people need to do.</h1></div>
          <div><p className="max-w-[470px] text-[13px] leading-7 text-white/65">From finding a doctor to choosing a property, these websites put useful information and clear next steps first.</p><Link href="/contact" className="group mt-5 inline-flex items-center gap-3 border-b border-[#ef8b6e] pb-1.5 text-[10px] font-semibold uppercase tracking-[.11em] text-white">Have a project in mind? <ArrowRight className="h-3.5 w-3.5 text-[#ef8b6e] transition-transform group-hover:translate-x-1"/></Link></div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
        <div className="flex flex-col gap-5 border-b border-[var(--border)] pb-5 lg:flex-row lg:items-end lg:justify-between">
          <div><p className="section-kicker">A closer look</p><h2 className="mt-3 text-[28px] font-medium tracking-[-.055em] sm:text-[34px]">See the work that’s live.</h2><p className="mt-2 text-[11px] text-[var(--foreground-tertiary)]">Project photos are representative industry imagery, not website screenshots. Follow the link to view each live site.</p></div>
          <label className="relative w-full lg:max-w-[300px]"><span className="sr-only">Search projects</span><Search className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--foreground-quaternary)]"/><input value={search} onChange={(event)=>setSearch(event.target.value)} placeholder="Search projects" className="w-full border-b border-[var(--border-strong)] bg-transparent py-3 pl-7 pr-2 text-[12px] outline-none placeholder:text-[var(--foreground-quaternary)] focus:border-[var(--accent)]"/></label>
        </div>
        <div className="flex flex-wrap items-center gap-2 py-5" aria-label="Filter projects">{filters.map((item)=><button key={item} type="button" onClick={()=>setFilter(item)} aria-pressed={filter===item} className={`px-3 py-2 text-[9px] font-semibold uppercase tracking-[.08em] transition-colors ${filter===item?"bg-[var(--foreground)] text-white":"border border-[var(--border)] text-[var(--foreground-tertiary)] hover:border-[var(--foreground)] hover:text-[var(--foreground)]"}`}>{item}</button>)}<span className="ml-auto text-[9px] font-medium uppercase tracking-[.1em] text-[var(--foreground-quaternary)]">{projects.length} project{projects.length===1?"":"s"}</span></div>

        <div className="grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index)=><article key={project.id} className="group">
            <div className="relative aspect-[1.25/1] overflow-hidden bg-[#ded9ce]">
              <Image src={project.photo} alt={project.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"/>
              <div className="absolute left-3 top-3 bg-[#f4f1ea] px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[.08em]">{project.kind}</div>
              <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center bg-[var(--accent)] text-white"><span className="text-[10px] font-semibold">0{index+1}</span></span>
            </div>
            <div className="border-b border-[var(--border)] pb-5 pt-4">
              <div className="flex items-start justify-between gap-3"><h3 className="text-[18px] font-medium tracking-[-.04em]">{project.title}</h3><a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center border border-[var(--border)] text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white" aria-label={`Visit ${project.title}`}><ArrowUpRight className="h-3.5 w-3.5"/></a></div>
              <p className="mt-2 min-h-[55px] text-[11px] leading-5 text-[var(--foreground-tertiary)]">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-[9px] font-medium uppercase tracking-[.04em] text-[var(--foreground-quaternary)]">{project.features.map((feature)=><span key={feature}>{feature}</span>)}</div>
              <div className="mt-4 flex items-center justify-between"><a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[.09em] text-[var(--accent)]">Visit live site <ArrowUpRight className="h-3 w-3"/></a><Link href={`/contact?project=${encodeURIComponent(project.title)}`} className="text-[9px] font-semibold uppercase tracking-[.08em] text-[var(--foreground-tertiary)] hover:text-[var(--foreground)]">Make something similar</Link></div>
            </div>
          </article>)}
        </div>
        {projects.length===0&&<div className="border-y border-[var(--border)] py-16 text-center"><p className="text-[20px] font-medium tracking-[-.04em]">No matching projects.</p><button onClick={()=>{setFilter("All work");setSearch("")}} className="mt-3 text-[10px] font-semibold uppercase tracking-[.1em] text-[var(--accent)]">Reset filters</button></div>}
      </section>

      <section className="mx-5 mb-14 bg-[#e9e4da] sm:mx-8 lg:mx-12"><div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-6 py-8 sm:px-10 sm:py-10 lg:flex-row lg:items-center lg:justify-between lg:px-14"><div><p className="section-kicker">Your turn</p><h2 className="mt-2 text-[27px] font-medium tracking-[-.055em] sm:text-[34px]">What would you like your website to do?</h2></div><Link href="/contact" className="group inline-flex w-fit items-center gap-4 bg-[var(--accent)] px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[.08em] text-white hover:bg-[var(--accent-hover)]">Talk it through <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"/></Link></div></section>
    </div>
  );
}
