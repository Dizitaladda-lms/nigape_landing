'use client';

import { useState, useEffect } from 'react';

export default function AdminLeadsDrawer({ isOpen, onClose }) {
  const [leads, setLeads] = useState([]);

  const loadLeads = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('nigape_leads') || '[]');
      setLeads(stored);
    } catch (err) {
      console.error(err);
      setLeads([]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadLeads();
    }
  }, [isOpen]);

  const handleExportCSV = () => {
    if (leads.length === 0) {
      alert('No leads to export yet!');
      return;
    }

    const headers = ['Timestamp', 'Full Name', 'Phone', 'Email', 'Profile', 'Learning Mode', 'Source', 'UTM Source', 'UTM Campaign'];
    const rows = leads.map(l => [
      `"${l.timestamp || ''}"`,
      `"${l.fullName || ''}"`,
      `"${l.phone || ''}"`,
      `"${l.email || ''}"`,
      `"${l.experience || ''}"`,
      `"${l.learningMode || ''}"`,
      `"${l.source || ''}"`,
      `"${l.utm_source || ''}"`,
      `"${l.utm_campaign || ''}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `nigape_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClearLeads = () => {
    if (confirm('Are you sure you want to clear all stored test leads?')) {
      localStorage.removeItem('nigape_leads');
      setLeads([]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-xl h-full bg-[#0a0b12] border-l border-white/15 p-6 shadow-2xl flex flex-col justify-between overflow-hidden">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-white">Ad Campaign Leads Manager</h3>
              <span className="text-xs font-mono bg-[#FF40EB]/20 text-[#FF40EB] px-2 py-0.5 rounded-full">
                {leads.length} leads
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 flex items-center justify-center text-sm font-bold"
            >
              ✕
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-2">
            Captures real-time submissions from your Google Ads and Meta Ads campaigns.
          </p>

          {/* Action buttons */}
          <div className="flex items-center gap-3 my-4">
            <button
              onClick={handleExportCSV}
              className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-[#FF40EB] to-[#9234eb] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
            >
              <span>Export CSV for CRM →</span>
            </button>
            <button
              onClick={loadLeads}
              className="py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 text-xs font-semibold"
              title="Refresh"
            >
              Refresh
            </button>
            <button
              onClick={handleClearLeads}
              className="py-2 px-3 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 text-xs font-semibold"
              title="Clear all leads"
            >
              Clear All
            </button>
          </div>
        </div>

        {/* Lead List */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1 my-2">
          {leads.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center text-gray-500 text-xs">
              <span>No leads captured yet. Submit the form to see a test lead here!</span>
            </div>
          ) : (
            leads.map((lead, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition space-y-1.5 text-xs text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">
                    {lead.fullName}
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono">
                    {new Date(lead.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-gray-300">
                  <span className="text-[#FF40EB] font-mono font-semibold">
                    +91 {lead.phone}
                  </span>
                  {lead.email && (
                    <span className="text-gray-400">
                      {lead.email}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-gray-300">
                    {lead.experience}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#9234eb]/20 text-[10px] text-purple-300">
                    {lead.learningMode}
                  </span>
                  {lead.utm_source && (
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-[10px] text-emerald-400 font-mono">
                      utm: {lead.utm_source}
                    </span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-white/10 text-[11px] text-gray-400 flex items-center justify-between">
          <span>Shortcut: <strong>Ctrl + Shift + L</strong></span>
          <button onClick={onClose} className="text-[#FF40EB] font-semibold hover:underline">
            Close Panel
          </button>
        </div>

      </div>
    </div>
  );
}
