'use client';

export default function Footer({ onOpenModal, onOpenAdmin }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-24 sm:pb-16 px-4 sm:px-6 lg:px-8 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center">
              <img
                src="/nigape-logo.png"
                alt="NIGAPE - National Institute of Gen AI & Prompt Engineering"
                className="h-10 sm:h-12 w-auto object-contain brightness-110"
              />
            </div>
            
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              National Institute of Generative AI &amp; Prompt Engineering — India’s premier institute preparing engineers and professionals for production AI roles through immersive hands-on cohorts.
            </p>

            <div className="pt-2 flex items-center gap-4 text-gray-400">
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] text-[#FF40EB]">
                South Delhi Campus &amp; Live Online
              </span>
            </div>
          </div>

          {/* Quick Page Sections */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#highlights" className="hover:text-[#FF40EB] transition">Program Highlights</a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-[#FF40EB] transition">16-Week Curriculum</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#FF40EB] transition">Enterprise AI Projects</a>
              </li>
              <li>
                <a href="#placements" className="hover:text-[#FF40EB] transition">Placement Support</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#FF40EB] transition">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Campus & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              South Delhi Campus
            </h4>
            
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <span>
                  2nd Floor, Design House Spacetime, Block S, Greater Kailash-1, New Delhi, Delhi 110048 (Near GK2)
                </span>
              </div>

              <div>
                <a href="tel:+917428114918" className="hover:text-white transition">
                  Phone: +91 74281 14918 (Admissions Helpline)
                </a>
              </div>

              <div>
                <a href="mailto:admissions@nigape.com" className="hover:text-white transition">
                  Email: admissions@nigape.com
                </a>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenModal}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#FF40EB] to-[#9234eb] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:opacity-90 transition"
              >
                Apply For Upcoming Cohort →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright and disclaimers */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-gray-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} NIGAPE (National Institute of Generative AI &amp; Prompt Engineering). All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button onClick={onOpenModal} className="hover:text-gray-300 transition">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={onOpenModal} className="hover:text-gray-300 transition">
              Terms &amp; Conditions
            </button>
            <span>•</span>
            {/* Secret Admin Leads Viewer Trigger */}
            <button
              onClick={onOpenAdmin}
              title="Admin Leads Drawer"
              className="text-gray-600 hover:text-[#FF40EB] transition"
            >
              Admin Leads
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition text-[10px]"
          >
            ↑ Back to Top
          </button>
        </div>

      </div>
    </footer>
  );
}
