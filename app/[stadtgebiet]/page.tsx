import { notFound } from "next/navigation";
import { cities, getCityBySlug, getAllCitySlugs } from "@/lib/data/areas";
import { generateSharedMetadata } from "@/lib/metadata";
import { siteUrl } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyCTA from "@/components/EmergencyCTA";
import HeroCTA from "@/components/HeroCTA";
import TrustBadges from "@/components/trust/TrustBadges";
import PriceCard from "@/components/pricing/PriceCard";
import TrustStrip from "@/components/trust/TrustStrip";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import GoogleReviewsBadge from "@/components/reviews/GoogleReviewsBadge";
import { aggregateRating } from "@/lib/data/testimonials";
import { getFAQSchema } from "@/lib/faqSchema";
import { MapPin, ShieldCheck, Clock, CheckCircle2, Award, Truck } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { Card } from "@/components/ui/card";

export function generateStaticParams() {
    return getAllCitySlugs();
}

export async function generateMetadata({ params }: { params: Promise<{ stadtgebiet: string }> }) {
    const { stadtgebiet } = await params;
    const city = getCityBySlug(stadtgebiet);

    if (!city) return notFound();

    return generateSharedMetadata({
        title: `Schlüsseldienst ${city.name} | 100% Festpreis | in ${city.logistics.drivingTimeMinutes} Min vor Ort`,
        description: `Ausgesperrt in ${city.name}? Der Limburger Schlüsseldienst ist in ${city.logistics.drivingTimeMinutes} Min da. 100% Festpreisgarantie ab ${city.pricing.basePrice}€, zerstörungsfreie Öffnung, keine versteckten Kosten.`,
        path: `/${city.slug}`,
    });
}

