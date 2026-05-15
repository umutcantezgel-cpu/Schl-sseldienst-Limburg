export type ServiceType = 'tuer-zugefallen' | 'tuer-abgesperrt' | 'autooeffnung' | 'tresoroeffnung';
export type TimeSlot = 'regulaer' | 'abends' | 'nachts' | 'wochenende';

export interface PricingDetail {
    basePrice: number | null;
    surcharge: number;
    surchargeLabel?: string;
    total: number | null;
}

export const PRICING_DATA: Record<ServiceType, Record<TimeSlot, PricingDetail>> = {
    'tuer-zugefallen': {
        regulaer: { basePrice: 99, surcharge: 0, total: 99 },
        abends: { basePrice: 99, surcharge: 20, surchargeLabel: 'Abend-Zuschlag', total: 119 },
        nachts: { basePrice: 99, surcharge: 50, surchargeLabel: 'Nacht-Zuschlag', total: 149 },
        wochenende: { basePrice: 99, surcharge: 80, surchargeLabel: 'Wochenend-Zuschlag', total: 179 },
    },
    'tuer-abgesperrt': {
        regulaer: { basePrice: 189, surcharge: 0, total: 189 },
        abends: { basePrice: 189, surcharge: 20, surchargeLabel: 'Abend-Zuschlag', total: 209 },
        nachts: { basePrice: 189, surcharge: 50, surchargeLabel: 'Nacht-Zuschlag', total: 239 },
        wochenende: { basePrice: 189, surcharge: 80, surchargeLabel: 'Wochenend-Zuschlag', total: 269 },
    },
    'autooeffnung': {
        regulaer: { basePrice: 149, surcharge: 0, total: 149 },
        abends: { basePrice: 149, surcharge: 20, surchargeLabel: 'Abend-Zuschlag', total: 169 },
        nachts: { basePrice: 149, surcharge: 80, surchargeLabel: 'Nacht-Zuschlag', total: 229 },
        wochenende: { basePrice: 149, surcharge: 80, surchargeLabel: 'Wochenend-Zuschlag', total: 229 },
    },
    'tresoroeffnung': {
        regulaer: { basePrice: null, surcharge: 0, total: null },
        abends: { basePrice: null, surcharge: 0, total: null },
        nachts: { basePrice: null, surcharge: 0, total: null },
        wochenende: { basePrice: null, surcharge: 0, total: null },
    }
};

export const TIME_MODIFIERS: Record<TimeSlot, { label: string }> = {
    regulaer: { label: 'Regulär (06:00–19:59)' },
    abends: { label: 'Abends (20:00–21:59)' },
    nachts: { label: 'Nachts (22:00–05:59)' },
    wochenende: { label: 'Wochenende (Sa, So & Feiertage)' },
};

export const ADDONS = {
    anfahrt: { label: 'Anfahrt Limburg Kernstadt', price: '30€ Festpreis' },
    zylinder: { label: 'VdS-geprüfter Marken-Schließzylinder (sofort verfügbar)', price: 'ab 25€' },
    mehrwehraufwand: { label: 'Spezial- und Sicherheitstüren (Mehrfachverriegelung)', price: '100% faire Diagnose vor Ort' }
};

export const GUARANTEES = [
    "Regionale Festpreis-Garantie: Der Preis am Telefon gilt in ganz Limburg – ohne jede Ausnahme.",
    "Lokal & Echt: Keine Vermittler-Abzocke. Sie sprechen direkt mit Ihrem Monteur für Limburg.",
    "Zertifizierte Sicherheitstechnik: Wir verbauen nur höchste Markenqualität für Ihren Schutz.",
];
