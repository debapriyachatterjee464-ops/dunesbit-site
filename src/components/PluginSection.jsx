import React from 'react';
import { Database, FileText, CheckCircle2, ShieldCheck, HelpCircle, HardDrive, Share2, RefreshCw } from 'lucide-react';
import SectionBadge from './SectionBadge';

export default function PluginSection() {
  const features = [
    {
      title: 'Performance-focused systems',
      desc: 'Engineered with non-blocking async loops and strict database query batching to maintain 20 TPS.',
      icon: <Database className="w-5 h-5 text-brand-orange" />
    },
    {
      title: 'Config-first behavior',
      desc: 'Planned with clean and nested YAML structures, supporting reload commands without server restarts.',
      icon: <FileText className="w-5 h-5 text-brand-orange" />
    },
    {
      title: 'MySQL-ready architecture',
      desc: 'Prepared for high-scale player sync using pooling (HikariCP) and secure SSL database connections.',
      icon: <HardDrive className="w-5 h-5 text-brand-orange" />
    },
    {
      title: 'Cross-server party & queue',
      desc: 'Designed with Redis message brokers to synchronize states across large multi-lobby networks.',
      icon: <Share2 className="w-5 h-5 text-brand-orange" />
    },
    {
      title: 'Premium setup guides',
      desc: 'Documentation is treated as a product, providing copy-paste templates and troubleshooting steps.',
      icon: <HelpCircle className="w-5 h-5 text-brand-orange" />
    },
    {
      title: 'Licensing integrated',
      desc: 'Integrated with anti-leak verification that performs lightweight checks without blocking server startups.',
      icon: <ShieldCheck className="w-5 h-5 text-brand-orange" />
    }
  ];

  const mockYaml = `##################################################
# DunesBit Ecosystem Configuration File
# Target Release: PaperMC 1.21.x
##################################################

server-settings:
  network-name: "DunesBit Network"
  debug-mode: false
  metrics-enabled: true

database-pooling:
  driver: "MYSQL"
  host: "sql.dunesbit.com"
  port: 3306
  database: "dunesbit_server"
  username: "db_client_1a4e"
  pool-size: 10
  timeout-ms: 30000

licensing:
  verification-url: "https://licensing.dunesbit.com"
  verification-key: "db_lic_f2a49b817cde4092b"
  grace-period-seconds: 300

features:
  redis-sync-enabled: true
  async-autosave-interval-ticks: 12000`;

  return (
    <section id="plugins" className="py-24 bg-white border-b border-brand-border/60 relative overflow-hidden">
      {/* Accent Background */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-orange-100/10 rounded-full filter blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text and Feature Grid */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <SectionBadge text="Minecraft Infrastructure" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">
                Plugins built like products, not random JAR files.
              </h2>
              <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed">
                DunesBit Plugins are planned for Minecraft server owners who need polished features, reliable architecture, clean configuration, and documentation that does not read like it was written during a server crash.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feat) => (
                <div key={feat.title} className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center">
                    {feat.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-brand-dark">{feat.title}</h4>
                    <p className="text-xs text-brand-text-secondary leading-normal">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl border border-amber-200 bg-amber-50/50 flex items-center gap-3">
              <RefreshCw className="w-5 h-5 text-amber-700 animate-spin" />
              <span className="text-xs font-semibold text-amber-800">
                Release status: Initial Minecraft plugin packages are currently under closed alpha testing.
              </span>
            </div>
          </div>

          {/* Right Visual (YAML Config Panel) */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl border border-brand-border bg-brand-dark shadow-2xl overflow-hidden">
              {/* YAML Window Header */}
              <div className="px-4 py-3 bg-[#242427] border-b border-stone-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-stone-700"></span>
                  <span className="w-3 h-3 rounded-full bg-stone-700"></span>
                  <span className="w-3 h-3 rounded-full bg-stone-700"></span>
                </div>
                <span className="font-mono text-xs text-stone-400">config.yml</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-brand-orange px-2 py-0.5 rounded-md bg-orange-950/40 border border-orange-900/30">
                  YAML
                </span>
              </div>
              
              {/* YAML Code Block */}
              <div className="p-5 font-mono text-[11px] leading-relaxed text-stone-300 overflow-x-auto select-none bg-[#1e1e20]">
                <pre>{mockYaml}</pre>
              </div>
              
              {/* YAML Window Status */}
              <div className="px-4 py-2 bg-[#242427] border-t border-stone-800 flex items-center justify-between text-[10px] text-stone-500 font-semibold">
                <span>lines: 28</span>
                <span>utf-8</span>
                <span className="text-emerald-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Valid config structure
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
