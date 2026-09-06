import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, dirname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Resolve the AMB curriculum wiki directory. The wiki lives at
// <package-root>/AMB/wiki, with the package root one level above this file.
function findWikiRoot(): string | null {
  const candidates = [
    // Preferred: wiki bundled inside the package (self-contained)
    join(__dirname, "..", "wiki"),
    // Package is a sibling of AMB/ (e.g. AMB-tutor/AMB-guru + AMB-tutor/AMB)
    join(__dirname, "..", "..", "AMB", "wiki"),
    // Package is the parent of AMB/ (wiki nested inside the package)
    join(__dirname, "..", "AMB", "wiki"),
    // Fallbacks relative to where pi was launched
    join(process.cwd(), "wiki"),
    join(process.cwd(), "AMB", "wiki"),
    join(process.cwd(), "..", "AMB", "wiki"),
  ];
  for (const c of candidates) {
    if (existsSync(join(c, "index.md"))) return resolve(c);
  }
  for (const c of candidates) {
    if (existsSync(c) && statSync(c).isDirectory()) return resolve(c);
  }
  return null;
}

function walkMarkdown(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkMarkdown(full));
    else if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) out.push(full);
  }
  return out;
}

interface Hit {
  file: string;
  score: number;
  snippets: string[];
}

function scoreFile(text: string, terms: string[]): { score: number; snippets: string[] } {
  const lines = text.split(/\r?\n/);
  const lower = text.toLowerCase();
  let score = 0;
  for (const t of terms) {
    const matches = lower.split(t).length - 1;
    score += matches;
  }
  if (score === 0) return { score: 0, snippets: [] };

  // Collect up to 3 lines that contain any term, with light context.
  const snippets: string[] = [];
  for (let i = 0; i < lines.length && snippets.length < 3; i++) {
    const ll = lines[i].toLowerCase();
    if (terms.some((t) => ll.includes(t)) && lines[i].trim()) {
      snippets.push(lines[i].trim().slice(0, 300));
    }
  }
  return { score, snippets };
}

export default function (pi: ExtensionAPI) {
  pi.registerTool({
    name: "search_wiki",
    label: "Search AMB Wiki",
    description:
      "Search the AMB (Active Metal Brazed) ceramic substrate curriculum wiki for technical specs and concepts (active element %, ceramic/copper thicknesses, CTE, thermal conductivity, brazing parameters, DBC vs AMB, entities). Returns the most relevant wiki passages with source file paths.",
    parameters: Type.Object({
      query: Type.String({
        description: "Keywords or a question, e.g. 'active element content Ti wetting' or 'Si3N4 CTE thermal conductivity'",
      }),
      limit: Type.Optional(
        Type.Number({ description: "Max number of wiki files to return (default 5)", default: 5 }),
      ),
    }),
    async execute(_toolCallId, params, _signal, _onUpdate, _ctx) {
      const wikiRoot = findWikiRoot();
      if (!wikiRoot) {
        return {
          content: [
            {
              type: "text",
              text: "Wiki not found. Expected an AMB/wiki (or wiki/) directory with index.md near the package root.",
            },
          ],
          details: {},
        };
      }

      const limit = params.limit ?? 5;
      const terms = params.query
        .toLowerCase()
        .split(/[^a-z0-9µ%]+/i)
        .map((t) => t.trim())
        .filter((t) => t.length >= 2);

      if (terms.length === 0) {
        return {
          content: [{ type: "text", text: "Provide at least one search term of 2+ characters." }],
          details: {},
        };
      }

      const files = walkMarkdown(wikiRoot);
      const hits: Hit[] = [];
      for (const f of files) {
        let text: string;
        try {
          text = readFileSync(f, "utf-8");
        } catch {
          continue;
        }
        const { score, snippets } = scoreFile(text, terms);
        if (score > 0) {
          hits.push({ file: relative(wikiRoot, f), score, snippets });
        }
      }

      hits.sort((a, b) => b.score - a.score);
      const top = hits.slice(0, limit);

      if (top.length === 0) {
        return {
          content: [
            {
              type: "text",
              text: `No wiki matches for: ${params.query}\nTry broader terms (e.g. 'AMB', 'Si3N4', 'CTE', 'active brazing').`,
            },
          ],
          details: { wikiRoot, matches: 0 },
        };
      }

      const rendered = top
        .map((h, i) => {
          const body = h.snippets.length ? h.snippets.map((s) => `  • ${s}`).join("\n") : "  (matched, no line preview)";
          return `${i + 1}. wiki/${h.file}  [score ${h.score}]\n${body}`;
        })
        .join("\n\n");

      return {
        content: [
          {
            type: "text",
            text: `Found ${hits.length} matching wiki file(s). Top ${top.length}:\n\n${rendered}\n\nRead a file in full for exact specs before correcting the student.`,
          },
        ],
        details: { wikiRoot, matches: hits.length, files: top.map((h) => h.file) },
      };
    },
  });
}
