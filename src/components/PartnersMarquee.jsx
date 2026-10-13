import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Building2, Sparkles } from 'lucide-react';

export default function PartnersMarquee() {
  const { isDark } = useTheme();

  const partners = [
    { name: 'AWS Cloud', role: 'Advanced Cloud Tier', badge: 'CLOUD ALLIANCE', color: 'text-amber-400' },
    { name: 'Stripe Financial', role: 'Payment Infrastructure', badge: 'VERIFIED PARTNER', color: 'text-indigo-400' },
    { name: 'Vercel Edge', role: 'Global Edge Network', badge: 'HOSTING PARTNER', color: 'text-sky-400' },
    { name: 'OpenAI Ecosystem', role: 'Enterprise AI Pipeline', badge: 'AI PARTNER', color: 'text-emerald-400' },
    { name: 'MongoDB Atlas', role: 'Document Database Cluster', badge: 'DATABASE PARTNER', color: 'text-green-400' },
    { name: 'Supabase Platform', role: 'Postgres & Edge Auth', badge: 'SCALE PARTNER', color: 'text-teal-400' },
    { name: 'Cloudflare', role: 'DDoS & Zero Trust Security', badge: 'SECURITY PARTNER', color: 'text-orange-400' },
    { name: 'Anthropic Claude', role: 'Cognitive Model Architecture', badge: 'RESEARCH TIER', color: 'text-purple-400' },
    { name: 'NVIDIA Inception', role: 'AI Acceleration Program', badge: 'ECOSYSTEM MEMBER', color: 'text-lime-400' },
    { name: 'Y Combinator Founders', role: 'Venture-Backed Velocity', badge: 'PORTFOLIO STACK', color: 'text-amber-500' },
    { name: 'Docker Enterprise', role: 'Container Build Standards', badge: 'DEVOPS TIER', color: 'text-blue-400' },
    { name: 'Techstars Accelerators', role: 'Startup Launchpad Network', badge: 'COMMUNITY NETWORK', color: 'text-rose-400' }
  ];

  return (
    <section className={`py-20 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#080C16] border-y border-white/5' : 'bg-slate-100/60 border-y border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/20 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>STRATEGIC ALLIANCES &amp; ECOSYSTEM</span>
        </div>

        <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          Trusted Technology Partners &amp; Cloud Allies
        </h2>

        <p className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          We collaborate with world-class cloud infrastructure, AI research labs, and venture networks to ensure your software is engineered on battle-tested foundations.
        </p>
      </div>

      <div className="marquee-container">
        {/* Single Clean Infinite Moving Slider */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
            {partners.concat(partners).concat(partners).map((p, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3.5 px-5 py-3 rounded-2xl border transition-all cursor-default select-none shadow-sm ${
                  isDark
                    ? 'bg-white/5 border-white/10 text-slate-200 hover:border-[#00D2FF]/50 hover:bg-white/10'
                    : 'bg-white border-slate-200 text-slate-800 hover:border-[#00D2FF] hover:shadow-md'
                }`}
              >
                <div className={`p-2 rounded-xl ${isDark ? 'bg-white/5' : 'bg-slate-100'}`}>
                  <Building2 className={`w-5 h-5 ${p.color}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold leading-none">{p.name}</span>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                      isDark ? 'bg-white/5 border-white/10 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
                    }`}>
                      {p.badge}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">{p.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
