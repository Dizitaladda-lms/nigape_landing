'use client';

import { useState, useEffect } from 'react';
import { courseOptions } from './courseOptions';

export default function HeroSection({ onSubmitSuccess }) {
  const hiringCompanies = [
    { name: 'Google', logo: 'https://cdn.simpleicons.org/google/4285F4' },
    { name: 'Microsoft', logo: '/company-microsoft.svg' },
    { name: 'Amazon', logo: '/company-amazon.svg' },
    { name: 'Meta', logo: 'https://cdn.simpleicons.org/meta/0668E1' },
  ];

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    course: 'Diploma in Generative AI & Prompt Engineering (12 Months)',
    experience: 'Recent 12th Passout',
  });

  const [utmParams, setUtmParams] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [submitError, setSubmitError] = useState('');

  // Extract UTMs on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const utms = {
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        utm_content: urlParams.get('utm_content') || '',
        utm_term: urlParams.get('utm_term') || '',
        fbclid: urlParams.get('fbclid') || '',
        gclid: urlParams.get('gclid') || '',
        gad_source: urlParams.get('gad_source') || '',
      };
      setUtmParams(utms);
    }
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (e.target.name === 'phone') {
      setPhoneError('');
      setSubmitError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    
    // Simple phone validation (10 digits Indian number)
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setPhoneError('Please enter a valid 10-digit mobile number');
      return;
    }

    setIsSubmitting(true);

    let deviceId = '';
    try {
      deviceId = localStorage.getItem('nigape_device_id') || '';
      if (!deviceId) {
        deviceId = 'dev_' + Math.random().toString(36).substring(2, 10);
        localStorage.setItem('nigape_device_id', deviceId);
      }
    } catch (e) {}

    const leadPayload = {
      ...formData,
      phone: cleanPhone,
      deviceId,
      timestamp: new Date().toISOString(),
      source: 'Hero Above-The-Fold Form',
      landing_page_url: typeof window !== 'undefined' ? window.location.href : 'https://nigape.com',
      ...utmParams,
    };

    // Forward to CRM with Rate Limit handling
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadPayload),
      });

      const responseData = await res.json();
      if (res.status === 429) {
        setSubmitError(responseData.error || 'Aap 1 minute mein bas 2 baar lead submit kar sakte hain. Kripya thoda wait karein.');
        return;
      }
      if (!res.ok || !responseData.success) {
        setSubmitError(responseData.error || 'Lead CRM mein save nahi ho paayi. Kripya dobara try karein.');
        return;
      }
    } catch (apiErr) {
      console.error('Failed to sync with CRM:', apiErr);
      setSubmitError('Server se connection nahi ho paaya. Kripya dobara try karein.');
      return;
    } finally {
      setIsSubmitting(false);
    }

    // Save to localStorage for marketing team lead export
    try {
      const existingLeads = JSON.parse(localStorage.getItem('nigape_leads') || '[]');
      existingLeads.unshift(leadPayload);
      localStorage.setItem('nigape_leads', JSON.stringify(existingLeads));
    } catch (err) {
      console.error('Failed to save to local storage', err);
    }

    onSubmitSuccess(leadPayload);
  };

  return (
    <section id="hero" className="relative px-4 pb-10 pt-5 sm:px-6 sm:pt-7 lg:px-8 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-[#FF40EB]/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-12 lg:gap-10">
          
          {/* Left Column: Core Value Proposition */}
          <div className="space-y-5 text-left lg:col-span-7">
            
            {/* High-Converting Ad Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FF40EB]/40 bg-[#FF40EB]/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#FF40EB] backdrop-blur-md shadow-[0_0_20px_rgba(255,64,235,0.2)]">
              <span>India's #1 Dedicated GenAI &amp; Prompt Engineering Institute</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl font-black tracking-tight text-white leading-[1.08] sm:text-5xl lg:text-[3.15rem]">
              Master <span className="gradient-text-pink">Generative AI</span> &amp; <br />
              <span className="text-white drop-shadow-[0_0_35px_rgba(255,64,235,0.6)]">Autonomous AI Agents</span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
              Become a job-ready AI Engineer in 16 weeks with hands-on GenAI, RAG and AI agent projects.
            </p>

            {/* USP Points */}
            <div className="grid grid-cols-1 gap-2.5 pt-1 sm:grid-cols-3">
              <div className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-2.5 backdrop-blur-sm">
                <span className="text-[#FF40EB] font-bold text-sm shrink-0 mt-0.5">•</span>
                <div>
                  <h4 className="text-sm font-bold text-white">Campus &amp; Live Online</h4>
                  <p className="text-xs text-gray-400">South Delhi GK2 campus + Pan-India live interactive classes</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-2.5 backdrop-blur-sm">
                <span className="text-[#FF40EB] font-bold text-sm shrink-0 mt-0.5">•</span>
                <div>
                  <h4 className="text-sm font-bold text-white">15+ Enterprise Projects</h4>
                  <p className="text-xs text-gray-400">Real production RAG pipelines, CrewAI agents &amp; LLMOps</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-2.5 backdrop-blur-sm">
                <span className="text-[#FF40EB] font-bold text-sm shrink-0 mt-0.5">•</span>
                <div>
                  <h4 className="text-sm font-bold text-white">1:1 MAANG Mentors</h4>
                  <p className="text-xs text-gray-400">Personalized code reviews, doubts, and mock interviews</p>
                </div>
              </div>

              <div className="hidden">
                <span className="text-[#FF40EB] font-bold text-sm shrink-0 mt-0.5">•</span>
                <div>
                  <h4 className="text-sm font-bold text-white">100% Placement Prep</h4>
                  <p className="text-xs text-gray-400">Profile building, resume revamp &amp; hiring partner connect</p>
                </div>
              </div>
            </div>

            {/* Hiring-company logo strip fills the hero space with useful proof. */}
            <div className="rounded-2xl border border-[#ead8e5] bg-white p-4 shadow-sm">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#756879]">
                Mentors &amp; alumni from leading teams
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {hiringCompanies.map((company) => (
                  <div
                    key={company.name}
                    className="flex min-h-14 items-center justify-center gap-2 rounded-xl border border-[#f0dce9] bg-[#fffafd] px-3 transition hover:border-[#FF40EB]/50"
                  >
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="h-5 w-5 object-contain"
                    />
                    <span className="text-sm font-bold text-[#24152b]">{company.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Social Proof Row */}
            <div className="hidden">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">4.9 / 5 Rating</span>
                <span className="text-xs text-gray-400">(500+ Alumni)</span>
              </div>

              <div className="h-4 w-px bg-white/20 hidden sm:block" />

              <div className="flex items-center gap-2">
                <span className="font-bold text-white">95%</span>
                <span className="text-xs text-gray-400">Avg Salary Hike</span>
              </div>

              <div className="h-4 w-px bg-white/20 hidden sm:block" />

              <div className="flex items-center gap-2">
                <span className="font-bold text-white">Govt. Recognized</span>
                <span className="text-xs text-gray-400">Certifications</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Converting Above-The-Fold Lead Generation Card */}
          <div id="lead-form" className="lg:col-span-5 scroll-mt-24">
            {/* Attention Floating Live Beacon Badge (Bounces gently on mobile & desktop) */}
            <div className="relative -mb-3 z-10 flex justify-center">
              <div className="hero-form-surface inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a0b12] border border-[#FF40EB] shadow-[0_0_25px_rgba(255,64,235,0.7)] animate-float-badge">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF40EB] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF40EB]"></span>
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-white">
                  Live Admissions Open • Batch Filling Fast
                </span>
              </div>
            </div>

            {/* Glowing & Breathing Animated Gradient Border Card */}
            <div className="relative rounded-3xl p-[3px] animated-gradient-border animate-breathing-glow shadow-[0_0_60px_rgba(255,64,235,0.45)]">
              <div className="hero-form-surface bg-[#0b0c13] rounded-[22px] p-5 sm:p-6 backdrop-blur-2xl">
                
                {/* Form Header */}
                <div className="mb-4 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#FF40EB] bg-[#FF40EB]/10 px-2.5 py-1 rounded-full border border-[#FF40EB]/30">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF40EB] animate-ping" />
                      Next Batch Starting Soon
                    </span>
                    <span className="text-[11px] font-extrabold text-yellow-300 bg-yellow-400/20 border border-yellow-400/40 px-2 py-0.5 rounded animate-pulse">
                      7 Seats Left
                    </span>
                  </div>
                  <h3 className="text-xl font-black leading-tight text-white sm:text-2xl">
                    Book Free 1:1 AI Career Counseling
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                    Get the syllabus and scholarship details on WhatsApp.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3 text-left">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Full Name <span className="text-[#FF40EB]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 transition focus:border-[#FF40EB] focus:outline-none focus:ring-2 focus:ring-[#FF40EB]/40"
                    />
                  </div>

                  {/* Course */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Course Interested In <span className="text-[#FF40EB]">*</span>
                    </label>
                    <select
                      required
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white transition focus:border-[#FF40EB] focus:outline-none focus:ring-2 focus:ring-[#FF40EB]/40"
                    >
                      {courseOptions.map((course) => (
                        <option key={course} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>

                  {/* Current profile */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Current Profile
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white transition focus:border-[#FF40EB] focus:outline-none focus:ring-2 focus:ring-[#FF40EB]/40"
                    >
                      <option value="Recent 12th Passout">Recent 12th Passout</option>
                      <option value="College Student">College Student</option>
                      <option value="Working Professional">Working Professional</option>
                      <option value="Career Switcher">Career Switcher</option>
                    </select>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      WhatsApp / Mobile Number <span className="text-[#FF40EB]">*</span>
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3.5 rounded-l-xl border border-r-0 border-white/15 bg-white/10 text-gray-300 text-sm font-semibold">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={10}
                        placeholder="98765 43210"
                        className="w-full rounded-r-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 transition focus:border-[#FF40EB] focus:outline-none focus:ring-2 focus:ring-[#FF40EB]/40"
                      />
                    </div>
                    {phoneError && (
                      <p className="text-[11px] text-red-400 mt-1 font-medium">{phoneError}</p>
                    )}
                  </div>

                  {/* Glowing Animated Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3.5 px-6 rounded-xl bg-[#FF40EB] hover:bg-[#e02cd0] text-white font-black text-sm sm:text-base tracking-wide uppercase shadow-[0_0_35px_rgba(255,64,235,0.7)] hover:shadow-[0_0_55px_rgba(255,64,235,1)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Reserving Your Seat...</span>
                      </div>
                    ) : (
                      <span>Get Syllabus &amp; Counseling Session →</span>
                    )}
                  </button>

                  {submitError && (
                    <div className="p-3 mt-2 rounded-xl bg-red-950/70 border border-red-500/50 text-red-300 text-xs font-semibold text-center leading-relaxed animate-fadeIn">
                      {submitError}
                    </div>
                  )}

                  {/* Trust Microcopy */}
                  <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-gray-400">
                    <span>100% Privacy Guaranteed. No spam. PDF sent immediately.</span>
                  </div>

                </form>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
