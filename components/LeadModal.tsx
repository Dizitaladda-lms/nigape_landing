'use client';

import { useState, useEffect } from 'react';

export default function LeadModal({ isOpen, onClose, onSubmitSuccess, defaultGoal = 'Download Detailed Syllabus & Book Counseling' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    experience: 'Recent 12th Passout',
  });

  const [utmParams, setUtmParams] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      setUtmParams({
        utm_source: urlParams.get('utm_source') || 'direct_ads',
        utm_medium: urlParams.get('utm_medium') || 'web',
        utm_campaign: urlParams.get('utm_campaign') || 'genai_bootcamp',
        gclid: urlParams.get('gclid') || '',
      });
    }
  }, []);

  if (!isOpen) return null;

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
      goal: defaultGoal,
      timestamp: new Date().toISOString(),
      source: 'Popup Lead Modal',
      landing_page_url: typeof window !== 'undefined' ? window.location.href : 'https://nigape.com',
      ...utmParams,
    };

    // Forward to CRM via Next.js route with rate-limit check
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadPayload),
      });

      if (res.status === 429) {
        const errJson = await res.json();
        setSubmitError(errJson.error || 'Aap 1 minute mein bas 2 baar submit kar sakte hain. Kripya thoda wait karein.');
        setIsSubmitting(false);
        return;
      }
    } catch (apiErr) {
      console.error('Failed to sync with CRM:', apiErr);
    }

    try {
      const existingLeads = JSON.parse(localStorage.getItem('nigape_leads') || '[]');
      existingLeads.unshift(leadPayload);
      localStorage.setItem('nigape_leads', JSON.stringify(existingLeads));
    } catch (err) {
      console.error('Failed to save lead', err);
    }

    setIsSubmitting(false);
    onClose();
    onSubmitSuccess(leadPayload);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg rounded-3xl p-1 bg-gradient-to-b from-[#FF40EB] via-[#9234eb] to-black shadow-[0_0_60px_rgba(255,64,235,0.4)]"
      >
        <div className="bg-[#0c0d15] rounded-[22px] p-6 sm:p-8 relative">
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition flex items-center justify-center text-xs font-bold"
            aria-label="Close modal"
          >
            Close
          </button>

          {/* Modal Header */}
          <div className="text-left mb-6 pr-8">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF40EB] bg-[#FF40EB]/10 px-2.5 py-0.5 rounded-full border border-[#FF40EB]/30 mb-2">
              Limited Cohort Admissions
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
              Get Syllabus &amp; Claim 30% Early Bird Scholarship
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Join the next batch in South Delhi GK2 or Live Online.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
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
                placeholder="Enter your name"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#FF40EB]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                WhatsApp / Mobile Number <span className="text-[#FF40EB]">*</span>
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-white/15 bg-white/10 text-gray-300 text-xs font-bold">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  name="phone"
                  maxLength={10}
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="98765 43210"
                  className="w-full px-4 py-2.5 rounded-r-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#FF40EB]"
                />
              </div>
              {phoneError && <p className="text-[11px] text-red-400 mt-0.5 font-medium">{phoneError}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Current Profile
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-xl bg-[#141624] border border-white/15 text-white text-xs focus:outline-none focus:border-[#FF40EB]"
              >
                <option value="Recent 12th Passout">Recent 12th Passout</option>
                <option value="Current College Student">Current College Student (1st to Final Year)</option>
                <option value="Fresher / Job Seeker">Fresher / Job Seeker</option>
                <option value="working professional - Tech">working proffessional (Tech)</option>
                <option value="working professional - Non-Tech">working proffessional (Non-tech)</option>
                <option value="others">others</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-3 py-3 px-6 rounded-xl bg-gradient-to-r from-[#FF40EB] to-[#9234eb] text-white font-extrabold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(255,64,235,0.6)] hover:scale-[1.02] active:scale-[0.98] transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {isSubmitting ? (
                <span>Submitting Your Details...</span>
              ) : (
                <span>Submit &amp; Download Syllabus →</span>
              )}
            </button>

            {submitError && (
              <div className="p-3 rounded-xl bg-red-950/70 border border-red-500/50 text-red-300 text-xs font-semibold text-center leading-relaxed animate-fadeIn">
                {submitError}
              </div>
            )}

            <div className="text-center text-[11px] text-gray-400 pt-1">
              <span>We respect your privacy. No unwanted spam calls.</span>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
