import React from 'react';
import { ShieldCheck, HeartHandshake, FileCheck2, UserCheck, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function LuxuryPeaceOfMind({ onOpenModal }) {
  const { isDark } = useTheme();

  const points = [
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#00D2FF]" />,
      title: 'We Speak Plain English',
      desc: 'You should never feel alienated by technical jargon. We talk in terms of user experience, conversion rates, and business ROI.'
    },
    {
      icon: <FileCheck2 className="w-6 h-6 text-purple-400" />,
      title: '100% Code & IP Ownership',
      desc: 'Day one, all code commits push straight into your private GitHub organization. You own every single asset. Zero vendor lock-in.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      title: 'Predictable Fixed Sprints',
      desc: 'No open-ended hourly billing surprises. We scope sprint milestones with fixed budgets and guaranteed delivery windows.'
    },
    {
      icon: <UserCheck className="w-6 h-6 text-amber-500" />,
      title: 'Direct Senior Tech Leads',
      desc: 'No junior subcontractors or layers of account managers. You work directly with senior architects who build with extreme care.'
    }
  ];

  return (
    <section className="py-24 relative ambient-aurora" id="peace-of-mind">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00D2FF] text-xs font-semibold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE SOVYCODE COMMITMENT</span>
            </div>

            <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Total Clarity. Zero Technical Headache.
            </h2>

            <p className={`text-base sm:text-lg leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Traditional dev shops often leave founders frustrated with delayed deadlines, confusing acronyms, and unexpected costs. We built SovYCode to be the partner we wished we had.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenModal}
                className="luxury-btn-primary px-7 py-3.5 rounded-xl text-sm font-bold flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Book a Free Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/estimator"
                className="text-sm font-semibold text-[#00D2FF] hover:underline"
              >
                Estimate Scope &rarr;
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {points.map((p, idx) => (
              <div
                key={idx}
                className="luxury-card rounded-2xl p-7 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${
                    isDark ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-slate-200'
                  }`}>
                    {p.icon}
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>{p.title}</h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
