'use client';

export default function TechMarquee() {
  const tools = [
    { name: 'LangChain & LangGraph', category: 'Orchestration' },
    { name: 'Llama 3.2 (Meta)', category: 'Open Source' },
    { name: 'CrewAI', category: 'Multi-Agent' },
    { name: 'Hugging Face', category: 'Model Hub' },
    { name: 'Pinecone & Chroma', category: 'Vector DBs' },
    { name: 'AutoGen (Microsoft)', category: 'Autonomous Agents' },
    { name: 'Ollama & vLLM', category: 'Local Deployment' },
    { name: 'MLflow & Docker', category: 'LLMOps' },
    { name: 'FastAPI', category: 'AI Backend' },
    
  ];

  return (
    <div className="relative py-8 bg-black/60 border-y border-white/10 overflow-hidden backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <p className="text-xs uppercase tracking-widest text-[#FF40EB] font-bold">
          Industry-Standard AI Tech Stack You Will Master
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="flex overflow-x-hidden relative group">
        <div className="flex animate-marquee whitespace-nowrap gap-4 py-2">
          {[...tools, ...tools].map((tool, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#FF40EB]/50 transition-colors shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-[#FF40EB] animate-pulse" />
              <span className="text-sm font-bold text-white tracking-wide">{tool.name}</span>
              <span className="text-[10px] text-gray-400 bg-white/10 px-1.5 py-0.5 rounded font-mono">
                {tool.category}
              </span>
            </div>
          ))}
        </div>

        {/* Gradient edge fades */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
