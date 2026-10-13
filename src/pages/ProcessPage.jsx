import React from 'react';
import Faq from '../components/Faq';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, GitBranch, Video, Terminal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ProcessPage({ onOpenModal }) {
  const { isDark } = useTheme();

  const phases = [
    {
      num: '01',
      phase: 'PHASE 01 // DISCOVERY & STRATEGIC BLUEPRINT',
      title: 'Discovery & Architectural De-risking',
      duration: 'Week 1',
      desc: 'We dissect your product goals, map target user journeys, and eliminate technical unknowns before writing a single line of backend logic.',
      deliverables: [
        'Comprehensive Technical Specification Document (PRD)',
        'Cloud system architecture diagrams (VPC, databases, auth)',
        'Data model schemas & third-party API dependency audit',
        'Fixed milestone schedule with clear sprint deliverables'
      ]
    },
    {
      num: '02',
      phase: 'PHASE 02 // UI/UX PROTOTYPING & SYSTEM DESIGN',
      title: 'Clickable Figma Flows & Schema Stress Testing',
      duration: 'Week 2',
      desc: 'We design high-fidelity, interactive prototypes and validate database relations so you see and feel the exact product before engineering commences.',
      deliverables: [
        'Interactive Figma prototype with polished dark/light design systems',
        'Component token system (Tailwind CSS tokens, typography, layout)',
        'Database indexing & query optimization benchmarks',
        'Stakeholder feedback review and final scope sign-off'
      ]
    },
    {
      num: '03',
      phase: 'PHASE 03 // AGILE SPRINTS & BI-WEEKLY LIVE DEMOS',
      title: 'Bi-Weekly Sprints & Continuous Staging Deployments',
      duration: 'Weeks 3 – 5',
      desc: 'Experience rapid, visible momentum. We push functional code to private staging URLs continuously, accompanied by detailed Loom walkthroughs.',
      deliverables: [
        'Bi-weekly functional releases deployed to live staging environments',
        'Direct asynchronous Loom video walkthroughs and changelogs',
        'Strict TypeScript type-safety, automated linting, and unit testing',
        'Transparent real-time task board access (Linear / GitHub Projects)'
      ]
    },
    {
      num: '04',
      phase: 'PHASE 04 // LAUNCH, LOAD TESTING & PRODUCTION SCALE',
      title: 'Hardened Deployment & Scaled Evolution',
      duration: 'Week 6 & Beyond',
      desc: 'We conduct rigorous penetration tests, synthetic load tests, and cloud security audits prior to cutover. Once live, we guarantee system uptime.',
      deliverables: [
        'Production DNS cutover, SSL certification, and edge CDN routing',
        'Automated Sentry error logging, Datadog telemetry, and uptime alerts',
        'Complete repository handover with clean README documentation',
        'Post-launch warranty support, user scaling, and continuous feature evolution'
      ]
    }
  ];

  const standards = [
    {
      icon: <Terminal className="w-5 h-5 text-[#00D2FF]" />,
      title: 'Clean Architecture Pattern',
      desc: 'No spaghetti code. Strict separation of concerns, repository patterns, and modular interfaces so any engineer can step in effortlessly.'
    },
    {
      icon: <GitBranch className="w-5 h-5 text-purple-400" />,
      title: '100% Private Repository Ownership',
      desc: 'All branches, pull requests, and Dockerfiles are committed straight to your company GitHub/GitLab with full IP ownership.'
    },
    {
      icon: <Video className="w-5 h-5 text-emerald-400" />,
      title: 'Asynchronous Transparency',
      desc: 'No pointless status meetings. Weekly recorded Loom video demos, transparent staging links, and direct Slack access.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
      title: 'Enterprise Security Hardening',
      desc: 'Zero-trust infrastructure, encrypted secrets management, and automated vulnerability scanning on every PR.'
    }
  ];

  return (
    <div className="pt-32 pb-24 relative ambient-glow-top">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/25 text-[#00D2FF] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>HOW WE OPERATE • THE SOVYCODE PLAYBOOK</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            From Blueprint to Production: <span className="luxury-gradient-text">Zero Fluff, Total Velocity</span>.
          </h1>
          <p className="text-base sm:text-lg leading-relaxed opacity-80 max-w-2xl mx-auto">
            Our 4-phase agile engineering framework eliminates guesswork and de-risks technical investments at every milestone.
          </p>
        </div>

        {/* 4 Phases Timeline */}
        <div className="space-y-12 mb-24">
          {phases.map((p, idx) => (
            <div
              key={idx}
              className="luxury-card rounded-3xl p-8 sm:p-12 relative overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5">
                  <div className="font-mono text-xs text-[#00D2FF] tracking-widest uppercase mb-2">
                    {p.phase}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 leading-snug">
                    {p.title}
                  </h2>
                  <div className="inline-block px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono opacity-80 mb-4">
                    Target Cadence: {p.duration}
                  </div>
                  <p className="text-sm leading-relaxed opacity-80">
                    {p.desc}
                  </p>
                </div>

                <div className="lg:col-span-7 luxury-inner-card rounded-2xl p-6 sm:p-8">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#00D2FF] mb-4">
                    // Phase Deliverables & Milestones:
                  </h3>
                  <div className="space-y-3">
                    {p.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm opacity-90">
                        <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Standards */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00D2FF] font-bold block mb-2">
              // RIGOROUS ENGINEERING STANDARDS
            </span>
            <h2 className="text-3xl font-extrabold mb-3">
              The Rules We Build By
            </h2>
            <p className="text-sm opacity-80">
              We uphold technical standards that guarantee longevity, maintainability, and enterprise-grade performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((std, i) => (
              <div key={i} className="luxury-card rounded-2xl p-7 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                    {std.icon}
                  </div>
                  <h3 className="text-base font-bold mb-2">{std.title}</h3>
                  <p className="text-xs leading-relaxed opacity-80">{std.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comprehensive FAQ Section */}
        <Faq />

        {/* CTA */}
        <div className="text-center mt-20">
          <button
            onClick={onOpenModal}
            className="luxury-btn-primary px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2 cursor-pointer shadow-xl"
          >
            <span>Initiate Discovery Phase</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
}
