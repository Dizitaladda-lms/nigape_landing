'use client';

import { useState } from 'react';

export default function FaqSection({ onOpenModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Do I need prior coding experience or a Computer Science degree?',
      a: 'No prior Computer Science degree or deep machine learning math is required. The bootcamp begins with intuitive fundamentals of Python for AI and tokenomics before advancing to Agentic workflows. We have successfully trained developers, non-tech managers, analysts, and freshers from diverse educational backgrounds.'
    },
    {
      q: 'Is this bootcamp held at the South Delhi campus or Online?',
      a: 'We offer both formats! You can join our physical campus cohorts at Design House Spacetime, Greater Kailash-1 / GK2, South Delhi for immersive classroom & lab sessions, OR attend from anywhere via 100% live interactive online classes with 1:1 screen-share doubt resolution.'
    },
    {
      q: 'What is the schedule? Can I attend while working a full-time job?',
      a: 'Yes! The cohorts are purposefully designed for working professionals and college students. You can choose between Weekend batches (Saturday & Sunday sessions) or Weekday Evening cohorts (post 7:30 PM). All live classes are also recorded and uploaded with code repositories for revision.'
    },
    {
      q: 'How does the 100% placement support process work?',
      a: 'From Week 12 onwards, our dedicated placement cell steps in: We rework your resume into an ATS-friendly format highlighting your 15+ production AI projects, conduct multiple 1:1 technical mock interviews with MAANG leaders, and connect you directly with hiring partner drives.'
    },
    {
      q: 'What real tools and frameworks will I master?',
      a: 'You will work with OpenAI GPT-4o, Claude 3.5 Sonnet, LangChain, LangGraph, CrewAI, AutoGen, Llama 3.2, DeepSeek, Pinecone, ChromaDB, FastAPI, Docker, and Hugging Face. Every student builds and deploys live GitHub repositories with functional APIs.'
    },
    {
      q: 'What certificates will I receive upon graduation?',
      a: 'You will receive the verified Industry Certification in Generative AI & Prompt Engineering from NIGAPE, along with module-wise micro-credentials and project capstone verification that you can link to your LinkedIn profile and resume.'
    },
    {
      q: 'Are there flexible EMI / installment payment options available?',
      a: 'Yes, we provide 0% interest EMI options starting at convenient monthly installments across all major debit and credit cards, as well as educational loan partners.'
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#05060a] relative border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF40EB]/40 bg-[#FF40EB]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FF40EB]">
            Clear All Doubts
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="gradient-text-pink">Questions</span>
          </h2>
          <p className="mt-3 text-base text-gray-400">
            Everything you need to know about the curriculum, schedule, admissions, and placement support.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-gradient-to-b from-[#111322] to-[#0a0c16] border-[#FF40EB]/50 shadow-[0_0_20px_rgba(255,64,235,0.1)]'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {item.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-base transition-colors ${
                    isOpen ? 'bg-[#FF40EB] text-white' : 'bg-white/10 text-gray-400'
                  }`}>
                    {isOpen ? '−' : '+'}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-gray-300 leading-relaxed border-t border-white/5">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/10">
          <p className="text-sm text-gray-300">
            Have a specific question not covered here?
          </p>
          <button
            onClick={onOpenModal}
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#FF40EB] hover:text-white transition"
          >
            <span>Ask our Academic Counselor directly →</span>
          </button>
        </div>

      </div>
    </section>
  );
}
