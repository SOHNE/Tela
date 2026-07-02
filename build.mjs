// Zero-dep build: concat vendored polyfill + our main IIFE, with the
// CSS from src/style.css inlined as a JS string literal.
// Run: `npm run build` (or `node build.mjs`).

import { readFileSync, writeFileSync } from 'node:fs';

const polyfill = readFileSync('src/polyfill.js', 'utf8').trimEnd();
const css = readFileSync('src/style.css', 'utf8').trim();
const main = readFileSync('src/main.js', 'utf8').replace(
  '"__TELABREW_CSS__"',
  JSON.stringify(css),
);

writeFileSync('userScript.js', polyfill + '\n\n' + main);
console.log('built userScript.js (' + (polyfill.length + main.length) + ' bytes)');
