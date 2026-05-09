"use client";

import { Phone, Key, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";

export default function StickyHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLeistungenOpen, setIsLeistungenOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const leistungenLinks = [
        { name: "Zerstörungsfreie Türöffnung", href: "/leistungen/turoeffnung" },
        { name: "Schonende KFZ-Öffnung", href: "/leistungen/autooeffnung" },
        { name: "Premium Schließanlagen", href: "/leistungen/schliessanlagen" },
        { name: "VdS-Sicherheitstechnik", href: "/leistungen/sicherheitstechnik" },
        { name: "Schlüsselkopien & Fräsen", href: "/leistungen/schluessel-nachmachen" },
    ];

    const navLinks = [
        { name: "Festpreise", href: "/preise" },
        { name: "Einsatzgebiet", href: "/servicegebiet" },
        { name: "Google Rezensionen", href: "/bewertungen" },
        { name: "Häufige Fragen", href: "/faq" },
        { name: "Über Uns", href: "/ueber-uns" },
        { name: "Kontakt", href: "/kontakt" },
    ];

    return (
        <header
            role="banner"
            className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out pt-2 sm:pt-4 px-2 sm:px-4 lg:px-8 pointer-events-none`}
        >
            <div className={`mx-auto flex items-center justify-between pointer-events-auto transition-all duration-500 ease-in-out
                ${isScrolled 
                    ? "h-14 lg:h-16 max-w-7xl bg-white/90 backdrop-blur-2xl rounded-full px-4 sm:px-6 shadow-md border border-white/40" 
                    : "h-16 lg:h-[76px] max-w-7xl glass rounded-full px-4 sm:px-6 lg:px-8 shadow-sm border border-[var(--color-border-glass)]"
                }`}
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-1.5 lg:gap-3 font-bold text-[var(--color-text-main)] tracking-tight shrink-0 group min-w-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label={`${BUSINESS.name} | TV-geprüfter Meisterbetrieb – Startseite`}
                >
                    <div className="bg-[var(--color-blue-light)] p-1.5 lg:p-2 rounded-full group-hover:scale-110 transition-transform duration-300 shrink-0">
                        <Key className="h-4 w-4 lg:h-5 lg:w-5 text-[var(--color-blue-primary)]" aria-hidden="true" />
                    </div>
                    <div className="flex flex-col justify-center min-w-0">
                        <span className="hidden sm:inline-block whitespace-nowrap text-sm lg:text-base transition-all duration-300 truncate">
                            {BUSINESS.name}
                        </span>
                        <span className={`hidden sm:inline-block whitespace-nowrap text-[var(--color-blue-primary)] text-xs font-semibold transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'}`}>
                            TV-geprüfter Meisterbetrieb
                        </span>
                        <span className="sm:hidden text-xs sm:text-sm whitespace-nowrap truncate max-w-[120px]">{BUSINESS.shortName}</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav aria-label="Hauptnavigation" className="hidden xl:flex items-center gap-6 2xl:gap-8 font-medium text-sm">
                    <div
                        className="relative group h-full flex items-center"
                        onMouseEnter={() => setIsLeistungenOpen(true)}
                        onMouseLeave={() => setIsLeistungenOpen(false)}
                    >
                        <button
                            className={`flex items-center gap-1.5 py-2 transition-colors duration-300 hover:text-[var(--color-blue-primary)] ${isLeistungenOpen ? 'text-[var(--color-blue-primary)]' : 'text-[var(--color-text-body)]'}`}
                            aria-expanded={isLeistungenOpen}
                            aria-controls="desktop-leistungen-menu"
                        >
                            Leistungen 
                            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isLeistungenOpen ? 'rotate-180' : 'opacity-70'}`} aria-hidden="true" />
                        </button>

                        {/* Dropdown Menu */}
                        <div 
                            id="desktop-leistungen-menu" 
                            role="menu" 
                            className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[280px] rounded-2xl bg-white/95 backdrop-blur-2xl border border-white/50 py-3 shadow-xl transition-all duration-300 ease-out origin-top
                                ${isLeistungenOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`
                            }
                        >
                            {/* Arrow pointing up */}
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/95 rotate-45 border-l border-t border-white/50"></div>
                            
                            <div className="relative z-10 flex flex-col gap-1 px-2">
                                {leistungenLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        role="menuitem"
                                        href={link.href}
                                        className={`group/item flex items-center px-4 py-2.5 rounded-xl text-sm transition-all duration-200 hover:bg-[var(--color-blue-light)]/50
                                            ${pathname === link.href ? "bg-[var(--color-blue-light)]/50 text-[var(--color-blue-primary)] font-semibold" : "text-[var(--color-text-main)]"}
                                        `}
                                        onClick={() => setIsLeistungenOpen(false)}
                                    >
                                        <span className={`w-1.5 h-1.5 rounded-full mr-3 transition-colors duration-200 ${pathname === link.href ? 'bg-[var(--color-blue-primary)]' : 'bg-transparent group-hover/item:bg-[var(--color-blue-primary)]/40'}`}></span>
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`relative py-2 transition-colors duration-300 hover:text-[var(--color-blue-primary)] group ${pathname === link.href
                                    ? "text-[var(--color-blue-primary)] font-semibold"
                                    : "text-[var(--color-text-body)]"
                                }`}
                            {...(pathname === link.href ? { "aria-current": "page" as const } : {})}
                        >
                            {link.name}
                            <span className={`absolute left-0 -bottom-1 w-full h-0.5 bg-[var(--color-blue-primary)] rounded-full origin-left transition-transform duration-300 ease-out ${pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                        </Link>
                    ))}
                </nav>

                {/* CTA + Mobile Toggle */}
                <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
                    <a
                        href={BUSINESS.phone.href}
                        className={cn(buttonVariants({ size: "default" }), "rounded-full flex px-3 sm:px-6 py-2 sm:py-5 shadow-md hover:shadow-lg transition-all duration-300 bg-[var(--color-blue-primary)] text-white hover:bg-[var(--color-blue-dark)] hover:-translate-y-0.5 border border-transparent")}
                        aria-label={`Notruf wählen: ${BUSINESS.phone.display}`}
                    >
                        <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 animate-pulse-slow shrink-0" />
                        <span className="hidden lg:inline-block font-bold tracking-wide">{BUSINESS.phone.display}</span>
                        <span className="lg:hidden font-bold text-xs sm:text-sm">Notruf</span>
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="xl:hidden flex items-center justify-center h-9 w-9 sm:h-11 sm:w-11 text-[var(--color-text-main)] hover:text-[var(--color-blue-primary)] bg-white/50 hover:bg-white rounded-full transition-all duration-300 border border-[var(--color-border-glass)] shrink-0 shadow-sm"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-nav-menu"
                        aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
                    >
                        <div className="relative w-5 h-5 flex flex-col justify-center items-center">
                            <span className={`absolute h-0.5 w-5 bg-current rounded-full transition-all duration-300 ease-out ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                            <span className={`absolute h-0.5 w-5 bg-current rounded-full transition-all duration-300 ease-out ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`}></span>
                            <span className={`absolute h-0.5 w-5 bg-current rounded-full transition-all duration-300 ease-out ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`xl:hidden pointer-events-auto mt-3 px-2 max-w-5xl mx-auto w-full transition-all duration-500 ease-in-out overflow-hidden origin-top
                ${isMobileMenuOpen ? 'opacity-100 max-h-[800px] visible' : 'opacity-0 max-h-0 invisible'}`}
            >
                <nav id="mobile-nav-menu" aria-label="Mobile Navigation" className="w-full rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/60 shadow-2xl overflow-hidden">
                    <ul className="flex flex-col p-4 sm:p-6 gap-3">
                        {/* Leistungen Section */}
                        <li className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 px-3 py-2">
                                <div className="h-6 w-1 bg-[var(--color-blue-primary)] rounded-full"></div>
                                <span className="text-sm font-bold text-[var(--color-text-main)] uppercase tracking-wider">Leistungen</span>
                            </div>
                            <ul className="flex flex-col gap-1.5">
                                {leistungenLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className={`block px-5 py-3 rounded-2xl text-sm font-medium transition-colors 
                                                ${pathname === link.href 
                                                    ? "bg-[var(--color-blue-primary)] text-white shadow-sm" 
                                                    : "text-[var(--color-text-body)] hover:bg-[var(--color-blue-light)] hover:text-[var(--color-blue-primary)]"
                                                }`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            {...(pathname === link.href ? { "aria-current": "page" as const } : {})}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* Divider */}
                        <li className="my-2 border-t border-gray-100/50"></li>

                        {/* General Links */}
                        <li>
                            <ul className="flex flex-col gap-1.5">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className={`block px-5 py-3.5 rounded-2xl text-base font-medium transition-colors
                                                ${pathname === link.href 
                                                    ? "bg-[var(--color-blue-light)]/80 text-[var(--color-blue-primary)]" 
                                                    : "text-[var(--color-text-main)] hover:bg-gray-50 hover:text-[var(--color-blue-primary)]"
                                                }`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            {...(pathname === link.href ? { "aria-current": "page" as const } : {})}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* Mobile Emergency CTA */}
                        <li className="pt-4 mt-2">
                            <a
                                href={BUSINESS.phone.href}
                                className="flex items-center justify-center gap-3 bg-[var(--color-blue-primary)] text-white hover:bg-[var(--color-blue-dark)] font-bold rounded-2xl px-6 py-4.5 shadow-lg shadow-[var(--color-blue-primary)]/20 transition-all hover:-translate-y-1 text-lg w-full"
                            >
                                <Phone className="h-6 w-6 animate-pulse-slow" aria-hidden="true" />
                                24/7 Notruf Zentrale
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
