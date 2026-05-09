"use client";

import { Phone, Key, Menu, X, ChevronDown, ShieldCheck, CheckCircle2, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BUSINESS } from "@/lib/constants";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLeistungenOpen, setIsLeistungenOpen] = useState(false);
  const pathname = usePathname();

  const leistungenLinks = [
    { name: "Zerstörungsfreie Türöffnung", href: "/leistungen/turoeffnung" },
    { name: "Schonende KFZ-Öffnung", href: "/leistungen/autooeffnung" },
    { name: "Premium Schließanlagen", href: "/leistungen/schliessanlagen" },
    { name: "VdS-Sicherheitstechnik", href: "/leistungen/sicherheitstechnik" },
    { name: "Schlüsselkopien & Fräsen", href: "/leistungen/schluessel-nachmachen" },
  ];

  const navLinks = [
    { name: "Festpreise", href: "/preise" },
    { name: "Servicegebiet", href: "/servicegebiet" },
    { name: "Bewertungen", href: "/bewertungen" },
    { name: "FAQ", href: "/faq" },
    { name: "Über Uns", href: "/ueber-uns" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  return (
    <header className="sticky top-0 z-[var(--z-sticky)] w-full bg-white/80 backdrop-blur-md text-[var(--color-text-main)] border-b border-blue-100 shadow-sm transition-all duration-300">
      {/* Top Bar (Reptilian Brain: Safety & Contact) */}
      <div className="bg-blue-600 text-white text-[13px] py-1.5 px-4 sm:px-6 lg:px-8 hidden md:block">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <div className="flex items-center gap-6 font-medium">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-blue-200" /> Zertifizierter Meisterbetrieb aus Limburg</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-blue-200" /> 100% Festpreis-Garantie ab 50€ – Ohne versteckte Kosten</span>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-1.5 hover:text-blue-200 transition-colors"><Mail className="w-4 h-4" /> Direkter Kontakt zum Monteur</a>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> 24/7 Notfall-Hotline: In 15–30 Min. am Einsatzort</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold tracking-tight text-xl text-blue-900"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="bg-blue-100 rounded-lg p-1.5 text-blue-600">
            <Key className="h-6 w-6" />
          </div>
          <span className="hidden sm:inline-block">
            {BUSINESS.name} | TV-geprüft
          </span>
          <span className="sm:hidden">{BUSINESS.shortName}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold">
          <div
            className="relative group"
            onMouseEnter={() => setIsLeistungenOpen(true)}
            onMouseLeave={() => setIsLeistungenOpen(false)}
          >
            <button className="flex items-center gap-1 transition-colors hover:text-blue-600 text-[var(--color-text-body)] py-2 focus:outline-none">
              Leistungen <ChevronDown className="h-4 w-4" />
            </button>

            {isLeistungenOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-64 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-blue-100/50 mt-2">
                {leistungenLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-4 py-3 text-sm transition-all rounded-xl hover:bg-blue-50 hover:text-blue-700 ${pathname === link.href ? "text-blue-700 font-bold bg-blue-50" : "text-[var(--color-text-body)]"}`}
                    onClick={() => setIsLeistungenOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors hover:text-blue-600 ${pathname === link.href ? "text-blue-600" : "text-[var(--color-text-body)]"}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={BUSINESS.phone.href}
            className={cn(buttonVariants({ size: "sm" }), "rounded-full flex px-5 sm:px-6 py-5 bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all font-bold")}
            aria-label={`Notruf wählen: ${BUSINESS.phone.display}`}
          >
            <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="hidden sm:inline-block ml-2 text-sm tracking-wide">24/7 Notruf: {BUSINESS.phone.display}</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex items-center justify-center min-h-[48px] min-w-[48px] text-[var(--color-text-main)] hover:text-blue-600 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-blue-500 rounded-md transition-colors bg-blue-50 border border-blue-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Mobiles Navigationsmenü öffnen/schließen"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-blue-100 bg-white/95 backdrop-blur-xl max-h-[calc(100vh-5rem)] overflow-y-auto shadow-xl">
          <nav className="flex flex-col px-4 py-6 space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-bold text-blue-600 uppercase tracking-wider">Leistungen</div>
              <div className="flex flex-col space-y-2 pl-4 border-l-2 border-blue-100">
                {leistungenLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center min-h-[48px] text-base font-semibold transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-blue-500 rounded-md px-2 ${pathname === link.href ? "text-blue-600 bg-blue-50" : "text-[var(--color-text-body)]"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-blue-100 pt-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-2 min-h-[48px] flex items-center text-base font-semibold transition-colors hover:text-blue-600 hover:bg-blue-50 rounded-md ${pathname === link.href ? "text-blue-600 bg-blue-50" : "text-[var(--color-text-main)]"}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

