'use client';

export default function HiringPartners({ onOpenModal }) {
  const partners = [
    'Google', 'Microsoft', 'Amazon', 'Meta', 'Swiggy', 'Zomato', 
    'Flipkart', 'Razorpay', 'InMobi', 'Accenture', 'Fractal AI', 
    'Persistent', 'Tech Mahindra', 'Cognizant', 'Genpact', 'Infosys'
  ];

  return (
    <section id="placements" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#05060b] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF40EB]/40 bg-[#FF40EB]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FF40EB]">
            150+ Hiring Partners
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Where Our <span className="gradient-text-pink">Alumni Build Careers</span>
          </h2>
          <p className="mt-3 text-base text-gray-400">
            Our corporate placement cell actively connects our job bootcamp graduates with tech leaders and high-growth AI unicorns.
          </p>
        </div>

        {/* Company Logos/Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {partners.map((company, idx) => (
            <div
              key={idx}
              className="py-5 px-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FF40EB]/40 transition-all duration-300 flex items-center justify-center text-center group hover:bg-white/[0.06]"
            >
              <span className="text-sm sm:text-base font-bold text-gray-300 group-hover:text-white transition-colors tracking-wide">
                {company}
              </span>
            </div>
          ))}
        </div>

        {/* Placement Support Features Banner */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#111322] to-[#0a0b14] border border-white/10 text-left">
            <div className="text-[#FF40EB] font-mono text-2xl font-black mb-2">01.</div>
            <h4 className="text-base font-bold text-white">ATS-Proof Resume Optimization</h4>
            <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
              We rework your resume with AI keywords, production metrics, and GitHub project links to clear automated hiring filters.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#111322] to-[#0a0b14] border border-white/10 text-left">
            <div className="text-[#FF40EB] font-mono text-2xl font-black mb-2">02.</div>
            <h4 className="text-base font-bold text-white">Live Technical Mock Interviews</h4>
            <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
              Experience realistic 1:1 technical interview rounds focusing on LLM architecture, agent design, and live prompt defense.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#111322] to-[#0a0b14] border border-white/10 text-left">
            <div className="text-[#FF40EB] font-mono text-2xl font-black mb-2">03.</div>
            <h4 className="text-base font-bold text-white">Exclusive Placement Drives</h4>
            <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
              Direct access to curated hiring drives, referrals, and walk-in interview sessions organized by the NIGAPE placement wing.
            </p>
          </div>
        </div>

        {/* Bottom Placement CTA */}
        <div className="text-center mt-10">
          <button
            onClick={onOpenModal}
            className="px-8 py-3.5 rounded-full bg-white text-black hover:bg-[#FF40EB] hover:text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl"
          >
            Download Placement Report &amp; Salary Stats →
          </button>
        </div>

      </div>
    </section>
  );
}
