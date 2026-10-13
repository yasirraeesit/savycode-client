import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Cpu, 
  Globe, 
  Database, 
  Cloud, 
  ShieldCheck, 
  Zap, 
  Terminal, 
  Layers, 
  Sparkles,
  Building2,
  Rocket
} from 'lucide-react';

export default function TechMarquee() {
  const { isDark } = useTheme();

  const techs = [
    { name: 'Next.js 15', category: 'FRAMEWORK', icon: <Globe className="w-4 h-4 text-[#00D2FF]" /> },
    { name: 'React 19', category: 'UI CORE', icon: <Layers className="w-4 h-4 text-cyan-400" /> },
    { name: 'OpenAI & Claude', category: 'LLM CORE', icon: <Cpu className="w-4 h-4 text-purple-400" /> },
    { name: 'Python / FastAPI', category: 'BACKEND', icon: <Terminal className="w-4 h-4 text-amber-400" /> },
    { name: 'Pinecone / pgvector', category: 'VECTOR RAG', icon: <Database className="w-4 h-4 text-emerald-400" /> },
    { name: 'TypeScript', category: 'TYPE SAFE', icon: <Zap className="w-4 h-4 text-blue-400" /> },
    { name: 'Node.js & Express', category: 'API GATEWAY', icon: <Terminal className="w-4 h-4 text-green-400" /> },
    { name: 'MongoDB / Mongoose', category: 'DATABASE', icon: <Database className="w-4 h-4 text-emerald-500" /> },
    { name: 'AWS & Cloudflare', category: 'CLOUD EDGE', icon: <Cloud className="w-4 h-4 text-orange-400" /> },
    { name: 'Docker / K8s', category: 'CONTAINERS', icon: <Layers className="w-4 h-4 text-sky-400" /> },
    { name: 'Stripe Payments', category: 'FINTECH', icon: <ShieldCheck className="w-4 h-4 text-indigo-400" /> },
    { name: 'Redis / BullMQ', category: 'ASYNC QUEUES', icon: <Zap className="w-4 h-4 text-rose-400" /> }
  ];

  const partners = [
    { name: 'AWS Cloud', role: 'Advanced Cloud Tier', badge: 'CLOUD PARTNER', color: 'text-amber-400' },
    { name: 'Stripe Financial', role: 'Global Payment Infrastructure', badge: 'VERIFIED PARTNER', color: 'text-indigo-400' },
    { name: 'Vercel Edge', role: 'Global Edge Network', badge: 'HOSTING PARTNER', color: 'text-sky-400' },
    { name: 'OpenAI Ecosystem', role: 'Enterprise AI Pipeline', badge: 'AI PARTNER', color: 'text-emerald-400' },
    { name: 'MongoDB Atlas', role: 'Multi-Cloud Document Database', badge: 'DATABASE PARTNER', color: 'text-green-400' },
    { name: 'Supabase Platform', role: 'Postgres & Edge Auth', badge: 'SCALE PARTNER', color: 'text-teal-400' },
    { name: 'Cloudflare', role: 'DDoS & Zero Trust Security', badge: 'SECURITY PARTNER', color: 'text-orange-400' },
    { name: 'Anthropic Claude', role: 'Cognitive Model Architecture', badge: 'RESEARCH TIER', color: 'text-purple-400' },
    { name: 'NVIDIA Inception', role: 'AI Acceleration Program', badge: 'ECOSYSTEM MEMBER', color: 'text-lime-400' },
    { name: 'Y Combinator Founders', role: 'Early-Stage Venture Velocity', badge: 'PORTFOLIO STACK', color: 'text-amber-500' },
    { name: 'Docker Enterprise', role: 'Reproducible Build Standards', badge: 'DEVOPS TIER', color: 'text-blue-400' },
    { name: 'Techstars Accelerators', role: 'Rapid Product Launchpad', badge: 'COMMUNITY NETWORK', color: 'text-rose-400' }
  ];

  return (
    <div className={`py-14 border-y overflow-hidden relative transition-colors duration-300 marquee-container ${
      isDark ? 'border-white/10 bg-[#0A0E18]/60' : 'border-slate-200 bg-slate-50/70'
    }`}>
      
      {/* ==========================================================================
          SLIDER 1: Production Technologies Powering Our Enterprise Deployments
          ========================================================================== */}
      <div className="mb-10">
        <div className="max-w-7xl mx-auto px-6 mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse"></span>
            <span className={`text-xs font-mono font-bold tracking-widest uppercase ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Production Technologies Powering Our Enterprise Deployments
            </span>
          </div>
          <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400 opacity-70">
            // HOVER TO PAUSE
          </span>
        </div>

        {/* Infinite Left-Moving Marquee Track with Fade Masks */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
            {techs.concat(techs).map((t, idx) => (
              <div 
                key={idx} 
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border transition-all cursor-default select-none shadow-xs ${
                  isDark 
                    ? 'bg-white/5 border-white/10 text-slate-200 hover:border-[#00D2FF]/50 hover:bg-white/10 hover:text-white' 
                    : 'bg-white border-slate-200 text-slate-800 hover:border-[#00D2FF] hover:shadow-md'
                }`}
              >
                <div className={`p-1.5 rounded-lg ${isDark ? 'bg-white/5' : 'bg-slate-100'}`}>
                  {t.icon}
                </div>
                <div>
                  <div className="text-xs font-bold leading-none">{t.name}</div>
                  <div className="text-[10px] font-mono text-slate-400 mt-1 uppercase">{t.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==========================================================================
          SLIDER 2: Partner Companies & Enterprise Ecosystem
          ========================================================================== */}
      <div>
        <div className="max-w-7xl mx-auto px-6 mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            <span className={`text-xs font-mono font-bold tracking-widest uppercase ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Partner Companies &amp; Enterprise Ecosystem
            </span>
          </div>
          <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400 opacity-70">
            // VERIFIED PARTNERS
          </span>
        </div>

        {/* Infinite Reverse-Moving Marquee Track with Fade Masks */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee-reverse flex items-center gap-6 whitespace-nowrap">
            {partners.concat(partners).map((p, pIdx) => (
              <div 
                key={pIdx} 
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border transition-all cursor-default select-none shadow-xs ${
                  isDark 
                    ? 'bg-white/5 border-white/10 text-slate-200 hover:border-purple-500/50 hover:bg-white/10 hover:text-white' 
                    : 'bg-white border-slate-200 text-slate-800 hover:border-purple-400 hover:shadow-md'
                }`}
              >
                <div className={`p-1.5 rounded-lg ${isDark ? 'bg-white/5' : 'bg-slate-100'}`}>
                  <Building2 className={`w-4 h-4 ${p.color}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold leading-none">{p.name}</span>
                    <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border ${
                      isDark ? 'bg-white/5 border-white/10 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
                    }`}>
                      {p.badge}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">{p.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
