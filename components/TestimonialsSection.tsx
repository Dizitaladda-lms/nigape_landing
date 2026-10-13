'use client';

import { useRef, useState } from 'react';

export default function TestimonialsSection({ onOpenModal }) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Aditya Mathur',
      initials: 'AM',
      prevRole: 'Junior Backend Developer (₹4.5 LPA)',
      newRole: 'GenAI Engineer at AI SaaS (₹14.8 LPA)',
      hike: '95% Hike',
      videoUrl: '/reviews/review-1.mp4',
      posterUrl: '/reviews/thumb-1.jpg',
    },
    {
      name: 'Sneha Patel',
      initials: 'SP',
      prevRole: 'Operations Analyst',
      newRole: 'Prompt & Workflow Architect (₹11 LPA)',
      hike: '95% Hike',
      videoUrl: '/reviews/review-2.mp4',
      posterUrl: '/reviews/thumb-2.jpg',
    },
    {
      name: 'Karan Singhal',
      initials: 'KS',
      prevRole: 'B.Tech Final Year Student',
      newRole: 'Associate AI Specialist (₹16 LPA)',
      hike: '95% Hike',
      videoUrl: '/reviews/review-3.mp4',
      posterUrl: '/reviews/thumb-3.jpg',
    }
  ];

  // Scroll to a specific slide (for mobile horizontal slider)
  const scrollToSlide = (index: number, autoPlayNext = false) => {
    const nextIdx = (index + testimonials.length) % testimonials.length;
    setActiveIndex(nextIdx);

    const card = cardRefs.current[nextIdx];
    const slider = sliderRef.current;

    if (card && slider) {
      const targetLeft = card.offsetLeft - (slider.clientWidth - card.clientWidth) / 2;
      slider.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: 'smooth',
      });
    }

    // Pause other videos; optionally auto-play the next video
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i !== nextIdx) {
        vid.pause();
      } else if (autoPlayNext) {
        vid.currentTime = 0;
        vid.play().catch(() => {
          // Browser may block unmuted autoplay if no recent gesture, ignore gracefully
        });
      }
    });
  };

  // When a video starts playing, pause any other playing video and sync active index
  const handleVideoPlay = (index: number) => {
    setActiveIndex(index);
    videoRefs.current.forEach((vid, i) => {
      if (vid && i !== index && !vid.paused) {
        vid.pause();
      }
    });
  };

  // When a video finishes playing, automatically move to the next card and play it
  const handleVideoEnded = (index: number) => {
    const nextIdx = (index + 1) % testimonials.length;
    scrollToSlide(nextIdx, true);
  };

  // Update active dot when user manually swipes on mobile
  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    const center = slider.scrollLeft + slider.clientWidth / 2;
    let closestIdx = 0;
    let minDiff = Infinity;

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const diff = Math.abs(center - cardCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });

    if (closestIdx !== activeIndex) {
      setActiveIndex(closestIdx);
    }
  };

  return (
    <section className="py-12 sm:py-20 px-3.5 sm:px-6 lg:px-8 bg-[#06070d] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 px-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF40EB]/40 bg-[#FF40EB]/10 px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#FF40EB]">
            Proven Career Transformations
          </span>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-snug">
            Real Stories From <br />
            <span className="gradient-text-pink">NIGAPE Alumni</span>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            Watch real feedback and journey from our students transitioning into high-growth AI engineering positions.
          </p>
        </div>

        {/* Video Testimonials: Horizontal Snap Carousel on Mobile, 3-Column Grid on Desktop */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth pb-4 md:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              className="w-[86vw] max-w-[360px] sm:w-[380px] md:w-auto md:max-w-none shrink-0 snap-center p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#0d0f1b] border border-white/10 hover:border-[#FF40EB]/50 transition-all duration-300 md:hover:-translate-y-1 shadow-2xl flex flex-col justify-between group"
            >
              <div>
                {/* Rating & Hike Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs sm:text-sm font-bold text-amber-400 tracking-wider">
                    5.0 / 5.0 Rating
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-emerald-400 bg-emerald-400/10 px-2.5 py-0.5 rounded-full border border-emerald-400/30 shrink-0">
                    {t.hike}
                  </span>
                </div>

                {/* Video Review Player - Enlarged without any cutting */}
                <div className="relative rounded-2xl overflow-hidden bg-black border border-white/15 w-full h-[460px] sm:h-[540px] lg:h-[580px] flex items-center justify-center shadow-inner">
                  <video
                    ref={(el) => {
                      videoRefs.current[idx] = el;
                    }}
                    src={t.videoUrl}
                    poster={t.posterUrl}
                    controls
                    playsInline
                    preload="metadata"
                    onPlay={() => handleVideoPlay(idx)}
                    onEnded={() => handleVideoEnded(idx)}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Author Info */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#9234eb]/40 to-[#FF40EB]/40 border border-[#FF40EB]/40 flex items-center justify-center font-bold text-xs text-white tracking-wider shrink-0">
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-white group-hover:text-[#FF40EB] transition-colors truncate">
                    {t.name}
                  </h4>
                  <div className="text-xs text-emerald-400 font-semibold truncate">
                    {t.newRole}
                  </div>
                  <div className="text-[10px] text-gray-400 line-through truncate">
                    {t.prevRole}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Controls & Pagination Dots */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-4">
          <button
            type="button"
            onClick={() => scrollToSlide(activeIndex - 1, false)}
            aria-label="Previous video"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/15 text-white flex items-center justify-center active:scale-90 transition hover:border-[#FF40EB]"
          >
            ←
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToSlide(idx, false)}
                aria-label={`Go to video ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? 'w-7 bg-[#FF40EB] shadow-[0_0_10px_#FF40EB]'
                    : 'w-2 bg-white/25'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollToSlide(activeIndex + 1, false)}
            aria-label="Next video"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/15 text-white flex items-center justify-center active:scale-90 transition hover:border-[#FF40EB]"
          >
            →
          </button>
        </div>

        {/* Reviews Trust Callout */}
      

      </div>
    </section>
  );
}
