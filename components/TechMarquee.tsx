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
    <div className="relative overflow-hidden border-y border-[#f0dce9] bg-[#fff6fb] py-5">
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
              className="inline-flex items-center gap-2.5 rounded-xl border border-[#ead8e5] bg-white px-4 py-2 shadow-sm transition-colors hover:border-[#FF40EB]/50"
            >
              <div className="w-2 h-2 rounded-full bg-[#FF40EB] animate-pulse" />
              <span className="text-sm font-bold tracking-wide text-[#24152b]">{tool.name}</span>
              <span className="rounded bg-[#fff0fb] px-1.5 py-0.5 font-mono text-[10px] text-[#756879]">
                {tool.category}
              </span>
            </div>
          ))}
        </div>

        {/* Gradient edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#fff6fb] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#fff6fb] to-transparent" />
      </div>
    </div>
  );
}
