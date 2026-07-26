# Original User Request

## 2026-07-26T04:28:13-07:00

# Teamwork Project Prompt — Draft

> Status: Launched
> Goal: Craft prompt → get user approval → delegate to teamwork_preview

Das Ziel dieses Projekts ist die lückenlose Analyse und Umsetzung eines Seobility Website-Audits für die Domain "ms-limburg-schluesseldienst.de" (Next.js Projekt), um einen perfekten Onpage-Score von 100/100 Punkten in den Bereichen Technik & Meta, Struktur und Inhalt zu erreichen.

Working directory: ~/teamwork_projects/seo_audit_implementation
Integrity mode: development

## Requirements

### R1. Kategorie: Technik & Meta
- **Seitentitel:** Korrigiere die 31 Seiten mit verbesserungswürdigem Seitentitel (optimal: 45–65 Zeichen, einzigartig, mit Haupt-Keyword).
- **Meta-Descriptions:** Behebe die Probleme auf 18 Seiten (optimal: 120–155 Zeichen, einzigartig, mit Haupt-Keyword).
- **Lade- und Antwortzeiten:** Minimiere die Ladezeit von 1 Seite mit sehr langsamer und 11 Seiten mit mittlerer Antwortzeit (Code, Caching oder Ressourcen laden optimieren).
- **H1 & Überschriftenstruktur:** Behebe die H1-Fehler auf 4 Seiten sowie fehlerhafte Überschriften-Strukturen auf 3 Seiten (strikt sequenziell H1 -> H2 -> H3).
- **Strong-/Bold-Tags:** Löse die Warnung auf 1 Seite.

### R2. Kategorie: Struktur & Verlinkung
- **Interne Linktexte:** Optimiere die Ankertexte auf 2 Seiten (generische Texte durch aussagekräftige ersetzen).
- **Externe Links:** Repariere/entferne die 2 problematischen externen Links.
- **Weiterleitungen:** Löse die 1 interne Weiterleitung (direktes Verlinken des Endziels).
- **Sitemap:** Entferne/korrigiere die 1 URL, die nur in der Sitemap gefunden wurde, und stelle sicher, dass sie regulär verlinkt ist oder aus der Sitemap gelöscht wird.

### R3. Kategorie: Inhalt & Keywords
- **Thin Content:** Baue die 8 Seiten mit weniger als 500 Wörtern inhaltlich sinnvoll und einzigartig aus.
- **Keyword-Wiederverwendung (H1):** Auf 6 Seiten das H1-Keyword natürlich im Text ergänzen.
- **Keyword-Wiederverwendung (Title):** Auf 3 Seiten das Title-Keyword natürlich im Text ergänzen.
- **Duplicate Text Blocks:** 40 identische Inhalte/Textblöcke über mehrere Seiten hinweg individualisieren (kein Duplicate Content).

## Acceptance Criteria

### Technik & Meta
- [ ] Alle Seiten (insbes. die betroffenen 31 bzw. 18) weisen Title-Tags zwischen 45-65 Zeichen und Meta-Descriptions zwischen 120-155 Zeichen auf, jeweils mit integriertem Keyword.
- [ ] Alle betroffenen Seiten (4) weisen exakt eine H1-Überschrift auf, und alle Unterüberschriften sind strikt logisch strukturiert.
- [ ] Performance-Engpässe im Code für Server-Antwortzeiten sind bestmöglich beseitigt (Next.js Build/Cache).

### Struktur & Verlinkung
- [ ] Es gibt keine internen Links mit rein generischen Texten (z. B. "hier", "weiter") auf den betroffenen 2 Seiten.
- [ ] 0 fehlerhafte externe Links sind vorhanden.
- [ ] Alle internen Verlinkungen zeigen auf direkte Ziele mit HTTP 200 (keine 301/302).

### Inhalt & Keywords
- [ ] Alle Content-Seiten besitzen mindestens 500 Wörter Text.
- [ ] Das Fokus-Keyword aus H1 und Title wird auf allen Seiten mindestens einmal im Fließtext erwähnt.
- [ ] Doppelter Text (die 40 markierten Textblöcke) wurde vollständig umgeschrieben, sodass es keine sich stark ähnelnden Blöcke mehr gibt.
