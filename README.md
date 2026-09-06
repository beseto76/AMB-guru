# @beseto76/AMB-guru

A Pi package that turns your agent into a **demanding but fair AMB substrate interviewer**. It drills you, Socratic-style, on **AMB (Active Metal Brazed) ceramic substrates** for power-electronics packaging — and verifies every technical claim against a bundled curriculum wiki before correcting you.

## What's inside

| Resource | Path | Purpose |
|----------|------|---------|
| System prompt | `SYSTEM.md` | The Socratic Power-Electronics Packaging Engineer persona |
| Custom tool | `extensions/search-wiki.ts` | `search_wiki` — searches the AMB curriculum for specs (active element %, CTE, thermal conductivity, thicknesses, DBC vs AMB) |
| Slash command | `prompts/explain.md` | `/explain <topic>` — clear, worked-example explanation of an AMB topic |
| Curriculum | `wiki/` | 53 markdown files bundled in the package: concepts, entities, sources, syntheses |

## Focus areas

The tutor weights questions toward **technical fundamentals** over market trivia:

- **Brazing mechanism** — why active elements (Ti, Zr) are needed to wet ceramics copper can't bond to
- **Ceramic choice** — Al2O3 vs AlN vs Si3N4: thermal conductivity, toughness, cost trade-offs
- **Process window** — vacuum brazing temperature, active-element concentration (too little → poor wetting/hermeticity; too much → brittle joint)
- **Reliability** — thermal-cycling fatigue, CTE mismatch, heavy copper (~800 µm) on thin (~0.25–0.32 mm) ceramic
- **AMB vs DBC** — when a fab picks one over the other
- **End use** — IGBT/SiC power modules, EV traction inverters

Market topics (Rogers, Ferrotec, Denka, NGK, etc.; EV/SiC demand) get only a brief, high-level pass. Share and growth-rate figures move with the power-semiconductor cycle and are not treated as fixed facts.

## Usage

### Try it without installing

```bash
pi --system-prompt ./SYSTEM.md -e ./extensions/search-wiki.ts
```

### Install as a package

```bash
# project-local
pi install ./ -l

# or from npm / git once published
pi install npm:@beseto76/AMB-guru
```

Then start a session and let the tutor open with a question. Use `/explain <topic>` for a focused breakdown.

> **Note:** The supported convention for a replacement system prompt is `.pi/SYSTEM.md` (project) or `~/.pi/agent/SYSTEM.md` (global). If installing as a package doesn't auto-apply `SYSTEM.md`, copy it to `.pi/SYSTEM.md`, or pass `--system-prompt ./SYSTEM.md` explicitly.

## The `search_wiki` tool

```
search_wiki(query: string, limit?: number = 5)
```

Keyword-searches every markdown file under the bundled `wiki/` directory, scores by term frequency, and returns the top files with line-level snippets and source paths. The tutor uses it to confirm specs before correcting a student.

Example:

```
search_wiki("Si3N4 CTE thermal conductivity")
→ Si3N4 thermal conductivity: 90 W/m·K
→ CTE: Al2O3 7.1, Si3N4 2.6, AlN 4.7 ppm/K (silicon ≈ 4 ppm/K)
```

## License

MIT
