"use client";

import { useRef, useEffect, useState } from "react";

const certifications = [
    { name: "TV-Geprüfter Meisterbetrieb", initials: "MB" },
    { name: "Handwerkskammer Limburg", initials: "HWK" },
    { name: "IHK Geprüfte Fachkraft", initials: "IHK" },
];

export default function CertBadges() {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="flex flex-wrap items-center justify-center gap-6 py-8">
            {certifications.map((cert) => (
                <div
                    key={cert.name}
                    className="flex flex-col items-center gap-2 transition-all duration-[600ms]"
                    style={{
                        filter: isVisible ? "grayscale(0)" : "grayscale(1)",
                        opacity: isVisible ? 1 : 0.5,
                    }}
                >
                    <div className="w-16 h-16 rounded-full bg-[var(--color-blue-light)] border border-[var(--color-border-subtle)] flex items-center justify-center shadow-sm">
                        <span className="text-lg font-bold text-[var(--color-blue-primary)]">
                            {cert.initials}
                        </span>
                    </div>
                    <span className="text-xs font-medium text-[var(--color-text-body)] text-center max-w-[100px]">
                        {cert.name}
                    </span>
                </div>
            ))}
        </div>
    );
}
