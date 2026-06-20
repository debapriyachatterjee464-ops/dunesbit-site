import React, { useState } from 'react';
import { Mail, Compass, HelpCircle, CheckCircle, Send, ArrowRight } from 'lucide-react';
import SectionBadge from './SectionBadge';

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', interest: 'plugins', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    setSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

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
    <section id="contact" className="py-24 bg-brand-bg-warm/40 border-t border-brand-border/60 relative overflow-hidden grid-dots">
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent -z-10"></div>
      
      {/* Decorative Blur Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-120 bg-orange-100/10 rounded-full filter blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <SectionBadge text="Get Started" />
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-dark leading-tight">
              DunesBit is just getting started.
            </h2>
            
            <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed max-w-xl">
              A premium software ecosystem for Minecraft servers, AI-powered development, dashboards, and creator tools is being built at dunesbit.com. 
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => handleScrollTo('roadmap')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark hover:text-brand-orange transition-colors cursor-pointer"
              >
                <Compass className="w-4 h-4 text-brand-orange" />
                Explore Roadmap
              </button>
              <a
                href="mailto:contact@dunesbit.com"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark hover:text-brand-orange transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-orange" />
                contact@dunesbit.com
              </a>
            </div>

            <div className="p-4 rounded-xl border border-brand-border bg-white text-xs text-brand-text-secondary max-w-md">
              <span className="font-bold text-brand-dark block mb-1">Status Note</span>
              Waitlist signups are stored locally inside your session cache. Real cloud database integration is scheduled for Phase 4.
            </div>
          </div>

          {/* Right Waitlist Form Column */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-md paper-card rounded-2xl p-8 bg-white/95 relative overflow-hidden">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-lg text-brand-dark">Register Interest</h3>
                    <p className="text-xs text-brand-text-secondary">Be the first to hear when we ship new packages.</p>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="form-name" className="text-[10px] font-bold uppercase tracking-wider text-brand-text-muted">Full Name</label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-brand-border bg-brand-bg-warm/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-brand-orange transition-all font-sans text-brand-dark"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="form-email" className="text-[10px] font-bold uppercase tracking-wider text-brand-text-muted">Email Address</label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-brand-border bg-brand-bg-warm/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-brand-orange transition-all font-sans text-brand-dark"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="form-interest" className="text-[10px] font-bold uppercase tracking-wider text-brand-text-muted">Area of Interest</label>
                    <select
                      id="form-interest"
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-brand-border bg-brand-bg-warm/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-brand-orange transition-all font-sans text-brand-dark"
                    >
                      <option value="plugins">Minecraft Server Plugins</option>
                      <option value="ai-studio">AI Vibecoding Studio (MCP)</option>
                      <option value="cloud">Cloud Dashboard & Licensing</option>
                      <option value="all">Full DunesBit Ecosystem</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="form-msg" className="text-[10px] font-bold uppercase tracking-wider text-brand-text-muted">Message (Optional)</label>
                    <textarea
                      id="form-msg"
                      rows="3"
                      placeholder="Tell us about your server or development goals..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-brand-border bg-brand-bg-warm/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-brand-orange transition-all font-sans text-brand-dark resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-dark px-4 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-orange hover:shadow-lg disabled:bg-brand-text-muted cursor-pointer"
                  >
                    {submitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Waitlist Request
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 mb-2">
                    <CheckCircle className="w-6 h-6 animate-bounce" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-dark">Registration Successful</h3>
                  <p className="text-xs text-brand-text-secondary max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-brand-dark">{form.name}</span>! We've registered your interest for <span className="font-bold text-brand-dark uppercase">{form.interest}</span>. Updates will be sent to <span className="font-bold text-brand-dark">{form.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', interest: 'plugins', message: '' });
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-orange hover:text-brand-dark transition-colors pt-4"
                  >
                    Register another email
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
