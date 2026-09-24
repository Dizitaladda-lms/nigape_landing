'use client';

import { useEffect, useState } from 'react';

export default function SuccessModal({ leadData, onClose }) {
  const [downloadTriggered, setDownloadTriggered] = useState(false);

  useEffect(() => {
    if (leadData) {
      // Auto-trigger brochure download after 500ms
      const timer = setTimeout(() => {
        try {
          const link = document.createElement('a');
          link.href = '/brochure.pdf';
          link.download = 'NIGAPE-GenAI-Course-Brochure.pdf';
          link.target = '_blank';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setDownloadTriggered(true);
        } catch (e) {
          console.error('Auto download trigger error:', e);
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [leadData]);

  if (!leadData) return null;

  const counselorPhone = '917428114918';
  const name = leadData.fullName || 'Learner';
  const firstName = name.split(' ')[0];
  const encodedMsg = encodeURIComponent(
    `Hi NIGAPE Team! My name is ${name}. I just registered for the GenAI & Prompt Engineering Job Bootcamp and want to schedule my free 1:1 counseling session & get more details on the brochure.`
  );
  const whatsappUrl = `https://wa.me/${counselorPhone}?text=${encodedMsg}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl p-1 bg-gradient-to-b from-emerald-500 via-[#FF40EB] to-[#9234eb] shadow-[0_0_60px_rgba(16,185,129,0.4)]">
        <div className="bg-[#0b0d16] rounded-[22px] p-6 sm:p-8 text-center relative max-h-[90vh] overflow-y-auto">
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition flex items-center justify-center text-sm font-bold cursor-pointer"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Success Badge */}
          <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center mb-3 text-2xl font-bold shadow-[0_0_30px_rgba(16,185,129,0.4)]">
            ✓
          </div>

          <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 mb-2">
            Registration Received
          </span>

          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Congratulations, {firstName}!
          </h3>

          <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
            Your free 1:1 AI Career Counseling session is reserved. Our Senior Mentor will connect with you on <strong className="text-white">+91 {leadData.phone}</strong>.
          </p>

          {/* Primary Brochure Download Box */}
          <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-[#FF40EB]/40 shadow-[0_0_30px_rgba(255,64,235,0.2)] text-left">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">📄</span>
                <div>
                  <h4 className="text-sm font-black text-white">Gen AI &amp; Agentic Course Brochure</h4>
                  <p className="text-[11px] text-gray-400">Complete 16-Week Curriculum, Projects &amp; Fees</p>
                </div>
              </div>
              <span className="shrink-0 text-[10px] font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                PDF (19 MB)
              </span>
            </div>

            {/* Download Status Notification */}
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold mb-3">
              <span>{downloadTriggered ? '✓ Download started automatically!' : '⏳ Starting brochure download...'}</span>
            </div>

            {/* Direct Download Button */}
            <a
              href="/brochure.pdf"
              download="NIGAPE-GenAI-Course-Brochure.pdf"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#FF40EB] via-[#d922c5] to-[#9234eb] text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,64,235,0.6)] hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer"
            >
              <span>📥 Download Brochure PDF Again</span>
            </a>

            {/* Preview link */}
            <div className="text-center mt-2">
              <a
                href="/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-[#FF40EB] hover:text-white transition inline-flex items-center gap-1"
              >
                <span>Or click here to preview in browser</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Direct WhatsApp Callout */}
          <div className="mt-4 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-left">
            <div className="text-xs font-bold text-emerald-300 mb-1">
              Fastest Response: Connect on WhatsApp
            </div>
            <p className="text-[11px] text-gray-300">
              Skip the queue and chat with our South Delhi admissions team directly right now:
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-[0_0_20px_rgba(37,211,102,0.4)] cursor-pointer"
            >
              Chat on WhatsApp Instantly →
            </a>
          </div>

          {/* Secondary Action */}
          <div className="mt-4 flex flex-col gap-2">
            <a
              href="tel:+917428114918"
              className="py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs flex items-center justify-center gap-2 transition border border-white/10"
            >
              Call Admissions: +91 74281 14918
            </a>

            <button
              onClick={onClose}
              className="text-xs text-gray-400 hover:text-white py-2 transition cursor-pointer"
            >
              Return to Landing Page
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
