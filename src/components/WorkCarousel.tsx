"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";

const projects = [
  {
    client: "Keshav Hospital Kharkhoda",
    sector: "Healthcare · Live website",
    url: "https://keshavhospitalkharkhoda.in",
    image: "/images/healthcare-clinic.jpg",
    imageAlt: "Doctor holding a phone, representing how patients look for care online",
    index: "01",
    title: "Make the right care easier to find.",
    description: "A hospital website that puts doctors, services, emergency contact details and appointment information within easy reach.",
    note: "Illustrative photo · View the live website",
  },
  {
    client: "Roshni Healthcare Gohana",
    sector: "Healthcare · Live website",
    url: "https://roshnihealthcaregohana.com",
    image: "/images/doctor-portrait.jpg",
    imageAlt: "Doctor portrait used as editorial imagery for a healthcare project",
    index: "02",
    title: "Give patients a clearer first step.",
    description: "A straightforward digital home for clinic and diagnostic services, patient guidance and the details visitors need before they arrive.",
    note: "Illustrative photo · View the live website",
  },
  {
    client: "Nav Durga Group",
    sector: "Property · Live website",
    url: "https://navdurgagrouprealestatepvtltd.com",
    image: "/images/urban-architecture.jpg",
    imageAlt: "Modern commercial buildings seen from below, representing property development",
    index: "03",
    title: "Present property with more purpose.",
    description: "A company website that brings projects, floor plans and enquiry options together in one place for prospective buyers.",
    note: "Illustrative photo · View the live website",
  },
];

export default function WorkCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [motionAllowed, setMotionAllowed] = useState(false);
  const project = projects[active];

  const move = useCallback((direction: number) => {
    setActive((current) => (current + direction + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMotionAllowed(!query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || !motionAllowed) return;
    const timer = window.setInterval(() => move(1), 7000);
    return () => window.clearInterval(timer);
  }, [active, motionAllowed, move, paused]);

  return (
    <div className="relative grid overflow-hidden border border-[#d6d0c5] bg-[#ede9df] text-[var(--foreground)] lg:min-h-[480px] lg:grid-cols-[.78fr_1.22fr]">
      <div className="relative z-10 flex flex-col justify-between p-6 sm:p-9 lg:p-11">
        <div>
          <div className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[.13em] text-[var(--foreground-tertiary)]"><span>{project.index} / 0{projects.length}</span><span className="h-px w-8 bg-[var(--accent)]" /><span aria-live="polite">{project.sector}</span></div>
          <div key={project.client} className="carousel-copy mt-10">
            <p className="text-[11px] font-semibold uppercase tracking-[.09em] text-[var(--accent)]">{project.client}</p>
            <h3 className="mt-3 max-w-[420px] text-[32px] font-medium leading-[1.05] tracking-[-.06em] sm:text-[42px]">{project.title}</h3>
            <p className="mt-4 max-w-[380px] text-[13px] leading-6 text-[var(--foreground-tertiary)]">{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="group mt-6 inline-flex items-center gap-2 border-b border-[var(--accent)] pb-1 text-[11px] font-semibold uppercase tracking-[.055em] text-[var(--foreground)]">Open live project <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-[#d6d0c5] pt-4">
          <div className="flex items-center gap-2" aria-label={`Project ${active + 1} of ${projects.length}`}>
            {projects.map((item, index) => <button key={item.client} type="button" onClick={() => setActive(index)} aria-label={`Show project ${index + 1}: ${item.client}`} aria-current={index === active ? "true" : undefined} className={`h-[3px] transition-all duration-300 ${index === active ? "w-9 bg-[var(--accent)]" : "w-5 bg-[#c7c1b6] hover:bg-[#888278]"}`} />)}
          </div>
          <div className="flex items-center gap-1">
            <button type="button" onClick={() => move(-1)} aria-label="Previous project" className="flex h-9 w-9 items-center justify-center border border-[#d0cabf] text-[var(--foreground)] transition-colors hover:bg-white"><ArrowLeft className="h-4 w-4" /></button>
            <button type="button" onClick={() => move(1)} aria-label="Next project" className="flex h-9 w-9 items-center justify-center border border-[#d0cabf] text-[var(--foreground)] transition-colors hover:bg-white"><ArrowRight className="h-4 w-4" /></button>
            <button type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Play slideshow" : "Pause slideshow"} className="ml-2 flex h-9 w-9 items-center justify-center text-[var(--foreground-tertiary)] transition-colors hover:text-[var(--accent)]">{paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}</button>
          </div>
        </div>
      </div>

      <div key={project.image} className="carousel-image relative min-h-[300px] overflow-hidden bg-[#d3d0c8] sm:min-h-[390px] lg:min-h-full">
        <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" priority={active === 0} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f211d]/55 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 sm:bottom-6 sm:left-6 sm:right-6">
          <p className="image-caption">{project.note}</p>
          <Link href="/previous-work" className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-white/60 bg-black/15 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[var(--foreground)]" aria-label="Browse all projects"><ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </div>
  );
}
