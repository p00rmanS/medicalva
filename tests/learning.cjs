const assert = require("node:assert/strict");
const { boot } = require("./harness.cjs");

const app = boot();
const { run, get, tool } = app;
const TOTAL = 135;

// ---- Curriculum shape ----
assert.equal(run("lessons.length"), TOTAL);
assert.equal(new Set(run("order")).size, TOTAL);
assert.deepEqual(
  [...run("order")].sort((a, b) => a - b),
  Array.from({ length: TOTAL }, (_, i) => i),
);
assert.equal(run("courses.length"), 2);
assert.equal(run("courses[0].sections.flatMap(s => s.ids).length"), 66);
assert.equal(run("courses[1].sections.flatMap(s => s.ids).length"), 69);
assert.equal(run("order[48]"), 48);
assert.equal(run("order[66]"), 54, "coding course starts after foundations");
assert(
  run(
    "lessons.every(l => l.taglish.length > 100 && l.proTip.length > 30 && l.mentorDrill.length > 20)",
  ),
);
assert(
  run(
    "lessons.every(l => Array.isArray(l.remember) && l.remember.length >= 2 && l.body.includes('What to remember'))",
  ),
);
assert(
  run(
    "lessons.every(l => l.answers.length === 3 && Number.isInteger(l.correct) && l.correct >= 0 && l.correct < 3 && l.why.length > 20)",
  ),
);
assert(
  run("new Set(lessons.map(l => l.correct)).size === 3"),
  "correct answers should be spread across positions",
);

// ---- Written distractors ----
assert(
  run(
    "Object.entries(distractors).every(([id, pair]) => Number(id) < lessons.length && pair.length === 2 && pair[0] !== pair[1] && pair.every((a) => a.trim().length > 0))",
  ),
);
assert(
  run("lessons.every((l) => new Set(l.answers).size === 3)"),
  "answers must be distinct after replacement",
);

// ---- Every lesson flow ----
for (let n = 1; n <= TOTAL; n++) {
  const r = tool.execute({ lesson: n });
  assert(get("lesson").innerHTML.includes(r.title));
  assert(get("lesson").innerHTML.includes("Check your understanding"));
  assert(run("lessons[current].body.includes('Taglish explanation')"));
  assert(run("lessons[current].body.includes('Pro tip')"));
  run("checkAnswer((lessons[current].correct + 1) % 3)");
  assert(get("feedback").textContent.startsWith("Try again."));
  run("checkAnswer(lessons[current].correct); completeLesson()");
  assert(get("feedback").textContent.startsWith("Correct."));
  assert.equal(get("complete").textContent, "Completed");
}
assert.equal(
  JSON.parse(app.stored["medical-va-learning-v1"]).completed.length,
  TOTAL,
);
assert.throws(() => tool.execute({ lesson: 0 }));
assert.throws(() => tool.execute({ lesson: TOTAL + 1 }));
assert.throws(() => tool.execute({ lesson: 1, extra: true }));

// ---- Workshop, advanced, and coding lesson structure ----
assert(
  run(
    'workshopLessons.length === 8 && workshopLessons.every(l => l.objectives.length >= 3 && l.steps.length >= 5 && l.drills.length >= 3 && l.rubric.length >= 4 && l.body.includes("model response"))',
  ),
);
assert(
  run(
    'advancedLessons.length === 6 && advancedLessons.every(l => l.objectives.length >= 3 && l.steps.length >= 5 && l.drills.length >= 3 && l.rubric.length >= 4 && l.body.includes("model response"))',
  ),
);
assert(
  run(
    'codingLessons.length === 81 && codingLessons.every(l => l.objectives.length >= 3 && l.steps.length >= 5 && l.drills.length >= 3 && l.rubric.length >= 4 && l.remember.length === 3 && l.body.includes("model response") && l.body.includes("Core concepts"))',
  ),
);
assert(
  run(
    'codingLessons.filter(l => l.body.includes("Code lab")).length >= 28 && codingLessons.filter(l => l.body.includes("Key terms")).length >= 25',
  ),
);

// ---- Reference data and flashcards ----
assert(run("referenceData.length >= 8"));
assert(
  run(
    "referenceData.every(s => s.rows.length > 3 && s.rows.every(r => r.length === s.cols.length))",
  ),
);
assert.equal(
  run("flashcardDeck.length"),
  run("referenceData.reduce((n, s) => n + s.rows.length, 0)"),
);
assert(run("flashcardDeck.every(c => c.front && c.back)"));
assert.equal(
  run("new Set(flashcardDeck.map(c => c.topic + ':' + c.front)).size"),
  run("flashcardDeck.length"),
  "flashcard keys must be unique so progress is tracked per card",
);

// ---- Search ----
const query = (q) => {
  get("search").value = q;
  run("renderCards()");
};
query("modifier");
const modifierCount = Number(get("searchStatus").textContent.split(" ")[0]);
assert(modifierCount >= 2);
assert.equal(
  modifierCount,
  run(
    "lessons.filter((l, i) => `${l.title} ${l.desc} ${l.taglish} ${l.proTip} ${groups[groupIndexOf(i)].title} ${courseOf(i).title}`.toLowerCase().includes('modifier')).length",
  ),
);
query("zzzz");
assert.equal(get("cards").innerHTML, "");
assert.equal(get("searchStatus").textContent, "0 matching lessons");
query("");
assert(get("cards").innerHTML.includes("section-toggle"));
assert.equal(get("searchStatus").textContent, "");

console.log(
  `Verified ${TOTAL} lesson flows, 81 added lessons, reference data, flashcards, saved state, search, and invalid input.`,
);
