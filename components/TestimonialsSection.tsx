'use client';

import { useRef, useState } from 'react';

export default function TestimonialsSection({ onOpenModal }: { onOpenModal?: () => void }) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    { name: 'Aditya Mathur', role: 'GenAI Engineer', videoUrl: '/reviews/review-1.mp4', posterUrl: '/reviews/thumb-1.jpg' },
    { name: 'Sneha Patel', role: 'Prompt & Workflow Architect', videoUrl: '/reviews/review-2.mp4', posterUrl: '/reviews/thumb-2.jpg' },
    { name: 'Karan Singhal', role: 'Associate AI Specialist', videoUrl: '/reviews/review-3.mp4', posterUrl: '/reviews/thumb-3.jpg' },
  ];

  const goToSlide = (index: number) => {
    const nextIndex = (index + testimonials.length) % testimonials.length;
    videoRefs.current.forEach((video, videoIndex) => {
      if (videoIndex !== nextIndex) video?.pause();
    });
    setActiveIndex(nextIndex);
  };

  const testimonial = testimonials[activeIndex];

  return (
    <section className="relative border-t border-[#f0dce9] bg-[#fff7fc] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto mb-7 max-w-2xl text-center sm:mb-9">
          <span className="inline-flex rounded-full border border-[#FF40EB]/40 bg-[#FF40EB]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#d922c5]">Student Stories</span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#24152b] sm:text-4xl">Hear From NIGAPE Alumni</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-[#756879] sm:text-base">Short, real experiences from learners building their AI careers.</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#eedde9] bg-white p-3 shadow-xl shadow-purple-950/5 sm:rounded-3xl sm:p-5">
          <div className="relative overflow-hidden rounded-xl bg-black sm:rounded-2xl">
            <video
              key={testimonial.videoUrl}
              ref={(element) => { videoRefs.current[activeIndex] = element; }}
              src={testimonial.videoUrl}
              poster={testimonial.posterUrl}
              controls
              playsInline
              preload="metadata"
              onEnded={() => goToSlide(activeIndex + 1)}
              className="mx-auto h-[390px] w-full object-contain sm:h-[500px]"
            />
          </div>

          <div className="flex items-center justify-between gap-4 px-1 pt-4 sm:px-2">
            <div>
              <p className="text-sm font-bold text-[#24152b] sm:text-base">{testimonial.name}</p>
              <p className="text-xs font-medium text-[#8b7e90] sm:text-sm">{testimonial.role}</p>
            </div>
            <div className="flex items-center gap-2" aria-label="Testimonial navigation">
              {testimonials.map((item, index) => (
                <button key={item.name} type="button" onClick={() => goToSlide(index)} aria-label={`Show ${item.name}'s review`} aria-current={activeIndex === index ? 'true' : undefined} className={`h-2 rounded-full transition-all ${activeIndex === index ? 'w-6 bg-[#FF40EB]' : 'w-2 bg-[#d9c9d6] hover:bg-[#bcaab8]'}`} />
              ))}
            </div>
            <div className="flex shrink-0 gap-2">
              <button type="button" onClick={() => goToSlide(activeIndex - 1)} aria-label="Previous review" className="grid h-9 w-9 place-items-center rounded-full border border-[#ead8e5] text-[#24152b] transition hover:border-[#FF40EB] hover:text-[#d922c5]">←</button>
              <button type="button" onClick={() => goToSlide(activeIndex + 1)} aria-label="Next review" className="grid h-9 w-9 place-items-center rounded-full border border-[#ead8e5] text-[#24152b] transition hover:border-[#FF40EB] hover:text-[#d922c5]">→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
