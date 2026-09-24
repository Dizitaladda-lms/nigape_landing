'use client';

import { useState, useEffect } from 'react';

export default function TopUrgencyBanner({ onOpenModal }) {
  // 2 days countdown timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 48,
    seconds: 35
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNum = (num) => String(num).padStart(2, '0');

  return (
    <div className="bg-gradient-to-r from-[#9234eb] via-[#FF40EB] to-[#9234eb] text-white py-2 px-3 text-xs sm:text-sm font-semibold sticky top-0 z-50 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="flex h-2 w-2 rounded-full bg-white animate-ping" />
          <span className="bg-black/30 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs uppercase tracking-wider font-bold">
            Admissions Closing Soon
          </span>
          <span className="hidden md:inline text-white/90">
             • Only <strong>7 Seats Left</strong>
          </span>
          <span className="inline md:hidden text-white/95">
            Next Cohort This Saturday (7 Seats Left)
          </span>
        </div>

        <div className="flex items-center gap-3 mx-auto sm:mx-0">
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs bg-black/40 px-2.5 py-1 rounded-full border border-white/20">
            <span>Scholarship Ends in:</span>
            <span className="font-mono font-bold tracking-wider text-yellow-300">
              {formatNum(timeLeft.hours)}h : {formatNum(timeLeft.minutes)}m : {formatNum(timeLeft.seconds)}s
            </span>
          </div>

          <button
            onClick={onOpenModal}
            className="bg-black text-white hover:bg-white hover:text-black transition-all px-3 py-1 rounded-full text-xs font-bold shadow-md hover:scale-105 hidden sm:inline-flex items-center gap-1"
          >
            Claim 30% Off →
          </button>
        </div>
      </div>
    </div>
  );
}
