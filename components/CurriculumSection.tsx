'use client';

import { useState } from 'react';

export default function CurriculumSection({ onOpenModal }) {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      id: 0,
      phase: 'Weeks 1 - 2',
      title: 'GenAI Foundations & Prompt Engineering Mastery',
      summary: 'Master the inner workings of Transformer models, tokens, latent spaces, and elite prompt engineering frameworks.',
      topics: [
        'How LLMs really work: Self-Attention, Tokenization, Context Windows & Temperature',
        'Advanced Prompting: Zero-shot, Few-shot, Chain-of-Thought (CoT), Step-Back prompting',
        'ReAct (Reasoning + Acting) pattern and Instruction Tuning',
        'Prompt Injection Defense, Guardrails (NeMo Guardrails, Llama Guard)',
        'Hands-on Project: Enterprise Brand Copywriting & Code Refactoring Prompt Engine',
      ],
      skills: ['Prompt Engineering', 'Token Optimization', 'AI Guardrails', 'System Instructions']
    },
    {
      id: 1,
      phase: 'Weeks 3 - 5',
      title: 'Python for AI, Embeddings & Vector Databases',
      summary: 'Convert unstructured business documents into semantic vectors and master high-speed vector retrieval systems.',
      topics: [
        'Python for AI workflows: Async programming, Pydantic, and REST API consumption',
        'Mathematical foundations of Embeddings: OpenAI text-embedding-3, Cohere, BGE',
        'Vector Databases deep-dive: Pinecone, ChromaDB, Weaviate, and PGVector',
        'Indexing techniques: HNSW, IVFFlat, and Cosine similarity metrics',
        'Hands-on Project: Semantic PDF Document Search Engine with Multi-Tenant Storage',
      ],
      skills: ['Python 3.12', 'Vector Embeddings', 'ChromaDB', 'Pinecone', 'Semantic Search']
    },
    {
      id: 2,
      phase: 'Weeks 6 - 8',
      title: 'Enterprise RAG (Retrieval-Augmented Generation)',
      summary: 'Build intelligent question-answering systems over thousands of internal private enterprise PDFs, databases, and Notion pages.',
      topics: [
        'LangChain & LlamaIndex core architecture: Chains, Runnables, Memory & Callbacks',
        'Advanced Chunking: Recursive, Semantic chunking, Window-based chunking',
        'Hybrid Search: Combining BM25 Keyword Search + Dense Vector Search',
        'Re-ranking with Cohere Rerank and Contextual Compression',
        'Evaluating RAG with RAGAS (Faithfulness, Answer Relevance, Context Recall)',
        'Hands-on Project: Enterprise Legal & Financial Contract Analysis RAG Engine',
      ],
      skills: ['LangChain', 'LlamaIndex', 'Hybrid Search', 'RAGAS Evaluation', 'Context Chunking']
    },
    {
      id: 3,
      phase: 'Weeks 9 - 11',
      title: 'Autonomous Multi-Agent Systems & LangGraph',
      summary: 'Move beyond simple chatbots to autonomous AI agents that plan, reason, browse the web, use tools, and execute workflows together.',
      topics: [
        'Agentic AI Architecture: Tools, Function Calling, ReAct loop & Planning',
        'Multi-Agent Orchestration with CrewAI: Roles, Goals, Delegation & Tasks',
        'Complex State Machines with LangGraph: Cyclic workflows, Human-in-the-loop, State management',
        'Browser Use & Computer Interaction agents with Playwright',
        'Hands-on Project: Autonomous Market Research & Competitor Intelligence Multi-Agent Team',
      ],
      skills: ['CrewAI', 'LangGraph', 'Function Calling', 'Multi-Agent Systems', 'Tool Use']
    },
    {
      id: 4,
      phase: 'Weeks 12 - 13',
      title: 'Open-Source LLMs, Fine-Tuning & Local Models',
      summary: 'Run and fine-tune private open-source models (Llama 3.2, DeepSeek, Mistral) on your own servers without paying API bills.',
      topics: [
        'Running models locally: Ollama, vLLM, llama.cpp, and LM Studio',
        'When to Prompt vs RAG vs Fine-Tune: Decision framework',
        'Parameter-Efficient Fine-Tuning (PEFT), LoRA & QLoRA mechanics',
        'Dataset preparation: Instruction tuning formats (Alpaca, ChatML)',
        'Fine-tuning hands-on using Hugging Face & Unsloth on cloud GPUs',
        'Hands-on Project: Custom Fine-Tuned Healthcare / Customer Support LLM',
      ],
      skills: ['Llama 3.2', 'DeepSeek', 'LoRA / QLoRA', 'Hugging Face', 'Ollama', 'vLLM']
    },
    {
      id: 5,
      phase: 'Weeks 14 - 15',
      title: 'Full-Stack AI Engineering & LLMOps in Production',
      summary: 'Package your AI models into scalable enterprise APIs with authentication, rate-limiting, caching, and observability.',
      topics: [
        'Building high-performance AI backends with FastAPI & Async streaming responses',
        'Semantic Caching with Redis to save 70% of OpenAI API costs',
        'LLMOps & Monitoring: LangSmith, Arize Phoenix, and Prompt Versioning',
        'Containerization with Docker & Cloud Deployment on AWS / GCP / RunPod',
        'Hands-on Project: Production Multi-Modal AI Application with Streaming UI & Analytics',
      ],
      skills: ['FastAPI', 'Docker', 'LangSmith', 'LLMOps', 'Redis Caching', 'Cloud Deployment']
    },
    {
      id: 6,
      phase: 'Week 16',
      title: 'Capstone Launch, Portfolio & MAANG Placement Prep',
      summary: 'Polish your real-world AI repository, pass live 1:1 mock technical interviews, and apply to top hiring partners.',
      topics: [
        'Individual Capstone Project under 1:1 guidance from Industry Mentors',
        'GitHub portfolio polish: Documentation, architecture diagrams & live demo deployments',
        'AI System Design interviews: Scaling LLM architectures for millions of users',
        'Live 1:1 Mock Technical Interviews with FAANG/MAANG engineering leads',
        'Resume ATS optimization, LinkedIn positioning & Referral network activation',
      ],
      skills: ['AI System Design', 'Portfolio Launch', '1:1 Mock Interviews', 'Resume Revamp']
    },
  ];

  return (
    <section id="curriculum" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#05060a] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF40EB]/40 bg-[#FF40EB]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FF40EB]">
            16-Week Structured Syllabus
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Industry-Vetted Curriculum <br />
            <span className="gradient-text-pink">From Fundamentals to Agentic AI</span>
          </h2>
          <p className="mt-3 text-base text-gray-400">
            Engineered by MAANG AI leads to make you eligible for ₹15 - 35 LPA GenAI Engineer &amp; Prompt Architect roles.
          </p>
          <div className="mt-5 flex justify-center">
            <button
              onClick={onOpenModal}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white/10 hover:bg-[#FF40EB] hover:text-white border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
            >
              <span>Download Detailed 16-Week Brochure (PDF)</span>
            </button>
          </div>
        </div>

        {/* Curriculum Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Module Selector List (Left Column) */}
          <div className="lg:col-span-5 space-y-3">
            {modules.map((m, idx) => {
              const isSelected = activeModule === idx;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveModule(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#9234eb]/20 to-[#FF40EB]/20 border-[#FF40EB] shadow-[0_0_25px_rgba(255,64,235,0.2)]'
                      : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-mono font-bold text-xs ${
                      isSelected ? 'bg-[#FF40EB] text-white shadow-lg' : 'bg-white/10 text-gray-400'
                    }`}>
                      0{idx + 1}
                    </div>
                    <div>
                      <span className={`text-[11px] font-bold uppercase tracking-wider block ${
                        isSelected ? 'text-[#FF40EB]' : 'text-gray-400'
                      }`}>
                        Module {idx + 1} • {m.phase}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-white mt-0.5 leading-snug">
                        {m.title}
                      </h4>
                    </div>
                  </div>
                  <div className={`text-xs font-bold px-2 py-1 rounded ${
                    isSelected ? 'text-[#FF40EB]' : 'text-gray-500'
                  }`}>
                    {isSelected ? 'Active' : 'View →'}
                  </div>
                </button>
              );
            })}

            {/* Sticky Download Curriculum CTA Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#121422] to-[#0a0c16] border border-[#FF40EB]/30 mt-6 text-left">
              <h4 className="text-base font-bold text-white">Need the full week-by-week PDF?</h4>
              <p className="text-xs text-gray-400 mt-1 mb-4">
                Get the complete syllabus including lecture schedule, code repositories, and grading rubrics.
              </p>
              <button
                onClick={onOpenModal}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#FF40EB] to-[#9234eb] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,64,235,0.4)]"
              >
                Download Detailed Syllabus (PDF) →
              </button>
            </div>
          </div>

          {/* Module Deep-Dive View (Right Column) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0d16] border border-[#FF40EB]/30 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF40EB] bg-[#FF40EB]/10 px-3 py-1 rounded-full border border-[#FF40EB]/30">
                    Module {activeModule + 1} of 7 • {modules[activeModule].phase}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-2">
                    {modules[activeModule].title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                {modules[activeModule].summary}
              </p>

              {/* Topics List */}
              <div className="space-y-4 mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Key Topics Covered:
                </h4>
                <div className="space-y-2.5">
                  {modules[activeModule].topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-gray-200">
                      <span className="text-[#FF40EB] font-bold shrink-0 mt-0.5">•</span>
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Acquired */}
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Technologies &amp; Frameworks Mastered:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {modules[activeModule].skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-gray-400">
                  Includes live coding exercises, assignments &amp; 1:1 TA resolution.
                </span>
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={onOpenModal}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#FF40EB]/40 bg-[#FF40EB]/10 hover:bg-[#FF40EB]/20 text-[#FF40EB] hover:text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center cursor-pointer"
                  >
                    <span>Download Brochure PDF</span>
                  </button>
                  <button
                    onClick={onOpenModal}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-black hover:bg-[#FF40EB] hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
                  >
                    Enroll In This Cohort
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
