import { MapPin, Phone, Mail, Clock, ShieldCheck, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import CookieSettingsButton from "@/components/CookieSettingsButton";

export default function Footer() {
  return (
    <footer role="contentinfo" className="relative mt-24 overflow-hidden border-t border-[var(--color-border-glass)] bg-white/60 backdrop-blur-3xl">
      {/* Absolute Background Elements for Glassmorphism */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-[var(--color-blue-light)] blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] rounded-full bg-blue-50/80 blur-[80px] pointer-events-none -z-10" />

      {/* Top Gradient Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-blue-light)] via-[var(--color-blue-primary)] to-[var(--color-blue-light)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid gap-12 lg:gap-8 sm:grid-cols-2 lg:grid-cols-12">
          
          {/* Brand & About (Span 4) */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="inline-flex items-center hover-lift-subtle rounded-xl w-fit" aria-label={`${BUSINESS.name} – Startseite`}>
              <Image
                src="/images/logo.png"
                alt={`${BUSINESS.name} Logo`}
                width={80}
                height={80}
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                loading="lazy"
              />
            </Link>
            <p className="mt-6 text-[var(--color-text-main)] font-medium text-base leading-relaxed max-w-sm">
              Ihr zertifizierter Fachbetrieb und verlässlicher Sicherheitspartner in Limburg und Umgebung. Wir garantieren Ihnen zu 100% zerstörungsfreie Türöffnungen zum kompromisslosen Festpreis.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 glass-tinted px-4 py-2 rounded-full w-fit">
                <ShieldCheck className="h-5 w-5 text-[var(--color-blue-primary)]" />
                <span className="text-sm font-semibold text-[var(--color-text-main)]">TV-geprüfter Meisterbetrieb</span>
              </div>
              <div className="inline-flex items-center gap-2 glass-tinted px-4 py-2 rounded-full w-fit">
                <ShieldCheck className="h-5 w-5 text-[var(--color-blue-primary)]" />
                <span className="text-sm font-semibold text-[var(--color-text-main)]">Ohne versteckte Kosten</span>
              </div>
            </div>
          </div>

          {/* Contact Information (Span 3) */}
          <nav aria-label="Kontakt und Standort" className="lg:col-span-3">
            <h3 className="font-bold uppercase text-[var(--color-blue-primary)] text-xs tracking-widest mb-6">
              24/7 Zentrale & Standort
            </h3>
            <address className="not-italic space-y-5 text-[var(--color-text-main)] font-medium">
              <div className="flex items-center gap-4 group">
                <div className="glass-card p-2.5 rounded-xl group-hover:border-[var(--color-blue-primary)] transition-colors shrink-0">
                  <Phone className="h-5 w-5 text-[var(--color-blue-primary)]" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[var(--color-text-main)] uppercase tracking-wider mb-0.5">Notruf (24/7)</div>
                  <a href={BUSINESS.phone.href} className="hover:text-[var(--color-blue-primary)] transition-colors font-bold text-lg text-[var(--color-text-main)] block">
                    {BUSINESS.phone.display}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="glass-card p-2.5 rounded-xl group-hover:border-[var(--color-blue-primary)] transition-colors shrink-0 mt-1">
                  <MapPin className="h-5 w-5 text-[var(--color-blue-primary)]" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[var(--color-text-main)] uppercase tracking-wider mb-0.5">Firmensitz</div>
                  <div className="text-[var(--color-text-main)] font-medium">
                    {BUSINESS.name}<br />
                    {BUSINESS.ownerTitle}: {BUSINESS.owner}<br />
                    {BUSINESS.address.street}<br />
                    {BUSINESS.address.zip} {BUSINESS.address.city}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="glass-card p-2.5 rounded-xl group-hover:border-[var(--color-blue-primary)] transition-colors shrink-0">
                  <Mail className="h-5 w-5 text-[var(--color-blue-primary)]" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[var(--color-text-main)] uppercase tracking-wider mb-0.5">E-Mail</div>
                  <a href={`mailto:${BUSINESS.email}`} className="hover:text-[var(--color-blue-primary)] transition-colors font-medium text-[var(--color-text-main)] block">
                    {BUSINESS.email}
                  </a>
                </div>
              </div>
            </address>
          </nav>

          {/* Service Areas (Span 2) */}
          <nav aria-label="Einsatzgebiete" className="lg:col-span-2">
            <h3 className="font-bold uppercase text-[var(--color-blue-primary)] text-xs tracking-widest mb-6">
              Einsatzgebiete
            </h3>
            <ul className="space-y-3.5 text-[var(--color-text-main)] font-medium">
              {[
                { name: "Limburg", slug: "limburg" },
                { name: "Weilburg", slug: "weilburg" },
                { name: "Bad Camberg", slug: "bad-camberg" },
                { name: "Hadamar", slug: "hadamar" },
                { name: "Elz", slug: "elz" }
              ].map((city) => (
                <li key={city.slug}>
                  <Link href={`/${city.slug}`} className="group flex items-center gap-2 hover:text-[var(--color-blue-primary)] transition-colors font-medium">
                    <ChevronRight className="h-4 w-4 text-[var(--color-text-main)] group-hover:text-[var(--color-blue-primary)] transition-colors" />
                    {city.name}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <Link href="/servicegebiet" className="inline-flex items-center gap-2 text-[var(--color-blue-primary)] hover:text-blue-700 transition-colors font-bold text-sm bg-[var(--color-blue-light)] px-3 py-1.5 rounded-lg hover-lift-subtle">
                  Alle Gebiete <ChevronRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal (Span 3) */}
          <nav aria-label="Rechtliches" className="lg:col-span-3">
            <h3 className="font-bold uppercase text-[var(--color-blue-primary)] text-xs tracking-widest mb-6">
              Rechtliches & Service
            </h3>
            <ul className="space-y-3.5 text-[var(--color-text-main)] font-medium">
              {[
                { name: "Impressum", slug: "impressum" },
                { name: "Datenschutz", slug: "datenschutz" },
                { name: "Preise", slug: "preise" },
                { name: "FAQ", slug: "faq" }
              ].map((link) => (
                <li key={link.slug}>
                  <Link href={`/${link.slug}`} className="group flex items-center gap-2 hover:text-[var(--color-blue-primary)] transition-colors font-medium">
                    <ChevronRight className="h-4 w-4 text-[var(--color-text-main)] group-hover:text-[var(--color-blue-primary)] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <CookieSettingsButton />
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-[var(--color-border-subtle)] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm font-medium text-[var(--color-text-main)]">
            © {new Date().getFullYear()} <span className="font-bold text-[var(--color-text-main)]">{BUSINESS.name}</span>. Alle Rechte vorbehalten.
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-[var(--color-text-main)]">
            <span>{BUSINESS.ownerTitle}: {BUSINESS.owner}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-blue-primary)] opacity-50" />
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[var(--color-blue-primary)]"/> 365 Tage 24/7 Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
