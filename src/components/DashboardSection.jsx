import React, { useState } from 'react';
import { Key, Download, RefreshCw, FileCode2, LifeBuoy, CheckCircle, ShieldCheck, AlertCircle, Copy, Check } from 'lucide-react';
import SectionBadge from './SectionBadge';

export default function DashboardSection() {
  const [copied, setCopied] = useState(false);

  const features = [
    { title: 'License key management', desc: 'Activate, suspend, or cycle your product keys instantly through the web panel.', icon: <Key className="w-4 h-4 text-brand-orange" /> },
    { title: 'Plugin download access', desc: 'Secure links to download stable compiled JARs and configurations directly.', icon: <Download className="w-4 h-4 text-brand-orange" /> },
    { title: 'Release updates history', desc: 'Detailed patch logs and upgrade warnings before you modify production servers.', icon: <RefreshCw className="w-4 h-4 text-brand-orange" /> },
    { title: 'Documentation shortcuts', desc: 'Direct mapping from plugin warnings in console to correct wiki guidelines.', icon: <FileCode2 className="w-4 h-4 text-brand-orange" /> },
    { title: 'Customer support area', desc: 'Open tickets, inspect server logs, or request customization directly from developers.', icon: <LifeBuoy className="w-4 h-4 text-brand-orange" /> }
  ];

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="dashboard" className="py-24 bg-white border-b border-brand-border/60 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-100/10 rounded-full filter blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text and Feature List */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <SectionBadge text="Customer Hub" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">
                A home for products, licenses, and updates.
              </h2>
              <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed">
                DunesBit Cloud will bring licenses, downloads, product access, documentation, and updates into one clean, unified customer dashboard.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feat) => (
                <div key={feat.title} className="flex gap-4 p-3.5 rounded-xl border border-brand-border/40 hover:border-brand-border hover:bg-brand-bg-warm/30 transition-all">
                  <div className="h-8 w-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark">{feat.title}</h4>
                    <p className="text-xs text-brand-text-secondary mt-0.5 leading-normal">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual (Mock License Key Card UI) */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <div className="w-full max-w-md paper-card rounded-2xl p-6 bg-white/95 relative overflow-hidden">
              {/* Card top details */}
              <div className="flex items-center justify-between pb-4 border-b border-brand-border/60">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-brand-dark text-white">
                    <Key className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-brand-dark">DunesBit Cloud API</div>
                    <div className="text-[10px] text-brand-text-muted">License Key Manager</div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green"></span>
                  Active
                </span>
              </div>

              {/* License Card Grid */}
              <div className="py-6 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-muted">License Key Token</label>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-brand-bg-warm border border-brand-border font-mono text-xs text-brand-dark">
                    <span>db_lic_f2a49b817cde4092b</span>
                    <button
                      onClick={handleCopy}
                      className="p-1 rounded-md hover:bg-brand-border/40 text-brand-text-secondary hover:text-brand-dark transition-colors"
                      title="Copy license key"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-muted">Associated Server IP</label>
                    <div className="text-xs font-semibold text-brand-dark">162.254.162.4</div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-muted">Linked Account</label>
                    <div className="text-xs font-semibold text-brand-dark">creator_dev@dunesbit</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-muted">Ecosystem Plan</label>
                    <div className="text-xs font-semibold text-brand-dark">Premium Creator Suite</div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-brand-text-muted">Renewal Date</label>
                    <div className="text-xs font-semibold text-brand-dark">December 31, 2026</div>
                  </div>
                </div>
              </div>

              {/* License Card Notification banner */}
              <div className="p-3 bg-brand-bg-warm border border-brand-border rounded-xl flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                <div className="text-[11px] text-brand-text-secondary leading-normal">
                  <span className="font-bold text-brand-dark">Automated anti-leak verification</span>: System verifies license asynchronously once on server startup. Zero runtime latency.
                </div>
              </div>

              {/* Light footer status */}
              <div className="mt-5 pt-4 border-t border-brand-border/60 flex items-center justify-between text-[10px] text-brand-text-muted font-mono">
                <span>host: node-us-east.dunesbit</span>
                <span>sync: 12ms ago</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
