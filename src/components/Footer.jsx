import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Footer({ onOpenModal }) {
  const { isDark } = useTheme();

  return (
    <footer className={`pt-20 pb-12 border-t relative z-10 transition-colors duration-300 ${
      isDark ? 'border-white/10 bg-[#07090E]/95' : 'border-slate-200 bg-slate-50/95'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00D2FF] to-[#6366F1] flex items-center justify-center text-[#07090E] font-mono text-sm font-black shadow-[0_0_20px_rgba(0,210,255,0.35)]">
                //
              </div>
              <span className={isDark ? 'text-white' : 'text-slate-900'}>
                SovY<span className="text-[#00D2FF]">Code</span>
              </span>
            </Link>
            <p className={`text-sm max-w-sm leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Elite software engineering and AI product studio for tomorrow's market leaders. Delivering high-throughput software with radical velocity and zero technical debt.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Distributed Engineering Studio • Global Operations</span>
            </div>
          </div>

          {/* Links 1: Services */}
          <div>
            <h4 className={`text-xs font-mono tracking-widest uppercase mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Services
            </h4>
            <ul className={`space-y-3 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              <li><Link to="/services" className="hover:text-[#00D2FF] transition-colors">AI & Machine Learning</Link></li>
              <li><Link to="/services" className="hover:text-[#00D2FF] transition-colors">Next.js Web Applications</Link></li>
              <li><Link to="/services" className="hover:text-[#00D2FF] transition-colors">Custom SaaS Platforms</Link></li>
              <li><Link to="/services" className="hover:text-[#00D2FF] transition-colors">30-Day Startup MVP</Link></li>
            </ul>
          </div>

          {/* Links 2: Architecture & Company */}
          <div>
            <h4 className={`text-xs font-mono tracking-widest uppercase mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Company
            </h4>
            <ul className={`space-y-3 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              <li><Link to="/process" className="hover:text-[#00D2FF] transition-colors">Our 4-Step Playbook</Link></li>
              <li><Link to="/estimator" className="hover:text-[#00D2FF] transition-colors">Scope Calculator</Link></li>
              <li>
                <Link to="/careers" className="text-[#00D2FF] hover:underline font-semibold flex items-center gap-1.5">
                  <span>Careers</span>
                  <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-[#00D2FF]/20 text-[#00D2FF]">Hiring (4)</span>
                </Link>
              </li>
              <li><Link to="/contact" className="hover:text-[#00D2FF] transition-colors">Book Strategy Call</Link></li>
            </ul>
          </div>

          {/* Links 3: Contact */}
          <div>
            <h4 className={`text-xs font-mono tracking-widest uppercase mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Direct Contact
            </h4>
            <ul className={`space-y-3 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              <li>
                <button onClick={onOpenModal} className="hover:text-[#00D2FF] transition-colors text-left cursor-pointer">
                  Book a Discovery Call
                </button>
              </li>
              <li>
                <a href="mailto:hello@sovycode.com" className="hover:text-[#00D2FF] transition-colors">
                  hello@sovycode.com
                </a>
              </li>
              <li>
                <span className="text-slate-400 font-mono text-xs">sovycode.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
          isDark ? 'border-white/5 text-slate-400' : 'border-slate-200 text-slate-500'
        }`}>
          <div>&copy; {new Date().getFullYear()} SovYCode (sovycode.com). All rights reserved.</div>
          <div className="font-medium">
            Architected for high throughput & zero technical debt.
          </div>
        </div>

      </div>
    </footer>
  );
}
