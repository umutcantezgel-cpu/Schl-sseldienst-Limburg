"use client";

import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { BUSINESS } from "@/lib/constants";

export default function StickyCallButton() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <div 
      className={`fixed bottom-4 left-4 right-4 z-50 sm:hidden transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href={BUSINESS.phone.href}
        className="flex items-center justify-center w-full bg-gradient-to-r from-amber-500 to-amber-600 text-[var(--color-blue-dark)] hover:from-amber-400 hover:to-amber-500 py-4 px-5 rounded-xl shadow-lg transition-all active:scale-95"
        aria-label={`Direktwahl: Geprüfter Meister-Notruf unter ${BUSINESS.phone.display}`}
      >
        <Phone className="h-6 w-6 mr-3 animate-phone-ring" aria-hidden="true" />
        <div className="flex flex-col items-start leading-tight">
          <span className="font-[800] uppercase tracking-[0.05em] text-[12px] opacity-90">
            Meister-Notruf wählen
          </span>
          <span className="font-[800] text-[20px] tabular-nums tracking-tight">
            {BUSINESS.phone.display}
          </span>
        </div>
      </a>
    </div>
  );
}
