---
title: "Advanced Packaging Designs (Keystone Project 1)"
type: source
tags: [power-electronics, packaging, doe, r-and-d]
date: 2024-06-04
source_file: raw/advanced-packaging-designs-keystone-project-1-publications-nlr.md
---

## Summary
A June 2024 NREL presentation to the DOE Vehicle Technologies Program Annual Merit Review, describing "Keystone Project 1" — R&D evaluating an organic direct-bond copper (ODBC) substrate, built on DuPont Temprion polyimide film, as a ceramic-free replacement for traditional AMB/DBC ceramic substrates in power electronics modules. The work compares thermal, electrical, and reliability performance across substrate types and describes a multiphysics co-design optimization workflow for module design.

## Key Claims
- ODBC is being evaluated as a replacement for ceramic substrates (DBC, AMB) to enable higher operating temperatures and remove ceramic-related reliability/CTE-mismatch concerns.
- DBC bonding: oxidizing Cu foils lowers the bonding melt temperature from 1,083°C to 1,065°C; max metallization thickness 1 mm; requires metallization on both sides of the ceramic; used with Al2O3, AlN, and ZrO2-doped high-performance substrates (HPS).
- AMB: a brazing process using a silver-copper (Ag-Cu) alloy between copper and ceramic at 850°C in vacuum; more processing steps and more expensive than DBC; typically used with Si3N4 and AlN ceramics.
- ODBC bonds at a much lower 300°C and 2.41 MPa pressure under vacuum/inert atmosphere, has no limitation on metal material or metallization thickness, and maintained electrical/thermal performance after 5,000 thermal shock cycles in testing.
- Comparative thermal-resistance testing across Si3N4 AMB, AlN, ODBC, Al2O3, and HPS 9% samples showed ODBC with the lowest thermal resistance (0.917) of the group tested.
- A multiphysics design-optimization workflow (Siemens HEEDS, NX, FLOEFD, Simcenter 3D) is used to co-design electrical, thermal, mechanical, and cost constraints together, instead of a traditional linear design process.
- Thermally-driven vs. electrically-driven module design tradeoff: junction temperature 141°C vs. 153°C; parasitic inductance 5.9 nH vs. 2.7 nH; Temprion substrate area 335 mm² vs. 367 mm²; copper busbar volume 55 mm³ vs. 74 mm³.
- Project team: NREL (Douglas DeVoto — PI; Sreekant Narumanchi — Task Leader; Joshua Major, Shuofeng Zhao, Robert Allen, Joel Miscall), ORNL (Himel Barua), DuPont (Susan Herczeg). Funded by the DOE Office of Energy Efficiency and Renewable Energy, Vehicle Technologies Office, under Contract DE-AC36-08GO28308.

## Key Quotes
> "Maintains electrical and thermal performance after 5,000 thermal shock cycles" — describing ODBC reliability test results

## Connections
- [[NationalRenewableEnergyLaboratory]] — lead organization on this DOE-funded Keystone Project
- [[DuPont]] — supplies the Temprion polyimide film that ODBC substrates are built on
- [[ActiveMetalBrazing]] — AMB is one of the incumbent ceramic substrate technologies being benchmarked against ODBC
- [[DirectBondCopper]] — DBC is the other incumbent ceramic substrate technology discussed
- [[PowerElectronicsPackaging]] — this project is about substrate technology within power module packaging design

## Contradictions
- No direct factual contradictions with other wiki sources yet. Framing note: this source treats AMB/ceramic substrates as an incumbent technology facing potential displacement by ceramic-free ODBC, which contrasts with the growth narrative in market-research sources (e.g. [[amb-ceramic-substrate-market-2026-to-2034-intel-market-research]]) that project continued strong AMB market expansion. Not a contradiction of fact, but a difference in outlook worth tracking as more sources are ingested.
