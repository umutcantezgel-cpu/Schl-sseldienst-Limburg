# Project: Seobility Website Audit (ms-limburg-schluesseldienst.de)

## Architecture
- **Framework**: Next.js (App Router / Pages Router) with TypeScript & React
- **Target Domain**: ms-limburg-schluesseldienst.de
- **Goal**: Perfect 100/100 Seobility Onpage Audit Score across Technik & Meta, Struktur & Verlinkung, and Inhalt & Keywords.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | Exploration & Diagnostic Audit | Identify all 31 title issues, 18 meta description issues, slow response/load times, 4 H1 & 3 heading structure issues, strong tag warning, link issues, sitemap issue, 8 thin content pages, keyword reuse, and 40 duplicate text blocks | None | DONE |
| 2 | R1: Technik & Meta Optimization | Fix titles (31), meta descriptions (18), response/load times, H1 & heading hierarchy (4+3), strong/bold tag warning | M1 | DONE |
| 3 | R2: Struktur & Verlinkung Optimization | Fix internal anchor texts (2), external links (2), internal redirects (1), sitemap sync (1) | M1 | DONE |
| 4 | R3: Inhalt & Keywords Optimization | Expand thin content pages (<500 words, 8 pages), natural keyword insertion in text for H1 (6) & Title (3), individualize 40 duplicate text blocks | M1 | DONE |
| 5 | Verification & Victory Audit | Run build & lint, test all pages, verify zero audit warnings, run forensic integrity check, report completion | M2, M3, M4 | DONE |

## Interface Contracts
### Metadata & Layout ↔ Page Components
- All pages must export valid, unique `metadata` objects (or `head` tags) with Titles between 45–65 characters and Meta Descriptions between 120–155 characters, incorporating primary keywords.
- Heading structure across every page must follow strict sequence: exactly one `<h1>` per page, followed by `<h2>`, `<h3>` without skipping levels.

### Sitemap ↔ App Routes
- Every URL present in `sitemap.xml` / `sitemap.ts` must correspond to an active HTTP 200 route regularly linked internally within the navigation/footer.

## Code Layout
- Next.js project directory structure:
  - `app/` or `pages/`: Page routes and layouts
  - `components/`: UI components (headers, footers, content blocks, cards)
  - `lib/` / `public/`: Utilities, images, assets, sitemaps
