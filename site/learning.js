lessons.push(
  ...additionalLessons,
  ...professionalLessons,
  ...clientLessons,
  ...workshopLessons,
  ...advancedLessons,
);
applyMentorNotes(lessons);
const groups = [
  {
    title: "Foundations",
    note: "Understand your role and protect information.",
    ids: [0, 1, 2, 8],
  },
  {
    title: "Patient support",
    note: "Practice the everyday patient-facing tasks.",
    ids: [3, 4, 9, 10, 13],
  },
  {
    title: "Office workflows",
    note: "Keep records, requests, and handoffs organized.",
    ids: [5, 6, 11, 12, 14],
  },
  {
    title: "Put it into practice",
    note: "Prepare honest work samples and complete a practice shift.",
    ids: [7, 15],
  },
];
groups.push(
  {
    title: "Scheduling and billing support",
    note: "Build reliable workflows for a busy practice.",
    ids: [16, 17, 18, 19, 20],
  },
  {
    title: "Clinical team support",
    note: "Capture requests accurately and stay within your role.",
    ids: [21, 22, 23],
  },
  {
    title: "Professional communication and tools",
    note: "Build trust and use approved tools carefully.",
    ids: [24, 25, 26, 27],
  },
  {
    title: "Excellence through practice",
    note: "Review quality, create useful procedures, and demonstrate your skills.",
    ids: [28, 29, 30, 31],
  },
);
groups.push({
  title: "Client expectations and career growth",
  note: "Work with clear expectations, reliable updates, and honest evidence.",
  ids: [32, 33, 34, 35, 36, 37, 38, 39],
});
groups.push({
  title: "Comprehensive practice workshops",
  note: "Work through detailed cases, compare your outputs, and revise with a mentor checklist.",
  ids: [40, 41, 42, 43, 44, 45, 46, 47],
});
groups.push({
  title: "Reliable operations and client onboarding",
  note: "Practice record accuracy, safe routing, schedule recovery, trackers, incident reporting, and a reviewed client workflow.",
  ids: [48, 49, 50, 51, 52, 53],
});
const order = groups.flatMap((g) => g.ids);
let current = -1,
  passed = false,
  completed = new Set(),
  last = 0,
  storageAvailable = true;
