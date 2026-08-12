import type { Metadata } from "next";
import Link from "next/link";
import { Leaf } from "lucide-react";

export const metadata: Metadata = { title: "Atelier Documentation", description: "TriNetix Atelier docs — considered setup, deployment & craft notes." };

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-[960px] px-6 lg:px-8 pb-16">
      <section className="pt-10 sm:pt-12">
        <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]"><Leaf className="h-3 w-3" /> Documentation</p>
        <h1 className="mt-3 text-[34px] font-semibold tracking-[-0.035em] leading-[0.92] text-[var(--foreground)] sm:text-[44px]">Build, ship,<br/><span className="font-normal italic text-[var(--foreground-tertiary)]">and hand over — precisely.</span></h1>
        <p className="mt-4 max-w-[60ch] text-[15px] leading-7 text-[var(--foreground-tertiary)]">Minimal atelier docs for the stack we compose with. Every commission ships with its own pristine README — this is the shared baseline.</p>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-[220px_1fr]">
        <nav aria-label="Docs" className="hidden lg:block sticky top-[76px] h-fit rounded-xl border border-[var(--border-subtle)] bg-white p-4 text-[13px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--foreground-quaternary)]">Contents</p>
          <ul className="mt-3 space-y-2">
            {["Getting started","Local setup","Deployment","WordPress guide","Academic report"].map(s=>(
              <li key={s}><a href={`#${s.replace(/\s+/g,'-').toLowerCase()}`} className="text-[var(--foreground-tertiary)] hover:text-[var(--accent)]">{s}</a></li>
            ))}
          </ul>
        </nav>

        <div className="space-y-6">
          {[
            { id:"getting-started", title:"Getting started", body:"Clone the atelier repo and install dependencies. A single static Next.js build — no API server — with everything (content, pricing, notes) compiled in at build time." },
            { id:"local-setup", title:"Local setup", body:"npm install && npm run dev (http://localhost:3000). Content lives in src/data as TypeScript modules — edit there, rebuild, ship. No database, no API to run." },
            { id:"deployment", title:"Deployment", body:"npm run build emits a fully static site to out/. Deploy to any CDN — Netlify, Vercel, Cloudflare Pages, S3. Global edge caching, zero servers to maintain." },
            { id:"wordpress-guide", title:"WordPress atelier guide", body:"Bespoke theme, limited plugins, object cache & image finesse. Atelier training — roles, menus, editorial workflow." },
            { id:"academic-report", title:"Academic report", body:"IEEE sections — Synopsis, SRS, DFD L0/L1, ERD, schema, tests & viva Q&A. Runnable code with setup script — defensible, not decorated." },
          ].map(s=>(
            <section key={s.id} id={s.id} className="scroll-mt-20 rounded-2xl border border-[var(--border-subtle)] bg-white p-6 sm:p-7">
              <h2 className="text-[16px] font-semibold tracking-[-0.015em]">{s.title}</h2>
              <p className="mt-2 text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">{s.body}</p>
              <div className="mt-4 rounded-lg bg-[#122019] px-3 py-2.5 text-[12.5px] font-mono text-white/90 overflow-x-auto border border-[var(--accent)]/20">
                {s.id==="local-setup" ? "npm install && npm run dev  # http://localhost:3000" : s.id==="deployment" ? "npm run build && npx serve out  # static site" : "# See atelier README for commands"}
              </div>
            </section>
          ))}

          <div className="rounded-xl border border-[var(--accent-muted)] bg-[var(--accent-soft)] p-5 text-[13px] leading-6 text-[var(--foreground-secondary)]">
            Need commission-specific docs? Every atelier delivery includes a tailored README with setup, env, and architecture. <Link href="/contact" className="font-medium underline underline-offset-4 text-[var(--accent)]">Ask for a sample</Link>.
          </div>
        </div>
      </div>
    </div>
  );
}
