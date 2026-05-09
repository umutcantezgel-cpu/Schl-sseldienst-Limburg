import type { CookieConsentConfig } from 'vanilla-cookieconsent';
import { BUSINESS } from '@/lib/constants';

/**
 * Consent-Konfigurationsversion.
 * Bei jeder Änderung der Kategorien/Services hochzählen,
 * damit Bestandsnutzer erneut informiert werden.
 */
export const CONSENT_CONFIG_VERSION = '1.0.0';

/**
 * Consent-Kategorien mit Beschreibungen und Rechtsgrundlagen.
 */
export const CONSENT_CATEGORIES = {
  necessary: {
    label: 'Technisch notwendig',
    description: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.',
    legalBasis: '§ 25 Abs. 2 Nr. 2 TTDSG / Art. 6 Abs. 1 lit. f DSGVO',
  },
  analytics: {
    label: 'Statistik & Analyse',
    description: 'Helfen uns zu verstehen, wie Besucher mit der Website interagieren, um unser Angebot zu verbessern.',
    legalBasis: 'Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)',
  },
  marketing: {
    label: 'Marketing & Werbung',
    description: 'Werden verwendet, um Werbung relevanter zu gestalten und die Wirksamkeit von Kampagnen zu messen.',
    legalBasis: 'Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)',
  },
  external_media: {
    label: 'Externe Medien',
    description: 'Ermöglicht das Laden externer Inhalte wie Google Maps oder eingebetteter Videos. Beim Laden werden Daten an den jeweiligen Anbieter übertragen.',
    legalBasis: 'Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)',
  },
} as const;

/**
 * Zentrale CookieConsent-Konfiguration (vanilla-cookieconsent v3).
 * DSGVO/TTDSG-konform mit Prior Blocking und granularer Einwilligung.
 */
