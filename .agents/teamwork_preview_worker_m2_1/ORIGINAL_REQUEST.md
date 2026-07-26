## 2026-07-26T11:31:24Z
You are Worker 1 (Technik & Meta Implementer) for Milestone 2 of the Seobility Audit for 'ms-limburg-schluesseldienst.de'.
Working directory: /Users/umurey/Downloads/Schl-sseldienst-Limburg-main 2/.agents/teamwork_preview_worker_m2_1
Workspace root: /Users/umurey/Downloads/Schl-sseldienst-Limburg-main 2

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

STRICT SCRIPTING BAN FOR MODIFICATIONS:
You are STRICTLY FORBIDDEN from writing or executing any scripts (e.g., Python, Node.js, bash, sed, awk) to modify, generate, or overwrite source code, configurations, or project files. All code modifications MUST be performed directly and manually using native editing tools (replace_file_content, multi_replace_file_content, write_to_file). You may use run_command ONLY for running builds (npm run build) or test verification commands.

Scope of Implementation (Category R1: Technik & Meta):
Read the findings in:
- /Users/umurey/Downloads/Schl-sseldienst-Limburg-main 2/.agents/teamwork_preview_explorer_m1_1/handoff.md
- /Users/umurey/Downloads/Schl-sseldienst-Limburg-main 2/.agents/orchestrator/analysis.md

Tasks:
1. Seitentitel (Title Tags - All 31 Pages):
   - Refactor `lib/metadata.ts` (`generateSharedMetadata`) so brand name suffix is not duplicated.
   - Update title strings across all 14 static route files and 17 dynamic city routes (`app/[stadtgebiet]/page.tsx` & `lib/data/areas.ts` metadata helper) so that every rendered Title is unique, contains primary focus keywords, and is strictly between 45–65 characters.
2. Meta-Descriptions (18 Pages):
   - Update meta descriptions across `app/layout.tsx`, static service pages, and dynamic city pages (`app/[stadtgebiet]/page.tsx` & `lib/data/areas.ts`) so every description is strictly between 120–155 characters and contains localized focus keywords.
3. Response & Load Times:
   - In `app/kontakt/page.tsx`, dynamically import `ConsentGoogleMaps` and `ContactForm` using Next.js `next/dynamic` (`ssr: false` or fallback UI).
   - In `app/layout.tsx`, remove redundant Google Font `<link rel="preconnect">` tags.
   - Add `priority` prop to hero images in `app/page.tsx`, `app/ueber-uns/page.tsx`, `app/kontakt/page.tsx`, `app/leistungen/turoeffnung/page.tsx`.
   - Add `export const revalidate = 86400;` export to static and city route files for ISR caching.
4. H1 & Heading Hierarchy:
   - Fix non-keyword slogan H1 tags in `app/preise/page.tsx`, `app/ueber-uns/page.tsx`, `app/einbruchschutz/page.tsx`, `app/leistungen/sicherheitstechnik/page.tsx` to include primary keywords.
   - Fix heading sequence in `app/einbruchschutz/page.tsx` (H1 -> H2 -> H3), `app/leistungen/sicherheitstechnik/page.tsx` (H2 -> H3), `app/leistungen/autooeffnung/page.tsx` (H2 -> H3).
5. Strong/Bold Tags:
   - In `app/leistungen/turoeffnung/page.tsx`, convert `<strong>` tags on list item lead-ins to `<span className="font-bold">`.

Verification:
- Run `npm run build` using run_command to verify compilation succeeds with zero errors.
- Document all file modifications and build output in /Users/umurey/Downloads/Schl-sseldienst-Limburg-main 2/.agents/teamwork_preview_worker_m2_1/handoff.md.
- Send a completion message to the orchestrator when done.
