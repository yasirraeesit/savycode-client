import React, { useState } from 'react';
import { Briefcase, MapPin, DollarSign, Clock, ArrowRight, Sparkles, CheckCircle2, Laptop, Globe, Zap, HeartHandshake } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Careers({ onApplyRole }) {
  const [selectedDept, setSelectedDept] = useState('all');
  const { isDark } = useTheme();

  const perks = [
    {
      icon: <Globe className="w-5 h-5 text-[#00D2FF]" />,
      title: '100% Remote, Async-First',
      desc: 'Work from wherever you are happiest and most productive. We operate with high autonomy and minimal meeting fatigue.'
    },
    {
      icon: <Zap className="w-5 h-5 text-[#00D2FF]" />,
      title: 'Frontier AI Tooling Provided',
      desc: 'Full access to top-tier developer tools: Claude 3.7 Sonnet, OpenAI API quotas, Cursor, and high-memory cloud GPUs.'
    },
    {
      icon: <DollarSign className="w-5 h-5 text-emerald-400" />,
      title: 'Top 10% Compensation',
      desc: 'Competitive global salaries, milestone performance bonuses, and transparent agency profit-sharing.'
    },
    {
      icon: <Laptop className="w-5 h-5 text-purple-400" />,
      title: '$3,500 Tech Hardware Stipend',
      desc: 'Annual allowance for modern MacBooks, 4K monitors, ergonomic setups, or home-office improvements.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
      title: 'Zero Red Tape or Corporate Fluff',
      desc: 'No endless sprint poker or bureaucratic middle management. Just world-class builders shipping impactful products.'
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-rose-400" />,
      title: 'Flexible Autonomous Time Off',
      desc: 'Take the time you need to recharge. We trust our engineers to manage their milestones responsibly.'
    }
  ];

  const jobs = [
    {
      id: 'ai-eng',
      dept: 'ai',
      deptLabel: 'AI & Machine Learning',
      title: 'Senior Full-Stack AI Engineer',
      type: 'Full-time • Remote',
      salary: '$110k – $150k USD',
      tags: ['Python', 'FastAPI', 'Next.js', 'LangChain', 'pgvector', 'Docker'],
      desc: 'Lead the architecture of proprietary RAG systems, autonomous task agents, and secure model deployments for our enterprise clients.',
      requirements: [
        '3+ years shipping production Python backends and modern Next.js/React apps',
        'Demonstrated hands-on experience with vector databases (Pinecone, pgvector) and RAG pipelines',
        'Strong sense of product taste and independent architectural decision-making'
      ]
    },
    {
      id: 'fe-lead',
      dept: 'engineering',
      deptLabel: 'Web Engineering',
      title: 'Lead Next.js Frontend Architect',
      type: 'Full-time • Remote',
      salary: '$95k – $135k USD',
      tags: ['Next.js 15', 'React 19', 'Tailwind CSS', 'TypeScript', 'WebSockets'],
      desc: 'Craft ultra-responsive, consumer-grade user interfaces with sub-200ms edge rendering, micro-animations, and real-time collaboration features.',
      requirements: [
        'Expert-level mastery of modern React, Next.js App Router, and TypeScript',
        'Deep intuition for UI performance, Core Web Vitals, and responsive glassmorphic design systems',
        'Obsession with micro-interactions, layout precision, and clean code'
      ]
    },
    {
      id: 'automation-spec',
      dept: 'ai',
      deptLabel: 'AI & Machine Learning',
      title: 'AI Workflow & Automation Specialist',
      type: 'Full-time • Remote',
      salary: '$80k – $120k USD',
      tags: ['Workflow Agents', 'Python', 'Webhooks', 'REST APIs', 'Supabase'],
      desc: 'Design and deploy end-to-end intelligent automation workflows that eliminate hundreds of hours of manual client processes.',
      requirements: [
        'Proven track record building automated webhook flows and multi-system integrations',
        'Comfortable interfacing with modern AI APIs and structured output parsing',
        'Ability to communicate technical systems clearly to client stakeholders'
      ]
    },
    {
      id: 'uiux-designer',
      dept: 'design',
      deptLabel: 'Product & Design',
      title: 'Product Designer (UI/UX Systems)',
      type: 'Full-time • Remote',
      salary: '$75k – $115k USD',
      tags: ['Figma', 'Design Systems', 'Dark Mode UI', 'Prototyping', 'User Research'],
      desc: 'Shape the visual language, design tokens, and user flows of next-generation AI platforms, SaaS products, and mobile experiences.',
      requirements: [
        'Exceptional portfolio showing modern, high-contrast, dark-mode software interfaces',
        'Proficiency building and maintaining scalable Figma token component libraries',
        'Strong understanding of frontend developer handoff and CSS grid/flexbox constraints'
      ]
    }
  ];

  const filteredJobs = selectedDept === 'all' 
    ? jobs 
    : jobs.filter(j => j.dept === selectedDept);

  return (
    <section className="pt-32 pb-24 relative ambient-glow-top" id="careers">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/25 text-[#00D2FF] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>We Are Expanding Our Core Team • 4 Open Roles</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Build the Future of <span className="luxury-gradient-text">AI & Software Architecture</span>.
          </h1>

          <p className="text-base sm:text-lg leading-relaxed opacity-80 max-w-2xl mx-auto">
            We are a high-velocity product studio partnering with ambitious tech startups and modern enterprises. If you value craft, autonomy, and shipping over bureaucracy, you belong here.
          </p>
        </div>

        {/* Culture & Perks Grid */}
        <div className="mb-20">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00D2FF] font-bold text-center mb-8">
            // Why Engineers & Designers Love SovYCode
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p, idx) => (
              <div
                key={idx}
                className="luxury-card rounded-2xl p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                    {p.icon}
                  </div>
                  <h3 className="text-base font-bold mb-2">{p.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed opacity-80">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions Section */}
        <div className="pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold">Current Open Positions</h2>
              <p className="text-xs sm:text-sm opacity-70 mt-1">All roles are 100% remote and open to global talent.</p>
            </div>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Roles (4)' },
                { id: 'ai', label: 'AI & ML (2)' },
                { id: 'engineering', label: 'Engineering (1)' },
                { id: 'design', label: 'Design (1)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedDept(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                    selectedDept === tab.id
                      ? 'bg-[#00D2FF]/15 border-[#00D2FF] text-[#00D2FF] shadow-[0_0_15px_rgba(0,210,255,0.25)]'
                      : isDark
                        ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                        : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Job List Cards */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="luxury-card rounded-2xl p-8 relative overflow-hidden group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2.5">
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#00D2FF]/10 border border-[#00D2FF]/25 text-[#00D2FF] font-semibold">
                        {job.deptLabel}
                      </span>
                      <span className="flex items-center gap-1 text-xs opacity-70">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-mono text-emerald-500 font-semibold">
                        <DollarSign className="w-3.5 h-3.5" />
                        {job.salary}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#00D2FF] transition-colors">
                      {job.title}
                    </h3>

                    <p className="text-sm leading-relaxed max-w-3xl mb-4 opacity-80">
                      {job.desc}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((t, i) => (
                        <span key={i} className={`px-2 py-0.5 rounded text-[11px] font-mono border ${
                          isDark ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                        }`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Apply Action */}
                  <div className="shrink-0">
                    <button
                      onClick={() => onApplyRole(job.title)}
                      className="luxury-btn-primary px-6 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center shadow-lg"
                    >
                      <span>Apply for Role</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Key Requirements Checklist */}
                <div className="pt-6 border-t border-white/10">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#00D2FF] mb-3">
                    Key Highlights:
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {job.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs opacity-90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF] shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
