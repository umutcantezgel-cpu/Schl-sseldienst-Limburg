import { ShieldCheck, Phone, ArrowRight } from "lucide-react";
import EmergencyCTA from "@/components/EmergencyCTA";
import dynamic from "next/dynamic";
import Link from "next/link";

const PricingCalculator = dynamic(() => import("@/components/pricing/PricingCalculator"), {
  loading: () => (
    <div className="w-full max-w-2xl mx-auto h-[600px] glass-card animate-pulse flex items-center justify-center p-8 mt-12">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-blue-100"></div>
        <div className="h-6 w-48 bg-blue-100 rounded-full"></div>
        <div className="h-4 w-32 bg-blue-100 rounded-full mt-2"></div>
      </div>
    </div>
  )
});
import PricingFAQ, { faqs } from "@/components/pricing/PricingFAQ";
import Breadcrumbs from "@/components/Breadcrumbs";
import { generateSharedMetadata } from "@/lib/metadata";
import { generateServiceSchema } from "@/lib/serviceSchema";
import { getFAQSchema } from "@/lib/faqSchema";

const mainServicesSchema = [
  generateServiceSchema({ title: "Türöffnung", description: "Zerstörungsfreie Türöffnung", url: "/leistungen/turoeffnung", price: 59 }),
  generateServiceSchema({ title: "Autoöffnung", description: "Schonende Autoöffnung", url: "/leistungen/autooeffnung", price: 80 })
];
export const metadata = generateSharedMetadata({
  title: "Preise & Kosten | Schlüsseldienst Limburg – Transparente Festpreise",
  description: "Keine bösen Überraschungen. Faire, garantierte Festpreise für Türöffnungen und Notdienste in Limburg und Umgebung. Berechnen Sie Ihren Preis direkt online.",
  path: "/preise",
});

export default function PreisePage() {
  const breadcrumbs = [
    { name: "Preise", href: "/preise" }
  ];

  return (
    <div className="bg-[var(--color-surface-base)] text-[var(--color-text-main)] pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mainServicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* ═══ HERO SECTION ═══ */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 lg:pt-36 pb-24 bg-[var(--color-surface-base)] overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" aria-hidden="true" />
        <div className="absolute top-[-20%] left-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/40 blur-[120px] pointer-events-none" />
        
        <div className="mx-auto max-w-4xl text-center relative z-10 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-100 bg-white/60 mb-6 md:mb-10 shadow-sm text-blue-800 text-sm font-semibold tracking-wide uppercase">Fairness als Prinzip</span>
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-main)] sm:text-5xl lg:text-6xl leading-[1.1] text-balance">
            Transparenz, die man <br className="hidden md:block" />
            <span className="text-gradient-primary relative inline-block mt-2 md:mt-4">
              rechnen kann
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-200 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
              </svg>
            </span>.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-[var(--color-text-body)] md:text-xl leading-relaxed text-balance">
            Als alteingesessener Betrieb unter der Leitung von Mina Saad (MS Schlüsseldienst Limburg) legen wir höchsten Wert auf Ehrlichkeit. Bei uns erfahren Sie den verbindlichen Festpreis <strong>bevor</strong> wir mit der Arbeit beginnen. Ohne wenn und aber.
          </p>
        </div>
      </section>

      {/* ═══ CALCULATOR SECTION ═══ */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 lg:pb-32 relative z-20 -mt-16 md:-mt-24">
        <div className="max-w-4xl mx-auto">
          <PricingCalculator />
        </div>
      </section>

      {/* ═══ FAIRNESS GUARANTEE ═══ */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 lg:py-32 bg-[var(--color-surface-elevated)] border-y border-[var(--color-border-subtle)]">
        <div className="mx-auto max-w-4xl">
          <div className="glass-card p-8 md:p-12 text-center hover-lift transition-all duration-300 relative overflow-hidden flex flex-col items-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-8 md:mb-10 border border-blue-100 shadow-sm">
              <ShieldCheck className="h-10 w-10" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--color-text-main)] sm:text-4xl">
              Das MS Schlüsseldienst Versprechen
            </h2>
            <p className="mt-6 md:mt-8 text-[var(--color-text-body)] leading-relaxed max-w-2xl mx-auto text-lg md:text-xl text-balance">
              Unsere Preistabellen sind keine lockenden Platzhalter, sondern echte Endpreise. <strong>Die gesetzliche Mehrwertsteuer und alle Anfahrtskosten innerhalb unseres Einzugsgebietes sind bereits vollständig enthalten.</strong> Zahlen Sie bequem und sicher bei unserem Monteur per Karte oder in Bar – mit ordentlicher Rechnung.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ FAQ SECTION ═══ */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 lg:py-32 bg-[var(--color-surface-base)]">
        <PricingFAQ />
      </section>

      <EmergencyCTA />
    </div>
  );
}
