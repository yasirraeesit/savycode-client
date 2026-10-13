import React from 'react';
import { Link } from 'react-router-dom';
import LuxuryHero from '../components/LuxuryHero';
import TechMarquee from '../components/TechMarquee';
import LuxuryBuilderExplorer from '../components/LuxuryBuilderExplorer';
import LuxuryJourney from '../components/LuxuryJourney';
import LuxuryPeaceOfMind from '../components/LuxuryPeaceOfMind';
import Testimonials from '../components/Testimonials';
import { ArrowRight, Sparkles, Shield, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function HomePage({ onOpenModal }) {
  const { isDark } = useTheme();

  return (
    <div className="relative">
      {/* 1. Luxury Hero with Crystal-Clear Human Copy & 3D Showcase */}
      <LuxuryHero onOpenModal={onOpenModal} />

      {/* 2. Clean Tech Stack Marquee */}
      <TechMarquee />

      {/* 3. Interactive "What Are You Looking to Build?" Explorer */}
      <LuxuryBuilderExplorer onOpenModal={onOpenModal} />

      {/* 4. Stress-Free 4-Step Process (Plain English) */}
      <LuxuryJourney onOpenModal={onOpenModal} />

      {/* 5. Non-Technical Peace of Mind Commitments */}
      <LuxuryPeaceOfMind onOpenModal={onOpenModal} />

      {/* 6. Client Outcomes & Social Proof */}
      <Testimonials />

      {/* 7. Warm, Luxury Final CTA Banner */}
      <section className="py-24 relative ambient-glow-top">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="luxury-card rounded-3xl p-10 sm:p-16 shadow-2xl relative overflow-hidden">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/20 text-[#00D2FF] text-xs font-semibold uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LET'S BUILD SOMETHING REMARKABLE</span>
            </div>

            <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 max-w-3xl mx-auto ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Ready to Turn Your Idea Into a Scalable Reality?
            </h2>

            <p className={`text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Book a complimentary 30-minute discovery session. We will listen to your vision, outline the technical path, and give you clear timeline estimates. No pressure, no tech jargon.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <button
                onClick={onOpenModal}
                className="luxury-btn-primary px-8 py-4 rounded-xl text-base font-bold flex items-center gap-3 cursor-pointer shadow-xl"
              >
                <span>Book Your Free 30-Min Call</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <Link
                to="/estimator"
                className="luxury-btn-secondary px-8 py-4 rounded-xl text-base font-semibold"
              >
                Calculate Timeline &rarr;
              </Link>
            </div>

            <div className={`flex flex-wrap items-center justify-center gap-6 text-xs font-medium ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
                100% Free Consultation
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-500" />
                Mutual NDA Signed on Request
              </span>
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-purple-400" />
                Zero Sales Pressure
              </span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
