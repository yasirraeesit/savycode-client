import React from 'react';
import { Cpu, Rocket, Globe, Database, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function Services({ onOpenModal }) {
  return (
    <section className="py-24 relative" id="services">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00F2FE] font-bold block mb-3">
            // Core Engineering Pillars
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Engineered for Velocity. Architected for Scale.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We don't build throwaway prototypes. Every line of code is engineered with precision, modularity, and future-ready AI interoperability.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Pillar 1: AI & Machine Learning (Span 7) */}
          <div className="lg:col-span-7 glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#00F2FE]/15 border border-[#00F2FE]/30 flex items-center justify-center text-[#00F2FE] mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="font-mono text-xs text-[#00F2FE] tracking-wider uppercase mb-2">
                INTELLIGENT SYSTEMS
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                AI & Machine Learning Solutions
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Automate high-friction operations and build defensible product moats. We architect enterprise-grade Retrieval-Augmented Generation (RAG) pipelines, autonomous task agents, and fine-tuned private models running securely within your cloud infrastructure.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00F2FE] shrink-0 mt-0.5" />
                  <span>Proprietary RAG & Vector Embeddings</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00F2FE] shrink-0 mt-0.5" />
                  <span>Zero-Retention Enterprise Privacy</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00F2FE] shrink-0 mt-0.5" />
                  <span>Autonomous Multi-Agent Systems</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00F2FE] shrink-0 mt-0.5" />
                  <span>Cost Optimization vs OpenAI APIs</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-6 border-t border-white/10">
              <span className="font-mono text-xs text-emerald-400 font-semibold">
                ⚡ Up to 80% Cost Reduction vs Off-Shelf APIs
              </span>
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#00F2FE] transition-colors"
              >
                <span>Consult AI Lead</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Pillar 2: Startup MVP Builder (Span 5) */}
          <div className="lg:col-span-5 glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6">
                <Rocket className="w-6 h-6" />
              </div>
              <div className="font-mono text-xs text-purple-400 tracking-wider uppercase mb-2">
                RAPID GO-TO-MARKET
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Startup Rapid MVP Builder
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Stop waiting 9 months in development limbo. We take pre-seed and seed-stage founders from raw concept to an investor-ready, monetizable production product in 30 days flat.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Clickable High-Fidelity Figma Prototypes</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Full Auth, Stripe Billing & Core DB Stack</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>100% Clean Code Repository Handover</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <span className="font-mono text-xs text-purple-400 font-semibold">
                ⏱ 30-Day Guaranteed Launch
              </span>
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-purple-400 transition-colors"
              >
                <span>Ship MVP</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Pillar 3: Modern Web Development (Span 6) */}
          <div className="lg:col-span-6 glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <div className="font-mono text-xs text-blue-400 tracking-wider uppercase mb-2">
                WEB ARCHITECTURE
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Modern Web Application Development
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Slow web apps destroy conversions and search visibility. We engineer reactive, ultra-responsive web applications using Next.js and serverless edge runtimes that deliver instant page loads across the globe.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Next.js App Router & Edge SSR</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Real-Time WebSockets & Collaborative UI</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>100/100 Core Web Vitals & Search Optimization</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <span className="font-mono text-xs text-blue-400 font-semibold">
                📈 Sub-200ms Global TTFB
              </span>
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-blue-400 transition-colors"
              >
                <span>Discuss Web App</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Pillar 4: Custom Software & Cloud Systems (Span 6) */}
          <div className="lg:col-span-6 glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <Database className="w-6 h-6" />
              </div>
              <div className="font-mono text-xs text-emerald-400 tracking-wider uppercase mb-2">
                CORE INFRASTRUCTURE
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Custom Software & Cloud Systems
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Scale from initial traction to millions of transactions without system bottlenecks. We design event-driven microservices, fault-tolerant database clusters, and zero-trust cloud infrastructure.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Event-Driven Microservices & Async Queues</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Third-Party & FinTech API Integrations</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Infrastructure as Code (Terraform) & Zero-Downtime CI/CD</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <span className="font-mono text-xs text-emerald-400 font-semibold">
                🔒 99.99% Reliability Benchmark
              </span>
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-emerald-400 transition-colors"
              >
                <span>Scale Architecture</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
