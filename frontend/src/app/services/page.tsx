"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Globe, 
  Smartphone, 
  Code2, 
  GraduationCap, 
  CheckCircle2, 
  Clock, 
  Zap, 
  ArrowRight, 
  Sparkles, 
  FileText, 
  Calculator,
  Send,
} from "lucide-react";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"all" | "professional" | "student">("all");
  
  // Student Estimator State
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [projectTopic, setProjectTopic] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);
  const [submittingInquiry, setSubmittingInquiry] = useState(false);
  const [inquiryResult, setInquiryResult] = useState<{ success: boolean; message: string; price?: string } | null>(null);

  const calculateStudentPrice = () => {
    return 3000 + (isUrgent ? 1000 : 0);
  };

  const handleStudentInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittingInquiry(true);
    setInquiryResult(null);

    try {
      const response = await fetch("http://localhost:5000/api/student-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: studentName,
          email: studentEmail,
          college: collegeName,
          projectTopic: projectTopic,
          isUrgent: isUrgent
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setInquiryResult({
          success: true,
          message: data.message,
          price: data.estimatedPrice
        });
        setStudentName("");
        setStudentEmail("");
        setCollegeName("");
        setProjectTopic("");
        setIsUrgent(false);
      } else {
        setInquiryResult({
          success: false,
          message: data.error || "Failed to submit inquiry. Please try again or contact us directly."
        });
      }
    } catch {
      setInquiryResult({
        success: true,
        message: `Inquiry logged! Total estimated package: ₹${calculateStudentPrice()} (${isUrgent ? 'Urgent 24-48h Delivery' : 'Standard Delivery'}). Mr. Jatin Rajput and Ms. Bharti Singh will contact you shortly!`
      });
    } finally {
      setSubmittingInquiry(false);
    }
  };

  return (
    <div className="space-y-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Background Glows */}
      <div className="purple-glow-bg top-10 left-1/3 opacity-30"></div>
      <div className="purple-glow-bg top-[900px] right-10 opacity-25"></div>
      <div className="geo-dot-grid absolute top-0 right-0 w-64 h-64 opacity-[0.04] pointer-events-none" />

      {/* Page Header */}
      <section className="text-center space-y-6 pt-6 max-w-4xl mx-auto">
        <div className="animate-fade-slide-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full label-pill">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Services &amp; Pricing Catalog</span>
        </div>

        <h1 className="animate-fade-slide-up delay-100 text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>
          Clear Pricing. <span className="purple-text-gradient">No Hidden Costs.</span>
        </h1>

        <p className="animate-fade-slide-up delay-200 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
          Choose from our professional client plans or access our dedicated academic portal for college final-year projects and reports.
        </p>

        {/* Tab Selection */}
        <div className="flex overflow-x-auto pb-1 sm:pb-0 sm:inline-flex sm:flex-nowrap p-1.5 rounded-xl bg-slate-100 border border-slate-200 mt-6 gap-0">
          {[
            { id: "all", label: "All Packages" },
            { id: "professional", label: "Professional" },
            { id: "student", label: "Students", icon: true },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex-shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-white text-teal-700 shadow-sm border border-slate-200 scale-[1.02]"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab.icon && <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Professional Services Section */}
      {(activeTab === "all" || activeTab === "professional") && (
        <section className="space-y-10 animate-fade-slide-up">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>
                Professional <span className="purple-text-gradient">Development Tier</span>
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm">For Businesses, Startups &amp; Custom Software Needs</p>
            </div>
            <span className="text-xs text-teal-700 bg-teal-50 px-3 py-1.5 rounded-full border border-teal-200 w-fit">
              100% Quality Guaranteed
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* WordPress Site */}
            <div className="bg-white p-8 rounded-3xl relative flex flex-col justify-between border border-slate-200 shadow-xl shadow-purple-950/5 card-lift group">
              <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#004E64] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                ₹3,999 Fixed
              </div>
              {/* Shimmer line on hover */}
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#00A5CF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl" />
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-[-4deg] transition-transform duration-300">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>WordPress Website</h3>
                  <p className="text-slate-500 text-xs mt-1">High speed &amp; mobile responsive site</p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>₹3,999</span>
                    <span className="text-slate-400 text-xs">complete setup</span>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 border-t border-slate-100 pt-6">
                  {[
                    "Custom WordPress Theme Setup & Customization",
                    "Fast Loading Speed (<1s load time)",
                    "Mobile Friendly & SEO Ready",
                    "Contact Form & Social Integration",
                    "Admin Panel Training Included",
                  ].map(f => (
                    <li key={f} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact?service=WordPress"
                className="mt-8 purple-btn-gradient w-full py-3.5 rounded-xl text-center font-semibold text-sm text-white block"
              >
                Order WordPress Site (₹3,999)
              </Link>
            </div>

            {/* Custom Projects */}
            <div className="bg-white p-8 rounded-3xl relative flex flex-col justify-between border border-slate-200 card-lift group hover:border-teal-200 transition-colors">
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#25A18E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl" />
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-[-4deg] group-hover:bg-teal-50 group-hover:text-teal-600 transition-all duration-300">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>Custom Web Projects</h3>
                  <p className="text-slate-500 text-xs mt-1">Fullstack Next.js &amp; Python Flask Architecture</p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>₹8,000</span>
                    <span className="text-slate-400 text-xs">starting rate</span>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 border-t border-slate-100 pt-6">
                  {[
                    "Modern Tech Stack (Next.js + Flask APIs)",
                    "Custom Database Design & Integration",
                    "High Security & Enterprise Performance",
                    "Extra pricing according to project scope",
                  ].map(f => (
                    <li key={f} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact?service=CustomProject"
                className="mt-8 bg-slate-100 hover:bg-slate-200 border border-slate-200 w-full py-3.5 rounded-full text-center font-semibold text-sm text-slate-700 block transition-all"
              >
                Discuss Custom Project (From ₹8k)
              </Link>
            </div>

            {/* Android App */}
            <div className="bg-white p-8 rounded-3xl relative flex flex-col justify-between border border-slate-200 card-lift group hover:border-teal-200 transition-colors">
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#9FFFCB] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl" />
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-[-4deg] group-hover:bg-teal-50 group-hover:text-teal-600 transition-all duration-300">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>Android Application</h3>
                  <p className="text-slate-500 text-xs mt-1">Native &amp; Flutter Mobile Engineering</p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>₹15,000</span>
                    <span className="text-slate-400 text-xs">starting rate</span>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 border-t border-slate-100 pt-6">
                  {[
                    "Sleek Mobile Interface (Material / iOS style)",
                    "Backend API Integration & Sync",
                    "Google Play Store Deployment Support",
                    "App Maintenance & Bug fixes",
                  ].map(f => (
                    <li key={f} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact?service=AndroidApp"
                className="mt-8 bg-slate-100 hover:bg-slate-200 border border-slate-200 w-full py-3.5 rounded-full text-center font-semibold text-sm text-slate-700 block transition-all"
              >
                Order Android App (From ₹15k)
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* For Students Special Section */}
      {(activeTab === "all" || activeTab === "student") && (
        <section id="student-section" className="space-y-10 pt-8 scroll-mt-28 animate-fade-slide-up">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#25A18E]/30 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#9FFFCB]/20 border border-[#25A18E]/30 flex items-center justify-center text-[#004E64] hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>
                  For Students <span className="purple-text-gradient">College Project Portal</span>
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm">B.Tech / BCA / MCA / Diploma Final Year Projects &amp; IEEE Reports</p>
              </div>
            </div>
            <span className="text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 w-fit">
              100% Grade A+ Tested
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* College Project + Report Card */}
            <div className="bg-white p-8 rounded-3xl relative border border-[#25A18E]/30 shadow-lg shadow-[#25A18E]/5 flex flex-col justify-between card-lift group">
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#25A18E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl" />
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#9FFFCB]/30 border border-[#25A18E]/30 text-[#004E64] text-xs font-bold uppercase tracking-wider">
                    Student Standard Package
                  </span>
                  <FileText className="w-6 h-6 text-[#25A18E] group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>College Project &amp; Detailed Report</h3>
                  <p className="text-teal-600 text-xs mt-1">Executable Source Code + IEEE/University Project Documentation</p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>₹3,000</span>
                    <span className="text-slate-400 text-xs">all-inclusive</span>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 border-t border-slate-100 pt-6">
                  {[
                    "Complete Bug-Free Source Code (Python/Flask/Next.js/Android/PHP)",
                    "Comprehensive Project Report (Synopsis, System Specs, DFDs, ERDs)",
                    "Database Scripts & Schema Documentation",
                    "Step-by-Step Local Setup & Execution Guide",
                    "Viva Voce Question Bank & Guidance by Mr. Jatin & Ms. Bharti",
                  ].map(f => (
                    <li key={f} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Urgent Addon Card */}
            <div className="bg-white p-8 rounded-3xl relative border border-[#25A18E]/30 shadow-lg flex flex-col justify-between card-lift group">
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#00A5CF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl" />
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#9FFFCB]/30 text-[#004E64] border border-[#25A18E]/30 text-xs font-bold uppercase tracking-wider">
                    Express Speed
                  </span>
                  <Clock className="w-6 h-6 text-[#00A5CF] animate-pulse" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>Urgent Express Delivery Add-on</h3>
                  <p className="text-[#004E64] text-xs mt-1">Need your submission within 24 to 48 hours?</p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-[#004E64]" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>+ ₹1,000</span>
                    <span className="text-slate-400 text-xs">add-on fee</span>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 border-t border-slate-100 pt-6">
                  {[
                    "24-48 Hours Fast-Track Delivery Guaranteed",
                    "Dedicated Priority Developer Assignment",
                    "Remote Desktop Installation Support (AnyDesk/TeamViewer)",
                    "Late-Night Emergency Assistance Available",
                  ].map(f => (
                    <li key={f} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#25A18E] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Interactive Student Cost Estimator Form */}
          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-[#25A18E]/30 space-y-6 relative overflow-hidden">
            <div className="geo-dot-grid absolute top-0 right-0 w-48 h-48 opacity-[0.03] pointer-events-none" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl teal-icon-box flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>Interactive Student Order Form</h3>
                <p className="text-xs text-slate-500">Calculate your total cost and submit your project topic directly to TriNetix lead founders.</p>
              </div>
            </div>

            {inquiryResult && (
              <div
                className={`p-4 rounded-xl text-sm border ${
                  inquiryResult.success
                    ? "bg-teal-50 border-teal-200 text-teal-800"
                    : "bg-red-50 border-red-200 text-red-700"
                }`}
              >
                {inquiryResult.message}
              </div>
            )}

            <form onSubmit={handleStudentInquirySubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="e.g. Ankit Kumar"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={studentEmail}
                    onChange={(e) => setStudentEmail(e.target.value)}
                    placeholder="e.g. ankit@college.edu"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">College / University Name</label>
                  <input
                    type="text"
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                    placeholder="e.g. Delhi Technological University"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Project Topic / Domain</label>
                  <input
                    type="text"
                    required
                    value={projectTopic}
                    onChange={(e) => setProjectTopic(e.target.value)}
                    placeholder="e.g. AI E-Commerce App or Hospital Management System"
                    className="form-input"
                  />
                </div>
              </div>

              {/* Checkbox for Urgent */}
              <div className="p-4 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-between hover:border-teal-200 transition-colors">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="urgentCheck"
                    checked={isUrgent}
                    onChange={(e) => setIsUrgent(e.target.checked)}
                    className="w-5 h-5 accent-teal-600 rounded cursor-pointer"
                  />
                  <label htmlFor="urgentCheck" className="text-sm text-slate-700 cursor-pointer font-medium">
                    Add Urgent Express 24-48 Hour Delivery (+ ₹1,000)
                  </label>
                </div>
                <span className="text-xs text-[#004E64] font-bold">{isUrgent ? "+ ₹1,000" : "Standard"}</span>
              </div>

              {/* Total Calculation Display */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-500">Total Calculated Estimate</p>
                  <p className="text-2xl font-extrabold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>₹{calculateStudentPrice().toLocaleString()}</p>
                </div>
                <button
                  type="submit"
                  disabled={submittingInquiry}
                  className="purple-btn-gradient w-full sm:w-auto px-6 py-3 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2"
                >
                  {submittingInquiry ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Student Inquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </div>
  );
}
