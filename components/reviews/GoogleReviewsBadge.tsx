import { Star } from "lucide-react";

export default function GoogleReviewsBadge({ rating, count }: { rating: number, count: number }) {
    return (
        <div className="inline-flex items-center gap-4 rounded-full glass px-6 py-3 shadow-md border border-[var(--color-border-glass)]">
            <div className="flex items-center justify-center w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-full">
                <span className="font-extrabold text-xl text-blue-600">G</span>
            </div>
            <div>
                <div className="flex items-center gap-1">
                    <span className="font-bold text-[var(--color-text-main)]">{rating}</span>
                    <div className="flex text-[var(--color-amber-400)]">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-current" aria-hidden="true" />
                        ))}
                    </div>
                </div>
                <div className="text-xs font-medium text-[var(--color-text-body)] mt-1">
                    Basierend auf {count} geprüften Kundenbewertungen
                </div>
            </div>
        </div>
    );
}
