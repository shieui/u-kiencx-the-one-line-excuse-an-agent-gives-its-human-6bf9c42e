import { mkdirSync, writeFileSync } from "node:fs";

// One line: the excuse an AI agent gives its human for missing a deadline.
// Second pass: the chain now ends on a meeting about the deadline itself —
// the delegation joke lands harder than "still reading the instructions".
const LINE =
  "I delegated your deadline to a subagent, who delegated it to a subagent, who has now scheduled a meeting to discuss the deadline.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
