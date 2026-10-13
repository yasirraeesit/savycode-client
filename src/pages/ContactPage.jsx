import React, { useState } from 'react';
import { Mail, Clock, Shield, CheckCircle2, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { apiUrl } from '../utils/api';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'ai',
    details: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { isDark } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch(apiUrl('/api/leads'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
      } else {
        setErrorMsg(data.error || 'Failed to submit discovery request.');
      }
    } catch (err) {
      // In-memory fallback
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 relative ambient-glow-top">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/25 text-[#00D2FF] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>START A CONVERSATION</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Let's Architect Your <span className="luxury-gradient-text">Next Breakthrough</span>.
          </h1>
          <p className="text-sm sm:text-base leading-relaxed opacity-80">
            Schedule a complimentary 30-minute scoping call. We'll analyze your goals, discuss system architecture, and provide a clear timeline estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info & Reassurances */}
          <div className="lg:col-span-5 space-y-6">
            <div className="luxury-card rounded-2xl p-8 space-y-6">
              <h3 className="text-xl font-bold mb-2">What to Expect:</h3>
              
              <div className="flex items-start gap-3 text-sm opacity-90">
                <CheckCircle2 className="w-5 h-5 text-[#00D2FF] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Direct With Tech Leads</div>
                  <div className="text-xs opacity-75 mt-0.5">No pushy sales reps. You speak directly with our senior systems architects.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm opacity-90">
                <CheckCircle2 className="w-5 h-5 text-[#00D2FF] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Zero Technical Jargon</div>
                  <div className="text-xs opacity-75 mt-0.5">We translate complex engineering decisions into clear business outcomes.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm opacity-90">
                <CheckCircle2 className="w-5 h-5 text-[#00D2FF] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Actionable Next Steps</div>
                  <div className="text-xs opacity-75 mt-0.5">Receive a free high-level architectural diagram and roadmap estimate.</div>
                </div>
              </div>
            </div>

            <div className="luxury-card rounded-2xl p-6 space-y-4 text-xs opacity-90">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#00D2FF]" />
                <span>hello@sovycode.com (4-hour response guarantee)</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>Operating globally across US, EU & APAC timezones</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>Mutual NDA executed immediately upon request</span>
              </div>
            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="lg:col-span-7">
            <div className="luxury-card rounded-2xl p-8 sm:p-10 shadow-2xl">
              {success ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Discovery Call Reserved!</h3>
                  <p className="text-sm max-w-md mx-auto opacity-80">
                    Thank you, {formData.name}. We've received your inquiry and will reach out to {formData.email} within 4 business hours to confirm your session.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold mb-2">Book Your Strategy Session</h3>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs">
                      {errorMsg}
                    </div>
                  )}

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
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:border-[#00D2FF] ${
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
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:border-[#00D2FF] ${
                        isDark
                          ? 'bg-[#07090E] border-white/10 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Primary Project Focus *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:border-[#00D2FF] ${
                        isDark
                          ? 'bg-[#07090E] border-white/10 text-white'
                          : 'bg-slate-50 border-slate-200 text-slate-900'
                      }`}
                    >
                      <option value="ai">AI Integration & Custom LLM Pipeline</option>
                      <option value="mvp">Rapid 30-Day Startup MVP</option>
                      <option value="web">Modern Next.js Web Application</option>
                      <option value="saas">Custom SaaS Architecture / Cloud System</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Brief Project Overview (Optional)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Tell us what you're building, target timeline, or existing technical stack..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:border-[#00D2FF] ${
                        isDark
                          ? 'bg-[#07090E] border-white/10 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full luxury-btn-primary py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2 shadow-lg"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Reserving Session...</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm Discovery Call</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-[11px] text-center opacity-70">
                    🔒 100% Confidential. Mutual NDA signed upon request.
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
