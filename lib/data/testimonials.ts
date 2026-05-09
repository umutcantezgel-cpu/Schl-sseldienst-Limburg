export interface Review {
    id: string;
    authorName: string;
    rating: number;
    text: string;
    date: string;
    source: "Google" | "ProvenExpert";
    location: string;
}

export const reviewsData: Review[] = [
    {
        id: "1",
        authorName: "Michael Schneider",
        rating: 5,
        text: "Herausragender Service! Mein Schlüssel brach an einem Sonntagabend im Schloss ab. Der Monteur war nach unglaublichen 18 Minuten in Lindenholzhausen vor Ort. Der Zylinder wurde hochprofessionell getauscht und der am Telefon vereinbarte Festpreis wurde auf den Cent genau eingehalten. Ein absolut seriöser Handwerksbetrieb, den ich uneingeschränkt empfehle.",
        date: "Vor 1 Woche",
        source: "Google",
        location: "Limburg-Lindenholzhausen"
    },
    {
        id: "2",
        authorName: "Sarah Müller",
        rating: 5,
        text: "Absolute Rettung in der Not! Ich stand mit meinem Kleinkind im strömenden Regen vor einer zugefallenen Tür. Innerhalb von 15 Minuten war der Sicherheitsexperte in der Limburger Altstadt. Die Öffnung dauerte keine zwei Minuten und erfolgte zu 100% zerstörungsfrei. Professionalität und Empathie auf höchstem Niveau.",
        date: "Vor 2 Wochen",
        source: "Google",
        location: "Limburg Altstadt"
    },
    {
        id: "3",
        authorName: "Thomas Weber",
        rating: 5,
        text: "Ich hatte mich aus meinem Fahrzeug ausgesperrt. Der Fachmann war in Dietkirchen extrem schnell zur Stelle und hat den Wagen mithilfe von modernstem Spezialwerkzeug komplett ohne den geringsten Kratzer geöffnet. Top Ausrüstung, sehr seriöses und beruhigendes Auftreten.",
        date: "Vor 1 Monat",
        source: "Google",
        location: "Limburg-Dietkirchen"
    },
    {
        id: "4",
        authorName: "Julia Riedel",
        rating: 5,
        text: "Nach einer fundierten und ehrlichen Sicherheitsberatung haben wir unser Eigenheim in Offheim komplett auf ein neues Hochsicherheits-Schließsystem umrüsten lassen. Man merkt in jedem Schritt, dass hier ein zertifizierter Meisterfachbetrieb am Werk ist. Das Ergebnis übertrifft unsere Erwartungen.",
        date: "Vor 2 Monaten",
        source: "ProvenExpert",
        location: "Limburg-Offheim"
    },
    {
        id: "5",
        authorName: "Lukas Wagner",
        rating: 5,
        text: "Mitten in der Nacht nach der Schicht ausgesperrt. Der Monteur war nach nur 20 Minuten da, agierte extrem ruhig und professionell, und die Tür war im Handumdrehen offen. Was mich besonders beeindruckt hat: Der vorher kommunizierte Nacht-Festpreis wurde ohne jegliche versteckte Aufschläge berechnet.",
        date: "Vor 3 Monaten",
        source: "Google",
        location: "Limburg-Ahlbach"
    },
    {
        id: "6",
        authorName: "Dr. Andreas Koch",
        rating: 5,
        text: "Unser Firmentresor (Sicherheitsstufe B) ließ sich aufgrund eines Elektronikdefekts nicht mehr öffnen. Der Spezialist hat das Problem äußerst diskret, ohne laute Werkzeuge und mit höchster Präzision gelöst. Ein absoluter Fachmann, der sein Handwerk auf Premium-Niveau versteht.",
        date: "Vor 4 Monaten",
        source: "ProvenExpert",
        location: "Limburg-Eschhofen"
    },
    {
        id: "7",
        authorName: "Marina Schmidt",
        rating: 5,
        text: "Meine über 80-jährigen Eltern hatten sich ausgesperrt, und ich musste aus der Ferne Hilfe organisieren. Dieser Dienstleister war ein Glücksgriff: Extrem empathischer Umgang mit den Senioren, schnelle Öffnung und eine absolut faire, transparente Abrechnung. Herzlichen Dank für diesen vorbildlichen Service!",
        date: "Vor 5 Monaten",
        source: "Google",
        location: "Limburg-Staffel"
    },
    {
        id: "8",
        authorName: "Familie Hoffmann",
        rating: 5,
        text: "Nach einem massiven Einbruchversuch war unser Schloss komplett blockiert. Nachts um 3 Uhr war sofort ein Experte zur Stelle, der ein Not-Schloss installierte. Am nächsten Morgen wurde ein hochwertiges ABUS-Sicherheitssystem verbaut. Wir fühlen uns endlich wieder 100% sicher in unseren eigenen vier Wänden.",
        date: "Vor 6 Monaten",
        source: "Google",
        location: "Limburg-Linter"
    }
];

export const aggregateRating = {
    ratingValue: 4.9,
    reviewCount: 132,
};
