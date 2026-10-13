import React from 'react';

export default function WhyChooseUs() {
  const values = [
    {
      num: '01',
      title: 'Sprint Velocity, Zero Tech Debt',
      desc: 'Speed is meaningless if you have to rewrite your codebase 6 months later. We ship at startup speed while enforcing clean architecture, strict typing, and comprehensive automated test suites.'
    },
    {
      num: '02',
      title: 'No Technical Translation Needed',
      desc: 'You should not need a computer science degree to know your project status. We provide weekly video Loom walkthroughs, live demo staging links, and executive summaries focused on business ROI.'
    },
    {
      num: '03',
      title: 'Future-Proof AI Architecture',
      desc: 'AI foundation models change monthly. We construct modular, model-agnostic layers that allow you to swap models (OpenAI, Claude, Llama 3) in minutes without rewriting your core backend.'
    },
    {
      num: '04',
      title: '100% Intellectual Property Ownership',
      desc: 'From day one, you own everything. Every line of code, design file, Docker container, and cloud configuration is committed directly to your private repositories with zero vendor lock-in.'
    }
  ];

  return (
    <section className="py-24 relative" id="why-us">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00F2FE] font-bold block mb-3">
            // The SovYCode Advantage
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            The Strategic Tech Partner You’ve Been Looking For.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We eliminate agency bloat, bureaucratic communication hurdles, and overpriced retainers with radical velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="font-mono text-3xl font-black text-white/10 group-hover:text-[#00F2FE]/40 transition-colors mb-4">
                  {v.num}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                  {v.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
