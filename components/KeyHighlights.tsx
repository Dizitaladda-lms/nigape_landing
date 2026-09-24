'use client';

export default function KeyHighlights({ onOpenModal }) {
  const highlights = [
    {
      num: '01',
      stat: '120+ Hours',
      title: 'Practical Live & Lab Learning',
      desc: 'No passive recorded videos. 100% live coding sessions, assignments, and campus lab access in South Delhi.',
      tag: 'Live Cohort'
    },
    {
      num: '02',
      stat: '15+ Projects',
      title: 'Enterprise AI Portfolio',
      desc: 'Build production-ready RAG search, multi-agent frameworks, enterprise workflows, and multimodal bots.',
      tag: 'Hands-on'
    },
    {
      num: '03',
      stat: '1:1 Mentorship',
      title: 'MAANG & AI Experts',
      desc: 'Direct access to senior AI engineers from Google, Microsoft, and high-growth AI unicorns for code reviews.',
      tag: 'Personalized'
    },
    {
      num: '04',
      stat: '100% Placement',
      title: 'Dedicated Career Support',
      desc: 'Resume enhancement for ATS, LinkedIn branding, GitHub portfolio buildout, and placement drives with hiring partners.',
      tag: 'Career First'
    },
    {
      num: '05',
      stat: '95% Avg Hike',
      title: 'High Career Growth',
      desc: 'Transform from a traditional software developer or non-tech role into a ₹12-30 LPA GenAI specialist.',
      tag: 'ROI Driven'
    },
    {
      num: '06',
      stat: 'Instant Support',
      title: '1:1 Doubt Resolution',
      desc: 'Dedicated Teaching Assistants available 7 days a week via screen-share, Slack, and South Delhi campus desks.',
      tag: 'Zero Backlog'
    }
  ];

  return (
    <section id="highlights" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF40EB]/40 bg-[#FF40EB]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FF40EB]">
            Proven Outcome-Driven Model
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Learners Choose the <br />
            <span className="gradient-text-pink">NIGAPE GenAI Bootcamp</span>
          </h2>
          <p className="mt-3 text-base text-gray-400">
            A comprehensive curriculum engineered to bridge the gap between academic theory and real-world enterprise AI production.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group relative p-7 rounded-2xl bg-gradient-to-b from-[#11121c] to-[#07070c] border border-white/10 hover:border-[#FF40EB]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_10px_30px_rgba(255,64,235,0.15)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#9234eb]/30 to-[#FF40EB]/30 border border-[#FF40EB]/30 flex items-center justify-center font-mono font-bold text-sm text-[#FF40EB]">
                    {item.num}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                    {item.tag}
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-[#FF40EB] transition-colors">
                  {item.stat}
                </div>

                <h3 className="text-lg font-bold text-white mt-1 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <span>• Verified Bootcamp Feature</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Prompt Banner inside highlights */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#9234eb]/20 via-[#FF40EB]/20 to-[#9234eb]/20 border border-[#FF40EB]/30 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Want to see if this Bootcamp matches your career background?
            </h3>
            <p className="text-sm text-gray-300 mt-1">
              Speak directly with an AI Technical Mentor for 15 minutes and get customized guidance.
            </p>
          </div>
          <button
            onClick={onOpenModal}
            className="shrink-0 px-8 py-3.5 rounded-full bg-[#FF40EB] hover:bg-[#e02cd0] text-white font-extrabold text-sm shadow-[0_0_30px_rgba(255,64,235,0.5)] hover:scale-105 transition"
          >
            Check Eligibility Now →
          </button>
        </div>

      </div>
    </section>
  );
}
