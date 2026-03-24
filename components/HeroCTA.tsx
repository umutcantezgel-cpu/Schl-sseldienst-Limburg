import { Phone, ShieldCheck } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HeroCTA() {
    return (
        <div className="mt-[var(--space-8)] flex flex-col items-center w-full px-[var(--space-4)] sm:px-0 z-10">
            <div className="flex flex-col sm:flex-row items-center gap-[var(--space-4)] w-full max-w-md mx-auto">
                <a
                    href="tel:06441123456"
                    role="button"
                    aria-label="Jetzt Schlüsseldienst anrufen"
                    className="flex w-full items-center justify-center gap-[var(--space-3)] bg-[var(--color-emergency)] text-[var(--color-text-inverted)] hover:bg-[var(--color-emergency-hover)] active:scale-[0.98] transition-all rounded-full py-[var(--space-4)] px-[var(--space-6)]"
                    style={{
                        boxShadow: 'var(--shadow-cta)',
                    }}
                >
                    <Phone className="h-6 w-6 animate-phone-ring" aria-hidden="true" />
                    <div className="flex flex-col items-start">
                        <span className="font-[700] uppercase tracking-widest text-[10px] leading-none opacity-90 mb-1">24/7 Notdienst</span>
                        <span className="font-[800] text-[20px] leading-none tabular-nums tracking-tight">06441 123 456</span>
                    </div>
                </a>
            </div>

            <div className="mt-[var(--space-6)] flex items-center justify-center gap-[var(--space-4)] text-[var(--color-text-muted)] font-[500]" style={{ fontSize: 'var(--text-small)' }}>
                <span className="flex items-center gap-[var(--space-2)]">
                    <ShieldCheck className="h-4 w-4 text-[var(--color-success)]" />
                    Keine Anfahrtskaufkosten
                </span>
                <span className="flex items-center gap-[var(--space-2)]">
                    <ShieldCheck className="h-4 w-4 text-[var(--color-success)]" />
                    100% Festpreis
                </span>
            </div>

            {/* Ethical Availability Indicator */}
            <div className="mt-[var(--space-6)] flex items-center justify-center gap-[var(--space-2)] rounded-full bg-[var(--color-success-bg)] px-[var(--space-4)] py-[var(--space-2)] border border-[var(--color-emerald-200)]">
                <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping bg-[var(--color-success)] absolute inline-flex h-full w-full rounded-full opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-success)]"></span>
                </span>
                <span className="text-[12px] font-[700] text-[var(--color-emerald-700)]">
                    Aktuell Monteure im Lahn-Dill-Kreis verfügbar
                </span>
            </div>
        </div>
    );
}
