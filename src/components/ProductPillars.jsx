import React from 'react';
import { ShieldCheck, Cpu, CloudLightning, ArrowRight } from 'lucide-react';
import SectionBadge from './SectionBadge';

export default function ProductPillars() {
  const pillars = [
    {
      title: 'Minecraft Plugins',
      icon: <ShieldCheck className="w-5 h-5 text-brand-orange" />,
      focus: 'PaperMC plugins, server ecosystems, minigames, friends & parties, queues, stats dashboards, and secure license verification.',
      features: [
        'PaperMC 1.21.x native compatibility',
        'Deeply configurable YAML settings',
        'Performance-conscious asynchronous engines',
        'Connected ecosystem architecture',
        'Automated anti-leak verification',
        'Documentation-first development approach'
      ],
      targetId: 'plugins'
    },
    {
      title: 'AI Studio',
      icon: <Cpu className="w-5 h-5 text-brand-orange" />,
      focus: 'AI-assisted development platform enabling users to bootstrap software through ChatGPT-connected MCP tool suites.',
      features: [
        'Model-agnostic MCP client connections',
        'Complete project template bootstrapping',
        'Automated source and documentation write-outs',
        'Step-by-step agent task queue tracking',
        'Simulated terminal logs & progress indicators',
        'High-end modular web builder panels'
      ],
      targetId: 'ai-studio'
    },
    {
      title: 'Cloud Dashboard',
      icon: <CloudLightning className="w-5 h-5 text-brand-orange" />,
      focus: 'Central customer dashboard managing licenses, downloads, documentations, updates, and direct support lines.',
      features: [
        'Modular customer account portals',
        'Real-time license key generation & cycles',
        'Direct secured artifact downloads',
        'Comprehensive release and updates logs',
        'Direct links to API documentation and guides',
        'Ecosystem health status indicators'
      ],
      targetId: 'dashboard'
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
    <section className="py-24 bg-brand-bg-warm/40 relative overflow-hidden border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <SectionBadge text="Core Pillars" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">
            Built for performance. Envisioned for scale.
          </h2>
          <p className="text-base sm:text-lg text-brand-text-secondary">
            DunesBit divides its development lifecycle into three primary pillars, ensuring Minecraft players, AI developers, and server admins have robust tooling.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="paper-card rounded-2xl p-8 flex flex-col justify-between items-start bg-white/90">
              <div className="space-y-6 w-full">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-50 border border-orange-100">
                    {pillar.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-dark">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-sm text-brand-text-secondary leading-relaxed">
                  {pillar.focus}
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-text-muted">
                    Capabilities
                  </div>
                  <ul className="space-y-2">
                    {pillar.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs text-brand-text-secondary leading-normal">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => handleScrollTo(pillar.targetId)}
                className="mt-8 inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-brand-dark transition-colors cursor-pointer group"
              >
                Inspect Pillar Specs
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
