import { ShieldCheck, Lock, Bell, Eye, Check, Fingerprint, Lightbulb, PenTool } from "lucide-react";
import Image from "next/image";
import EmergencyCTA from "@/components/EmergencyCTA";
import RelatedServices from "@/components/RelatedServices";
import Breadcrumbs from "@/components/Breadcrumbs";
import CertBadges from "@/components/trust/CertBadges";
import { IMAGES } from "@/lib/images";
import { generateHowToSchema } from "@/lib/schema";
import { getFAQSchema } from "@/lib/faqSchema";
import { generateSharedMetadata } from "@/lib/metadata";

export const revalidate = 86400;

export const metadata = generateSharedMetadata({
  title: "Sicherheitstechnik Limburg | Einbruchschutz MS",
  description: "Zertifizierte Sicherheitstechnik in Limburg an der Lahn durch MS Schlüsseldienst Limburg. Maßgeschneiderter Einbruchschutz, Alarmanlagen & Videoüberwachung.",
  path: "/leistungen/sicherheitstechnik",
});

export default function SicherheitstechnikPage() {
  return (
    <div className="bg-[var(--color-surface-base)] text-[var(--color-text-main)] pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Sicherheitstechnik & Einbruchschutz",
            "provider": {
              "@type": "LocalBusiness",
              "name": "MS Schlüsseldienst Limburg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Limburg an der Lahn",
                "addressRegion": "Hessen",
                "addressCountry": "DE"
              }
            },
            "areaServed": "Limburg-Weilburg",
            "description": "Zertifizierte Planung und Installation von Sicherheitstechnik, Alarmanlagen, Videoüberwachung und mechanischem Einbruchschutz in Limburg."
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQSchema([
            { question: "Welcher Einbruchschutz ist für mein Haus in Limburg sinnvoll?", answer: "Wir empfehlen eine Kombination aus mechanischem Grundschutz (z.B. ABUS Panzerriegel oder Fenstersicherungen) und elektronischer Überwachung. Wir beraten Sie dazu gerne direkt vor Ort in Limburg." },
            { question: "Bieten Sie kostenlose Sicherheitsberatungen an?", answer: "Ja, wir bieten im Landkreis Limburg-Weilburg unverbindliche Sicherheits-Audits für Ihre Immobilie an, um Schwachstellen aufzudecken." },
            { question: "Installieren Sie auch smarte Alarmanlagen?", answer: "Selbstverständlich. Wir verbauen modernste, per App steuerbare Funk- und Hybrid-Alarmanlagen, die auf Wunsch direkt mit Ihrem Smartphone oder einer Notrufleitstelle verbunden sind." },
          ])),
        }}
      />
      
      <Breadcrumbs items={[{ name: "Leistungen", href: "/" }, { name: "Sicherheitstechnik", href: "/leistungen/sicherheitstechnik" }]} />
      
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28 bg-[var(--color-surface-elevated)] border-b border-[var(--color-border-subtle)] overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-70" aria-hidden="true" />
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[100px] pointer-events-none" />
        
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Zertifizierter Einbruchschutz</span>
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-main)] sm:text-5xl lg:text-6xl mb-6">
            Sicherheitstechnik & <br className="hidden sm:block" />
            <span className="text-gradient-primary relative inline-block mt-2">
              Einbruchschutz Limburg
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-200 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
              </svg>
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[var(--color-text-body)] sm:text-xl leading-relaxed">
            Überlassen Sie Ihre Sicherheit in Limburg-Weilburg nicht dem Zufall. Als führender regionaler Meisterbetrieb (Inh. Mina Saad) analysieren wir Schwachstellen präzise und installieren hochmoderne, maßgeschneiderte Schutzkonzepte – von der Altstadt bis ins Industriegebiet.
          </p>
        </div>
      </section>

      {/* ═══ CONTENT SECTION ═══ */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[var(--color-surface-base)]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-text-main)] sm:text-4xl">
              Intelligente Sicherheitstechnik der nächsten Generation
            </h2>
            <div className="h-1 w-24 bg-blue-500 rounded-full mt-6 mb-6 mx-auto"></div>
            <p className="mt-4 text-lg text-[var(--color-text-body)] max-w-3xl mx-auto leading-relaxed">
              Zertifizierte <strong>Sicherheitstechnik Limburg</strong> ist eine absolute Vertrauenssache. <strong>MS Schlüsseldienst Limburg</strong> unter Leitung von Mina Saad integriert in Limburg und Umgebung ausschließlich VdS-zertifizierte High-End-Komponenten von Premium-Herstellern wie ABUS, BKS oder KESO, die potenziellen Tätern keine Angriffsfläche bieten.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="glass-card flex flex-col p-8 rounded-3xl shadow-sm border border-blue-100/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm mb-6">
                <Lock className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-3">Mechanischer Einbruchschutz</h3>
              <p className="text-[var(--color-text-body)] leading-relaxed mb-6 text-lg">
                Der fundamentale Basis-Schutz gegen Aufhebeln und physische Gewalt. Wir rüsten Ihre Limburger Immobilie mit Panzerriegeln, Zusatzschlössern und Pilzkopfzapfenverriegelungen auf dem höchsten Widerstandsgrad nach.
              </p>
              <ul className="space-y-4 mt-auto">
                <li className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-blue-600" /> <span className="text-[var(--color-text-main)] font-medium">Premium Tür- und Fenstersicherungen (ABUS, IKON)</span></li>
                <li className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-blue-600" /> <span className="text-[var(--color-text-main)] font-medium">Querriegel & Stangenschlösser für maximale Stabilität</span></li>
                <li className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-blue-600" /> <span className="text-[var(--color-text-main)] font-medium">Sicherheitsbeschläge mit Kernziehschutz</span></li>
              </ul>
            </div>

            <div className="glass-card flex flex-col p-8 rounded-3xl shadow-sm border border-blue-100/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm mb-6">
                <Bell className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-3">Smarte Alarmanlagen</h3>
              <p className="text-[var(--color-text-body)] leading-relaxed mb-6 text-lg">
                Präventive Abschreckung und sofortige Alarmierung. Unsere Funk- und Hybrid-Alarmanlagen erkennen Eindringlinge, bevor sie das Gebäude betreten, und melden Vorfälle direkt auf Ihr Smartphone.
              </p>
              <ul className="space-y-4 mt-auto">
                <li className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-blue-600" /> <span className="text-[var(--color-text-main)] font-medium">Intelligente Außenhautüberwachung mit Sabotageschutz</span></li>
                <li className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-blue-600" /> <span className="text-[var(--color-text-main)] font-medium">Zertifizierte, manipulationssichere Funk-Systeme</span></li>
                <li className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-blue-600" /> <span className="text-[var(--color-text-main)] font-medium">App-gesteuerte Statusüberwachung (24/7 von überall)</span></li>
              </ul>
            </div>

            <div className="glass-card flex flex-col p-8 rounded-3xl shadow-sm border border-blue-100/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-3">High-End Videoüberwachung</h3>
              <p className="text-[var(--color-text-body)] leading-relaxed mb-6 text-lg">
                Lückenlose visuelle Kontrolle für Privathäuser in Limburg oder Gewerbegebiete an der A3. Gestochen scharfe Nachtsicht-Kameras mit KI filtern Fehlalarme und sichern Beweismaterial zuverlässig.
              </p>
              <ul className="space-y-4 mt-auto">
                <li className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-blue-600" /> <span className="text-[var(--color-text-main)] font-medium">IP-Kameras mit 4K-Auflösung & Infrarot-Nachtsicht</span></li>
                <li className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-blue-600" /> <span className="text-[var(--color-text-main)] font-medium">DSGVO-konforme, verschlüsselte lokale Speicherung</span></li>
                <li className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-blue-600" /> <span className="text-[var(--color-text-main)] font-medium">Live-Zugriff in Echtzeit via sicherer Mobile App</span></li>
              </ul>
            </div>

            <div className="glass-card flex flex-col p-8 rounded-3xl shadow-sm border border-blue-100/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm mb-6">
                <Fingerprint className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-3">Zutrittskontrolle & Biometrie</h3>
              <p className="text-[var(--color-text-body)] leading-relaxed mb-6 text-lg">
                Moderne Schließkonzepte ohne physische Schlüssel. Steuern und protokollieren Sie exakt, wer wann welches Gebäude in Limburg betreten darf – ideal für Arztpraxen, Kanzleien und vernetzte Wohngebäude.
              </p>
              <ul className="space-y-4 mt-auto">
                <li className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-blue-600" /> <span className="text-[var(--color-text-main)] font-medium">RFID-Transponder, Smartphone-Keys & Biometrie</span></li>
                <li className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-blue-600" /> <span className="text-[var(--color-text-main)] font-medium">Sofortige Sperrung verlorener Zugangsmedien per Klick</span></li>
                <li className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-blue-600" /> <span className="text-[var(--color-text-main)] font-medium">Skalierbar für jede Unternehmensgröße in der Region</span></li>
              </ul>
            </div>
          </div>

          {/* Authentische Arbeitsfoto-Galerie */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              IMAGES.sprechanlageArbeit,
              IMAGES.schliessblechDetail,
              IMAGES.schlossMontage,
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
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover w-full aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mt-24 rounded-3xl glass-card p-8 sm:p-12 border border-blue-200/50 shadow-lg relative overflow-hidden bg-gradient-to-br from-white to-blue-50/40">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/4 pointer-events-none" />
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-text-main)] text-center mb-16 relative z-10">Unser Limburger Premium-Prozess:<br/> Von der Analyse zur Installation</h2>
            
            <div className="grid gap-12 md:grid-cols-3 relative z-10">
              <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="absolute left-1/2 top-10 w-full h-[2px] bg-blue-100 hidden md:block">
                  <div className="h-full bg-blue-600 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </div>
                <div className="relative flex flex-col items-center text-center z-10 group">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-blue-600 font-bold text-2xl mb-6 shadow-md border-4 border-blue-50 group-hover:border-blue-200 transition-all duration-300 group-hover:scale-110">
                    <Lightbulb className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-3">1. Vor-Ort-Sicherheitsaudit</h3>
                  <p className="text-[var(--color-text-body)] leading-relaxed text-lg">Unsere Experten evaluieren direkt bei Ihnen in Limburg systematisch alle potenziellen Einstiegswege und Schwachstellen Ihrer Immobilie.</p>
                </div>
              </div>

              <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="absolute left-1/2 top-10 w-full h-[2px] bg-blue-100 hidden md:block"></div>
                <div className="relative flex flex-col items-center text-center z-10 group">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-2xl mb-6 shadow-lg border-4 border-blue-50 group-hover:border-blue-200 transition-all duration-300 group-hover:scale-110">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-3">2. Maßgeschneidertes Konzept</h3>
                  <p className="text-[var(--color-text-body)] leading-relaxed text-lg">Sie erhalten einen detaillierten, herstellerunabhängigen Maßnahmenkatalog mit transparentem Festpreisangebot – ohne versteckte Kosten.</p>
                </div>
              </div>

              <div className="relative">
                <div className="relative flex flex-col items-center text-center z-10 group">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-blue-600 font-bold text-2xl mb-6 shadow-md border-4 border-blue-50 group-hover:border-blue-200 transition-all duration-300 group-hover:scale-110">
                    <PenTool className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-3">3. Fachgerechte Montage</h3>
                  <p className="text-[var(--color-text-body)] leading-relaxed text-lg">Saubere, termingerechte Installation durch unsere eigenen, zertifizierten Limburger Techniker inklusive ausführlicher Einweisung in das System.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <CertBadges />
      <RelatedServices currentServiceId="sicherheitstechnik" />
      <EmergencyCTA />
    </div>
  );
}
