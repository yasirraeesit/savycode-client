import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Rocket,
  Globe,
  Database,
  Smartphone,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
  Sparkles,
  Zap,
  ChevronDown,
  ChevronUp,
  Shield,
  Activity,
  Check,
  ExternalLink
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ServicesPage({ onOpenModal }) {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState(null);

  const categories = [
    { id: 'all', label: 'All Services (6)' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'mvp', label: 'Startup MVP' },
    { id: 'web', label: 'Web Platforms' },
    { id: 'cloud', label: 'Cloud & SaaS' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'modernization', label: 'Codebase Rescue' }
  ];

  const services = [
    {
      id: 'ai-agents',
      category: 'ai',
      eyebrow: 'ARTIFICIAL INTELLIGENCE',
      title: 'Private AI Assistants & Smart Automation',
      summary: 'Automate manual bottlenecks and give your software custom intelligence. We build secure, private AI pipelines tuned specifically to your proprietary documents—with 100% data privacy.',
      timeframe: '2 to 4 Weeks',
      icon: <Cpu className="w-8 h-8 text-[#00D2FF]" />,
      accentColor: 'from-[#00D2FF]/15 to-transparent',
      badgeBg: 'bg-[#00D2FF]/10 text-[#00D2FF] border-[#00D2FF]/30',
      outcomePills: [
        '⚡ 70%+ Manual Time Saved',
        '🔒 100% Private Data Vault',
        '⏱ 2–4 Weeks Delivery'
      ],
      deliverables: [
        'Custom AI assistants trained exclusively on your internal company files and standard procedures',
        'Zero-data-retention security: your confidential business data is never shared or used to train public models',
        'Automated workflows that eliminate repetitive manual data entry across your existing tools',
        'User-friendly control dashboard to monitor accuracy, response speed, and hours saved'
      ]
    },
    {
      id: 'startup-mvp',
      category: 'mvp',
      eyebrow: 'STARTUP LAUNCHPAD',
      title: '30-Day Rapid Startup MVP Engine',
      summary: 'Turn your product idea into a tested, investor-ready web platform in 30 days flat. You get full customer accounts, Stripe payments, and a polished design ready to onboard paying clients.',
      timeframe: '30 Days Guaranteed',
      icon: <Rocket className="w-8 h-8 text-purple-400" />,
      accentColor: 'from-purple-500/15 to-transparent',
      badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      outcomePills: [
        '⏱ 30-Day Guaranteed Launch',
        '💳 Stripe Billing Configured',
        '✨ 100% Code Ownership'
      ],
      deliverables: [
        'Clickable, interactive prototype you can test on your phone before coding begins',
        'Complete user signup, security, database architecture, and automated welcome emails',
        'Stripe billing integration with recurring subscriptions and automated invoicing',
        '100% intellectual property ownership with full GitHub repository handover'
      ]
    },
    {
      id: 'modern-web',
      category: 'web',
      eyebrow: 'MODERN WEB ARCHITECTURE',
      title: 'Sub-Second Web Applications & Next.js',
      summary: 'Fast websites build trust and convert visitors into loyal customers. We build reactive, ultra-responsive web applications using Next.js that load instantly worldwide on any device.',
      timeframe: '3 to 5 Weeks',
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      accentColor: 'from-blue-500/15 to-transparent',
      badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      outcomePills: [
        '🚀 100/100 Google Speed',
        '📱 Mobile-First Responsive',
        '📈 SEO Conversion Optimized'
      ],
      deliverables: [
        'Instant page load times worldwide using Next.js edge-rendered architecture',
        'Flawless responsive design that looks stunning on iPhones, tablets, and desktops',
        '100/100 Google Lighthouse Core Web Vitals score for top search rankings',
        'Easy content management so your team can update text and images anytime'
      ]
    },
    {
      id: 'cloud-saas',
      category: 'cloud',
      eyebrow: 'ENTERPRISE PLATFORMS',
      title: 'Custom Cloud Software & SaaS Architecture',
      summary: 'Rock-solid software engineered to scale to hundreds of thousands of users without crashing. We design modular backends and database clusters that process transactions with 99.99% reliability.',
      timeframe: '4 to 8 Weeks',
      icon: <Database className="w-8 h-8 text-emerald-400" />,
      accentColor: 'from-emerald-500/15 to-transparent',
      badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      outcomePills: [
        '🛡️ 99.99% Uptime Benchmark',
        '⚡ High-Volume Transaction Ready',
        '🔒 SOC2 / HIPAA Ready'
      ],
      deliverables: [
        'Multi-user company accounts with granular role-based permissions and team security',
        'Asynchronous background job queues (Redis) to process heavy tasks without slowdowns',
        'Seamless integration with third-party APIs (Stripe, QuickBooks, Salesforce, HubSpot)',
        'Automated daily encrypted cloud backups and disaster recovery blueprints'
      ]
    },
    {
      id: 'mobile-apps',
      category: 'mobile',
      eyebrow: 'MOBILE NATIVE SUITE',
      title: 'Silky-Smooth Mobile Apps for iOS & Android',
      summary: 'Launch a high-performance mobile app for both Apple and Android phones using a single, unified codebase. You save 50% in development costs while delivering 60fps native performance.',
      timeframe: '4 to 8 Weeks',
      icon: <Smartphone className="w-8 h-8 text-amber-400" />,
      accentColor: 'from-amber-500/15 to-transparent',
      badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      outcomePills: [
        '📲 iOS & Android Dual Launch',
        '⚡ 60fps Native Feel',
        '📶 Offline Mode Support'
      ],
      deliverables: [
        'Unified React Native codebase powering both Apple App Store and Google Play apps',
        'Silky-smooth 60fps interactions, gestures, and native haptic feedback',
        'Offline data persistence allowing users to browse without cellular connection',
        'Targeted push notifications to drive customer engagement and retention'
      ]
    },
    {
      id: 'modernization',
      category: 'modernization',
      eyebrow: 'CODEBASE RESCUE',
      title: 'Codebase Modernization & Speed Optimization',
      summary: 'Is your current software slow, buggy, or hard to update? We audit your code, fix memory leaks, speed up sluggish database queries, and upgrade legacy frameworks without downtime.',
      timeframe: '2 to 4 Weeks',
      icon: <Layers className="w-8 h-8 text-rose-400" />,
      accentColor: 'from-rose-500/15 to-transparent',
      badgeBg: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
      outcomePills: [
        '📉 30%+ Hosting Bill Cut',
        '🚀 4x–10x Faster Database',
        '✅ 60-Day Bug Warranty'
      ],
      deliverables: [
        'Comprehensive 50-point technical audit covering security vulnerabilities and speed bottlenecks',
        'Database query indexing and optimization eliminating slow-loading pages',
        'Safe, incremental refactoring that modernizes your software without interrupting active users',
        'Cloud infrastructure cost reduction report saving you 30-50% on monthly server bills'
      ]
    }
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  const engagementModels = [
    {
      name: 'Fixed-Scope MVP Sprint',
      badge: 'FOR EARLY-STAGE FOUNDERS',
      target: 'Turn an idea or Figma design into a live, investor-ready web app in 30 days flat.',
      duration: '4 Weeks Flat',
      popular: false,
      features: [
        'Guaranteed launch date with fixed budget ($0 surprises)',
        'Clickable prototype + full responsive web application',
        'User authentication, database & Stripe payment gateway',
        'Product telemetry & analytics installed from day one',
        '100% intellectual property & complete GitHub handover'
      ]
    },
    {
      name: 'Dedicated Engineering Sprint',
      badge: 'MOST POPULAR FOR SCALING',
      target: 'Accelerate your product roadmap with dedicated senior engineers working as your elite tech squad.',
      duration: 'Bi-Weekly Sprints',
      popular: true,
      features: [
        'Dedicated senior tech lead & full-stack software engineers',
        'Bi-weekly milestone deliveries with live staging demos',
        'Direct Slack/Discord channel with daily async progress updates',
        'Continuous feature shipping, bug-squashing & architecture scale',
        'Pause or scale up sprints anytime with 1-week notice'
      ]
    },
    {
      name: 'Fractional CTO & AI Advisory',
      badge: 'FOR NON-TECHNICAL LEADERS',
      target: 'Strategic technology guidance, cloud cost audits, and AI roadmap design without hiring a $250k executive.',
      duration: 'Monthly Advisory',
      popular: false,
      features: [
        'Architecture reviews & cloud bill optimization (save 30%+)',
        'AI roadmap planning & vendor de-risking',
        'Technical hiring support & candidate code reviews',
        'System security blueprinting & SOC2 preparation',
        'Weekly executive 1-on-1 strategy sync'
      ]
    }
  ];

  const faqs = [
    {
      q: 'Do I own 100% of the code and intellectual property?',
      a: 'Yes, completely. From day one, all code, designs, database schemas, and credentials belong 100% to you. We transfer everything to your private GitHub organization with zero licensing fees or lock-ins.'
    },
    {
      q: 'I am not a technical person. How will we work together?',
      a: 'We speak plain English, not confusing technical jargon. You get a direct private Slack channel with your senior tech lead, clear weekly progress demos showing actual working software on your phone, and upfront timelines.'
    },
    {
      q: 'How does the 30-Day MVP guarantee work?',
      a: 'During our initial kickoff, we lock in a precise, high-converting feature scope. By eliminating unnecessary complexity and using our battle-tested modular components, we guarantee delivery of a production-grade application in 30 days.'
    },
    {
      q: 'Can you work on our existing application or codebase?',
      a: 'Yes. We frequently audit, speed up, and expand existing codebases. We begin with a comprehensive technical audit to identify bottlenecks and security vulnerabilities, then improve your software safely without downtime.'
    },
    {
      q: 'What happens after our product is launched?',
      a: 'Every project includes a 60-day post-launch warranty where we fix any unexpected issues immediately at no additional cost. Afterward, you can keep us on dedicated sprints or have your team take over.'
    }
  ];

  return (
    <div className="pt-32 pb-24 relative ambient-glow-top">
      <div className="max-w-7xl mx-auto px-6">

        {/* ==========================================================================
            1. HERO: Big, Confident Editorial Header
            ========================================================================== */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/20 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DISCIPLINES & CAPABILITIES</span>
          </div>

          <h1 className={`text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Engineering Excellence.{' '}
            <span className="luxury-gradient-text">Made Simple.</span>
          </h1>

          <p className={`text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto font-normal mb-10 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            We build high-converting web apps, private AI pipelines, and mobile products with clean code, guaranteed launch dates, and 100% intellectual property ownership.
          </p>

          {/* Clean Editorial Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl luxury-inner-card max-w-3xl mx-auto text-left mb-12 shadow-sm">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#00D2FF] shrink-0" />
              <div>
                <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>100% IP Handover</div>
                <div className="text-xs opacity-70">Complete code ownership</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-[#00D2FF] shrink-0" />
              <div>
                <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Sub-Second Speed</div>
                <div className="text-xs opacity-70">Global edge response</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#00D2FF] shrink-0" />
              <div>
                <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>30-Day Sprints</div>
                <div className="text-xs opacity-70">Guaranteed launch dates</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Activity className="w-5 h-5 text-[#00D2FF] shrink-0" />
              <div>
                <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>60-Day Warranty</div>
                <div className="text-xs opacity-70">Full bug-free guarantee</div>
              </div>
            </div>
          </div>

          {/* Clean Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((c) => {
              const isActive = activeCategory === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#00D2FF] text-[#07090E] font-bold shadow-md scale-105'
                      : isDark
                        ? 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ==========================================================================
            2. APPLE-STYLE EDITORIAL GRID: Spacious, High-Contrast, Ultra-Readable
            ========================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {filteredServices.map((s) => (
            <div
              key={s.id}
              className="luxury-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-[#00D2FF]/40 transition-all duration-300 shadow-lg"
            >
              {/* Soft Gradient Glow */}
              <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${s.accentColor} rounded-full blur-3xl pointer-events-none -mr-20 -mt-20`} />

              <div>
                {/* Header: Icon + Category Eyebrow + Timeframe */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm ${
                      isDark ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-slate-200'
                    }`}>
                      {s.icon}
                    </div>
                    <div>
                      <span className={`font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${s.badgeBg}`}>
                        {s.eyebrow}
                      </span>
                      <div className="text-xs font-mono text-slate-400 mt-1 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#00D2FF]" />
                        <span>Typical Delivery: <strong className={isDark ? 'text-white' : 'text-slate-800'}>{s.timeframe}</strong></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Big, Clear Title */}
                <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 leading-snug ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {s.title}
                </h2>

                {/* Plain-English Summary (Generous font size & line height) */}
                <p className={`text-base sm:text-lg leading-relaxed mb-8 font-normal ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {s.summary}
                </p>

                {/* Key Deliverables: Big, Legible, Check-marked List */}
                <div className="mb-8">
                  <h3 className={`text-xs font-mono uppercase tracking-widest font-bold mb-4 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    // What You Get With This Service:
                  </h3>
                  <div className="space-y-3.5">
                    {s.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#00D2FF]/15 border border-[#00D2FF]/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#00D2FF]" />
                        </div>
                        <span className={`text-sm sm:text-base leading-relaxed ${
                          isDark ? 'text-slate-200' : 'text-slate-700'
                        }`}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom: Outcome Tags & Clean Action Bar */}
              <div>
                {/* Visual Outcome Badges */}
                <div className="flex flex-wrap gap-2 mb-6 pt-6 border-t border-white/10">
                  {s.outcomePills.map((pill, pIdx) => (
                    <span
                      key={pIdx}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-lg border ${
                        isDark
                          ? 'bg-white/5 border-white/10 text-slate-300'
                          : 'bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                {/* Clean Actions */}
                <div className="flex items-center justify-between gap-4">
                  <Link
                    to="/estimator"
                    className="text-sm font-bold hover:text-[#00D2FF] transition-colors flex items-center gap-1.5"
                  >
                    <span>Cost Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={onOpenModal}
                    className="luxury-btn-primary px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Scope This Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ==========================================================================
            3. ENGAGEMENT MODELS: Transparent & Clean 3-Tier Grid
            ========================================================================== */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00D2FF] font-bold block mb-3">
              // TRANSPARENT PARTNERSHIPS
            </span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold mb-3 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              How We Partner With You
            </h2>
            <p className={`text-base ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Predictable, milestone-based models tailored to your timeline and roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((m, idx) => (
              <div
                key={idx}
                className={`luxury-card rounded-3xl p-8 flex flex-col justify-between relative transition-all ${
                  m.popular
                    ? 'border-[#00D2FF] shadow-[0_0_40px_rgba(0,210,255,0.2)] scale-105 z-10'
                    : 'border-white/10'
                }`}
              >
                {m.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00D2FF] text-[#07090E] font-mono text-[10px] font-black uppercase tracking-wider shadow-md">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <div className="font-mono text-xs uppercase font-bold text-[#00D2FF] tracking-wider mb-2">
                    {m.badge}
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {m.name}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {m.target}
                  </p>

                  <div className="font-mono text-2xl font-black text-[#00D2FF] mb-6 pb-6 border-b border-white/10">
                    {m.duration}
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {m.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                        <span className={isDark ? 'text-slate-200' : 'text-slate-700'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onOpenModal}
                  className={`w-full py-3.5 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    m.popular
                      ? 'luxury-btn-primary'
                      : 'luxury-btn-secondary'
                  }`}
                >
                  <span>Discuss This Structure</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================================================
            4. FREQUENTLY ASKED QUESTIONS: Big, Readable Accordion
            ========================================================================== */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00D2FF] font-bold block mb-2">
              // COMMON QUESTIONS
            </span>
            <h2 className={`text-3xl font-extrabold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Everything You Need to Know
            </h2>
            <p className={`text-base ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Straight answers on code ownership, process, and how we work together.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="luxury-card rounded-2xl border transition-all overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className={`text-base sm:text-lg font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {faq.q}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4 text-[#00D2FF]" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className={`px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed border-t border-white/5 ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ==========================================================================
            5. FINAL CALL TO ACTION: Complimentary Architecture Session
            ========================================================================== */}
        <div className="luxury-card rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden border border-[#00D2FF]/30 shadow-2xl">
          <div className="max-w-2xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D2FF]/10 text-[#00D2FF] text-xs font-bold uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LET'S ENGINEER YOUR ADVANTAGE</span>
            </div>

            <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Have a Project in Mind?
            </h2>

            <p className={`text-base sm:text-lg leading-relaxed mb-8 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Schedule a complimentary 30-minute discovery session with our senior tech leads. We will review your vision, recommend the optimal stack, and outline clear scope estimates.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenModal}
                className="luxury-btn-primary px-8 py-4 rounded-xl text-sm font-bold flex items-center gap-2.5 cursor-pointer shadow-xl"
              >
                <span>Book 30-Min Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/estimator"
                className="luxury-btn-secondary px-8 py-4 rounded-xl text-sm font-bold flex items-center gap-2.5"
              >
                <span>Interactive Cost Estimator</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
