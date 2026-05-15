/**
 * Single Source of Truth: Alle Firmendaten von MS Schlüsseldienst Limburg.
 * Jede Komponente und jede Page importiert von hier — nie wieder Hardcoding.
 */
export const BUSINESS = {
  /** Vollständiger, offizieller Firmenname */
  name: "MS Schlüsseldienst Limburg",
  /** Kurzform für enge UI-Stellen (Mobile Logo, kurze CTAs) */
  shortName: "MS Schlüsseldienst",
  /** Rechtsform-Bezeichnung für Impressum/Schema */
  legalName: "MS Schlüsseldienst Limburg",
  /** Inhaberin */
  owner: "Mina Saad",
  /** Inhaberbezeichnung */
  ownerTitle: "Inh.",

  address: {
    street: "Dr.-Wolff-Straße 2",
    zip: "65549",
    city: "Limburg",
    cityFull: "Limburg an der Lahn",
    state: "Hessen",
    country: "Deutschland",
    countryCode: "DE",
    coordinates: {
      lat: 50.3845,
      lng: 8.0645,
    },
  },

  phone: {
    /** Formatierte Darstellung für den Nutzer */
    display: "0152 0936 1743",
    /** tel:-Link für Anrufe */
    href: "tel:015209361743",
    /** Internationale Darstellung für Schema.org */
    international: "+49 152 0936 1743",
    /** Internationales Format für tel:-Links (E.164) */
    hrefInternational: "tel:+4915209361743",
  },

  email: "info@sd-limburg.de",

  /** Steuernummer (Finanzamt) */
  taxId: "03986300160",
  /** Umsatzsteuer-ID */
  vatId: "DE 282140471",
  /** Umsatzsteuer-Befreiung nach § 19 UStG */
  vatExempt: false,

  /** Geo-Koordinaten des Firmensitzes */
  geo: {
    lat: 50.3833,
    lng: 8.0667,
  },

  /** Produktions-Domain */
  domain: "https://schluesseldienst-limburg-24.de",
} as const;
