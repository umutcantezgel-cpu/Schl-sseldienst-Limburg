import { MapPin, Check, Clock } from "lucide-react";
import EmergencyCTA from "@/components/EmergencyCTA";
import Link from "next/link";
import { stadtgebiete } from "@/lib/stadtgebiete";
import { Card } from "@/components/ui/card";
import { generateSharedMetadata } from "@/lib/metadata";

export const metadata = generateSharedMetadata({
  title: "Einsatzgebiet Limburg-Weilburg | Schlüsseldienst Limburg",
  description: "Limburgs regionaler Meisterbetrieb. Wir sind in 15–30 Minuten in Limburg und im gesamten Landkreis Limburg-Weilburg vor Ort. 100% Festpreis-Garantie, IHK-geprüft.",
  path: "/servicegebiet",
});

export default function ServicegebietPage() {
  return (
    <>
      {/* Hero Section */}
      <section aria-label="Einsatzgebiet Übersicht" className="relative bg-[var(--color-surface-elevated)] px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-main)] sm:text-5xl lg:text-6xl">
            Unser <span className="text-[var(--color-blue-primary)]">Einsatzgebiet</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--color-text-body)] sm:text-xl">
            Regionale Fachkompetenz direkt aus Limburg. Im Notfall sind wir garantiert in 15–30 Minuten bei Ihnen vor Ort – im gesamten Raum Limburg-Weilburg und Umgebung.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section aria-label="Einsatzgebiete im Detail" className="px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg prose-slate mx-auto max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-main)]">
              Ihre 24/7 Meister-Soforthilfe in der Region Limburg
            </h2>
            <p className="mt-4 text-[var(--color-text-body)]">
              Als ortsansässiger Limburger Fachbetrieb lehnen wir die intransparenten Praktiken anonymer Vermittlungszentralen strikt ab. Wir sind Ihr direkter, regionaler Ansprechpartner. Unser Einsatzgebiet umfasst die Stadt Limburg an der Lahn sowie alle umliegenden Städte und Gemeinden – stets mit unserer unumstößlichen 100% Festpreis-Garantie und ohne versteckte Anfahrtskosten.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stadtgebiete.map((gebiet) => (
                <Link key={gebiet.slug} href={`/${gebiet.slug}`} className="group">
                  <Card className="flex flex-col gap-1 p-4 hover:-translate-y-1 hover:border-[var(--color-brand-muted)] hover:shadow-[var(--shadow-lift)] transition-all duration-300 ease-out">
                    <div className="flex items-center gap-2 font-bold text-[var(--color-text-main)] group-hover:text-[var(--color-blue-primary)] transition-colors">
                      <MapPin className="h-5 w-5 text-[var(--color-blue-primary)] shrink-0" aria-hidden="true" />
                      {gebiet.name} ({gebiet.plz})
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-bold text-[var(--color-blue-primary)] pl-7">
                      <Clock className="h-5 w-5" aria-hidden="true" />
                      15–30 Min. in {gebiet.name}
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <Card className="mt-12 p-8 bg-[var(--color-surface-elevated)] border-none">
              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-8 w-8 shrink-0 text-[var(--color-blue-primary)]" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-main)]">
                    Garantierte Ankunft in Limburg & Umgebung: 15–30 Minuten
                  </h3>
                  <p className="mt-2 text-[var(--color-text-body)] leading-relaxed">
                    Bei einer ausgesperrten Tür zählt jede Minute. Dank unserer zentralen Stationierung direkt in Limburg erreichen wir jeden Einsatzort in unserem Kerngebiet Limburg-Weilburg zuverlässig innerhalb von <strong className="text-[var(--color-blue-primary)] font-bold">15 bis maximal 30 Minuten</strong>.
                  </p>
                  
                  <h4 className="mt-6 text-lg font-bold text-[var(--color-text-main)]">Wahre regionale Verankerung</h4>
                  <p className="mt-2 text-[var(--color-text-body)] leading-relaxed">
                    Viele Anbieter täuschen eine lokale Präsenz nur vor und berechnen Ihnen horrende Anfahrtskosten aus entfernten Großstädten. Wir sind echte Limburger. Durch kurze Wege garantieren wir schnelle Hilfe und faire, transparente Preise ohne böse Überraschungen.
                  </p>
                  
                  <h4 className="mt-6 text-lg font-bold text-[var(--color-text-main)]">Angrenzende Sondergebiete</h4>
                  <p className="mt-2 text-[var(--color-text-body)] leading-relaxed">
                    Sollte sich Ihr Standort minimal außerhalb unseres primären Einzugsgebietes befinden, zögern Sie nicht, unseren Limburger Meister-Notruf zu wählen. Wir prüfen sofort unsere Kapazitäten und nennen Ihnen am Telefon eine ehrliche Anfahrtszeit sowie einen garantierten Festpreis.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <aside aria-label="Notfall-Kontakt">
        <EmergencyCTA />
      </aside>
    </>
  );
}
