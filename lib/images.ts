/**
 * Zentrale Bild-Registry: Alle Firmenbilder von MS Schlüsseldienst Limburg.
 * Jede Seite importiert Bildpfade, Alt-Texte und Dimensionen von hier.
 *
 * Dimensionen sind exakt in Pixel angegeben, um CLS (Cumulative Layout Shift)
 * komplett zu eliminieren. Next.js `Image` nutzt diese für das aspect-ratio.
 */

export interface ImageMeta {
  /** Pfad relativ zu /public */
  src: string;
  /** SEO-optimierter Alt-Text (deutsch) */
  alt: string;
  /** Title-Attribut für Tooltip */
  title: string;
  /** Originale Pixelbreite */
  width: number;
  /** Originale Pixelhöhe */
  height: number;
}

/**
 * Alle 13 Betriebsfotos mit vollständigen Metadaten.
 * Naming-Convention: camelCase, sprechend, ohne Umlaute.
 */
export const IMAGES = {
  /** Mina Saad im Schlüsselgeschäft – Hauptportrait */
  inhaberPortrait: {
    src: "/images/inhaber-portrait.jpg",
    alt: "Mina Saad, Inhaber MS Schlüsseldienst Limburg, in seinem Fachgeschäft",
    title: "Ihr Ansprechpartner in Limburg",
    width: 682,
    height: 1024,
  },

  /** Monteur nimmt Notfall-Anruf entgegen */
  notfallAnruf: {
    src: "/images/notfall-anruf.jpg",
    alt: "Schlüsseldienst-Monteur nimmt Notfall-Anruf vor Haustür in Limburg entgegen",
    title: "24/7 Notfall-Erreichbarkeit",
    width: 2048,
    height: 1536,
  },

  /** Fachgerechte Schloss-Montage */
  schlossMontage: {
    src: "/images/schloss-montage.jpg",
    alt: "Fachgerechte Schloss-Montage mit Akkuschrauber an Wohnungstür in Limburg",
    title: "Präzise Schloss-Installation",
    width: 2048,
    height: 1536,
  },

  /** Erfolgreiche Türöffnung – Daumen hoch */
  turoeffnungErfolg: {
    src: "/images/turoeffnung-erfolg.jpg",
    alt: "Erfolgreiche Türöffnung durch MS Schlüsseldienst Limburg – zufriedener Monteur",
    title: "Mission erledigt – Tür offen",
    width: 2048,
    height: 1536,
  },

  /** Obentürschließer-Installation */
  tuerschliesserMontage: {
    src: "/images/tuerschliesser-montage.jpg",
    alt: "Installation eines Obentürschließers an moderner Eingangstür in Limburg",
    title: "Professionelle Türschließer-Montage",
    width: 1290,
    height: 1976,
  },

  /** Gegensprechanlage – Techniker hält Gerät */
  sprechanlageArbeit: {
    src: "/images/sprechanlage-arbeit.jpg",
    alt: "Techniker hält Gegensprechanlage bei Austausch der Haussprechanlage in Limburg",
    title: "Sprechanlagen-Service",
    width: 1536,
    height: 2048,
  },

  /** Gegensprechanlage – Detailansicht */
  sprechanlageDetail: {
    src: "/images/sprechanlage-detail.jpg",
    alt: "Detailansicht einer Gegensprechanlage mit Montagewerkzeug bei MS Schlüsseldienst",
    title: "Haustechnik vom Profi",
    width: 1536,
    height: 2048,
  },

  /** Werkzeugeinsatz an Metalltür */
  turoeffnungWerkzeug: {
    src: "/images/turoeffnung-werkzeug.jpg",
    alt: "Professionelle Werkzeuge bei Türöffnung an Metalltür durch Schlüsseldienst Limburg",
    title: "Spezialwerkzeug für jede Tür",
    width: 1152,
    height: 2048,
  },

  /** Geöffnetes Getriebeschloss – Detailshot */
  schlossMechanik: {
    src: "/images/schloss-mechanik.jpg",
    alt: "Detailaufnahme eines geöffneten Getriebeschlosses mit Zahnrädern – Schlosstechnik Limburg",
    title: "Expertise in Schlosstechnik",
    width: 1152,
    height: 2048,
  },

  /** Türbeschlag-Installation */
  zylinderMontage: {
    src: "/images/zylinder-montage.jpg",
    alt: "Monteur installiert Türbeschlag und Schließgarnitur an Haustür in Limburg",
    title: "Neue Beschläge für mehr Sicherheit",
    width: 1536,
    height: 2048,
  },

  /** Schließzylinder einsetzen */
  zylinderInstallation: {
    src: "/images/zylinder-installation.jpg",
    alt: "Schlüsseldienst-Techniker setzt neuen Schließzylinder in Haustür ein – Limburg",
    title: "Zylindertausch vom Fachmann",
    width: 1536,
    height: 2048,
  },

  /** Verschlissenes Schließblech */
  schliessblechDetail: {
    src: "/images/schliessblech-detail.jpg",
    alt: "Verschlissenes Schließblech an Türrahmen – Austausch durch Schlüsseldienst Limburg",
    title: "Sicherheitsanalyse vor Ort",
    width: 1536,
    height: 2048,
  },

  /** Profilzylinder-Vermessung */
  zylinderVermessung: {
    src: "/images/zylinder-vermessung.jpg",
    alt: "Vermessung eines Profilzylinders mit Zollstock für passgenauen Ersatz in Limburg",
    title: "Millimetergenaue Arbeit",
    width: 1536,
    height: 2048,
  },
} as const satisfies Record<string, ImageMeta>;

/** Typ für Bild-Keys zur typsicheren Referenzierung */
export type ImageKey = keyof typeof IMAGES;
