import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-white border-t border-brand-border/60 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-brand-border/40">
          
          {/* Logo & description */}
          <div className="space-y-3.5 max-w-sm">
            <a href="#" className="flex items-center gap-2.5 group" onClick={handleScrollToTop}>
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-dark group-hover:bg-brand-orange transition-colors">
                <svg className="w-5 h-5 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 70C35 45 65 45 80 70" stroke="currentColor" strokeWidth="12" strokeLinecap="round"/>
                  <circle cx="50" cy="30" r="10" fill="currentColor"/>
                </svg>
              </div>
              <span className="font-display font-bold text-lg text-brand-dark tracking-tight">
                Dunes<span className="text-brand-orange">Bit</span>
              </span>
            </a>
            <p className="text-xs text-brand-text-secondary leading-relaxed">
              DunesBit builds premium Minecraft plugins, AI-powered developer tools, dashboards, and creator software designed for modern builders.
            </p>
          </div>

          {/* Quick links grid */}
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="space-y-3">
              <div className="text-[10px] font-bold uppercase tracking-wider text-brand-text-muted">Ecosystem</div>
              <ul className="space-y-2 text-xs font-semibold text-brand-text-secondary">
                <li><a href="#ecosystem" onClick={(e) => handleNavClick(e, 'ecosystem')} className="hover:text-brand-orange transition-colors">Products</a></li>
                <li><a href="#plugins" onClick={(e) => handleNavClick(e, 'plugins')} className="hover:text-brand-orange transition-colors">Plugins</a></li>
                <li><a href="#ai-studio" onClick={(e) => handleNavClick(e, 'ai-studio')} className="hover:text-brand-orange transition-colors">AI Studio</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-[10px] font-bold uppercase tracking-wider text-brand-text-muted">Resources</div>
              <ul className="space-y-2 text-xs font-semibold text-brand-text-secondary">
                <li><a href="#why-dunesbit" onClick={(e) => handleNavClick(e, 'why-dunesbit')} className="hover:text-brand-orange transition-colors">Why DunesBit</a></li>
                <li><a href="#roadmap" onClick={(e) => handleNavClick(e, 'roadmap')} className="hover:text-brand-orange transition-colors">Roadmap</a></li>
                <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-brand-orange transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-[10px] font-bold uppercase tracking-wider text-brand-text-muted">System</div>
              <ul className="space-y-2 text-xs font-semibold text-brand-text-secondary">
                <li><span className="text-brand-text-muted cursor-default">Docs Wiki (Soon)</span></li>
                <li className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green"></span>
                  <span className="hover:text-brand-orange transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, 'contact')}>All Systems Operational</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom footer row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-[11px] text-brand-text-muted font-medium">
          <div className="space-y-1 text-center sm:text-left">
            <div>© 2026 DunesBit. All rights reserved.</div>
            <div className="text-[10px] text-stone-400">Built for creators, developers, and Minecraft server owners.</div>
          </div>

          <button
            onClick={handleScrollToTop}
            className="inline-flex items-center gap-1.5 rounded-lg border border-brand-border px-3 py-1.5 hover:bg-brand-bg-warm hover:text-brand-dark transition-all duration-300 shadow-xs cursor-pointer"
            title="Scroll to top"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5 text-brand-orange" />
          </button>
        </div>

      </div>
    </footer>
  );
}
