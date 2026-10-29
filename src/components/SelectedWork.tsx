"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight, Heart, MoveUpRight } from "lucide-react";
import { PARTNERS } from "./PartnersMarquee";

const projects = [
  { ...PARTNERS[0], cover: "care", title: "Care that feels\ncloser to home.", wordmark: "keshav", detail: "Healthcare, with a human touch." },
  { ...PARTNERS[5], cover: "spaces", title: "A place for\nwhat’s next.", wordmark: "nav durga", detail: "Find your place in the world." },
  { ...PARTNERS[1], cover: "roshni", title: "A brighter way\nto better health.", wordmark: "roshni", detail: "Care, centred on you." },
  { ...PARTNERS[3], cover: "aneja", title: "Here for life.\nHere for you.", wordmark: "aneja", detail: "A legacy of care. A fresh perspective." },
];

export default function SelectedWork() {
  const [showAll, setShowAll] = useState(false);
  return <section id="clients" className="selected-work" aria-labelledby="work-title"><h2 id="work-title" className="work-heading">Selected work<span className="work-count">(04)</span></h2><div className="selected-grid">{projects.map(project=><a className={`selected-project project-${project.cover}`} href={project.url} key={project.name} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name}, opens in a new tab`}><div className="project-cover"><div className="project-art-nav"><b>{project.cover==="care"&&<Heart size={20} fill="currentColor"/>}{project.wordmark}<span>®</span></b><span>Made for people.</span></div><div className="project-art-copy"><span>{project.detail}</span><strong>{project.title}</strong><span className="project-mini-cta">Discover more <MoveUpRight size={13}/></span></div><div className="project-object" aria-hidden="true">{project.cover==="spaces"?<div className="building"><i/><i/><i/><i/></div>:project.cover==="roshni"?<div className="roshni-sun"><i/><i/><i/></div>:project.cover==="aneja"?<div className="care-cross"><i/><i/></div>:<div className="care-heart"><Heart strokeWidth={.8}/><span>Care comes first.</span></div>}</div><div className="project-cover-bottom"><span>{project.category}</span><span>Designed to connect.</span></div><span className="project-visit"><ArrowUpRight size={25}/></span></div><div className="selected-project-meta"><h3>{project.name}</h3><span>Web design & development <ArrowUpRight size={18}/></span></div></a>)}</div><div className="work-more"><p>Real businesses. Live websites. Click a project to explore.</p><button type="button" onClick={()=>setShowAll(!showAll)} aria-expanded={showAll} aria-controls="more-projects">{showAll?"Less is more":"Meet more of our clients"}<ArrowDown size={17} className={showAll?"turn-up":""}/></button></div>{showAll&&<div id="more-projects" className="more-projects">{PARTNERS.filter(partner=>!projects.some(project=>project.url===partner.url)).map(partner=><a key={partner.url} href={partner.url} target="_blank" rel="noopener noreferrer"><h3>{partner.name}</h3><span>{partner.category}</span><ArrowUpRight size={24}/></a>)}</div>}<p className="work-art-note">Cover artwork is a studio interpretation. Follow the links to see each live website.</p></section>;
}
