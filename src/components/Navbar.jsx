import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
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

  const navLinks = [
    { name: 'Products', id: 'ecosystem' },
    { name: 'Plugins', id: 'plugins' },
    { name: 'AI Studio', id: 'ai-studio' },
    { name: 'Roadmap', id: 'roadmap' },
    { name: 'Why Us', id: 'why-dunesbit' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 border-b border-brand-border backdrop-blur-md py-3 shadow-[0_2px_20px_rgba(24,24,27,0.03)]' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group" onClick={(e) => handleNavClick(e, 'root')}>
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-brand-dark transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-orange shadow-md">
              <svg className="w-5.5 h-5.5 text-white transition-all duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 70C35 45 65 45 80 70" stroke="currentColor" strokeWidth="12" strokeLinecap="round"/>
                <circle cx="50" cy="30" r="10" fill="currentColor"/>
              </svg>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-brand-dark transition-colors duration-300 group-hover:text-brand-orange">
              Dunes<span className="text-brand-orange">Bit</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="font-sans font-medium text-sm text-brand-text-secondary hover:text-brand-dark transition-colors duration-200 relative py-1.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-orange hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="inline-flex items-center gap-1.5 rounded-xl bg-brand-dark px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-orange hover:shadow-lg hover:shadow-orange-500/10 active:scale-98"
            >
              Join Waitlist
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-xl border border-brand-border bg-white/70 hover:bg-white text-brand-dark transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden fixed inset-x-0 top-[60px] bg-white border-b border-brand-border shadow-xl transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
      }`}>
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="font-sans font-semibold text-lg text-brand-text-secondary hover:text-brand-dark transition-colors py-2 border-b border-brand-bg-warm"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand-dark px-5 py-3 text-base font-semibold text-white transition-all hover:bg-brand-orange"
          >
            Join Waitlist
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
