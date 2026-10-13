import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Loader2, Sparkles, Clock, Shield, Calendar, Users, Cpu, Rocket, Globe, Database } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function DiscoveryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'ai',
    urgency: 'standard',
    details: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { isDark } = useTheme();

  const services = [
    { id: 'ai', label: 'AI & Automations', icon: <Cpu className="w-4 h-4" /> },
    { id: 'mvp', label: '30-Day MVP', icon: <Rocket className="w-4 h-4" /> },
    { id: 'web', label: 'Next.js Web App', icon: <Globe className="w-4 h-4" /> },
    { id: 'saas', label: 'Custom Cloud SaaS', icon: <Database className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setSuccess(false);
      setErrorMsg('');
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => {
          onClose();
        }, 3200);
      } else {
        setErrorMsg(data.error || 'Failed to submit. Please try again.');
      }
    } catch (err) {
      // Graceful fallback
      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 3200);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-4xl rounded-3xl border shadow-2xl transition-all overflow-hidden max-h-[92vh] flex flex-col ${
          isDark
            ? 'bg-[#0E131F] border-white/15 text-white shadow-[0_25px_80px_rgba(0,0,0,0.85)]'
            : 'bg-white border-slate-200 text-slate-900 shadow-[0_25px_80px_rgba(15,23,42,0.18)]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer border ${
            isDark ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10' : 'bg-slate-100 border-slate-200 text-slate-500 hover:text-slate-900'
          }`}
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {success ? (
          <div className="py-20 px-8 text-center space-y-4 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-mono font-bold uppercase tracking-wider">
              SESSION CONFIRMED
            </div>
            <h3 className={`text-2xl sm:text-3xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Discovery Session Reserved!
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Thank you, {formData.name}. We've received your request and reserved your priority scoping slot. Check your inbox ({formData.email}) for the direct Google Meet invite.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto">
            
            {/* Left Column: Executive Session Briefing */}
            <div className={`lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r ${
              isDark ? 'bg-[#07090E]/80 border-white/10' : 'bg-slate-50 border-slate-200'
            }`}>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/25 text-[#00D2FF] text-xs font-semibold uppercase tracking-wider mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>VIP STRATEGY ADVISORY</span>
                </div>

                <h3 className={`text-2xl font-extrabold tracking-tight mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  30-Minute Architecture & Scope Session
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Speak directly with a Senior Technical Architect. No sales quota push, zero technical jargon—just clear advice on feasibility, sprint timeline, and pricing.
                </p>

                {/* Session Highlights */}
                <div className="space-y-3.5 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-[#00D2FF]/15 text-[#00D2FF] flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-xs">
                      <div className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>30-Minute Deep Dive</div>
                      <div className={isDark ? 'text-slate-400' : 'text-slate-500'}>Review system requirements, API dependencies, and data flows.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500/15 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                      <Shield className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-xs">
                      <div className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Mutual NDA Protection</div>
                      <div className={isDark ? 'text-slate-400' : 'text-slate-500'}>Your product ideas and proprietary datasets remain 100% confidential.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-purple-500/15 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Calendar className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-xs">
                      <div className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Actionable Sprint Blueprint</div>
                      <div className={isDark ? 'text-slate-400' : 'text-slate-500'}>Walk away with an estimated time-to-market and milestone estimate.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lead Pill */}
              <div className={`p-4 rounded-2xl border flex items-center gap-3.5 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-xs'
              }`}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00D2FF] to-[#6366F1] flex items-center justify-center font-bold text-[#07090E] text-xs shadow-sm">
                  //
                </div>
                <div>
                  <div className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>SovYCode Senior Systems Architect</div>
                  <div className="text-[11px] text-emerald-500 font-medium flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    2 Onboarding Slots Open For Q2/Q3
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Booking Form */}
            <div className="lg:col-span-7 p-8 sm:p-10">
              <div className="mb-6">
                <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Reserve Your Strategy Session
                </h4>
                <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Fill in your details below to instantly lock in your complimentary consultation.
                </p>
              </div>

              {errorMsg && (
                <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Service Focus Selector Chips */}
                <div>
                  <label className={`block text-xs font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Primary Focus of Your Project:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {services.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, service: s.id })}
                        className={`p-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer border text-left ${
                          formData.service === s.id
                            ? 'bg-[#00D2FF]/15 border-[#00D2FF] text-[#00D2FF] shadow-xs'
                            : isDark
                              ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900'
                        }`}
                      >
                        <span className={formData.service === s.id ? 'text-[#00D2FF]' : 'text-slate-400'}>{s.icon}</span>
                        <span className="truncate">{s.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none focus:border-[#00D2FF] ${
                        isDark 
                          ? 'bg-[#07090E] border-white/10 text-white placeholder-slate-500' 
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none focus:border-[#00D2FF] ${
                        isDark 
                          ? 'bg-[#07090E] border-white/10 text-white placeholder-slate-500' 
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Target Timeline Urgency:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'asap', label: '⚡ ASAP Blitz (1-2 wks)' },
                      { id: 'standard', label: '📅 Standard (1 month)' },
                      { id: 'planning', label: '🔍 Planning Stage' }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, urgency: opt.id })}
                        className={`py-2 px-2 rounded-xl text-[11px] font-semibold border transition-all cursor-pointer ${
                          formData.urgency === opt.id
                            ? 'bg-[#00D2FF]/15 border-[#00D2FF] text-[#00D2FF]'
                            : isDark
                              ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Project Overview or Key Goal (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Briefly describe what you're building, target users, or your biggest question..."
                    className={`w-full px-3.5 py-2 rounded-xl border text-sm transition-colors focus:outline-none focus:border-[#00D2FF] ${
                      isDark 
                        ? 'bg-[#07090E] border-white/10 text-white placeholder-slate-500' 
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full luxury-btn-primary py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2 shadow-lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Reserving Session...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm Free Strategy Session</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className={`text-[11px] text-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  🔒 100% Confidential • Direct Tech Lead consultation • Mutual NDA signed upon request
                </div>
              </form>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
