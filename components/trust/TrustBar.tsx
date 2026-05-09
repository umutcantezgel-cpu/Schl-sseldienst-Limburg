import { ShieldCheck, Clock, MapPin } from "lucide-react";

export default function TrustBar() {
  return (
    <div className="w-full bg-[var(--color-surface-elevated)] border-y border-[var(--color-border-subtle)] py-[var(--space-4)]">
      <div className="mx-auto max-w-7xl px-[var(--space-4)] flex flex-wrap justify-center gap-[var(--space-6)] sm:gap-[var(--space-10)]">
        
        <div className="flex items-center gap-[var(--space-2)] text-[var(--color-text-main)]">
          <MapPin className="h-5 w-5 text-[var(--color-blue-primary)]" aria-hidden="true" />
          <span className="font-[600] tracking-tight tabular-nums" style={{ fontSize: 'var(--text-small)' }}>Limburg & 50km Umkreis</span>
        </div>
        
        <div className="flex items-center gap-[var(--space-2)] text-[var(--color-text-main)]">
          <Clock className="h-5 w-5 text-[var(--color-blue-primary)]" aria-hidden="true" />
          <span className="font-[600] tracking-tight tabular-nums" style={{ fontSize: 'var(--text-small)' }}>15–30 Min. Soforthilfe</span>
        </div>
        
        <div className="flex items-center gap-[var(--space-2)] text-[var(--color-text-main)]">
          <ShieldCheck className="h-5 w-5 text-[var(--color-blue-primary)]" aria-hidden="true" />
          <span className="font-[600] tracking-tight tabular-nums" style={{ fontSize: 'var(--text-small)' }}>100% Festpreis-Garantie</span>
        </div>

      </div>
    </div>
  );
}
