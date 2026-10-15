/**
 * Archive integrity checks.
 *
 *   npx esbuild src/scripts/validate-archive.ts --bundle --platform=node \
 *     --format=esm --outfile=.tmp-validate.mjs --alias:@=./src && node .tmp-validate.mjs
 *
 * Exits non-zero on the first failing rule so CI can block a bad publish.
 */
import { categories, eras, type CategoryId, type EraId } from "@/config";
import {
  applyFilters,
  archiveStats,
  artifacts,
  chronological,
  defaultFilters,
  neighbours,
  pickRandom,
} from "@/data/artifacts";
import { comparisons } from "@/data/comparisons";

const errors: string[] = [];
const warnings: string[] = [];

const fail = (msg: string) => errors.push(msg);
const warn = (msg: string) => warnings.push(msg);

/* ---------- Identity ---------- */
const ids = new Set<string>();
const accession = new Set<string>();

for (const a of artifacts) {
  if (ids.has(a.id)) fail(`Duplicate id: ${a.id}`);
  ids.add(a.id);
  if (accession.has(a.catalogId)) fail(`Duplicate accession number: ${a.catalogId}`);
  accession.add(a.catalogId);

  if (!a.title.trim()) fail(`${a.id}: empty title`);
  if (!a.blurb.trim()) fail(`${a.id}: empty blurb`);
  if (a.story.length < 2) fail(`${a.id}: needs at least two story paragraphs`);
  if (!a.significance.trim()) fail(`${a.id}: missing curatorial note`);
  if (a.impact.length < 3) fail(`${a.id}: needs Technology / Culture / Design impact rows`);
  if (a.facts.length < 3) fail(`${a.id}: needs at least three record facts`);
  if (a.story.some((p) => p.split(/\s+/).length < 25)) {
    warn(`${a.id}: a story paragraph is unusually short`);
  }

  /* ---------- References ---------- */
  if (!eras.some((e) => e.id === a.era)) fail(`${a.id}: unknown era "${a.era}"`);
  if (!categories.some((c) => c.id === a.category)) {
    fail(`${a.id}: unknown collection "${a.category}"`);
  }

  /* ---------- Sources ---------- */
  if (a.sources.length === 0) fail(`${a.id}: no sources — every record must be checkable`);
  for (const s of a.sources) {
    if (!/^https?:\/\//.test(s.url)) fail(`${a.id}: bad source URL ${s.url}`);
    if (!s.label.trim() || !s.publisher.trim()) fail(`${a.id}: incomplete source entry`);
  }

  /* ---------- Dates ---------- */
  const era = eras.find((e) => e.id === a.era);
  if (era && (a.yearNum < era.from || a.yearNum > era.to)) {
    fail(`${a.id}: year ${a.yearNum} falls outside ${era.title} (${era.years})`);
  }
  if (!/\d{4}/.test(a.year)) warn(`${a.id}: display year has no four-digit year`);

  /* ---------- Images ---------- */
  if (a.image) {
    const { alt, caption, credit, file, fit } = a.image;
    if (!alt || alt.length < 20) fail(`${a.id}: image alt text missing or too thin`);
    if (!caption.trim()) fail(`${a.id}: image caption missing`);
    if (!credit.trim()) warn(`${a.id}: image has no credit — verify the licence before publishing`);
    if (!file.trim()) fail(`${a.id}: image file name missing`);
    if (fit !== "contain" && fit !== "cover") fail(`${a.id}: image fit must be contain or cover`);
  }
}

/* ---------- Coverage ---------- */
if (artifacts.length < 20) fail(`Archive has ${artifacts.length} records; at least 20 required`);

for (const e of eras) {
  const n = artifacts.filter((a) => a.era === (e.id as EraId)).length;
  if (n < 3) fail(`Era "${e.title}" has only ${n} records`);
}
for (const c of categories) {
  const n = artifacts.filter((a) => a.category === (c.id as CategoryId)).length;
  if (n < 2) fail(`Collection "${c.name}" has only ${n} records`);
}

/* ---------- Ordering & neighbours ---------- */
const sortedOk = chronological.every(
  (a, i) => i === 0 || chronological[i - 1].yearNum <= a.yearNum
);
if (!sortedOk) fail("Chronological index is not sorted by year");

for (const a of chronological) {
  const { prev, next } = neighbours(a.id);
  if (prev && prev.yearNum > a.yearNum) fail(`${a.id}: previous record is newer`);
  if (next && next.yearNum < a.yearNum) fail(`${a.id}: next record is older`);
}

/* ---------- Comparisons ---------- */
comparisons.forEach((pair, i) => {
  for (const side of [pair.then, pair.now] as const) {
    if (side.artifactId && !ids.has(side.artifactId)) {
      fail(`Comparison ${i + 1} (${pair.id}): side "${side.label}" links to unknown record ${side.artifactId}`);
    }
  }
  if (pair.rows.length < 3) fail(`Comparison ${pair.id}: needs at least three axes of change`);
  if (!pair.thesis.trim()) fail(`Comparison ${pair.id}: missing summary of the evolution`);
});

/* ---------- Behaviour smoke tests ---------- */
const queryOnly = applyFilters(artifacts, { ...defaultFilters, query: "netscape" });
if (queryOnly.length === 0) fail("Search for “netscape” returns nothing");

const impossible = applyFilters(artifacts, { ...defaultFilters, query: "zzzqqq" });
if (impossible.length !== 0) fail("Empty-state query unexpectedly returns records");

const filtered = applyFilters(artifacts, {
  ...defaultFilters,
  categories: ["gaming"],
  eras: ["social"],
});
if (filtered.some((a) => a.category !== "gaming" || a.era !== "social")) {
  fail("Combined filters returned records outside the selection");
}

const draws = new Set<string>();
for (let i = 0; i < 40; i++) draws.add(pickRandom().id);
if (draws.size < 2) fail("Random draw appears to be stuck on one record");

/* ---------- Report ---------- */
const pad = (n: number) => String(n).padStart(2, "0");

console.log("Internet Time Capsule — archive validation");
console.log("─".repeat(46));
console.log(`records            ${pad(artifacts.length)} (${artifacts.length})`);
console.log(`eras covered       ${pad(eras.length)}`);
console.log(`collections        ${pad(categories.length)}`);
console.log(`records with image ${pad(archiveStats.withImages)}`);
console.log(`citations          ${pad(archiveStats.sources)}`);
console.log(`comparisons        ${pad(comparisons.length)}`);
console.log(`date span          ${archiveStats.spanFrom}–${archiveStats.spanTo}`);

for (const e of eras) {
  const n = artifacts.filter((a) => a.era === e.id).length;
  console.log(`  · ${e.years.padEnd(13)} ${pad(n)} records  ${e.title}`);
}
for (const c of categories) {
  const n = artifacts.filter((a) => a.category === c.id).length;
  console.log(`  · ${c.code.padEnd(6)} ${pad(n)} records  ${c.name}`);
}

if (warnings.length) {
  console.log(`\nWarnings (${warnings.length})`);
  warnings.forEach((w) => console.log(`  ! ${w}`));
}

if (errors.length) {
  console.log(`\nErrors (${errors.length})`);
  errors.forEach((e) => console.log(`  × ${e}`));
  process.exit(1);
}

console.log("\nAll checks passed.");