try {
  const saved =
    JSON.parse(localStorage.getItem("medical-va-learning-v1") || "{}") || {};
  completed = new Set(
    (Array.isArray(saved.completed) ? saved.completed : []).filter(
      (i) => Number.isInteger(i) && i >= 0 && i < lessons.length,
    ),
  );
  if (
    Number.isInteger(saved.last) &&
    saved.last >= 0 &&
    saved.last < lessons.length
  )
    last = saved.last;
} catch {
  storageAvailable = false;
}
const $ = (id) => document.getElementById(id);
const escapeText = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
function save() {
  try {
    localStorage.setItem(
      "medical-va-learning-v1",
      JSON.stringify({ completed: [...completed], last }),
    );
  } catch {
    storageAvailable = false;
  }
  updateProgress();
}
function updateProgress() {
  const count = completed.size;
  $("progressText").textContent =
    `${count} of ${lessons.length} lessons completed`;
  $("progress").value = count;
  $("progress").max = lessons.length;
  $("storageNote").textContent = storageAvailable
    ? "Progress is saved in this browser on this device."
    : "Progress is available for this visit; browser storage is unavailable.";
  $("continue").textContent =
    count === lessons.length ? "Review your lessons" : "Continue learning";
  $("continueDetail").textContent =
    `${completed.has(last) ? "Review" : "Up next"}: ${lessons[last].title}`;
  renderCards();
}
function renderCards() {
  const query = $("search").value.trim().toLowerCase();
  let found = 0;
  $("cards").innerHTML = groups
    .map((g) => {
      const ids = g.ids.filter((i) =>
        `${escapeText(lessons[i].title)} ${lessons[i].desc} ${lessons[i].taglish} ${escapeText(g.title)}`
          .toLowerCase()
          .includes(query),
      );
      found += ids.length;
      return ids.length
        ? `<section class="lesson-group">
<h2>${escapeText(g.title)}</h2>
<p class="group-note">${escapeText(g.note)}</p>
<div class="grid">${ids
            .map((i) => {
              const l = lessons[i];
              return `<button class="card" data-action="lesson" data-open="${i}"><span class="num">LESSON ${String(order.indexOf(i) + 1).padStart(2, "0")} <span class="status">${completed.has(i) ? "Completed" : "To learn"}</span></span><h3>${escapeText(l.title)}</h3><p>${escapeText(l.desc)}</p><footer>${escapeText(l.time)} · English + Taglish</footer></button>`;
            })
            .join("")}</div>
</section>`
        : "";
    })
    .join("");
  $("searchStatus").textContent = query
    ? `${found} matching lesson${found === 1 ? "" : "s"}`
    : "";
  $("empty").classList.toggle("hidden", found > 0);
}
function clearSearch() {
  $("search").value = "";
  renderCards();
  $("search").focus();
}
function renderNav() {
  $("nav").innerHTML =
    '<button class="nav active" data-action="home">All lessons</button>' +
    groups
      .map(
        (g, n) =>
          `<div class="nav-group">${escapeText(g.title)}</div>${g.ids.map((i) => `<button class="nav" data-lesson="${i}" data-action="lesson" data-open="${i}">${order.indexOf(i) + 1}. ${escapeText(lessons[i].title)}</button>`).join("")}`,
      )
      .join("");
  $("lessonSelect").innerHTML =
    '<option value="">Choose a lesson</option>' +
    groups
      .map(
        (g) =>
          `<optgroup label="${escapeText(g.title)}">${g.ids.map((i) => `<option value="${i}">${order.indexOf(i) + 1}. ${escapeText(lessons[i].title)}</option>`).join("")}</optgroup>`,
      )
      .join("");
}
function highlight() {
  document.querySelectorAll(".nav").forEach((x) => {
    const active =
      current < 0
        ? !x.hasAttribute("data-lesson")
        : Number(x.dataset.lesson) === current && x.hasAttribute("data-lesson");
    x.classList.toggle("active", active);
    if (active) x.setAttribute("aria-current", "page");
    else x.removeAttribute("aria-current");
  });
  $("lessonSelect").value = current < 0 ? "" : String(current);
}
function showHome() {
  current = -1;
  $("home").classList.remove("hidden");
  $("lesson").classList.add("hidden");
  updateProgress();
  highlight();
  window.scrollTo(0, 0);
  $("overviewTitle").focus({ preventScroll: true });
  updateQuickNav();
}
function openLesson(i) {
  if (!Number.isInteger(i) || i < 0 || i >= lessons.length)
    throw Error("Invalid lesson");
  current = i;
  last = i;
  passed = completed.has(i);
  save();
  const l = lessons[i],
    position = order.indexOf(i),
    group = groups.find((g) => g.ids.includes(i));
  $("home").classList.add("hidden");
  $("lesson").classList.remove("hidden");
  $("lesson").innerHTML =
    `<button class="back" data-action="home">All lessons</button>
<div class="label">${escapeText(group.title)} · Lesson ${position + 1} of ${lessons.length} · ${escapeText(l.time)}</div>
<h1 tabindex="-1" id="lessonTitle">${escapeText(l.title)}</h1>
<p class="group-note">${escapeText(l.desc)}</p>
<nav class="lesson-jumps" aria-label="Lesson sections">
<a href="#lessonContent">Read the lesson</a>
<a href="#taglish">Taglish</a>
<a href="#proTips">Pro tips</a>
<a href="#practice">Practice and check</a>
</nav>
<div id="lessonContent">${l.body}</div>
<section class="practice" id="practice">
<h2>Practice and check</h2>
<p>${escapeText(l.scenario)}</p>
<p class="small">Choose one answer. You can retry as often as you need.</p>${l.answers.map((a, n) => `<button class="answer" id="answer${n}" data-action="answer" data-answer="${n}">${escapeText(a)}</button>`).join("")}<div class="feedback" id="feedback" role="status">${completed.has(i) ? "You completed this lesson. Try the question again to review." : "Choose an answer to see the explanation."}</div>
</section>
<div class="completion">
<button class="primary" id="complete" data-action="complete" ${passed ? "" : "disabled"}>${completed.has(i) ? "Completed" : "Mark lesson complete"}</button>
<span id="completeHint" class="small">${passed ? "You can continue or review this lesson." : "Answer the check correctly to mark this lesson complete."}</span>
</div>`;
  highlight();
  window.scrollTo(0, 0);
  $("lessonTitle").focus({ preventScroll: true });
  updateQuickNav();
}
function checkAnswer(n) {
  if (
    current < 0 ||
    !Number.isInteger(n) ||
    n < 0 ||
    n >= lessons[current].answers.length
  )
    throw Error("Invalid answer");
  const l = lessons[current],
    correct = n === l.correct;
  $("feedback").textContent = (correct ? "Correct. " : "Try again. ") + l.why;
  document.querySelectorAll(".answer").forEach((x, i) => {
    x.classList.toggle("selected", i === n);
    x.setAttribute("aria-pressed", String(i === n));
  });
  if (correct) {
    passed = true;
    $("complete").disabled = false;
    $("completeHint").textContent =
      "Well done. Mark this lesson complete when you finish practicing.";
  }
}
function completeLesson() {
  if (!passed) return;
  completed.add(current);
  const position = order.indexOf(current);
  last = position < order.length - 1 ? order[position + 1] : current;
  save();
  $("complete").textContent = "Completed";
  $("completeHint").textContent =
    "Lesson completed. Use Next lesson to keep learning.";
}
renderNav();
updateProgress();
highlight();
if (document.modelContext?.registerTool) {
  try {
    Promise.resolve(
      document.modelContext.registerTool({
        name: "open_training_lesson",
        description: `Open a medical VA lesson using its learning-path number, from 1 to ${order.length}.`,
        inputSchema: {
          type: "object",
          properties: {
            lesson: { type: "integer", minimum: 1, maximum: order.length },
          },
          required: ["lesson"],
          additionalProperties: false,
        },
        annotations: { readOnlyHint: false, untrustedContentHint: false },
        execute(input) {
          if (
            !input ||
            Object.keys(input).length !== 1 ||
            !Number.isInteger(input.lesson) ||
            input.lesson < 1 ||
            input.lesson > order.length
          )
            throw Error(`Lesson must be 1–${order.length}`);
          openLesson(order[input.lesson - 1]);
          return { lesson: input.lesson, title: lessons[current].title };
        },
      }),
    ).catch(() => {});
  } catch {}
}

// Delegate button clicks so dynamic lesson controls work under a strict CSP.
document.addEventListener("click", (event) => {
  const button = event.target.closest?.("button[data-action]");
  if (!button || button.disabled) return;
  switch (button.dataset.action) {
    case "home":
      showHome();
      break;
    case "continue":
      openLesson(last);
      break;
    case "clear-search":
      clearSearch();
      break;
    case "lesson":
      openLesson(Number(button.dataset.open));
      break;
    case "answer":
      checkAnswer(Number(button.dataset.answer));
      break;
    case "complete":
      completeLesson();
      break;
    case "move":
      moveLesson(Number(button.dataset.direction));
      break;
  }
});
$("search").addEventListener("input", renderCards);
$("lessonSelect").addEventListener("change", (event) => {
  if (event.target.value !== "") openLesson(Number(event.target.value));
});
