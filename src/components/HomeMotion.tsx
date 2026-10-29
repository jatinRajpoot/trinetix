"use client";

import { useEffect } from "react";

/** Enhance below-the-fold sections without hiding content when JS is unavailable. */
export default function HomeMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || !("IntersectionObserver" in window)) return;

    const sections = document.querySelectorAll<HTMLElement>(".awake-home > section:not(.awake-hero)");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.homeReveal = "visible";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: "0px 0px -32px 0px" });

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top >= window.innerHeight) {
        section.dataset.homeReveal = "pending";
        observer.observe(section);
      }
    });

    const clear = () => {
      observer.disconnect();
      sections.forEach((section) => { delete section.dataset.homeReveal; });
    };
    const onPreferenceChange = () => { if (reduced.matches) clear(); };
    reduced.addEventListener("change", onPreferenceChange);

    return () => {
      clear();
      reduced.removeEventListener("change", onPreferenceChange);
    };
  }, []);

  return null;
}
