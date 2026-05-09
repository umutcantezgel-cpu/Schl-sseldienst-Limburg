import { Phone, ShieldCheck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function HeroCTA() {
    return (
        <div className="mt-8 md:mt-12 mb-6 md:mb-10 flex flex-col items-center w-full px-4 sm:px-0 z-10">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md mx-auto">
                <a
                    href={BUSINESS.phone.href}
                    role="button"
                    aria-label={`Notruf wählen für ${BUSINESS.name}`}
                    className="flex w-full items-center justify-center gap-3 bg-gradient-to-r from-[var(--color-blue-primary)] to-[#3377FF] text-white hover:opacity-90 active:scale-[0.97] transition-all rounded-full py-4 px-6 shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-subtle)] hover:-translate-y-0.5 animate-pulse-glow"
                >
                    <Phone className="h-6 w-6 animate-phone-ring" aria-hidden="true" />
                    <div className="flex flex-col items-start">
                        <span className="font-[700] uppercase tracking-widest text-[10px] leading-none opacity-80 mb-1">24/7 Notfall-Zentrale</span>
                        <span className="font-[800] text-[20px] leading-none tabular-nums tracking-tight">{BUSINESS.phone.display}</span>
                    </div>
                </a>
            </div>

            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-[var(--color-text-body)] font-[500] text-sm">
                <span className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[var(--color-blue-primary)]" />
                    Keine versteckten Anfahrtskosten
                </span>
                <span className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[var(--color-blue-primary)]" />
                    100% Festpreis-Garantie
                </span>
            </div>

            {/* Ethical Availability Indicator */}
            <div className="mt-8 flex items-center justify-center gap-2 rounded-full glass px-4 py-2 border border-blue-100 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full opacity-75 bg-[var(--color-blue-primary)] animate-ping"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-blue-primary)]"></span>
                </span>
                <span className="text-[12px] font-[700] text-[var(--color-blue-primary)]">
                    Monteur im Raum Limburg aktuell verfügbar
                </span>
            </div>
        </div>
    );
}
