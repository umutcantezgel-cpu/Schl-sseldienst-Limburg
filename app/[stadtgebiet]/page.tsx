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

import { getFAQSchema } from "@/lib/faqSchema";
import { MapPin, ShieldCheck, Clock, CheckCircle2, Award, Truck } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { Card } from "@/components/ui/card";

export const revalidate = 86400;

export function generateStaticParams() {
    return getAllCitySlugs();
}

const CITY_METADATA: Record<string, { title: string; description: string }> = {
    limburg: {
        title: "Schlüsseldienst Limburg an der Lahn | Festpreis",
        description: "Ausgesperrt in Limburg an der Lahn? In 5-10 Min vor Ort. Zerstörungsfreie Türöffnung ab 99€ Festpreis ohne versteckte Kosten.",
    },
    weilburg: {
        title: "Schlüsseldienst Weilburg | 24/7 Schlüsselnotdienst",
        description: "Ausgesperrt in Weilburg? Schlüsselnotdienst in 20-25 Min vor Ort. Zerstörungsfreie Türöffnung ab 99€ Festpreis im gesamten Stadtgebiet.",
    },
    "bad-camberg": {
        title: "Schlüsseldienst Bad Camberg | 24/7 Notdienst MS",
        description: "Ausgesperrt in Bad Camberg? Wir sind in 15-20 Min vor Ort. Zerstörungsfreie Türöffnung ab 99€ Festpreis – 24/7 Notdienst.",
    },
    hadamar: {
        title: "Schlüsseldienst Hadamar | 24/7 Festpreis-Service",
        description: "Ausgesperrt in Hadamar? Ihr Notdienst ist in 10-15 Min vor Ort. Zerstörungsfreie Türöffnung ab 99€ Festpreis – 24/7 erreichbar.",
    },
    elz: {
        title: "Schlüsseldienst Elz | 24/7 Türöffnung & Notdienst",
        description: "Ausgesperrt in Elz? Unser Schlüsselnotdienst ist in 5-10 Min vor Ort. 100% Festpreisgarantie ab 99€ für zerstörungsfreie Öffnung.",
    },
    dornburg: {
        title: "Schlüsseldienst Dornburg | 24/7 Festpreis-Hilfe",
        description: "Ausgesperrt in Dornburg (Frickhofen, Langendernbach)? Express-Notdienst in 15-20 Min vor Ort. 100% Festpreisgarantie ab 99€.",
    },
    runkel: {
        title: "Schlüsseldienst Runkel | 24/7 Notdienst & Preise",
        description: "Ausgesperrt in Runkel? Der Schlüsselnotdienst ist in 15 Min vor Ort. Zerstörungsfreie Türöffnung ab 99€ garantierter Festpreis.",
    },
    diez: {
        title: "Schlüsseldienst Diez | 24/7 Notdienst Festpreis",
        description: "Ausgesperrt in Diez? Unser Limburger Schlüsselnotdienst ist in 10 Min vor Ort. Zerstörungsfreie Türöffnung ab 99€ Festpreis.",
    },
    brechen: {
        title: "Schlüsseldienst Brechen | 24/7 Notdienst Limburg",
        description: "Ausgesperrt in Brechen (Niederbrechen, Oberbrechen)? In 15 Min vor Ort. 100% Festpreisgarantie ab 99€ für beschädigungsfreie Öffnung.",
    },
    "limburg-innenstadt": {
        title: "Schlüsseldienst Limburg Innenstadt | Notdienst",
        description: "Ausgesperrt in Limburg Innenstadt? In 15-30 Min vor Ort. Zerstörungsfreie Türöffnung ab 99€ Festpreis ohne versteckte Kosten.",
    },
    "limburg-lindenholzhausen": {
        title: "Schlüsseldienst Limburg Lindenholzhausen 24/7",
        description: "Ausgesperrt in Limburg Lindenholzhausen? In 15-30 Min da. Zerstörungsfreie Türöffnung ab 99€ Festpreis ohne versteckte Kosten.",
    },
    "limburg-linter": {
        title: "Schlüsseldienst Limburg Linter | 24/7 Notdienst",
        description: "Ausgesperrt in Limburg Linter? In 15-30 Min vor Ort. Zerstörungsfreie Türöffnung ab 99€ Festpreis ohne versteckte Kosten.",
    },
    "limburg-staffel": {
        title: "Schlüsseldienst Limburg Staffel | 24/7 Service",
        description: "Ausgesperrt in Limburg Staffel? In 15-30 Min vor Ort. Zerstörungsfreie Türöffnung ab 99€ Festpreis ohne versteckte Kosten.",
    },
    "limburg-offheim": {
        title: "Schlüsseldienst Limburg Offheim | 24/7 Notdienst",
        description: "Ausgesperrt in Limburg Offheim? In 15-30 Min vor Ort. Zerstörungsfreie Türöffnung ab 99€ Festpreis ohne versteckte Kosten.",
    },
    "limburg-dietkirchen": {
        title: "Schlüsseldienst Limburg Dietkirchen | 24/7 Notruf",
        description: "Ausgesperrt in Limburg Dietkirchen? In 15-30 Min vor Ort. Zerstörungsfreie Türöffnung ab 99€ Festpreis ohne versteckte Kosten.",
    },
    "limburg-ahlbach": {
        title: "Schlüsseldienst Limburg Ahlbach | 24/7 Notdienst",
        description: "Ausgesperrt in Limburg Ahlbach? In 15-30 Min vor Ort. Zerstörungsfreie Türöffnung ab 99€ Festpreis ohne versteckte Kosten.",
    },
    "limburg-eschhofen": {
        title: "Schlüsseldienst Limburg Eschhofen | Festpreis",
        description: "Ausgesperrt in Limburg Eschhofen? In 15-30 Min vor Ort. Zerstörungsfreie Türöffnung ab 99€ Festpreis ohne versteckte Kosten.",
    },
};

