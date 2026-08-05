"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BookOpen, User, Clock, ArrowRight, Search } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  content: string;
}

const FALLBACK_BLOGS: BlogPost[] = [
  {
    id: "nextjs-flask-architecture",
    title: "Why Next.js + Python Flask is the Ultimate Modern Tech Stack",
    excerpt: "Discover how combining Next.js server rendering with Flask's lightweight backend APIs delivers lightning-fast fullstack web applications.",
    category: "Architecture",
    date: "Aug 01, 2026",
    author: "Mr. Jatin Rajput",
    readTime: "5 min read",
    content: "Combining Next.js for client-side dynamism and Python Flask for high-performance microservices creates an unbeatable developer experience..."
  },
  {
    id: "wordpress-conversion-tips",
    title: "5 Key Elements of a High-Converting WordPress Site",
    excerpt: "How to structure your WordPress website to maximize leads, improve page speeds under 1 second, and boost Google search ranks.",
    category: "Web Design",
    date: "Jul 28, 2026",
    author: "Ms. Bharti Singh",
    readTime: "4 min read",
    content: "A successful website isn't just about pretty colors. It requires strategic typography, clear call-to-actions, lightweight asset loading..."
  },
  {
    id: "student-project-guide",
    title: "How to Excel in College Final-Year Computer Science Projects",
    excerpt: "A step-by-step roadmap for engineering and IT students to pick, build, and present top-scoring final year projects.",
    category: "Students Corner",
    date: "Jul 20, 2026",
    author: "Mr. Jatin Rajput",
    readTime: "6 min read",
    content: "Every year, thousands of students struggle with project reports and viva preparation. Focus on modular code design, clear ER diagrams..."
  }
];

// Category accent colors (all within teal palette)
const CATEGORY_COLORS: Record<string, string> = {
  "Architecture": "bg-[#004E64]/10 text-[#004E64] border-[#004E64]/20",
  "Web Design": "bg-[#25A18E]/10 text-[#25A18E] border-[#25A18E]/20",
  "Students Corner": "bg-[#9FFFCB]/40 text-[#004E64] border-[#25A18E]/30",
  "All": "bg-teal-50 text-teal-700 border-teal-200",
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>(FALLBACK_BLOGS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setBlogs(data.data);
        }
      })
      .catch(() => {});
  }, []);

  const categories = ["All", "Architecture", "Web Design", "Students Corner"];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="purple-glow-bg top-10 right-10 opacity-20 pointer-events-none" />
      <div className="geo-dot-grid absolute top-0 right-0 w-64 h-64 opacity-[0.04] pointer-events-none" />

      {/* Header */}
      <section className="text-center space-y-6 pt-6 max-w-4xl mx-auto">
        <div className="animate-fade-slide-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full label-pill">
          <BookOpen className="w-3.5 h-3.5" />
          <span>TriNetix Tech Insights</span>
        </div>

        <h1 className="animate-fade-slide-up delay-100 text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>
          Articles, Guides &amp; <span className="purple-text-gradient">Tech Tips</span>
        </h1>

        <p className="animate-fade-slide-up delay-200 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
          Insights on web engineering, WordPress optimization, Android app design, and student project best practices written by Mr. Jatin Rajput and Ms. Bharti Singh.
        </p>

        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto pt-4 animate-fade-slide-up delay-300">
          <div className="relative w-full group">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-teal-500 transition-colors" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input pl-12"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all hover:scale-105 border ${
                  selectedCategory === cat
                    ? `${CATEGORY_COLORS[cat] || "bg-teal-600 text-white"} shadow-sm scale-105`
                    : "bg-white text-slate-600 border-slate-200 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, idx) => (
            <article
              key={blog.id}
              className="glass-card p-6 rounded-3xl flex flex-col justify-between group card-lift animate-fade-slide-up overflow-hidden relative"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Hover gradient overlay at top */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#004E64] via-[#00A5CF] to-[#25A18E] opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-t-3xl" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${CATEGORY_COLORS[blog.category] || "bg-teal-50 border-teal-200 text-teal-700"}`}>
                    {blog.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {blog.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#004E64] transition-colors leading-snug" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>
                  {blog.title}
                </h2>

                <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-teal-600" />
                  <span>{blog.author}</span>
                </div>
                <Link
                  href={`/blog/${blog.id}`}
                  className="text-teal-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all hover:text-[#004E64]"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))
        ) : (
          <div className="col-span-3 text-center py-12 text-slate-500 space-y-2">
            <p className="text-lg font-semibold text-slate-800">No articles found matching your query</p>
            <p className="text-xs">Try adjusting your search terms or category selection.</p>
          </div>
        )}
      </section>
    </div>
  );
}
