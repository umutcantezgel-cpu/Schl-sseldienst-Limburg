'use client';

import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import { createConsentConfig } from '@/lib/consent/config';

/**
 * DSGVO-konformer Cookie-Consent-Manager.
 * Client-Komponente: Initialisiert vanilla-cookieconsent im Browser.
 * 
 * Einbindung in app/layout.tsx:
 *   <CookieConsentManager />
 */
export default function CookieConsentManager() {
  useEffect(() => {
    CookieConsent.run(createConsentConfig());
  }, []);

  return null;
}

/**
 * Re-Export der CookieConsent API für externe Nutzung.
 * Beispiel: Footer-Link „Cookie-Einstellungen"
 */
export { CookieConsent };
