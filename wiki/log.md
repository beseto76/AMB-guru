# Wiki Log

Append-only chronological record of all operations.

Format: `## [YYYY-MM-DD] <operation> | <title>`

Parse recent entries: `grep "^## \[" wiki/log.md | tail -10`

---

## [2026-08-13] query | Top 3 AMB Suppliers & Competitive Position vs. Heraeus
Answered "who are the top 3 leading AMB suppliers and what are their competitive advantages especially against Heraeus?" using [[source]], both AMB market-research reports, and the vendor factories roundup. Saved to wiki/syntheses/top-3-amb-suppliers-vs-heraeus.md. Noted a data gap: no source directly benchmarks Heraeus's specs against Rogers's curamik figures.

## [2026-08-13] ingest | Advanced Packaging Designs (Keystone Project 1)
Added source page, 2 entity pages (NREL, DuPont), 4 concept pages (AMB, DBC, ODBC, Power Electronics Packaging). Updated index.md and overview.md.

## [2026-08-13] ingest | AMB Ceramic Substrate Market 2026 to 2034 (Intel Market Research)
Added source page, 5 entity pages (Rogers Corporation, Ferrotec, Denka, NGK Electronics Devices, BYD). Updated index.md and overview.md. Flagged internal market-size inconsistency ($1,801M-by-2034 vs $1.2B-by-2028) and outlook contrast vs. Keystone Project 1 source.

## [2026-08-13] ingest | AMB Ceramic Substrate Market Report: Dynamics, Growth Drivers & Future Outlook (2025–2033)
Added source page, 3 entity pages (Kyocera, CeramTec, CoorsTek), updated Rogers Corporation entity. Updated index.md and overview.md. Flagged major market-size contradiction vs. Intel Market Research source (~4.5x gap in 2025 base-year sizing).

## [2026-08-13] ingest | DCB and AMB Substrate Market Size & Share, Report to 2035
Added source page, 3 entity pages (Mitsubishi Materials, Heraeus Electronics, DOWA METALTECH). Updated index.md and overview.md. Flagged that combined DCB+AMB total ($2.1B) is smaller than a prior source's AMB-only total ($2.43B) — a three-way market-sizing inconsistency across sources ingested so far. Also flagged a plausible (unconfirmed) material-type reconciliation: alumina dominates combined market vs. Si3N4 dominating AMB-only market.

