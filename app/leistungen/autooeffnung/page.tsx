import { Car, ShieldCheck, Clock, Check, Phone } from "lucide-react";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import EmergencyCTA from "@/components/EmergencyCTA";
import RelatedServices from "@/components/RelatedServices";
import Breadcrumb from "@/components/Breadcrumb";
import CertBadges from "@/components/trust/CertBadges";
import { generateSharedMetadata } from "@/lib/metadata";

export const metadata = generateSharedMetadata({
  title: "Autoöffnung Limburg | Zerstörungsfreie KFZ-Öffnung | Schlüsseldienst",
  description: "Schlüssel im Auto? Verschlossen? Unser Limburger Spezial-Team von MS Schlüsseldienst Limburg öffnet KFZ aller Marken zerstörungsfrei. In 15–30 Minuten vor Ort. Festpreis-Garantie.",
  path: "/leistungen/autooeffnung",
});

export default function AutooeffnungPage() {
  return (
    <div className="bg-[var(--color-surface-base)] text-[var(--color-text-main)] pt-20">
      <Breadcrumb currentSlug="/leistungen/autooeffnung" currentTitle="Autoöffnung" />
      
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28 bg-[var(--color-surface-elevated)] border-b border-[var(--color-border-subtle)] overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-70" aria-hidden="true" />
        <div className="absolute top-[-10%] right-[10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[100px] pointer-events-none" />
        
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Fahrzeugöffnung in Limburg</span>
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-main)] sm:text-5xl lg:text-6xl">
            Zerstörungsfreie <br className="hidden sm:block" />
            <span className="text-gradient-primary relative inline-block mt-2">
              Autoöffnung vor Ort.
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-200 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
              </svg>
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-[var(--color-text-body)] sm:text-xl leading-relaxed">
            Schlüssel im Fahrzeug eingeschlossen, Kofferraum blockiert oder Zentralverriegelung defekt? Unser zertifiziertes Spezial-Team für KFZ-Öffnungen in Limburg (Inh. Mina Saad) ist in <strong>15–30 Minuten</strong> bei Ihnen. Wir garantieren absolute Festpreise und lackschonende Öffnung dank High-End-Technik.
          </p>
        </div>
      </section>

      {/* ═══ CONTENT SECTION ═══ */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[var(--color-surface-base)]">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg prose-slate mx-auto max-w-none">
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-text-main)] mb-6">
              Ausgesperrt am Straßenrand? Keine Panik. Limburgs Meister-Notruf eilt zur Hilfe.
            </h2>
            <div className="h-1 w-20 bg-blue-500 rounded-full mt-2 mb-8"></div>
            <p className="text-[var(--color-text-body)] leading-relaxed text-lg">
              Ein Sekundenbruchteil der Unachtsamkeit genügt: Der Autoschlüssel liegt noch auf dem Sitz, steckt im Zündschloss, oder die Elektronik verriegelt den Wagen selbstständig. Stehen Sie nun bei Wind und Wetter vor verschlossener Tür, ist rasche und vor allem hochprofessionelle Hilfe unabdingbar. Als Ihr zertifizierter Fachbetrieb <strong>MS Schlüsseldienst Limburg</strong> für KFZ-Öffnungen in Limburg und dem gesamten Landkreis befreien wir Sie aus dieser Notsituation – 24/7, diskret und absolut schadensfrei.
            </p>

            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              <div className="glass-card flex gap-5 p-8 rounded-3xl shadow-sm border border-blue-100/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm">
                  <Car className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-2">Spezialisiert auf alle Marken</h3>
                  <p className="text-[var(--color-text-body)] text-base leading-relaxed">
                    Ob VW, Audi, BMW, Mercedes oder hochkomplexe Schließsysteme modernster Premium-Hersteller und E-Fahrzeuge: Unser Limburger Einsatzfahrzeug ist mit modernster Diagnose- und Entriegelungstechnik für restlos alle Fabrikate gerüstet.
                  </p>
                </div>
              </div>

              <div className="glass-card flex gap-5 p-8 rounded-3xl shadow-sm border border-blue-100/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-2">Garantiert Zerstörungsfrei</h3>
                  <p className="text-[var(--color-text-body)] text-base leading-relaxed">
                    Wir verurteilen laienhafte Brachialmethoden. Durch den Präzisionseinsatz von lackschonenden Teflonkeilen und filigranen Lockpicking-Werkzeugen garantieren wir eine Öffnung ohne Kratzer am Lack oder Schäden an der Bordelektronik.
                  </p>
                </div>
              </div>
            </div>

            {/* Einsatzfahrzeug & Arbeitsfoto */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                IMAGES.notfallAnruf,
                IMAGES.turoeffnungWerkzeug,
              ].map((img) => (
                <div key={img.src} className="overflow-hidden rounded-2xl shadow-md group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    title={img.title}
                    width={img.width}
                    height={img.height}
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover w-full aspect-[16/10] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            <div className="mt-20 rounded-3xl glass-card p-8 sm:p-10 border border-blue-200/50 shadow-lg relative overflow-hidden bg-gradient-to-br from-white to-blue-50/30">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
              <h2 className="text-2xl font-bold text-[var(--color-text-main)] mb-6 relative z-10 ml-4">
                Unser Limburger Ablauf: Transparent, schnell & kompromisslos sicher
              </h2>
              <ul className="mt-8 space-y-6 relative z-10">
                <li className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white/60 transition-colors">
                  <div className="bg-blue-100 p-2 rounded-full mt-1 shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[var(--color-text-main)]">1. Sofort-Kontakt zum Meisterbetrieb</h4>
                    <p className="mt-2 text-[var(--color-text-body)] text-lg">Rufen Sie unseren lokalen Limburger Notruf an. Nennen Sie uns kurz Ihren genauen Standort, das Fahrzeugmodell und das Baujahr.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white/60 transition-colors">
                  <div className="bg-green-100 p-2 rounded-full mt-1 shrink-0">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[var(--color-text-main)]">2. Unumstößliche Festpreis-Garantie</h4>
                    <p className="mt-2 text-[var(--color-text-body)] text-lg">Wir analysieren den Aufwand in Sekunden und nennen Ihnen noch am Telefon einen verbindlichen, fixen Endpreis. Es gibt keine versteckten Kosten.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white/60 transition-colors">
                  <div className="bg-blue-100 p-2 rounded-full mt-1 shrink-0">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[var(--color-text-main)]">3. Priorisierte Limburger Anfahrt</h4>
                    <p className="mt-2 text-[var(--color-text-body)] text-lg">Durch unsere regionale Präsenz lassen wir Sie nicht warten. In Limburg und Umgebung sind wir garantiert innerhalb von <strong>15 bis 30 Minuten</strong> an Ihrem Fahrzeug.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white/60 transition-colors">
                  <div className="bg-gray-100 p-2 rounded-full mt-1 shrink-0">
                    <ShieldCheck className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[var(--color-text-main)]">4. Präzisions-Öffnung</h4>
                    <p className="mt-2 text-[var(--color-text-body)] text-lg">Unser Spezialist öffnet Ihr Auto mit chirurgischer Genauigkeit. Sie haben sofort wieder vollen Zugriff und setzen Ihre Fahrt nahtlos fort.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CertBadges />
      <RelatedServices currentServiceId="autooeffnung" />
      <EmergencyCTA />
    </div>
  );
}
