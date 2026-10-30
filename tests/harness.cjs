// A minimal DOM stand-in so the browser scripts run unchanged in Node.
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.join(__dirname, "../site");
const scripts = [
  "more-lessons.js",
  "app.js",
  "pro-lessons.js",
  "client-lessons.js",
  "mentor-notes.js",
  "workshops.js",
  "advanced-lessons.js",
  "coding-build.js",
  "coding-foundations.js",
  "coding-procedures.js",
  "coding-business.js",
  "coding-specialty.js",
  "coding-extra.js",
  "va-extra.js",
  "coding-more.js",
  "va-more.js",
  "coding-systems.js",
  "va-ops.js",
  "coding-depth.js",
  "va-depth.js",
  "coding-blueprint.js",
  "coding-surgery.js",
  "coding-icd2.js",
  "coding-payers2.js",
  "coding-cases.js",
  "va-business.js",
  "coding-breadth.js",
  "remember-notes.js",
  "reference.js",
  "distractors.js",
  "learning.js",
  "quick-nav.js",
  "study-tools.js",
  "start.js",
];
function boot({
  progress = null,
  prefs = null,
  hash = "",
  notesData = null,
} = {}) {
  const elements = new Map();
  const handlers = new Map();
  const listeners = new Map();
  const windowHandlers = new Map();
  const stored = {
    "medical-va-learning-v1": progress,
    "medical-va-ui-v1": prefs,
    "medical-va-cards-v1": null,
    "medical-va-notes-v1": notesData,
  };
  const makeElement = () => {
    const attrs = new Map();
    const classes = new Set();
    return {
      innerHTML: "",
      textContent: "",
      value: "",
      checked: false,
      disabled: false,
      dataset: {},
      style: { setProperty() {} },
      attrs,
      classes,
      classList: {
        add: (c) => classes.add(c),
        remove: (c) => classes.delete(c),
        toggle: (c, force) => {
          const on = force === undefined ? !classes.has(c) : Boolean(force);
          if (on) classes.add(c);
          else classes.delete(c);
          return on;
        },
        contains: (c) => classes.has(c),
      },
      setAttribute: (k, v) => attrs.set(k, String(v)),
      getAttribute: (k) => (attrs.has(k) ? attrs.get(k) : null),
      removeAttribute: (k) => attrs.delete(k),
      hasAttribute: (k) => attrs.has(k),
      focus() {},
      scrollIntoView() {},
      addEventListener() {},
    };
  };
  const get = (id) => {
    if (!elements.has(id)) elements.set(id, makeElement());
    return elements.get(id);
  };
  const tool = { registered: null };
  // Like a browser, changing the hash fires hashchange.
  let currentHash = hash;
  const location = {
    get hash() {
      return currentHash;
    },
    set hash(value) {
      if (value === currentHash) return;
      currentHash = value;
      windowHandlers.get("hashchange")?.({});
    },
  };
  const context = vm.createContext({
    document: {
      getElementById: get,
      querySelectorAll: () => [],
      querySelector: () => null,
      createElement: makeElement,
      body: { appendChild() {}, classList: makeElement().classList },
      documentElement: makeElement(),
      addEventListener: (name, handler) => {
        const list = listeners.get(name) || [];
        list.push(handler);
        listeners.set(name, list);
        handlers.set(name, (event) => list.forEach((fn) => fn(event)));
      },
      modelContext: {
        registerTool: (t) => {
          tool.registered = t;
        },
      },
    },
    window: {
      scrollTo() {},
      innerWidth: 1280,
      addEventListener: (name, handler) => windowHandlers.set(name, handler),
    },
    location,
    localStorage: {
      getItem: (key) => stored[key] ?? null,
      setItem: (key, value) => {
        stored[key] = value;
      },
    },
  });
  for (const name of scripts)
    vm.runInContext(fs.readFileSync(path.join(root, name), "utf8"), context);
  return {
    context,
    get,
    stored,
    handlers,
    windowHandlers,
    tool: tool.registered,
    run: (code) => vm.runInContext(code, context),
  };
}
module.exports = { boot, root, scripts };
