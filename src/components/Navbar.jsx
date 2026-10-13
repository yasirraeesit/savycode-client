import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navClass = ({ isActive }) =>
    `text-sm font-semibold transition-all relative py-1 ${
      isActive 
        ? 'text-[#00D2FF]' 
        : isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
    }`;

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? isDark
          ? 'bg-[#07090E]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-md py-3.5'
        : isDark
          ? 'bg-[#07090E]/60 backdrop-blur-md border-b border-white/5 py-5'
          : 'bg-white/60 backdrop-blur-md border-b border-slate-200/50 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <Link 
          to="/" 
          className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00D2FF] to-[#6366F1] flex items-center justify-center text-[#07090E] font-mono text-sm font-black shadow-[0_0_20px_rgba(0,210,255,0.35)] group-hover:scale-105 transition-transform">
            //
          </div>
          <span className={isDark ? 'text-white' : 'text-slate-900'}>
            SovY<span className="text-[#00D2FF]">Code</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/services" className={navClass}>
            Services
          </NavLink>
          <NavLink to="/estimator" className={navClass}>
            Estimator
          </NavLink>
          <NavLink to="/process" className={navClass}>
            Playbook
          </NavLink>
          <NavLink to="/careers" className={navClass}>
            <span className="flex items-center gap-2">
              <span>Careers</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#00D2FF]/15 border border-[#00D2FF]/30 text-[#00D2FF]">
                Hiring (4)
              </span>
            </span>
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
        </nav>

        {/* Action Controls & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Capacity Pill */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34D399]"></span>
            <span>2 Q2/Q3 Slots Open</span>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer border ${
              isDark
                ? 'bg-white/5 border-white/10 text-amber-300 hover:bg-white/10 hover:border-amber-300/40'
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
            }`}
            title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Discovery Button */}
          <button
            onClick={onOpenModal}
            className="luxury-btn-primary px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <span>Book Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex md:hidden items-center gap-2.5">
          <button
            onClick={toggleTheme}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer border ${
              isDark
                ? 'bg-white/5 border-white/10 text-amber-300'
                : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 focus:outline-none ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'}`}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b px-6 py-6 flex flex-col gap-4 animate-in fade-in duration-200 ${
          isDark ? 'bg-[#0E131F] border-white/10' : 'bg-white border-slate-200 shadow-xl'
        }`}>
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`text-base font-medium ${isDark ? 'text-slate-200 hover:text-[#00D2FF]' : 'text-slate-800 hover:text-[#00D2FF]'}`}>
            Home
          </Link>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)} className={`text-base font-medium ${isDark ? 'text-slate-200 hover:text-[#00D2FF]' : 'text-slate-800 hover:text-[#00D2FF]'}`}>
            Services
          </Link>
          <Link to="/estimator" onClick={() => setMobileMenuOpen(false)} className={`text-base font-medium ${isDark ? 'text-slate-200 hover:text-[#00D2FF]' : 'text-slate-800 hover:text-[#00D2FF]'}`}>
            Scope Estimator
          </Link>
          <Link to="/process" onClick={() => setMobileMenuOpen(false)} className={`text-base font-medium ${isDark ? 'text-slate-200 hover:text-[#00D2FF]' : 'text-slate-800 hover:text-[#00D2FF]'}`}>
            Our Playbook
          </Link>
          <Link to="/careers" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-[#00D2FF] flex items-center justify-between">
            <span>Careers</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#00D2FF]/15 border border-[#00D2FF]/30 text-[#00D2FF]">
              4 Roles Open
            </span>
          </Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className={`text-base font-medium ${isDark ? 'text-slate-200 hover:text-[#00D2FF]' : 'text-slate-800 hover:text-[#00D2FF]'}`}>
            Contact
          </Link>

          <button
            onClick={() => { setMobileMenuOpen(false); onOpenModal(); }}
            className="w-full mt-2 py-3 rounded-xl text-sm font-bold luxury-btn-primary flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Book Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
