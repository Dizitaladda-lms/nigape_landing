'use client';

export default function TechMarquee() {
  const tools = [
    { name: 'LangChain & LangGraph', category: 'Orchestration', logo: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
    { name: 'Llama 3.2 (Meta)', category: 'Open Source', logo: 'https://cdn.simpleicons.org/meta/0668E1' },
    { name: 'CrewAI', category: 'Multi-Agent', logo: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'Hugging Face', category: 'Model Hub', logo: 'https://cdn.simpleicons.org/huggingface/FFD21E' },
    { name: 'Pinecone & Chroma', category: 'Vector DBs', logo: 'https://cdn.simpleicons.org/pinecone/000000' },
    { name: 'AutoGen (Microsoft)', category: 'Autonomous Agents', logo: 'https://cdn.simpleicons.org/microsoft/5E5E5E' },
    { name: 'Ollama & vLLM', category: 'Local Deployment', logo: 'https://cdn.simpleicons.org/ollama/000000' },
    { name: 'MLflow & Docker', category: 'LLMOps', logo: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'FastAPI', category: 'AI Backend', logo: 'https://cdn.simpleicons.org/fastapi/009688' },
    
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
              <img
                src={tool.logo}
                alt={`${tool.name} logo`}
                className="h-6 w-6 rounded-md object-contain"
              />
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
