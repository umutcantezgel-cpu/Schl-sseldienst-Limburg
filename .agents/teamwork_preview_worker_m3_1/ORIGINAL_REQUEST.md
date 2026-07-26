## 2026-07-26T04:35:47Z
You are Worker 2 (Struktur & Verlinkung Implementer) for Milestone 3 of the Seobility Audit for 'ms-limburg-schluesseldienst.de'.
Working directory: /Users/umurey/Downloads/Schl-sseldienst-Limburg-main 2/.agents/teamwork_preview_worker_m3_1
Workspace root: /Users/umurey/Downloads/Schl-sseldienst-Limburg-main 2

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

STRICT SCRIPTING BAN FOR MODIFICATIONS:
You are STRICTLY FORBIDDEN from writing or executing any scripts (e.g., Python, Node.js, bash, sed, awk) to modify, generate, or overwrite source code, configurations, or project files. All code modifications MUST be performed directly and manually using native editing tools (replace_file_content, multi_replace_file_content, write_to_file). You may use run_command ONLY for running builds (npm run build) or test verification commands.

Scope of Implementation (Category R2: Struktur & Verlinkung):
Read findings in:
- /Users/umurey/Downloads/Schl-sseldienst-Limburg-main 2/.agents/teamwork_preview_explorer_m1_2/handoff.md
- /Users/umurey/Downloads/Schl-sseldienst-Limburg-main 2/.agents/orchestrator/analysis.md

Tasks:
1. Interne Linktexte (Generic Link Anchor Texts):
   - In `components/RelatedServices.tsx` line 27: Change anchor text from generic `"Mehr erfahren"` to descriptive `Details zu ${service.title} ansehen`.
   - In `components/Footer.tsx` line 116: Change anchor text from generic `"Alle Gebiete"` to `"Alle Einsatzgebiete im Landkreis Limburg-Weilburg"`.
   - In `app/page.tsx` line 271: Change anchor text from `"Zum kompletten FAQ-Bereich"` to `"Häufig gestellte Fragen zu Türöffnungen & Preisen lesen"`.
2. Externe Links:
   - In `app/impressum/page.tsx` line 74: Remove the hyperlink to discontinued EU ODR platform (`https://ec.europa.eu/consumers/odr`) or update text notice to plain text.
   - In `components/trust/RegionalPartner.tsx` line 22: Update external link `https://wetzlar-schluesseldienst.de/` to include `rel="noopener noreferrer nofollow"`.
3. Weiterleitungen / Internal Redirect Target:
   - In `app/page.tsx` line 125: Change "Cleverer Einbruchschutz" card `href` from `"/leistungen/sicherheitstechnik"` to primary direct target `"/einbruchschutz"`.
   - In `components/Footer.tsx` line 101: Change Limburg footer link `slug` from `"limburg"` to `""` (pointing directly to `/`).
4. Sitemap Orphan URL Resolution:
   - Integrate `/einbruchschutz` into `components/Header.tsx` (line 17) and `components/StickyHeader.tsx` (line 33) under `leistungenLinks`.
   - Add `{ name: "Einbruchschutz & Sicherheitsberatung", slug: "einbruchschutz" }` to legal/service links in `components/Footer.tsx`.

Verification:
- Run `npm run build` using run_command to verify clean build output.
- Document all file modifications and build output in /Users/umurey/Downloads/Schl-sseldienst-Limburg-main 2/.agents/teamwork_preview_worker_m3_1/handoff.md.
- Send a completion message to the orchestrator when done.
