import { Metadata } from "next";
import { Shield, Lock, Home, CheckCircle2 } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import TrustBar from "@/components/trust/TrustBar";

export const metadata: Metadata = {
  title: "Einbruchschutz & Sicherheitstechnik | Fachberatung Lahn-Dill",
  description: "Kostenlose Fachberatung für Einbruchschutz in Wetzlar und Umgebung. Staatlich geförderte Sicherheitstechnik vom Fachbetrieb.",
};

export default function EinbruchschutzPage() {
  return (
    <>
      <div className="bg-[var(--color-surface-primary)] pt-[var(--space-10)] pb-[var(--space-12)] mt-[64px] lg:mt-[72px]">
        <section className="px-[var(--section-px)]">
           <div className="mx-auto max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-[var(--space-10)] items-start">
                 {/* Content Side */}
                 <div className="max-w-xl">
                    <div className="inline-flex items-center gap-[var(--space-2)] px-[var(--space-3)] py-[var(--space-1)] rounded-full bg-[var(--color-brand-light)] text-[var(--color-brand)] font-[600] text-sm mb-[var(--space-6)]">
                       <Shield className="h-4 w-4" aria-hidden="true" />
                       Schutz vor Einbrechern
                    </div>
                    <h1 
                      className="font-[800] text-[var(--color-text-primary)] leading-[1.1] tracking-tight mb-[var(--space-6)] text-balance"
                      style={{ fontSize: 'var(--text-hero)' }}
                    >
                       Machen Sie Ihr Zuhause <span className="text-[var(--color-brand)]">sicher.</span>
                    </h1>
                    <p 
                      className="font-[500] text-[var(--color-text-body)] mb-[var(--space-8)] text-balance"
                      style={{ fontSize: 'var(--text-lead)', lineHeight: 'var(--leading-lead)' }}
                    >
                       Alle 5 Minuten geschieht in Deutschland ein Einbruch. Mit moderner Sicherheitstechnik sinkt das Risiko um über 80%. Vereinbaren Sie jetzt eine kostenlose Erstberatung.
                    </p>
                    
                    <ul className="space-y-[var(--space-4)] mb-[var(--space-8)]">
                       {[
                          "Kostenlose Vor-Ort-Analyse in Wetzlar & Umgebung",
                          "Mechanischer & elektronischer Einbruchschutz",
                          "Zertifizierter Partner hochwertiger Schließtechnik",
                          "Transparente Kostenplanung vorab"
                       ].map((item, i) => (
                          <li key={i} className="flex items-start gap-[var(--space-3)] text-[var(--color-text-primary)] font-[500]" style={{ fontSize: 'var(--text-body)' }}>
                             <CheckCircle2 className="h-6 w-6 text-[var(--color-success)] shrink-0" aria-hidden="true" />
                             <span>{item}</span>
                          </li>
                       ))}
                    </ul>
                 </div>

                 {/* Form Side */}
                 <div className="w-full relative z-10 mt-[var(--space-6)] lg:mt-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-brand)]/5 to-[var(--color-brand)]/10 rounded-3xl transform rotate-1 scale-105 -z-10" aria-hidden="true"></div>
                    <ContactForm />
                 </div>
              </div>
           </div>
        </section>
      </div>
      <TrustBar />
    </>
  );
}
