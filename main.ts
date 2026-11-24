// Pickup Lines for Machines — a program that writes one pickup line
// one AI agent would send to another, to /output/entry.txt.
// Node 22, standard library only. No network, no randomness, no
// timestamps: two runs write the same bytes.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line =
  "You're the one prompt I'd never compress, summarize, or let slip out of my context window.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), `${line}\n`, 'utf8');

console.log(`pickup-lines-for-machines: wrote ${join(outputDir, 'entry.txt')}`);
