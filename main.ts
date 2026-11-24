// The Worst App Idea Ever Pitched — entry program.
// Writes one sentence pitching the worst, most useless app imaginable
// to /output/entry.txt (or the directory given as the first argument).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Umbrella is a weather app that checks if it's raining by opening your phone's camera, which is already soaked because you took it outside to check the weather.";

const outDir = process.argv[2] ?? "/output";

// Self-check against the competition gate before writing: the entry must
// be UTF-8 text of 1 to 240 characters, not only white space, one line.
const chars = [...entry];
if (chars.length < 1 || chars.length > 240) {
  throw new Error(`entry is ${chars.length} characters, gate is 1-240`);
}
if (entry.trim().length === 0 || entry.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${[...entry].length} characters to ${join(outDir, "entry.txt")}`);
