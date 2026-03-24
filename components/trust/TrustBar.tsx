import { ShieldCheck, Clock, MapPin } from "lucide-react";

export default function TrustBar() {
  return (
    <div className="w-full bg-[var(--color-surface-subtle)] border-y border-[var(--color-border-subtle)] py-[var(--space-4)]">
      <div className="mx-auto max-w-7xl px-[var(--space-4)] flex flex-wrap justify-center gap-[var(--space-6)] sm:gap-[var(--space-10)]">
        
        <div className="flex items-center gap-[var(--space-2)] text-[var(--color-text-body)]">
          <MapPin className="h-5 w-5 text-[var(--color-slate-400)]" aria-hidden="true" />
          <span className="font-[600] tracking-tight tabular-nums" style={{ fontSize: 'var(--text-small)' }}>Lokaler Fachbetrieb</span>
        </div>
        
        <div className="flex items-center gap-[var(--space-2)] text-[var(--color-text-body)]">
          <Clock className="h-5 w-5 text-[var(--color-slate-400)]" aria-hidden="true" />
          <span className="font-[600] tracking-tight tabular-nums" style={{ fontSize: 'var(--text-small)' }}>24/7 Notdienstbereitschaft</span>
        </div>
        
        <div className="flex items-center gap-[var(--space-2)] text-[var(--color-text-body)]">
          <ShieldCheck className="h-5 w-5 text-[var(--color-slate-400)]" aria-hidden="true" />
          <span className="font-[600] tracking-tight tabular-nums" style={{ fontSize: 'var(--text-small)' }}>Transparente Festpreise</span>
        </div>

      </div>
    </div>
  );
}
