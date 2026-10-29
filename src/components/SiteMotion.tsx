"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Write progress outside React so scrolling never rerenders the page. */
export default function SiteMotion() {
  const pathname = usePathname();
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const range = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty("--page-progress", `${range > 0 ? window.scrollY / range : 0}`);
      if (!reduced.matches) document.documentElement.style.setProperty("--scroll-turn", `${window.scrollY * 0.035}deg`);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);
  return <div className="reading-progress" aria-hidden="true" />;
}
