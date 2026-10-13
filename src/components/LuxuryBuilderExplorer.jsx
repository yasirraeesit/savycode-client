import React, { useState } from 'react';
import { Cpu, Rocket, Globe, Database, CheckCircle2, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function LuxuryBuilderExplorer({ onOpenModal }) {
  const [selectedGoal, setSelectedGoal] = useState('ai');
  const { isDark } = useTheme();

  const goals = {
    ai: {
      id: 'ai',
      badge: 'ARTIFICIAL INTELLIGENCE',
      title: 'AI & Smart Workflow Automation',
      headline: 'Automate manual bottlenecks and give your software proprietary intelligence.',
      humanGoal: '“I want to automate repetitive tasks or train a private AI on my company’s data.”',
      timeframe: '3 to 5 Weeks',
      businessBenefit: 'Save hundreds of manual work hours each month while building a strong technological moat that competitors cannot easily copy.',
      deliverables: [
        'Custom AI assistants trained on your internal company knowledge and files',
        'Private data vault: your confidential business information is never shared or used to train public models',
        'Automated workflows that trigger actions across your existing tools and software',
        'User-friendly control dashboard to monitor usage, accuracy, and operational savings'
      ]
    },
    mvp: {
      id: 'mvp',
      badge: 'RAPID LAUNCH',
      title: 'Startup Rapid MVP (Idea to Reality)',
      headline: 'Launch a tested, investor-ready web product in 30 days flat.',
      humanGoal: '“I have a software idea and need a production app to start onboarding paying users.”',
      timeframe: '30 Days Guaranteed',
      businessBenefit: 'Avoid spending 6+ months and hundreds of thousands of dollars before finding product-market fit. Test real customer demand immediately.',
      deliverables: [
        'Clickable interactive mockups you can test on your phone before code is written',
        'Complete user signup, security, customer database, and Stripe payment processing',
        'Analytics installed from day one so you know exactly how users interact with your app',
        '100% full source code handover so you have total ownership of your product'
      ]
    },
    web: {
      id: 'web',
      badge: 'WEB PLATFORMS',
      title: 'High-Converting Modern Web Apps',
      headline: 'Blazing fast, responsive web applications that delight your users.',
      humanGoal: '“I need a modern web app that loads instantly and converts visitors into loyal clients.”',
      timeframe: '4 to 6 Weeks',
      businessBenefit: 'Slow websites destroy conversions and customer trust. We build sub-second web platforms that work flawlessly across iPhones, Androids, and desktops.',
      deliverables: [
        'Instant page load times worldwide (sub-second performance)',
        'Built with Next.js—the same enterprise technology used by Nike, Notion, and OpenAI',
        'Optimized for Google search (SEO) and high conversion rates',
        'Clean, accessible design that looks stunning on every screen size'
      ]
    },
    saas: {
      id: 'saas',
      badge: 'ENTERPRISE PLATFORMS',
      title: 'Custom Cloud Software & SaaS',
      headline: 'Rock-solid software engineered to scale to millions of users without crashing.',
      humanGoal: '“I need reliable, scalable software that handles complex transactions without hiccups.”',
      timeframe: '6 to 8 Weeks',
      businessBenefit: 'Peace of mind. Your software will handle high user traffic spikes, secure customer payments, and heavy data volume with 99.99% reliability.',
      deliverables: [
        'Multi-user organization accounts with custom team permissions and roles',
        'Bank-grade data encryption and automated continuous cloud backups',
        'Seamless integration with third-party APIs (Stripe, QuickBooks, Salesforce, HubSpot)',
        'Built to pass enterprise security and SOC2 compliance audits'
      ]
    }
  };

  const active = goals[selectedGoal];

  return (
    <section className="py-24 relative ambient-aurora" id="services">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00D2FF] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUTIONS TAILORED TO YOUR GOALS</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            What Are You Looking to Build?
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Choose your current priority below to see how we turn your concept into reliable, scalable software.
          </p>
        </div>

        {/* 4 Interactive Goal Selection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { id: 'ai', icon: <Cpu className="w-5 h-5" />, label: 'Integrate AI & Automate', tag: 'AI Solutions' },
            { id: 'mvp', icon: <Rocket className="w-5 h-5" />, label: 'Launch an MVP in 30 Days', tag: 'Startup Builder' },
            { id: 'web', icon: <Globe className="w-5 h-5" />, label: 'Build a Fast Web App', tag: 'Web Platform' },
            { id: 'saas', icon: <Database className="w-5 h-5" />, label: 'Scale Custom Software', tag: 'Cloud Systems' },
          ].map((item) => {
            const isSelected = selectedGoal === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedGoal(item.id)}
                className={`p-6 rounded-2xl text-left transition-all cursor-pointer border ${
                  isSelected
                    ? isDark
                      ? 'luxury-card-active text-white shadow-2xl'
                      : 'bg-white border-[#00D2FF] text-slate-900 shadow-xl ring-2 ring-[#00D2FF]/20'
                    : isDark
                      ? 'luxury-card text-slate-300 hover:text-white'
                      : 'bg-white/80 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-[#00D2FF]/20 text-[#00D2FF]' : isDark ? 'bg-white/5 text-slate-400' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {item.icon}
                  </div>
                  <span className={`text-[11px] font-semibold uppercase tracking-wider ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {item.tag}
                  </span>
                </div>
                <div className={`font-bold text-base sm:text-lg mb-1 ${
                  isSelected ? 'text-[#00D2FF]' : isDark ? 'text-white' : 'text-slate-900'
                }`}>{item.label}</div>
                <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Click to explore scope &rarr;</div>
              </button>
            );
          })}
        </div>

        {/* Selected Goal Deep-Dive Card */}
        <div className="luxury-card rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/20 text-[#00D2FF] text-xs font-semibold uppercase">
                {active.badge}
              </div>

              <h3 className={`text-2xl sm:text-3xl font-extrabold leading-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {active.title}
              </h3>

              <div className={`p-4 rounded-xl border text-sm italic font-medium ${
                isDark ? 'bg-white/5 border-white/10 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'
              }`}>
                {active.humanGoal}
              </div>

              <p className={`text-sm sm:text-base leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {active.businessBenefit}
              </p>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={onOpenModal}
                  className="luxury-btn-primary px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Book Free Strategy Call for This</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/services"
                  className="text-xs sm:text-sm font-semibold text-[#00D2FF] hover:underline"
                >
                  See Full Service Details &rarr;
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 luxury-inner-card rounded-2xl p-6 sm:p-8">
              <div className={`flex items-center justify-between pb-4 border-b mb-6 ${
                isDark ? 'border-white/10' : 'border-slate-200'
              }`}>
                <span className={`text-xs font-semibold uppercase tracking-wider ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  What We Deliver For You:
                </span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">
                  <Clock className="w-3.5 h-3.5" />
                  {active.timeframe}
                </span>
              </div>

              <div className="space-y-3.5">
                {active.deliverables.map((deliv, idx) => (
                  <div key={idx} className={`flex items-start gap-3 text-xs sm:text-sm ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>

              <div className={`mt-8 pt-4 border-t flex items-center justify-between text-xs ${
                isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-500'
              }`}>
                <span>✓ Weekly Loom video walkthroughs</span>
                <span>✓ 100% Code ownership</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
