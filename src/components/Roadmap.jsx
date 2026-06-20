import React from 'react';
import { Calendar, CheckCircle2, Clock, Landmark, Layers, Sparkles, Cloud, ArrowRight } from 'lucide-react';
import SectionBadge from './SectionBadge';

export default function Roadmap() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Foundation',
      status: 'Now',
      statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      icon: <Landmark className="w-5 h-5 text-brand-orange" />,
      desc: 'Building the core digital infrastructure, brand guidelines, deployment platforms, and initial public portal.',
      milestones: [
        'Establish dunesbit.com landing hub',
        'Define core visual identities & systems',
        'Draft engineering roadmap & documentations',
        'Configure secure DNS & Vercel deployment pipelines',
        'Implement waitlist interest pipelines'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Plugin Ecosystem',
      status: 'Next',
      statusColor: 'text-amber-700 bg-amber-50 border-amber-200',
      icon: <Layers className="w-5 h-5 text-brand-orange" />,
      desc: 'Developing high-performance Minecraft PaperMC server plugins, catalog showcases, and license systems.',
      milestones: [
        'Develop closed-alpha PaperMC minigame plugins',
        'Design responsive plugin store catalog pages',
        'Test secure async license validation endpoints',
        'Scaffold customer portal dashboard layouts'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'AI Studio',
      status: 'Planned',
      statusColor: 'text-blue-700 bg-blue-50 border-blue-200',
      icon: <Sparkles className="w-5 h-5 text-brand-orange" />,
      desc: 'Bootstrapping the vibecoding dashboard, connecting ChatGPT accounts with secure Model Context Protocol workflows.',
      milestones: [
        'Verify model-agnostic MCP local tool servers',
        'Build agent task queues and progress trackers',
        'Test automated folder and code scaffolding engines',
        'Create interactive dashboard mockups'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Cloud Platform',
      status: 'Future',
      statusColor: 'text-purple-700 bg-purple-50 border-purple-200',
      icon: <Cloud className="w-5 h-5 text-brand-orange" />,
      desc: 'Rolling out live user authentication, downloads distribution, and dashboard-integrated billing channels.',
      milestones: [
        'Secure customer account logins & profiles',
        'Distribute authorized artifact & JAR downloads',
        'Finalize licensing verification networks',
        'Deploy complete API docs & developer wiki hubs'
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-white border-b border-brand-border/60 relative overflow-hidden">
      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-orange-100/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-amber-100/15 rounded-full filter blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <SectionBadge text="Development Plan" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">
            The DunesBit roadmap
          </h2>
          <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed">
            The ecosystem is starting now. The first version of dunesbit.com establishes the brand, explains the vision, and prepares the foundation for products, dashboards, and documentation.
          </p>
        </div>

        {/* Roadmap Phase Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {phases.map((p, idx) => (
            <div key={p.title} className="paper-card rounded-2xl p-6 bg-brand-bg-warm/30 hover:bg-white flex flex-col justify-between items-start">
              <div className="space-y-4 w-full">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-brand-orange bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-md">
                      {p.phase}
                    </span>
                    <h3 className="font-display font-bold text-lg text-brand-dark">{p.title}</h3>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${p.statusColor}`}>
                    {p.status}
                  </span>
                </div>

                <p className="text-xs text-brand-text-secondary leading-relaxed">
                  {p.desc}
                </p>

                {/* Milestones list */}
                <div className="space-y-2 border-t border-brand-border/40 pt-4">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-brand-text-muted">Target milestones</div>
                  <ul className="space-y-2">
                    {p.milestones.map((m) => (
                      <li key={m} className="flex items-start gap-2.5 text-xs text-brand-text-secondary leading-normal">
                        {p.status === 'Now' ? (
                          <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        ) : (
                          <Clock className="w-4 h-4 text-brand-text-muted shrink-0 mt-0.5" />
                        )}
                        <span className={p.status === 'Now' ? 'line-through text-brand-text-muted' : ''}>
                          {m}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {p.status === 'Now' && (
                <div className="mt-6 p-3 rounded-xl border border-emerald-100 bg-emerald-50/50 text-[11px] text-emerald-800 font-semibold flex items-center gap-2 w-full">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Phase 1 currently live & deployed on Vercel production servers.
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
