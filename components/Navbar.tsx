'use client';

import { useState } from 'react';

export default function Navbar({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Highlights', href: '#highlights' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Projects', href: '#projects' },
    { name: 'Placements', href: '#placements' },
    { name: 'FAQs', href: '#faqs' },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-[38px] z-40 w-full px-3 sm:px-6 py-3 transition-all">
      <nav className="max-w-7xl mx-auto bg-black/80 backdrop-blur-xl border border-white/15 rounded-full px-4 sm:px-6 py-2 flex items-center justify-between shadow-2xl shadow-purple-950/20">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center group py-0.5">
          <img
            src="/nigape-logo.png"
            alt="NIGAPE - National Institute of Gen AI & Prompt Engineering"
            className="h-9 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 brightness-110 drop-shadow-[0_0_12px_rgba(255,64,235,0.3)]"
          />
        </a>

        {/* Desktop Anchor Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#FF40EB] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Call */}
          <a
            href="tel:+917428114918"
            className="hidden md:flex items-center gap-1.5 text-xs text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10 transition font-semibold"
          >
            <span>+91 74281 14918</span>
          </a>

          {/* Primary Lead Trigger CTA */}
          <button
            onClick={onOpenModal}
            className="relative group overflow-hidden rounded-full bg-gradient-to-r from-[#FF40EB] to-[#9234eb] px-3.5 sm:px-6 py-1.5 sm:py-2 text-[11px] sm:text-sm font-bold text-white shadow-[0_0_25px_rgba(255,64,235,0.45)] hover:shadow-[0_0_35px_rgba(255,64,235,0.7)] hover:scale-105 transition-all duration-300 flex items-center gap-1 shrink-0"
          >
            <span className="hidden sm:inline">Book Free Counseling</span>
            <span className="sm:hidden">Apply Now</span>
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </button>

          {/* Mobile Menu Toggle (CSS Bars) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none flex flex-col justify-center items-center gap-1 w-8 h-8"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <span className="text-xs font-bold text-[#FF40EB]">Close</span>
            ) : (
              <>
                <span className="w-5 h-0.5 bg-white block rounded"></span>
                <span className="w-5 h-0.5 bg-white block rounded"></span>
                <span className="w-5 h-0.5 bg-white block rounded"></span>
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto bg-black/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-4 shadow-2xl flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-200 hover:bg-white/10 hover:text-[#FF40EB] transition flex items-center justify-between"
            >
              <span>{link.name}</span>
              <span className="text-gray-500">→</span>
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <a
              href="tel:+917428114918"
              className="flex items-center justify-center gap-2 py-2.5 bg-white/5 rounded-xl text-xs font-semibold text-gray-300"
            >
              Call Admissions: +91 74281 14918
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF40EB] to-[#9234eb] text-white font-bold text-sm shadow-[0_0_20px_rgba(255,64,235,0.4)]"
            >
              Apply For Next Cohort →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
