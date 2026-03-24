"use client";

import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function StickyCallButton() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling past the hero (approx 300px)
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <div 
      className={`fixed bottom-[var(--space-4)] left-[var(--space-4)] right-[var(--space-4)] z-[var(--z-fixed)] sm:hidden transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href="tel:06441123456"
        className="flex items-center justify-center w-full bg-[var(--color-emergency)] text-[var(--color-text-inverted)] hover:bg-[var(--color-emergency-hover)] py-[var(--space-4)] px-[var(--space-5)] rounded-[var(--radius-xl)] elevation-cta transition-colors active:scale-95"
        style={{
          boxShadow: 'var(--shadow-cta)',
        }}
        aria-label="Notdienst anrufen: 06441 123 456"
      >
        <Phone className="h-6 w-6 mr-[var(--space-3)] animate-phone-ring" aria-hidden="true" />
        <div className="flex flex-col items-start leading-tight">
          <span className="font-[800] uppercase tracking-[0.05em] text-[12px] opacity-90">
            Jetzt Notdienst rufen
          </span>
          <span className="font-[800] text-[20px] tabular-nums tracking-tight">
            06441 123 456
          </span>
        </div>
      </a>
    </div>
  );
}
