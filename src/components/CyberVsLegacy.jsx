import React, { useState } from 'react';
import { AlertTriangle, CheckCircle2, Zap, Shield, ArrowRight, Terminal } from 'lucide-react';

export default function CyberVsLegacy({ onOpenModal }) {
  const [viewMode, setViewMode] = useState('split'); // 'split' | 'legacy' | 'sovycode'

  return (
    <section className="py-24 relative cyber-grid">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00F0FF]/10 border border-[#00F0FF]/25 text-[#00F0FF] text-xs font-mono tracking-widest uppercase mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>[DIAGNOSTIC_ANALYSIS // THE PARADIGM SHIFT]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase mb-4">
            Legacy Dev Shops vs SovYCode
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            See why ambitious founders and engineering directors choose our high-velocity product studio over traditional bloated agencies.
          </p>

          {/* Selector Switch */}
          <div className="inline-flex p-1.5 rounded-xl bg-white/5 border border-white/10 mt-6 font-mono text-xs">
            <button
              onClick={() => setViewMode('split')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                viewMode === 'split' ? 'bg-[#00F0FF] text-black font-bold shadow-[0_0_15px_#00F0FF]' : 'text-slate-400 hover:text-white'
              }`}
            >
              [SIDE-BY-SIDE MATRIX]
            </button>
            <button
              onClick={() => setViewMode('sovycode')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                viewMode === 'sovycode' ? 'bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF] font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              [SOVYCODE STUDIO]
            </button>
            <button
              onClick={() => setViewMode('legacy')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                viewMode === 'legacy' ? 'bg-rose-500/20 text-rose-400 border border-rose-500 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              [LEGACY AGENCY RISKS]
            </button>
          </div>
        </div>

        {/* Comparison HUD Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT: Legacy Agency Pitfalls */}
          {(viewMode === 'split' || viewMode === 'legacy') && (
            <div className="hud-panel rounded-2xl p-8 sm:p-10 border border-rose-500/30 bg-[#09080C]/90 flex flex-col justify-between relative">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-rose-500/20 mb-6">
                  <div className="flex items-center gap-2 text-rose-400 font-mono text-sm font-bold">
                    <AlertTriangle className="w-5 h-5 text-rose-400" />
                    <span>TRADITIONAL OUTSOURCING AGENCY</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-rose-500/10 text-rose-400 font-mono text-[10px] uppercase">
                    HIGH RISK
                  </span>
                </div>

                <div className="space-y-5 mb-8">
                  <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/15">
                    <div className="font-mono text-xs text-rose-400 font-bold mb-1">🐢 6 TO 9 MONTHS DEVELOPMENT PURGATORY</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Endless committee meetings, bloated slide decks, and missed launch windows that burn investor runway.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/15">
                    <div className="font-mono text-xs text-rose-400 font-bold mb-1">💸 JUNIOR OFFSHORE HANDOFFS</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      You are pitched by senior executives, but your actual codebase is outsourced to untrained junior subcontractors.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/15">
                    <div className="font-mono text-xs text-rose-400 font-bold mb-1">🔒 PROPRIETARY VENDOR LOCK-IN</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Code is withheld in proprietary repositories or built on brittle legacy frameworks requiring continuous costly retainers.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/15">
                    <div className="font-mono text-xs text-rose-400 font-bold mb-1">🍝 CRIPPLING TECHNICAL DEBT</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      No automated tests, zero typing, and fragile database schemas that collapse when real customer volume arrives.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-rose-500/20 text-xs font-mono text-rose-400">
                RESULT: 80% of projects require complete rewrites within 12 months.
              </div>
            </div>
          )}

          {/* RIGHT: SovYCode Cybernetic Studio */}
          {(viewMode === 'split' || viewMode === 'sovycode') && (
            <div className="hud-panel rounded-2xl p-8 sm:p-10 border border-[#00F0FF]/50 bg-[#070B12]/95 flex flex-col justify-between relative neon-glow-cyan">
              <div className="hud-corner-tr"></div>
              <div className="hud-corner-bl"></div>

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#00F0FF]/25 mb-6">
                  <div className="flex items-center gap-2 text-[#00F0FF] font-mono text-sm font-bold">
                    <Zap className="w-5 h-5 text-[#00F0FF]" />
                    <span>SOVYCODE HIGH-VELOCITY STUDIO</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#00F0FF]/20 text-[#00F0FF] font-mono text-[10px] font-bold uppercase shadow-[0_0_10px_#00F0FF]">
                    OPTIMAL PERFORMANCE
                  </span>
                </div>

                <div className="space-y-5 mb-8">
                  <div className="p-4 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/30">
                    <div className="font-mono text-xs text-[#00F0FF] font-bold mb-1">⚡ 30-DAY GUARANTEED PRODUCTION LAUNCH</div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      From concept to live monetization in 4 weeks. Laser-focused scope with zero wasted sprints or timeline slips.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/30">
                    <div className="font-mono text-xs text-[#00F0FF] font-bold mb-1">🧠 SENIOR ARCHITECTS ON EVERY COMMIT</div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      Direct, transparent communication with senior engineers who understand distributed systems, AI APIs, and product strategy.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/30">
                    <div className="font-mono text-xs text-[#00F0FF] font-bold mb-1">📂 100% IMMEDIATE CODE & REPO OWNERSHIP</div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      Day one commits push directly to your private GitHub or GitLab. Complete intellectual property ownership with zero strings attached.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/30">
                    <div className="font-mono text-xs text-[#00F0FF] font-bold mb-1">🛡️ ENTERPRISE-GRADE SCALABILITY</div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      Strict TypeScript typing, modular microservices, and automated CI/CD pipelines engineered to handle 1M+ transactions smoothly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400 font-bold">
                  ● 3.2x Average Speed-to-Market Acceleration
                </span>
                <button
                  onClick={onOpenModal}
                  className="glow-btn px-4 py-2 rounded-lg text-xs font-bold bg-[#00F0FF] text-black cursor-pointer"
                >
                  Experience the Difference &rarr;
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
