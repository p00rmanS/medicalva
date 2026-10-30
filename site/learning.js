// Course catalog, lesson player, progress, and preferences.
lessons.push(
  ...additionalLessons,
  ...professionalLessons,
  ...clientLessons,
  ...workshopLessons,
  ...advancedLessons,
  ...codingLessons,
);
lessons.forEach((l, i) => {
  if (!l.remember && rememberNotes[i]) l.remember = rememberNotes[i];
});
applyMentorNotes(lessons);
// Replace the placeholder wrong answers with the written distractors.
lessons.forEach((l, i) => {
  const pair = distractors[i];
  if (!pair) return;
  const right = l.answers[l.correct];
  l.answers = [right, ...pair];
  l.correct = 0;
});
// Rotate answer positions so the right choice is not always in the same slot.
lessons.forEach((l, i) => {
  const n = l.answers.length,
    shift = i % n;
  l.answers = l.answers.map((_, k) => l.answers[(k - shift + n) % n]);
  l.correct = (l.correct + shift) % n;
});

const courses = [
  {
    id: "foundations",
    title: "Medical VA Foundations",
    level: "Beginner",
    summary:
      "Answer calls, schedule safely, protect patient information, and work reliably with U.S. clients. No medical background needed.",
    sections: [
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
      {
        title: "Client expectations and career growth",
        note: "Work with clear expectations, reliable updates, and honest evidence.",
        ids: [32, 33, 34, 35, 36, 37, 38, 39],
      },
      {
        title: "Comprehensive practice workshops",
        note: "Work through detailed cases, compare your outputs, and revise with a mentor checklist.",
        ids: [40, 41, 42, 43, 44, 45, 46, 47],
      },
      {
        title: "Reliable operations and client onboarding",
        note: "Practice record accuracy, safe routing, schedule recovery, trackers, incident reporting, and a reviewed client workflow.",
        ids: [48, 49, 50, 51, 52, 53],
      },
      {
        title: "Privacy and security in depth",
        note: "The HIPAA Privacy Rule and Security Rule in detail: who may see what, patient rights, and safeguards for remote work.",
        ids: [146, 147],
      },
      {
        title: "Practice operations and remote skills",
        note: "Verify coverage, support credentialing, answer billing calls, learn medication vocabulary, and work efficiently from home.",
        ids: [103, 104, 105, 106, 107, 108, 120, 121, 122, 132, 133, 134],
      },
    ],
  },
  {
    id: "coding",
    title: "Medical Coding and Billing Career Track",
    level: "Beginner to intermediate",
    summary:
      "ICD-10-CM, CPT, HCPCS, modifiers, claims, denials, compliance, and a roadmap to professional certification and coder VA work.",
    sections: [
      {
        title: "Coding foundations",
        note: "Understand the job, the revenue cycle, medical language, and how to read a chart.",
        ids: [54, 55, 56, 57, 58, 59],
      },
      {
        title: "Medical language by body system",
        note: "Deep dives on word parts, conditions, tests, and procedures for each body system, with coding connections.",
        ids: [135, 136, 137, 138, 139, 140],
      },
      {
        title: "CPC exam blueprint and coding guidelines",
        note: "What the exam tests, where the points are, and the general rules for ICD-10-CM and CPT that apply to every chart.",
        ids: [148, 149, 150],
      },
      {
        title: "ICD-10-CM diagnosis coding",
        note: "Assign accurate diagnosis codes using the Index, the Tabular List, and the Official Guidelines.",
        ids: [
          60, 61, 62, 63, 64, 112, 113, 114, 115, 123, 124, 125, 161, 162, 163,
          164, 165, 174, 175, 176, 177, 178,
        ],
      },
      {
        title: "CPT and HCPCS procedure coding",
        note: "Code visits, procedures, drugs, and services, then combine them into a clean encounter.",
        ids: [
          65, 66, 67, 68, 69, 70, 71, 72, 73, 126, 127, 141, 142, 173, 179, 180,
        ],
      },
      {
        title: "CPT surgery series in depth",
        note: "The 20000 through 60000 series with the bundling, approach, and add-on rules that decide the code.",
        ids: [151, 152, 153, 154, 155, 156],
      },
      {
        title: "Radiology, pathology, medicine, and HCPCS in depth",
        note: "Nuclear medicine and guidance, surgical pathology, the Medicine section, and HCPCS Level II.",
        ids: [157, 158, 159, 160],
      },
      {
        title: "Specialty coding",
        note: "Apply the rules to hospital, skin, orthopedic, behavioral health, obstetric, and anesthesia services, and read an operative report.",
        ids: [90, 91, 92, 93, 94, 95, 96, 109, 110, 111],
      },
      {
        title: "Beyond the office",
        note: "A first look at hospital inpatient coding, where the rules differ from the outpatient work.",
        ids: [116],
      },
      {
        title: "Claims, payers, and denials",
        note: "Follow a claim to payment, read remittances, work denials, and bill patients clearly.",
        ids: [
          74, 75, 76, 77, 78, 79, 80, 97, 128, 129, 143, 145, 166, 167, 181,
        ],
      },
      {
        title: "Compliance, risk, and quality",
        note: "Code honestly, understand risk adjustment, measure accuracy, and report quality data.",
        ids: [81, 82, 83, 98, 117, 144],
      },
      {
        title: "Exam practice sets",
        note: "Timed practice with answers and reasoning for diagnosis coding, procedure coding, and the back end of the claim.",
        ids: [99, 100, 101, 118, 130, 131, 168, 169, 182, 183],
      },
      {
        title: "Tools, security, and career launch",
        note: "Work securely, choose a credential, package your services, prepare for interviews, and finish with a capstone.",
        ids: [84, 85, 86, 87, 88, 102, 119, 170, 171, 172, 89],
      },
    ],
  },
];
const groups = courses.flatMap((c) =>
  c.sections.map((s) => ({ ...s, course: c.id })),
);
const order = groups.flatMap((g) => g.ids);
const courseById = (id) => courses.find((c) => c.id === id) || courses[0];
const groupIndexOf = (i) => groups.findIndex((g) => g.ids.includes(i));
const courseOf = (i) => courseById(groups[groupIndexOf(i)].course);

