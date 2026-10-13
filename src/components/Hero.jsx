import React, { useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Zap, Lock, Sparkles } from 'lucide-react';

export default function Hero({ onOpenModal }) {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({ transform: 'perspective(1200px) rotateX(4deg) rotateY(0deg)' });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTiltStyle({
      transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1200px) rotateX(4deg) rotateY(0deg) scale3d(1, 1, 1)'
    });
  };

  return (
    <section className="relative pt-36 pb-20 overflow-hidden text-center" id="hero">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00F2FE]/10 border border-[#00F2FE]/25 text-[#00F2FE] text-xs font-semibold uppercase tracking-wider mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#00F2FE]" />
          <span>AI-Native Product Studio & Enterprise Engineering</span>
        </div>

        {/* H1 Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12] mb-6 max-w-5xl mx-auto">
          We Architect Scalable Software &{' '}
          <span className="bg-gradient-to-r from-white via-[#00F2FE] to-[#6366F1] bg-clip-text text-transparent">
            AI Systems
          </span>{' '}
          That Drive Exponential Growth.
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          From proprietary LLM workflows and autonomous agents to sub-second Next.js web platforms—we partner with non-technical founders, fast-scaling startups, and enterprise teams to launch mission-critical tech without the engineering headache.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <button
            onClick={onOpenModal}
            className="glow-btn px-8 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-[#00F2FE] via-[#4FACFE] to-[#6366F1] text-[#070A0F] flex items-center gap-3 cursor-pointer"
          >
            <span>Book a Discovery Call</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="#services"
            className="px-8 py-4 rounded-xl text-base font-semibold bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all"
          >
            Explore Capabilities &darr;
          </a>
        </div>

        {/* Microcopy Reassurances */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400 mb-16">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#00F2FE]" />
            30-Min Strategy Call
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#00F2FE]" />
            Direct With Tech Lead
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#00F2FE]" />
            Zero Technical Jargon
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#00F2FE]" />
            100% Code & IP Ownership
          </span>
        </div>

        {/* Interactive 3D Mockup Showcase */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative max-w-5xl mx-auto transition-transform duration-300 ease-out"
          style={tiltStyle}
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00F2FE]/20 via-[#6366F1]/20 to-transparent blur-3xl -z-10 transform scale-95 opacity-70"></div>

          {/* Floating Badges */}
          <div className="hidden sm:flex absolute -top-5 -left-6 z-20 items-center gap-3 px-4 py-2.5 rounded-xl bg-[#0E1420]/90 backdrop-blur-xl border border-white/15 shadow-2xl animate-float">
            <div className="w-8 h-8 rounded-lg bg-[#00F2FE]/15 text-[#00F2FE] flex items-center justify-center">
              <Zap className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">Velocity</div>
              <div className="text-xs font-bold text-white">3.2x Faster Time-To-Market</div>
            </div>
          </div>

          <div className="hidden sm:flex absolute -bottom-5 -right-6 z-20 items-center gap-3 px-4 py-2.5 rounded-xl bg-[#0E1420]/90 backdrop-blur-xl border border-white/15 shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
              <Shield className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">Security</div>
              <div className="text-xs font-bold text-white">SOC2 & HIPAA Compliant</div>
            </div>
          </div>

          {/* Dashboard Frame */}
          <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#0E1420]/80 backdrop-blur-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_35px_rgba(0,242,254,0.15)]">
            <div className="flex items-center justify-between px-5 py-3 bg-[#070A0F]/90 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <div className="font-mono text-xs text-slate-400">sovycode_core_engine // production_v4.2</div>
              <div className="font-mono text-xs text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                ALL_SYSTEMS_ONLINE
              </div>
            </div>

            <img
              src="/assets/dashboard-mockup.jpg"
              alt="SovYCode AI Software Architecture Preview"
              className="w-full h-auto object-cover block"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
