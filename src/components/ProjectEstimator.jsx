import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

export default function ProjectEstimator({ onOpenModal }) {
  const [projectType, setProjectType] = useState('ai');
  const [urgency, setUrgency] = useState('standard');
  const [savedStatus, setSavedStatus] = useState('');

  const blueprints = {
    ai: {
      title: 'AI & Custom LLM Architecture',
      baseWeeks: '3 – 5 Weeks',
      badge: 'HIGH IMPACT WORKFLOW',
      scope: 'Custom RAG pipeline, vector store indexing, model integration, privacy-first zero retention setup.',
      deliverables: [
        'Proprietary RAG architecture & vector embedding pipeline',
        'Model fine-tuning or zero-data-retention API wrapper',
        'Admin telemetry panel for token usage & cost control',
        'End-to-end load testing with 99.9% uptime SLA'
      ]
    },
    web: {
      title: 'Full-Stack Modern Web App',
      baseWeeks: '4 – 6 Weeks',
      badge: 'PRODUCTION NEXT.JS STACK',
      scope: 'Interactive responsive web app, lightning-fast edge rendering, auth, database, and analytics.',
      deliverables: [
        'Production Next.js App Router & Tailwind CSS system',
        'Serverless API architecture & PostgreSQL / Prisma schema',
        'Stripe billing / auth (Clerk / Supabase) integration',
        'Sub-200ms TTFB edge performance optimization'
      ]
    },
    saas: {
      title: 'Custom SaaS & Cloud Platform',
      baseWeeks: '6 – 8 Weeks',
      badge: 'ENTERPRISE-GRADE ARCHITECTURE',
      scope: 'Multi-tenant architecture, event-driven microservices, team permissions, automated CI/CD.',
      deliverables: [
        'Multi-tenant database isolation & role-based RBAC',
        'Asynchronous job queues (Redis / BullMQ / Celery)',
        'Comprehensive REST & Webhook APIs for 3rd parties',
        'AWS / Docker containerization & auto-scaling rules'
      ]
    },
    mvp: {
      title: 'Startup Rapid MVP Builder',
      baseWeeks: '4 Weeks Flat',
      badge: 'RAPID GO-TO-MARKET',
      scope: 'Laser-focused core feature set designed for immediate customer acquisition & investor demos.',
      deliverables: [
        'Clickable high-fidelity Figma UI/UX prototype',
        'Fully functional production MVP with auth & checkout',
        'Posthog / Mixpanel analytics integration',
        'Complete repository handover with zero vendor lock-in'
      ]
    }
  };

  const current = blueprints[projectType];
  let calculatedTimeline = current.baseWeeks;
  let activeBadge = current.badge;

  if (urgency === 'urgent') {
    calculatedTimeline = current.baseWeeks.replace(/(\d+)/g, (match) => Math.max(2, parseInt(match) - 1));
    activeBadge = 'ACCELERATED BLITZ • ' + current.badge;
  }

  const handleLockEstimate = async () => {
    try {
      await fetch('/api/estimates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectType: current.title,
          urgency,
          estimatedWeeks: calculatedTimeline
        })
      });
      setSavedStatus('✓ Roadmap Saved to Session');
      setTimeout(() => setSavedStatus(''), 3000);
      onOpenModal();
    } catch (err) {
      onOpenModal();
    }
  };

  return (
    <section className="py-20 relative" id="estimator">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="rounded-3xl border border-[#00F2FE]/30 bg-gradient-to-b from-[#0E1420]/90 to-[#070A0F]/95 p-8 sm:p-12 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-7">
              <span className="font-mono text-xs uppercase tracking-widest text-[#00F2FE] font-bold block mb-2">
                // Instant Architectural Scoping
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                Calculate Your Project Timeline & Scope
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mb-8">
                Select your parameters below to generate an immediate development roadmap and architectural recommendations tailored to your goals.
              </p>

              {/* Selector 1 */}
              <div className="mb-6">
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  1. Project Focus Area:
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    { id: 'ai', label: 'AI & Custom LLM' },
                    { id: 'web', label: 'Next.js Web App' },
                    { id: 'saas', label: 'Custom SaaS Platform' },
                    { id: 'mvp', label: 'Rapid 30-Day MVP' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setProjectType(tab.id)}
                      className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        projectType === tab.id
                          ? 'bg-[#00F2FE]/15 border border-[#00F2FE] text-white shadow-[0_0_15px_rgba(0,242,254,0.25)]'
                          : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector 2 */}
              <div className="mb-8">
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  2. Desired Velocity / Urgency:
                </label>
                <div className="flex flex-wrap gap-2.5">
                  <button
                    onClick={() => setUrgency('standard')}
                    className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      urgency === 'standard'
                        ? 'bg-[#00F2FE]/15 border border-[#00F2FE] text-white shadow-[0_0_15px_rgba(0,242,254,0.25)]'
                        : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    Standard Sprint Pace
                  </button>
                  <button
                    onClick={() => setUrgency('urgent')}
                    className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      urgency === 'urgent'
                        ? 'bg-[#00F2FE]/15 border border-[#00F2FE] text-white shadow-[0_0_15px_rgba(0,242,254,0.25)]'
                        : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    ⚡ Accelerated Blitz (Priority Sprint)
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={handleLockEstimate}
                  className="glow-btn px-6 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-[#00F2FE] to-[#6366F1] text-[#070A0F] flex items-center gap-2 cursor-pointer"
                >
                  <span>Lock In This Roadmap & Discovery Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                {savedStatus && (
                  <span className="text-xs font-mono text-emerald-400 animate-fade-in">{savedStatus}</span>
                )}
              </div>
            </div>

            {/* Right Output Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-[#070A0F]/90 p-6 sm:p-8 text-center relative overflow-hidden shadow-2xl">
                <div className="font-mono text-[11px] text-[#00F2FE] tracking-wider uppercase font-bold mb-2">
                  {activeBadge}
                </div>
                <div className="text-4xl font-extrabold text-white mb-2 font-mono tracking-tight">
                  {calculatedTimeline}
                </div>
                <div className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {current.scope}
                </div>

                <div className="text-left space-y-2.5 mb-6">
                  {current.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-emerald-400">
                  ● Senior Tech Lead Assigned • No Junior Offshoring
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
