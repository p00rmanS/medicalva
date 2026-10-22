// Shared builder for the medical coding career track. Lesson ids are append-only (54 and up).
const codingLessons = [];
function renderCodingBody(l) {
  const list = (items) => items.map((x) => `<li>${x}</li>`).join("");
  const terms = l.terms
    ? `<h2>Key terms</h2>
<dl class="terms">${l.terms.map(([t, d]) => `<div><dt>${t}</dt><dd>${d}</dd></div>`).join("")}</dl>`
    : "";
  const lab = l.lab
    ? `<h2>Code lab — fictional charts</h2>
<p>Work each item on paper first. Then open the answer and compare your reasoning, not only the code.</p>
${l.lab
  .map(
    ([prompt, answer]) => `<div class="lab-item">
<p>${prompt}</p>
<details class="worked-answer"><summary>Show the answer</summary><p>${answer}</p></details>
</div>`,
  )
  .join("")}`
    : "";
  return `<h2>What you will learn</h2>
<ul>${list(l.objectives)}</ul>
<h2>Core concepts</h2>
${l.concept}${terms}
<h2>Step-by-step workflow</h2>
<ol>${list(l.steps)}</ol>${lab}
<h2>Case file — fictional training</h2>
<p>${l.case}</p>
<details class="worked-answer">
<summary>Compare with the model response</summary>
<p>${l.model}</p>
<p>Compare your reasoning, not only your wording. Employer policy, payer rules, and the current code books decide live work.</p>
</details>
<h2>Common mistakes to avoid</h2>
<ul>${list(l.mistakes)}</ul>
<h2>Your assignment</h2>
<ol>${list(l.drills)}</ol>
<h2>Review before moving on</h2>
<ul>${list(l.rubric)}</ul>
<p>Label each criterion “complete,” “needs revision,” or “needs supervisor guidance.” Marking the lesson complete records study progress. It does not establish coding competence or a credential.</p>${l.source ? `<p class="small">Reference: ${l.source}</p>` : ""}`;
}
function addCodingLessons(raw) {
  raw.forEach((l) => {
    codingLessons.push({ ...l, body: renderCodingBody(l) });
    mentorNotes.push([l.taglish, l.tip, l.mentor]);
  });
}
