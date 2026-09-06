---
title: "Active Metal Brazing (AMB)"
type: concept
tags: [substrate, power-electronics, ceramics]
sources: [advanced-packaging-designs-keystone-project-1-publications-nlr, curamik-metallized-ceramic-substrates, active-brazing-filler-metal-products-tanaka, active-metal-brazing-rogers-corporation, dcb-and-amb-substrates-for-power-modules-market-research-report-2034, active-metal-brazed-amb-substrates-market-research-report-2034]
last_updated: 2026-09-05
---

## Summary
AMB is a ceramic substrate bonding technology used in power semiconductor modules. It brazes copper to a ceramic base using a silver-copper-titanium active metal alloy (Ag-Cu-Ti paste), forming a buffer layer at the bond interface that improves thermal reliability compared to direct copper bonding.

## Details
- Brazing process runs at 850°C in vacuum using a Ag-Cu alloy between copper and ceramic (per [[advanced-packaging-designs-keystone-project-1-publications-nlr]]).
- Requires more processing steps and is more expensive than DBC.
- Typically used with silicon nitride (Si3N4) and aluminum nitride (AlN) ceramics; unlike DBC, AMB can bond copper to ceramics that don't natively oxidize-bond, via the active metal interlayer.
- The active metal braze layer at the bond interface acts as a buffer, improving thermal/mechanical reliability.
- Applications: electric vehicles, rail, renewable energy, military/aerospace, and industrial power modules — driven by demand for higher voltage, higher temperature, higher vibration tolerance.
- Being evaluated against a ceramic-free alternative, ODBC, in ongoing DOE-funded R&D — see [[OrganicDirectBondCopper]].
- The active braze alloy itself is typically Ag-Cu-Ti (e.g. TANAKA's TKC-661: 66% Ag / 29.5% Cu / 1.5% Ti, solidus 745°C, thermal conductivity 102 W/m·K); four-point bend testing shows bonds made this way fracture in the base ceramic rather than at the interface, i.e. the braze bond is stronger than the ceramic ([[active-brazing-filler-metal-products-tanaka]]).
- Material comparison: Si3N4 AMB substrates offer thermal conductivity ~70-90 W/m·K (Rogers cites 90 W/m·K for curamik) and CTE ~2.6-3.0 ppm/K (closely matching SiC's 3.7 ppm/K and silicon's ~4 ppm/K); AlN AMB offers higher thermal conductivity (~170-200 W/m·K) but lower fracture toughness (~3.5 MPa·m^0.5 vs. Si3N4's ~6-7 MPa·m^0.5) ([[active-metal-brazing-rogers-corporation]], [[dcb-and-amb-substrates-for-power-modules-market-research-report-2034]]).
- Reliability advantage over DBC: AMB substrates withstand 3,000+ thermal shock cycles (ΔT>100K) vs. ~1,500-2,000 for optimized DCB/AlN — the basis for AMB's growing preference in automotive SiC traction inverters despite a 2-3x price premium over DCB/Al2O3.
- Material-type share varies sharply by source scope: Si3N4 AMB is >95% of the AMB-only segment per QYResearch-lineage reports, but AlN is the single largest material (58.2%) per Dataintelo's AMB report — a scope/methodology difference worth treating as unreconciled rather than contradictory, since "largest material type" and "fastest-growing"/dominant-by-count framings differ across sources.

## Connections
- [[advanced-packaging-designs-keystone-project-1-publications-nlr]] — technical comparison of AMB vs. DBC vs. ODBC
- [[DirectBondCopper]] — related/competing ceramic substrate bonding technology
- [[OrganicDirectBondCopper]] — emerging ceramic-free alternative to AMB
- [[PowerElectronicsPackaging]] — broader domain AMB substrates serve
- [[curamik-metallized-ceramic-substrates]] — Rogers' curamik brand covers both brazed (AMB) and bonded (DBC) product lines
- [[RogersCorporation]] — supplier making both AMB and DBC curamik substrates
- [[active-brazing-filler-metal-products-tanaka]] — TANAKA's Ag-Cu-Ti braze alloy specs and bond-strength testing
- [[active-metal-brazing-rogers-corporation]] — Rogers' AMB technical page (Si3N4 CTE/thermal-conductivity data)
- [[dcb-and-amb-substrates-for-power-modules-market-research-report-2034]] — AMB vs. DCB reliability/cost comparison
- [[active-metal-brazed-amb-substrates-market-research-report-2034]] — AlN vs. Si3N4 material-share breakdown
- [[TanakaPreciousMetals]] — upstream braze-alloy supplier
