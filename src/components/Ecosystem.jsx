import React from 'react';
import { Gamepad2, Cpu, Cloud, Wrench, ArrowRight } from 'lucide-react';
import SectionBadge from './SectionBadge';

export default function Ecosystem() {
  const cards = [
    {
      icon: <Gamepad2 className="w-6 h-6 text-orange-600" />,
      title: 'DunesBit Plugins',
      description: 'Premium Minecraft server plugins built for performance, configurability, and long-term maintainability. Optimized for PaperMC networks.',
      badge: 'In Development',
      badgeColor: 'text-amber-700 bg-amber-50 border-amber-200',
      id: 'plugins'
    },
    {
      icon: <Cpu className="w-6 h-6 text-orange-600" />,
      title: 'DunesBit AI Studio',
      description: 'A future AI-powered vibecoding platform where users can build software through connected AI workflows and MCP-powered tools.',
      badge: 'Planned',
      badgeColor: 'text-blue-700 bg-blue-50 border-blue-200',
      id: 'ai-studio'
    },
    {
      icon: <Cloud className="w-6 h-6 text-orange-600" />,
      title: 'DunesBit Cloud',
      description: 'Dashboards, customer accounts, plugin downloads, license verification systems, and product access managed in one central hub.',
      badge: 'Planned',
      badgeColor: 'text-purple-700 bg-purple-50 border-purple-200',
      id: 'dashboard'
    },
    {
      icon: <Wrench className="w-6 h-6 text-orange-600" />,
      title: 'Developer Tools',
      description: 'Utilities, APIs, automation systems, and backend licensing packages built for creators, server operators, and builders.',
      badge: 'Coming Soon',
      badgeColor: 'text-stone-600 bg-stone-50 border-stone-200',
      id: 'why-dunesbit'
    }
  ];

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
    <section id="ecosystem" className="py-24 bg-white border-y border-brand-border/60 relative overflow-hidden">
      {/* Light decorative accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-100/20 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100/10 rounded-full filter blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <SectionBadge text="Product Catalog" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">
            One ecosystem. Multiple products.
          </h2>
          <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed">
            From server plugins to AI-assisted development workflows, DunesBit is designed as a long-term software ecosystem with clean product boundaries and premium user experiences.
          </p>
        </div>

        {/* Ecosystem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              onClick={() => handleScrollTo(card.id)}
              className="paper-card rounded-2xl p-6 flex flex-col justify-between items-start cursor-pointer group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between w-full">
                  <div className="p-3 rounded-xl bg-orange-50 border border-orange-100/50 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    {card.icon}
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${card.badgeColor}`}>
                    {card.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-brand-dark group-hover:text-brand-orange transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-brand-text-secondary leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-1 text-xs font-bold text-brand-orange group-hover:text-brand-dark transition-colors pt-2 border-t border-brand-bg-warm w-full">
                Learn more
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
