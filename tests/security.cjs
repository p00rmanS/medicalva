const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { boot, root, scripts } = require("./harness.cjs");

const files = fs.readdirSync(root);
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
assert(html.includes("script-src 'self'"));
assert(html.includes("style-src 'self'"));
assert(html.includes("connect-src 'none'"));
assert(!/<script[^>]*src=["']https?:/i.test(html));
assert(!/<link[^>]*href=["']https?:[^>]*stylesheet/i.test(html));
for (const file of files) {
  const source = fs.readFileSync(path.join(root, file), "utf8");
  assert(!/\bon(?:click|change|input|error|load)\s*=/i.test(source), file);
  assert(!/\bstyle\s*=/i.test(source), file);
  assert(!/javascript\s*:/i.test(source), file);
  assert(!/\b(?:eval|Function)\s*\(/.test(source), file);
  assert(!/\b(?:fetch|XMLHttpRequest|WebSocket)\s*\(/.test(source), file);
  assert(!/\bdocument\.write\s*\(/.test(source), file);
}
// Every script the page loads exists, and every script on disk is loaded.
for (const name of [...scripts, "theme.js"]) {
  assert(files.includes(name), `${name} missing`);
  assert(html.includes(`src="${name}"`), `${name} not loaded by index.html`);
}
for (const file of files.filter((f) => f.endsWith(".js")))
  assert(html.includes(`src="${file}"`), `${file} is not referenced`);
assert(html.includes('href="styles.css"'));

// ---- Behavior ----
for (const saved of [
  "null",
  "invalid json",
  '{"completed":[-1,0,0,148,"1"],"last":999}',
]) {
  const app = boot({ progress: saved });
  assert(app.run("completed.size <= 1 && last === 0"));
  app.run("openLesson(order[0]);moveLesson(-1)");
  assert.equal(app.run("current"), -1);
  app.run("openLesson(order[order.length - 1]);moveLesson(1)");
  assert.equal(app.run("current"), -1);
}

// Saved interface preferences are validated.
const badPrefs = boot({
  prefs:
    '{"theme":"neon","drawer":"yes","course":"x","open":{"x":true,"3":"yes","4":false}}',
});
assert.equal(badPrefs.run("ui.theme"), "auto");
assert.equal(badPrefs.run("ui.drawer"), null);
assert.equal(badPrefs.run("ui.course"), "foundations");
assert.deepEqual(badPrefs.run("JSON.stringify(ui.open)"), '{"4":false}');
const goodPrefs = boot({
  prefs: '{"theme":"dark","drawer":false,"course":"coding"}',
});
assert.equal(goodPrefs.run("ui.theme"), "dark");
assert.equal(goodPrefs.run("ui.course"), "coding");

const app = boot();
const returningLearner = boot({
  progress: '{"completed":[0,40,47],"last":47}',
});
assert.equal(returningLearner.run("completed.size"), 3);
assert.equal(returningLearner.run("last"), 47);
returningLearner.run("openLesson(47);moveLesson(1)");
assert.equal(returningLearner.run("current"), 48);
// Crossing from the last foundations lesson into the coding course.
returningLearner.run("openLesson(134);moveLesson(1)");
assert.equal(returningLearner.run("current"), 54);
assert.equal(returningLearner.run("courseOf(current).id"), "coding");

app.run("openLesson(0);completeLesson()");
assert.equal(
  app.run("completed.size"),
  0,
  "completion requires a correct answer",
);

const click = (dataset) =>
  app.handlers.get("click")({
    target: { closest: () => ({ dataset, disabled: false }) },
  });
click({ action: "move", direction: "1" });
assert.equal(app.run("current"), app.run("order[1]"));
click({ action: "course", course: "coding" });
assert.equal(app.run("ui.course"), "coding");
assert.equal(app.run("view"), "home");
click({ action: "toggle-section", section: "0" });
click({ action: "toggle-section", section: "9999" });
click({ action: "expand-all" });
click({ action: "collapse-all" });
click({ action: "theme" });
assert.equal(app.run("ui.theme"), "light");
click({ action: "theme" });
click({ action: "theme" });
assert.equal(app.run("ui.theme"), "auto");

// Keyboard behavior.
const key = (init, closest = () => null) => {
  let prevented = false;
  app.handlers.get("keydown")({
    target: { closest },
    preventDefault() {
      prevented = true;
    },
    ...init,
  });
  return prevented;
};
app.run("openLesson(order[1])");
assert(key({ key: "ArrowLeft" }));
assert.equal(app.run("current"), 0);
assert(
  !key({ key: "ArrowRight" }, () => ({})),
  "arrow keys must not interrupt an input",
);
assert.equal(app.run("current"), 0);
assert(!key({ key: "ArrowRight", ctrlKey: true }));
assert(!key({ key: "ArrowRight", shiftKey: true }));
assert.equal(app.run("current"), 0);
assert(key({ key: "ArrowRight" }));
assert.equal(app.run("current"), app.run("order[1]"));
// Course content toggle: C hides and shows the sidebar.
app.run("ui.drawer = true");
assert(key({ key: "c" }));
assert.equal(app.run("ui.drawer"), false);
assert(key({ key: "C" }));
assert.equal(app.run("ui.drawer"), true);
assert(!key({ key: "c" }, () => ({})), "C must not fire while typing");
// Number keys choose answers; a wrong answer does not unlock completion.
const wrong = app.run("(lessons[current].correct + 1) % 3");
assert(key({ key: String(wrong + 1) }));
assert(app.get("feedback").textContent.startsWith("Try again."));
assert(!key({ key: "9" }), "out-of-range answers are ignored");
assert(key({ key: String(app.run("lessons[current].correct") + 1) }));
assert(app.get("feedback").textContent.startsWith("Correct."));
assert(key({ key: "m" }));
assert(app.run("completed.has(current)"));
// Search shortcut returns to the home view.
assert(key({ key: "/" }));
assert.equal(app.run("view"), "home");
assert.equal(app.run("current"), -1);

// Hash routing, including malformed links.
const goto = (hash) => {
  app.context.location.hash = hash;
};
goto("#/lesson/5");
assert.equal(app.run("current"), 4, "lesson links use the stable lesson id");
goto("#/lesson/148");
assert.equal(app.run("current"), 147);
goto("#/lesson/999");
assert.equal(app.run("view"), "home");
goto("#/lesson/abc");
assert.equal(app.run("view"), "home");
goto("#/reference/carc");
assert.equal(app.run("view"), "reference");
assert(app.get("refBody").innerHTML.includes("CARC 45"));
goto("#/flashcards");
assert.equal(app.run("view"), "flashcards");
assert(app.get("cardFace").textContent.length > 0);
goto("#/course/coding");
assert.equal(app.run("ui.course"), "coding");
goto("#/course/<script>");
assert.equal(app.run("view"), "home");

// Flashcards.
goto("#/flashcards");
const card = (init, closest = () => null) => {
  let prevented = false;
  app.handlers.get("keydown")({
    target: { closest },
    preventDefault() {
      prevented = true;
    },
    ...init,
  });
  return prevented;
};
const front = app.get("cardFace").textContent;
assert(card({ key: " " }));
assert.notEqual(app.get("cardFace").textContent, front);
assert(
  !card({ key: " " }, () => ({})),
  "Space on a button keeps its native action",
);
assert(card({ key: "ArrowRight" }));
assert.notEqual(app.get("cardFace").textContent, front);
card({ key: "k" });
assert(JSON.parse(app.stored["medical-va-cards-v1"]).length >= 1);

// Lesson notes persist per lesson and ignore bad stored data.
app.run("openLesson(3)");
app.handlers.get("input")({ target: { id: "lessonNotes", value: "my note" } });
assert.equal(JSON.parse(app.stored["medical-va-notes-v1"])["3"], "my note");
app.handlers.get("input")({ target: { id: "lessonNotes", value: "   " } });
assert.equal(JSON.parse(app.stored["medical-va-notes-v1"])["3"], undefined);
const badNotes = boot({ notesData: '{"3":"ok","x":"no","500":"no","4":7}' });
assert.deepEqual(badNotes.run("JSON.stringify(notes)"), '{"3":"ok"}');

// Untrusted text is escaped.
app.run("lessons[0].title = '<img src=x onerror=alert(1)>';openLesson(0)");
assert(app.get("lesson").innerHTML.includes("&lt;img"));
assert(!app.get("lesson").innerHTML.includes("<img src=x"));
app.get("search").value = "<script>alert(1)</script>";
app.run("renderCards()");
assert.equal(app.get("cards").innerHTML, "");
app.get("refFilter").value = "<script>alert(1)</script>";
app.run("renderReference()");
assert.equal(app.get("refBody").innerHTML, "");

// Lesson bodies are passive content.
const bodies = app.run("lessons.map(l => l.body)");
for (const body of bodies) {
  assert(!/<(?:script|iframe|object|embed|form|svg)\b/i.test(body));
  assert(!/\bon\w+\s*=|javascript\s*:/i.test(body));
  assert(!/\bstyle\s*=/i.test(body));
}
console.log(
  "Verified CSP, passive curriculum, escaped metadata, corrupted storage, validated preferences, completion gate, delegated controls, keyboard shortcuts, routing, flashcards, and navigation boundaries.",
);
