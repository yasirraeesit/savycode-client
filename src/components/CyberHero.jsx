import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Cpu, Activity, ShieldCheck, Zap, Radio, Globe, Layers, CheckCircle2, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CyberHero({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('neural');
  const [trafficActive, setTrafficActive] = useState(false);
  const [tokenCount, setTokenCount] = useState(1480);
  const [edgePing, setEdgePing] = useState(18);

  // Live telemetry counter simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setTokenCount((prev) => prev + Math.floor(Math.random() * 45) + 10);
      setEdgePing((prev) => Math.floor(16 + Math.random() * 5));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const triggerTrafficSpike = () => {
    setTrafficActive(true);
    setTimeout(() => setTrafficActive(false), 3000);
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden cyber-grid">
      {/* Top Tactical Telemetry Bar */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="hud-panel rounded-lg px-4 py-2 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono border border-[#00F0FF]/20 bg-[#04060A]/90">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              CLUSTER_STATUS: OPTIMAL
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">LOC: 37.7749° N, 122.4194° W</span>
            <span className="text-slate-500">|</span>
            <span className="text-[#00F0FF]">GLOBAL_LATENCY: {edgePing}ms</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="text-slate-300">
              TOKENS_PROCESSED: <span className="text-white font-bold">{tokenCount.toLocaleString()}</span>
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-purple-400 font-semibold">VPC_ENCRYPTION: AES-256-GCM</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        
        {/* Tactical Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-mono tracking-widest uppercase mb-8">
          <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" />
          <span>[SYS_INIT // SOVYCODE_COMMAND_CENTER_V4.2]</span>
        </div>

        {/* H1 Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-6 max-w-5xl mx-auto uppercase">
          We Architect Scalable Software &{' '}
          <span className="bg-gradient-to-r from-white via-[#00F0FF] to-[#6366F1] bg-clip-text text-transparent">
            AI Systems
          </span>{' '}
          That Scale Your Business.
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          From custom enterprise LLM integrations and private RAG pipelines to sub-second Next.js edge applications—we turn complex engineering into market leadership for non-technical founders and ambitious enterprise teams.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <button
            onClick={onOpenModal}
            className="cyber-btn px-8 py-4 rounded-lg text-sm font-black flex items-center gap-3 cursor-pointer"
          >
            <span>INITIALIZE DISCOVERY SESSION</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <Link
            to="/services"
            className="cyber-btn-outline px-8 py-4 rounded-lg text-sm font-bold flex items-center gap-2"
          >
            <span>SYSTEM SPECIFICATIONS ↓</span>
          </Link>
        </div>

        {/* Reassurance Microchips */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400 mb-14">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#00F0FF]" />
            30-Min Strategy Call
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#00F0FF]" />
            Direct With Tech Lead
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#00F0FF]" />
            Zero Technical Jargon
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#00F0FF]" />
            100% Repository IP Handover
          </span>
        </div>

        {/* ==========================================================================
            INTERACTIVE CYBERNETIC COMMAND CONSOLE WIDGET
            ========================================================================== */}
        <div className="hud-panel rounded-2xl border border-[#00F0FF]/30 p-2 sm:p-4 text-left shadow-[0_20px_70px_rgba(0,240,255,0.15)] bg-[#070B12]/95 relative overflow-hidden">
          <div className="hud-corner-tr"></div>
          <div className="hud-corner-bl"></div>

          {/* Console Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-3 border-b border-white/10 bg-[#04060A]/80 rounded-t-xl">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span className="ml-3 font-mono text-xs text-slate-400 hidden sm:inline">
                sovycode_interactive_telemetry_terminal // v4.2
              </span>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="flex items-center gap-1.5 font-mono text-xs">
              <button
                onClick={() => setActiveTab('neural')}
                className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                  activeTab === 'neural'
                    ? 'bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/50 shadow-[0_0_12px_rgba(0,240,255,0.3)] font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                [01 // AI_NEURAL_FLOW]
              </button>
              <button
                onClick={() => setActiveTab('speed')}
                className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                  activeTab === 'speed'
                    ? 'bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/50 shadow-[0_0_12px_rgba(0,240,255,0.3)] font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                [02 // EDGE_BENCHMARK]
              </button>
              <button
                onClick={() => setActiveTab('cluster')}
                className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                  activeTab === 'cluster'
                    ? 'bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/50 shadow-[0_0_12px_rgba(0,240,255,0.3)] font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                [03 // CLOUD_NODES]
              </button>
            </div>
          </div>

          {/* Console Body: Dynamic View */}
          <div className="p-4 sm:p-6 min-h-[340px] flex flex-col justify-between">
            {activeTab === 'neural' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-white/5">
                  <span className="text-[#00F0FF] flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#00F0FF]" />
                    LIVE RAG INFERENCE PIPELINE
                  </span>
                  <span>ZERO-RETENTION DATA VAULT: ACTIVE</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Step 1 */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs">
                    <div className="text-slate-400 mb-1">01. INGESTION & CHUNKING</div>
                    <div className="text-white font-bold mb-2">Enterprise PDF / SQL Stream</div>
                    <div className="text-slate-400 text-[11px] leading-relaxed">
                      Tokenized into 512-dim vectors with metadata isolation and PII redaction.
                    </div>
                    <div className="mt-3 text-[#00F0FF] text-[10px]">● Vector DB: pgvector (32ms)</div>
                  </div>

                  {/* Step 2 */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs">
                    <div className="text-purple-400 mb-1">02. SEMANTIC RETRIEVAL</div>
                    <div className="text-white font-bold mb-2">Hybrid Sparse + Dense Search</div>
                    <div className="text-slate-400 text-[11px] leading-relaxed">
                      Top-5 context chunks retrieved with cosine similarity score &gt; 0.94.
                    </div>
                    <div className="mt-3 text-purple-400 text-[10px]">● Re-ranking: Cohere Ranker (14ms)</div>
                  </div>

                  {/* Step 3 */}
                  <div className="p-4 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/30 font-mono text-xs neon-glow-cyan">
                    <div className="text-emerald-400 mb-1">03. REASONING & OUTPUT</div>
                    <div className="text-white font-bold mb-2">Private VPC LLM Generation</div>
                    <div className="text-slate-300 text-[11px] leading-relaxed">
                      "Financial synthesis completed without hallucination. Accuracy verified."
                    </div>
                    <div className="mt-3 text-emerald-400 text-[10px]">● TTFT: 120ms • 140 tok/s</div>
                  </div>
                </div>

                {/* Interactive Stream Prompt Box */}
                <div className="mt-4 p-4 rounded-xl bg-[#04060A] border border-white/10 font-mono text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[#00F0FF]">$</span>
                    <span className="text-slate-300">
                      QUERY: <span className="text-white">"Analyze Q2 churn risk across 100k subscriber cohorts"</span>
                    </span>
                    <span className="w-2 h-4 bg-[#00F0FF] animate-cursor"></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 text-[11px]">● Latency: 42ms</span>
                    <button
                      onClick={triggerTrafficSpike}
                      className="px-3 py-1 rounded bg-[#00F0FF]/20 border border-[#00F0FF] text-[#00F0FF] text-[11px] font-bold hover:bg-[#00F0FF] hover:text-black transition-colors cursor-pointer"
                    >
                      {trafficActive ? 'SIMULATING 100K QUERIES...' : 'RUN LIVE BENCHMARK'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'speed' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-white/5">
                  <span className="text-[#00F2FE] flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#00F0FF]" />
                    WEB SPEED GAUGE: NEXT.JS 15 EDGE RUNTIME vs LEGACY STACK
                  </span>
                  <span>CORE WEB VITALS BENCHMARK</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
                  {/* Legacy Stack */}
                  <div className="p-6 rounded-2xl bg-rose-500/5 border border-rose-500/20 font-mono">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-rose-400">TRADITIONAL MONOLITHIC AGENCY</span>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-rose-500/20 text-rose-400">FAILS VITALS</span>
                    </div>
                    <div className="text-4xl font-black text-rose-400 mb-2">3,420 ms</div>
                    <div className="text-xs text-slate-400 mb-4">Average Time to First Byte (TTFB)</div>
                    <div className="w-full bg-slate-800 rounded-full h-2 mb-4 overflow-hidden">
                      <div className="bg-rose-500 h-2 rounded-full w-[85%]"></div>
                    </div>
                    <ul className="text-[11px] text-slate-400 space-y-1">
                      <li>✕ Bloated JavaScript bundles (3.2 MB)</li>
                      <li>✕ Client-side waterfall requests</li>
                      <li>✕ Poor SEO indexation scores (&lt; 45/100)</li>
                    </ul>
                  </div>

                  {/* SovYCode Modern Edge */}
                  <div className="p-6 rounded-2xl bg-[#00F0FF]/10 border border-[#00F0FF]/50 font-mono neon-glow-cyan">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-[#00F0FF]">SOVYCODE NEXT.JS 15 EDGE STUDIO</span>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-[#00F0FF]/20 text-[#00F0FF] font-bold">100/100 SCORE</span>
                    </div>
                    <div className="text-4xl font-black text-[#00F0FF] mb-2">{edgePing} ms</div>
                    <div className="text-xs text-slate-300 mb-4">Instant Global Edge Hydration (TTFB)</div>
                    <div className="w-full bg-slate-800 rounded-full h-2 mb-4 overflow-hidden">
                      <div className="bg-[#00F0FF] h-2 rounded-full w-[12%]"></div>
                    </div>
                    <ul className="text-[11px] text-slate-300 space-y-1">
                      <li>✓ Sub-200ms global response time</li>
                      <li>✓ Zero layout shift (CLS: 0.00)</li>
                      <li>✓ Streaming Server Components hydration</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'cluster' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-white/5">
                  <span className="text-[#00F0FF] flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#00F0FF]" />
                    DISTRIBUTED ZERO-DOWNTIME TOPOLOGY
                  </span>
                  <span>99.99% FAULT-TOLERANT ARCHITECTURE</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#00F0FF] font-bold">NODE: US-EAST</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">14 ms</div>
                    <div className="text-[11px] text-slate-400">Throughput: 84,200 req/sec</div>
                    <div className="text-[10px] text-emerald-400 mt-2">● Auto-scaled Docker containers</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-purple-400 font-bold">NODE: EU-CENTRAL</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">22 ms</div>
                    <div className="text-[11px] text-slate-400">Throughput: 62,100 req/sec</div>
                    <div className="text-[10px] text-purple-400 mt-2">● Read Replica Sync: 0.8ms</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-emerald-400 font-bold">NODE: AP-NORTHEAST</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">36 ms</div>
                    <div className="text-[11px] text-slate-400">Throughput: 49,800 req/sec</div>
                    <div className="text-[10px] text-emerald-400 mt-2">● Redis Cache Hit Ratio: 98.4%</div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 font-mono text-xs text-emerald-400 text-center">
                  ● Redundant multi-region failover tested every 24 hours. Zero single points of failure.
                </div>
              </div>
            )}

            {/* Console Footer Status */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-4">
                <span className="text-emerald-400">● 99.98% REAL-TIME UPTIME</span>
                <span className="text-slate-500">|</span>
                <span>FAILOVER: ZERO_DATA_LOSS</span>
              </div>
              <button
                onClick={onOpenModal}
                className="text-[#00F0FF] hover:underline flex items-center gap-1 font-bold"
              >
                <span>REQUEST SYSTEM ARCHITECTURE AUDIT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
