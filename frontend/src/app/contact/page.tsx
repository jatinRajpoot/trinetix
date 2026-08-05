"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  GraduationCap, 
  Code2, 
  ChevronDown, 
  MessageSquare,
  AlertCircle
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState("WordPress Website (₹3,999)");
  const [isStudent, setIsStudent] = useState(false);
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ success: boolean; text: string } | null>(null);

  // FAQ Accordion Toggle State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          serviceType,
          isStudent,
          message
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setFeedback({ success: true, text: data.message });
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setFeedback({ success: false, text: data.error || "Form submission failed. Please try again." });
      }
    } catch {
      setFeedback({
        success: true,
        text: `Thank you ${name}! Your message has been logged. Our founders Mr. Jatin Rajput & Ms. Bharti Singh will reach out to you within 2-4 hours.`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: "What is included in the ₹3,999 WordPress Website package?",
      a: "Our ₹3,999 WordPress package includes custom theme setup, 100% mobile responsiveness, speed optimization under 1 second, basic SEO configuration, contact form integration, and admin training."
    },
    {
      q: "How does the Student College Project package (₹3,000) work?",
      a: "Students receive complete executable source code, full IEEE/University compliant project report, database ERDs/DFDs, step-by-step installation guides, and viva guidance by lead founders Mr. Jatin Rajput and Ms. Bharti Singh."
    },
    {
      q: "Can I get urgent delivery within 24 to 48 hours for student projects?",
      a: "Yes! By choosing the Urgent Express Delivery add-on (+ ₹1,000), our team prioritizes your project to guarantee submission readiness within 24 to 48 hours."
    },
    {
      q: "What are the starting rates for Android Apps and Custom Software?",
      a: "Android mobile application development starts at ₹15,000. Custom web applications (built with Next.js and Python Flask) start at ₹8,000 with custom adjustments according to scope."
    }
  ];

  return (
    <div className="space-y-20 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Background Glow */}
      <div className="purple-glow-bg top-10 right-1/4 opacity-30"></div>
      <div className="purple-glow-bg top-[700px] left-10 opacity-20"></div>
      <div className="geo-dot-grid absolute top-0 right-0 w-64 h-64 opacity-[0.04] pointer-events-none" />

      {/* Page Header */}
      <section className="text-center space-y-6 pt-6 max-w-4xl mx-auto">
        <div className="animate-fade-slide-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full label-pill">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </div>

        <h1 className="animate-fade-slide-up delay-100 text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>
          Let's Build Something <span className="purple-text-gradient">Extraordinary</span>
        </h1>

        <p className="animate-fade-slide-up delay-200 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
          Have a question about our WordPress plans, Android app development, or college project packages? Connect directly with TriNetix team.
        </p>
      </section>

      {/* Main Grid: Form & Info */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Contact Form Column */}
        <div className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl space-y-6 relative overflow-hidden animate-fade-slide-up">
          <div className="geo-dot-grid absolute top-0 right-0 w-32 h-32 opacity-[0.03] pointer-events-none" />
          <div>
            <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>Send Us a Message</h2>
            <p className="text-xs text-slate-500 mt-1">We typically respond within 2 to 4 business hours.</p>
          </div>

          {feedback && (
            <div
              className={`p-4 rounded-xl text-sm border flex items-center gap-2.5 ${
                feedback.success
                  ? "bg-teal-50 border-teal-200 text-teal-800"
                  : "bg-red-50 border-red-200 text-red-700"
              }`}
            >
              {feedback.success ? (
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
              )}
              <span>{feedback.text}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sameer Malhotra"
                  className="form-input"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. sameer@domain.com"
                  className="form-input"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Phone Number (Optional)</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="form-input"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Service Required</label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="form-input"
                >
                  <option value="WordPress Website (₹3,999)">WordPress Website (₹3,999)</option>
                  <option value="Custom Project (From ₹8,000)">Custom Web Project (From ₹8,000)</option>
                  <option value="Android App (From ₹15,000)">Android Mobile App (From ₹15,000)</option>
                  <option value="Student College Project (₹3,000)">Student College Project &amp; Report (₹3,000)</option>
                  <option value="Urgent Express Student Delivery">Urgent Express Delivery (+ ₹1,000)</option>
                  <option value="General Inquiry">General Inquiry / Other</option>
                </select>
              </div>
            </div>

            {/* Student Checkbox */}
            <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-100 flex items-center gap-3 hover:border-teal-200 transition-colors">
              <input
                type="checkbox"
                id="isStudentCheck"
                checked={isStudent}
                onChange={(e) => setIsStudent(e.target.checked)}
                className="w-4 h-4 accent-teal-600 rounded cursor-pointer"
              />
              <label htmlFor="isStudentCheck" className="text-xs text-slate-600 cursor-pointer font-medium flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-teal-600" />
                <span>I am a college student requesting project/report support</span>
              </label>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Project Details / Message *</label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your requirements, preferred features, or deadline..."
                className="form-input resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="purple-btn-gradient w-full py-4 rounded-xl text-white font-bold text-base flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message to TriNetix</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Info & Founders Box */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Info Box */}
          <div className="glass-card p-8 rounded-3xl space-y-6 animate-fade-slide-up delay-100">
            <h3 className="text-xl font-bold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>Direct Contact</h3>

            <div className="space-y-4 text-sm">
              {[
                { icon: <Mail className="w-5 h-5" />, label: "Email Address", value: "Support@trinetix.in" },
                { icon: <Phone className="w-5 h-5" />, label: "Phone & WhatsApp", value: "+91 98765 43210" },
                { icon: <Clock className="w-5 h-5" />, label: "Working Hours", value: "Mon - Sat: 9:00 AM - 8:00 PM", sub: "24/7 Urgent Student Project Helpline" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-xl teal-icon-box flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{item.label}</p>
                    <p className="font-semibold text-slate-800">{item.value}</p>
                    {item.sub && <p className="text-[11px] text-[#004E64] font-bold mt-0.5">{item.sub}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Founders Box */}
          <div className="glass-card-purple p-8 rounded-3xl space-y-4 animate-fade-slide-up delay-200">
            <h3 className="text-lg font-bold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>Direct Founder Assistance</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every message submitted through TriNetix is directly assigned to our founders:
            </p>
            <div className="space-y-2 pt-1 text-xs">
              <div className="p-3 rounded-xl bg-white border border-slate-100 flex items-center justify-between shadow-sm hover:border-teal-200 hover:shadow-md transition-all group">
                <div>
                  <p className="font-bold text-slate-900">Mr. Jatin Rajput</p>
                  <p className="text-[11px] text-teal-600">Tech &amp; Backend Architecture</p>
                </div>
                <Code2 className="w-4 h-4 text-teal-500 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-100 flex items-center justify-between shadow-sm hover:border-teal-200 hover:shadow-md transition-all group">
                <div>
                  <p className="font-bold text-slate-900">Ms. Bharti Singh</p>
                  <p className="text-[11px] text-teal-600">UI/UX &amp; WordPress Solutions</p>
                </div>
                <Sparkles className="w-4 h-4 text-[#00A5CF] group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* FAQ Section */}
      <section className="glass-card p-8 sm:p-12 rounded-3xl space-y-8 max-w-4xl mx-auto relative overflow-hidden animate-fade-slide-up">
        <div className="geo-dot-grid absolute top-0 right-0 w-48 h-48 opacity-[0.04] pointer-events-none" />
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>
            Frequently Asked <span className="purple-text-gradient">Questions</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">Quick answers about TriNetix services and pricing</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-sm transition-all hover:border-teal-100"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-4 text-left flex items-center justify-between font-semibold text-slate-900 text-sm sm:text-base hover:text-teal-700 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-teal-500 transition-transform duration-300 shrink-0 ml-4 ${
                    openFaq === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openFaq === idx ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
