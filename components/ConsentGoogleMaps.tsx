'use client';

import { useState, useEffect, useCallback } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import { MapPin } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

interface ConsentGoogleMapsProps {
  /** Google Maps Embed URL */
  src: string;
  /** iframe title for accessibility */
  title?: string;
  /** Container className */
  className?: string;
}

/**
 * Consent-gesteuerter Google Maps Wrapper.
 * 
 * - VOR Consent: Statischer Platzhalter mit Adresse und „Karte laden"-Button
 * - NACH Consent: Dynamisches iframe-Loading
 * - NACH Widerruf: iframe entfernen, Platzhalter wiederherstellen
 * 
 * Kategorie: external_media
 */
export default function ConsentGoogleMaps({
  src,
  title = 'Google Maps',
  className = '',
}: ConsentGoogleMapsProps) {
  const [hasConsent, setHasConsent] = useState(false);

  const checkConsent = useCallback(() => {
    setHasConsent(CookieConsent.acceptedCategory('external_media'));
  }, []);

  useEffect(() => {
    // Initial check after CookieConsent is initialized
    const timer = setTimeout(checkConsent, 100);

    // Listen for consent changes via MutationObserver on cookie
    const interval = setInterval(checkConsent, 1000);

    // Also listen for the custom event from vanilla-cookieconsent
    window.addEventListener('cc:onChange', checkConsent);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      window.removeEventListener('cc:onChange', checkConsent);
    };
  }, [checkConsent]);

  // Handle manual consent grant for this specific embed
  const handleGrantConsent = () => {
    CookieConsent.acceptCategory('external_media');
    setHasConsent(true);
  };

  if (hasConsent) {
    return (
      <div className={`relative w-full h-full ${className}`}>
        <iframe
          title={title}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={src}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  // Consent-Platzhalter
  return (
    <div
      className={`relative w-full h-full flex flex-col items-center justify-center bg-[var(--color-surface-elevated)] border border-[var(--color-border-subtle)] rounded-2xl overflow-hidden ${className}`}
      role="region"
      aria-label="Google Maps Karte – Zustimmung erforderlich"
    >
      {/* Dekorativer Kartenhintergrund */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
          <path d="M0 50 Q 100 20 200 50 T 400 50" stroke="currentColor" strokeWidth="1" />
          <path d="M0 100 Q 100 70 200 100 T 400 100" stroke="currentColor" strokeWidth="1" />
          <path d="M0 150 Q 100 120 200 150 T 400 150" stroke="currentColor" strokeWidth="1" />
          <path d="M0 200 Q 100 170 200 200 T 400 200" stroke="currentColor" strokeWidth="1" />
          <path d="M0 250 Q 100 220 200 250 T 400 250" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="140" r="6" fill="currentColor" opacity="0.3" />
          <circle cx="200" cy="140" r="20" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4 p-8 text-center max-w-sm">
        {/* Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-blue-light)] text-[var(--color-blue-primary)] shadow-sm">
          <MapPin className="h-8 w-8" />
        </div>

        {/* Info */}
        <div>
          <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-2">
            Google Maps
          </h3>
          <p className="text-sm text-[var(--color-text-body)] leading-relaxed">
            Zum Anzeigen der Karte wird eine Verbindung zu Google-Servern aufgebaut. 
            Dabei können personenbezogene Daten (z.B. Ihre IP-Adresse) übertragen werden.
          </p>
        </div>

        {/* Adress-Fallback */}
        <div className="text-sm text-[var(--color-text-main)] font-medium bg-[var(--color-surface-base)] rounded-xl px-4 py-3 w-full">
          <p>{BUSINESS.name}</p>
          <p className="text-[var(--color-text-body)]">
            {BUSINESS.address.street}, {BUSINESS.address.zip} {BUSINESS.address.city}
          </p>
        </div>

        {/* CTA-Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <button
            onClick={handleGrantConsent}
            className="flex-1 bg-[var(--color-blue-primary)] hover:bg-blue-700 text-white font-bold text-sm py-3 px-5 rounded-xl transition-all shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            Karte laden
          </button>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${BUSINESS.address.street}, ${BUSINESS.address.zip} ${BUSINESS.address.city}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[var(--color-surface-base)] hover:bg-[var(--color-surface-elevated)] text-[var(--color-text-main)] font-bold text-sm py-3 px-5 rounded-xl transition-all border border-[var(--color-border-subtle)] text-center"
          >
            In Google Maps öffnen
          </a>
        </div>

        {/* Datenschutz-Link */}
        <a
          href="/datenschutz"
          className="text-xs text-[var(--color-text-body)] hover:text-[var(--color-blue-primary)] transition-colors underline underline-offset-2"
        >
          Mehr in unserer Datenschutzerklärung
        </a>
      </div>
    </div>
  );
}
