import { Clock, Truck, ShieldCheck, Star } from "lucide-react";
import StaggerReveal, { StaggerItem } from "../motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";

export default function TrustStrip() {
    return (
        <div className="bg-[var(--color-blue-dark)] elevation-1 relative z-20">
            <div className="mx-auto max-w-7xl px-6 md:px-12 py-4 sm:py-6 lg:py-8">
                <StaggerReveal
                    className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-y-6 md:gap-x-8"
                    animation={entryAnimations.slideUpFade}
                    staggerDelay={0.1}
                >
                    {[
                        { icon: Clock, text: "24/7 Meister-Notruf" },
                        { icon: Truck, text: "Limburg Soforthilfe (15-30 Min)" },
                        { icon: ShieldCheck, text: "100% Festpreis-Garantie" },
                        { icon: Star, text: "TV-Geprüfter Fachbetrieb", fill: true },
                    ].map((item) => (
                        <StaggerItem key={item.text} className="flex items-center gap-2" animation={entryAnimations.slideUpFade}>
                            <item.icon className={`h-[24px] w-[24px] text-[var(--color-blue-primary)] stroke-[1.5] ${item.fill ? "fill-current" : ""}`} aria-hidden="true" />
                            <span
                                className="font-[600] text-white"
                                style={{ fontSize: 'var(--text-small)', letterSpacing: 'var(--tracking-cta)' }}
                            >
                                {item.text}
                            </span>
                        </StaggerItem>
                    ))}
                </StaggerReveal>
            </div>
        </div>
    );
}
