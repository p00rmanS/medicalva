// Checks every lesson body for balanced, properly nested HTML and duplicate ids.
const assert = require("node:assert/strict");
const { boot } = require("./harness.cjs");
const app = boot();
const VOID = new Set(["br", "hr", "img", "input", "meta", "link"]);
function check(label, html) {
  const stack = [];
  const ids = new Set();
  for (const m of html.matchAll(/<(\/?)([a-z][a-z0-9]*)\b([^>]*)>/gi)) {
    const [, close, name, attrs] = m;
    const tag = name.toLowerCase();
    if (VOID.has(tag)) continue;
    if (close) {
      const top = stack.pop();
      assert.equal(top, tag, `${label}: </${tag}> closes <${top}>`);
    } else {
      stack.push(tag);
      const id = /\bid="([^"]+)"/.exec(attrs)?.[1];
      if (id) {
        assert(!ids.has(id), `${label}: duplicate id ${id}`);
        ids.add(id);
      }
    }
  }
  assert.deepEqual(stack, [], `${label}: unclosed ${stack.join(",")}`);
  assert(
    !/undefined|\[object Object\]|NaN/.test(html.replace(/<[^>]+>/g, " ")),
    `${label}: placeholder text leaked`,
  );
  const text = html.replace(/<[^>]+>/g, " ");
  assert(
    !/&(?!amp;|lt;|gt;|quot;|#\d+;)/.test(text),
    `${label}: raw ampersand`,
  );
}
const bodies = app.run("lessons.map((l, i) => [i + ': ' + l.title, l.body])");
for (const [label, body] of bodies) check(label, body);
console.log(
  `Verified balanced HTML, unique ids, and no placeholder text in ${bodies.length} lesson bodies.`,
);
