// Sticky Previous/Next bar and keyboard shortcuts.
const quickNav = document.createElement("nav");
quickNav.className = "quick-nav hidden";
quickNav.setAttribute("aria-label", "Quick lesson navigation");
quickNav.innerHTML = `<button id="quickPrevious" class="secondary" data-action="move" data-direction="-1" aria-keyshortcuts="ArrowLeft"><span aria-hidden="true">←</span> Previous</button>
<div class="quick-center"><span id="quickPosition"></span><span class="quick-bar" aria-hidden="true"><span id="quickFill" data-pct="0"></span></span><span class="keyboard-tip">← → keys · C course content · ? shortcuts</span></div>
<button id="quickNext" class="primary" data-action="move" data-direction="1" aria-keyshortcuts="ArrowRight">Next <span aria-hidden="true">→</span></button>`;
document.body.appendChild(quickNav);
function updateQuickNav() {
  const inLesson = current >= 0;
  quickNav.classList.toggle("hidden", !inLesson);
  document.body.classList.toggle("reading-lesson", inLesson);
  if (!inLesson) return;
  const position = order.indexOf(current);
  $("quickPosition").textContent = `Lesson ${position + 1} of ${order.length}`;
  $("quickFill").dataset.pct = String(
    Math.round(((position + 1) / order.length) * 100),
  );
  $("quickPrevious").innerHTML = position
    ? '<span aria-hidden="true">←</span> Previous'
    : '<span aria-hidden="true">←</span> Lessons';
  $("quickPrevious").setAttribute(
    "aria-label",
    position
      ? `Previous lesson: ${lessons[order[position - 1]].title}`
      : "Back to all lessons",
  );
  $("quickNext").innerHTML =
    position < order.length - 1
      ? 'Next <span aria-hidden="true">→</span>'
      : 'Finish <span aria-hidden="true">→</span>';
  $("quickNext").setAttribute(
    "aria-label",
    position < order.length - 1
      ? `Next lesson: ${lessons[order[position + 1]].title}`
      : "Finish browsing and return to all courses",
  );
  paint();
}
function moveLesson(direction) {
  if (current < 0 || ![-1, 1].includes(direction)) return;
  const destination = order.indexOf(current) + direction;
  if (destination < 0 || destination >= order.length) showHome();
  else openLesson(order[destination]);
}
// Keys that belong to a control the learner may be using.
const FORM_CONTROLS =
  'input,textarea,select,[contenteditable]:not([contenteditable="false"]),[role="slider"],[role="spinbutton"],[role="combobox"],[role="listbox"],[role="radio"],[role="tab"]';
document.addEventListener("keydown", (event) => {
  if (
    event.defaultPrevented ||
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    event.isComposing
  )
    return;
  const target = event.target;
  if (target?.isContentEditable || target?.closest?.(FORM_CONTROLS)) return;
  const key = event.key;
  if (
    key === "Escape" &&
    view === "lesson" &&
    ui.drawer !== false &&
    window.innerWidth < 1000
  ) {
    toggleDrawer(false);
    return;
  }
  if (key === "?") {
    event.preventDefault();
    openHelp();
    return;
  }
  if (event.repeat) return;
  if (key === "/" && !event.shiftKey) {
    event.preventDefault();
    if (view !== "home") showHome();
    $("search").focus();
    return;
  }
  if (view === "lesson") {
    if (!event.shiftKey && ["ArrowLeft", "ArrowRight"].includes(key)) {
      event.preventDefault();
      moveLesson(key === "ArrowLeft" ? -1 : 1);
    } else if (!event.shiftKey && (key === "c" || key === "C")) {
      event.preventDefault();
      toggleDrawer();
    } else if (!event.shiftKey && (key === "m" || key === "M")) {
      event.preventDefault();
      completeLesson();
    } else if (/^[1-9]$/.test(key) && current >= 0) {
      const n = Number(key) - 1;
      if (n < lessons[current].answers.length) {
        event.preventDefault();
        checkAnswer(n);
      }
    }
  } else if (view === "flashcards" && typeof flashcardKey === "function") {
    flashcardKey(event);
  }
});
