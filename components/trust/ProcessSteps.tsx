import { Phone, Clock, Unlock } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "1. Meister-Notruf wählen",
        description: "Rufen Sie unsere lokale 24/7 Leitstelle an. Sie erhalten sofort am Telefon unsere verbindliche 100% Festpreis-Garantie für Limburg.",
        icon: Phone,
    },
    {
        id: 2,
        title: "2. Lokale Soforthilfe",
        description: "Einer unserer festangestellten Fachmonteure macht sich umgehend auf den Weg und ist in der Regel innerhalb von 15–30 Minuten bei Ihnen.",
        icon: Clock,
    },
    {
        id: 3,
        title: "3. Schadensfreie Öffnung",
        description: "Dank modernster Spezialwerkzeuge öffnen wir 99% aller zugefallenen Türen komplett beschädigungsfrei. Sie zahlen exakt den Festpreis.",
        icon: Unlock,
    },
];

export default function ProcessSteps() {
    return (
        <section aria-label="Ablauf in 3 Schritten" className="relative bg-[var(--color-surface-base)] border-y border-[var(--color-border-subtle)] px-6 md:px-12 py-24 md:py-32 overflow-hidden noise-overlay">
            <div className="relative z-10 mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <h2
                        className="font-[800] text-[var(--color-text-main)] mb-2 tracking-tight text-balance"
                        style={{ fontSize: 'var(--text-h2)' }}
                    >
                        Der sichere Weg aus <span className="text-gradient">Ihrer Notlage</span>
                    </h2>
                    <div className="mx-auto mt-4 h-[3px] w-[60px] rounded bg-gradient-to-r from-[var(--color-blue-primary)] to-blue-300"></div>
                    <p
                        className="mt-8 text-[var(--color-text-body)] font-[500] mx-auto text-balance"
                        style={{ fontSize: 'var(--text-lead)', maxWidth: 'var(--prose-width)' }}
                    >
                        Geprüfte Sicherheit, 100% Festpreis-Garantie und lokale Soforthilfe in Limburg.
                    </p>
                </div>

                <div className="relative mt-16">
                    {/* Connecting gradient line for desktop */}
                    <div className="absolute top-1/2 left-[10%] w-[80%] h-[2px] bg-gradient-to-r from-transparent via-[var(--color-blue-primary)]/30 to-transparent -translate-y-1/2 hidden md:block rounded-full z-0" aria-hidden="true" />

                    <div className="relative z-10 grid gap-12 md:grid-cols-3">
                        {steps.map((step) => (
                            <div key={step.id} className="relative group flex flex-col items-center text-center glass-card p-8 md:p-10 hover-lift">
                                <div className="flex flex-col items-center text-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-[var(--radius-lg)] bg-blue-50 border border-blue-100 text-blue-600 mb-6">
                                        <step.icon className="h-7 w-7" aria-hidden="true" />
                                    </div>
                                    <h3
                                        className="font-[800] text-[var(--color-text-main)] mb-4"
                                        style={{ fontSize: 'var(--text-h4)' }}
                                    >
                                        {step.title}
                                    </h3>
                                    <p
                                        className="text-[var(--color-text-body)] font-[400] text-balance px-2"
                                        style={{ fontSize: 'var(--text-body)', lineHeight: '1.6' }}
                                    >
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
