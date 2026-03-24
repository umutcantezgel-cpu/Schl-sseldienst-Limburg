<div align="center">
<h1>Schlüsseldienst Lahn-Dill-Kreis</h1>
<p><strong>Eine hochperformante, SEO-optimierte und extrem konversionsstarke Next.js-Architektur für lokale Notdienste.</strong></p>
<br />

![Next.js](https://img.shields.io/badge/Next.js-15.x-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=flat-square&logo=tailwindcss)
![Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)
![TypeScript](https://img.shields.io/badge/TSC-Zero_Errors-brightgreen?style=flat-square)

</div>

Eine moderne, vertrauenserweckende ("Bluish Premium") Web-Infrastruktur für einen regionalen Schlüsseldienst. Entwickelt mit Fokus auf technische Exzellenz (App Router, SSG), maximale Lokale SEO-Präsenz durch dynamische Stadtgebiets-Generierung und kompromisslose Performance. Das Projekt transformiert einen generischen Notdienst in eine autoritäre Sicherheitsplattform.

---
## Inhalt
---

- [Über das Projekt](#über-das-projekt)
  - [Key-Features](#key-features)
- [Tech-Stack & Tooling](#tech-stack--tooling)
- [Projekt-Statistiken](#projekt-statistiken)
- [Installation & Setup](#installation--setup)
- [Architektur & Projektstruktur](#architektur--projektstruktur)
- [Datenmodell & Content](#datenmodell--content)
- [Routing & Seitenstruktur](#routing--seitenstruktur)
- [SEO & Metadaten](#seo--metadaten)
- [Formulare & Security](#formulare--security)
- [Deployment](#deployment)

---

## Über das Projekt

Lokale Notdienste (wie Schlüsseldienste) leiden im Web oft unter mangelnder Transparenz, veralteten Designs und schlechter UX, was bei Kunden im Notfall zu extremen Absprungraten führt. Dieses Projekt löst exakt dieses Problem. Es bietet eine maßgeschneiderte, psychologisch fundierte Notdienst-Identität, die auf einer extrem schnellen Next.js-Architektur aufsetzt. Durch konsequente statische Generierung (SSG) in Kombination mit strukturierten Schema.org-Daten erreicht die Seite ein perfektes technisches Foundation für Local SEO. Das Ergebnis ist eine Plattform, die Vertrauen schafft, bevor der Nutzer anruft.

### Key-Features

**Architektur & Performance**
- Vollständig statisch generiert (SSG) für ~120ms Ladezeiten
- Next.js 15 App Router mit Nested Layouts
- Typsicherheit in allen Datenflüssen (Strict Mode)

**Design & UX ("Bluish Premium")**
- Psychologisch fundierte Farbpalette für den Notdienst (Weiß, Slate, Navy-Blau)
- Zero-Jank CSS-Native Navigation (Glassmorphism StickyHeader)
- Barrierefreie, touch-optimierte Elemente für Mobile-First Notfälle

**SEO & Marketing**
- Dynamische Routing-Architektur für alle Postleitzahlen & Gebiete
- Automatisch generierte JSON-LD (Schema.org) Daten für LocalBusiness & Services
- Dynamische `sitemap.ts` und `robots.ts`

**Formulare & Conversion**
- Client-seitige Formular-Validierung mit `react-hook-form` & `zod`
- Eigene API-Route mit CSRF-Protection, Honeypot und Rate-Limiting
- Sticky Notruf-CTAs in allen Viewports

---

## Tech-Stack & Tooling

| Technologie | Version | Zweck |
|:---|:---:|:---|
| **Next.js** | `15.4.x` | Core Framework, App Router, Static Site Generation |
| **React** | `19.2.x` | UI-Bibliothek, Server & Client Components |
| **TypeScript** | `5.9.x` | Strikte Typsicherheit, Interfaces, Generics |
| **Tailwind CSS** | `4.1.x` | Styling, Design-Tokens, Responsive Utility Classes |
| **Framer Motion** | `11.x` | Dekorative Micro-Interactions (Isoliert, non-blocking) |
| **React Hook Form** | `7.x` | Performantes, ungesteuertes Formular-Handling |
| **Zod** | `4.x` | Schema-basierte Datenvalidierung |

<details>
<summary><strong>Tooling & Development-Stack</strong></summary>

- **Linting:** ESLint (`9.39.1`) + `eslint-config-next`
- **Compiler:** `npx tsc --noEmit` (Zero Errors)
- **Bundler:** Turbopack (für Development)
- **Package Manager:** `npm`
</details>

---

## Projekt-Statistiken

Der Code spricht für sich. Das Projekt wird einem kontinuierlichen Zero-Errors-Audit unterzogen.

| Metrik | Wert |
|:---|:---:|
| **Zeilen Code (LOC)** | `~6.900` |
| **TSX-Dateien** | `59` |
| **TS-Dateien (Logik)**| `29` |
| **Öffentliche Routen** | `16` |
| **Build Errors** | `0` |
| **TypeScript Errors** | `0` |

---

## Installation & Setup

**Voraussetzungen:** `Node.js 20+`, `npm`

1. Repository klonen:
```bash
git clone https://github.com/umutcantezgel-cpu/Schl-sseldienst-Limburg.git
cd Schl-sseldienst-Limburg
```

2. Dependencies installieren:
```bash
npm install
```

3. Environment laden (optional für Forms):
```bash
cp .env.example .env.local
```

4. Development-Server starten (mit Turbopack):
```bash
npm run dev
```

5. Production Build testen:
```bash
npm run build && npm run start
```

<details>
<summary><strong>Verfügbare npm Scripts</strong></summary>

| Befehl | Beschreibung |
|:---|:---|
| `npm run dev` | Startet den Next.js Development Server mit Turbopack |
| `npm run build` | Erstellt den optimierten Production Build (Static Export) |
| `npm run start` | Startet den Node-Server für den erstellten Build |
| `npm run lint` | Führt ESLint aus und prüft auf Code-Style Fehler |
| `npm run clean` | Bereinigt den `.next` Cache |
</details>

---

## Architektur & Projektstruktur

Das Projekt nutzt den App Router strikt nach Best Practices. Alle Daten und Komponenten sind physisch und konzeptionell entkoppelt.

```text
/ (Root)
├── app/                        (Next.js App Router 15)
│   ├── (routes)/               (Alle Pages wie preise/, kontakt/, faq/)
│   ├── api/contact/            (Route Handler für das Formular)
│   ├── [stadtgebiet]/          (Dynamisches Routing für Einsatzgebiete)
│   ├── layout.tsx              (Globales Root-Layout)
│   ├── template.tsx            (Template für Page-Transitions)
│   └── globals.css             (Tailwind V4 Setup & Typografie)
├── components/                 (React Komponenten-Bibliothek)
│   ├── ui/                     (Hooks, Buttons, Modals)
│   ├── animations/             (Framer Motion Wrappers)
│   └── StickyHeader.tsx        (Hauptnavigation)
└── lib/                        (Core Logik & Typen)
    ├── data/                   (TypeScript-basierte Content-Quelle)
    ├── schema.ts               (JSON-LD Schema Generatoren)
    └── utils.ts                (Hilfsfunktionen)
```

> Dieses Projekt verwendet **ausschließlich lokale TypeScript-Datenstrukturen** (`lib/data`) als Content-Quelle für statische Seiten. Es gibt keine Runtime-Abhängigkeit zu externen CMS-Systemen oder Datenbanken, was maximale Resilienz und Performance (Edge Ready) garantiert.

---

## Datenmodell & Content

Der Content für Services, Preise, und Testimonials wird strikt über TypeScript-Interfaces typisiert. 

<details>
<summary><strong>Beispiel: Testimony Domain (<code>lib/data/testimonials.ts</code>)</strong></summary>

```typescript
export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  service: string;
  city: string;
  verified: boolean;
}
```
*Die Daten werden direkt in den Server Components als SSG importiert, was jeglichen Lade-Verzug durch Fetch-Requests eliminiert.*
</details>

**Vorhandene Datendomänen:**
- `areas.ts` – Datenbank aller Stadtteile und PLZ für den Lahn-Dill-Kreis
- `faqData.ts` – Strukturierte Q&A für Nutzer und Schema.org
- `pricing.ts` – Transparente Kostenstrukturen für verschiedene Tage/Uhrzeiten
- `testimonials.ts` – Authentische Kundenfeedbacks

---

## Routing & Seitenstruktur

Das Projekt generiert `16` Hauptseiten vollständig statisch zum Build-Zeitpunkt.

| Route | Typ | Beschreibung |
|:---|:---:|:---|
| `/` | `SSG` | Startseite mit dynamischen Sections (Emergency & Trust Hub) |
| `/leistungen/[slug]` | `SSG` | 5 detaillierte Service-Unterseiten |
| `/[stadtgebiet]` | `SSG` | Einsatzgebiete, generiert durch `generateStaticParams()` |
| `/preise` | `SSG` | Vollständige Preistabelle mit Fairness-Garantie |
| `/kontakt` | `SSG` | Formular und Notruf-Warnung (Split-Intent System) |
| `/faq` | `SSG` | Häufige Fragen mit Accordion-UI |
| `/bewertungen` | `SSG` | Kundenstimmen und Trustpilot-Ästhetik |

---

## SEO & Metadaten

Das Projekt ist bis auf das Fundament SEO-optimiert, um im hochkompetitiven Bereich "Schlüsseldienst" lokal ranken zu können:

- **Dynamisches `robots.ts` & `sitemap.ts`:** Die Sitemap wird automatisch generiert und enthält alle statischen und dynamischen (Stadtgebiete) Routen.
- **Custom JSON-LD (`lib/schema.ts`):** Automatische Einspeisung von `LocalBusiness`, `FAQPage`, und `Service` Schema-Daten in den `<head>` jeder Seite für Rich-Snippets in Google.
- **Metadata API:** Jede Route nutzt die Next.js 15 `generateMetadata` API für perfekte Title-Tags und OpenGraph-Daten.

---

## Formulare & Security

Der Kontakt-Endpoint ist KEIN einfaches `mailto:`, sondern eine abgesicherte API-Route (`app/api/contact/route.ts`).

<details>
<summary><strong>Security-Schichten des Endpoints</strong></summary>

1. **In-Memory Rate Limiting** (`5 Requests / Minute` pro IP)
2. **CSRF Validation** (Verifizierung des Headers/Origins)
3. **Honeypot-Feld** (Fängt 99% aller automatisierten Spam-Bots ohne nervige Captchas)
4. **Input Sanitization** (Schutz vor XSS)
</details>

Das Frontend nutzt `react-hook-form` zusammen mit `zod` für perfekte UX, direktes Inline-Feedback und Typsicherheit beim Submitten.

---

## Deployment

Das Projekt ist für sofortiges Vercel-Deployment vorkonfiguriert, kann aber auf jedem Node-Server gehostet werden.

1. **Vercel Connect:** Repository auf Vercel importieren.
2. **Framework Preset:** `Next.js` auswählen.
3. **Environment Variables:** Ggf. API-Keys für Kontakt-Weiterleitung eintragen.
4. **Deploy:** Vercel erkennt automatisch die Static-Generation Struktur und cached das gesamte Projekt am Edge-Netzwerk.

---

<p align="right"><a href="#top">Zurück nach oben</a></p>
