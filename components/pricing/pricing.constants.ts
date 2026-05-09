export type ServiceType = 'doorFallen' | 'doorLocked' | 'carOpening' | 'safeOpening';
export type TimeSlot = 'day' | 'evening' | 'night';

export const getDynamicPricing = (basePrice: number): Record<ServiceType, Record<TimeSlot, number | null>> => ({
    doorFallen: { day: basePrice, evening: basePrice + 30, night: basePrice + 60 },
    doorLocked: { day: basePrice + 40, evening: basePrice + 70, night: basePrice + 100 },
    carOpening: { day: basePrice + 40, evening: basePrice + 70, night: basePrice + 100 },
    safeOpening: { day: null, evening: null, night: null } // "Diskrete Kalkulation auf Anfrage"
});

export const TIME_MODIFIERS: Record<TimeSlot, { label: string }> = {
    day: { label: 'Werktags-Service (Limburg, Mo–Fr 08-18 Uhr)' },
    evening: { label: 'Abend- & Wochenend-Notruf (18-22 Uhr)' },
    night: { label: 'Nacht- & Feiertags-Soforthilfe (22-08 Uhr)' },
};

export const ADDONS = {
    anfahrt: { label: 'Regionale Anfahrtspauschale für ganz Limburg-Weilburg', price: '0€ - Komplett inklusive' },
    zylinder: { label: 'VdS-geprüfter Marken-Schließzylinder (sofort verfügbar)', price: 25 },
    mehrwehraufwand: { label: 'Spezial- und Sicherheitstüren (Mehrfachverriegelung)', price: '100% faire Diagnose vor Ort' }
};

export const GUARANTEES = [
    "Regionale Festpreis-Garantie: Der Preis am Telefon gilt in ganz Limburg – ohne jede Ausnahme.",
    "Lokal & Echt: Keine Vermittler-Abzocke. Sie sprechen direkt mit Ihrem Monteur für Limburg.",
    "Zertifizierte Sicherheitstechnik: Wir verbauen nur höchste Markenqualität für Ihren Schutz.",
];
