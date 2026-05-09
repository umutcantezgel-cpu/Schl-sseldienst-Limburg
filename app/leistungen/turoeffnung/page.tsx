import { DoorOpen, Check, Clock, ShieldCheck, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import EmergencyCTA from "@/components/EmergencyCTA";
import RelatedServices from "@/components/RelatedServices";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProcessSteps from "@/components/trust/ProcessSteps";
import CertBadges from "@/components/trust/CertBadges";
import { generateHowToSchema } from "@/lib/schema";
import { getFAQSchema } from "@/lib/faqSchema";
import { generateSharedMetadata } from "@/lib/metadata";

export const metadata = generateSharedMetadata({
  title: "Türöffnung Limburg | 24/7 Schlüsselnotdienst | 100% Festpreis",
  description: "Ausgesperrt in Limburg an der Lahn? Der lokale Meister-Schlüsseldienst MS Schlüsseldienst Limburg öffnet Ihre Tür in 15-30 Min. Zerstörungsfrei, fair & zum garantierten Festpreis.",
  path: "/leistungen/turoeffnung",
});

export default function TuroeffnungPage() {
  return (
    <div className="bg-[var(--color-surface-base)] text-[var(--color-text-main)] pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateHowToSchema(
            "Türöffnung in Limburg — So funktioniert der Ablauf",
            "MS Schlüsseldienst Limburg öffnet zugefallene und abgesperrte Türen in Limburg und Umgebung zum Festpreis — zerstörungsfrei in 99% der Fälle, innerhalb von 15–30 Minuten."
          )),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQSchema([
            { question: "Was kostet eine Türöffnung in Limburg?", answer: "MS Schlüsseldienst Limburg öffnet zugefallene Türen ab 50 Euro und abgesperrte Türen ab 80 Euro zum Festpreis — ohne versteckte Kosten und ohne Anfahrtsgebühren." },
            { question: "Wie schnell ist der Schlüsseldienst bei einer Türöffnung vor Ort?", answer: "MS Schlüsseldienst Limburg ist in 15–30 Minuten bei Ihnen — 24/7, auch nachts, an Wochenenden und Feiertagen." },
            { question: "Wird die Tür bei der Öffnung beschädigt?", answer: "In 99% der Fälle öffnet MS Schlüsseldienst Limburg Ihre Tür zerstörungsfrei mit Spezialwerkzeug." },
          ])),
        }}
      />
      <Breadcrumbs items={[{ name: "Leistungen", href: "/" }, { name: "Türöffnung", href: "/leistungen/turoeffnung" }]} />
      
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28 bg-[var(--color-surface-elevated)] border-b border-[var(--color-border-subtle)] overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-70" aria-hidden="true" />
        <div className="absolute top-[-10%] right-[10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[100px] pointer-events-none" />
        
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Türöffnung in Limburg</span>
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-main)] sm:text-5xl lg:text-6xl">
            Ausgesperrt in Limburg? <br className="hidden sm:block" />
            <span className="text-gradient-primary relative inline-block mt-2">
              Wir öffnen Ihre Tür.
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-200 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
              </svg>
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-[var(--color-text-body)] sm:text-xl leading-relaxed">
            Eine zugefallene Tür ist ein Notfall, der absolutes Vertrauen erfordert. Der zertifizierte MS Schlüsseldienst Limburg unter Leitung von Mina Saad ist 24/7 für Sie im Einsatz. Innerhalb von <strong>15–30 Minuten</strong> sind wir bei Ihnen im gesamten Stadtgebiet – mit <strong>100% Kostentransparenz</strong>.
          </p>
        </div>
      </section>

      {/* ═══ CONTENT SECTION ═══ */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[var(--color-surface-base)]">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg prose-slate mx-auto max-w-none">
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-text-main)] mb-6">
              Limburgs erste Wahl für beschädigungsfreie Türöffnungen
            </h2>
            <div className="h-1 w-20 bg-blue-500 rounded-full mt-2 mb-8"></div>
            <p className="text-[var(--color-text-body)] leading-relaxed text-lg">
              Es passiert in Sekundenbruchteilen: Ein Windstoß, eine kurze Unachtsamkeit, und die Tür fällt ins Schloss. In dieser Stresssituation sind wir Ihr verlässlicher Anker in Limburg an der Lahn. Wir verzichten strikt auf Lockangebote und undurchsichtige Callcenter. Stattdessen bieten wir Ihnen ehrliches, regionales Handwerk auf Premium-Niveau von <strong>MS Schlüsseldienst Limburg</strong>. Unser Qualitätsversprechen: Wenn Ihre Tür lediglich zugefallen ist, öffnen wir sie in <strong>99% der Fälle absolut zerstörungsfrei</strong>.
            </p>

            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              <div className="glass-card flex gap-5 p-8 rounded-3xl shadow-sm border border-blue-100/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm">
                  <DoorOpen className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-2">Zugefallene Türen (99% zerstörungsfrei)</h3>
                  <p className="text-[var(--color-text-body)] text-base leading-relaxed">
                    Mit modernstem Spezialwerkzeug und jahrelanger Routine öffnen unsere Limburger Monteure unverschlossene Türen meist in wenigen Sekunden. Ihr Türblatt, der Rahmen und der Schließzylinder bleiben dabei absolut unversehrt.
                  </p>
                </div>
              </div>

              <div className="glass-card flex gap-5 p-8 rounded-3xl shadow-sm border border-blue-100/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-2">Abgeschlossene Türen & Defekte</h3>
                  <p className="text-[var(--color-text-body)] text-base leading-relaxed">
                    Auch bei komplexen Verriegelungen, Riegelbrüchen oder abgebrochenen Schlüsseln agieren wir maximal materialschonend. Muss ein Zylinder gefräst werden, verbauen wir auf Wunsch sofort einen hochsicheren Premium-Ersatzzylinder.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mt-20 text-3xl font-extrabold tracking-tight text-[var(--color-text-main)] mb-8">
              Unser kompromissloses Transparenz-Versprechen
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-[var(--color-surface-elevated)] border border-[var(--color-border-subtle)] hover:border-blue-200 transition-colors shadow-sm">
                <div className="bg-green-100 p-2 rounded-full mt-1 shrink-0">
                   <Check className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[var(--color-text-main)]">Garantierter Festpreis am Telefon</h4>
                  <p className="mt-2 text-[var(--color-text-body)] text-lg">Wir nennen Ihnen die genauen Kosten bereits beim Erstgespräch. Keine „ab“-Preise vor Ort, keine versteckten Anfahrtskosten, keine plötzlichen Nachtzuschläge, die nicht vorher klar kommuniziert wurden.</p>
                </div>
              </div>
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-[var(--color-surface-elevated)] border border-[var(--color-border-subtle)] hover:border-blue-200 transition-colors shadow-sm">
                <div className="bg-blue-100 p-2 rounded-full mt-1 shrink-0">
                   <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[var(--color-text-main)]">Regionale Nähe (15–30 Min)</h4>
                  <p className="mt-2 text-[var(--color-text-body)] text-lg">Ob in der Limburger Altstadt, in Lindenholzhausen, Dietkirchen, Eschhofen oder Linter – durch unsere lokale Präsenz sind wir als echter Vor-Ort-Service sofort bei Ihnen, um die Wartezeit zu minimieren.</p>
                </div>
              </div>
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-[var(--color-surface-elevated)] border border-[var(--color-border-subtle)] hover:border-blue-200 transition-colors shadow-sm">
                <div className="bg-gray-100 p-2 rounded-full mt-1 shrink-0">
                   <ShieldCheck className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[var(--color-text-main)]">Zertifizierter Meister-Standard</h4>
                  <p className="mt-2 text-[var(--color-text-body)] text-lg">Vertrauen Sie auf seriöse Handwerksqualität. Wir sind keine dubiose Vermittlungsagentur, sondern echte, umfassend ausgebildete Sicherheitsexperten aus Ihrer Region um Mina Saad.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 rounded-3xl glass-card p-8 sm:p-10 border border-blue-200/50 shadow-lg relative overflow-hidden bg-gradient-to-br from-white to-blue-50/30">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
              <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-6 relative z-10 ml-4">
                Der Limburger Notfall-Ablauf: So helfen wir Ihnen sofort
              </h3>
              <ol className="list-decimal pl-10 space-y-5 text-[var(--color-text-body)] marker:text-blue-600 marker:font-bold relative z-10 text-lg">
                <li className="pl-2"><strong className="text-[var(--color-text-main)]">Ruhe bewahren:</strong> Vermeiden Sie unbedingt Selbstversuche mit Plastikkarten oder ungeeignetem Werkzeug. Diese verursachen fast immer teure Schäden an Tür, Rahmen und Dichtung.</li>
                <li className="pl-2"><strong className="text-[var(--color-text-main)]">Alternativen prüfen:</strong> Überlegen Sie kurz, ob ein Fenster erreichbar offen steht oder ein Zweitschlüssel bei Nachbarn oder Verwandten hinterlegt ist.</li>
                <li className="pl-2">
                  <strong className="text-[var(--color-text-main)]">Lokalen Notruf wählen:</strong> Rufen Sie unseren Schlüsseldienst-Notruf an:{" "}
                  <a href={BUSINESS.phone.href} className="font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1 link-underline">
                    <Phone className="h-5 w-5" /> {BUSINESS.phone.display}
                  </a>. Wir sind rund um die Uhr erreichbar.
                </li>
                <li className="pl-2"><strong className="text-[var(--color-text-main)]">Festpreis & Anfahrt:</strong> Wir klären die Situation kurz mit Ihnen, nennen Ihnen den absolut verbindlichen Preis und unser Techniker macht sich sofort auf den Weg zu Ihnen nach Limburg.</li>
                <li className="pl-2"><strong className="text-[var(--color-text-main)]">Professionelle Öffnung:</strong> Unser Experte öffnet Ihre Tür souverän, routiniert und materialschonend. Sie können sofort wieder aufatmen und in Ihre Räumlichkeiten.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps />
      <CertBadges />
      <RelatedServices currentServiceId="turoeffnung" />
      <EmergencyCTA />
    </div>
  );
}
