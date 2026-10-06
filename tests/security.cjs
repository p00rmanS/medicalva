const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.join(__dirname, "../site");
const files = fs.readdirSync(root);
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
assert(html.includes("script-src 'self'"));
assert(html.includes("connect-src 'none'"));
assert(!/<script[^>]*src=["']https?:/i.test(html));
for (const file of files) {
  const source = fs.readFileSync(path.join(root, file), "utf8");
  assert(!/\bon(?:click|change|input|error|load)\s*=/i.test(source), file);
  assert(!/\bstyle\s*=/i.test(source), file);
  assert(!/javascript\s*:/i.test(source), file);
  assert(!/\b(?:eval|Function)\s*\(/.test(source), file);
  assert(!/\b(?:fetch|XMLHttpRequest|WebSocket)\s*\(/.test(source), file);
}

function boot(saved) {
  const elements = new Map();
  const events = new Map();
  const element = () => ({
    innerHTML: "",
    textContent: "",
    value: "",
    disabled: false,
    classList: { add() {}, remove() {}, toggle() {} },
    setAttribute() {},
    focus() {},
    addEventListener() {},
  });
  const get = (id) => {
    if (!elements.has(id)) elements.set(id, element());
    return elements.get(id);
  };
  const context = vm.createContext({
    document: {
      getElementById: get,
      querySelectorAll: () => [],
      createElement: element,
      body: { appendChild() {}, classList: { toggle() {} } },
      addEventListener: (name, handler) => events.set(name, handler),
    },
    window: { scrollTo() {} },
    localStorage: { getItem: () => saved, setItem() {} },
  });
  for (const file of [
    "more-lessons.js",
    "app.js",
    "pro-lessons.js",
    "client-lessons.js",
    "mentor-notes.js",
    "workshops.js",
    "learning.js",
    "quick-nav.js",
  ]) {
    vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context);
  }
  return {
    context,
    get,
    events,
    run: (code) => vm.runInContext(code, context),
  };
}
for (const saved of [
  "null",
  "invalid json",
  '{"completed":[-1,0,0,48,"1"],"last":999}',
]) {
  const app = boot(saved);
  assert(app.run("completed.size <= 1 && last === 0"));
  app.run("openLesson(order[0]);moveLesson(-1)");
  assert.equal(app.run("current"), -1);
  app.run("openLesson(order[47]);moveLesson(1)");
  assert.equal(app.run("current"), -1);
}
const app = boot("{}");
app.run("openLesson(0);completeLesson()");
assert.equal(app.run("completed.size"), 0);
const click = (dataset) =>
  app.events.get("click")({
    target: { closest: () => ({ dataset, disabled: false }) },
  });
click({ action: "move", direction: "1" });
assert.equal(app.run("current"), app.run("order[1]"));
let prevented = false;
app.events.get("keydown")({
  key: "ArrowLeft",
  target: { closest: () => null },
  preventDefault() {
    prevented = true;
  },
});
assert(prevented);
assert.equal(app.run("current"), 0);
app.events.get("keydown")({
  key: "ArrowRight",
  target: { closest: () => ({}) },
  preventDefault() {
    throw Error("Interrupted an input");
  },
});
assert.equal(app.run("current"), 0);
app.run("lessons[0].title = '<img src=x onerror=alert(1)>';openLesson(0)");
assert(app.get("lesson").innerHTML.includes("&lt;img"));
app.get("search").value = "<script>alert(1)</script>";
app.run("renderCards()");
assert.equal(app.get("cards").innerHTML, "");
const bodies = app.run("lessons.map(l => l.body)");
for (const body of bodies) {
  assert(!/<(?:script|iframe|object|embed|form|svg)\b/i.test(body));
  assert(!/\bon\w+\s*=|javascript\s*:/i.test(body));
}
console.log(
  "Verified CSP, passive curriculum, escaped metadata, corrupted storage, completion gate, delegated controls, keyboard behavior, and navigation boundaries.",
);
