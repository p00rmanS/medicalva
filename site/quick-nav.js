// Keep lesson navigation available at every scroll position.
const quickNav = document.createElement("nav");
quickNav.className = "quick-nav hidden";
quickNav.setAttribute("aria-label", "Quick lesson navigation");
quickNav.innerHTML =
  '<button id="quickPrevious" class="secondary" data-action="move" data-direction="-1" aria-keyshortcuts="ArrowLeft"><span aria-hidden="true">←</span> Previous</button><div class="quick-center"><span id="quickPosition"></span><button class="quick-home" data-action="home">All lessons</button><span class="keyboard-tip">Use ← / → keys</span></div><button id="quickNext" class="primary" data-action="move" data-direction="1" aria-keyshortcuts="ArrowRight">Next <span aria-hidden="true">→</span></button>';
document.body.appendChild(quickNav);
function updateQuickNav() {
  const inLesson = current >= 0;
  quickNav.classList.toggle("hidden", !inLesson);
  document.body.classList.toggle("reading-lesson", inLesson);
  if (!inLesson) return;
  const position = order.indexOf(current);
  $("quickPosition").textContent = `Lesson ${position + 1} of ${order.length}`;
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
      : "Finish browsing and return to all lessons",
  );
}
function moveLesson(direction) {
  if (current < 0 || ![-1, 1].includes(direction)) return;
  const destination = order.indexOf(current) + direction;
  if (destination < 0 || destination >= order.length) showHome();
  else openLesson(order[destination]);
}
document.addEventListener("keydown", (event) => {
  if (
    current < 0 ||
    event.defaultPrevented ||
    event.repeat ||
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey ||
    !["ArrowLeft", "ArrowRight"].includes(event.key)
  )
    return;
  const target = event.target;
  if (
    target?.isContentEditable ||
    target?.closest?.(
      'input,textarea,select,[contenteditable]:not([contenteditable="false"]),[role="slider"],[role="spinbutton"],[role="combobox"],[role="listbox"],[role="radio"],[role="tab"]',
    )
  )
    return;
  event.preventDefault();
  moveLesson(event.key === "ArrowLeft" ? -1 : 1);
});
updateQuickNav();
