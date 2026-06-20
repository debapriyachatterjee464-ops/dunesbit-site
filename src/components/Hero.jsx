import React from 'react';
import { ArrowDown, Layers, Calendar, ArrowRight } from 'lucide-react';
import MockDashboard from './MockDashboard';
import SectionBadge from './SectionBadge';

export default function Hero() {
  const handleScrollTo = (id) => {
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
    <section className="relative min-h-[90vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden grid-dots">
      {/* Ambient backgrounds */}
      <div className="absolute top-0 inset-x-0 h-160 bg-gradient-to-b from-orange-100/30 via-amber-50/20 to-transparent -z-10 blur-3xl rounded-b-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <SectionBadge text="Ecosystem Foundation" />
            </div>

            <h1 className="title-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-dark leading-[1.05] text-gradient">
              Premium software for builders, servers, and creators.
            </h1>

            <p className="font-sans text-base sm:text-lg text-brand-text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0">
              DunesBit is building a connected ecosystem of Minecraft plugins, AI-powered development tools, dashboards, licensing systems, and creator-focused software designed to feel fast, reliable, and beautifully engineered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button
                onClick={() => handleScrollTo('ecosystem')}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-dark px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-orange hover:shadow-lg hover:shadow-orange-500/10 active:scale-98 cursor-pointer"
              >
                <Layers className="w-4 h-4" />
                Explore the ecosystem
              </button>
              <button
                onClick={() => handleScrollTo('roadmap')}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-border bg-white/80 px-6 py-3.5 text-sm font-semibold text-brand-dark transition-all duration-300 hover:bg-brand-bg-warm hover:border-brand-orange/30 active:scale-98 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-brand-text-secondary" />
                View roadmap
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-8 border-t border-brand-border/60 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-xs font-semibold text-brand-text-secondary">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>
                <span>Active Development</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>
                <span>Vercel-Optimized Build</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>
                <span>Minecraft PaperMC 1.21</span>
              </div>
            </div>
          </div>

          {/* Hero Dashboard Panel Visual */}
          <div className="lg:col-span-6 relative w-full flex justify-center animate-float">
            {/* Ambient orange blob behind dashboard */}
            <div className="absolute -inset-4 bg-orange-100/40 rounded-3xl filter blur-2xl -z-10"></div>
            
            {/* Dashboard Container */}
            <div className="w-full max-w-lg lg:max-w-none">
              <MockDashboard />
            </div>

            {/* Subtle floating badge */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white border border-brand-border p-3 rounded-2xl shadow-xl items-center gap-3 max-w-[200px]">
              <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-brand-orange font-bold text-sm">
                DB
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-brand-dark uppercase tracking-wider">Status</div>
                <div className="text-xs text-brand-text-secondary font-medium">82% Completed</div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Down Hint */}
        <div className="mt-16 flex justify-center">
          <button 
            onClick={() => handleScrollTo('ecosystem')}
            className="flex flex-col items-center gap-2 text-xs font-semibold text-brand-text-secondary hover:text-brand-orange transition-colors group cursor-pointer"
          >
            <span>Learn More</span>
            <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-brand-orange" />
          </button>
        </div>

      </div>
    </section>
  );
}
