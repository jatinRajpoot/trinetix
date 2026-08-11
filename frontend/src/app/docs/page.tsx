import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Documentation", description: "TriNetix documentation — getting started, setup, and deployment." };

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-[960px] px-6 lg:px-8 pb-16">
      <section className="pt-10 sm:pt-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--foreground-quaternary)]">Documentation</p>
        <h1 className="mt-3 text-[34px] font-semibold tracking-[-0.03em] leading-[0.95] text-[#1d1d1f] sm:text-[44px]">Build, ship, and hand over.</h1>
        <p className="mt-4 max-w-[60ch] text-[15px] leading-7 text-[var(--foreground-tertiary)]">Minimal docs for the stack we use in production. Every project ships with its own README — this is the shared baseline.</p>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-[220px_1fr]">
        <nav aria-label="Docs" className="hidden lg:block sticky top-[76px] h-fit rounded-xl border border-[var(--border-subtle)] bg-white p-4 text-[13px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--foreground-quaternary)]">Contents</p>
          <ul className="mt-3 space-y-2">
            {["Getting started","Local setup","Deployment","WordPress guide","Academic report"].map(s=>(
              <li key={s}><a href={`#${s.replace(/\s+/g,'-').toLowerCase()}`} className="text-[var(--foreground-tertiary)] hover:text-[var(--foreground)]">{s}</a></li>
            ))}
          </ul>
        </nav>

        <div className="space-y-6">
          {[
            { id:"getting-started", title:"Getting started", body:"Clone the repo, install dependencies, and copy .env.example. You get two services — Next.js frontend and Flask API — with a single docker-compose for local parity." },
            { id:"local-setup", title:"Local setup", body:"Frontend: npm install && npm run dev (http://localhost:3000). Backend: pip install -r requirements.txt && python app.py (http://localhost:5000). Environment: NEXT_PUBLIC_API_URL controls API target." },
            { id:"deployment", title:"Deployment", body:"Frontend builds as standalone Next.js. Backend runs via Gunicorn behind a reverse proxy. We set cache headers, compress assets, and pin Node/Python versions for reproducibility." },
            { id:"wordpress-guide", title:"WordPress guide", body:"Custom theme with block support, limited plugins, object caching, and image optimization. Admin training included — roles, menus, and content workflow." },
            { id:"academic-report", title:"Academic report", body:"IEEE-style report sections — Synopsis, SRS, DFD Level 0/1, ERD, schema, test cases, and viva Q&A. Code is runnable with a setup script and sample data." },
          ].map(s=>(
            <section key={s.id} id={s.id} className="scroll-mt-20 rounded-2xl border border-[var(--border-subtle)] bg-white p-6 sm:p-7">
              <h2 className="text-[16px] font-semibold tracking-[-0.015em]">{s.title}</h2>
              <p className="mt-2 text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">{s.body}</p>
              <div className="mt-4 rounded-lg bg-[#0a0a0a] px-3 py-2.5 text-[12.5px] font-mono text-white/90 overflow-x-auto">
                {s.id==="local-setup" ? "npm run dev  # frontend\npython app.py  # backend" : s.id==="deployment" ? "next build && next start --port 3000\ngunicorn -w 4 app:app" : "# See project README for commands"}
              </div>
            </section>
          ))}

          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-subtle)] p-5 text-[13px] leading-6">
            Need project-specific docs? Every delivery includes a tailored README with setup, env, and architecture. <Link href="/contact" className="font-medium underline underline-offset-4">Ask for a sample</Link>.
          </div>
        </div>
      </div>
    </div>
  );
}
