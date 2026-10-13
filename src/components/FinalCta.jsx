import React from 'react';
import { ArrowRight, Lock, Mail, Sparkles } from 'lucide-react';

export default function FinalCta({ onOpenModal }) {
  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="rounded-3xl border border-[#00F2FE]/40 bg-gradient-to-r from-[#0E1420]/95 via-[#6366F1]/15 to-[#00F2FE]/15 p-10 sm:p-16 text-center relative overflow-hidden shadow-[0_25px_80px_-20px_rgba(0,242,254,0.3)]">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00F2FE]/10 border border-[#00F2FE]/30 text-[#00F2FE] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#00F2FE]" />
            <span>Let's Build Something Extraordinary</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto mb-6">
            Have an Ambitious Project in Mind?<br />Let's Bring It to Life.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Book a complimentary 30-minute scoping session. We'll analyze your requirements, outline the technical approach, and provide a clear timeline estimate.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <button
              onClick={onOpenModal}
              className="glow-btn px-8 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-[#00F2FE] via-[#4FACFE] to-[#6366F1] text-[#070A0F] flex items-center gap-3 cursor-pointer"
            >
              <span>Schedule Your Free Strategy Call</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="mailto:hello@sovycode.com"
              className="px-8 py-4 rounded-xl text-base font-semibold bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#00F2FE]" />
              <span>hello@sovycode.com</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Confidential • Mutual NDA Signed Upon Request • Zero Sales Pressure</span>
          </div>

        </div>

      </div>
    </section>
  );
}
