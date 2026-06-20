import React, { useState } from 'react';
import { Terminal, Shield, Cpu, RefreshCw, CheckCircle, Clock, Zap, ArrowRight, Code } from 'lucide-react';

export default function MockDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const products = [
    { name: 'DunesBit Plugins', status: 'In Development', type: 'Minecraft', label: 'PaperMC 1.21+', pct: 34, color: 'text-amber-600 bg-amber-50 border-amber-200' },
    { name: 'DunesBit AI Studio', status: 'Planned', type: 'Vibecoding', label: 'MCP ChatGPT Tooling', pct: 21, color: 'text-blue-600 bg-blue-50 border-blue-200' },
    { name: 'License Server', status: 'Planned', type: 'Infrastructure', label: 'Anti-leak verification', pct: 15, color: 'text-purple-600 bg-purple-50 border-purple-200' },
    { name: 'Docs Hub', status: 'Active Soon', type: 'Documentation', label: 'DunesBit Guides & APIs', pct: 82, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' }
  ];

  const recentLogs = [
    { id: 1, time: '14:23:01', source: 'BUILD', text: 'dunesbit-landing compiled successfully. [82%]' },
    { id: 2, time: '14:24:12', source: 'LICENSE', text: 'Secured validation module initialized for Paper 1.21.' },
    { id: 3, time: '14:25:40', source: 'AI_STUDY', text: 'Enqueued ChatGPT-MCP project-scaffolder agent-task.' },
    { id: 4, time: '14:26:02', source: 'CORE', text: 'System status: Nominal. Sandbox initialized.' }
  ];

  return (
    <div className="w-full rounded-2xl border border-brand-border bg-white shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-orange-500/5">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-brand-bg-warm border-b border-brand-border">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3.5 h-3.5 rounded-full bg-red-400/80 inline-block"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-yellow-400/80 inline-block"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-green-400/80 inline-block"></span>
          </div>
          <div className="h-4 w-px bg-brand-border"></div>
          <span className="font-mono text-xs text-brand-text-muted select-none flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-brand-orange" />
            console.dunesbit.com/dashboard
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 select-none">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping"></span>
            System Live
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 min-h-[460px]">
        {/* Left Sidebar Menu */}
        <div className="p-4 bg-brand-bg-warm border-r border-brand-border flex flex-col justify-between gap-6 md:col-span-1">
          <div className="space-y-1">
            <div className="px-3 py-2 text-xs font-semibold tracking-wider text-brand-text-muted uppercase select-none">
              Ecosystem Console
            </div>
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg transition-colors text-left ${
                activeTab === 'overview'
                  ? 'bg-brand-dark text-white shadow-sm'
                  : 'text-brand-text-secondary hover:text-brand-dark hover:bg-brand-border/30'
              }`}
            >
              <Cpu className="w-4 h-4" />
              Overview
            </button>
            <button
              onClick={() => setActiveTab('status')}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg transition-colors text-left ${
                activeTab === 'status'
                  ? 'bg-brand-dark text-white shadow-sm'
                  : 'text-brand-text-secondary hover:text-brand-dark hover:bg-brand-border/30'
              }`}
            >
              <RefreshCw className="w-4 h-4" />
              Build Trackers
            </button>
            <button
              onClick={() => setActiveTab('terminal')}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg transition-colors text-left ${
                activeTab === 'terminal'
                  ? 'bg-brand-dark text-white shadow-sm'
                  : 'text-brand-text-secondary hover:text-brand-dark hover:bg-brand-border/30'
              }`}
            >
              <Terminal className="w-4 h-4" />
              CLI Shell
            </button>
          </div>

          <div className="p-3 bg-brand-bg border border-brand-border rounded-xl">
            <div className="flex items-center gap-2 text-xs font-bold text-brand-dark">
              <Zap className="w-3.5 h-3.5 text-brand-orange" />
              DunesBit Cloud v1.0
            </div>
            <p className="mt-1 text-[11px] text-brand-text-secondary leading-normal">
              Managing secure server runtimes and developer sandboxes.
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-6 md:col-span-3 bg-white flex flex-col justify-between">
          
          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-display font-bold text-lg text-brand-dark">Product Ecosystem Status</h4>
                <p className="text-sm text-brand-text-secondary">Official health dashboard and release progression.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {products.map((p) => (
                  <div key={p.name} className="p-4 rounded-xl border border-brand-border bg-brand-bg-warm/50 hover:bg-white transition-all shadow-xs">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-brand-text-muted">{p.type}</span>
                        <h5 className="font-semibold text-brand-dark text-sm mt-0.5">{p.name}</h5>
                      </div>
                      <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${p.color}`}>
                        {p.status}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs text-brand-text-secondary">
                      <span>{p.label}</span>
                      <span className="font-mono font-bold text-brand-dark">{p.pct}%</span>
                    </div>
                    <div className="mt-1.5 w-full bg-brand-border/60 rounded-full h-1.5">
                      <div className="bg-brand-orange h-1.5 rounded-full transition-all duration-1000" style={{ width: `${p.pct}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border border-brand-border rounded-xl bg-[#FAF7F1]/30 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-100/80 text-brand-orange">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-brand-dark">Need custom integration?</div>
                    <div className="text-xs text-brand-text-secondary">Our MCP client connects directly to ChatGPT for code output.</div>
                  </div>
                </div>
                <a href="#contact" className="text-xs font-bold text-brand-orange hover:text-brand-dark inline-flex items-center gap-1 transition-colors">
                  Contact us
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* Tab 2: Build Trackers */}
          {activeTab === 'status' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-display font-bold text-lg text-brand-dark">Development Build Progress</h4>
                <p className="text-sm text-brand-text-secondary">Current tasks handled by the DunesBit vibecoding studio.</p>
              </div>

              <div className="space-y-3.5">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold text-brand-dark">
                    <span>Landing Page & Brand Identity</span>
                    <span className="font-mono">82%</span>
                  </div>
                  <div className="w-full bg-brand-border rounded-full h-2">
                    <div className="bg-brand-orange h-2 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold text-brand-dark">
                    <span>Minecraft Plugin Catalog & Licensing</span>
                    <span className="font-mono">34%</span>
                  </div>
                  <div className="w-full bg-brand-border rounded-full h-2">
                    <div className="bg-brand-orange h-2 rounded-full" style={{ width: '34%' }}></div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold text-brand-dark">
                    <span>AI Studio UI & MCP Agent Connector</span>
                    <span className="font-mono">21%</span>
                  </div>
                  <div className="w-full bg-brand-border rounded-full h-2">
                    <div className="bg-brand-orange h-2 rounded-full" style={{ width: '21%' }}></div>
                  </div>
                </div>
              </div>

              <div className="p-4 border border-brand-border rounded-xl bg-brand-bg-warm flex flex-col gap-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-text-muted">Current Milestones</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-brand-text-secondary">
                    <CheckCircle className="w-4 h-4 text-brand-green" /> Core domain setup
                  </div>
                  <div className="flex items-center gap-1.5 text-brand-text-secondary">
                    <CheckCircle className="w-4 h-4 text-brand-green" /> Brand visual guidelines
                  </div>
                  <div className="flex items-center gap-1.5 text-brand-text-secondary font-medium">
                    <Clock className="w-4 h-4 text-brand-orange animate-spin" /> License Server API
                  </div>
                  <div className="flex items-center gap-1.5 text-brand-text-secondary">
                    <Clock className="w-4 h-4 text-brand-text-muted" /> AI Agent sandbox
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: CLI Shell */}
          {activeTab === 'terminal' && (
            <div className="space-y-4">
              <div>
                <h4 className="font-display font-bold text-lg text-brand-dark">Development Terminal Output</h4>
                <p className="text-sm text-brand-text-secondary">Real-time status updates and action logging.</p>
              </div>

              <div className="bg-brand-dark p-4 rounded-xl font-mono text-[11px] leading-relaxed text-stone-300 border border-stone-800 shadow-inner h-[220px] overflow-y-auto">
                <div className="text-brand-text-muted mb-2">// Connecting to DunesBit Cloud shell logs...</div>
                {recentLogs.map((log) => (
                  <div key={log.id} className="flex gap-2 mb-1">
                    <span className="text-brand-orange font-semibold select-none">{log.time}</span>
                    <span className="text-stone-500 font-bold select-none">[{log.source}]</span>
                    <span className="text-stone-100">{log.text}</span>
                  </div>
                ))}
                <div className="mt-3 flex items-center gap-1.5 text-brand-orange animate-pulse">
                  <span>$</span>
                  <span className="w-2 h-4 bg-brand-orange"></span>
                </div>
              </div>
            </div>
          )}

          {/* Bottom stats footer */}
          <div className="mt-6 pt-4 border-t border-brand-border flex items-center justify-between text-xs text-brand-text-secondary">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-brand-orange inline-block"></span>
              Workspace: Main
            </span>
            <span className="font-mono text-brand-text-muted select-none">build: db-2026.06.20</span>
          </div>

        </div>
      </div>
    </div>
  );
}
