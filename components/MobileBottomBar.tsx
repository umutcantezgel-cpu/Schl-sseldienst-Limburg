"use client";

import { Phone, ShieldCheck } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function MobileBottomBar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility, { passive: true });
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div
            className={cn(
                "fixed bottom-0 left-0 right-0 z-[var(--z-sticky)] sm:hidden transform transition-transform duration-500 ease-in-out",
                isVisible ? "translate-y-0" : "translate-y-full"
            )}
        >
            <div className="glass-nav border-t border-[var(--color-border-subtle)] p-3 px-4 flex flex-col gap-2 shadow-lg">
                <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[var(--color-text-body)] w-full text-center">
                    <ShieldCheck className="h-4 w-4 text-[var(--color-blue-primary)]" /> 15-30 Min. in Limburg • 100% Festpreis-Garantie
                </div>
                <a
                    href={BUSINESS.phone.href}
                    className="flex w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-blue-600 hover:bg-blue-700 p-3.5 text-lg font-bold text-white transition-all shadow-md active:scale-[0.97] animate-pulse-glow"
                >
                    <Phone className="h-5 w-5 animate-phone-ring" />
                    Notruf: {BUSINESS.phone.display}
                </a>
            </div>
        </div>
    );
}
