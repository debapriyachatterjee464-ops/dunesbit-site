import React, { useState } from 'react';
import { Sparkles, Terminal, Play, CheckCircle, RefreshCw, Send, HelpCircle, Layers } from 'lucide-react';
import SectionBadge from './SectionBadge';

export default function AIStudioSection() {
  const [activeStep, setActiveStep] = useState(3); // Mock active step for animation/interaction

  const concepts = [
    { title: 'MCP Integration', desc: 'Connects your chat models directly to local file and execution systems safely.' },
    { title: 'Agentic Tool Workflows', desc: 'Allows AI agents to call specialized tools, compile code, and run tests.' },
    { title: 'Source & Structure Generation', desc: 'Generates standardized folder structures, boilerplates, and build configs.' },
    { title: 'Realtime Status & Progress', desc: 'Enables precise tracking of agent runs through visual checkpoints and task queues.' }
  ];

  const tasks = [
    { id: 1, name: 'Generate folder structure', status: 'completed' },
    { id: 2, name: 'Create source files & classes', status: 'completed' },
    { id: 3, name: 'Write documentation & README.md', status: 'completed' },
    { id: 4, name: 'Build dashboard UI components', status: 'running' },
    { id: 5, name: 'Prepare Vercel-ready deployment bundle', status: 'pending' }
  ];

  return (
    <section id="ai-studio" className="py-24 bg-brand-bg-warm/30 border-b border-brand-border/60 relative overflow-hidden">
      {/* Soft gradients */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-orange-100/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-amber-100/10 rounded-full filter blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Right Visual Panel (AI Mock console) - Rendered first on mobile if swapped, but left as standard column */}
          <div className="lg:col-span-6 w-full order-last lg:order-first">
            <div className="rounded-2xl border border-brand-border bg-white shadow-2xl overflow-hidden">
              
              {/* Header */}
              <div className="px-5 py-4 bg-brand-bg-warm border-b border-brand-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-brand-orange animate-ping"></div>
                  <span className="font-display font-bold text-sm text-brand-dark flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-brand-orange" />
                    AI Studio Agent Session
                  </span>
                </div>
                <span className="font-mono text-[10px] text-brand-text-muted">agent-task_v1-0-4</span>
              </div>

              {/* Chat Interaction Mock */}
              <div className="p-5 space-y-4 border-b border-brand-border bg-white">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-bg-warm border border-brand-border flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-brand-dark">US</span>
                  </div>
                  <div className="p-3.5 rounded-2xl rounded-tl-none bg-brand-bg-warm/70 border border-brand-border max-w-[85%]">
                    <p className="text-xs font-semibold text-brand-dark">
                      “Build a plugin dashboard”
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center shrink-0 shadow-sm">
                    <span className="text-xs font-bold text-white">DB</span>
                  </div>
                  <div className="p-4 rounded-2xl rounded-tl-none bg-[#FAF7F1]/30 border border-orange-100 max-w-[85%] space-y-3">
                    <p className="text-xs text-brand-text-secondary leading-relaxed">
                      Analyzing task. Connecting to Model Context Protocol (MCP) server... Scaffolding file tree, building assets, and writing mock dashboard structures.
                    </p>
                    
                    {/* Task Queue Checklist */}
                    <div className="space-y-2 border-t border-brand-border/60 pt-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-brand-text-muted">Task Queue</div>
                      <div className="space-y-1.5">
                        {tasks.map((task) => (
                          <div key={task.id} className="flex items-center justify-between text-xs">
                            <span className="flex items-center gap-2 text-brand-text-secondary">
                              {task.status === 'completed' && <CheckCircle className="w-4 h-4 text-brand-green" />}
                              {task.status === 'running' && <RefreshCw className="w-4 h-4 text-brand-orange animate-spin" />}
                              {task.status === 'pending' && <span className="w-4 h-4 rounded-full border border-brand-border inline-block"></span>}
                              <span className={task.status === 'completed' ? 'line-through text-brand-text-muted' : 'font-medium text-brand-dark'}>
                                {task.name}
                              </span>
                            </span>
                            <span className={`text-[10px] font-bold uppercase tracking-wider ${
                              task.status === 'completed' ? 'text-brand-green' : task.status === 'running' ? 'text-brand-orange' : 'text-brand-text-muted'
                            }`}>
                              {task.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1 border-t border-brand-border/60 pt-3">
                      <div className="flex justify-between text-[10px] font-bold text-brand-dark">
                        <span>Agent Execution Progress</span>
                        <span className="font-mono">68%</span>
                      </div>
                      <div className="w-full bg-brand-border/60 rounded-full h-2">
                        <div className="bg-brand-orange h-2 rounded-full" style={{ width: '68%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Input Placeholder */}
              <div className="px-5 py-3.5 bg-brand-bg-warm flex items-center justify-between gap-4">
                <span className="text-xs text-brand-text-muted select-none">Ask your AI coding agent...</span>
                <button className="p-1.5 rounded-lg bg-brand-dark text-white shadow-xs" disabled>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <SectionBadge text="AI & MCP Workflows" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">
                AI-powered building, connected to real tools.
              </h2>
              <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed">
                DunesBit AI Studio is envisioned as a premium web dashboard where users can connect their ChatGPT account through MCP workflows and generate project structures, source files, documentation, and development tasks through guided AI interactions.
              </p>
            </div>

            {/* Concepts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {concepts.map((c) => (
                <div key={c.title} className="space-y-1.5">
                  <h4 className="text-sm font-bold text-brand-dark flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>
                    {c.title}
                  </h4>
                  <p className="text-xs text-brand-text-secondary leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-xl border border-brand-border bg-white px-5 py-3 text-xs font-bold text-brand-dark transition-all duration-300 hover:bg-brand-bg-warm hover:border-brand-orange/30 shadow-xs"
              >
                Join AI Studio Waitlist
                <Send className="w-3.5 h-3.5 text-brand-orange" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
