import { Clock, ShieldCheck, Check } from "lucide-react";

interface TrustBadgesProps {
    locationName?: string;
    items?: Array<{ text: string; icon?: React.ElementType }>;
}

export default function TrustBadges({ locationName, items }: TrustBadgesProps = {}) {
    const badgeItems = items || [
        { text: locationName ? `15–30 Min. Soforthilfe ${locationName}` : "15–30 Min. Soforthilfe", icon: Clock },
        { text: "100% Festpreis-Garantie", icon: ShieldCheck },
        { text: locationName ? `TV-Geprüfter Meisterbetrieb ${locationName}` : "TV-Geprüfter Meisterbetrieb", icon: Check },
    ];

    return (
        <div role="list" aria-label="Vertrauensvorteile" className="flex flex-row flex-wrap items-center justify-center gap-4 md:gap-5 mt-6">
            {badgeItems.map((item, idx) => {
                const IconComponent = item.icon || Check;
                return (
                    <div key={idx} role="listitem" className="flex items-center gap-3 text-sm font-medium text-[var(--color-text-main)] glass-card px-5 py-2.5 !rounded-full">
                        <IconComponent className="h-4 w-4 text-[var(--color-blue-primary)] shrink-0" aria-hidden="true" />
                        <span className="whitespace-nowrap">{item.text}</span>
                    </div>
                );
            })}
        </div>
    );
}
