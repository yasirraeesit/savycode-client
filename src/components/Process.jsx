import React from 'react';

export default function Process() {
  const steps = [
    {
      phase: 'PHASE 01',
      title: 'Discovery & Strategic Blueprint',
      desc: 'We align on your business targets, user journeys, and technical constraints. You receive a concrete technical specification document, architectural diagram, and fixed sprint roadmap.'
    },
    {
      phase: 'PHASE 02',
      title: 'UI/UX Design & System Architecture',
      desc: 'Before writing backend code, we prototype high-fidelity, clickable Figma flows and stress-test database schemas to ensure delightful usability and predictable system scalability.'
    },
    {
      phase: 'PHASE 03',
      title: 'Agile Sprints & Bi-Weekly Demos',
      desc: 'Watch your product come to life in real-time staging environments. Every two weeks, you receive working software increments, detailed changelogs, and direct demo videos.'
    },
    {
      phase: 'PHASE 04',
      title: 'Launch & Scaled Handover',
      desc: 'We orchestrate production deployment, automated cloud monitoring, security hardening, and load tests. Post-launch, we support your user growth and scale your infrastructure.'
    }
  ];

  return (
    <section className="py-24 relative" id="process">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00F2FE] font-bold block mb-3">
            // Proven 4-Step Playbook
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            From Roadmap to Production: Zero Fluff, Total Velocity.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A de-risked engineering framework designed for rapid execution and transparent milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-md bg-[#00F2FE]/10 border border-[#00F2FE]/20 text-[#00F2FE] font-mono text-[11px] font-bold mb-4">
                  {s.phase}
                </span>
                <h3 className="text-lg font-bold text-white mb-3">
                  {s.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
