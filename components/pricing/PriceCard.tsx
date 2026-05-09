import { Check, Info } from "lucide-react";
import { GUARANTEES } from "./pricing.constants";

interface PriceCardProps {
    title: string;
    price: number;
    description: string;
    features: string[];
    isPopular?: boolean;
}

export default function PriceCard({
    title,
    price,
    description,
    features,
    isPopular = false,
}: PriceCardProps) {
    return (
        <div
            className={`relative flex flex-col rounded-2xl bg-[var(--color-blue-dark)] p-8 sm:p-10 ring-1 hover-lift ${isPopular
                ? "ring-[var(--color-blue-primary)] border-t-[3px] border-[var(--color-blue-primary)] elevation-3"
                : "ring-[var(--color-border-subtle)] elevation-1"
                }`}
        >
            {isPopular && (
                <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-cta-bg)] px-4 py-1.5 font-[600] text-white uppercase elevation-2 whitespace-nowrap"
                    style={{ fontSize: 'var(--text-tiny)', letterSpacing: 'var(--tracking-caps)' }}
                >
                    Meistgewählt in Limburg & Umgebung
                </div>
            )}

            <div className="mb-6">
                <h3
                    className="font-[600] text-[var(--color-text-main)]"
                    style={{
                        fontSize: 'var(--text-h4)',
                        lineHeight: 'var(--leading-subh)',
                        letterSpacing: 'var(--tracking-heading)',
                    }}
                >
                    {title}
                </h3>
                <p
                    className="mt-2 text-[var(--color-text-body)] font-[400]"
                    style={{
                        fontSize: 'var(--text-body)',
                        lineHeight: 'var(--leading-body)',
                    }}
                >
                    {description}
                </p>
            </div>

            <div className="mb-8 flex items-baseline gap-1">
                <span
                    className="text-[var(--color-text-body)] font-[400]"
                    style={{ fontSize: 'var(--text-small)' }}
                >
                    ab
                </span>
                <span
                    className="font-[800] text-[var(--color-blue-primary)]"
                    style={{
                        fontSize: 'var(--text-h1)',
                        lineHeight: 'var(--leading-hero)',
                        letterSpacing: 'var(--tracking-tight)',
                    }}
                >
                    {price}
                </span>
                <span
                    className="font-[700] text-[var(--color-text-main)]"
                    style={{
                        fontSize: 'var(--text-h4)',
                        lineHeight: 'var(--leading-h)',
                    }}
                >
                    €
                </span>
            </div>

            <ul role="list" className="mb-8 space-y-4 flex-1">
                {features.map((feature, index) => (
                    <li key={index} className="flex gap-3">
                        <Check className="h-5 w-5 shrink-0 text-[var(--color-blue-primary)]" aria-hidden="true" />
                        <span
                            className="text-[var(--color-text-body)] font-[400]"
                            style={{
                                fontSize: 'var(--text-body)',
                                lineHeight: 'var(--leading-body)',
                            }}
                        >
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
