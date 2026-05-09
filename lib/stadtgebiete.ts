export const stadtgebiete = [
    { slug: "limburg-innenstadt", name: "Limburg Innenstadt", plz: "65549", description: "Hochfrequentierter Notdienst direkt im Herzen der Stadt. Zerstörungsfreie Öffnung in Minuten." },
    { slug: "limburg-lindenholzhausen", name: "Limburg Lindenholzhausen", plz: "65551", description: "Zertifizierte Sicherheitstechnik und Express-Türöffnung für Lindenholzhausen. 100% Festpreis." },
    { slug: "limburg-linter", name: "Limburg Linter", plz: "65550", description: "Lokaler Premium-Schlüsseldienst für Linter. 24/7 Erreichbarkeit ohne Callcenter." },
    { slug: "limburg-staffel", name: "Limburg Staffel", plz: "65556", description: "Ihr verlässlicher Sicherheitspartner in Staffel. Spezialisiert auf Einbruchschutz und Notöffnungen." },
    { slug: "limburg-offheim", name: "Limburg Offheim", plz: "65555", description: "Blitzschnelle Soforthilfe bei zugefallenen Türen in Offheim. Regional, fair und transparent." },
    { slug: "limburg-dietkirchen", name: "Limburg Dietkirchen", plz: "65553", description: "Schadensfreie Türöffnungen rund um die Uhr in Dietkirchen. Mit regionaler 0€-Anfahrtskosten-Garantie." },
    { slug: "limburg-ahlbach", name: "Limburg Ahlbach", plz: "65552", description: "Präzisions-Schlüsseldienst für Ahlbach. Wir sichern Ihr Zuhause mit modernsten VdS-Standards." },
    { slug: "limburg-eschhofen", name: "Limburg Eschhofen", plz: "65552", description: "Kompetente Tresor-, KFZ- und Hausöffnungen in Eschhofen. Vertrauen Sie dem lokalen Experten." },
];

export const getStadtgebietBySlug = (slug: string) => {
    return stadtgebiete.find((gebiet) => gebiet.slug === slug);
};
