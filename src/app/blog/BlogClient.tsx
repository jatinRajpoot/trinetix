"use client";

import {useMemo,useState} from "react";
import Link from "next/link";
import {ArrowUpRight,Search} from "lucide-react";
import {BLOGS} from "@/data/blogs";

const topics=["All notes","Web Design","Architecture","Students"];
const color={Architecture:"journal-plum","Web Design":"journal-lime",Students:"journal-peach"} as Record<string,string>;
const symbol={Architecture:"{ }","Web Design":"↗",Students:"✳"} as Record<string,string>;

export default function BlogClient(){
  const [query,setQuery]=useState("");
  const [topic,setTopic]=useState("All notes");
  const articles=useMemo(()=>BLOGS.filter(post=>{
    const matchesTopic=topic==="All notes"||post.category===topic;
    const matchesQuery=`${post.title} ${post.excerpt}`.toLowerCase().includes(query.trim().toLowerCase());
    return matchesTopic&&matchesQuery;
  }),[query,topic]);
  return <div className="journal-browser"><div className="journal-toolbar"><div className="journal-filters" role="group" aria-label="Filter articles">{topics.map(item=><button type="button" key={item} onClick={()=>setTopic(item)} aria-pressed={topic===item}>{item}</button>)}</div><label className="journal-search"><span className="sr-only">Search articles</span><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search the journal"/></label></div><section className="journal-grid">{articles.map((post,index)=><article key={post.id} className="journal-card"><Link href={`/blog/${post.id}`} className="journal-card-link"><div className={`journal-cover ${color[post.category]??"journal-peach"}`}><span className="journal-cover-category">{post.category}</span><span className="journal-cover-symbol" aria-hidden="true">{symbol[post.category]??"✳"}</span><span className="journal-cover-mark">Notes from the studio.</span></div><div className="journal-card-meta"><span>{post.date}</span><span>{post.readTime} read</span></div><h2>{post.title}</h2><p>{post.excerpt}</p><span className="journal-read-link">Read article <ArrowUpRight size={17}/></span></Link></article>)}{articles.length===0&&<div className="work-empty"><p>No matching notes.</p><button type="button" onClick={()=>{setTopic("All notes");setQuery("")}}>Show all notes</button></div>}</section></div>;
}
