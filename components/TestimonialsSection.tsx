'use client';

export default function TestimonialsSection({ onOpenModal }) {
  const testimonials = [
    {
      name: 'Aditya Mathur',
      initials: 'AM',
      prevRole: 'Junior Backend Developer (₹4.5 LPA)',
      newRole: 'GenAI Engineer at AI SaaS (₹14.8 LPA)',
      hike: '95% Hike',
      review: 'I was stuck maintaining legacy Django code. Learning LangGraph, Vector DBs and building autonomous research agents at NIGAPE completely changed my career trajectory. The 1:1 mentor mock interviews gave me immense confidence.',
    },
    {
      name: 'Sneha Patel',
      initials: 'SP',
      prevRole: 'Operations Analyst',
      newRole: 'Prompt & Workflow Architect (₹11 LPA)',
      hike: '95% Hike',
      review: 'I had zero hardcore coding experience. The faculty at the South Delhi GK2 campus broke down prompt engineering, tokenomics, and CrewAI into super intuitive concepts. I automated my first customer-facing agent in week 6!',
    },
    {
      name: 'Karan Singhal',
      initials: 'KS',
      prevRole: 'B.Tech Final Year Student',
      newRole: 'Associate AI Specialist (₹16 LPA)',
      hike: '95% Hike',
      review: 'While everyone in my college was doing basic web dev projects, my NIGAPE capstone on Multi-Document RAG with Cohere Re-ranking blew away the interview panel. The project showcase was the single reason I got hired.',
    }
  ];

  return (
    <section className="py-12 sm:py-20 px-3.5 sm:px-6 lg:px-8 bg-[#06070d] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF40EB]/40 bg-[#FF40EB]/10 px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#FF40EB]">
            Proven Career Transformations
          </span>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-snug">
            Real Stories From <br />
            <span className="gradient-text-pink">NIGAPE Alumni</span>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            Hear how our learners transitioned into high-growth AI engineering positions.
          </p>
        </div>

        {/* Testimonials Grid - Fully Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#0d0f1b] border border-white/10 hover:border-[#FF40EB]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Rating & Hike Badge */}
                <div className="flex items-center justify-between gap-2 mb-3.5 sm:mb-4">
                  <span className="text-xs sm:text-sm font-bold text-amber-400 tracking-wider">
                    ★ ★ ★ ★ ★
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-emerald-400 bg-emerald-400/10 px-2.5 py-0.5 rounded-full border border-emerald-400/30 shrink-0">
                    {t.hike}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#9234eb]/40 to-[#FF40EB]/40 border border-[#FF40EB]/40 flex items-center justify-center font-bold text-[11px] sm:text-xs text-white tracking-wider shrink-0">
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FF40EB] transition-colors truncate">
                    {t.name}
                  </h4>
                  <div className="text-[10px] sm:text-[11px] text-emerald-400 font-semibold truncate">
                    {t.newRole}
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-gray-400 line-through truncate">
                    {t.prevRole}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Trust Callout */}
        <div className="mt-10 sm:mt-12 text-center px-4">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black font-extrabold text-xs uppercase tracking-wider transition-all duration-300 border border-white/20"
          >
            Read More Student Stories &amp; Reviews →
          </button>
        </div>

      </div>
    </section>
  );
}
