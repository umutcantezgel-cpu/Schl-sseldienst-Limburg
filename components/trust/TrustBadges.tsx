import { Clock, ShieldCheck, Check } from "lucide-react";

export default function TrustBadges() {
    return (
        <div role="list" aria-label="Vertrauensvorteile" className="flex flex-row flex-wrap items-center justify-center gap-4 md:gap-5 mt-6">
            <div role="listitem" className="flex items-center gap-3 text-sm font-medium text-[var(--color-text-main)] glass-card px-5 py-2.5 !rounded-full">
                <Clock className="h-4 w-4 text-[var(--color-blue-primary)] shrink-0" aria-hidden="true" />
                <span className="whitespace-nowrap">15–30 Min. Soforthilfe</span>
            </div>
            <div role="listitem" className="flex items-center gap-3 text-sm font-medium text-[var(--color-text-main)] glass-card px-5 py-2.5 !rounded-full">
                <ShieldCheck className="h-4 w-4 text-[var(--color-blue-primary)] shrink-0" aria-hidden="true" />
                <span className="whitespace-nowrap">100% Festpreis-Garantie</span>
            </div>
            <div role="listitem" className="flex items-center gap-3 text-sm font-medium text-[var(--color-text-main)] glass-card px-5 py-2.5 !rounded-full">
                <Check className="h-4 w-4 text-[var(--color-blue-primary)] shrink-0" aria-hidden="true" />
                <span className="whitespace-nowrap">TV-Geprüfter Meisterbetrieb</span>
            </div>
        </div>
    );
}
