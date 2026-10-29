"use client";

import { useState } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";

export const PARTNERS = [
  { name: "Keshav Hospital", url: "https://keshavhospitalkharkhoda.in", category: "Healthcare", style: "partner-keshav" },
  { name: "Roshni Healthcare", url: "https://roshnihealthcaregohana.com", category: "Healthcare", style: "partner-roshni" },
  { name: "Dr. Parveen Lakra", url: "https://drparveenlakra.in", category: "Healthcare", style: "partner-parveen" },
  { name: "Aneja Hospitals", url: "https://anejahospitals.com", category: "Healthcare", style: "partner-aneja" },
  { name: "Noble Hospital", url: "https://noblehospitalkundli.com", category: "Healthcare", style: "partner-noble" },
  { name: "Nav Durga Group", url: "https://navdurgagrouprealestatepvtltd.com", category: "Real estate", style: "partner-nav" },
];

function ClientSites({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="client-site-row" aria-hidden={duplicate || undefined}>
      {PARTNERS.map((partner) => {
        const domain = new URL(partner.url).hostname.replace(/^www\./, "");
        return (
          <a
            key={partner.name}
            className={`client-site-card ${partner.style}`}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={duplicate ? -1 : undefined}
            aria-label={duplicate ? undefined : `Visit ${partner.name}, opens in a new tab`}
          >
            <div className="client-browser-bar"><span className="client-browser-dots"><i /><i /><i /></span><span>{domain}</span><ArrowUpRight size={14} aria-hidden="true" /></div>
            <div className="client-site-screen">
              <span className="client-site-category">{partner.category}</span>
              <strong>{partner.name}</strong>
              <span className="client-site-open">Visit live site <ArrowUpRight size={13} aria-hidden="true" /></span>
              <span className="client-site-monogram" aria-hidden="true">{partner.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</span>
            </div>
            <span className="client-site-caption">Website design <i /> Development</span>
          </a>
        );
      })}
    </div>
  );
}

export default function PartnersMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <section id="clients" className="client-sites" aria-labelledby="client-sites-title">
      <div className="site-container client-sites-heading">
        <div><p className="landing-section-kicker">Good company</p><h2 id="client-sites-title">A few sites we’ve<br />put into the world.</h2></div>
        <p>Meet some of the businesses who trusted us with their digital home. Open a site to take a look around.</p>
      </div>
      <div className="client-sites-stage">
        <div className={`client-sites-track${paused ? " is-paused" : ""}`}>
          <ClientSites />
          <ClientSites duplicate />
        </div>
      </div>
      <div className="site-container client-sites-controls">
        <p className="client-sites-hint">Select any site to visit it.</p>
        <button type="button" className="client-sites-toggle" onClick={() => setPaused(!paused)} aria-pressed={paused}>
          {paused ? <Play size={13} aria-hidden="true" /> : <Pause size={13} aria-hidden="true" />}
          {paused ? "Resume motion" : "Pause motion"}
        </button>
      </div>
    </section>
  );
}
