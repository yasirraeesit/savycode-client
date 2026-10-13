import React, { useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Zap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function LuxuryHero({ onOpenModal }) {
  const cardRef = useRef(null);
  const { isDark } = useTheme();
  const [tiltStyle, setTiltStyle] = useState({ transform: 'perspective(1200px) rotateX(3deg) rotateY(0deg)' });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setTiltStyle({
      transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1200px) rotateX(3deg) rotateY(0deg) scale3d(1, 1, 1)'
    });
  };

  return (
    <section className="relative pt-36 pb-24 overflow-hidden ambient-glow-top text-center">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Friendly Eyebrow Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-medium mb-8 backdrop-blur-xl shadow-md ${
          isDark ? 'bg-white/5 border-white/10 text-slate-200' : 'bg-slate-100/90 border-slate-200 text-slate-800'
        }`}>
          <Sparkles className="w-4 h-4 text-[#00D2FF]" />
          <span>Elite AI & Software Product Studio for Ambitious Founders</span>
        </div>

        {/* Big, Clear, Inspiring Headline */}
        <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12] mb-6 max-w-5xl mx-auto ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          We Build Scalable Software &{' '}
          <span className="luxury-gradient-text">
            AI Solutions
          </span>{' '}
          That Grow Your Business.
        </h1>

        {/* Crystal Clear, Jargon-Free Subtitle */}
        <p className={`text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-normal ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          You bring the vision. We handle the full technical execution—from custom AI workflows and automation to high-performance web platforms. Zero engineering headache, 100% code ownership.
        </p>

        {/* Clear CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <button
            onClick={onOpenModal}
            className="luxury-btn-primary px-8 py-4 rounded-xl text-base font-bold flex items-center gap-3 cursor-pointer shadow-xl"
          >
            <span>Book a Free 30-Min Strategy Call</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <Link
            to="/services"
            className="luxury-btn-secondary px-8 py-4 rounded-xl text-base font-semibold transition-all"
          >
            Explore What We Build &darr;
          </Link>
        </div>

        {/* Reassurance Badges for Non-Technical Leaders */}
        <div className={`flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm mb-16 font-medium ${
          isDark ? 'text-slate-300' : 'text-slate-700'
        }`}>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
            No Technical Jargon
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
            You Own 100% of the Code
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
            Weekly Live Video Demos
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
            Fixed Milestone Pricing
          </span>
        </div>

        {/* Floating 3D Showcase Card */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative max-w-5xl mx-auto transition-transform duration-300 ease-out"
          style={tiltStyle}
        >
          {/* Ambient Lighting Behind Card */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00D2FF]/20 via-[#6366F1]/20 to-[#8B5CF6]/20 blur-3xl -z-10 transform scale-95 opacity-70"></div>

          {/* Floating Human Outcome Badges */}
          <div className={`hidden sm:flex absolute -top-5 -left-6 z-20 items-center gap-3 px-4 py-3 rounded-2xl backdrop-blur-xl border shadow-2xl animate-soft-float ${
            isDark ? 'bg-[#0E131F]/95 border-white/15' : 'bg-white/95 border-slate-200'
          }`}>
            <div className="w-9 h-9 rounded-xl bg-[#00D2FF]/15 text-[#00D2FF] flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className={`text-[11px] font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Speed to Market</div>
              <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>3.2x Faster Delivery</div>
            </div>
          </div>

          <div className={`hidden sm:flex absolute -bottom-5 -right-6 z-20 items-center gap-3 px-4 py-3 rounded-2xl backdrop-blur-xl border shadow-2xl animate-soft-float ${
            isDark ? 'bg-[#0E131F]/95 border-white/15' : 'bg-white/95 border-slate-200'
          }`} style={{ animationDelay: '2.5s' }}>
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center font-bold">
              <Shield className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className={`text-[11px] font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Peace of Mind</div>
              <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>SOC2 & Enterprise Compliant</div>
            </div>
          </div>

          {/* Luxury Frame */}
          <div className="rounded-3xl overflow-hidden border border-white/15 luxury-card">
            <div className={`flex items-center justify-between px-6 py-4 border-b ${
              isDark ? 'bg-[#07090E]/80 border-white/10' : 'bg-slate-50/90 border-slate-200'
            }`}>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <div className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                SovYCode Intelligence & Software Engine
              </div>
              <div className="text-xs font-semibold text-emerald-500 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Active & Monitored
              </div>
            </div>

            <img
              src="/assets/dashboard-mockup.jpg"
              alt="SovYCode Software and AI Platform Showcase"
              className="w-full h-auto object-cover block"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
