import { Key, Building, ShieldCheck, Check, ClipboardCheck } from "lucide-react";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import EmergencyCTA from "@/components/EmergencyCTA";
import RelatedServices from "@/components/RelatedServices";
import Breadcrumb from "@/components/Breadcrumb";
import CertBadges from "@/components/trust/CertBadges";
import { generateSharedMetadata } from "@/lib/metadata";

export const metadata = generateSharedMetadata({
  title: "Schließanlagen Limburg | B2B & Privat | Schlüsseldienst Limburg",
  description: "Planung, Installation & Wartung hochsicherer Schließanlagen für Limburg und Umgebung durch MS Schlüsseldienst Limburg. Mechanisch & elektronisch. Kostenfreie Beratung.",
  path: "/leistungen/schliessanlagen",
});

export default function SchliessanlagenPage() {
  return (
    <div className="bg-[var(--color-surface-base)] text-[var(--color-text-main)] pt-20">
      <Breadcrumb currentSlug="/leistungen/schliessanlagen" currentTitle="Schließanlagen" />
      
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28 bg-[var(--color-surface-elevated)] border-b border-[var(--color-border-subtle)] overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-70" aria-hidden="true" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[100px] pointer-events-none" />
        
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Sicherheit für Ihr Gebäude</span>
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-main)] sm:text-5xl lg:text-6xl">
            Intelligente <br className="hidden sm:block" />
            <span className="text-gradient-primary relative inline-block mt-2">
              Schließanlagen in Limburg.
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-200 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
              </svg>
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-[var(--color-text-body)] sm:text-xl leading-relaxed">
            Vom privaten Einfamilienhaus bis zum gewerblichen Großobjekt im Limburger Industriegebiet: Als lokaler Meisterbetrieb <strong>MS Schlüsseldienst Limburg</strong> planen und installieren wir manipulationssichere, mechanische sowie elektronische Schließsysteme. Für Ihre kompromisslose Zugangskontrolle.
          </p>
        </div>
      </section>

      {/* ═══ CONTENT SECTION ═══ */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[var(--color-surface-base)]">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg prose-slate mx-auto max-w-none">
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-text-main)] mb-6">
              Wer hat Zutritt? Sie entscheiden. Unser Limburger Fachbetrieb setzt es um.
            </h2>
            <div className="h-1 w-20 bg-blue-500 rounded-full mt-2 mb-8"></div>
            <p className="text-[var(--color-text-body)] leading-relaxed text-lg">
              Ein unkontrolliertes Schlüsselchaos in Ihrem Gebäude ist ein extremes Sicherheits- und Haftungsrisiko. Eine moderne, maßgefertigte Schließanlage löst dieses Problem ein für alle Mal durch ein intelligentes Rechte-Konzept. Mit einem einzigen Hauptschlüssel haben Sie als Eigentümer die volle Kontrolle, während Angestellte, Dienstleister oder Mieter nur exakt die Räumlichkeiten betreten können, für die sie berechtigt sind. <strong>Mina Saad</strong> und das Team aus Limburg sorgen dafür, dass Ihr System lückenlos funktioniert.
            </p>

            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              <div className="glass-card flex gap-5 p-8 rounded-3xl shadow-sm border border-blue-100/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm">
                  <Building className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-2">B2B & Immobilienverwaltung</h3>
                  <p className="text-[var(--color-text-body)] text-base leading-relaxed">
                    Ob Limburger Produktionshalle, medizinisches Versorgungszentrum oder weitläufige Wohnanlage: Wir konzipieren extrem skalierbare Anlagen (Z/HS/GHS), die organisch mit Ihrer Unternehmensstruktur mitwachsen und strengsten VdS-Sicherheitszertifizierungen genügen.
                  </p>
                </div>
              </div>

              <div className="glass-card flex gap-5 p-8 rounded-3xl shadow-sm border border-blue-100/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm">
                  <Key className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-2">Elektronik & Mechanik vereint</h3>
                  <p className="text-[var(--color-text-body)] text-base leading-relaxed">
                    Wir kombinieren Hochsicherheits-Mechanik mit smarter Elektronik. Ein Mitarbeiter hat den Schlüssel verloren? Bei unseren elektronischen Schließzylindern sperren wir den Transponder per Klick sofort aus. Kein teurer Anlagenaustausch, nur absolute Sicherheit.
                  </p>
                </div>
              </div>
            </div>

            {/* Arbeitsfotos: Schließanlagen & Zylinder */}
            <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                IMAGES.zylinderVermessung,
                IMAGES.zylinderInstallation,
                IMAGES.schlossMechanik,
                IMAGES.zylinderMontage,
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
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover w-full aspect-square group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            <div className="mt-20 rounded-3xl glass-card p-8 sm:p-10 border border-blue-200/50 shadow-lg relative overflow-hidden bg-gradient-to-br from-white to-blue-50/30">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
              <h2 className="text-2xl font-bold text-[var(--color-text-main)] mb-6 relative z-10 ml-4">
                Der Limburger Meister-Weg: In 4 Schritten zu Ihrem System
              </h2>
              <ul className="mt-8 space-y-6 relative z-10">
                <li className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white/60 transition-colors">
                  <div className="bg-blue-100 p-2 rounded-full mt-1 shrink-0">
                    <ClipboardCheck className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[var(--color-text-main)]">1. Sicherheits-Audit direkt in Limburg</h4>
                    <p className="mt-2 text-[var(--color-text-body)] text-lg">Wir besichtigen Ihr Objekt vollkommen kostenfrei und diskret. Wir analysieren Schwachstellen und definieren Ihre strengen Sicherheitsanforderungen.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white/60 transition-colors">
                  <div className="bg-green-100 p-2 rounded-full mt-1 shrink-0">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[var(--color-text-main)]">2. Digitales Rechtekonzept</h4>
                    <p className="mt-2 text-[var(--color-text-body)] text-lg">Unser Meisterbetrieb entwirft einen logischen, zukunftssicheren Schließplan, der exakt auf Ihre internen Hierarchien und Raumnutzungen abgestimmt ist.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white/60 transition-colors">
                  <div className="bg-blue-100 p-2 rounded-full mt-1 shrink-0">
                    <ShieldCheck className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[var(--color-text-main)]">3. Kompromisslose Premium-Fertigung</h4>
                    <p className="mt-2 text-[var(--color-text-body)] text-lg">Wir verbauen ausschließlich manipulationssichere Zylinder renommierter Weltmarktführer. Höchster Bohrschutz und patentierter Kopierschutz sind Standard.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white/60 transition-colors">
                  <div className="bg-gray-100 p-2 rounded-full mt-1 shrink-0">
                    <Building className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[var(--color-text-main)]">4. Fachgerechte Limburger Installation</h4>
                    <p className="mt-2 text-[var(--color-text-body)] text-lg">Unser lokales Techniker-Team übernimmt die blitzsaubere Montage, die elektronische Programmierung sowie die rechtssichere Schlüsselübergabe.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CertBadges />
      <RelatedServices currentServiceId="schliessanlagen" />
      <EmergencyCTA />
    </div>
  );
}
