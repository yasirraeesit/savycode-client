import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { apiUrl } from '../utils/api';

export default function EstimatorPage({ onOpenModal }) {
  const [projectType, setProjectType] = useState('ai');
  const [urgency, setUrgency] = useState('standard');
  const [selectedModules, setSelectedModules] = useState(['auth', 'db']);
  const [savedStatus, setSavedStatus] = useState('');
  const { isDark } = useTheme();

  const blueprints = {
    ai: {
      title: 'AI & Custom LLM Architecture',
      baseWeeks: 4,
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
      baseWeeks: 5,
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
      baseWeeks: 7,
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
      baseWeeks: 4,
      badge: 'RAPID GO-TO-MARKET',
      scope: 'Laser-focused core feature set designed for immediate customer acquisition & investor demos.',
      deliverables: [
        'Clickable high-fidelity Figma UI/UX prototype',
        'Fully functional production MVP with auth & checkout',
        'PostHog / Mixpanel analytics integration',
        'Complete repository handover with zero vendor lock-in'
      ]
    }
  };

  const modulesList = [
    { id: 'auth', label: 'User Authentication & RBAC', weekMod: 0 },
    { id: 'db', label: 'Database Schema & Migrations', weekMod: 0 },
    { id: 'payments', label: 'Stripe Billing & Subscriptions', weekMod: 0.5 },
    { id: 'vector', label: 'Vector Database & Embeddings', weekMod: 1 },
    { id: 'websockets', label: 'Real-Time WebSockets Collaboration', weekMod: 0.5 },
    { id: 'admin', label: 'Internal Admin & Telemetry Portal', weekMod: 0.5 }
  ];

  const toggleModule = (id) => {
    if (selectedModules.includes(id)) {
      setSelectedModules(selectedModules.filter(m => m !== id));
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  const current = blueprints[projectType];
  const additionalWeeks = selectedModules.reduce((acc, modId) => {
    const mod = modulesList.find(m => m.id === modId);
    return acc + (mod ? mod.weekMod : 0);
  }, 0);

  let totalWeeks = current.baseWeeks + Math.round(additionalWeeks);
  if (urgency === 'urgent') {
    totalWeeks = Math.max(3, totalWeeks - 1);
  }

  const handleLockEstimate = async () => {
    try {
      await fetch(apiUrl('/api/estimates'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectType: current.title,
          urgency,
          estimatedWeeks: `${totalWeeks} Weeks`,
          modules: selectedModules
        })
      });
      setSavedStatus('✓ Blueprint Saved to Session');
      setTimeout(() => setSavedStatus(''), 3000);
      onOpenModal();
    } catch (err) {
      onOpenModal();
    }
  };

  return (
    <div className="pt-32 pb-24 relative ambient-glow-top">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/25 text-[#00D2FF] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>INTERACTIVE ARCHITECTURAL TOOL</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Calculate Your Product <span className="luxury-gradient-text">Scope & Timeline</span>
          </h1>
          <p className="text-sm sm:text-base leading-relaxed opacity-80 max-w-2xl mx-auto">
            Configure your technical requirements below to instantly generate a sprint roadmap, estimated time-to-market, and deliverable breakdown.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="luxury-card rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* 1. Category */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider mb-3 opacity-70">
                  1. Core Architecture Type:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'ai', label: 'AI & Custom LLM' },
                    { id: 'web', label: 'Next.js Web App' },
                    { id: 'saas', label: 'Custom SaaS Platform' },
                    { id: 'mvp', label: 'Rapid 30-Day MVP' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setProjectType(tab.id)}
                      className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        projectType === tab.id
                          ? 'bg-[#00D2FF]/15 border-2 border-[#00D2FF] text-[#00D2FF] shadow-[0_0_20px_rgba(0,210,255,0.2)]'
                          : isDark
                            ? 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                            : 'bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200/80'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Modules Checklist */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider mb-3 opacity-70">
                  2. Select Desired Features & Modules:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {modulesList.map((m) => {
                    const isChecked = selectedModules.includes(m.id);
                    return (
                      <button
                        key={m.id}
                        onClick={() => toggleModule(m.id)}
                        className={`p-3 rounded-xl text-left text-xs font-medium flex items-center justify-between transition-all cursor-pointer border ${
                          isChecked
                            ? 'bg-[#00D2FF]/10 border-[#00D2FF]/60 text-[#00D2FF] font-semibold'
                            : isDark
                              ? 'bg-white/5 border-white/5 text-slate-300 hover:text-white hover:bg-white/10'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        <span>{m.label}</span>
                        <div className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${
                          isChecked ? 'bg-[#00D2FF] text-[#07090E]' : isDark ? 'border border-slate-600' : 'border border-slate-300'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Urgency */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider mb-3 opacity-70">
                  3. Delivery Urgency:
                </label>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setUrgency('standard')}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                      urgency === 'standard'
                        ? 'bg-[#00D2FF]/15 border-[#00D2FF] text-[#00D2FF]'
                        : isDark
                          ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
                          : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    Standard Sprint Pace
                  </button>
                  <button
                    onClick={() => setUrgency('urgent')}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                      urgency === 'urgent'
                        ? 'bg-[#00D2FF]/15 border-[#00D2FF] text-[#00D2FF]'
                        : isDark
                          ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
                          : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    ⚡ Accelerated Blitz (Priority Team)
                  </button>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  onClick={handleLockEstimate}
                  className="luxury-btn-primary px-6 py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Lock In This Blueprint & Book Strategy Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                {savedStatus && (
                  <span className="text-xs font-mono text-emerald-500 font-bold">{savedStatus}</span>
                )}
              </div>

            </div>

            {/* Right Output */}
            <div className="lg:col-span-5 luxury-inner-card rounded-2xl p-8 shadow-xl">
              <div className="font-mono text-xs text-[#00D2FF] tracking-widest uppercase font-bold mb-2">
                ESTIMATED TIMELINE
              </div>
              <div className="text-4xl font-extrabold mb-2 font-mono">
                {totalWeeks} Weeks Flat
              </div>
              <div className="text-xs opacity-75 mb-6 leading-relaxed">
                {current.scope}
              </div>

              <div className="border-t border-white/10 pt-4 mb-6">
                <div className="text-[11px] font-mono uppercase tracking-wider mb-3 opacity-70">
                  Included Architectural Scope:
                </div>
                <div className="space-y-2.5">
                  {current.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs opacity-90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`p-4 rounded-xl border text-xs space-y-2 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="flex items-center gap-2 text-emerald-500 font-semibold">
                  <Shield className="w-4 h-4" />
                  <span>The SovYCode Guarantee</span>
                </div>
                <p className="text-[11px] opacity-75 leading-relaxed">
                  Fixed pricing milestone guarantee. If scope slips due to agency delays, additional sprint days are delivered at zero cost.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
