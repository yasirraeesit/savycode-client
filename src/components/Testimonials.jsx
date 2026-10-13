import React from 'react';
import { Star } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Testimonials() {
  const { isDark } = useTheme();

  const reviews = [
    {
      quote: "SovYCode delivered our AI-assisted SaaS MVP three weeks ahead of schedule. As a non-technical founder, their communication gave me total clarity. We raised our $1.8M pre-seed round using the exact platform they engineered.",
      author: "Marcus Reed",
      role: "Founder & CEO, HealthTech AI Platform",
      avatar: "MR"
    },
    {
      quote: "Finding an engineering agency that understands both enterprise database security and modern consumer-grade UI aesthetics is rare. SovYCode replaced three legacy portals with one unified Next.js dashboard that handles 100k daily queries effortlessly.",
      author: "Elena Lawson",
      role: "Director of Digital Transformation, Global Logistics Group",
      avatar: "EL"
    }
  ];

  return (
    <section className="py-24 relative" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00D2FF] font-bold block mb-3">
            // CLIENT OUTCOMES & TRUST
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Trusted By High-Growth Tech Leaders Worldwide
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Here is what founders and engineering directors say about partnering with our technical team.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="luxury-card rounded-3xl p-8 sm:p-10 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className={`text-base sm:text-lg leading-relaxed mb-8 italic font-light ${
                  isDark ? 'text-slate-200' : 'text-slate-800'
                }`}>
                  "{r.quote}"
                </p>
              </div>

              <div className={`flex items-center gap-4 pt-6 border-t ${
                isDark ? 'border-white/10' : 'border-slate-200'
              }`}>
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#00D2FF] to-[#6366F1] flex items-center justify-center text-[#07090E] font-bold text-sm shadow-md">
                  {r.avatar}
                </div>
                <div>
                  <div className={`font-bold text-sm sm:text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {r.author}
                  </div>
                  <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {r.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metrics Strip */}
        <div className="luxury-card rounded-3xl p-8 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl sm:text-5xl font-black font-mono text-[#00D2FF] mb-2">99.98%</div>
            <div className={`text-xs sm:text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Production System Uptime SLA
            </div>
          </div>
          <div className={`border-y md:border-y-0 md:border-x py-6 md:py-0 ${
            isDark ? 'border-white/10' : 'border-slate-200'
          }`}>
            <div className="text-4xl sm:text-5xl font-black font-mono text-purple-400 mb-2">30 Days</div>
            <div className={`text-xs sm:text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Guaranteed MVP Turnaround Record
            </div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-black font-mono text-emerald-400 mb-2">100%</div>
            <div className={`text-xs sm:text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Direct Client Code & IP Ownership
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
