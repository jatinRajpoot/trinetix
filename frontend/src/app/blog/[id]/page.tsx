import React from "react";
import Link from "next/link";
import { ArrowLeft, User, Calendar, Clock, Sparkles, Share2, BookOpen } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

const ARTICLES_DATABASE: Record<string, {
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  content: string[];
}> = {
  "nextjs-flask-architecture": {
    title: "Why Next.js + Python Flask is the Ultimate Modern Tech Stack",
    category: "Architecture",
    date: "Aug 01, 2026",
    author: "Mr. Jatin Rajput",
    readTime: "5 min read",
    content: [
      "In modern web development, speed, security, and developer efficiency are critical. Next.js delivers world-class frontend performance through Server-Side Rendering (SSR) and React Server Components.",
      "On the backend, Python Flask provides a lightweight, highly customizable RESTful API layer. Python's unparalleled ecosystem for data processing, AI integrations, and rapid prototyping makes Flask the perfect microservice engine.",
      "At TriNetix, we combine Next.js on the frontend with Flask on the backend to deliver sub-second response times, modular architecture, and easy scalability for our enterprise clients."
    ]
  },
  "wordpress-conversion-tips": {
    title: "5 Key Elements of a High-Converting WordPress Site",
    category: "Web Design",
    date: "Jul 28, 2026",
    author: "Ms. Bharti Singh",
    readTime: "4 min read",
    content: [
      "Building a successful WordPress site requires more than just installing a template. It requires strategic typography, clear call-to-actions, lightweight asset loading, and mobile-first responsive design.",
      "1. Mobile-First Responsiveness: Over 70% of web traffic originates from smartphones.",
      "2. Core Web Vitals Optimization: Google ranks fast-loading websites higher.",
      "3. Clear Call-To-Action Buttons: Guide visitors seamlessly towards conversion.",
      "Our ₹3,999 WordPress package at TriNetix includes all these essential elements out of the box."
    ]
  },
  "student-project-guide": {
    title: "How to Excel in College Final-Year Computer Science Projects",
    category: "Students Corner",
    date: "Jul 20, 2026",
    author: "Mr. Jatin Rajput",
    readTime: "6 min read",
    content: [
      "Final year college projects can feel daunting, but following a structured methodology guarantees top grades and viva success.",
      "Always start with clear System Requirement Specifications (SRS) and modular architecture diagrams. Having clean, well-commented source code and a complete project report compliant with IEEE guidelines is essential.",
      "TriNetix provides college projects with complete reports for just ₹3,000, along with one-on-one viva preparation."
    ]
  }
};

export default async function BlogDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const article = ARTICLES_DATABASE[resolvedParams.id] || ARTICLES_DATABASE["nextjs-flask-architecture"];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-8">
      {/* Back button */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors pt-4"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Articles</span>
      </Link>

      <article className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8 relative overflow-hidden">
        <div className="purple-glow-bg top-0 right-0 opacity-20"></div>

        {/* Article Meta Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-semibold">
              {article.category}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-6 pt-2 border-t border-white/10 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-purple-400" />
              <span className="text-white font-medium">{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span>{article.date}</span>
            </div>
          </div>
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed border-t border-white/10 pt-8">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Author Footer Badge */}
        <div className="p-6 rounded-2xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-between">
          <div>
            <p className="text-xs text-purple-400 font-semibold uppercase">Author</p>
            <p className="text-base font-bold text-white">{article.author}</p>
            <p className="text-xs text-gray-400">Founder & Developer @ TriNetix</p>
          </div>
          <Link
            href="/contact"
            className="purple-btn-gradient px-4 py-2 rounded-lg text-xs font-semibold text-white"
          >
            Contact Author
          </Link>
        </div>
      </article>
    </div>
  );
}
