export type PricingItem = {
    id: string;
    serviceName: string;
    priceBase: number;
    description: string;
    includesTravel: boolean;
    features: string[];
    isPopular?: boolean;
};

export const pricingData: PricingItem[] = [
    {
        id: "tuer-zugefallen",
        serviceName: "Tür zugefallen",
        priceBase: 59,
        description: "Schlüssel steckt von innen oder Tür ist nur ins Schloss gefallen.",
        includesTravel: true,
        features: [
            "Zerstörungsfreie Öffnung (99%)",
            "Keine versteckten Anfahrtskosten",
            "Transparenter Festpreis vor Ort"
        ],
        isPopular: true
    },
    {
        id: "tuer-abgeschlossen",
        serviceName: "Tür abgeschlossen",
        priceBase: 89,
        description: "Schlüssel verloren oder mehrfach abgeschlossen.",
        includesTravel: true,
        features: [
            "Profi-Werkzeug Einsatz",
            "Ersatzzylinder auf Wunsch zubuchbar",
            "Keine versteckten Anfahrtskosten"
        ]
    },
    {
        id: "zylinder-tausch",
        serviceName: "Zylindertausch",
        priceBase: 49,
        description: "Einbau eines neuen, sicheren Schließzylinders.",
        includesTravel: false,
        features: [
            "Inklusive 3 Schlüsseln",
            "Sicherheitsklasse nach Wahl",
            "Sofortiger Einbau vor Ort"
        ]
    }
];

export const getPricingById = (id: string): PricingItem | undefined => {
    return pricingData.find(item => item.id === id);
};
