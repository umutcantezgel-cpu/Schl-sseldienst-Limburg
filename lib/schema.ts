import { CONTENT_GRAPH } from "./contentGraph";
import { PRICING_DATA } from "@/components/pricing/pricing.constants";
import { BUSINESS } from "./constants";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || BUSINESS.domain;

export function generateLocalBusinessSchema() {
    // Build areaServed from content graph
    const areaNodes = CONTENT_GRAPH.filter(n => n.type === 'area');
    const cityPlaces = areaNodes.length > 0
        ? areaNodes.map(n => ({
            "@type": "City" as const,
            "name": n.title.replace('Schlüsseldienst ', '')
        }))
        : [{ "@type": "City" as const, "name": "Limburg an der Lahn" }];

    return {
        "@context": "https://schema.org",
        "@type": "Locksmith",
        "name": BUSINESS.name,
        "description": `${BUSINESS.name} ist ein 24/7-Schlüsselnotdienst mit Festpreisen ab 99 Euro, der ${BUSINESS.address.cityFull}, Weilburg, Bad Camberg und den gesamten Landkreis Limburg-Weilburg innerhalb von 15–30 Minuten erreicht. Zuverlässiger Service, zerstörungsfreie Türöffnung in 99% der Fälle und transparente Festpreise ohne versteckte Kosten. Spezialisiert auf Türöffnung, Schlossaustausch, Autoöffnung, Schließanlagen und Sicherheitstechnik.`,
        "image": `${siteUrl}/images/logo.svg`,
        "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/images/logo.svg`,
            "width": 500,
            "height": 500
        },
        "@id": `${siteUrl}/#localbusiness`,
        "url": `${siteUrl}/`,
        "telephone": BUSINESS.phone.international,
        "email": BUSINESS.email,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": BUSINESS.address.street,
            "addressLocality": BUSINESS.address.cityFull,
            "addressRegion": BUSINESS.address.state,
            "postalCode": BUSINESS.address.zip,
            "addressCountry": BUSINESS.address.countryCode
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": BUSINESS.geo.lat,
            "longitude": BUSINESS.geo.lng
        },
        "areaServed": [
            {
                "@type": "GeoCircle",
                "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": BUSINESS.geo.lat,
                    "longitude": BUSINESS.geo.lng
                },
                "geoRadius": "50000"
            },
            ...cityPlaces
        ],
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday",
                    "Friday", "Saturday", "Sunday", "PublicHolidays"
                ],
                "opens": "00:00",
                "closes": "23:59",
                "description": "24/7 Notdienst — auch an Feiertagen und nachts"
            }
        ],
        "priceRange": "€€",
        "paymentAccepted": ["Cash", "Credit Card", "EC-Karte"],
        "currenciesAccepted": "EUR",
        "slogan": "Tür zu? Wir helfen sofort.",
        "foundingDate": "2010",
        "knowsLanguage": ["de", "en", "tr"],
        "sameAs": [
            // Add directory URLs as they are created:
            // "https://www.google.com/maps/place/...",
            // "https://www.yelp.de/biz/...",
            // "https://www.gelbeseiten.de/...",
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Schlüsseldienst Leistungen",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Türöffnung (zugefallene Tür)",
                        "description": "Professionelle Öffnung einer zugefallenen Tür — zerstörungsfrei in 99% der Fälle.",
                        "serviceType": "Türöffnung"
                    },
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": PRICING_DATA['tuer-zugefallen']['regulaer'].total,
                        "priceCurrency": "EUR",
                        "unitText": "Festpreis tagsüber"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Türöffnung (abgesperrt)",
                        "description": "Öffnung einer abgesperrten Tür mit Zylindertausch wenn nötig.",
                        "serviceType": "Schlossaustausch"
                    },
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": PRICING_DATA['tuer-abgesperrt']['regulaer'].total,
                        "priceCurrency": "EUR",
                        "unitText": "Festpreis tagsüber"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Autoöffnung",
                        "description": "Professionelle Fahrzeugöffnung ohne Beschädigung aller Marken.",
                        "serviceType": "Autoöffnung"
                    },
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": PRICING_DATA['autooeffnung']['regulaer'].total,
                        "priceCurrency": "EUR",
                        "unitText": "Festpreis tagsüber"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Schließanlagen",
                        "description": "Beratung, Planung und Einbau von Schließanlagen für Wohn- und Gewerbeimmobilien.",
                        "serviceType": "Schließanlagen"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Sicherheitstechnik",
                        "description": "Einbruchschutzberatung, Zusatzschlösser, Panzerriegel und elektronische Schließsysteme.",
                        "serviceType": "Sicherheitstechnik"
                    }
                }
            ]
        },
        "knowsAbout": [
            "Türöffnung",
            "Schlossaustausch",
            "Autoöffnung",
            "Schließanlagen",
            "Sicherheitstechnik",
            "Einbruchschutz",
            "Schlüssel nachmachen",
            "Notdienst"
        ]
    };
}

export function generateWebSiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": BUSINESS.name,
        "url": `${siteUrl}/`,
        "description": "24/7 Schlüsselnotdienst in Limburg an der Lahn, Weilburg, Bad Camberg und Landkreis Limburg-Weilburg. Festpreise zzgl. 30€ Anfahrt, 15–30 Min. Anfahrt.",
        "inLanguage": "de-DE",
        "publisher": {
            "@type": "Locksmith",
            "@id": `${siteUrl}/#localbusiness`
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${siteUrl}/faq?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };
}

export function generateHowToSchema(title: string, description: string) {
    return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": title,
        "description": description,
        "totalTime": "PT30M",
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "Anruf",
                "text": `Rufen Sie ${BUSINESS.name} an unter ${BUSINESS.phone.display}. Der Preis wird Ihnen direkt am Telefon mitgeteilt.`
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "Anfahrt in 15–30 Minuten",
                "text": "Unser lokaler Techniker macht sich sofort auf den Weg und ist in 15–30 Minuten bei Ihnen vor Ort."
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "Professionelle Türöffnung",
                "text": "Mit Spezialwerkzeug wird Ihre Tür zerstörungsfrei geöffnet — in 99% der Fälle ohne jede Beschädigung."
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "Festpreis-Abrechnung",
                "text": "Sie zahlen nur den vorab vereinbarten Festpreis. Keine versteckten Kosten, keine Überraschungen."
            }
        ]
    };
}
