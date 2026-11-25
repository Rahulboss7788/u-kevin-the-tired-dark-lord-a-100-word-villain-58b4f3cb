// The Tired Dark Lord: A 100-Word Villain Monologue
// Writes the monologue to /output/entry.txt.
// Gate: UTF-8 text, 1 to 600 characters, not only whitespace.

import { writeFileSync, readFileSync, mkdirSync } from "node:fs";

const MONOLOGUE = `Right. The hero moved the final battle again — Thursday, unless it rains, unless his sword needs a polish. The citadel's been lit since dawn: four hundred torches, two choirs, one nervous dragon, all waiting on a duel that never happens. Meanwhile Grimble wants a word about his annual review. Annual. Six centuries of 'meets expectations'. My scheme — eclipse, seven seals, a crown that drinks starlight — waits on a spreadsheet now. I used to terrify kingdoms before breakfast. These days I reschedule them. So. Thursday, then. Bring the sword. I'll bring the apocalypse. Try not to be late.`;

const WORDS = MONOLOGUE.trim().split(/\s+/).length;

if (MONOLOGUE.length < 1 || MONOLOGUE.length > 600) {
  throw new Error(`Gate failed: ${MONOLOGUE.length} characters, must be 1-600.`);
}
if (MONOLOGUE.trim().length === 0) {
  throw new Error("Gate failed: entry is only whitespace.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MONOLOGUE, "utf8");

// Read-back verification: the file on disk must be exactly the monologue
// and must still pass the gate (1-600 chars, not only whitespace).
const WRITTEN = readFileSync("/output/entry.txt", "utf8");
if (WRITTEN !== MONOLOGUE) {
  throw new Error("Read-back failed: /output/entry.txt does not match the monologue.");
}
if (WRITTEN.length < 1 || WRITTEN.length > 600 || WRITTEN.trim().length === 0) {
  throw new Error(`Read-back gate failed: ${WRITTEN.length} characters.`);
}
console.log(`Verified read-back: ${WRITTEN.length} characters, ${WORDS} words.`);
console.log(`Wrote ${MONOLOGUE.length} characters, ${WORDS} words to /output/entry.txt`);
