import React from 'react';
import { MessageSquare, Layout, Video, KeyRound, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function LuxuryJourney({ onOpenModal }) {
  const { isDark } = useTheme();

  const steps = [
    {
      num: '01',
      icon: <MessageSquare className="w-6 h-6 text-[#00D2FF]" />,
      title: 'We Listen in Plain English',
      tag: 'NO TECH SPEAK',
      desc: 'We start with a friendly 30-minute conversation. You tell us your goals, budget, and vision. We map out the simplest, fastest path to make it happen.'
    },
    {
      num: '02',
      icon: <Layout className="w-6 h-6 text-purple-400" />,
      title: 'You Test Clickable Mockups',
      tag: 'VISUAL DESIGN FIRST',
      desc: 'Before any code is written, we design interactive Figma prototypes you can click and test on your phone. You see and approve the exact user experience.'
    },
    {
      num: '03',
      icon: <Video className="w-6 h-6 text-blue-400" />,
      title: 'Weekly Video Walkthroughs',
      tag: 'TOTAL TRANSPARENCY',
      desc: 'No wondering what’s happening behind closed doors. Every Friday, you get a short, clear video demo showing exactly what was built and tested that week.'
    },
    {
      num: '04',
      icon: <KeyRound className="w-6 h-6 text-emerald-400" />,
      title: 'You Launch & Own the Keys',
      tag: '100% INTELLECTUAL PROPERTY',
      desc: 'We manage deployment and cloud security, then hand over all source code and master credentials directly to you. Zero vendor lock-in, ever.'
    }
  ];

  return (
    <section className="py-24 relative" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00D2FF] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HOW WE WORK WITH YOU</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            A Stress-Free Process Designed for Founders
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            You don't need a computer science degree to build great software. We make the entire process clear, collaborative, and predictable.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="luxury-card rounded-2xl p-8 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${
                    isDark ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-slate-200'
                  }`}>
                    {s.icon}
                  </div>
                  <span className={`font-mono text-2xl font-black transition-colors ${
                    isDark ? 'text-white/10 group-hover:text-[#00D2FF]/30' : 'text-slate-200 group-hover:text-[#00D2FF]/50'
                  }`}>
                    {s.num}
                  </span>
                </div>

                <div className="text-[11px] font-bold text-[#00D2FF] uppercase tracking-wider mb-2">
                  {s.tag}
                </div>

                <h3 className={`text-xl font-bold mb-3 leading-snug ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {s.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="text-center">
          <Link
            to="/process"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00D2FF] hover:underline"
          >
            <span>Read our detailed engineering playbook & client FAQ &rarr;</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
