import { MapPin, Clock, Euro, ArrowRight, Shield, Truck } from "lucide-react";
import EmergencyCTA from "@/components/EmergencyCTA";
import Link from "next/link";
import { cities } from "@/lib/data/areas";
import { Card } from "@/components/ui/card";
import { generateSharedMetadata } from "@/lib/metadata";

export const revalidate = 86400;

export const metadata = generateSharedMetadata({
  title: "Einsatzgebiet Limburg-Weilburg | MS Notdienst",
  description: "Limburgs regionaler Meisterbetrieb. In 15–30 Min. im gesamten Landkreis Limburg-Weilburg vor Ort. 100% Festpreis-Garantie & 24/7 Notdienst.",
  path: "/servicegebiet",
});

// Separate cities into core cities and Limburg districts
const coreCities = cities.filter(c => !c.slug.startsWith("limburg-"));
const limburgDistricts = cities.filter(c => c.slug.startsWith("limburg-"));

export default function ServicegebietPage() {
  return (
    <>
      {/* Hero Section */}
      <section aria-label="Einsatzgebiet Übersicht" className="relative bg-[var(--color-surface-elevated)] px-4 sm:px-6 lg:px-8 py-20 lg:py-32 border-b border-[var(--color-border-subtle)]">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-50" aria-hidden="true" />
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-blue-100 bg-white/70 text-blue-800 text-sm font-semibold mb-6 shadow-sm">
            <MapPin className="h-4 w-4 text-blue-600" />
            {cities.length} Einsatzgebiete im Landkreis
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-main)] sm:text-5xl lg:text-6xl">
            Unser Einsatzgebiet für den Schlüsseldienst Limburg
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--color-text-body)] sm:text-xl leading-relaxed">
            Regionale Fachkompetenz direkt aus Limburg. Im Notfall sind wir garantiert in 15–30 Minuten bei Ihnen vor Ort – im gesamten Raum Limburg-Weilburg und Umgebung.
          </p>
        </div>
      </section>

      {/* Core Cities Section */}
      <section aria-label="Kernstädte" className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-xl">
                <Truck className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text-main)]">
                Kernstädte & Gemeinden
              </h2>
            </div>
            <p className="text-[var(--color-text-body)] text-lg max-w-2xl">
              Unsere primären Einsatzgebiete im Landkreis Limburg-Weilburg mit garantierten Express-Anfahrtszeiten.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreCities.map((city) => (
              <Link key={city.id} href={`/${city.slug}`} className="group">
                <Card className="flex flex-col gap-3 p-5 hover:-translate-y-1 hover:border-[var(--color-brand-muted)] hover:shadow-[var(--shadow-lift)] transition-all duration-300 ease-out h-full">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 font-bold text-[var(--color-text-main)] group-hover:text-[var(--color-blue-primary)] transition-colors text-lg">
                      <MapPin className="h-5 w-5 text-[var(--color-blue-primary)] shrink-0" aria-hidden="true" />
                      {city.name}
                    </div>
                    <ArrowRight className="h-4 w-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-blue-primary)] group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="flex items-center gap-4 pl-7">
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-[var(--color-blue-primary)]">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      {city.logistics.drivingTimeMinutes} Min.
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-green-600">
                      <Euro className="h-4 w-4" aria-hidden="true" />
                      ab {city.pricing.basePrice}€
                    </div>
                    {city.pricing.travelCost === 0 && (
                      <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                        0€ Anfahrt
                      </span>
                    )}
                  </div>
                  <div className="pl-7 text-sm text-[var(--color-text-muted)] line-clamp-2">
                    {city.logistics.routeDescription}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Limburg Districts Section */}
      <section aria-label="Limburger Stadtteile" className="bg-[var(--color-surface-elevated)] border-y border-[var(--color-border-subtle)] px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-2 rounded-xl">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text-main)]">
                Limburger Stadtteile
              </h2>
            </div>
            <p className="text-[var(--color-text-body)] text-lg max-w-2xl">
              Alle Limburger Ortsteile gehören zu unserem absoluten Kerngebiet — mit 0€ Anfahrtskosten und kürzesten Eintreffzeiten.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {limburgDistricts.map((city) => (
              <Link key={city.id} href={`/${city.slug}`} className="group">
                <Card className="flex flex-col gap-2 p-4 hover:-translate-y-1 hover:border-[var(--color-brand-muted)] hover:shadow-[var(--shadow-lift)] transition-all duration-300 ease-out h-full">
                  <div className="flex items-center gap-2 font-bold text-[var(--color-text-main)] group-hover:text-[var(--color-blue-primary)] transition-colors">
                    <MapPin className="h-4 w-4 text-green-600 shrink-0" aria-hidden="true" />
                    {city.name.replace("Limburg ", "")}
                  </div>
                  <div className="flex items-center gap-3 pl-6">
                    <span className="text-xs font-bold text-[var(--color-blue-primary)]">
                      {city.logistics.drivingTimeMinutes} Min.
                    </span>
                    <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                      0€ Anfahrt
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Card */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text-main)] mb-8 text-center">
            Regionale Notdienst-Logistik & Eintreffgarantie
          </h2>
          <Card className="p-8 bg-[var(--color-surface-elevated)] border-none shadow-lg">
            <div className="flex items-start gap-4">
              <Clock className="mt-1 h-8 w-8 shrink-0 text-[var(--color-blue-primary)]" aria-hidden="true" />
              <div>
                <h3 className="text-xl font-bold text-[var(--color-text-main)]">
                  Garantierte Ankunft in Limburg & Umgebung: 15–30 Minuten
                </h3>
                <p className="mt-2 text-[var(--color-text-body)] leading-relaxed">
                  Bei einer ausgesperrten Tür zählt jede Minute. Dank unserer zentralen Stationierung direkt in Limburg an der Lahn erreichen wir jeden Einsatzort in unserem Kerngebiet Limburg-Weilburg zuverlässig innerhalb von <strong className="text-[var(--color-blue-primary)] font-bold">15 bis maximal 30 Minuten</strong>. Wir nutzen moderne GPS-Flottensteuerung für optimiertes Anfahren über B49, B417, B8 und die Autobahn A3.
                </p>
                
                <h3 className="mt-6 text-lg font-bold text-[var(--color-text-main)]">Echte regionale Verankerung ohne Vermittler</h3>
                <p className="mt-2 text-[var(--color-text-body)] leading-relaxed">
                  Viele Schein-Schlüsseldienste im Internet schalten unverschämte Werbeanzeigen und vermitteln Notfälle an anonyme Subunternehmer aus weiter Entfernung, was zu enormen Fahrtkosten führt. MS Schlüsseldienst Limburg unter Leitung von Mina Saad ist ein echter lokaler Fachbetrieb aus der Region. Durch kurze Wege garantieren wir schnelle Hilfe und fixe Festpreise ohne versteckte Kosten.
                </p>
                
                <h3 className="mt-6 text-lg font-bold text-[var(--color-text-main)]">Einsätze in angrenzenden Gemeinden & Sondergebieten</h3>
                <p className="mt-2 text-[var(--color-text-body)] leading-relaxed">
                  Sollte sich Ihr Standort im weiteren Umkreis befinden, zögern Sie nicht, unseren Limburger Notruf zu kontaktieren. Wir prüfen sofort die Verfügbarkeit unserer Notdienst-Fahrzeuge und nennen Ihnen noch am Telefon eine verlässliche Eintreffzeit sowie ein verbindliches Festpreisangebot.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <aside aria-label="Notfall-Kontakt">
        <EmergencyCTA
          title="Schnelle Hilfe in Ihrem Ortsteil im Landkreis Limburg-Weilburg"
          subtitle="Meisternotdienst 24/7 erreichbar – garantiert in 15–30 Minuten vor Ort."
          locationName="Limburg"
        />
      </aside>
    </>
  );
}
