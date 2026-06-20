import React from 'react';

export default function SectionBadge({ text }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-border bg-brand-bg-warm px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-orange shadow-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-pulse"></span>
      {text}
    </span>
  );
}
