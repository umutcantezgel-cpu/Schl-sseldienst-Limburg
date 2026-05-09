// Local data and types for city pages

export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface Logistics {
    distanceFromHQ: number; // in km
    drivingTimeMinutes: string; // e.g., "15-20"
    routeDescription: string;
}

export interface LocalFAQ {
    question: string;
    answer: string;
}

export interface CityData {
    id: string;
    name: string;
    slug: string;
    coordinates: Coordinates;
    logistics: Logistics;
    landmarks: string[];
    neighborhoods: string[];
    housingProfile: string;
    pricing: {
        basePrice: number;
        travelCost: number;
    };
    faqs: LocalFAQ[];
}

export const cities: CityData[] = [
    // --- LANDKREIS LIMBURG-WEILBURG ---
    {
        id: "limburg",
        name: "Limburg an der Lahn",
        slug: "limburg",
        coordinates: { latitude: 50.3833, longitude: 8.0667 },
        logistics: {
            distanceFromHQ: 0,
            drivingTimeMinutes: "5-10",
            routeDescription: "Hochverfügbare Einsatzsteuerung direkt aus dem Herzen Limburgs. Durch GPS-gestütztes Routing über B417 und B8 garantieren wir konkurrenzlose Eintreffzeiten.",
        },
        landmarks: ["Limburger Dom", "Alte Lahnbrücke", "Werner-Senger-Haus", "Historische Altstadt"],
        neighborhoods: ["Innenstadt", "Lindenholzhausen", "Linter", "Staffel", "Offheim", "Dietkirchen", "Ahlbach", "Eschhofen"],
        housingProfile: "Anspruchsvolle Mischung aus historischen Fachwerkhäusern in der Altstadt und modernen, sicherheitsfokussierten Wohnanlagen in den Randbezirken.",
        pricing: { basePrice: 59, travelCost: 0 },
        faqs: [
            {
                question: "Wie schnell ist der Notdienst im Limburger Stadtgebiet bei mir?",
                answer: "Als Ihr lokaler Premium-Partner mit Zentrale direkt in Limburg garantieren wir Eintreffzeiten von 5 bis 10 Minuten. In Notfällen verliert unser GPS-geleitetes Einsatzfahrzeug keine einzige Sekunde.",
            },
            {
                question: "Muss ich mit versteckten Anfahrtskosten in Limburg rechnen?",
                answer: "Unter keinen Umständen. Im gesamten Limburger Kerngebiet berechnen wir exakt 0€ Anfahrtskosten. Sie zahlen ausschließlich den absolut transparenten Festpreis für unsere Premium-Öffnung.",
            },
            {
                question: "Sind beschädigungsfreie Öffnungen bei historischen Altstadt-Türen möglich?",
                answer: "Definitiv. Wir nutzen mikro-invasive Spezialwerkzeuge, die selbst bei denkmalgeschützten Beschlägen in der Limburger Altstadt in über 99% der Fälle eine zu 100% schadensfreie Öffnung sicherstellen.",
            }
        ]
    },
    {
        id: "weilburg",
        name: "Weilburg",
        slug: "weilburg",
        coordinates: { latitude: 50.4833, longitude: 8.2667 },
        logistics: {
            distanceFromHQ: 22,
            drivingTimeMinutes: "20-25",
            routeDescription: "Direktes Express-Routing über die B49. Unsere Einsatzfahrzeuge sind für sofortige Alarmstarts nach Weilburg optimiert.",
        },
        landmarks: ["Schloss Weilburg", "Schifffahrtstunnel", "Kubacher Kristallhöhle", "Historische Altstadt"],
        neighborhoods: ["Ahausen", "Bermbach", "Drommershausen", "Gaudernbach", "Hasselbach", "Hirschhausen", "Kirschhofen", "Odersbach", "Waldhausen"],
        housingProfile: "Historische, teils anspruchsvolle Schloss-Bebauung im Zentrum sowie moderne Einfamilienhaus-Siedlungen in den Höhenlagen.",
        pricing: { basePrice: 59, travelCost: 10 },
        faqs: [
            {
                question: "Wie lange dauert die Express-Anfahrt im Notfall nach Weilburg?",
                answer: "Durch unsere strategische Anbindung an die B49 sind wir im Ernstfall meist innerhalb von 20 bis 25 Minuten im Weilburger Stadtzentrum sowie allen angrenzenden Ortsteilen.",
            },
            {
                question: "Was kostet mich eine zertifizierte Notöffnung in Weilburg?",
                answer: "Absolute Transparenz ist unser Versprechen. Wir bieten in Weilburg verbindliche Festpreise: Die zerstörungsfreie Standard-Öffnung startet bei 59 Euro, zzgl. einer minimalen, fair kalkulierten Anfahrtspauschale.",
            }
        ]
    },
    {
        id: "bad-camberg",
        name: "Bad Camberg",
        slug: "bad-camberg",
        coordinates: { latitude: 50.3, longitude: 8.2667 },
        logistics: {
            distanceFromHQ: 20,
            drivingTimeMinutes: "15-20",
            routeDescription: "Soforthilfe via Autobahn A3 mit maximaler Priorität. Direkte Abfahrt in Bad Camberg für minimale Verzögerung.",
        },
        landmarks: ["Kreuzkapelle", "Amthof", "Historischer Kurpark", "Hohenfeldkapelle"],
        neighborhoods: ["Dombach", "Erbach", "Oberselters", "Schwickershausen", "Würges"],
        housingProfile: "Klassische Kurstadt-Architektur, viele verwinkelte Fachwerkhäuser und gepflegte Premium-Wohnviertel.",
        pricing: { basePrice: 59, travelCost: 10 },
        faqs: [
            {
                question: "Ist der 24/7 Premium-Notdienst auch in Bad Camberg garantiert?",
                answer: "Absolut. Über die schnelle Anbindung der A3 erreichen unsere voll ausgestatteten Einsatzfahrzeuge Sie in Bad Camberg auch tief in der Nacht in etwa 15 bis 20 Minuten.",
            }
        ]
    },
    {
        id: "hadamar",
        name: "Hadamar",
        slug: "hadamar",
        coordinates: { latitude: 50.45, longitude: 8.05 },
        logistics: {
            distanceFromHQ: 8,
            drivingTimeMinutes: "10-15",
            routeDescription: "Bevorzugte High-Speed-Route über die B54 Richtung Norden, um Staus im Stadtgebiet zu umgehen.",
        },
        landmarks: ["Schloss Hadamar", "Liebfrauenkirche", "Fürstlicher Rosengarten"],
        neighborhoods: ["Niederhadamar", "Niederzeuzheim", "Oberzeuzheim", "Steinbach", "Oberweyer", "Niederweyer", "Faulbach"],
        housingProfile: "Eine durchmischte Struktur aus hochwertigen Einfamilienhäusern und ländlicher Bebauung mit spezifischen Sicherheitsanforderungen.",
        pricing: { basePrice: 59, travelCost: 0 },
        faqs: [
            {
                question: "Wie extrem sind die Wartezeiten für Notöffnungen in Hadamar?",
                answer: "Dank der unmittelbaren geografischen Nähe zu unserer Zentrale und der schnellen B54-Verbindung garantieren wir Eintreffzeiten von extrem schnellen 10 bis 15 Minuten in Hadamar.",
            }
        ]
    },
    {
        id: "elz",
        name: "Elz",
        slug: "elz",
        coordinates: { latitude: 50.4167, longitude: 8.0333 },
        logistics: {
            distanceFromHQ: 5,
            drivingTimeMinutes: "5-10",
            routeDescription: "Direkte Nachbarschaft zu unserer Zentrale. Blitz-Anfahrt über die B8 ohne jegliche Umwege.",
        },
        landmarks: ["Historisches Rathaus Elz", "Pfarrkirche St. Johannes der Täufer"],
        neighborhoods: ["Malmeneich"],
        housingProfile: "Sehr dichte Bebauung mit vielen Einfamilienhäusern und hohem Pendleraufkommen.",
        pricing: { basePrice: 59, travelCost: 0 },
        faqs: [
            {
                question: "Profitieren Elzer Bürger ebenfalls von der 0€-Anfahrtskosten-Garantie?",
                answer: "Exakt. Elz zählt zu unserem engsten Einsatz-Kerngebiet. Sie erhalten unseren zertifizierten Premium-Service ohne jegliche Anfahrtskosten – 100% Festpreisgarantie.",
            }
        ]
    },
    {
        id: "dornburg",
        name: "Dornburg",
        slug: "dornburg",
        coordinates: { latitude: 50.5, longitude: 8.0333 },
        logistics: {
            distanceFromHQ: 15,
            drivingTimeMinutes: "15-20",
            routeDescription: "Sichere und schnelle Routenführung nördlich von Limburg über die B54 direkt in den Westerwald.",
        },
        landmarks: ["Blasiuskapelle", "Ewiges Eis"],
        neighborhoods: ["Frickhofen", "Langendernbach", "Wilsenroth", "Dorndorf", "Thalheim"],
        housingProfile: "Typische ländliche Westerwald-Gemeinden mit sehr hohem Eigenheim-Anteil und Bedarf an robustem Einbruchschutz.",
        pricing: { basePrice: 59, travelCost: 10 },
        faqs: [
            {
                question: "Gibt es einen vollwertigen Nachtnotdienst für Dornburg und Umgebung?",
                answer: "Selbstverständlich. Unser Premium-Notdienst steht Ihnen in allen Ortsteilen von Dornburg an 365 Tagen im Jahr, 24/7 kompromisslos zur Verfügung.",
            }
        ]
    },
    {
        id: "runkel",
        name: "Runkel",
        slug: "runkel",
        coordinates: { latitude: 50.4, longitude: 8.15 },
        logistics: {
            distanceFromHQ: 10,
            drivingTimeMinutes: "15",
            routeDescription: "Zügige und hindernisfreie Einsatzfahrt östlich von Limburg, direkt entlang der Lahn.",
        },
        landmarks: ["Burg Runkel", "Schloss Schadeck", "Alte Lahnbrücke"],
        neighborhoods: ["Steeden", "Ennerich", "Schadeck", "Hofen", "Eschenau", "Wirbelau", "Arfurt", "Dehrn"],
        housingProfile: "Sensible historische Fachwerkhäuser im direkten Lahntal sowie moderne, neu errichtete Baugebiete auf den Höhenlagen.",
        pricing: { basePrice: 59, travelCost: 0 },
        faqs: [
            {
                question: "Wie schnell kann ein Techniker in abgelegenen Ortsteilen wie Steeden oder Dehrn sein?",
                answer: "Wir decken das gesamte Stadtgebiet Runkels mit höchster Priorität ab. Unabhängig vom Ortsteil garantieren wir eine extrem verlässliche Eintreffzeit von rund 15 Minuten.",
            }
        ]
    },
    {
        id: 'diez',
        name: 'Diez',
        slug: 'diez',
        coordinates: { latitude: 50.3719, longitude: 8.0016 },
        logistics: {
            distanceFromHQ: 5,
            drivingTimeMinutes: '10',
            routeDescription: 'Unmittelbare Grenznähe zu Limburg. Wir nutzen die B417/B54 für eine direkte Express-Verbindung.',
        },
        landmarks: ['Grafenschloss Diez', 'Schloss Oranienstein', 'Historische Lahnbrücke'],
        neighborhoods: ['Freiendiez', 'Aull', 'Gückingen', 'Birlenbach'],
        housingProfile: 'Anspruchsvolle historische Bebauung im Stadtkern und weitläufige, neuere Wohnviertel um Diez herum.',
        pricing: { basePrice: 59, travelCost: 0 },
        faqs: [
            {
                question: 'Greift der Premium-Service auch über die Landesgrenze hinaus in Diez (RLP)?',
                answer: 'Definitiv. Da Diez nahtlos an unser Limburger Kerngebiet anschließt, erhalten Sie auch hier unseren blitzschnellen Notdienst-Service komplett ohne Anfahrtskosten.',
            }
        ]
    },
    {
        id: 'brechen',
        name: 'Brechen',
        slug: 'brechen',
        coordinates: { latitude: 50.3583, longitude: 8.1667 },
        logistics: {
            distanceFromHQ: 12,
            drivingTimeMinutes: '15',
            routeDescription: 'Südöstlich von Limburg gelegen. Direkte und hindernisfreie Express-Route über die B8.',
        },
        landmarks: ['Berger Kirche', 'Altes Rathaus Niederbrechen'],
        neighborhoods: ['Niederbrechen', 'Oberbrechen', 'Werschau'],
        housingProfile: "Goldener Grund: Typische, gewachsene Taunus-Gemeinden mit einem Mix aus Altbau und zahlreichen Einfamilienhäusern.",
        pricing: { basePrice: 59, travelCost: 10 },
        faqs: [
            {
                question: 'Wie schnell ist professionelle Hilfe in Niederbrechen oder Oberbrechen vor Ort?',
                answer: 'Dank der optimal angebundenen B8 garantieren unsere Sicherheitsexperten eine extrem schnelle Eintreffzeit von rund 15 Minuten in ausnahmslos allen Ortsteilen von Brechen.',
            }
        ]
    },
    // --- INDIVIDUELLE LIMBURGER STADTGEBIETE ---
    {
        id: "limburg-innenstadt",
        name: "Limburg Innenstadt",
        slug: "limburg-innenstadt",
        coordinates: { latitude: 50.3833, longitude: 8.0667 },
        logistics: {
            distanceFromHQ: 1,
            drivingTimeMinutes: "15-30",
            routeDescription: "Einsatzsteuerung direkt aus dem Herzen Limburgs. Kürzeste Wege für eine blitzschnelle Türöffnung in der Innenstadt.",
        },
        landmarks: ["Limburger Dom", "Alte Lahnbrücke", "Werner-Senger-Haus", "Historische Altstadt"],
        neighborhoods: ["Innenstadt", "Altstadt"],
        housingProfile: "Mischung aus historischen Fachwerkhäusern in der Altstadt, Geschäftsgebäuden und dicht besiedelten städtischen Wohnanlagen.",
        pricing: { basePrice: 59, travelCost: 0 },
        faqs: [
            {
                question: "Wie schnell sind Sie bei Notfällen in der Limburger Innenstadt vor Ort?",
                answer: "Dank unserer zentralen Lage garantieren wir in der gesamten Limburger Innenstadt eine schnelle Eintreffzeit von 15 bis 30 Minuten.",
            },
            {
                question: "Fallen für die Innenstadt versteckte Anfahrtskosten an?",
                answer: "Nein, im Limburger Kerngebiet berechnen wir 0€ Anfahrtskosten. Sie zahlen ausschließlich den transparenten Festpreis für die Notöffnung.",
            }
        ]
    },
    {
        id: "limburg-lindenholzhausen",
        name: "Limburg Lindenholzhausen",
        slug: "limburg-lindenholzhausen",
        coordinates: { latitude: 50.3667, longitude: 8.1167 },
        logistics: {
            distanceFromHQ: 6,
            drivingTimeMinutes: "15-30",
            routeDescription: "Direkte und schnelle Einsatzfahrt über die B8, um Sie in Lindenholzhausen schnellstmöglich zu erreichen.",
        },
        landmarks: ["Wendelinuskapelle", "Historischer Ortskern"],
        neighborhoods: ["Lindenholzhausen Mitte", "Neubaugebiete"],
        housingProfile: "Stark wachsender Ortsteil mit einem Mix aus klassischem Dorfkern und vielen neu erschlossenen Einfamilienhaus-Siedlungen.",
        pricing: { basePrice: 59, travelCost: 0 },
        faqs: [
            {
                question: "Ist der Notdienst für Lindenholzhausen rund um die Uhr verfügbar?",
                answer: "Ja, wir stehen Ihnen in Lindenholzhausen 24 Stunden am Tag, 7 Tage die Woche als verlässlicher Ansprechpartner zur Verfügung.",
            },
            {
                question: "Wie hoch sind die Kosten für eine Türöffnung in Lindenholzhausen?",
                answer: "Wir bieten unsere zerstörungsfreie Standard-Türöffnung auch in Lindenholzhausen zum transparenten Festpreis ab 59€ an, ganz ohne versteckte Kosten.",
            }
        ]
    },
    {
        id: "limburg-linter",
        name: "Limburg Linter",
        slug: "limburg-linter",
        coordinates: { latitude: 50.3667, longitude: 8.0833 },
        logistics: {
            distanceFromHQ: 4,
            drivingTimeMinutes: "15-30",
            routeDescription: "Unmittelbare Anbindung an die B417 für ein schnelles Eintreffen unserer Techniker direkt in Linter.",
        },
        landmarks: ["Bürgerhaus Linter"],
        neighborhoods: ["Linter Kerngebiet", "Gewerbegebiet Linter"],
        housingProfile: "Vielfältige Bebauung mit Fokus auf große Einfamilienhäuser, moderne Mehrparteienhäuser und einem starken Gewerbeanteil.",
        pricing: { basePrice: 59, travelCost: 0 },
        faqs: [
            {
                question: "Wie schnell können Sie an Wochenenden in Linter helfen?",
                answer: "Auch an Wochenenden und Feiertagen garantieren wir eine Eintreffzeit von 15 bis 30 Minuten in ganz Linter.",
            },
            {
                question: "Bieten Sie auch Einbruchschutz-Beratung in Linter an?",
                answer: "Selbstverständlich. Neben Notöffnungen beraten wir Sie als Fachbetrieb gerne vor Ort zu moderner Sicherheitstechnik und Einbruchschutz.",
            }
        ]
    },
    {
        id: "limburg-staffel",
        name: "Limburg Staffel",
        slug: "limburg-staffel",
        coordinates: { latitude: 50.395, longitude: 8.033 },
        logistics: {
            distanceFromHQ: 3,
            drivingTimeMinutes: "15-30",
            routeDescription: "Schnelle Route entlang der Lahn und über die Limburger Straße direkt nach Staffel.",
        },
        landmarks: ["Lahnbrücke Staffel"],
        neighborhoods: ["Staffel Zentrum", "Wohngebiet Lahnaue"],
        housingProfile: "Ruhige, ländlich geprägte Wohngebiete nahe der Lahn mit vielen Einfamilien- und traditionellen Bauernhäusern.",
        pricing: { basePrice: 59, travelCost: 0 },
        faqs: [
            {
                question: "Sind Türöffnungen in Staffel wirklich schadensfrei?",
                answer: "In über 99% der Fälle öffnen wir zugefallene Türen in Staffel komplett ohne Beschädigungen an Schloss oder Zylinder.",
            },
            {
                question: "Verrechnen Sie Anfahrtskosten für Einsätze in Staffel?",
                answer: "Nein, Staffel gehört zu unserem absoluten Kerngebiet. Deshalb berechnen wir hier exakt 0€ für die Anfahrt.",
            }
        ]
    },
    {
        id: "limburg-offheim",
        name: "Limburg Offheim",
        slug: "limburg-offheim",
        coordinates: { latitude: 50.408, longitude: 8.066 },
        logistics: {
            distanceFromHQ: 5,
            drivingTimeMinutes: "15-30",
            routeDescription: "Reibungslose Anfahrt über die B49 und Kapellenstraße für schnellste Hilfe in Offheim.",
        },
        landmarks: ["Pfarrkirche St. Servatius", "Offheimer Bär"],
        neighborhoods: ["Offheim Ortskern", "Gewerbegebiet Limburger Marktplatz (Nähe)"],
        housingProfile: "Traditioneller Dorfkern gepaart mit starken angrenzenden Gewerbe- und Industriegebieten.",
        pricing: { basePrice: 59, travelCost: 0 },
        faqs: [
            {
                question: "Gibt es für das Offheimer Gewerbegebiet spezielle Schließanlagen-Services?",
                answer: "Ja, wir betreuen sowohl Privat- als auch Geschäftskunden in Offheim und bieten maßgeschneiderte Konzepte für Firmenschließanlagen.",
            },
            {
                question: "Bleibt es bei einem Festpreis auch spät nachts in Offheim?",
                answer: "Absolut. Unsere transparenten Preisstrukturen gelten rund um die Uhr. Wir kommunizieren alle Kosten verbindlich vor Arbeitsbeginn.",
            }
        ]
    },
    {
        id: "limburg-dietkirchen",
        name: "Limburg Dietkirchen",
        slug: "limburg-dietkirchen",
        coordinates: { latitude: 50.4, longitude: 8.095 },
        logistics: {
            distanceFromHQ: 4,
            drivingTimeMinutes: "15-30",
            routeDescription: "Direkt und ohne Stau über die Lahnbrücke oder Landstraßen direkt in das Zentrum von Dietkirchen.",
        },
        landmarks: ["Lubentiusbasilika", "Lahnfähre", "Historischer Dorfkern"],
        neighborhoods: ["Dietkirchen Ortsmitte", "Lahnpromenade"],
        housingProfile: "Historisch wertvolle Bebauung rund um die Lubentiusbasilika sowie exklusive Wohnanlagen am Lahnufer.",
        pricing: { basePrice: 59, travelCost: 0 },
        faqs: [
            {
                question: "Können alte, historische Türen in Dietkirchen geöffnet werden?",
                answer: "Unsere Monteure sind mit mikro-invasivem Spezialwerkzeug ausgestattet, um selbst anspruchsvolle oder denkmalgeschützte Türen schonend zu öffnen.",
            },
            {
                question: "Wie schnell ist der Schlüsseldienst in Dietkirchen vor Ort?",
                answer: "Dank der Nähe zur Limburger Zentrale erreichen wir Dietkirchen im Notfall innerhalb von 15 bis 30 Minuten.",
            }
        ]
    },
    {
        id: "limburg-ahlbach",
        name: "Limburg Ahlbach",
        slug: "limburg-ahlbach",
        coordinates: { latitude: 50.416, longitude: 8.083 },
        logistics: {
            distanceFromHQ: 7,
            drivingTimeMinutes: "15-30",
            routeDescription: "Über die B49 erreichen wir Ahlbach auf dem direktesten Weg für Notfälle aller Art.",
        },
        landmarks: ["Pfarrkirche St. Bartholomäus"],
        neighborhoods: ["Ahlbach Mitte"],
        housingProfile: "Ruhiger, kleinerer Ortsteil mit starken dörflichen Strukturen und vielen gepflegten Familienhäusern.",
        pricing: { basePrice: 59, travelCost: 0 },
        faqs: [
            {
                question: "Wird der Service in Ahlbach als Notdienst abgedeckt?",
                answer: "Ahlbach ist ein integraler Bestandteil unseres Servicegebiets. Wir garantieren Ihnen hier denselben schnellen 24/7 Notdienst wie in der Innenstadt.",
            },
            {
                question: "Welche Zahlungsmöglichkeiten habe ich vor Ort in Ahlbach?",
                answer: "Wir bieten volle Flexibilität: Sie können nach der erfolgreichen Türöffnung bequem in bar, per EC-Karte oder über PayPal bezahlen.",
            }
        ]
    },
    {
        id: "limburg-eschhofen",
        name: "Limburg Eschhofen",
        slug: "limburg-eschhofen",
        coordinates: { latitude: 50.383, longitude: 8.1 },
        logistics: {
            distanceFromHQ: 5,
            drivingTimeMinutes: "15-30",
            routeDescription: "Schnelle Anbindung östlich der Innenstadt direkt nach Eschhofen und Mühlen.",
        },
        landmarks: ["ICE Bahnhof Limburg Süd (Grenze)", "Lahnaue"],
        neighborhoods: ["Eschhofen", "Mühlen"],
        housingProfile: "Dynamischer Stadtteil mit engem Mix aus verkehrsgünstig gelegenen Wohnungen nahe ICE-Bahnhof und klassischen Wohngebieten.",
        pricing: { basePrice: 59, travelCost: 0 },
        faqs: [
            {
                question: "Dauert die Anfahrt nach Eschhofen Mühlen länger?",
                answer: "Wir navigieren per GPS-Einsatzsteuerung. Beide Bereiche, Eschhofen sowie Mühlen, erreichen wir verlässlich in 15 bis 30 Minuten.",
            },
            {
                question: "Ist die Türöffnung in Eschhofen auch an Feiertagen möglich?",
                answer: "Unser 24-Stunden-Service steht Ihnen in ganz Eschhofen das ganze Jahr über, auch an Wochenenden und allen Feiertagen, zur Verfügung.",
            }
        ]
    }
];

// Helper to find city by slug
export function getCityBySlug(slug: string): CityData | undefined {
    return cities.find((c) => c.slug === slug);
}

// Generate all possible static paths for Next.js app router
export function getAllCitySlugs(): { stadtgebiet: string }[] {
    return cities.map((city) => ({ stadtgebiet: city.slug }));
}
