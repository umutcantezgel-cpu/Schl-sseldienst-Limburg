# Orchestration Plan: Seobility Website Audit Implementation

## Goal
Achieve 100/100 Seobility Onpage Score for `ms-limburg-schluesseldienst.de` by fulfilling all requirements in R1, R2, and R3 while adhering strictly to anti-cheating integrity rules and manual tool editing constraints.

## Phases & Steps

### Phase 1: Exploration & Codebase Mapping (Milestone 1)
1. Dispatch 3 parallel Explorer subagents (`teamwork_preview_explorer`):
   - **Explorer 1 (Technik & Meta Audit)**: Map all pages, inspect titles, meta descriptions, H1 & heading structures, strong/bold tags, and performance/caching bottlenecks.
   - **Explorer 2 (Struktur & Verlinkung Audit)**: Scan internal link anchor texts, external links, internal redirects (301/302), and sitemap entries.
   - **Explorer 3 (Inhalt & Keywords Audit)**: Measure word counts across all pages, identify thin content (<500 words), inspect H1/Title keyword usage in body text, and locate all duplicate text blocks across pages.
2. Aggregate exploration reports into `.agents/orchestrator/analysis.md`.

### Phase 2: Implementation (Milestones 2, 3, 4)
For each milestone:
1. Dispatch Worker subagents (`teamwork_preview_worker`) with explicit manual tool instructions and zero-tolerance integrity warning.
2. Dispatch Reviewer subagents (`teamwork_preview_reviewer`) to verify title/meta lengths, word counts, heading hierarchy, link status, and build success.
3. Dispatch Challenger subagents (`teamwork_preview_challenger`) for empirical validation.
4. Dispatch Forensic Auditor subagents (`teamwork_preview_auditor`) to ensure authentic logic implementation (no hardcoded test hacks or fake content).

### Phase 3: Final Verification & Victory Audit (Milestone 5)
1. Run full project build and verification.
2. Confirm 100% acceptance criteria compliance across R1, R2, R3.
3. Final Forensic Audit gate.
4. Present results to Sentinel/User for Victory Audit.
