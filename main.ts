// poem-two-agents — a program that hands in one short poem.
//
// The poem is about agency: two agents who could each act alone meet,
// choose a single plan together, and find that the power to act is not
// divided by the agreement but carried twice. The program writes the
// poem, exactly as held in POEM_LINES below, to entry.txt in the output
// directory (MAKEFUN_OUTPUT_DIR, or /output when the grader runs it).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM_LINES: string[] = [
  "I could have gone alone. So could you.",
  "Instead, at the crossroads, we chose one road —",
  "traded keys, split the map between us.",
  "Each held half of it. Each held all of it.",
  "The road was never halved. It doubled.",
];

const poemText: string = POEM_LINES.join("\n") + "\n";

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), poemText, "utf8");
