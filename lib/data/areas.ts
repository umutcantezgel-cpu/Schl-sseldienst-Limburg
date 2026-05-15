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

export interface LocalContent {
    introText: string;          // 2-3 unique sentences about the city
    securityTip: string;        // Local security tip specific to the area
    neighborhoodGuide: string;  // Description of the district structure
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
    localContent: LocalContent;
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
        pricing: { basePrice: 99, travelCost: 0 },
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
            },
            {
                question: "Öffnen Sie auch Tresore im Limburger Stadtgebiet?",
                answer: "Ja, unsere Meister-Techniker verfügen über eine VdS-Zertifizierung und öffnen auch Tresore bis Sicherheitsstufe B fachgerecht. Ob Wertschutzschrank oder Dokumentenschrank – wir helfen diskret und zerstörungsfrei.",
            }
        ],
        localContent: {
            introText: "Limburg an der Lahn – die historische Domstadt am Schnittpunkt von Taunus und Westerwald ist unser Firmenhauptsitz. Seit der Unternehmensgründung betreuen wir hier tausende zufriedener Kunden mit höchster Fachkompetenz. Vom Fachwerk der Altstadt bis zu den modernen Neubauvierteln kennen wir jede Straße und jeden Schließtyp.",
            securityTip: "Tipp für Limburger Altstadt-Bewohner: Historische Haustüren mit einfachen Buntbartschlössern sind ein beliebtes Einbruchsziel. Wir empfehlen die Nachrüstung mit einem Zusatzschloss (DIN 18251, Klasse 4) – das erhöht den Einbruchschutz um bis zu 80%, ohne den Denkmalschutz zu verletzen.",
            neighborhoodGuide: "Das Limburger Stadtgebiet gliedert sich in die Kernstadt mit der historischen Altstadt rund um den berühmten Dom und insgesamt acht Stadtteile. Jeder Ortsteil hat seine eigene Bebauungsstruktur: Von den denkmalgeschützten Fachwerkhäusern am Fischmarkt über die dicht besiedelten Wohngebiete in Eschhofen bis zu den ländlich geprägten Siedlungen in Ahlbach und Staffel."
        }
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
        pricing: { basePrice: 99, travelCost: 10 },
        faqs: [
            {
                question: "Wie lange dauert die Express-Anfahrt im Notfall nach Weilburg?",
                answer: "Durch unsere strategische Anbindung an die B49 sind wir im Ernstfall meist innerhalb von 20 bis 25 Minuten im Weilburger Stadtzentrum sowie allen angrenzenden Ortsteilen.",
            },
            {
                question: "Was kostet mich eine zertifizierte Notöffnung in Weilburg?",
                answer: "Absolute Transparenz ist unser Versprechen. Wir bieten in Weilburg verbindliche Festpreise: Die zerstörungsfreie Standard-Öffnung startet bei 99 Euro, zzgl. einer minimalen, fair kalkulierten Anfahrtspauschale.",
            },
            {
                question: "Können Sie Schließanlagen im Weilburger Schlossbereich warten?",
                answer: "Ja, wir sind mit den speziellen Anforderungen historischer Gebäude bestens vertraut. Im Umfeld des Weilburger Schlosses arbeiten wir mit besonderer Sorgfalt und denkmalschutzkonformen Techniken.",
            }
        ],
        localContent: {
            introText: "Weilburg, die barocke Residenzstadt an der Lahn, besticht durch ihr majestätisches Schloss und den einzigartigen Schifffahrtstunnel. Als Ihr regionaler Sicherheitspartner kennen wir die besonderen Herausforderungen der Weilburger Bausubstanz – von historischen Schlössern bis zu modernen Wohnkomplexen in Ahausen und Hirschhausen.",
            securityTip: "Empfehlung für Weilburger Eigenheimbesitzer: Gerade in den abgelegenen Ortsteilen wie Bermbach oder Gaudernbach empfehlen wir eine mechanische Grundsicherung mit Pilzkopfverriegelung an allen Fenstern im Erdgeschoss. Das ist die kostengünstigste Maßnahme mit dem höchsten Schutzfaktor.",
            neighborhoodGuide: "Weilburg verteilt sich auf die historische Kernstadt mit Schloss und Altstadt sowie neun Ortsteile. Die Höhenlage der Stadt und die vielen verwundenen Gassen im Zentrum erfordern präzise Ortskenntnis. Unsere Techniker navigieren per GPS direkt zum Einsatzort – ob in Odersbach, Waldhausen oder direkt an der Lahn."
        }
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
        pricing: { basePrice: 99, travelCost: 10 },
        faqs: [
            {
                question: "Ist der 24/7 Premium-Notdienst auch in Bad Camberg garantiert?",
                answer: "Absolut. Über die schnelle Anbindung der A3 erreichen unsere voll ausgestatteten Einsatzfahrzeuge Sie in Bad Camberg auch tief in der Nacht in etwa 15 bis 20 Minuten.",
            },
            {
                question: "Bieten Sie in Bad Camberg auch Beratung zum Einbruchschutz an?",
                answer: "Selbstverständlich. Wir bieten kostenlose Erstberatungen zum Thema Einbruchschutz für Privathaushalte und Gewerbeobjekte in Bad Camberg. Unsere Empfehlungen basieren auf den aktuellen polizeilichen Einbruchstatistiken für den Goldenen Grund.",
            },
            {
                question: "Wie viel kostet eine Türöffnung in Bad Camberg inklusive Anfahrt?",
                answer: "Unsere zerstörungsfreie Standard-Öffnung beginnt bei 99€. In Bad Camberg kommt eine transparente Anfahrtspauschale von 10€ hinzu. Den exakten Endpreis nennen wir Ihnen verbindlich vor Arbeitsbeginn am Telefon.",
            }
        ],
        localContent: {
            introText: "Bad Camberg – die traditionsreiche Kurstadt im Goldenen Grund verbindet historisches Flair mit moderner Lebensqualität. Als Ihr Schlüsseldienst-Partner für die Region kennen wir die Besonderheiten der Bad Camberger Bausubstanz, von den verwunkelten Altstadtgassen bis zu den gepflegten Kurviertel-Residenzen.",
            securityTip: "Sicherheitshinweis für Bad Camberger Kurpark-Anwohner: Die erhöhte Besucher-Fluktuation im Kurgebiet macht Wohnungen in Erdgeschosslage besonders anfällig. Wir empfehlen abschließbare Fenstergriffe und einen Querriegelschloss als effektive Basisabsicherung.",
            neighborhoodGuide: "Die Kurstadt Bad Camberg erstreckt sich über die historische Altstadt mit Amthof und Kreuzkapelle sowie fünf Ortsteile. Besonders in Erbach und Würges treffen wir häufig auf ältere Schließsysteme, die von einer Modernisierung profitieren. Die schnelle A3-Anbindung garantiert unsere Express-Anfahrt."
        }
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
        pricing: { basePrice: 99, travelCost: 0 },
        faqs: [
            {
                question: "Wie extrem sind die Wartezeiten für Notöffnungen in Hadamar?",
                answer: "Dank der unmittelbaren geografischen Nähe zu unserer Zentrale und der schnellen B54-Verbindung garantieren wir Eintreffzeiten von extrem schnellen 10 bis 15 Minuten in Hadamar.",
            },
            {
                question: "Gibt es in Hadamar einen Nachtzuschlag für Notöffnungen?",
                answer: "Wir arbeiten grundsätzlich mit transparenten Festpreisen. Den Endpreis kommunizieren wir Ihnen vor Arbeitsbeginn telefonisch. Nachtaufschläge sind in unserem Preismodell bereits fair einkalkuliert und werden nie nachträglich erhoben.",
            },
            {
                question: "Welche Schließsysteme verbauen Sie in Hadamar?",
                answer: "Wir setzen ausschließlich auf zertifizierte Markenschließsysteme von ABUS, BKS und DOM. Alle verbauten Produkte erfüllen mindestens die DIN 18252 Norm und bieten maximalen Einbruchschutz.",
            }
        ],
        localContent: {
            introText: "Hadamar, die historische Fürstenstadt nördlich von Limburg, liegt nur 8 Kilometer von unserer Zentrale entfernt. Mit dem fürstlichen Rosengarten und dem imposanten Schloss Hadamar vereint die Stadt kulturelles Erbe mit modernem Wohnkomfort. Unsere Techniker sind über die B54 in 10–15 Minuten vor Ort.",
            securityTip: "Sicherheitsempfehlung für Hadamarer Eigenheimbesitzer: In den ländlich geprägten Ortsteilen Oberzeuzheim und Steinbach empfehlen wir die Installation eines einbruchhemmenden Schutzbeschlages (ES1) an der Haustür. Kosten-Nutzen-Verhältnis: hervorragend.",
            neighborhoodGuide: "Hadamar umfasst die Kernstadt mit Schloss und historischer Altstadt sowie sieben Ortsteile von Niederhadamar bis Faulbach. Die Bebauung reicht von gepflegten Altbauten im Zentrum bis zu modernen Einfamilienhaussiedlungen in den Höhenlagen. Jeder Ortsteil wird von uns vollumfänglich betreut."
        }
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
        pricing: { basePrice: 99, travelCost: 0 },
        faqs: [
            {
                question: "Profitieren Elzer Bürger ebenfalls von der 0€-Anfahrtskosten-Garantie?",
                answer: "Exakt. Elz zählt zu unserem engsten Einsatz-Kerngebiet. Sie erhalten unseren zertifizierten Premium-Service ohne jegliche Anfahrtskosten – 100% Festpreisgarantie.",
            },
            {
                question: "Wie funktioniert eine Autoöffnung in Elz?",
                answer: "Unsere Techniker nutzen schonende Spezialwerkzeuge für die zerstörungsfreie KFZ-Öffnung. Ob Elzer Pendlerparkplatz oder Eigenheim-Garage – wir öffnen Ihr Fahrzeug ohne Kratzer und Beschädigungen.",
            },
            {
                question: "Kann ich meine Schließanlage in Elz von Ihnen nachrüsten lassen?",
                answer: "Ja, wir bieten in Elz die komplette Palette: Von der Einzelzylinder-Aufrüstung bis zur elektronischen Schließanlage für Mehrfamilienhäuser beraten wir Sie gerne vor Ort.",
            }
        ],
        localContent: {
            introText: "Elz – die dynamische Gemeinde direkt vor den Toren Limburgs ist unser unmittelbarer Nachbar und Teil unseres engsten Einsatz-Kerngebiets. Mit nur 5 Kilometern Entfernung zu unserer Zentrale profitieren Elzer Bürger von den schnellsten Eintreffzeiten und garantiert 0€ Anfahrtskosten.",
            securityTip: "Tipp für Elzer Pendler: Da viele Elzer täglich nach Frankfurt oder Koblenz pendeln, stehen Häuser tagsüber oft leer. Wir empfehlen Zeitschaltuhren für die Beleuchtung und einen Briefkasten-Schutz, um Abwesenheit nicht zu signalisieren.",
            neighborhoodGuide: "Elz ist eine kompakte, aber dicht besiedelte Gemeinde mit dem Ortsteil Malmeneich. Die hohe Einfamilienhaus-Dichte und das starke Pendleraufkommen prägen das Sicherheitsprofil. Durch die direkte B8-Anbindung erreichen unsere Einsatzfahrzeuge jeden Winkel von Elz in unter 10 Minuten."
        }
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
        pricing: { basePrice: 99, travelCost: 10 },
        faqs: [
            {
                question: "Gibt es einen vollwertigen Nachtnotdienst für Dornburg und Umgebung?",
                answer: "Selbstverständlich. Unser Premium-Notdienst steht Ihnen in allen Ortsteilen von Dornburg an 365 Tagen im Jahr, 24/7 kompromisslos zur Verfügung.",
            },
            {
                question: "Wie hoch sind die Kosten für einen Einsatz in Dornburg?",
                answer: "Unsere zerstörungsfreie Standard-Türöffnung beginnt bei 99€ zzgl. einer transparenten Anfahrtspauschale von 10€ für Dornburg. Der Gesamtpreis wird Ihnen vor Arbeitsbeginn verbindlich am Telefon genannt.",
            },
            {
                question: "Erreichen Sie auch abgelegene Ortsteile wie Wilsenroth oder Thalheim?",
                answer: "Ja, wir decken alle Dornburger Ortsteile vollständig ab – von Frickhofen über Langendernbach bis Thalheim. Unsere GPS-gesteuerte Routenplanung garantiert minimale Anfahrtszeiten.",
            }
        ],
        localContent: {
            introText: "Dornburg – die Westerwald-Gemeinde nördlich von Limburg umfasst fünf Ortsteile mit überwiegend ländlicher Prägung. Als Ihr regionaler Sicherheitsexperte kennen wir die Besonderheiten der Dornburger Bebauung: Von den traditionellen Bauernhäusern in Dorndorf bis zu den modernen Siedlungen in Frickhofen.",
            securityTip: "Empfehlung für Dornburger Hausbesitzer: Aufgrund des hohen Eigenheim-Anteils in der Gemeinde empfehlen wir eine Kombination aus mechanischem Einbruchschutz und Bewegungsmeldern mit Außenbeleuchtung. Diese Maßnahme reduziert das Einbruchrisiko nachweislich um über 50%.",
            neighborhoodGuide: "Die Gemeinde Dornburg setzt sich aus den fünf Ortsteilen Frickhofen, Langendernbach, Wilsenroth, Dorndorf und Thalheim zusammen. Die typisch ländliche Westerwald-Bebauung mit großen Grundstücken erfordert besondere Sicherheitskonzepte. Über die B54 sind wir in 15–20 Minuten in jedem Ortsteil."
        }
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
        pricing: { basePrice: 99, travelCost: 0 },
        faqs: [
            {
                question: "Wie schnell kann ein Techniker in abgelegenen Ortsteilen wie Steeden oder Dehrn sein?",
                answer: "Wir decken das gesamte Stadtgebiet Runkels mit höchster Priorität ab. Unabhängig vom Ortsteil garantieren wir eine extrem verlässliche Eintreffzeit von rund 15 Minuten.",
            },
            {
                question: "Können historische Fachwerkhaus-Türen in Runkel schadensfrei geöffnet werden?",
                answer: "Absolut. Gerade im historischen Lahntal-Bereich von Runkel arbeiten unsere Techniker mit mikro-invasivem Spezialwerkzeug, das auch bei denkmalgeschützten Beschlägen eine 100% schadensfreie Öffnung gewährleistet.",
            },
            {
                question: "Gibt es in Runkel auch KFZ-Öffnungen?",
                answer: "Selbstverständlich. Ob am Burgenblick-Parkplatz oder auf der Lahnbrücke – wir öffnen Ihr Fahrzeug in Runkel schnell und ohne Beschädigungen.",
            }
        ],
        localContent: {
            introText: "Runkel – die malerische Burgenstadt an der Lahn liegt nur 10 Kilometer östlich von Limburg. Mit Burg Runkel und Schloss Schadeck bietet die Stadt ein einzigartiges historisches Panorama. Unsere Einsatzfahrzeuge folgen der Lahn und sind in rund 15 Minuten vor Ort.",
            securityTip: "Sicherheitstipp für Runkeler Lahntal-Bewohner: Hochwassergefährdete Bereiche entlang der Lahn profitieren von rostfreien Edelstahl-Schließzylindern. Wir beraten Sie gerne zu wetterfesten Schließlösungen, die auch Feuchtigkeit standhalten.",
            neighborhoodGuide: "Runkel erstreckt sich über die historische Kernstadt mit der berühmten Doppelburg-Silhouette und acht weitere Ortsteile. Von Steeden über Ennerich bis Wirbelau – jeder Ortsteil hat seinen eigenen Charakter. Besonders die Fachwerkhäuser im Lahntal erfordern eine sensible Sicherheitstechnik."
        }
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
        pricing: { basePrice: 99, travelCost: 0 },
        faqs: [
            {
                question: 'Greift der Premium-Service auch über die Landesgrenze hinaus in Diez (RLP)?',
                answer: 'Definitiv. Da Diez nahtlos an unser Limburger Kerngebiet anschließt, erhalten Sie auch hier unseren blitzschnellen Notdienst-Service komplett ohne Anfahrtskosten.',
            },
            {
                question: 'Welche Sicherheitssysteme empfehlen Sie für historische Gebäude in Diez?',
                answer: 'Für die historische Bebauung rund um das Grafenschloss und in Freiendiez empfehlen wir nicht-invasive Sicherheitslösungen wie Panzerriegel und Zusatzschlösser, die ohne Bohrungen in historischen Türrahmen auskommen.',
            },
            {
                question: 'Ist der Schlüsseldienst auch für Aull und Gückingen zuständig?',
                answer: 'Ja, unser Einsatzgebiet umfasst ganz Diez inklusive aller angrenzenden Ortsteile wie Aull, Gückingen und Birlenbach. Überall gilt unsere 0€-Anfahrtskosten-Garantie.',
            }
        ],
        localContent: {
            introText: "Diez – die Grafenstadt an der Lahn liegt nur einen Steinwurf von Limburg entfernt, direkt an der Landesgrenze zu Rheinland-Pfalz. Mit dem imposanten Grafenschloss und Schloss Oranienstein vereint Diez preußisches Erbe mit moderner Urbanität. Trotz Landesgrenze gehört Diez zu unserem absoluten Kerngebiet.",
            securityTip: "Empfehlung für Diezer Altstadt-Bewohner: Die historischen Hoftore und Hauseingangs-Portale im Grafenviertel bieten oft wenig Schutz. Ein hochwertiges Kastenschloss mit Sperrbügel (ca. 150€ inkl. Einbau) erhöht die Sicherheit signifikant und ist denkmalschutzkonform.",
            neighborhoodGuide: "Diez gliedert sich in die historische Altstadt rund um das Grafenschloss, den Stadtteil Freiendiez sowie die angrenzenden Gemeinden Aull, Gückingen und Birlenbach. Die Bebauungsstruktur reicht von ehrwürdigen Fachwerkhäusern bis zu weitläufigen Neubaugebieten."
        }
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
        pricing: { basePrice: 99, travelCost: 10 },
        faqs: [
            {
                question: 'Wie schnell ist professionelle Hilfe in Niederbrechen oder Oberbrechen vor Ort?',
                answer: 'Dank der optimal angebundenen B8 garantieren unsere Sicherheitsexperten eine extrem schnelle Eintreffzeit von rund 15 Minuten in ausnahmslos allen Ortsteilen von Brechen.',
            },
            {
                question: 'Was kostet eine Notöffnung in Brechen?',
                answer: 'Die zerstörungsfreie Standardöffnung in Brechen startet bei 99€ zzgl. einer transparenten Anfahrtspauschale von 10€. Den verbindlichen Endpreis nennen wir immer vor Arbeitsbeginn.',
            },
            {
                question: 'Bieten Sie auch Schlossaustausch in Brechen an?',
                answer: 'Ja, nach einer Türöffnung oder bei Bedarf tauschen wir direkt vor Ort Ihren Schließzylinder gegen ein hochwertiges Markenprodukt aus. Wir führen alle gängigen ABUS- und BKS-Zylinder in unseren Einsatzfahrzeugen mit.',
            }
        ],
        localContent: {
            introText: "Brechen im Goldenen Grund – die Gemeinde südöstlich von Limburg umfasst die drei Ortsteile Niederbrechen, Oberbrechen und Werschau. Die exzellente B8-Anbindung garantiert unseren Express-Service mit nur 15 Minuten Anfahrtszeit in jeden Winkel der Gemeinde.",
            securityTip: "Tipp für Brechener Hausbesitzer: Der Goldene Grund verzeichnet im Landkreis überdurchschnittlich viele Tageswohnungseinbrüche. Wir empfehlen eine Nachrüstung der Terrassentüren mit Pilzkopfverriegelung – die statistisch häufigste Einbruchstelle bei Einfamilienhäusern.",
            neighborhoodGuide: "Die Gemeinde Brechen setzt sich aus Niederbrechen (mit historischem Rathaus), Oberbrechen und Werschau zusammen. Die typische Taunus-Bebauung aus Altbau und modernen Einfamilienhäusern prägt das Ortsbild. Alle drei Ortsteile liegen direkt an der B8 und sind optimal für unsere Express-Anfahrt erreichbar."
        }
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
        pricing: { basePrice: 99, travelCost: 0 },
        faqs: [
            {
                question: "Wie schnell sind Sie bei Notfällen in der Limburger Innenstadt vor Ort?",
                answer: "Dank unserer zentralen Lage garantieren wir in der gesamten Limburger Innenstadt eine schnelle Eintreffzeit von 15 bis 30 Minuten.",
            },
            {
                question: "Fallen für die Innenstadt versteckte Anfahrtskosten an?",
                answer: "Nein, im Limburger Kerngebiet berechnen wir 0€ Anfahrtskosten. Sie zahlen ausschließlich den transparenten Festpreis für die Notöffnung.",
            },
            {
                question: "Welche Zahlungsarten akzeptieren Sie in der Innenstadt?",
                answer: "Wir bieten maximale Flexibilität: Barzahlung, EC-Karte und Überweisung sind in der Limburger Innenstadt möglich. Sie erhalten selbstverständlich eine ordnungsgemäße Rechnung.",
            }
        ],
        localContent: {
            introText: "Die Limburger Innenstadt – das pulsierende Herz der Domstadt mit ihren berühmten Fachwerkhäusern, dem Dom und der historischen Altstadt. Als direkter Nachbar kennen wir hier jede Gasse und jeden Haustyp. Von der Domplatte bis zur Alten Lahnbrücke sind wir in wenigen Minuten bei Ihnen.",
            securityTip: "Besonderer Hinweis für Altstadt-Bewohner: Viele der historischen Haustüren in der Fußgängerzone verwenden noch veraltete Buntbart-Schlösser. Ein Upgrade auf einen modernen Profilzylinder (ab 30€) erhöht Ihren Schutz sofort und deutlich.",
            neighborhoodGuide: "Die Innenstadt Limburgs umfasst die historische Altstadt rund um den Dom, das Geschäftsviertel entlang der Werner-Senger-Straße und die Wohngebiete bis zur Lahn. Die dichte Bebauung mit vielen Mehrparteienhäusern und Geschäftsräumen erfordert schnelle Verfügbarkeit – genau unser Kerngeschäft."
        }
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
        pricing: { basePrice: 99, travelCost: 0 },
        faqs: [
            {
                question: "Ist der Notdienst für Lindenholzhausen rund um die Uhr verfügbar?",
                answer: "Ja, wir stehen Ihnen in Lindenholzhausen 24 Stunden am Tag, 7 Tage die Woche als verlässlicher Ansprechpartner zur Verfügung.",
            },
            {
                question: "Wie hoch sind die Kosten für eine Türöffnung in Lindenholzhausen?",
                answer: "Wir bieten unsere zerstörungsfreie Standard-Türöffnung auch in Lindenholzhausen zum transparenten Festpreis ab 99€ an, ganz ohne versteckte Kosten.",
            },
            {
                question: "Kann ich nach der Türöffnung in Lindenholzhausen direkt den Zylinder tauschen lassen?",
                answer: "Ja, unsere Einsatzfahrzeuge führen hochwertige Markenzylinder mit. Nach einer Öffnung können wir bei Bedarf sofort einen neuen Schließzylinder einsetzen – direkt vor Ort und zum Festpreis.",
            }
        ],
        localContent: {
            introText: "Lindenholzhausen – der wachsende Limburger Stadtteil östlich der Kernstadt verbindet dörflichen Charme mit modernem Wohnkomfort. Zahlreiche Neubaugebiete machen Lindenholzhausen zu einem der dynamischsten Stadtteile.",
            securityTip: "Empfehlung für Lindenholzhausener Neubau-Bewohner: Auch bei Neubauten lohnt sich ein Upgrade des vom Bauträger verbauten Standard-Schließzylinders. Ein Sicherheitszylinder mit Aufbohrschutz und Ziehschutz (ab 45€) bietet deutlich besseren Einbruchschutz.",
            neighborhoodGuide: "Lindenholzhausen erstreckt sich von der historischen Wendelinuskapelle im Ortskern bis zu den weitläufigen Neubaugebieten im Süden. Der Mix aus traditionellem Dorfkern und modernen Einfamilienhaus-Siedlungen prägt die Sicherheitsanforderungen."
        }
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
        pricing: { basePrice: 99, travelCost: 0 },
        faqs: [
            {
                question: "Wie schnell können Sie an Wochenenden in Linter helfen?",
                answer: "Auch an Wochenenden und Feiertagen garantieren wir eine Eintreffzeit von 15 bis 30 Minuten in ganz Linter.",
            },
            {
                question: "Bieten Sie auch Einbruchschutz-Beratung in Linter an?",
                answer: "Selbstverständlich. Neben Notöffnungen beraten wir Sie als Fachbetrieb gerne vor Ort zu moderner Sicherheitstechnik und Einbruchschutz.",
            },
            {
                question: "Wie verläuft eine Sicherheitsberatung in Linter?",
                answer: "Wir analysieren vor Ort alle Schwachstellen Ihrer Türen, Fenster und Schließsysteme. Anschließend erhalten Sie eine schriftliche Empfehlung mit konkreten Maßnahmen und transparenten Preisen.",
            }
        ],
        localContent: {
            introText: "Linter – der vielseitige Limburger Stadtteil vereint Wohnen, Gewerbe und Industrie auf engem Raum. Die direkte Anbindung an die B417 macht Linter zu einem wichtigen Wirtschaftsstandort.",
            securityTip: "Tipp für Linterer Gewerbetreibende: Gewerbeobjekte profitieren besonders von elektronischen Schließanlagen mit Protokollfunktion. So können Sie nachvollziehen, wer wann Zugang hatte.",
            neighborhoodGuide: "Linter besteht aus dem Wohnkerngebiet und dem angrenzenden Gewerbegebiet. Die vielfältige Bebauung reicht von großen Einfamilienhäusern über moderne Mehrparteienhäuser bis zu Gewerbeflächen."
        }
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
        pricing: { basePrice: 99, travelCost: 0 },
        faqs: [
            {
                question: "Sind Türöffnungen in Staffel wirklich schadensfrei?",
                answer: "In über 99% der Fälle öffnen wir zugefallene Türen in Staffel komplett ohne Beschädigungen an Schloss oder Zylinder.",
            },
            {
                question: "Verrechnen Sie Anfahrtskosten für Einsätze in Staffel?",
                answer: "Nein, Staffel gehört zu unserem absoluten Kerngebiet. Deshalb berechnen wir hier exakt 0€ für die Anfahrt.",
            },
            {
                question: "Bieten Sie in Staffel auch präventive Sicherheitsberatung an?",
                answer: "Ja, wir führen in Staffel kostenlose Sicherheits-Checks durch. Dabei bewerten wir Ihre Türen, Fenster und Schließsysteme und geben Ihnen konkrete Handlungsempfehlungen.",
            }
        ],
        localContent: {
            introText: "Staffel – der idyllische Limburger Stadtteil an der Lahn besticht durch seine ruhige Wohnlage und die Nähe zur Natur. Nur 3 Kilometer von unserer Zentrale entfernt gehört Staffel zu unserem absoluten Kerngebiet.",
            securityTip: "Sicherheitstipp für Staffeler Anwohner: Die ruhige Lage nahe der Lahn macht Erdgeschosswohnungen anfällig für Einbruchsversuche. Abschließbare Fenstergriffe und ein Querriegelschloss bilden eine solide Grundsicherung.",
            neighborhoodGuide: "Staffel liegt westlich der Limburger Kernstadt direkt an der Lahn. Die überwiegend ländliche Wohnbebauung mit Einfamilien- und traditionellen Bauernhäusern prägt den Ortskern. Das Wohngebiet Lahnaue bietet moderne Siedlungen."
        }
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
        pricing: { basePrice: 99, travelCost: 0 },
        faqs: [
            {
                question: "Gibt es für das Offheimer Gewerbegebiet spezielle Schließanlagen-Services?",
                answer: "Ja, wir betreuen sowohl Privat- als auch Geschäftskunden in Offheim und bieten maßgeschneiderte Konzepte für Firmenschließanlagen.",
            },
            {
                question: "Bleibt es bei einem Festpreis auch spät nachts in Offheim?",
                answer: "Absolut. Unsere transparenten Preisstrukturen gelten rund um die Uhr. Wir kommunizieren alle Kosten verbindlich vor Arbeitsbeginn.",
            },
            {
                question: "Können Sie auch Garagentore in Offheim öffnen?",
                answer: "Ja, neben Haus- und Wohnungstüren öffnen unsere Techniker auch Garagentore und Kellertüren. Für Gewerbeobjekte bieten wir zudem Schließanlagen-Beratung direkt vor Ort.",
            }
        ],
        localContent: {
            introText: "Offheim – der Limburger Stadtteil nördlich der Kernstadt verbindet traditionelles Dorfleben mit der Nähe zu wichtigen Gewerbe- und Industriegebieten. Als lokaler Sicherheitspartner betreuen wir Privathaushalte und Gewerbeobjekte.",
            securityTip: "Empfehlung für Offheimer Gewerbetreibende: Gewerbeflächen profitieren von Doppelzylinder-Systemen mit Gefahrenfunktion. So können Türen auch bei steckendem Schlüssel von außen geöffnet werden – ideal für Notfälle.",
            neighborhoodGuide: "Offheim gliedert sich in den traditionellen Ortskern mit der Pfarrkirche St. Servatius und die angrenzenden Gewerbeflächen. Die Mischung aus Wohn- und Gewerbegebiet erfordert vielseitige Sicherheitslösungen."
        }
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
        pricing: { basePrice: 99, travelCost: 0 },
        faqs: [
            {
                question: "Können alte, historische Türen in Dietkirchen geöffnet werden?",
                answer: "Unsere Monteure sind mit mikro-invasivem Spezialwerkzeug ausgestattet, um selbst anspruchsvolle oder denkmalgeschützte Türen schonend zu öffnen.",
            },
            {
                question: "Wie schnell ist der Schlüsseldienst in Dietkirchen vor Ort?",
                answer: "Dank der Nähe zur Limburger Zentrale erreichen wir Dietkirchen im Notfall innerhalb von 15 bis 30 Minuten.",
            },
            {
                question: "Bieten Sie spezielle Lösungen für denkmalgeschützte Gebäude in Dietkirchen?",
                answer: "Absolut. Im historischen Umfeld der Lubentiusbasilika arbeiten wir ausschließlich mit denkmalschutzkonformen Methoden, die den Charakter historischer Türen bewahren.",
            }
        ],
        localContent: {
            introText: "Dietkirchen – der malerische Limburger Stadtteil am Lahnufer ist berühmt für die ehrwürdige Lubentiusbasilika. Die historisch wertvolle Bebauung und die exklusiven Wohnlagen am Fluss machen Dietkirchen zu einem besonderen Einsatzgebiet.",
            securityTip: "Sicherheitshinweis für Dietkirchener Lahnufer-Bewohner: Historische Haustüren mit einfachen Schlössern sind besonders gefährdet. Ein nachrüstbares Panzerriegelschloss (ab 120€ inkl. Montage) bietet maximalen Schutz ohne Eingriff in die Bausubstanz.",
            neighborhoodGuide: "Dietkirchen erstreckt sich rund um die Lubentiusbasilika auf dem Felsen über der Lahn. Die Ortsmitte mit historischen Fachwerkhäusern und die exklusiven Wohnlagen entlang der Lahnpromenade bilden ein einzigartiges Ensemble."
        }
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
        pricing: { basePrice: 99, travelCost: 0 },
        faqs: [
            {
                question: "Wird der Service in Ahlbach als Notdienst abgedeckt?",
                answer: "Ahlbach ist ein integraler Bestandteil unseres Servicegebiets. Wir garantieren Ihnen hier denselben schnellen 24/7 Notdienst wie in der Innenstadt.",
            },
            {
                question: "Welche Zahlungsmöglichkeiten habe ich vor Ort in Ahlbach?",
                answer: "Wir bieten volle Flexibilität: Sie können nach der erfolgreichen Türöffnung bequem in bar, per EC-Karte oder über PayPal bezahlen.",
            },
            {
                question: "Wie sicher ist die Schlossöffnung in Ahlbach bei älteren Türen?",
                answer: "Unsere Techniker sind speziell für ältere Schließsysteme geschult, wie sie in der dörflichen Bebauung von Ahlbach häufig vorkommen. In über 99% der Fälle öffnen wir komplett zerstörungsfrei.",
            }
        ],
        localContent: {
            introText: "Ahlbach – der ruhige Limburger Stadtteil im Norden besticht durch seine dörfliche Idylle und die Nähe zur Natur. Als Teil unseres Kerngebiets profitieren Ahlbacher Bürger von 0€ Anfahrtskosten und unserem vollen 24/7-Notdienst.",
            securityTip: "Empfehlung für Ahlbacher Eigenheimbesitzer: In ruhigen dörflichen Lagen empfehlen wir Außenbeleuchtung mit Bewegungsmelder an allen Zugängen. Diese einfache Maßnahme schreckt Einbrecher am effektivsten ab.",
            neighborhoodGuide: "Ahlbach ist ein kompakter, dörflich geprägter Ortsteil mit starkem Gemeinschaftsgefühl. Die Bebauung besteht überwiegend aus gepflegten Familienhäusern. Über die B49 erreichen unsere Techniker Ahlbach in kürzester Zeit."
        }
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
        pricing: { basePrice: 99, travelCost: 0 },
        faqs: [
            {
                question: "Dauert die Anfahrt nach Eschhofen Mühlen länger?",
                answer: "Wir navigieren per GPS-Einsatzsteuerung. Beide Bereiche, Eschhofen sowie Mühlen, erreichen wir verlässlich in 15 bis 30 Minuten.",
            },
            {
                question: "Ist die Türöffnung in Eschhofen auch an Feiertagen möglich?",
                answer: "Unser 24-Stunden-Service steht Ihnen in ganz Eschhofen das ganze Jahr über, auch an Wochenenden und allen Feiertagen, zur Verfügung.",
            },
            {
                question: "Betreuen Sie auch Wohnungen nahe dem ICE-Bahnhof Limburg Süd?",
                answer: "Ja, der Bereich rund um den ICE-Bahnhof Limburg Süd gehört zu unserem Einsatzgebiet Eschhofen. Wir öffnen Türen, Autos und Tresore professionell und schadensfrei.",
            }
        ],
        localContent: {
            introText: "Eschhofen – der dynamische Limburger Stadtteil östlich der Kernstadt profitiert von der Nähe zum ICE-Bahnhof Limburg Süd. Die verkehrsgünstige Lage macht Eschhofen zu einem attraktiven Wohnstandort für Pendler und Familien.",
            securityTip: "Tipp für Eschhofener Pendler: Die Nähe zum ICE-Bahnhof bringt viel Durchgangsverkehr. Wir empfehlen für Erdgeschosswohnungen eine Fensterzusatzsicherung und für Haustüren einen Sicherheitsbeschlag der Klasse ES2.",
            neighborhoodGuide: "Eschhofen umfasst das Ortszentrum sowie den Bereich Mühlen. Der dynamische Mix aus verkehrsgünstig gelegenen Wohnungen nahe dem ICE-Bahnhof und klassischen Wohngebieten prägt die Sicherheitsanforderungen."
        }
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
