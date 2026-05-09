import FAQAccordion from "@/components/ui/FAQAccordion";

interface FAQItem {
    question: string;
    answer: string;
}

export const faqs: FAQItem[] = [
    {
        question: "Gibt es beim Schlüsseldienst Limburg versteckte Kosten?",
        answer:
            "Definitiv Nein. Als seriöser Limburger Meisterbetrieb garantieren wir 100% Kostentransparenz. Unser Monteur nennt Ihnen den exakten Festpreis inklusive Anfahrt verbindlich vor Ort, BEVOR mit der Öffnung begonnen wird. Bei uns gibt es absolut keine bösen Überraschungen.",
    },
    {
        question: "Wie kann ich den Notdienst in Limburg bezahlen?",
        answer:
            "Sie können bei unserem Monteur nach erfolgreicher Öffnung bequem und sicher in bar oder bargeldlos per EC-Karte (Girocard) bezahlen. Sie erhalten selbstverständlich sofort eine ordnungsgemäße und transparente Rechnung.",
    },
    {
        question: "Warum stehen bei einigen Leistungen 'ab' Preise?",
        answer:
            "Der 'ab'-Preis gilt für Standardöffnungen (z.B. eine unverschlossene, nur zugefallene Tür). Bei massiven Sicherheitstüren, Doppelfalz-Türen oder mehrfach abgeschlossenen Türen steigt der materielle und zeitliche Aufwand. Unser eisernes Versprechen für Limburg: Unser Monteur diagnostiziert das Problem und nennt Ihnen den exakten, verbindlichen Limburger Festpreis immer VOR Arbeitsbeginn.",
    },
    {
        question: "Berechnen Sie für Limburg zusätzliche Anfahrts- oder Rüstzeiten?",
        answer:
            "Nein! Versteckte Rüstzeiten oder fiktive Fahrtkosten gibt es bei uns nicht. Wir sind regional in Limburg verankert. Die geringe regionale Anfahrtspauschale ist bereits Teil des verbindlichen Festpreises, den wir Ihnen vorab garantieren.",
    },
];

export default function PricingFAQ() {
    return (
        <div className="mx-auto max-w-3xl divide-y divide-[var(--color-border-subtle)]">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-[var(--color-text-main)] mb-6">
                Transparente Antworten zu unseren Limburger Preisen
            </h2>
            <div className="space-y-6 border-t border-[var(--color-border-subtle)] pt-6">
                {faqs.map((faq, index) => (
                    <FAQAccordion key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );
}
