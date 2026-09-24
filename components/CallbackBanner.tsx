'use client';

import { useState } from 'react';

export default function CallbackBanner({ onSubmitSuccess }) {
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    setIsSubmitting(true);
    const leadPayload = {
      fullName: 'Quick Callback Request',
      phone: cleanPhone,
      email: 'callback@lead.nigape.com',
      experience: 'Quick Callback',
      learningMode: 'Flexible',
      timestamp: new Date().toISOString(),
      source: 'Mid-Page Quick Callback Banner',
      landing_page_url: typeof window !== 'undefined' ? window.location.href : 'https://nigape.com',
    };

    // Forward to CRM
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadPayload),
      });
    } catch (apiErr) {
      console.error('Failed to sync with CRM:', apiErr);
    }

    try {
      const existingLeads = JSON.parse(localStorage.getItem('nigape_leads') || '[]');
      existingLeads.unshift(leadPayload);
      localStorage.setItem('nigape_leads', JSON.stringify(existingLeads));
    } catch (err) {
      console.error('Lead storage error', err);
    }

    setIsSubmitting(false);
    setPhone('');
    onSubmitSuccess(leadPayload);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-r from-[#9234eb]/25 via-black to-[#FF40EB]/20 border-y border-white/15">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left copy */}
        <div className="text-center md:text-left max-w-lg">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#FF40EB] bg-[#FF40EB]/10 px-3 py-1 rounded-full border border-[#FF40EB]/30 mb-2">
            Speak with Senior Counselor
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Have Questions About Fees, EMI or Curriculum?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 mt-1">
            Drop your number and get a direct callback from our admissions team within 15 minutes.
          </p>
        </div>

        {/* Right input form */}
        <form onSubmit={handleSubmit} className="w-full md:w-auto flex-1 max-w-md">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex flex-1">
              <span className="inline-flex items-center px-3.5 rounded-l-xl border border-r-0 border-white/15 bg-white/10 text-gray-300 text-sm font-semibold">
                +91
              </span>
              <input
                type="tel"
                required
                maxLength={10}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setError('');
                }}
                placeholder="Enter 10-digit mobile number"
                className="w-full px-4 py-3 rounded-r-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#FF40EB] transition"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF40EB] to-[#9234eb] text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,64,235,0.4)] hover:scale-105 active:scale-95 transition flex items-center justify-center shrink-0"
            >
              {isSubmitting ? 'Sending...' : 'Request Callback →'}
            </button>
          </div>
          {error && <p className="text-[11px] text-red-400 mt-1 font-medium">{error}</p>}
          <div className="text-[11px] text-gray-400 mt-2">
            <span>Zero sales spam. Your details are safe with us.</span>
          </div>
        </form>

      </div>
    </section>
  );
}