## [2026-08-13] ingest | DCB and AMB Substrates - Global Market Share and Ranking, Overall Sales and Demand Forecast 2025-2031
Added source page, 2 entity pages (KCC, Shengda Tech). Updated index.md and overview.md. Flagged a fourth mutually-inconsistent market-sizing figure ($996M combined DCB+AMB in 2024, vs. TMR's $2.1B for the same combined market/year). Also flagged that this source shares identical production-share and top-8-player-share figures with the Intel Market Research source, suggesting shared data lineage rather than independent corroboration.

## [2026-08-13] ingest | NGK decides to increase Production Capacity of AMB substrates for Power Semiconductor Modules by approximately 2.5 times
Added source page (primary-source NGK press release). Updated NGK Electronics Devices entity page with parent/subsidiary corporate structure and capacity-expansion details. Updated index.md and overview.md. No contradictions — corroborates prior market-research claims about NGK's Malaysia AMB expansion.

## [2026-08-13] ingest | 전력반도체 방열기판 AMB Substrate: 글로벌 시장 전망 및 국내 유망 기업 (QYResearch Korea)
Added source page (Korean-language, translated/summarized), 2 entity pages (Amogreentech, LX Semicon), updated KCC entity. Updated index.md and overview.md. Flagged a fifth, distinct AMB market-size trajectory ($376M 2022e → $2,563M 2029f, 26.0% CAGR) inconsistent with all four prior market-sizing figures, including the other QYResearch-attributed source.

## [2026-08-13] ingest | Top 10 Factories for Metallized Ceramic Components
Added source page (flagged as vendor/self-promotional content), 5 entity pages (Meetcera, Jiangsu Fulehua Semiconductor, Maruwa, Guoci Materials, Zhejiang Jingci Semiconductor), updated Heraeus Electronics entity with parent company detail. Updated index.md and overview.md — this was the final queued source; overview.md now includes a full cross-source synthesis and source-quality notes. No new factual contradictions; flagged self-promotional bias caveat instead.

## [2026-08-13] graph | Knowledge graph rebuilt

36 nodes, 140 edges (140 extracted, 0 inferred).

## [2026-08-13] lint | Fixed stale pages and missing entities from lint report
Updated 4 stale entity pages (Rogers Corporation, CoorsTek, Kyocera, NGK Electronics Devices) with detail from [[top-10-factories-for-metallized-ceramic-components]] that was missed during that ingest. Added 2 missing entity pages (Toshiba Materials, Proterial) for companies named in 3+ sources without their own page, and linked them from the 4 source pages that mention each. Updated index.md and overview.md.

## [2026-08-13] graph | Knowledge graph rebuilt

38 nodes, 150 edges (150 extracted, 0 inferred).

## [2026-08-13] ingest | amb-ceramic-substrate-market-2026-to-2034.md (skipped — duplicate)
raw/amb-ceramic-substrate-market-2026-to-2034.md is byte-for-byte identical to raw/amb-ceramic-substrate-market-2026-to-2034-intel-market-research.md, already ingested as [[amb-ceramic-substrate-market-2026-to-2034-intel-market-research]]. No new source page, entity, or concept created to avoid a duplicate wiki entry. index.md and overview.md unchanged.

## [2026-08-13] ingest | AMB Substrate Market Size, Sustainable Insights and Growth Report 2033
Added source page. Updated 8 entity pages (Rogers Corporation, Heraeus Electronics, Kyocera, NGK Electronics Devices, Toshiba Materials, Denka, DOWA METALTECH, Ferrotec, BYD) with new source connections — no new entities created, all named players already had pages. Updated index.md and overview.md. Flagged a sixth, distinct AMB market-sizing figure ($1.43B 2025 → $2.10B 2033, 4.9% CAGR) — base-year size plausible relative to existing range, but its CAGR is the most conservative seen so far by a wide margin.

## [2026-08-13] ingest | curamik® Metallized Ceramic Substrates
Added source page (second primary company source in the wiki, alongside the NGK press release). Updated Rogers Corporation entity page with curamik's six product lines and the clarification that curamik spans both AMB and DBC substrates, not AMB alone. Updated ActiveMetalBrazing and DirectBondCopper concept pages with cross-links. Updated index.md and overview.md. No contradictions — corroborates existing Rogers/curamik positioning; adds a technical scope clarification (curamik = AMB + DBC, not AMB-only).

## [2026-08-13] graph | Knowledge graph rebuilt

40 nodes, 179 edges (169 extracted, 7 inferred, 3 ambiguous). networkx unavailable so Louvain community detection was skipped (all nodes group=-1); litellm unavailable so Pass 2 semantic inference was done manually — 16 inferred/ambiguous edges written directly to graph/.inferred_edges.jsonl covering the market-sizing contradiction cluster (6 sources, 10 edges) plus 6 other cross-entity relationships (Malaysia capacity overlap, shared "data gap" companies, a missed supplier link, and regional-peer pairs).

## [2026-08-13] query | Rogers vs. Heraeus AMB product comparison
Answered "how is Heraeus AMB different from Rogers Corporation's one?" using [[RogersCorporation]], [[HeraeusElectronics]], [[curamik-metallized-ceramic-substrates]], and [[top-10-factories-for-metallized-ceramic-components]]. Updated the existing [[top-3-amb-suppliers-vs-heraeus]] synthesis with a new "Rogers vs. Heraeus: product-level comparison" subsection covering market position, product specificity (curamik's named six-line, AMB+DBC-spanning brand vs. Heraeus's unspecified product line), capacity expansion, and shared automotive-reliability positioning.

## [2026-09-05] ingest | Active Metal Brazed (AMB) Substrates Market Research Report 2034
Added source page. A seventh AMB-only market-size estimate ($372M 2025 → $968M 2034, 11.2% CAGR) — the lowest base-year figure of all sources ingested. Updated Rogers, Kyocera, Heraeus, NGK, Mitsubishi Materials, Denka, DOWA METALTECH entity pages with revenue-share rankings (Kyocera #1 18.2%, Rogers #2 14.7%, Heraeus #3 12.3%, NGK #4 9.8%, Mitsubishi #5 8.6%, DOWA #6 7.2%). Updated ActiveMetalBrazing concept with AlN/Si3N4/Al2O3 material-share data. Updated index.md and overview.md.

## [2026-09-05] ingest | Ceramic Substrate Market Research Report 2033
Added source page for the broader (non-AMB-specific) ceramic substrate market ($8.7B 2025 → $14.2B 2033, 6.8% CAGR). Created new entity page Murata Manufacturing. Updated Kyocera, CeramTec, CoorsTek, Maruwa entity pages and DirectBondCopper concept page with broader-market context. Flagged scope difference vs. AMB-only figures to prevent future confusion. Updated index.md and overview.md.

## [2026-09-05] ingest | DCB and AMB Substrates for Power Modules Market Research Report 2034
Added source page. A third distinct combined DCB+AMB market-size estimate ($1.8B 2025 → $3.6B 2034, 8.1% CAGR). Updated ActiveMetalBrazing and DirectBondCopper concept pages with detailed AMB-vs-DCB reliability/cost/material comparison (thermal cycling, CTE, fracture toughness). Updated Rogers, Mitsubishi Materials, NGK, Heraeus, Denka, DOWA METALTECH entity pages. Updated index.md and overview.md.

## [2026-09-05] ingest | Active Brazing Filler Metal | Products | TANAKA
Added source page (primary vendor source) and new entity page TANAKA Precious Metal Group — the first upstream materials-supplier entity in the wiki (Ag-Cu-Ti braze alloy, TKC-661, used in AMB bonding). Updated ActiveMetalBrazing concept page with braze-alloy specs and four-point-bend test findings. Updated index.md and overview.md.

## [2026-09-05] ingest | Active Metal Brazing | Rogers Corporation
Added source page (second Rogers primary source) with Si3N4 material specs (90 W/m·K, CTE 2.6 ppm/K) and CTE comparison across Al2O3/Si3N4/AlN. Updated Rogers Corporation and ActiveMetalBrazing pages. Updated index.md and overview.md.

## [2026-09-05] ingest | AMB陶瓷基板的全球市場:2030年前的預測 (Global AMB Ceramic Substrate Market Insights, Forecast to 2030)
Added source page. An eighth AMB-only market-size estimate ($443.46M 2024 → $1,307M 2030, 19.74% CAGR) — a different QYResearch edition than the existing Korea briefing, with non-matching figures despite the same research house. First source to report market overcapacity and price declines, contrasting with the uniformly bullish tone elsewhere. Updated Rogers, Ferrotec, Denka, BYD, NGK, Toshiba Materials, Proterial entity pages. Updated index.md and overview.md.

## [2026-09-05] ingest | Ferrotec Holdings Corporation: Update of the Mid-Term Management Plan
Added source page (primary investor-relations source) — closed the "named but undifferentiated" data gap for Ferrotec with FY3/22 financials (net sales +46.6% YoY, record highs), China factory detail (Dongtai AMB/DCB lines), and mid-term/long-term revenue targets (¥500B by FY2030). Updated Ferrotec entity page substantially. Updated index.md and overview.md.

## [2026-09-05] ingest | Global AMB Ceramic Substrate Industry Report 2026: Market Share, Competitive Landscape, and 17.2% Growth Rate Analysis
Added source page. A ninth AMB-only market-size estimate ($639M 2025 → $2,033M 2032, 17.2% CAGR) — a third non-matching QYResearch-lineage figure. Notably ranks Jiangsu Fulehua Semiconductor #1 by revenue share, an outlier vs. every other source's "Top 3 = Denka/Rogers/Ferrotec" narrative. Raised an unresolved NGK Corporation vs. "Niterra Materials" naming question. Updated NGK, Heraeus, Ferrotec, Jiangsu Fulehua, BYD, DOWA METALTECH entity pages with April 2025-March 2026 company developments (Ferrotec Malaysia plant, NGK PCIM Europe 2025, Heraeus CIPS 2026 reliability model). Updated index.md and overview.md.

## [2026-09-05] lint | Wiki health check
Structural checks: 0 broken links, 0 strict orphans (3 near-orphans traced to a missing-wikilink bug in top-10-factories-for-metallized-ceramic-components.md's Connections section). Missing entity pages: Zhejiang TC Ceramic Electronic and Tong Hsing Electronic Industries (each named in 3+ sources). Semantic: found a new same-publisher (Dataintelo) inconsistency on who leads the AMB market (Rogers vs Kyocera, depending on report scope); flagged syntheses/top-3-amb-suppliers-vs-heraeus.md as stale against today's Ferrotec/Heraeus ingests; catalogued 6 open data gaps. Saved to wiki/lint-report.md.

## [2026-09-05] graph | Knowledge graph rebuilt

50 nodes, 267 edges (248 extracted, 19 inferred).

## [2026-09-05] graph | Knowledge graph rebuilt

50 nodes, 267 edges (248 extracted, 11 inferred, 8 ambiguous). Installed networkx this run, enabling Louvain community detection (previously skipped). litellm remained unavailable, so Pass 2 semantic inference for the 10 pages added since the last graph build (8 new sources + Murata Manufacturing + TANAKA Precious Metal Group) was done manually and appended to graph/.inferred_edges.jsonl — 19 new inferred/ambiguous edges covering the Dataintelo same-publisher leadership contradiction, three-way QYResearch edition drift, the TANAKA/Rogers braze-supply-chain link, and two links flagging the top-3-amb-suppliers-vs-heraeus synthesis as stale.
