'use client';

import { useState, useEffect } from 'react';
import TopUrgencyBanner from '@/components/TopUrgencyBanner';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TechMarquee from '@/components/TechMarquee';
import KeyHighlights from '@/components/KeyHighlights';
import AudienceSection from '@/components/AudienceSection';
import CurriculumSection from '@/components/CurriculumSection';
import ProjectsSection from '@/components/ProjectsSection';
import HiringPartners from '@/components/HiringPartners';
import ComparisonTable from '@/components/ComparisonTable';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallbackBanner from '@/components/CallbackBanner';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import StickyBottomBar from '@/components/StickyBottomBar';
import LeadModal from '@/components/LeadModal';
import SuccessModal from '@/components/SuccessModal';
import AdminLeadsDrawer from '@/components/AdminLeadsDrawer';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [submittedLead, setSubmittedLead] = useState(null);

  // Global shortcut (Ctrl + Shift + L) for marketing team leads viewer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'L' || e.key === 'l')) {
        e.preventDefault();
        setIsAdminOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLeadSuccess = (leadData) => {
    setSubmittedLead(leadData);
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#FF40EB] selection:text-white relative">
      {/* 1. Urgency Bar with Live Countdown */}
      <TopUrgencyBanner onOpenModal={() => setIsModalOpen(true)} />

      {/* 2. Focused Navigation */}
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* 3. Hero Section (High-Converting Split Grid) */}
      <HeroSection onSubmitSuccess={handleLeadSuccess} />

      {/* 4. Tech Stack Looping Marquee */}
      <TechMarquee />

      {/* 5. Key Highlights & Quantified Metrics */}
      <KeyHighlights onOpenModal={() => setIsModalOpen(true)} />

      {/* 6. Who Is This Bootcamp For? */}
      <AudienceSection onOpenModal={() => setIsModalOpen(true)} />

      {/* 7. Comprehensive 7-Module Curriculum */}
      <CurriculumSection onOpenModal={() => setIsModalOpen(true)} />

      {/* 8. Enterprise AI Projects Portfolio */}
      <ProjectsSection onOpenModal={() => setIsModalOpen(true)} />

      {/* 9. Hiring Partners & Placement Support */}
      <HiringPartners onOpenModal={() => setIsModalOpen(true)} />

      {/* 11. Head-to-Head Comparison Matrix */}
      <ComparisonTable onOpenModal={() => setIsModalOpen(true)} />

      {/* 12. Student Reviews & Alumni Salary Hikes */}
      <TestimonialsSection onOpenModal={() => setIsModalOpen(true)} />

      {/* 13. Mid-Page Fast Callback Request */}
      <CallbackBanner onSubmitSuccess={handleLeadSuccess} />

      {/* 14. Interactive Objection-Handling FAQs */}
      <FaqSection onOpenModal={() => setIsModalOpen(true)} />

      {/* 15. Zero-Leak Footer with GK2 South Delhi Campus Info */}
      <Footer 
        onOpenModal={() => setIsModalOpen(true)} 
        onOpenAdmin={() => setIsAdminOpen(true)} 
      />

      {/* 16. Mobile Sticky Conversion Bar */}
      <StickyBottomBar onOpenModal={() => setIsModalOpen(true)} />

      {/* Interactive Pop-up Lead Capture Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmitSuccess={handleLeadSuccess}
      />

      {/* Thank You / Confirmation Screen with Instant WhatsApp Redirect */}
      <SuccessModal
        leadData={submittedLead}
        onClose={() => setSubmittedLead(null)}
      />

      {/* Admin Leads Viewer & CSV Downloader */}
      <AdminLeadsDrawer
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />
    </main>
  );
}