export default async function StadtgebietPage({ params }: { params: Promise<{ stadtgebiet: string }> }) {
    const { stadtgebiet } = await params;
    const city = getCityBySlug(stadtgebiet);

    if (!city) {
        notFound();
    }

    const breadcrumbs = [
        { name: "Einsatzgebiete", href: "/servicegebiet" },
        { name: `Schlüsseldienst ${city.name}`, href: `/${city.slug}` },
    ];

    // Schema.org for LocalBusiness dynamic per city
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Schlüsseldienst Limburg - Notdienst für ${city.name}`,
        "description": `Ihr lokaler Schlüsseldienst für ${city.name}. Zerstörungsfreie Türöffnungen, Festpreise ab ${city.pricing.basePrice}€, Anfahrt in ${city.logistics.drivingTimeMinutes} Minuten.`,
        "url": `${siteUrl}/${city.slug}`,
        "telephone": BUSINESS.phone.international,
        "priceRange": "€€",
        "image": `${siteUrl}/logo.png`,
        "areaServed": {
            "@type": "City",
            "name": city.name
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": city.coordinates.latitude,
            "longitude": city.coordinates.longitude
        }
    };

    return (
        <div className="bg-[var(--color-surface-base)] text-[var(--color-text-main)] font-sans pt-20 min-h-screen">
            <Script
                id={`schema-city-${city.slug}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

            <Breadcrumbs items={[{ name: "Einsatzgebiete", href: "/servicegebiet" }, { name: `Schlüsseldienst ${city.name}`, href: `/${city.slug}` }]} />

            {/* Hyper-local Hero Section */}
            <section id="hero-section" aria-label={`Notfall-Hilfe ${city.name}`} className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28 overflow-hidden bg-[var(--color-surface-elevated)] border-b border-[var(--color-border-subtle)]">
                <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-70" aria-hidden="true" />
                <div className="absolute top-[-10%] left-[10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[100px] pointer-events-none" />
                
                <div className="mx-auto max-w-4xl text-center relative z-10 flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-blue-100 bg-white/70 text-blue-800 text-sm font-semibold mb-6 shadow-sm">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        Ihr lokaler Experte für {city.name}
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-text-main)] leading-tight">
                        Schlüsseldienst <span className="text-gradient-primary">{city.name}</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-[var(--color-text-body)] text-center leading-relaxed font-medium">
                        Ausgesperrt in {city.name}? Verfallen Sie nicht in Panik. Wir sind in <strong className="text-blue-600">{city.logistics.drivingTimeMinutes} Minuten</strong> bei Ihnen. Als lokaler Limburger Betrieb (Inh. Mina Saad) garantieren wir Ihnen einen 100% Festpreis ab {city.pricing.basePrice}€ ohne versteckte Kosten.
                    </p>
                    
                    <ul className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4 text-sm sm:text-base font-bold text-[var(--color-text-main)] mb-8">
                      <li className="flex items-center justify-center gap-2 glass-card px-5 py-3 rounded-full shadow-sm border border-blue-100/50">
                        <CheckCircle2 className="h-5 w-5 text-green-600" /> Zerstörungsfrei (99%)
                      </li>
                      <li className="flex items-center justify-center gap-2 glass-card px-5 py-3 rounded-full shadow-sm border border-blue-100/50">
                        <CheckCircle2 className="h-5 w-5 text-green-600" /> Fixer Preis am Telefon
                      </li>
                      <li className="flex items-center justify-center gap-2 glass-card px-5 py-3 rounded-full shadow-sm border border-blue-100/50">
                        <CheckCircle2 className="h-5 w-5 text-green-600" /> Regionaler Fachbetrieb
                      </li>
                    </ul>

                    <div className="mb-4">
                        <TrustBadges />
                    </div>
                    <HeroCTA />
                </div>
            </section>

            <div className="relative -mt-6 mb-16 flex justify-center z-10 w-full px-4">
                <div className="glass-card p-2 rounded-2xl shadow-lg border border-blue-100/50 bg-white/90">
                    <GoogleReviewsBadge rating={aggregateRating.ratingValue} count={aggregateRating.reviewCount} />
                </div>
            </div>

            <TrustStrip />

            {/* Local Context & Routing Section */}
            <section className="bg-[var(--color-surface-base)] px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <Card className="mx-auto max-w-5xl p-8 md:p-12 glass-card border border-blue-100/50 shadow-lg relative overflow-hidden bg-white/60">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                      <MapPin className="h-40 w-40 text-blue-600" />
                    </div>
                    <div className="relative z-10">
                      <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-main)] mb-6 flex items-center gap-3">
                          <div className="bg-blue-100 p-2 rounded-xl">
                            <Truck className="h-8 w-8 text-blue-600" />
                          </div>
                          Soforthilfe direkt in <span className="text-gradient-primary">{city.name}</span>
                      </h2>
                      <p className="text-[var(--color-text-body)] text-lg leading-relaxed mb-8 max-w-3xl">
                          Als regional verwurzelter Betrieb mit Sitz in Limburg kennen wir jede Straße in {city.name}. {city.logistics.routeDescription && ` ${city.logistics.routeDescription}`} Wir navigieren den schnellsten Weg zu Ihnen, egal ob Sie am Rande der Stadt oder mitten im Zentrum wohnen.
                      </p>
                      
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-4">Häufige Einsatzgebiete in {city.name}:</h3>
                        <div className="flex flex-wrap gap-2">
                            {city.neighborhoods.map((hood, i) => (
                                <span key={i} className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 border border-blue-100">
                                    <MapPin className="h-4 w-4" aria-hidden="true" />
                                    {hood}
                                </span>
                            ))}
                        </div>
                      </div>

                      <div className="mt-10 rounded-2xl glass-card p-6 md:p-8 border border-blue-100/50 flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-br from-white to-blue-50/50">
                          <div className="flex-shrink-0 bg-blue-100 p-4 rounded-full border border-blue-200">
                              <Clock className="h-10 w-10 text-blue-600" aria-hidden="true" />
                          </div>
                          <div>
                              <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-2">Garantierte Eintreffzeit: {city.logistics.drivingTimeMinutes} Minuten</h3>
                              <p className="text-[var(--color-text-body)] leading-relaxed text-lg">
                                  In Notsituationen zählt jede Minute. Dank unserer strategischen Lage garantieren wir für Einsätze in {city.name} eine überdurchschnittlich schnelle Reaktionszeit. Wir lassen Sie nicht im Regen stehen.
                              </p>
                          </div>
                      </div>
                      
                      {city.landmarks && city.landmarks.length > 0 && (
                          <div className="mt-6 flex items-start gap-4 p-5 rounded-2xl bg-green-50 border border-green-100">
                            <ShieldCheck className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                            <p className="text-base text-green-900 leading-relaxed">
                                <strong>Lokale Kompetenz:</strong> Wir sind regelmäßig im Einsatz rund um {city.landmarks.join(", ")} und garantieren eine schnelle Anfahrt ohne Suchverzögerungen.
                            </p>
                          </div>
                      )}
                    </div>
                </Card>
            </section>

            {/* Localized Pricing Section */}
            <section id="preise" className="bg-[var(--color-surface-elevated)] border-y border-[var(--color-border-subtle)] px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-blue-100 bg-white/70 text-blue-800 text-sm font-semibold mb-6 shadow-sm">
                            <Award className="h-4 w-4" />
                            Garantierte Kostensicherheit
                        </div>
                        <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-text-main)] sm:text-4xl lg:text-5xl mb-6">
                            Transparente <span className="text-gradient-primary">Festpreise</span> für {city.name}
                        </h2>
                        <div className="h-1 w-20 bg-blue-500 rounded-full mx-auto mb-6"></div>
                        <p className="mt-6 text-xl text-[var(--color-text-body)] font-medium max-w-2xl mx-auto leading-relaxed">
                            {city.pricing.travelCost === 0
                                ? "Profitieren Sie von unserer kostenfreien Anfahrt in diesem Servicegebiet."
                                : `Wir berechnen lediglich eine absolut faire Anfahrtspauschale von ${city.pricing.travelCost}€ nach ${city.name}.`}
                            <br />Keine bösen Überraschungen, keine versteckten Gebühren.
                        </p>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
                        <PriceCard
                            title="Tür zugefallen"
                            price={city.pricing.basePrice}
                            description="Schlüssel steckt von innen oder Tür ist nur ins Schloss gefallen. Zerstörungsfreie Öffnung."
                            features={[
                                "Werktags 08-18 Uhr",
                                "Zerstörungsfreie Öffnung (99%)",
                                "Festpreis vor Beginn der Arbeit",
                                ...(city.pricing.travelCost === 0 ? ["Inklusive Anfahrt"] : [`+ ${city.pricing.travelCost}€ Anfahrt`])
                            ]}
                            isPopular={true}
                        />
                        <PriceCard
                            title="Tür abgeschlossen"
                            price={city.pricing.basePrice + 30}
                            description="Schlüssel verloren oder abgebrochen. Professionelle Öffnung mit Spezialwerkzeug."
                            features={[
                                "Werktags 08-18 Uhr",
                                "Einsatz von Profi-Fräsen",
                                "Ersatzzylinder sofort verfügbar",
                                ...(city.pricing.travelCost === 0 ? ["Inklusive Anfahrt"] : [`+ ${city.pricing.travelCost}€ Anfahrt`])
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <ReviewsSection />

            {/* City-Specific FAQ Section */}
            {city.faqs && city.faqs.length > 0 && (
              <section className="bg-[var(--color-surface-base)] px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                  <Script
                      id={`faq-schema-${city.slug}`}
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                          __html: JSON.stringify(getFAQSchema(city.faqs)),
                      }}
                  />
                  <div className="mx-auto max-w-4xl">
                      <div className="text-center mb-16">
                          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-text-main)] sm:text-4xl">
                              Häufige Fragen zu Einsätzen in <span className="text-gradient-primary">{city.name}</span>
                          </h2>
                          <div className="h-1 w-20 bg-blue-500 rounded-full mx-auto mt-6"></div>
                      </div>
                      <div className="space-y-4 glass-card p-6 md:p-10 rounded-3xl border border-blue-100/50 shadow-sm">
                          {city.faqs.map((faq, i) => (
                              <FAQAccordion key={i} question={faq.question} answer={faq.answer} />
                          ))}
                      </div>
                  </div>
              </section>
            )}

            {/* Nearby Territories Links */}
            <section className="bg-[var(--color-surface-elevated)] px-4 sm:px-6 lg:px-8 py-16 border-t border-[var(--color-border-subtle)]">
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-[var(--color-text-main)] mb-8">
                        Weitere Einsatzgebiete in der Region
                    </h2>
                    <nav aria-label="Benachbarte Einsatzgebiete" className="flex flex-wrap justify-center gap-4">
                        {cities.filter(c => c.slug !== city.slug && c.logistics.distanceFromHQ <= city.logistics.distanceFromHQ + 10).slice(0, 10).map(c => (
                            <Link key={c.id} href={`/${c.slug}`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card border border-blue-100/50 text-blue-700 font-medium hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                                <MapPin className="h-4 w-4" /> Schlüsseldienst {c.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </section>

            <div className="pb-12 bg-[var(--color-surface-elevated)]">
                <EmergencyCTA />
            </div>
        </div>
    );
}
