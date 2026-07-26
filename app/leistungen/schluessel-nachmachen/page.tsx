import { Key, ShieldCheck, Car, Check, Clock } from "lucide-react";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import EmergencyCTA from "@/components/EmergencyCTA";
import RelatedServices from "@/components/RelatedServices";
import Breadcrumb from "@/components/Breadcrumb";
import CertBadges from "@/components/trust/CertBadges";
import { generateSharedMetadata } from "@/lib/metadata";

export const revalidate = 86400;

export const metadata = generateSharedMetadata({
  title: "Schlüssel nachmachen Limburg | Ersatzschlüssel",
  description: "Schlüssel nachmachen in Limburg: Haustür-, Sicherheits- & KFZ-Schlüssel mit Transponder. Präzise Meister-Qualität sofort vor Ort.",
  path: "/leistungen/schluessel-nachmachen",
});

export default function SchluesselNachmachenPage() {
  return (
    <div className="bg-[var(--color-surface-base)] text-[var(--color-text-main)] pt-20">
      <Breadcrumb currentSlug="/leistungen/schluessel-nachmachen" currentTitle="Schlüssel nachmachen" />
      
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28 bg-[var(--color-surface-elevated)] border-b border-[var(--color-border-subtle)] overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-70" aria-hidden="true" />
        <div className="absolute top-[-10%] right-[10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[100px] pointer-events-none" />
        
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Schlüsselkopien & Duplikate</span>
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-main)] sm:text-5xl lg:text-6xl">
            Limburger Präzisions-Ersatzschlüssel. <br className="hidden sm:block" />
            <span className="text-gradient-primary relative inline-block mt-2">
              Gefertigt in Minuten.
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-200 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
              </svg>
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-[var(--color-text-body)] sm:text-xl leading-relaxed">
            Vom klassischen Haustürschlüssel bis zum hochkomplexen KFZ-Schlüssel mit Transponder: Unser Limburger Meisterbetrieb <strong>MS Schlüsseldienst Limburg</strong> (Inh. Mina Saad) liefert Ihnen millimetergenaue, verschleißarme Duplikate. Ohne Wartezeit, sofort zum Mitnehmen und mit absoluter Passgarantie.
          </p>
        </div>
      </section>

      {/* ═══ CONTENT SECTION ═══ */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[var(--color-surface-base)]">
        <div className="mx-auto max-w-5xl">
          <div className="prose prose-lg prose-slate mx-auto max-w-none">
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-text-main)] mb-6 text-center">
              Handwerksqualität: Sicherheit erfordert absolute Präzision
            </h2>
            <div className="h-1 w-20 bg-blue-500 rounded-full mt-2 mb-8 mx-auto"></div>
            <p className="text-[var(--color-text-body)] leading-relaxed text-lg text-center max-w-3xl mx-auto">
              Wenn Sie präzise <strong>Schlüssel nachmachen Limburg</strong> wünschen, ist meisterliche Fachkompetenz entscheidend. Ein schlecht kopierter Schlüssel hakt, zerkratzt im Laufe der Zeit den Schließzylinder und kann im schlimmsten Fall abbrechen. Als regionaler Fachbetrieb in Limburg unter Leitung von Mina Saad setzen wir auf modernste Fräsmaschinen und extrem gehärtete Premium-Rohlinge. Das Ergebnis: Ein Duplikat, das dem Original in Sicherheit und Haptik absolut in nichts nachsteht.
            </p>

            <div className="mt-16 grid gap-8 sm:grid-cols-3">
              <div className="glass-card flex flex-col gap-5 p-8 rounded-3xl shadow-sm border border-blue-100/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center">
                <div className="flex h-16 w-16 mx-auto shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm">
                  <Key className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-main)] m-0">Zylinder- & Buntbartschlüssel</h3>
                <p className="text-[var(--color-text-body)] text-base m-0 flex-grow">
                  Der Klassiker für Ihre Immobilie in Limburg, Haus, Wohnung oder Briefkasten. Millimetergenau nachgefräst und sofort einsatzbereit.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-blue-600 font-extrabold text-xl m-0">ab 8,50 €</p>
                </div>
              </div>

              <div className="glass-card flex flex-col gap-5 p-8 rounded-3xl shadow-sm border border-blue-100/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">B2B & Privat</div>
                <div className="flex h-16 w-16 mx-auto shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-main)] m-0">Zertifizierte Sicherheitsschlüssel</h3>
                <p className="text-[var(--color-text-body)] text-base m-0 flex-grow">
                  Kopien von patentgeschützten Hochsicherheitsprofilen fertigen wir absolut rechtssicher und ausschließlich gegen Vorlage der originalen Sicherungskarte.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-blue-600 font-extrabold text-xl m-0">Preis auf Anfrage</p>
                </div>
              </div>

              <div className="glass-card flex flex-col gap-5 p-8 rounded-3xl shadow-sm border border-blue-100/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center">
                <div className="flex h-16 w-16 mx-auto shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm">
                  <Car className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-main)] m-0">KFZ-Schlüssel & Transponder</h3>
                <p className="text-[var(--color-text-body)] text-base m-0 flex-grow">
                  Wir codieren Wegfahrsperren und fräsen moderne KFZ-Schlüssel für nahezu alle Marken direkt bei uns in Limburg. Oftmals deutlich günstiger als im Autohaus.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-blue-600 font-extrabold text-xl m-0">ab 45,00 €</p>
                </div>
              </div>
            </div>

            {/* Werkstatt- & Zylinderfotos */}
            <div className="mt-14 grid grid-cols-3 gap-4">
              {[
                IMAGES.zylinderVermessung,
                IMAGES.schliessblechDetail,
                IMAGES.schlossMechanik,
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
                    sizes="33vw"
                    className="object-cover w-full aspect-square group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            <div className="mt-20 rounded-3xl glass-card p-8 sm:p-10 border border-blue-200/50 shadow-lg relative overflow-hidden bg-gradient-to-br from-white to-blue-50/30 max-w-4xl mx-auto">

              <h2 className="text-2xl font-bold text-[var(--color-text-main)] mb-6 relative z-10 ml-4">
                Der Ablauf in unserer Limburger Meister-Zentrale
              </h2>
              <ul className="mt-8 space-y-6 relative z-10">
                <li className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white/60 transition-colors">
                  <div className="bg-blue-100 p-2 rounded-full mt-1 shrink-0">
                    <Key className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text-main)]">1. Bringen Sie das Original</h3>
                    <p className="mt-2 text-[var(--color-text-body)] text-lg">Besuchen Sie uns in Limburg in der {BUSINESS.address.street}. Bei Sicherheitsschlüsseln ist die Sicherungskarte zwingend erforderlich. Für KFZ-Schlüssel benötigen wir das Fahrzeug vor Ort.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white/60 transition-colors">
                  <div className="bg-green-100 p-2 rounded-full mt-1 shrink-0">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text-main)]">2. Limburger Sofort-Service</h3>
                    <p className="mt-2 text-[var(--color-text-body)] text-lg">Wir schätzen Ihre Zeit. Standard-Schlüssel fräsen wir ohne Voranmeldung direkt vor Ihren Augen in wenigen Minuten.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white/60 transition-colors">
                  <div className="bg-blue-100 p-2 rounded-full mt-1 shrink-0">
                    <Check className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text-main)]">3. Strikte Qualitätskontrolle</h3>
                    <p className="mt-2 text-[var(--color-text-body)] text-lg">Bevor der Schlüssel unsere Werkstatt verlässt, wird er maschinell entgratet und auf 100%ige Passgenauigkeit nachgemessen.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CertBadges />
      <RelatedServices currentServiceId="schluessel-nachmachen" />
      <EmergencyCTA />
    </div>
  );
}
