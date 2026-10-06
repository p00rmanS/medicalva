const fs = require("fs"),
  vm = require("vm"),
  assert = require("assert");
let tool, stored;
const els = new Map();
function el(id) {
  if (!els.has(id))
    els.set(id, {
      innerHTML: "",
      textContent: "",
      value: "",
      disabled: true,
      classList: { add() {}, remove() {}, toggle() {} },
      focus() {},
      addEventListener() {},
    });
  return els.get(id);
}
const context = {
  document: {
    getElementById: el,
    addEventListener() {},
    querySelectorAll: () => [],
    modelContext: {
      registerTool: (t) => {
        tool = t;
      },
    },
  },
  updateQuickNav() {},
  window: { scrollTo() {} },
  localStorage: {
    getItem: () => stored || null,
    setItem: (k, v) => (stored = v),
  },
};
vm.createContext(context);
for (const name of [
  "more-lessons.js",
  "app.js",
  "pro-lessons.js",
  "client-lessons.js",
  "mentor-notes.js",
  "workshops.js",
  "learning.js",
])
  vm.runInContext(
    fs.readFileSync(require("path").join(__dirname, "../site", name), "utf8"),
    context,
  );
assert.equal(vm.runInContext("lessons.length", context), 48);
assert.equal(new Set(vm.runInContext("order", context)).size, 48);
for (let n = 1; n <= 48; n++) {
  const r = tool.execute({ lesson: n });
  assert(el("lesson").innerHTML.includes(r.title));
  assert(el("lesson").innerHTML.includes("Taglish explanation"));
  assert(el("lesson").innerHTML.includes("Pro tip"));
  assert(
    vm.runInContext(
      "lessons[current].taglish.length>100 && lessons[current].proTip.length>30",
      context,
    ),
  );
  vm.runInContext("checkAnswer((lessons[current].correct+1)%3)", context);
  assert(el("feedback").textContent.startsWith("Try again."));
  vm.runInContext(
    "checkAnswer(lessons[current].correct); completeLesson()",
    context,
  );
  assert(el("feedback").textContent.startsWith("Correct."));
  assert.equal(el("complete").textContent, "Completed");
}
assert.equal(JSON.parse(stored).completed.length, 48);
assert.throws(() => tool.execute({ lesson: 0 }));
el("search").value = "video";
vm.runInContext("renderCards()", context);
assert.equal(el("searchStatus").textContent, "2 matching lessons");
el("search").value = "zzzz";
vm.runInContext("renderCards()", context);
assert.equal(el("cards").innerHTML, "");
console.log(
  "Verified 48 lesson flows, wrong/correct answers, completion, saved state, search, empty results, and invalid input.",
);

assert(
  vm.runInContext(
    'workshopLessons.every(l=>l.objectives.length>=3 && l.steps.length>=5 && l.drills.length>=3 && l.rubric.length>=4 && l.body.includes("model response"))',
    context,
  ),
);
console.log(
  "All 8 workshops include objectives, multi-step workflows, model responses, assignments, and review rubrics.",
);