let current = -1,
  passed = false,
  completed = new Set(),
  last = 0,
  storageAvailable = true,
  view = "home",
  ui = { theme: "auto", drawer: null, open: {}, course: "foundations" },
  suppressHash = false;
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
let notes = {};
try {
  const savedNotes = JSON.parse(
    localStorage.getItem("medical-va-notes-v1") || "{}",
  );
  if (savedNotes && typeof savedNotes === "object")
    for (const [k, v] of Object.entries(savedNotes))
      if (
        /^\d+$/.test(k) &&
        Number(k) < lessons.length &&
        typeof v === "string"
      )
        notes[k] = v.slice(0, 5000);
} catch {}
try {
  const prefs = JSON.parse(localStorage.getItem("medical-va-ui-v1") || "{}");
  if (prefs && typeof prefs === "object") {
    if (["auto", "light", "dark"].includes(prefs.theme)) ui.theme = prefs.theme;
    if (typeof prefs.drawer === "boolean") ui.drawer = prefs.drawer;
    if (courses.some((c) => c.id === prefs.course)) ui.course = prefs.course;
    if (prefs.open && typeof prefs.open === "object")
      for (const [k, v] of Object.entries(prefs.open))
        if (/^\d+$/.test(k) && typeof v === "boolean") ui.open[k] = v;
  }
} catch {}

const $ = (id) => document.getElementById(id);
const escapeText = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const minutesOf = (i) => parseInt(lessons[i].time, 10) || 0;
function formatMinutes(total) {
  const h = Math.floor(total / 60),
    m = total % 60;
  if (!h) return `${m} min`;
  return m ? `${h} hr ${m} min` : `${h} hr`;
}
const ICONS = {
  chevron: "M6 9l6 6 6-6",
  check: "M5 12.5l4.5 4.5L19 7.5",
  list: "M4 6h16M4 12h16M4 18h10",
  keys: "M3 6h18v12H3zM7 10h.01M11 10h.01M15 10h.01M7 14h10",
  sun: "M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",
  moon: "M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z",
  left: "M19 12H5M11 6l-6 6 6 6",
  right: "M5 12h14M13 6l6 6-6 6",
  search: "M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.3-4.3",
  close: "M6 6l12 12M18 6L6 18",
};
const icon = (name) =>
  `<svg class="i" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${ICONS[name]}"/></svg>`;
