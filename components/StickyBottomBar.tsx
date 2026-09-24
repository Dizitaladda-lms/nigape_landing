'use client';

export default function StickyBottomBar({ onOpenModal }) {
  const handleScrollToForm = () => {
    const el = document.getElementById('lead-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      onOpenModal();
    }
  };

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0a0b12]/95 backdrop-blur-xl border-t border-[#FF40EB]/40 p-3 shadow-[0_-8px_30px_rgba(255,64,235,0.25)]">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF40EB] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF40EB]"></span>
            </span>
            <span className="text-[10px] font-black text-[#FF40EB] uppercase tracking-wider">
              Only 7 Seats Left
            </span>
          </div>
          <span className="text-xs font-extrabold text-white">
            Next Cohort: This Saturday
          </span>
        </div>

        <button
          onClick={handleScrollToForm}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF40EB] via-[#d922c5] to-[#9234eb] text-white font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,64,235,0.7)] animate-shimmer active:scale-95 transition cursor-pointer"
        >
          Book Seat Free →
        </button>
      </div>
    </div>
  );
}

