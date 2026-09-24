'use client';

export default function ProjectsSection({ onOpenModal }) {
  const projects = [
    {
      title: 'Enterprise Multi-Doc RAG Intelligence Platform',
      domain: 'Enterprise Automation',
      desc: 'Engineered a high-precision retrieval system capable of indexing and querying 10,000+ legal and financial PDFs with zero hallucinations using Hybrid BM25 + Vector Search and Cohere Re-ranking.',
      stack: ['LangChain', 'ChromaDB', 'Cohere Rerank', 'RAGAS', 'FastAPI'],
      impact: 'Reduces manual contract analysis time by 85% with source-cited precision'
    },
    {
      title: 'Autonomous Competitor Research Multi-Agent Team',
      domain: 'Agentic AI',
      desc: 'Built a collaborative multi-agent system using CrewAI where Planner, Researcher, Fact-Checker, and Writer agents scrape web data, analyze competitor pricing, and compile executive PDF briefs.',
      stack: ['CrewAI', 'LangGraph', 'Playwright', 'OpenAI GPT-4o', 'Docker'],
      impact: 'Automates 40 hours of manual competitive intelligence in 4 minutes'
    },
    {
      title: 'Multimodal Vision & Voice Customer Support Agent',
      domain: 'Multimodal AI',
      desc: 'Constructed an end-to-end support assistant that can diagnose hardware issues from uploaded user smartphone photos, transcribe voice complaints via Whisper, and execute refund workflows.',
      stack: ['GPT-4o Vision', 'OpenAI Whisper', 'Streamlit', 'Redis', 'Twilio'],
      impact: 'Achieved 94% first-contact resolution on e-commerce troubleshooting'
    },
    {
      title: 'Enterprise Code Review & Security Self-Correction Bot',
      domain: 'Developer Tools',
      desc: 'Designed a self-correcting agent using LangGraph that detects SQL injection, memory leaks, and style violations in GitHub pull requests, writes unit tests, and submits automated fix commits.',
      stack: ['LangGraph', 'Llama 3.2', 'GitHub REST API', 'AST Parsing', 'pytest'],
      impact: 'Identified 30+ vulnerabilities across production repositories before merge'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF40EB]/40 bg-[#FF40EB]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FF40EB]">
            Real Production Engineering
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Projects That Make Your Resume <br />
            <span className="gradient-text-pink">Stand Out in Technical Shortlists</span>
          </h2>
          <p className="mt-3 text-base text-gray-400">
            No generic toy apps or calculator bots. Build production-grade AI systems with clean architectures, dockerized deployments, and live demo links.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-3xl bg-[#0c0d15] border border-white/10 hover:border-[#FF40EB]/50 transition-all duration-300 hover:-translate-y-1 shadow-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FF40EB]/10 text-[#FF40EB] border border-[#FF40EB]/30">
                    {proj.domain}
                  </span>
                  <span className="text-xs font-mono text-gray-500">
                    Project 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#FF40EB] transition-colors leading-snug">
                  {proj.title}
                </h3>

                <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                  {proj.desc}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {proj.stack.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact Callout */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="text-xs font-semibold text-emerald-400">
                  <span>• {proj.impact}</span>
                </div>
                <button
                  onClick={onOpenModal}
                  className="px-3 py-1.5 rounded-full bg-white/5 group-hover:bg-[#FF40EB] group-hover:text-white transition-colors text-xs font-bold text-gray-300"
                >
                  Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button
            onClick={onOpenModal}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF40EB] to-[#9234eb] text-white font-extrabold text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(255,64,235,0.45)] hover:scale-105 transition"
          >
            Review Full Project Repositories &amp; Demos →
          </button>
        </div>

      </div>
    </section>
  );
}
