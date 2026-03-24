"use client";

import { Phone, Key, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function StickyHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLeistungenOpen, setIsLeistungenOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsScrolled(!entry.isIntersecting);
            },
            { root: null, threshold: 0 }
        );

        const hero = document.getElementById("hero-section");
        if (hero) {
            observer.observe(hero);
        }

        return () => observer.disconnect();
    }, [pathname]);

    const leistungenLinks = [
        { name: "Türöffnung", href: "/leistungen/turoeffnung" },
        { name: "Autoöffnung", href: "/leistungen/autooeffnung" },
        { name: "Schließanlagen", href: "/leistungen/schliessanlagen" },
        { name: "Sicherheitstechnik", href: "/leistungen/sicherheitstechnik" },
        { name: "Schlüssel nachmachen", href: "/leistungen/schluessel-nachmachen" },
    ];

    const navLinks = [
        { name: "Preise", href: "/preise" },
        { name: "Servicegebiet", href: "/servicegebiet" },
        { name: "Bewertungen", href: "/bewertungen" },
        { name: "FAQ", href: "/faq" },
        { name: "Über uns", href: "/ueber-uns" },
        { name: "Kontakt", href: "/kontakt" },
    ];

    return (
        <header
            role="banner"
            className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b border-slate-200
                ${isScrolled
                    ? "h-14 bg-white/95 backdrop-blur-md shadow-sm"
                    : "h-16 lg:h-[72px] bg-white/95 backdrop-blur-md"
                }`}
        >
            <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 font-bold text-slate-900 tracking-tight order-1 mr-auto"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Schlüsseldienst Wetzlar – Startseite"
                >
                    <Key className="h-5 w-5 text-primary-600" aria-hidden="true" />
                    <span className="hidden sm:inline-block">Schlüsseldienst Wetzlar</span>
                    <span className="sm:hidden">SD Wetzlar</span>
                </Link>

                {/* Desktop Navigation */}
                <nav aria-label="Hauptnavigation" className="hidden lg:flex items-center gap-6 font-medium text-base order-2 mx-auto">
                    <div
                        className="relative group h-full flex items-center"
                        onMouseEnter={() => setIsLeistungenOpen(true)}
                        onMouseLeave={() => setIsLeistungenOpen(false)}
                    >
                        <button
                            className="flex items-center gap-1 text-slate-600 transition-colors hover:text-primary-600 py-2"
                            aria-expanded={isLeistungenOpen}
                            aria-controls="desktop-leistungen-menu"
                        >
                            Leistungen <ChevronDown className="h-4 w-4" aria-hidden="true" />
                        </button>

                        {isLeistungenOpen && (
                            <ul id="desktop-leistungen-menu" role="menu" className="absolute left-0 top-[100%] w-56 rounded-xl bg-white py-2 shadow-lg ring-1 ring-slate-200">
                                {leistungenLinks.map((link) => (
                                    <li key={link.name} role="none">
                                        <Link
                                            role="menuitem"
                                            href={link.href}
                                            className={`block px-4 py-2.5 text-sm transition-colors hover:bg-primary-50 hover:text-primary-600 ${pathname === link.href ? "text-primary-600 font-bold bg-primary-50" : "text-slate-700"
                                                }`}
                                            onClick={() => setIsLeistungenOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`transition-colors hover:text-primary-600 ${pathname === link.href
                                    ? "text-primary-600 font-semibold"
                                    : "text-slate-600"
                                }`}
                            {...(pathname === link.href ? { "aria-current": "page" as const } : {})}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA + Mobile Toggle */}
                <div className="flex items-center gap-3 h-full order-3 ml-auto">
                    <a
                        href="tel:+496441123456"
                        className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg px-4 py-2.5 shadow-md transition-colors text-sm"
                        aria-label="Jetzt anrufen: 06441 123 456"
                    >
                        <Phone className="h-4 w-4" aria-hidden="true" />
                        <span className="hidden sm:inline-block">06441 123 456</span>
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden flex items-center justify-center h-11 w-11 text-slate-700 hover:text-slate-900 rounded-md transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-nav-menu"
                        aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
                    >
                        {isMobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <nav id="mobile-nav-menu" aria-label="Mobile Navigation" className="lg:hidden absolute top-14 left-0 w-full border-t border-slate-200 bg-white max-h-[calc(100vh-56px)] overflow-y-auto shadow-lg">
                    <ul className="flex flex-col px-4 py-4 space-y-1">
                        <li className="space-y-1">
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 py-2">Leistungen</div>
                            <ul className="flex flex-col space-y-0.5 pl-3 border-l-2 border-primary-600">
                                {leistungenLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className={`block px-3 py-2.5 rounded-lg font-medium transition-colors hover:bg-slate-50 hover:text-primary-600 ${pathname === link.href ? "text-primary-600 bg-primary-50" : "text-slate-700"
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

                        <li className="border-t border-slate-100 pt-2">
                            <ul className="space-y-0.5">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors hover:bg-slate-50 hover:text-primary-600 ${pathname === link.href ? "text-primary-600 bg-primary-50" : "text-slate-700"
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
                        <li className="border-t border-slate-100 pt-3">
                            <a
                                href="tel:+496441123456"
                                className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl px-6 py-4 shadow-md transition-colors text-lg w-full"
                            >
                                <Phone className="h-5 w-5" aria-hidden="true" />
                                Jetzt anrufen: 06441 123 456
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