export async function generateMetadata({ params }: { params: Promise<{ stadtgebiet: string }> }) {
    const { stadtgebiet } = await params;
    const city = getCityBySlug(stadtgebiet);

    if (!city) return notFound();

    const meta = CITY_METADATA[city.slug] || {
        title: `Schlüsseldienst ${city.name} | 24/7 Notdienst`,
        description: `Ausgesperrt in ${city.name}? Der Limburger Schlüsseldienst ist in ${city.logistics.drivingTimeMinutes} Min da. 100% Festpreisgarantie ab ${city.pricing.basePrice}€.`,
    };

    return generateSharedMetadata({
        title: meta.title,
        description: meta.description,
        path: `/${city.slug}`,
    });
}

function getVariation(slug: string, variations: string[]): string {
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
        hash = slug.charCodeAt(i) + ((hash << 5) - hash);
    }
    return variations[Math.abs(hash) % variations.length];
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
        "@type": "Locksmith",
        "@id": `${siteUrl}/${city.slug}#localbusiness`,
        "name": `${BUSINESS.name} – Notdienst ${city.name}`,
        "description": `Ihr lokaler Schlüsseldienst für ${city.name}. Zerstörungsfreie Türöffnungen in 99% der Fälle, Festpreise ab ${city.pricing.basePrice}€, Anfahrt in ${city.logistics.drivingTimeMinutes} Minuten. 24/7 erreichbar.`,
        "url": `${siteUrl}/${city.slug}`,
        "telephone": BUSINESS.phone.international,
        "email": BUSINESS.email,
        "priceRange": "€€",
        "image": `${siteUrl}/images/logo.svg`,
        "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/images/logo.svg`,
            "width": 500,
            "height": 500
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": BUSINESS.address.street,
            "addressLocality": BUSINESS.address.cityFull,
            "addressRegion": BUSINESS.address.state,
            "postalCode": BUSINESS.address.zip,
            "addressCountry": BUSINESS.address.countryCode
        },
        "areaServed": {
            "@type": "City",
            "name": city.name
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": city.coordinates.latitude,
            "longitude": city.coordinates.longitude
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59",
                "description": "24/7 Notdienst – auch an Feiertagen und nachts"
            }
        ],
        "paymentAccepted": ["Cash", "Credit Card", "EC-Karte"],
        "currenciesAccepted": "EUR",
        "knowsLanguage": ["de", "en", "tr"],
        "parentOrganization": {
            "@type": "Locksmith",
            "@id": `${siteUrl}/#localbusiness`
        }
    };

    // BreadcrumbList Schema for rich snippets
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Startseite",
                "item": siteUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Einsatzgebiete",
                "item": `${siteUrl}/servicegebiet`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": `Schlüsseldienst ${city.name}`,
                "item": `${siteUrl}/${city.slug}`
            }
        ]
    };

    return (
        <div className="bg-[var(--color-surface-base)] text-[var(--color-text-main)] font-sans pt-20 min-h-screen">
            <Script
                id={`schema-city-${city.slug}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <Script
                id={`schema-breadcrumb-${city.slug}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <Breadcrumbs items={[{ name: "Einsatzgebiete", href: "/servicegebiet" }, { name: `Schlüsseldienst ${city.name}`, href: `/${city.slug}` }]} />

            {/* Hyper-local Hero Section */}
            <section id="hero-section" aria-label={`Notfall-Hilfe ${city.name}`} className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28 overflow-hidden bg-[var(--color-surface-elevated)] border-b border-[var(--color-border-subtle)]">
                <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-70" aria-hidden="true" />
                <div className="absolute top-[-10%] left-[10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[100px] pointer-events-none" />
                
                <div className="mx-auto max-w-4xl text-center relative z-10 flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-blue-100 bg-white/70 text-blue-800 text-sm font-semibold mb-6 shadow-sm">
                        <MapPin className="h-4 w-4 text-blue-600 shrink-0" />
                        <span>{meta.title}</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-text-main)] leading-tight">
                        Schlüsseldienst <span className="text-gradient-primary">{city.name}</span> & Notdienst
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-[var(--color-text-body)] text-center leading-relaxed font-medium">
                        {city.localContent?.heroSubtitle || (
                          <>
                            Ausgesperrt in {city.name}? Verfallen Sie nicht in Panik. Wir sind in <strong className="text-blue-600">{city.logistics.drivingTimeMinutes} Minuten</strong> bei Ihnen. Als lokaler Limburger Betrieb (Inh. Mina Saad) garantieren wir Ihnen einen 100% Festpreis ab {city.pricing.basePrice}€ ohne versteckte Kosten.
                          </>
                        )}
                    </p>
                    
                    <ul className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4 text-sm sm:text-base font-bold text-[var(--color-text-main)] mb-8">
                      <li className="flex items-center justify-center gap-2 glass-card px-5 py-3 rounded-full shadow-sm border border-blue-100/50">
                        <CheckCircle2 className="h-5 w-5 text-green-600" /> {getVariation(city.slug, ["Schadensfreie Öffnung", "Zerstörungsfrei (99%)", "Keine Zerstörung", "Schonende Türöffnung"])}
                      </li>
                      <li className="flex items-center justify-center gap-2 glass-card px-5 py-3 rounded-full shadow-sm border border-blue-100/50">
                        <CheckCircle2 className="h-5 w-5 text-green-600" /> {getVariation(city.slug + "1", ["Fixer Preis am Telefon", "Verbindliche Preisnennung", "Garantierter Festpreis", "100% Preistransparenz"])}
                      </li>
                      <li className="flex items-center justify-center gap-2 glass-card px-5 py-3 rounded-full shadow-sm border border-blue-100/50">
                        <CheckCircle2 className="h-5 w-5 text-green-600" /> {getVariation(city.slug + "2", ["Regionaler Fachbetrieb", "Lokaler Meisterbetrieb", "Schnell & Zuverlässig", "Aus der Region"])}
                      </li>
                    </ul>

                    <div className="mb-4">
                        <TrustBadges locationName={city.name} />
                    </div>
                    <HeroCTA />
                </div>
            </section>



            <TrustStrip locationName={city.name} />

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

                      {/* Unique Intro Text */}
                      {city.localContent?.introText && (
                        <p className="text-[var(--color-text-body)] text-lg leading-relaxed mb-8 max-w-3xl">
                          {city.localContent.introText}
                        </p>
                      )}

                      <p className="text-[var(--color-text-body)] text-base leading-relaxed mb-8 max-w-3xl">
                          {city.logistics.routeDescription && ` ${city.logistics.routeDescription}`} Wir navigieren den schnellsten Weg zu Ihnen, egal ob Sie am Rande der Stadt oder mitten im Zentrum wohnen.
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
                                  {city.localContent?.arrivalTimeCallout || `In Notsituationen zählt jede Minute. Dank unserer strategischen Lage garantieren wir für Einsätze in ${city.name} eine überdurchschnittlich schnelle Reaktionszeit. Wir lassen Sie nicht im Regen stehen.`}
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

            {/* Housing Profile & Security Tip Section */}
            <section className="bg-[var(--color-surface-elevated)] border-y border-[var(--color-border-subtle)] px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2">
                    {/* Housing Profile Glass Card */}
                    <div className="relative rounded-3xl overflow-hidden p-8 border border-blue-100/30 shadow-xl" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(219,234,254,0.4) 100%)', backdropFilter: 'blur(20px)' }}>
                        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-blue-200/30 blur-3xl pointer-events-none" />
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                                <MapPin className="h-3.5 w-3.5" /> Wohnstruktur
                            </div>
                            <h3 className="text-2xl font-extrabold text-[var(--color-text-main)] mb-4">
                                Bebauungsprofil {city.name}
                            </h3>
                            <p className="text-[var(--color-text-body)] leading-relaxed text-base">
                                {city.housingProfile}
                            </p>
                            {city.localContent?.neighborhoodGuide && (
                                <p className="mt-4 text-[var(--color-text-body)] leading-relaxed text-sm border-t border-blue-100/50 pt-4">
                                    {city.localContent.neighborhoodGuide}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Security Tip Card */}
                    {city.localContent?.securityTip && (
                        <div className="relative rounded-3xl overflow-hidden p-8 border border-amber-200/50 shadow-xl" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(254,249,195,0.4) 100%)', backdropFilter: 'blur(20px)' }}>
                            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
                                    <ShieldCheck className="h-3.5 w-3.5" /> Sicherheitshinweis
                                </div>
                                <h3 className="text-2xl font-extrabold text-[var(--color-text-main)] mb-4">
                                    Lokaler Sicherheitstipp
                                </h3>
                                <p className="text-[var(--color-text-body)] leading-relaxed text-base">
                                    {city.localContent.securityTip}
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-amber-700">
                                    <Award className="h-4 w-4" />
                                    Kostenlose Erstberatung vor Ort
                                </div>
                            </div>
                        </div>
                    )}
                </div>
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
                        <div className="h-1 w-20 bg-[var(--color-brand-red)] rounded-full mx-auto mb-6"></div>
                        <p className="mt-6 text-xl text-[var(--color-text-body)] font-medium max-w-2xl mx-auto leading-relaxed">
                            {city.pricing.travelCost === 0
                                ? "Profitieren Sie von unserer kostenfreien Anfahrt in diesem Servicegebiet."
                                : `Wir berechnen lediglich eine absolut faire Anfahrtspauschale von ${city.pricing.travelCost}€ nach ${city.name}.`}
                            <br />Keine bösen Überraschungen, keine versteckten Gebühren.
                        </p>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
                        <PriceCard
                            title={getVariation(city.slug + "title1", ["Tür zugefallen", "Tür ins Schloss gefallen", "Zugefallene Tür", "Türöffnung (zugefallen)"])}
                            price={city.pricing.basePrice}
                            description={city.pricing.doorClosedDescription || getVariation(city.slug + "desc1", [
                                `Schlüssel steckt von innen oder Tür ist nur ins Schloss gefallen in ${city.name}. Zerstörungsfreie Öffnung.`,
                                `Ihre Haus- oder Wohnungstür in ${city.name} ist zugefallen? Wir öffnen diese zu 99% beschädigungsfrei.`,
                                `Tür versehentlich in ${city.name} zugezogen? Keine Panik. Wir helfen schnell und ohne Schäden.`,
                                `Einfache Türöffnung in ${city.name}, wenn die Tür nicht verschlossen ist. Absolut materialschonend.`
                            ])}
                            features={[
                                getVariation(city.slug + "feat1", ["Werktags 08-18 Uhr", "Standard-Tarif (Mo-Fr)", "Gültig tagsüber an Werktagen", "Basispreis (08:00 - 18:00)"]),
                                getVariation(city.slug + "feat2", ["Zerstörungsfreie Öffnung (99%)", "Keine Zylinderbeschädigung", "Tür und Rahmen bleiben heil", "Schadensfreie Spezialöffnung"]),
                                getVariation(city.slug + "feat3", ["Festpreis vor Beginn der Arbeit", "Garantierter Endpreis", "Kostenkontrolle ab Anruf", "Keine versteckten Gebühren"]),
                                ...(city.pricing.travelCost === 0 ? ["Inklusive Anfahrt"] : [`+ ${city.pricing.travelCost}€ Anfahrt`])
                            ]}
                            isPopular={true}
                        />
                        <PriceCard
                            title={getVariation(city.slug + "title2", ["Tür abgeschlossen", "Verschlossene Tür", "Schlüssel verloren", "Komplettöffnung"])}
                            price={city.pricing.basePrice + 30}
                            description={city.pricing.doorLockedDescription || getVariation(city.slug + "desc2", [
                                `Schlüssel verloren oder abgebrochen in ${city.name}. Professionelle Öffnung mit Spezialwerkzeug.`,
                                `Ihre Tür in ${city.name} ist fest verschlossen? Wir fräsen den Zylinder auf und ersetzen ihn bei Bedarf sofort.`,
                                `Sicherheitsschlösser oder abgeschlossene Türen in ${city.name} öffnen wir zügig und fachmännisch.`,
                                `Defektes Schloss oder Riegelbruch in ${city.name}. Erfahrene Notöffnung inklusive Beratung zum neuen Zylinder.`
                            ])}
                            features={[
                                getVariation(city.slug + "feat4", ["Werktags 08-18 Uhr", "Standard-Tarif (Mo-Fr)", "Gültig tagsüber an Werktagen", "Basispreis (08:00 - 18:00)"]),
                                getVariation(city.slug + "feat5", ["Einsatz von Profi-Fräsen", "Präzises Aufbohren", "Zylinder-Spezialwerkzeug", "Materialschonende Frästechnik"]),
                                getVariation(city.slug + "feat6", ["Ersatzzylinder sofort verfügbar", "Neues Schloss direkt im Auto", "Sofortiger Zylindertausch", "Premium-Schließzylinder auf Lager"]),
                                ...(city.pricing.travelCost === 0 ? ["Inklusive Anfahrt"] : [`+ ${city.pricing.travelCost}€ Anfahrt`])
                            ]}
                        />
                    </div>
                </div>
            </section>



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
                          <div className="h-1 w-20 bg-[var(--color-brand-red)] rounded-full mx-auto mt-6"></div>
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
                            <Link key={c.id} href={`/${c.slug}`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card border border-blue-100/50 text-blue-700 font-medium hover:bg-[var(--color-brand-red)] hover:text-white hover:border-transparent transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
                                <MapPin className="h-4 w-4" /> Schlüsseldienst {c.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </section>

            <div className="pb-12 bg-[var(--color-surface-elevated)]">
                <EmergencyCTA locationName={city.name} />
            </div>
        </div>
    );
}
