# Wiki Lint Report — 2026-09-05

**Scope:** 52 wiki pages — 18 sources, 26 entities, 4 concepts, 1 synthesis, plus index/log/overview.

---

## 1. Broken links
**None found.** All `[[wikilinks]]` across all 52 pages resolve to an existing page.

## 2. Orphan pages
**None in the strict sense** (every page has ≥1 inbound `[[wikilink]]`), but 3 pages are **near-orphans** — linked only from `overview.md` (a synthesis/summary page), not from any actual source or entity content page:
- `entities/Meetcera.md`
- `entities/GuociMaterials.md`
- `entities/ZhejiangJingciSemiconductor.md`

**Root cause found:** `sources/top-10-factories-for-metallized-ceramic-components.md` names all three of these companies in its ranked list (#1, #6, #9) and its filename is cited in each entity page's frontmatter `sources:` field — but its own **Connections** section never links back to them with `[[...]]` syntax (they appear only as plain **bold text** in the Key Claims list). This is a convention violation per CLAUDE.md ("Use `[[PageName]]` wikilinks to link to other wiki pages") and the direct cause of the near-orphan status above.

## 3. Missing entity pages
Two companies now cross the "named in 3+ pages" threshold without a dedicated entity page:

| Entity | Mentioned in |
|---|---|
| **Zhejiang TC Ceramic Electronic** (China) | `amb-ceramic-substrate-market-report-dynamics-growth-drivers-future-outlook-2025-2033`, `global-amb-ceramic-substrate-industry-report-2026-market-share-competitive-landscape-and-17-2-growth`, `source` |
| **Tong Hsing Electronic Industries** (Taiwan) | `active-metal-brazed-amb-substrates-market-research-report-2034`, `amb-ceramic-substrate-market-report-dynamics-growth-drivers-future-outlook-2025-2033`, `dcb-and-amb-substrate-market-size-share-report-to-2035` |

Note: `ZhejiangJingciSemiconductor.md` (DPC/5G-filter/Mini-LED specialist) is a **genuinely different company** from "Zhejiang TC Ceramic Electronic" (an AMB top-10 player) — confirmed distinct, not a naming collision, but the near-identical names make future conflation likely. Worth a cross-reference note if either page is created.

## 4. Contradictions
- **Existing, well-documented:** the 9-way inconsistent AMB-only market-sizing (USD 372M–2,434M base-year range) and 3-way inconsistent DCB+AMB combined sizing, already thoroughly flagged in `overview.md` and each source's own Contradictions section. No new resolution found.
- **New finding — same-publisher inconsistency, previously unflagged:** Dataintelo's own `dcb-and-amb-substrates-for-power-modules-market-research-report-2034` states **Rogers Corporation is "the global market leader"** in the combined DCB+AMB market, while Dataintelo's own `active-metal-brazed-amb-substrates-market-research-report-2034` ranks **Kyocera #1 (18.2%)** ahead of Rogers (#2, 14.7%) in the AMB-only market. These aren't strictly incompatible (different market scopes — Kyocera could lead AMB-only while trailing Rogers in DCB+AMB combined), but the same research house gives two different "#1 supplier" answers depending on report, and neither report acknowledges the other. Not currently cross-referenced anywhere in the wiki.

## 5. Stale summaries
- **`syntheses/top-3-amb-suppliers-vs-heraeus.md`** (last updated 2026-08-13) is now stale relative to sources ingested 2026-09-05:
  - It states *"no source ingested so far describes a specific Ferrotec product line, capacity figure, or technical differentiator"* — **now false**: `ferrotec-holdings-corporation-update-of-the-mid-term-management-plan-ir-street` gives detailed FY3/22 financials, factory-level capacity data, and mid/long-term targets.
  - It states Heraeus has *"no comparable expansion"* documented vs. Rogers — **partially outdated**: Heraeus now has a named technical achievement (CIPS 2026 Si3N4 electrical life prediction model) and a quantified AMB-only revenue share (12.3% vs. Rogers's 14.7%), neither reflected in the synthesis.
  - The synthesis's core "no numeric benchmarking exists" conclusion is still directionally correct (no thermal-conductivity/price spec comparison exists), but its supporting claims about data gaps need a refresh.

## 6. Data gaps (unanswerable questions + suggested sources)
1. **What explains the 9-way AMB market-size divergence?** No ingested source discloses methodology (unit basis, subsegment definitions). → Look for a source with an explicit methodology/scope appendix, or a reconciliation analysis from an independent analyst.
2. **How does Heraeus's Si3N4 substrate actually compare to Rogers's curamik on thermal conductivity/CTE/price?** Still no numeric spec sheet for Heraeus. → A Heraeus product datasheet or technical page (parallel to what TANAKA/Rogers provided this session).
3. **Is "NGK Corporation" distinct from "Niterra Materials"?** QYResearch's 2026 report lists both separately with no explanation. → An NGK Insulators corporate-structure/rebrand press release.
4. **Denka, Toshiba Materials, and Proterial remain "named but undifferentiated"** across 3-4+ sources each, with zero company-specific product/capacity data from any source (Ferrotec's equivalent gap was closed this session). → Company profile pages, IR presentations, or press releases for any of the three.
5. **Is Jiangsu Fulehua Semiconductor really the #1 AMB supplier by revenue?** Only one QYResearch report (`global-amb-ceramic-substrate-industry-report-2026-market-share-competitive-landscape-and-17-2-growth`) makes this claim; no other source corroborates a Chinese manufacturer leading over Rogers/Ferrotec/Kyocera/Denka. → A second, independent ranking source to confirm or refute.
6. **No source quantifies ODBC's (ceramic-free substrate) commercial timeline** against AMB/DBC's current market position — open since the very first ingest.
