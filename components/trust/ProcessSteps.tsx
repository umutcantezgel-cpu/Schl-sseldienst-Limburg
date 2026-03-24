import { Phone, Clock, Unlock } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "1. Anrufen",
        description: "Kontaktieren Sie uns 24/7. Wir nennen Ihnen sofort einen verbindlichen Festpreis und die exakte Anfahrtszeit.",
        icon: Phone,
    },
    {
        id: 2,
        title: "2. Kurze Wartezeit",
        description: "In der Regel sind wir im Raum Lahn-Dill innerhalb von 20-30 Minuten bei Ihnen vor Ort.",
        icon: Clock,
    },
    {
        id: 3,
        title: "3. Tür offen zum Festpreis",
        description: "Wir öffnen Ihre Tür meist komplett beschädigungsfrei. Garantierter Festpreis ohne versteckte Gebühren.",
        icon: Unlock,
    },
];

export default function ProcessSteps() {
    return (
        <section aria-label="Ablauf in 3 Schritten" className="bg-white px-[var(--section-px)] py-[var(--section-py)] overflow-hidden">
            <div className="mx-auto max-w-5xl">
                <div className="text-center mb-[var(--space-10)]">
                    <h2
                        className="font-[800] text-[var(--color-text-primary)] mb-[var(--space-2)] tracking-tight text-balance"
                        style={{ fontSize: 'var(--text-h2)' }}
                    >
                        In 3 Schritten wieder in <span className="text-[var(--color-brand)]">Ihrer Wohnung</span>
                    </h2>
                    <div className="mx-auto mt-[var(--space-4)] h-[3px] w-[60px] rounded bg-[var(--color-brand)]"></div>
                    <p
                        className="mt-[var(--space-6)] text-[var(--color-text-body)] font-[500] mx-auto text-balance"
                        style={{ fontSize: 'var(--text-lead)', maxWidth: 'var(--prose-width)' }}
                    >
                        Keine Überraschungen, keine endlosen Wartezeiten. Ein glasklarer Ablauf für Ihre Sicherheit.
                    </p>
                </div>

                <div className="relative mt-[var(--space-10)]">
                    {/* Connecting Line for desktop */}
                    <div className="absolute top-1/2 left-[10%] w-[80%] h-[2px] bg-[var(--color-border-subtle)] -translate-y-1/2 hidden md:block rounded-full z-0" aria-hidden="true" />

                    <div className="relative z-10 grid gap-[var(--space-8)] md:grid-cols-3">
                        {steps.map((step) => (
                            <div key={step.id} className="relative group flex flex-col items-center text-center bg-white">
                                <div className="flex flex-col items-center text-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-surface-primary)] border border-[var(--color-border-subtle)] text-[var(--color-brand)] mb-[var(--space-5)] shadow-sm">
                                        <step.icon className="h-7 w-7" aria-hidden="true" />
                                    </div>
                                    <h3
                                        className="font-[800] text-[var(--color-text-primary)] mb-[var(--space-3)]"
                                        style={{ fontSize: 'var(--text-h4)' }}
                                    >
                                        {step.title}
                                    </h3>
                                    <p
                                        className="text-[var(--color-text-body)] font-[400] text-balance px-[var(--space-2)]"
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
