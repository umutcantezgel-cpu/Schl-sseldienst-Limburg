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
        serviceName: "Zerstörungsfreie Notöffnung",
        priceBase: 99,
        description: "Präzisionsöffnung für zugefallene, unverschlossene Türen. Dank spezieller Diagnostik in Sekunden erledigt – absolut schadensfrei.",
        includesTravel: true,
        features: [
            "100% Zerstörungsfrei-Garantie bei Standardtüren",
            "Verbindlicher Festpreis – Garantiert keine versteckten Kosten",
            "Soforteinsatz: Unser Techniker ist umgehend bei Ihnen"
        ],
        isPopular: true
    },
    {
        id: "tuer-abgeschlossen",
        serviceName: "Tresor-Level Sicherheitsöffnung",
        priceBase: 89,
        description: "Tiefgehende Öffnung bei verschlossenen Türen, Riegelbruch oder Schlüsselverlust. Minimalinvasive Spezialwerkzeuge im Einsatz.",
        includesTravel: true,
        features: [
            "Zertifiziertes Spezial-Fräsverfahren zur Schonung des Beschlags",
            "Transparente Vorab-Kalkulation vor dem ersten Handgriff",
            "Ersatz-Sicherheitszylinder direkt vom Einsatzfahrzeug verfügbar"
        ]
    },
    {
        id: "zylinder-tausch",
        serviceName: "Premium Sicherheitszylinder-Tausch",
        priceBase: 49,
        description: "Sofortige Wiederherstellung Ihrer Sicherheit durch den Austausch kompromittierter Schließzylinder – ideal nach Einbruch oder Einzug.",
        includesTravel: false,
        features: [
            "VdS-konforme Hochsicherheitszylinder mit Not- & Gefahrenfunktion",
            "Inklusive 3 codierten Wendeschlüsseln (Kopierschutz)",
            "Fachgerechte Sofort-Montage durch unseren Sicherheitsexperten"
        ]
    }
];

export const getPricingById = (id: string): PricingItem | undefined => {
    return pricingData.find(item => item.id === id);
};