const pct = (done, total) => (total ? Math.round((done / total) * 100) : 0);
function courseStats(course) {
  const ids = course.sections.flatMap((s) => s.ids);
  const done = ids.filter((i) => completed.has(i)).length;
  return {
    ids,
    done,
    total: ids.length,
    minutes: ids.reduce((sum, i) => sum + minutesOf(i), 0),
    pct: pct(done, ids.length),
  };
}
function paint() {
  document.querySelectorAll("[data-pct]").forEach((el) => {
    el.style.setProperty("--p", el.dataset.pct);
  });
}
function saveUi() {
  try {
    localStorage.setItem("medical-va-ui-v1", JSON.stringify(ui));
  } catch {}
}
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

// ---- Routing -------------------------------------------------------------
function setHash(hash) {
  if (typeof location === "undefined" || location.hash === hash) return;
  suppressHash = true;
  location.hash = hash;
}
function route(initial = false) {
  const hash = typeof location === "undefined" ? "" : location.hash;
  const [, kind, arg] = hash.match(/^#\/([a-z]*)\/?([\w-]*)/) || [];
  if (kind === "lesson") {
    const n = Number(arg);
    if (Number.isInteger(n) && n >= 1 && n <= lessons.length)
      return openLesson(n - 1, false);
  }
  if (kind === "reference" && typeof showReference === "function")
    return showReference(arg, false);
  if (kind === "flashcards" && typeof showFlashcards === "function")
    return showFlashcards(false);
  if (kind === "course" && courses.some((c) => c.id === arg)) {
    ui.course = arg;
    saveUi();
  }
  showHome(false, kind === "course", !initial);
}

// ---- Shared pieces ---------------------------------------------------------
function rowHtml(i, currentId) {
  const l = lessons[i],
    done = completed.has(i),
    isCurrent = i === currentId;
  return `<li><button class="row${done ? " done" : ""}${isCurrent ? " current" : ""}" data-action="lesson" data-open="${i}"${i === current ? ' aria-current="true"' : ""}><span class="row-state" aria-hidden="true">${done ? icon("check") : ""}</span><span class="row-main"><span class="row-num">${order.indexOf(i) + 1}</span><span class="row-title">${escapeText(l.title)}</span></span><span class="row-time">${escapeText(l.time)}</span>${done ? '<span class="sr-only">Completed</span>' : ""}</button></li>`;
}
function isSectionOpen(gi, focusId) {
  if (ui.open[gi] !== undefined) return ui.open[gi];
  return groups[gi].ids.includes(focusId);
}
function sectionHtml(gi, ids, opts) {
  const g = groups[gi],
    done = g.ids.filter((i) => completed.has(i)).length,
    minutes = g.ids.reduce((sum, i) => sum + minutesOf(i), 0),
    open = opts.forceOpen || isSectionOpen(gi, opts.focusId);
  return `<section class="section${opts.compact ? " compact" : ""}">
<h3><button class="section-toggle" data-action="toggle-section" data-section="${gi}" aria-expanded="${open}" aria-controls="${opts.prefix}${gi}"><span class="chev">${icon("chevron")}</span><span class="section-title">${escapeText(g.title)}</span><span class="section-meta">${done}/${g.ids.length} · ${formatMinutes(minutes)}</span></button></h3>
<div class="section-body" id="${opts.prefix}${gi}" data-body="${gi}"${open ? "" : " hidden"}>${opts.compact ? "" : `<p class="group-note">${escapeText(g.note)}</p>`}<ol class="rows">${ids.map((i) => rowHtml(i, opts.currentId)).join("")}</ol></div>
</section>`;
}

// ---- Home ------------------------------------------------------------------
function renderCourseCards() {
  $("courseCards").innerHTML = courses
    .map((c, n) => {
      const s = courseStats(c),
        active = ui.course === c.id;
      return `<article class="course${active ? " active" : ""}">
<p class="course-index">Course ${String(n + 1).padStart(2, "0")} · ${escapeText(c.level)}</p>
<h3>${escapeText(c.title)}</h3>
<p>${escapeText(c.summary)}</p>
<ul class="facts"><li>${s.total} lessons</li><li>${formatMinutes(s.minutes)}</li><li>${c.sections.length} sections</li></ul>
<div class="meter" role="img" aria-label="${s.pct}% complete"><span data-pct="${s.pct}"></span></div>
<p class="small">${s.done} of ${s.total} complete</p>
<button class="${active ? "secondary" : "primary"}" data-action="course" data-course="${c.id}">${s.done ? "Open course" : "Start course"}</button>
</article>`;
    })
    .join("");
}
function renderHero() {
  const total = lessons.length,
    count = completed.size,
    next = lessons[last];
  $("progressText").textContent = `${count} of ${total} lessons completed`;
  $("heroRing").dataset.pct = String(pct(count, total));
  $("heroRingValue").textContent = `${pct(count, total)}%`;
  $("storageNote").textContent = storageAvailable
    ? "Progress is saved in this browser on this device."
    : "Progress is available for this visit; browser storage is unavailable.";
  $("continue").textContent =
    count === total
      ? "Review your lessons"
      : count
        ? "Continue learning"
        : "Start learning";
  $("continueDetail").textContent =
    `${completed.has(last) ? "Review" : "Up next"}: ${next.title}`;
  $("continueMeta").textContent =
    `${courseOf(last).title} · ${groups[groupIndexOf(last)].title}`;
  $("courseProgress").innerHTML = courses
    .map((c) => {
      const s = courseStats(c);
      return `<li><span>${escapeText(c.title)}</span><b>${s.done}/${s.total}</b></li>`;
    })
    .join("");
}
function updateProgress() {
  renderHero();
  renderCourseCards();
  renderCards();
  renderDrawer();
  updateQuickNav();
  paint();
}
function renderCards() {
  const query = $("search").value.trim().toLowerCase();
  const course = courseById(ui.course);
  let found = 0,
    html;
  if (query) {
    html = groups
      .map((g, gi) => {
        const ids = g.ids.filter((i) =>
          `${lessons[i].title} ${lessons[i].desc} ${lessons[i].taglish} ${lessons[i].proTip} ${g.title} ${courseById(g.course).title}`
            .toLowerCase()
            .includes(query),
        );
        found += ids.length;
        return ids.length
          ? sectionHtml(gi, ids, {
              forceOpen: true,
              prefix: "home-sec-",
              currentId: last,
            })
          : "";
      })
      .join("");
    $("curriculumTitle").textContent = "Search results";
    $("curriculumTools").classList.add("hidden");
  } else {
    html = groups
      .map((g, gi) =>
        g.course === course.id
          ? sectionHtml(gi, g.ids, {
              prefix: "home-sec-",
              focusId: last,
              currentId: last,
            })
          : "",
      )
      .join("");
    $("curriculumTitle").textContent = course.title;
    $("curriculumTools").classList.remove("hidden");
    const s = courseStats(course);
    $("curriculumMeta").textContent =
      `${course.sections.length} sections · ${s.total} lessons · ${formatMinutes(s.minutes)} total`;
  }
  $("cards").innerHTML = html;
  $("searchStatus").textContent = query
    ? `${found} matching lesson${found === 1 ? "" : "s"}`
    : "";
  $("empty").classList.toggle("hidden", !query || found > 0);
  paint();
}
function clearSearch() {
  $("search").value = "";
  renderCards();
  $("search").focus();
}

// ---- Course content drawer (Udemy / Coursera style) -------------------------
function drawerCourse() {
  return current >= 0 ? courseOf(current) : courseById(ui.course);
}
function renderDrawer() {
  if (current < 0) return;
  const course = drawerCourse(),
    s = courseStats(course);
  $("drawerTitle").textContent = course.title;
  $("drawerProgress").textContent =
    `${s.done} of ${s.total} complete · ${s.pct}%`;
  $("drawerMeter").dataset.pct = String(s.pct);
  $("drawerList").innerHTML = groups
    .map((g, gi) =>
      g.course === course.id
        ? sectionHtml(gi, g.ids, {
            compact: true,
            prefix: "drawer-sec-",
            focusId: current,
            currentId: current,
          })
        : "",
    )
    .join("");
  paint();
}
function setSectionOpen(gi, open) {
  ui.open[gi] = open;
  document.querySelectorAll(`[data-section="${gi}"]`).forEach((b) => {
    b.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll(`[data-body="${gi}"]`).forEach((b) => {
    if (open) b.removeAttribute("hidden");
    else b.setAttribute("hidden", "");
  });
}
function toggleSection(gi, control) {
  if (!Number.isInteger(gi) || gi < 0 || gi >= groups.length) return;
  const open = control?.getAttribute
    ? control.getAttribute("aria-expanded") !== "true"
    : !isSectionOpen(gi, current >= 0 ? current : last);
  setSectionOpen(gi, open);
  saveUi();
}
function setAllSections(open) {
  const course = drawerCourse();
  groups.forEach((g, gi) => {
    if (g.course === course.id) setSectionOpen(gi, open);
  });
  saveUi();
}
function applyChrome() {
  const lessonView = view === "lesson";
  const drawerOn = lessonView && ui.drawer !== false;
  document.body.classList.toggle("drawer-open", drawerOn);
  document.body.classList.toggle("view-lesson", lessonView);
  $("drawer").classList.toggle("hidden", !lessonView);
  $("toggleContent").classList.toggle("hidden", !lessonView);
  $("toggleContent").setAttribute("aria-expanded", String(drawerOn));
  $("scrim").classList.toggle("hidden", !drawerOn);
  for (const [id, name] of [
    ["navCourses", "home"],
    ["navReference", "reference"],
    ["navFlash", "flashcards"],
  ]) {
    const link = $(id);
    if (view === name || (name === "home" && view === "lesson"))
      link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  }
}
function toggleDrawer(force) {
  if (view !== "lesson") return;
  const wasOpen = ui.drawer !== false;
  ui.drawer = typeof force === "boolean" ? force : !wasOpen;
  saveUi();
  applyChrome();
  if (ui.drawer) $("drawer").scrollTop = 0;
}

// ---- Views -----------------------------------------------------------------
const DEFAULT_TITLE = "MedVA Academy | Medical VA and Medical Coding Training";
function setTitle(name) {
  document.title = name ? `${name} | MedVA Academy` : DEFAULT_TITLE;
}
function setView(next) {
  view = next;
  setTitle(
    { reference: "Coder cheat sheets", flashcards: "Flashcards" }[next] || "",
  );
  for (const id of ["home", "lesson", "reference", "flashcards"])
    $(id).classList.toggle("hidden", id !== next);
  applyChrome();
  updateQuickNav();
}
function showHome(writeHash = true, toCurriculum = false, focus = true) {
  current = -1;
  passed = false;
  setView("home");
  if (writeHash) setHash("#/");
  updateProgress();
  if (toCurriculum) {
    $("curriculum").scrollIntoView({ block: "start" });
    $("curriculumTitle").focus({ preventScroll: true });
  } else {
    window.scrollTo(0, 0);
    if (focus) $("overviewTitle").focus({ preventScroll: true });
  }
}
function selectCourse(id) {
  if (!courses.some((c) => c.id === id)) return;
  ui.course = id;
  $("search").value = "";
  saveUi();
  if (view !== "home") showHome(false, true);
  else {
    renderCourseCards();
    renderCards();
    $("curriculum").scrollIntoView({ block: "start" });
  }
  setHash(`#/course/${id}`);
}
function lessonHtml(i) {
  const l = lessons[i],
    position = order.indexOf(i),
    gi = groupIndexOf(i),
    group = groups[gi],
    course = courseById(group.course),
    done = completed.has(i);
  const jumps = [
    ["remember", "Remember"],
    ["taglish", "Taglish"],
    ["lessonContent", "Lesson"],
    ["proTips", "Pro tip"],
    ["practice", "Check"],
  ];
  return `<nav class="crumbs" aria-label="Breadcrumb"><a href="#/course/${course.id}">${escapeText(course.title)}</a><span aria-hidden="true">/</span><span>${escapeText(group.title)}</span></nav>
<header class="lesson-head">
<p class="kicker">Lesson ${position + 1} of ${order.length} · ${escapeText(l.time)} · English + Taglish</p>
<h1 tabindex="-1" id="lessonTitle">${escapeText(l.title)}</h1>
<p class="lede">${escapeText(l.desc)}</p>
<nav class="lesson-jumps" aria-label="Lesson sections">${jumps.map(([id, label]) => `<button data-action="jump" data-target="${id}">${label}</button>`).join("")}</nav>
</header>
<div id="lessonContent" class="prose">${l.body}</div>
<section class="practice" id="practice" aria-labelledby="practiceTitle">
<h2 id="practiceTitle">Check your understanding</h2>
<p class="question">${escapeText(l.scenario)}</p>
<p class="small">Choose one answer, or press 1–${l.answers.length}. You can retry as often as you need.</p>
<div class="answers" role="group" aria-label="Answer choices">${l.answers.map((a, n) => `<button class="answer" id="answer${n}" data-action="answer" data-answer="${n}" aria-keyshortcuts="${n + 1}"><span class="key" aria-hidden="true">${n + 1}</span><span>${escapeText(a)}</span></button>`).join("")}</div>
<div class="feedback" id="feedback" role="status" aria-live="polite">${done ? "You completed this lesson. Try the question again to review." : "Choose an answer to see the explanation."}</div>
</section>
<div class="completion">
<button class="primary" id="complete" data-action="complete" ${passed ? "" : "disabled"}>${done ? "Completed" : "Mark lesson complete"}</button>
<span id="completeHint" class="small">${passed ? "You can continue or review this lesson." : "Answer the check correctly to mark this lesson complete."}</span>
</div>
<section class="notes" aria-labelledby="notesTitle">
<h2 id="notesTitle">Your notes</h2>
<label class="small" for="lessonNotes">Saved in this browser only. Write in your own words, and never enter real patient information.</label>
<textarea id="lessonNotes" rows="5" maxlength="5000" placeholder="What will you remember? What is still unclear?"></textarea>
</section>`;
}
function openLesson(i, writeHash = true) {
  if (!Number.isInteger(i) || i < 0 || i >= lessons.length)
    throw Error("Invalid lesson");
  current = i;
  last = i;
  passed = completed.has(i);
  ui.open[groupIndexOf(i)] = true;
  setView("lesson");
  setTitle(lessons[i].title);
  if (writeHash) setHash(`#/lesson/${i + 1}`);
  save();
  $("lesson").innerHTML = lessonHtml(i);
  window.scrollTo(0, 0);
  $("lessonNotes").value = notes[i] || "";
  $("lessonTitle").focus({ preventScroll: true });
  const row = document.querySelector("#drawerList .row.current");
  if (row && row.scrollIntoView) row.scrollIntoView({ block: "nearest" });
  if (window.innerWidth < 1000 && ui.drawer !== false) {
    ui.drawer = false;
    applyChrome();
  }
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
  $("feedback").classList.toggle("good", correct);
  $("feedback").classList.toggle("bad", !correct);
  document.querySelectorAll(".answer").forEach((x, i) => {
    x.classList.toggle("selected", i === n);
    x.classList.toggle("right", correct && i === n);
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
function jumpTo(id) {
  const target = document.getElementById(id);
  if (target && target.scrollIntoView) {
    target.scrollIntoView({ block: "start" });
    if (target.setAttribute && !target.hasAttribute("tabindex"))
      target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  }
}

// ---- Preferences ------------------------------------------------------------
function applyTheme() {
  const root = document.documentElement;
  if (!root) return;
  if (ui.theme === "auto") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", ui.theme);
  const label = {
    auto: "Theme: match device",
    light: "Theme: light",
    dark: "Theme: dark",
  }[ui.theme];
  $("toggleTheme").setAttribute("aria-label", `${label}. Activate to change.`);
  $("toggleTheme").setAttribute("title", label);
  $("toggleTheme").innerHTML = icon(ui.theme === "dark" ? "moon" : "sun");
}
function cycleTheme() {
  ui.theme = { auto: "light", light: "dark", dark: "auto" }[ui.theme];
  saveUi();
  applyTheme();
}
function openHelp() {
  const dialog = $("helpDialog");
  if (dialog.showModal && !dialog.open) dialog.showModal();
}
function closeHelp() {
  const dialog = $("helpDialog");
  if (dialog.close) dialog.close();
}

// ---- Registration of the optional page tool and event delegation -----------
if (document.modelContext?.registerTool) {
  try {
    Promise.resolve(
      document.modelContext.registerTool({
        name: "open_training_lesson",
        description: `Open a medical VA or medical coding lesson using its learning-path number, from 1 to ${order.length}.`,
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
    case "course":
      selectCourse(button.dataset.course);
      break;
    case "toggle-section":
      toggleSection(Number(button.dataset.section), button);
      break;
    case "expand-all":
      setAllSections(true);
      break;
    case "collapse-all":
      setAllSections(false);
      break;
    case "toggle-content":
      toggleDrawer();
      break;
    case "close-content":
      toggleDrawer(false);
      break;
    case "theme":
      cycleTheme();
      break;
    case "help":
      openHelp();
      break;
    case "close-help":
      closeHelp();
      break;
    case "jump":
      jumpTo(button.dataset.target);
      break;
  }
});
$("search").addEventListener("input", renderCards);
document.addEventListener("input", (event) => {
  if (event.target?.id !== "lessonNotes" || current < 0) return;
  const text = String(event.target.value).slice(0, 5000);
  if (text.trim()) notes[current] = text;
  else delete notes[current];
  try {
    localStorage.setItem("medical-va-notes-v1", JSON.stringify(notes));
  } catch {}
});
