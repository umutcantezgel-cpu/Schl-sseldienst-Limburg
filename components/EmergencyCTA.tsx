import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

interface EmergencyCTAProps {
  title?: string;
  subtitle?: string;
  locationName?: string;
}

export default function EmergencyCTA({ title, subtitle, locationName }: EmergencyCTAProps = {}) {
  const displayTitle = title || (locationName ? `Ausgesperrt in ${locationName}? Wir sind in 15–30 Minuten vor Ort.` : "Ausgesperrt in Limburg? Wir sind in 15–30 Minuten vor Ort.");
  const displaySubtitle = subtitle || "Ihr TV-geprüfter Meisterbetrieb. 24/7 erreichbar – mit kompromissloser Festpreis-Garantie.";

  return (
    <section className="relative bg-gradient-to-br from-[var(--color-blue-light)] via-white to-[var(--color-blue-light)] px-6 md:px-12 py-20 md:py-32 overflow-hidden border-t border-[var(--color-border-subtle)]">
      {/* Ambient blue glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(0,82,255,0.06)_0%,transparent_70%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h2
          className="font-[700] text-[var(--color-text-main)] mb-4"
          style={{
            fontSize: 'var(--text-h2)',
            lineHeight: 'var(--leading-h)',
            letterSpacing: 'var(--tracking-heading)',
          }}
        >
          {displayTitle}
        </h2>
        <p
          className="mt-8 text-[var(--color-text-body)] font-[400] mb-8"
          style={{
            fontSize: 'var(--text-lead)',
            lineHeight: 'var(--leading-lead)',
          }}
        >
          {displaySubtitle}
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href={BUSINESS.phone.href}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--color-brand-red)] to-[#D62828] text-white font-extrabold px-8 py-4 rounded-[var(--radius-lg)] shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-subtle)] hover:-translate-y-1 hover:opacity-90 transition-all duration-300 active:scale-[0.97] animate-pulse-glow"
          >
            <Phone className="h-6 w-6" aria-hidden="true" />
            <div className="flex flex-col items-start">
              <span className="text-lg leading-none mb-1">Jetzt Notruf wählen</span>
              <span className="text-base leading-none opacity-80">{BUSINESS.phone.display}</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
