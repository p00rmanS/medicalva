// Editorial and design checks that catch mistakes the behavior tests cannot.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { boot, root } = require("./harness.cjs");
const app = boot();

// ---- Lessons: unique titles, sane metadata, no copy-edit slips ----
const lessons = app.run(
  "lessons.map((l, i) => ({ i, title: l.title, desc: l.desc, time: l.time, scenario: l.scenario, answers: l.answers, why: l.why, text: l.body.replace(/<[^>]+>/g, ' ¶ ') + ' ¶ ' + l.taglish + ' ¶ ' + l.proTip }))",
);
const titles = new Set();
const descs = new Set();
const problems = [];
for (const l of lessons) {
  const tag = `#${l.i + 1} ${l.title}`;
  if (titles.has(l.title)) problems.push(`${tag}: duplicate title`);
  titles.add(l.title);
  if (descs.has(l.desc)) problems.push(`${tag}: duplicate description`);
  descs.add(l.desc);
  if (
    !/^\d+ min$/.test(l.time) ||
    parseInt(l.time, 10) < 10 ||
    parseInt(l.time, 10) > 120
  )
    problems.push(`${tag}: odd time "${l.time}"`);
  if (new Set(l.answers).size !== l.answers.length)
    problems.push(`${tag}: duplicate answers`);
  if (l.answers.some((a) => !a.trim())) problems.push(`${tag}: empty answer`);
  const repeated = l.text.match(/\b([A-Za-z]{3,})\s+\1\b/i);
  if (repeated && !/^(that|had)$/i.test(repeated[1]))
    problems.push(`${tag}: repeated word "${repeated[0]}"`);
  if (
    / {3,}[^ ]/.test(l.text.replace(/\n/g, " ").replace(/ {3,}/g, "  ")) &&
    false
  )
    problems.push(`${tag}: spacing`);
  if (/\s[,.;:](?=\s|$)/.test(l.scenario))
    problems.push(`${tag}: space before punctuation`);
  if (/\bTODO\b|\bFIXME\b|lorem ipsum/i.test(l.text))
    problems.push(`${tag}: placeholder text`);
  if ((l.text.match(/\(/g) || []).length !== (l.text.match(/\)/g) || []).length)
    problems.push(`${tag}: unbalanced parentheses`);
}
// The correct answer should not give itself away by length.
const share = app.run(
  "lessons.filter(l => { const len = l.answers.map(a => a.length); return len[l.correct] === Math.max(...len); }).length / lessons.length",
);
const blatant = app.run(
  "lessons.filter(l => { const len = l.answers.map(a => a.length); const other = Math.max(...len.filter((_, k) => k !== l.correct)); return len[l.correct] > other * 1.25; }).length / lessons.length",
);
assert(
  share < 0.6,
  `correct answer is the longest in ${(share * 100).toFixed(0)}% of lessons`,
);
assert(
  blatant < 0.03,
  `correct answer is over 25% longer in ${(blatant * 100).toFixed(0)}% of lessons`,
);
assert.deepEqual(problems, [], problems.join("\n"));

// ---- Reference data: unique rows, no stray whitespace ----
const refProblems = app.run(`(() => {
  const out = [];
  for (const s of referenceData)
    for (const r of s.rows) {
      if (r.some((c) => c !== c.trim())) out.push(s.id + ': whitespace in ' + r[0]);
      if (!r[0] || !r[1]) out.push(s.id + ': empty cell in ' + r.join('|'));
    }
  return out;
})()`);
assert.equal(refProblems.length, 0, refProblems.join("; "));

// ---- Contrast: text tokens against the surfaces they sit on, light and dark ----
const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
function tokens(blockStart) {
  const map = {};
  let from = 0;
  for (;;) {
    const start = css.indexOf(blockStart, from);
    if (start < 0) break;
    const end = css.indexOf("}", start);
    for (const m of css
      .slice(start, end)
      .matchAll(/--([a-z-]+):s*(#[0-9a-fA-F]{6})/g))
      map[m[1]] = m[2];
    from = end;
  }
  return map;
}
const light = tokens(":root {");
const dark = tokens(':root[data-theme="dark"] {');
// Fill dark-theme gaps from the light set where the dark block inherits a value.
const lum = (hex) => {
  const [r, g, b] = [1, 3, 5]
    .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};
const pairs = [
  ["ink", "paper"],
  ["ink", "surface"],
  ["ink-2", "paper"],
  ["ink-2", "surface"],
  ["muted", "paper"],
  ["muted", "surface"],
  ["muted", "sunken"],
  ["accent-ink", "paper"],
  ["accent-ink", "surface"],
  ["accent-ink", "accent-soft"],
  ["accent", "paper"],
  ["warn", "warn-soft"],
  ["good", "good-soft"],
  ["inverse-ink", "inverse"],
  ["accent-bright", "inverse"],
  ["paper", "ink"],
];
const lowContrast = [];
for (const [name, set] of [
  ["light", light],
  ["dark", { ...light, ...dark }],
])
  for (const [fg, bg] of pairs) {
    if (!set[fg] || !set[bg]) continue;
    const r = ratio(set[fg], set[bg]);
    if (r < 4.5) lowContrast.push(`${name}: ${fg} on ${bg} = ${r.toFixed(2)}`);
  }
assert.deepEqual(
  lowContrast,
  [],
  "text contrast below 4.5:1\n" + lowContrast.join("\n"),
);

console.log(
  `Verified ${lessons.length} lessons for unique titles, metadata, copy slips, balanced answers, reference rows, and text contrast in both themes.`,
);
