import { Check } from "lucide-react";

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
            className={`relative flex flex-col rounded-2xl bg-[var(--color-blue-dark)] p-8 h-full transition-all duration-300 ${isPopular
                ? "ring-2 ring-[var(--color-blue-primary)] shadow-lg shadow-blue-900/20"
                : "ring-1 ring-white/10 hover:ring-white/20 shadow-md"
                }`}
        >
            {isPopular && (
                <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-1.5 rounded-full font-bold uppercase tracking-widest text-[11px] shadow-lg shadow-orange-500/30 border border-white/20 whitespace-nowrap z-10 flex items-center gap-1.5"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    Meistgewählt in Limburg & Umgebung
                </div>
            )}

            <div className="flex flex-col flex-1">
                <div className="mb-6 border-b border-white/10 pb-6">
                    <h3 className="font-bold text-white text-2xl mb-3">
                        {title}
                    </h3>
                    <p className="text-blue-50/80 text-sm leading-relaxed min-h-[3rem]">
                        {description}
                    </p>
                </div>

                <div className="mb-8 flex items-baseline gap-1.5">
                    <span className="text-blue-50/80 font-medium text-lg">ab</span>
                    <span className="font-extrabold text-white text-5xl tracking-tight">
                        {price}
                    </span>
                    <span className="font-bold text-white text-2xl">€</span>
                </div>

                <ul role="list" className="space-y-4 flex-1">
                    {features.map((feature, index) => (
                        <li key={index} className="flex gap-3 items-start">
                            <div className="mt-0.5 rounded-full bg-white/10 p-1 shrink-0">
                                <Check className="h-3.5 w-3.5 text-white" aria-hidden="true" />
                            </div>
                            <span className="text-blue-50 text-sm font-medium leading-relaxed">
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
