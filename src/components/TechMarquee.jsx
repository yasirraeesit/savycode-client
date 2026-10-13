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
  Layers
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

  return (
    <div className={`py-9 border-y overflow-hidden relative transition-colors duration-300 marquee-container ${
      isDark ? 'border-white/10 bg-[#0A0E18]/60' : 'border-slate-200 bg-slate-50/70'
    }`}>
      <div className="max-w-7xl mx-auto px-6 mb-4 flex items-center justify-between">
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
  );
}
