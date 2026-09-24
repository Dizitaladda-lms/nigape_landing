'use client';

export default function ComparisonTable({ onOpenModal }) {
  const features = [
    {
      name: 'Learning Format & Delivery',
      nigape: 'Live Interactive + Campus Labs (GK2 Delhi)',
      recorded: 'Pre-recorded passive videos',
      degree: 'Outdated theoretical lectures',
    },
    {
      name: '2025/2026 AI Curriculum',
      nigape: 'Agentic AI (CrewAI, LangGraph), RAG & LLMOps',
      recorded: 'Basic prompt hacks / superficial demos',
      degree: 'Basic syntax & outdated math models',
    },
    {
      name: '1:1 Doubt Support & Mentorship',
      nigape: 'Live 1:1 screen-share + MAANG mentors',
      recorded: 'Dead forums or unanswered comments',
      degree: 'Limited faculty availability',
    },
    {
      name: 'Real Production Projects',
      nigape: '15+ Enterprise RAG & Autonomous Agent systems',
      recorded: 'Toy calculators & generic weather apps',
      degree: 'Textbook assignments from 2018',
    },
    {
      name: 'Placement & Career Prep',
      nigape: 'Dedicated Hiring Drives + 1:1 MAANG Mocks',
      recorded: 'No placement assistance',
      degree: 'Mass recruiter non-tech roles',
    },
    {
      name: 'Average Salary Outcome',
      nigape: '₹12 - 35 LPA GenAI Specialist Roles',
      recorded: 'No tangible career lift',
      degree: '₹3.5 - 5 LPA entry-level service roles',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF40EB]/40 bg-[#FF40EB]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FF40EB]">
            Direct Comparison
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How NIGAPE Compares to <br />
            <span className="gradient-text-pink">Traditional Learning Options</span>
          </h2>
          <p className="mt-3 text-base text-gray-400">
            See why ambitious tech learners choose our outcome-focused AI bootcamp over recorded videos.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-6 text-sm font-bold text-gray-400 w-1/4">Feature</th>
                <th className="py-4 px-6 text-base font-extrabold text-[#FF40EB] bg-[#FF40EB]/10 rounded-t-2xl border-t border-x border-[#FF40EB]/30 w-1/3 text-center">
                  <span>NIGAPE GenAI Bootcamp</span>
                </th>
                <th className="py-4 px-6 text-sm font-semibold text-gray-400 w-1/5 text-center">Recorded Courses</th>
                <th className="py-4 px-6 text-sm font-semibold text-gray-400 w-1/5 text-center">College Degrees</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {features.map((f, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition">
                  <td className="py-4 px-6 font-semibold text-sm text-white">
                    {f.name}
                  </td>
                  <td className="py-4 px-6 text-sm font-bold text-white bg-[#FF40EB]/5 border-x border-[#FF40EB]/20 text-center">
                    <span className="text-emerald-400 font-bold mr-1.5">✓</span>
                    <span>{f.nigape}</span>
                  </td>
                  <td className="py-4 px-6 text-xs text-gray-400 text-center">
                    <span className="text-red-400 font-bold mr-1">✕</span>
                    <span>{f.recorded}</span>
                  </td>
                  <td className="py-4 px-6 text-xs text-gray-400 text-center">
                    <span className="text-red-400 font-bold mr-1">✕</span>
                    <span>{f.degree}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={onOpenModal}
            className="px-8 py-3.5 rounded-full bg-[#FF40EB] hover:bg-[#e02cd0] text-white font-extrabold text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(255,64,235,0.5)] hover:scale-105 transition"
          >
            Apply For Next Cohort Today →
          </button>
        </div>

      </div>
    </section>
  );
}
