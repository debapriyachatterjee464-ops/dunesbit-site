import React from 'react';
import { Layers, ShieldCheck, Zap, FileText, CheckCircle2, Layout, Award, HeartHandshake } from 'lucide-react';
import SectionBadge from './SectionBadge';

export default function WhyDunesBit() {
  const points = [
    {
      title: 'Product-First Approach',
      desc: 'We focus on building mature digital products that solve real challenges, avoiding rushed releases and throwaway scripts.',
      icon: <Award className="w-5 h-5 text-brand-orange" />
    },
    {
      title: 'Clean Interface Design',
      desc: 'Every configuration, dashboard, and CLI interaction is meticulously structured for absolute clarity and ease of use.',
      icon: <Layout className="w-5 h-5 text-brand-orange" />
    },
    {
      title: 'Fast User Experience',
      desc: 'Optimized build assets, lightweight network runtimes, and fast asynchronous execution ensure premium speeds.',
      icon: <Zap className="w-5 h-5 text-brand-orange" />
    },
    {
      title: 'Reliable Architecture',
      desc: 'Planned around database pooling, robust message brokers (Redis), and fail-safe licensing validation models.',
      icon: <ShieldCheck className="w-5 h-5 text-brand-orange" />
    },
    {
      title: 'Documentation-Driven Development',
      desc: 'We write extensive guides, copy-paste configurations, and API documentation alongside writing the first line of code.',
      icon: <FileText className="w-5 h-5 text-brand-orange" />
    },
    {
      title: 'Scalable Ecosystem Thinking',
      desc: 'All plugins, AI platforms, dashboards, and license validations are designed to integrate seamlessly under a single brand.',
      icon: <Layers className="w-5 h-5 text-brand-orange" />
    }
  ];

  return (
    <section id="why-dunesbit" className="py-24 bg-brand-bg-warm/40 border-b border-brand-border/60 relative overflow-hidden grid-dots">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <SectionBadge text="Engineering Values" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">
            Built with engineering discipline.
          </h2>
          <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed">
            DunesBit is being built with a long-term ecosystem mindset: clean product boundaries, reliable customer flows, strong documentation, and software that feels intentional instead of stitched together.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point) => (
            <div key={point.title} className="paper-card rounded-2xl p-6 bg-white flex flex-col gap-4">
              <div className="h-10 w-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                {point.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-base text-brand-dark">
                  {point.title}
                </h3>
                <p className="text-xs text-brand-text-secondary leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Promise footer */}
        <div className="mt-16 p-6 rounded-2xl border border-brand-border bg-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5 text-left">
            <div className="p-2 bg-orange-50 rounded-xl border border-orange-100 text-brand-orange">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-brand-dark">Our Engineering Pledge</div>
              <div className="text-xs text-brand-text-secondary">No marketing fluff. No neon vaporware. Just clean, performant software.</div>
            </div>
          </div>
          <span className="text-xs font-mono text-brand-text-muted bg-brand-bg-warm px-3.5 py-1.5 rounded-lg border border-brand-border">
            status: verified_build_v1.0
          </span>
        </div>

      </div>
    </section>
  );
}
