'use client';

import { useState, useEffect, useCallback } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import { MapPin, ShieldCheck } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import CustomGoogleMap from './map/CustomGoogleMap';

interface ConsentGoogleMapsProps {
  /** Optional API Key. If missing, CustomGoogleMap will show a fallback. */
  apiKey?: string;
  /** Container className */
  className?: string;
}

/**
 * Consent-gesteuerter Google Maps Wrapper (Ultrathink Overhaul).
 * 
 * - VOR Consent: Premium Glassmorphism Platzhalter mit Blurred Map
 * - NACH Consent: Dynamisches Loading via @vis.gl/react-google-maps
 * - NACH Widerruf: Map entfernen, Platzhalter wiederherstellen
 * 
 * Kategorie: external_media
 */
export default function ConsentGoogleMaps({
  apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  className = '',
}: ConsentGoogleMapsProps) {
  const [hasConsent, setHasConsent] = useState(false);

  const checkConsent = useCallback(() => {
    setHasConsent(CookieConsent.acceptedCategory('external_media'));
  }, []);

  useEffect(() => {
    // Initial check after CookieConsent is initialized
    const timer = setTimeout(checkConsent, 100);

    // Listen for consent changes via vanilla-cookieconsent events
    window.addEventListener('cc:onChange', checkConsent);
    window.addEventListener('cc:onConsent', checkConsent);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('cc:onChange', checkConsent);
      window.removeEventListener('cc:onConsent', checkConsent);
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
        <CustomGoogleMap apiKey={apiKey} className="w-full h-full" />
      </div>
    );
  }

  // Premium Glassmorphism Consent-Platzhalter
  return (
    <div
      className={`relative w-full h-full flex flex-col items-center justify-center bg-[#0f172a] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-border-subtle)] ${className}`}
      role="region"
      aria-label="Google Maps Karte – Zustimmung erforderlich"
    >
      {/* Abstract Blurred Map Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Simulate dark map elements */}
        <div className="absolute top-[20%] left-[30%] w-64 h-64 bg-slate-800 rounded-full mix-blend-screen filter blur-[60px] opacity-40"></div>
        <div className="absolute bottom-[10%] right-[20%] w-80 h-80 bg-blue-900 rounded-full mix-blend-screen filter blur-[80px] opacity-30"></div>
        <div className="absolute top-[40%] left-[50%] w-40 h-40 bg-amber-600 rounded-full mix-blend-screen filter blur-[70px] opacity-20"></div>
        
        {/* Abstract Street Lines */}
        <svg viewBox="0 0 800 600" className="absolute inset-0 w-full h-full opacity-[0.03]">
          <path d="M0 100 Q 200 150 400 100 T 800 100" stroke="white" strokeWidth="2" fill="none" />
          <path d="M0 300 Q 200 350 400 300 T 800 300" stroke="white" strokeWidth="4" fill="none" />
          <path d="M0 500 Q 200 550 400 500 T 800 500" stroke="white" strokeWidth="2" fill="none" />
          <path d="M300 0 L 350 600" stroke="white" strokeWidth="3" fill="none" />
          <path d="M500 0 L 450 600" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Glassmorphism Card */}
      <div className="relative z-10 flex flex-col items-center gap-5 p-8 text-center max-w-md mx-4 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
        {/* Icon */}
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
          <MapPin className="h-10 w-10 absolute" />
          <ShieldCheck className="h-4 w-4 absolute bottom-4 right-4 text-emerald-400 bg-slate-900 rounded-full" />
        </div>

        {/* Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
            Interaktive Standortkarte
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Um Ihnen unseren genauen Standort in Limburg auf einer interaktiven Karte anzuzeigen, benötigen wir Ihre Zustimmung zum Laden von Google Maps.
          </p>
        </div>

        {/* Adress-Fallback */}
        <div className="text-sm text-white font-medium bg-white/5 border border-white/10 rounded-xl px-5 py-4 w-full flex flex-col items-center gap-1">
          <span className="text-blue-400 font-bold">{BUSINESS.name}</span>
          <span className="text-slate-300">
            {BUSINESS.address.street}, {BUSINESS.address.zip} {BUSINESS.address.city}
          </span>
        </div>

        {/* CTA-Buttons */}
        <div className="flex flex-col w-full gap-3 mt-2">
          <button
            onClick={handleGrantConsent}
            className="group relative w-full overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold text-sm py-3.5 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Karte jetzt laden
            </span>
            <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left ease-out duration-300"></div>
          </button>
          
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${BUSINESS.address.street}, ${BUSINESS.address.zip} ${BUSINESS.address.city}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white/5 hover:bg-white/10 text-white text-sm py-3 px-6 rounded-xl transition-all border border-white/10 text-center font-medium"
          >
            Extern in Google Maps öffnen
          </a>
        </div>

        {/* Datenschutz-Link */}
        <a
          href="/datenschutz"
          className="text-xs text-slate-400 hover:text-white transition-colors underline underline-offset-4 mt-1"
        >
          Details zum Datenschutz
        </a>
      </div>
    </div>
  );
}
