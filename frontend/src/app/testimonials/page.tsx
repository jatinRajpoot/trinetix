"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Star, Quote, GraduationCap, User, Sparkles, PlusCircle, CheckCircle2, X } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  type: string;
  avatar: string;
  comment: string;
  rating: number;
}

const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rohan Sharma",
    role: "E-Commerce Startup Founder",
    type: "Client",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    comment: "TriNetix transformed our online store! The WordPress website built for ₹3,999 was fast, responsive, and ready in 3 days. Sales went up by 40%.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "B.Tech Computer Science Student",
    type: "Student",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    comment: "I needed an urgent college project with a complete IEEE report in 48 hours. Mr. Jatin and Ms. Bharti delivered flawless Python code and documentation. Scored an A+ grade!",
    rating: 5
  },
  {
    id: 3,
    name: "Vikramaditya Singh",
    role: "Mobile App Client",
    type: "Client",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    comment: "The Android app designed by TriNetix for ₹15,000 exceeded our expectations. Beautiful dark purple UI, push notifications, and clean Flutter backend code.",
    rating: 5
  },
  {
    id: 4,
    name: "Aman Gupta",
    role: "BCA Final Year Student",
    type: "Student",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    comment: "The ₹3,000 college project pack included everything: full source code, database ERD, setup guide, and viva Q&A session. Super supportive team!",
    rating: 5
  }
];

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [filterType, setFilterType] = useState<"All" | "Client" | "Student">("All");

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newType, setNewType] = useState("Client");
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/testimonials")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setTestimonials(data.data);
        }
      })
      .catch(() => {});
  }, []);

  const filteredTestimonials = testimonials.filter((item) => {
    if (filterType === "All") return true;
    return item.type.toLowerCase() === filterType.toLowerCase();
  });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: Testimonial = {
      id: testimonials.length + 1,
      name: newName,
      role: newRole,
      type: newType,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
      comment: newComment,
      rating: newRating
    };
    setTestimonials([newEntry, ...testimonials]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setShowModal(false);
      setNewName("");
      setNewRole("");
      setNewComment("");
    }, 1500);
  };

  return (
    <div className="space-y-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Background Glow */}
      <div className="purple-glow-bg top-10 right-10 opacity-30 pointer-events-none"></div>
      <div className="geo-dot-grid absolute top-0 right-0 w-64 h-64 opacity-[0.04] pointer-events-none" />

      {/* Header */}
      <section className="text-center space-y-6 pt-6 max-w-4xl mx-auto">
        <div className="animate-fade-slide-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full label-pill">
          <Star className="w-3.5 h-3.5 fill-current" />
          <span>Client &amp; Student Feedback</span>
        </div>

        <h1 className="animate-fade-slide-up delay-100 text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>
          What Our Clients &amp; <span className="purple-text-gradient">Students Say</span>
        </h1>

        <p className="animate-fade-slide-up delay-200 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
          Read real reviews from startup founders, business owners, and engineering students who built their projects with TriNetix.
        </p>

        {/* Filters & Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-b border-slate-200 pb-6">
          <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
            {["All", "Client", "Student"].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type as "All" | "Client" | "Student")}
                className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all ${
                  filterType === type
                    ? "bg-white text-teal-700 shadow-sm border border-slate-200 scale-[1.02]"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {type === "Student" ? "Students (Academic)" : type === "Client" ? "Client Projects" : "All Reviews"}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="purple-btn-gradient px-5 py-2.5 rounded-xl text-white font-semibold text-xs flex items-center gap-2 hover:scale-105"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Submit Your Review</span>
          </button>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredTestimonials.map((item, idx) => (
          <div
            key={item.id}
            className="glass-card p-8 rounded-3xl space-y-6 relative flex flex-col justify-between card-lift group animate-fade-slide-up overflow-hidden"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {/* Top gradient reveal */}
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#004E64] via-[#00A5CF] to-[#25A18E] opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-t-3xl" />

            {/* Quote Icon — float animation on hover */}
            <Quote className="w-10 h-10 text-[#00A5CF]/20 absolute top-6 right-6 group-hover:text-[#00A5CF]/40 group-hover:-translate-y-1 transition-all duration-500" />

            <div className="space-y-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400 animate-fade-in"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  />
                ))}
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic">
                &ldquo;{item.comment}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-700 flex items-center justify-center text-white font-bold text-lg border border-teal-300 shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>
                {item.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">{item.name}</h3>
                <p className="text-xs text-teal-600 font-medium">{item.role}</p>
              </div>
              <span className="ml-auto text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700">
                {item.type}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* CTA to contact */}
      <section className="text-center space-y-4">
        <p className="text-slate-500 text-sm">Ready to join our growing list of satisfied clients?</p>
        <Link href="/contact" className="purple-btn-gradient px-8 py-4 rounded-full text-white font-bold text-base inline-flex items-center gap-2 shadow-lg hover:scale-105 transition-transform">
          <Sparkles className="w-5 h-5" />
          <span>Start Your Project Today</span>
        </Link>
      </section>

      {/* Review Submission Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-2xl max-w-md w-full space-y-6 relative animate-scale-in">
            {/* Decorative top gradient */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#004E64] via-[#00A5CF] to-[#25A18E] rounded-t-3xl" />

            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>Submit Your Review</h3>
              <button
                onClick={() => setShowModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-700 transition-all hover:scale-110"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {submittedMessage ? (
              <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-800 text-sm text-center flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600" />
                <span>Thank you! Your review has been added.</span>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="e.g. Rahul Verma"
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Your Role / College</label>
                  <input
                    type="text"
                    required
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    placeholder="e.g. B.Tech Student or Business Owner"
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Project Category</label>
                  <select
                    value={newType}
                    onChange={(e) => setNewType(e.target.value)}
                    className="form-input"
                  >
                    <option value="Client">Client Business Project</option>
                    <option value="Student">Student Academic Project</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Rating</label>
                  <select
                    value={newRating}
                    onChange={(e) => setNewRating(Number(e.target.value))}
                    className="form-input"
                  >
                    <option value={5}>5 Stars (Excellent)</option>
                    <option value={4}>4 Stars (Very Good)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Your Review / Comment</label>
                  <textarea
                    rows={3}
                    required
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Share your experience working with TriNetix..."
                    className="form-input resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="purple-btn-gradient w-full py-3 rounded-xl text-white font-bold text-sm hover:scale-[1.02] transition-transform"
                >
                  Submit Testimonial
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