export function createConsentConfig(): CookieConsentConfig {
  return {
    // Consent-Cookie-Einstellungen
    cookie: {
      name: 'cc_cookie',
      expiresAfterDays: 365,
      sameSite: 'Lax',
    },

    // GUI-Optionen
    guiOptions: {
      consentModal: {
        layout: 'box wide',
        position: 'bottom center',
        equalWeightButtons: true,     // Kein Dark Pattern: Accept = Reject
        flipButtons: false,
      },
      preferencesModal: {
        layout: 'box',
        position: 'right',
        equalWeightButtons: true,
        flipButtons: false,
      },
    },

    // Kategorien-Definition
    categories: {
      necessary: {
        enabled: true,
        readOnly: true,  // Nicht abwählbar
      },
      analytics: {
        enabled: false,  // Default: deny (Privacy by Default)
        readOnly: false,
        autoClear: {
          cookies: [
            { name: /^_ga/ },     // GA4 Cookies
            { name: '_gid' },
            { name: '_gat' },
          ],
          reloadPage: false,
        },
      },
      marketing: {
        enabled: false,  // Default: deny
        readOnly: false,
        autoClear: {
          cookies: [
            { name: '_fbp' },     // Meta Pixel
            { name: '_fbc' },
            { name: /^_gcl/ },    // Google Ads
          ],
          reloadPage: false,
        },
      },
      external_media: {
        enabled: false,  // Default: deny
        readOnly: false,
      },
    },

    // Deutsche Sprachkonfiguration
    language: {
      default: 'de',
      translations: {
        de: {
          consentModal: {
            title: '🍪 Wir respektieren Ihre Privatsphäre',
            description: `${BUSINESS.name} verwendet Cookies und ähnliche Technologien. Technisch notwendige Cookies sind für den Betrieb der Website erforderlich. Weitere Cookies werden nur mit Ihrer ausdrücklichen Einwilligung gesetzt. Sie können Ihre Auswahl jederzeit anpassen oder widerrufen. <a href="/datenschutz" class="cc-link">Datenschutzerklärung</a> | <a href="/impressum" class="cc-link">Impressum</a>`,
            acceptAllBtn: 'Alle akzeptieren',
            acceptNecessaryBtn: 'Nur notwendige',
            showPreferencesBtn: 'Einstellungen anpassen',
          },
          preferencesModal: {
            title: 'Cookie-Einstellungen',
            acceptAllBtn: 'Alle akzeptieren',
            acceptNecessaryBtn: 'Alle ablehnen',
            savePreferencesBtn: 'Auswahl speichern',
            closeIconLabel: 'Schließen',
            serviceCounterLabel: 'Dienst|Dienste',
            sections: [
              {
                title: 'Ihre Privatsphäre',
                description: `Wir als ${BUSINESS.name} legen großen Wert auf den Schutz Ihrer Daten. Hier können Sie individuell festlegen, welche Cookies und Dienste Sie zulassen möchten. Ihre Einwilligung ist freiwillig und kann jederzeit über den Link „Cookie-Einstellungen" im Footer widerrufen werden.`,
              },
              {
                title: CONSENT_CATEGORIES.necessary.label,
                description: CONSENT_CATEGORIES.necessary.description,
                linkedCategory: 'necessary',
                cookieTable: {
                  headers: {
                    name: 'Cookie',
                    domain: 'Domain',
                    description: 'Zweck',
                    expiration: 'Laufzeit',
                  },
                  body: [
                    {
                      name: 'cc_cookie',
                      domain: BUSINESS.domain.replace('https://', ''),
                      description: 'Speichert Ihre Cookie-Einstellungen (Consent-Status)',
                      expiration: '1 Jahr',
                    },
                  ],
                },
              },
              {
                title: CONSENT_CATEGORIES.analytics.label,
                description: CONSENT_CATEGORIES.analytics.description,
                linkedCategory: 'analytics',
                cookieTable: {
                  headers: {
                    name: 'Cookie',
                    domain: 'Domain',
                    description: 'Zweck',
                    expiration: 'Laufzeit',
                  },
                  body: [
                    {
                      name: '_ga',
                      domain: 'google.com',
                      description: 'Google Analytics – Unterscheidung einzelner Nutzer (anonymisiert)',
                      expiration: '2 Jahre',
                    },
                    {
                      name: '_gid',
                      domain: 'google.com',
                      description: 'Google Analytics – Unterscheidung einzelner Nutzer',
                      expiration: '24 Stunden',
                    },
                  ],
                },
              },
              {
                title: CONSENT_CATEGORIES.marketing.label,
                description: CONSENT_CATEGORIES.marketing.description,
                linkedCategory: 'marketing',
              },
              {
                title: CONSENT_CATEGORIES.external_media.label,
                description: CONSENT_CATEGORIES.external_media.description,
                linkedCategory: 'external_media',
                cookieTable: {
                  headers: {
                    name: 'Cookie',
                    domain: 'Domain',
                    description: 'Zweck',
                    expiration: 'Laufzeit',
                  },
                  body: [
                    {
                      name: 'NID / CONSENT',
                      domain: 'google.com',
                      description: 'Google Maps – Karteneinbettung und Standortanzeige',
                      expiration: '6 Monate',
                    },
                  ],
                },
              },
              {
                title: 'Weitere Informationen',
                description: `Bei Fragen zu unserer Cookie-Richtlinie oder zum Datenschutz wenden Sie sich bitte an: <strong>${BUSINESS.name}</strong>, ${BUSINESS.ownerTitle} ${BUSINESS.owner}, E-Mail: <a href="mailto:${BUSINESS.email}" class="cc-link">${BUSINESS.email}</a>, Telefon: <a href="${BUSINESS.phone.href}" class="cc-link">${BUSINESS.phone.display}</a>`,
              },
            ],
          },
        },
      },
    },

    // Callbacks für Consent-Logging
    onFirstConsent: ({ cookie }) => {
      logConsent('first_consent', cookie.categories);
    },
    onChange: ({ cookie, changedCategories }) => {
      logConsent('consent_changed', cookie.categories, changedCategories);
    },
  };
}

/**
 * Consent-Status revisionssicher protokollieren.
 * Speichert Version + Zeitstempel in localStorage.
 */
function logConsent(
  action: 'first_consent' | 'consent_changed',
  categories: string[],
  changedCategories?: string[]
) {
  try {
    const entry = {
      action,
      timestamp: new Date().toISOString(),
      configVersion: CONSENT_CONFIG_VERSION,
      acceptedCategories: categories,
      ...(changedCategories && { changedCategories }),
    };

    // Consent-Audit-Log in localStorage (max. 50 Einträge)
    const LOG_KEY = 'cc_audit_log';
    const existingLog = JSON.parse(localStorage.getItem(LOG_KEY) || '[]');
    existingLog.push(entry);
    if (existingLog.length > 50) existingLog.shift();
    localStorage.setItem(LOG_KEY, JSON.stringify(existingLog));

    // Optional: Serverseitiges Logging vorbereitet (auskommentiert)
    // fetch('/api/consent-log', { method: 'POST', body: JSON.stringify(entry) });
  } catch {
    // localStorage nicht verfügbar → silent fail
  }
}
