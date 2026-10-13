import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Rocket, Globe, Database, ArrowRight, Activity, Zap, CheckCircle2, Shield } from 'lucide-react';

export default function CyberMissionPillars({ onOpenModal }) {
  const pillars = [
    {
      id: 'ai',
      code: 'MODULE_01 // AI_NEURAL_SYSTEMS',
      title: 'AI & Machine Learning Engineering',
      desc: 'Build defensible intelligence into your product. We architect enterprise RAG pipelines, fine-tune open weights, and deploy autonomous task agents with strict zero-data-retention security.',
      metrics: '80% COST REDUCTION vs OFF-SHELF APIS',
      icon: <Cpu className="w-6 h-6 text-[#00F0FF]" />,
      highlights: ['Private Vector DB Search', 'Autonomous Task Agents', 'Zero-Data-Retention Security'],
      span: 'lg:col-span-7'
    },
    {
      id: 'mvp',
      code: 'MODULE_02 // RAPID_MVP_BUILDER',
      title: 'Startup Rapid MVP Builder',
      desc: 'From raw concept to an investor-ready, monetizable production platform in 30 days flat. Clean architecture, payment flows, and zero technical debt.',
      metrics: '30-DAY LAUNCH RECORD',
      icon: <Rocket className="w-6 h-6 text-purple-400" />,
      highlights: ['Interactive Figma Flows', 'Auth & Stripe Payments', '100% Repository Handover'],
      span: 'lg:col-span-5'
    },
    {
      id: 'web',
      code: 'MODULE_03 // NEXT_GEN_WEB',
      title: 'Modern Web Application Development',
      desc: 'Sluggish sites kill conversions. We engineer ultra-responsive web applications using Next.js 15, React 19, and serverless edge runtimes for sub-second global responses.',
      metrics: 'SUB-200MS GLOBAL TTFB',
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      highlights: ['Edge SSR Hydration', 'Real-Time WebSockets', '100/100 Core Web Vitals'],
      span: 'lg:col-span-5'
    },
    {
      id: 'cloud',
      code: 'MODULE_04 // CLOUD_MICROSERVICES',
      title: 'Custom Software & Cloud Systems',
      desc: 'Scale from initial traction to millions of transactions without bottlenecks. We design event-driven microservices, asynchronous Redis queues, and resilient cloud infrastructure.',
      metrics: '99.99% RELIABILITY SLA',
      icon: <Database className="w-6 h-6 text-emerald-400" />,
      highlights: ['Event-Driven Microservices', 'Async Background Queues', 'Terraform CI/CD Pipelines'],
      span: 'lg:col-span-7'
    }
  ];

  return (
    <section className="py-24 relative bg-[#04060A]" id="capabilities">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#00F0FF] uppercase tracking-widest mb-2">
              <Activity className="w-3.5 h-3.5" />
              <span>// CORE MISSION CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              Engineered for Velocity. Architected for Scale.
            </h2>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#00F0FF] hover:underline uppercase"
          >
            <span>[VIEW FULL SERVICE BLUEPRINT]</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bento Cyber Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {pillars.map((p) => (
            <div
              key={p.id}
              className={`${p.span} hud-panel rounded-2xl p-8 bg-[#070B12]/90 border border-white/10 hover:border-[#00F0FF]/50 transition-all group flex flex-col justify-between`}
            >
              <div className="hud-corner-tr"></div>
              <div className="hud-corner-bl"></div>

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {p.icon}
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 tracking-wider">
                    {p.code}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00F0FF] transition-colors">
                  {p.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {p.desc}
                </p>

                <div className="space-y-2 mb-6">
                  {p.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00F0FF]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-[11px] text-emerald-400 font-bold">
                  ● {p.metrics}
                </span>
                <Link
                  to="/services"
                  className="text-xs font-mono text-white hover:text-[#00F0FF] flex items-center gap-1 uppercase"
                >
                  <span>Specs</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
