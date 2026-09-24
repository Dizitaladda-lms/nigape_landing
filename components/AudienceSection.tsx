'use client';

export default function AudienceSection({ onOpenModal }) {
  const personas = [
    {
      title: 'Recent 12th Passouts',
      subtitle: 'Class 12th Completed • Science, Commerce or Arts',
      bullets: [
        'Start your AI career right after 12th without waiting 4 years for college to catch up',
        'Learn Python for AI, Prompt Engineering & build live AI applications from ground zero',
        'Optional 3-Year University Degree integration (DU SOL / Jain University) with practical bootcamp',
        'Daily South Delhi GK2 campus lab access with dedicated mentors guiding you step-by-step',
      ],
      tag: 'Early Career Launch'
    },
    {
      title: 'Current College Students',
      subtitle: '1st to Final Year • B.Tech, BCA, MCA, B.Sc & other streams',
      bullets: [
        'Stand out from 15 lakh+ generic engineering freshers with unique Agentic AI portfolio',
        'Flexible weekend & evening batches that fit seamlessly around college exams and classes',
        'Build production RAG pipelines, CrewAI agents & multi-agent systems for high-stipend internships',
        'Get 1:1 GitHub code reviews and technical resume preparation by MAANG mentors',
      ],
      tag: 'College to AI Career'
    },
    {
      title: 'Freshers & Recent Graduates',
      subtitle: 'Passout Graduates • Actively Seeking 1st Tech Job',
      bullets: [
        'Skip low-paying mass recruiters and target ₹10 - 25 LPA GenAI Engineer & Prompt roles',
        'Bridge the gap between outdated college theory and modern enterprise production standards',
        'Real-world capstone projects with FastAPI, Docker & live cloud deployments on your resume',
        '100% placement drive access, 1:1 mock technical interviews & direct referral network',
      ],
      tag: 'Job & Placement Ready'
    }
  ];

  return (
    <section className="py-12 sm:py-20 px-3.5 sm:px-6 lg:px-8 bg-[#07080e] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF40EB]/40 bg-[#FF40EB]/10 px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#FF40EB]">
            Tailored Learning Tracks
          </span>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-snug">
            Who is this <span className="gradient-text-pink">Job Bootcamp For?</span>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            Designed specifically for students and early career starters. Our 1:1 mentor-driven cohorts train you from complete basics to production AI readiness.
          </p>
        </div>

        {/* Persona Cards Grid - Fully Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {personas.map((p, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl bg-[#0e101b] border border-white/10 hover:border-[#FF40EB]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5 sm:mb-4">
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#FF40EB] bg-[#FF40EB]/10 px-2.5 py-0.5 sm:py-1 rounded-full border border-[#FF40EB]/30">
                    Track 0{idx + 1}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">
                    {p.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-snug">
                  {p.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#FF40EB] font-medium mt-1 mb-4 sm:mb-5">
                  {p.subtitle}
                </p>

                <div className="space-y-2.5 sm:space-y-3">
                  {p.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      <span className="text-[#FF40EB] font-bold shrink-0 mt-0.5">•</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-white/10">
                <button
                  onClick={onOpenModal}
                  className="w-full py-2.5 sm:py-3 rounded-xl bg-white/5 hover:bg-[#FF40EB] hover:text-white text-gray-200 text-xs font-bold transition-all duration-200 uppercase tracking-wider"
                >
                  Check Eligibility &amp; Roadmap →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
