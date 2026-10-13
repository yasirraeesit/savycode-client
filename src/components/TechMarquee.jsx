import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function TechMarquee() {
  const { isDark } = useTheme();

  const techs = [
    { name: 'Next.js 15', category: 'FRAMEWORK' },
    { name: 'React 19', category: 'UI' },
    { name: 'OpenAI / Claude', category: 'AI / LLM' },
    { name: 'Python / FastAPI', category: 'BACKEND' },
    { name: 'Pinecone / Vector', category: 'RAG' },
    { name: 'TypeScript', category: 'LANG' },
    { name: 'Node.js & Express', category: 'RUNTIME' },
    { name: 'MongoDB / Mongoose', category: 'DATABASE' },
    { name: 'AWS & Cloudflare', category: 'INFRA' },
    { name: 'Docker / K8s', category: 'DEVOPS' },
    { name: 'Stripe Payments', category: 'FINTECH' },
    { name: 'Redis / Upstash', category: 'CACHE' },
  ];

  return (
    <div className={`py-10 border-y overflow-hidden relative transition-colors duration-300 ${
      isDark ? 'border-white/10 bg-[#0E131F]/30' : 'border-slate-200 bg-slate-100/50'
    }`}>
      <div className={`text-center text-xs font-mono tracking-widest uppercase mb-6 ${
        isDark ? 'text-slate-400' : 'text-slate-500'
      }`}>
        Production Technologies Powering Our Enterprise Deployments
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {techs.concat(techs).map((t, idx) => (
            <div key={idx} className={`flex items-center gap-3 transition-colors cursor-default ${
              isDark ? 'text-slate-300 hover:text-[#00D2FF]' : 'text-slate-700 hover:text-[#00D2FF]'
            }`}>
              <span className={`px-2 py-0.5 rounded text-[11px] font-mono border ${
                isDark 
                  ? 'bg-white/5 border-white/10 text-slate-400' 
                  : 'bg-white border-slate-200 text-slate-500 shadow-xs'
              }`}>
                {t.category}
              </span>
              <span className="text-sm font-semibold">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
