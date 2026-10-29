import type {Metadata} from "next";
import Link from "next/link";
import {ArrowLeft,ArrowUpRight,Clock3} from "lucide-react";
import {BLOGS,getBlogById} from "@/data/blogs";
import PageHeading from "@/components/PageHeading";

export function generateStaticParams(){return BLOGS.map(post=>({id:post.id}));}

export async function generateMetadata({params}:{params:Promise<{id:string}>}):Promise<Metadata>{
  const {id}=await params;
  const article=getBlogById(id);
  if(!article)return {title:"Article | TriNetix"};
  return {title:article.title,description:article.excerpt.slice(0,150)};
}

export default async function BlogDetail({params}:{params:Promise<{id:string}>}){
  const {id}=await params;
  const article=getBlogById(id)??BLOGS[0];
  const articleSchema={"@context":"https://schema.org","@type":"Article",headline:article.title,author:{"@type":"Person",name:article.author},datePublished:article.date};
  return <div><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleSchema)}}/><PageHeading label="From the studio journal" title={article.title} description={article.excerpt} action={{label:"Back to all notes",href:"/blog"}}/><section className="site-container journal-article-layout"><article className="journal-article"><div className="journal-article-meta"><span>{article.category}</span><span><Clock3 size={15}/>{article.readTime} read</span><span>{article.author}</span><span>{article.date}</span></div><div className="journal-article-body">{article.content.map((paragraph,index)=><p key={index}>{paragraph}</p>)}</div><Link href="/blog" className="text-link"><ArrowLeft size={17}/>More notes</Link></article><aside className="journal-article-aside"><p className="section-label"><span/> Take it further</p><h2>Working on something similar?</h2><p>Tell us what you’re trying to make easier. We’ll help you work out a practical next step.</p><Link href="/contact" className="button button-purple">Talk to the team<ArrowUpRight size={17}/></Link></aside></section></div>;
}
