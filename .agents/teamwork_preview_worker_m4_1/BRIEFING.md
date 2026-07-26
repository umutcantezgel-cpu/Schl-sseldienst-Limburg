# BRIEFING — 2026-07-26T11:40:30Z

## Mission
Execute all code and content modifications for Milestone 4 (Category R3: Inhalt & Keywords + Category R1 Fine-tuning).

## 🔒 My Identity
- Archetype: implementer
- Roles: implementer, qa, specialist
- Working directory: /Users/umurey/Downloads/Schl-sseldienst-Limburg-main 2/.agents/teamwork_preview_worker_m4_1
- Original parent: ed4f226a-9eb7-4a43-ac27-ca46a983cb06
- Milestone: Milestone 4 (Category R3: Inhalt & Keywords)

## 🔒 Key Constraints
- STRICT SCRIPTING BAN FOR MODIFICATIONS: All modifications must be made directly using native editing tools (`replace_file_content`, `multi_replace_file_content`, `write_to_file`).
- MANADATORY INTEGRITY MANDATE: Genuine implementations only, no hardcoding or shortcut facade outputs.

## Current Parent
- Conversation ID: ed4f226a-9eb7-4a43-ac27-ca46a983cb06
- Updated: 2026-07-26T11:40:00Z

## Task Summary
- Expand thin content (<500 words) on 8 pages to >500 words.
- Integrate primary H1 focus keyword phrases into body text on 6 pages.
- Integrate primary Title focus keyword phrases into intro body text on 3 pages.
- Individualize trust components and city page boilerplate sections across all city routes.
- Execute Category R1 fine-tuning (Bad Camberg title length, Ueber-Uns description length, strict H1->H2->H3 heading hierarchy).

## Change Tracker
- **Files modified**:
  - `components/EmergencyCTA.tsx`: Added props interface (`EmergencyCTAProps`) and dynamic title, subtitle, locationName support.
  - `components/trust/TrustBadges.tsx`: Added props interface (`TrustBadgesProps`) and dynamic locationName support.
  - `components/trust/TrustStrip.tsx`: Added props interface (`TrustStripProps`) and dynamic locationName support.
  - `app/[stadtgebiet]/page.tsx`: Fixed Bad Camberg title to 48 chars, passed `locationName` to trust components, wired dynamic local fields.
  - `lib/data/areas.ts`: Updated `LocalContent` & `CityData` interfaces; expanded `limburg-ahlbach` & `limburg-linter` city objects with rich local copy.
  - `app/kontakt/page.tsx`: Expanded body text (>500 words), added `Schlüsseldienst Limburg Kontakt` keyword, updated `EmergencyCTA` props.
  - `app/einbruchschutz/page.tsx`: Expanded body text (>500 words), added `Einbruchschutz & Sicherheitsberatung Limburg` keyword, fixed heading hierarchy.
  - `app/impressum/page.tsx`: Expanded legal sections (>500 words) with HWK Limburg & §18 MStV notices.
  - `app/preise/page.tsx`: Expanded body text (>600 words), added `Schlüsseldienst Limburg Preise` keyword, updated `EmergencyCTA` props.
  - `app/servicegebiet/page.tsx`: Expanded body text (>550 words), fixed H1->H2->H3 heading hierarchy, updated `EmergencyCTA` props.
  - `app/ueber-uns/page.tsx`: Updated meta description to 148 chars, added `Über MS Schlüsseldienst Limburg` keyword, expanded content (>600 words).
  - `app/leistungen/autooeffnung/page.tsx`: Added `Autoöffnung Limburg` keyword to body text.
  - `app/leistungen/schliessanlagen/page.tsx`: Added `Schließanlagen in Limburg` keyword to body text, converted step headings from `h4` to `h3`.
  - `app/leistungen/schluessel-nachmachen/page.tsx`: Added `Schlüssel nachmachen Limburg` keyword to body text, converted step headings from `h4` to `h3`.
  - `app/leistungen/sicherheitstechnik/page.tsx`: Added `Sicherheitstechnik Limburg` keyword to body text.
  - `app/leistungen/turoeffnung/page.tsx`: Converted step headings from `h4` to `h3`.
  - `app/faq/page.tsx`: Added `FAQ Schlüsseldienst Limburg` and `Häufig gestellte Fragen Schlüsseldienst Limburg` keywords to body text.
- **Build status**: Verification in progress (`npm run build`).

## Quality Status
- **Build/test result**: Pending build completion.
- **Lint status**: 0 violations.
- **Tests added/modified**: Static site build verification.
