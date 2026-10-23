// Reference sheets and flashcards.
let deck = [],
  deckIndex = 0,
  deckFlipped = false,
  deckTopic = "all",
  hideKnown = false,
  knownCards = new Set(),
  deckReady = false;
try {
  const savedCards = JSON.parse(
    localStorage.getItem("medical-va-cards-v1") || "[]",
  );
  if (Array.isArray(savedCards))
    knownCards = new Set(savedCards.filter((x) => typeof x === "string"));
} catch {}
const cardKey = (c) => `${c.topic}:${c.front}`;
function saveCards() {
  try {
    localStorage.setItem(
      "medical-va-cards-v1",
      JSON.stringify([...knownCards]),
    );
  } catch {}
}

// ---- Reference ------------------------------------------------------------
function renderReference() {
  const query = $("refFilter").value.trim().toLowerCase();
  let shown = 0;
  $("refBody").innerHTML = referenceData
    .map((section) => {
      const rows = section.rows.filter(
        (row) =>
          !query ||
          `${section.title} ${row.join(" ")}`.toLowerCase().includes(query),
      );
      shown += rows.length;
      if (!rows.length) return "";
      return `<section class="ref-section" id="ref-${section.id}">
<h2>${escapeText(section.title)}</h2>
<p class="group-note">${escapeText(section.intro)}</p>
<div class="table-wrap"><table class="ref-table"><thead><tr>${section.cols.map((c) => `<th scope="col">${escapeText(c)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell, n) => (n === 0 ? `<th scope="row">${escapeText(cell)}</th>` : `<td>${escapeText(cell)}</td>`)).join("")}</tr>`).join("")}</tbody></table></div>
</section>`;
    })
    .join("");
  $("refStatus").textContent = query
    ? `${shown} matching row${shown === 1 ? "" : "s"}`
    : "";
  $("refEmpty").classList.toggle("hidden", !query || shown > 0);
}
function showReference(section, writeHash = true) {
  current = -1;
  setView("reference");
  if (!$("refChips").innerHTML)
    $("refChips").innerHTML = referenceData
      .map(
        (s) =>
          `<button data-action="ref-jump" data-target="ref-${s.id}">${escapeText(s.title)}</button>`,
      )
      .join("");
  renderReference();
  if (writeHash) setHash(section ? `#/reference/${section}` : "#/reference");
  const target = section && document.getElementById(`ref-${section}`);
  if (target) target.scrollIntoView({ block: "start" });
  else {
    window.scrollTo(0, 0);
    $("referenceTitle").focus({ preventScroll: true });
  }
}

// ---- Flashcards -------------------------------------------------------------
function buildDeck(shuffle) {
  deck = flashcardDeck.filter(
    (c) =>
      (deckTopic === "all" || c.topic === deckTopic) &&
      !(hideKnown && knownCards.has(cardKey(c))),
  );
  if (shuffle)
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  deckIndex = 0;
  deckFlipped = false;
}
function renderCard() {
  const total = flashcardDeck.length,
    known = [...knownCards].filter((k) =>
      flashcardDeck.some((c) => cardKey(c) === k),
    ).length;
  $("deckSummary").textContent = `${known} of ${total} cards marked as known`;
  if (!deck.length) {
    $("cardTopic").textContent = "";
    $("cardFace").textContent = hideKnown
      ? "You know every card in this deck. Uncheck “Hide cards I know” to review them."
      : "No cards in this deck.";
    $("cardCount").textContent = "";
    $("cardFlip").classList.add("hidden");
    $("flashCard").classList.remove("flipped");
    return;
  }
  const card = deck[deckIndex];
  $("cardFlip").classList.remove("hidden");
  $("cardTopic").textContent = card.topicTitle;
  $("cardFace").textContent = deckFlipped ? card.back : card.front;
  $("flashCard").classList.toggle("flipped", deckFlipped);
  $("cardFlip").textContent = deckFlipped
    ? "Show prompt (Space)"
    : "Show answer (Space)";
  $("cardCount").textContent = `Card ${deckIndex + 1} of ${deck.length}${
    knownCards.has(cardKey(card)) ? " · marked as known" : ""
  }`;
}
function showFlashcards(writeHash = true) {
  current = -1;
  setView("flashcards");
  if (!deckReady) {
    $("deckSelect").innerHTML =
      '<option value="all">All decks</option>' +
      referenceData
        .map((s) => `<option value="${s.id}">${escapeText(s.title)}</option>`)
        .join("");
    deckReady = true;
    buildDeck(false);
  }
  if (writeHash) setHash("#/flashcards");
  renderCard();
  window.scrollTo(0, 0);
  $("flashcardsTitle").focus({ preventScroll: true });
}
function moveCard(direction) {
  if (!deck.length) return;
  deckIndex = (deckIndex + direction + deck.length) % deck.length;
  deckFlipped = false;
  renderCard();
}
function flipCard() {
  if (!deck.length) return;
  deckFlipped = !deckFlipped;
  renderCard();
}
function markCard(known) {
  if (!deck.length) return;
  const key = cardKey(deck[deckIndex]);
  if (known) knownCards.add(key);
  else knownCards.delete(key);
  saveCards();
  if (known && hideKnown) {
    deck.splice(deckIndex, 1);
    if (deckIndex >= deck.length) deckIndex = 0;
    deckFlipped = false;
    renderCard();
  } else moveCard(1);
}
function flashcardKey(event) {
  const key = event.key;
  const onButton = event.target?.closest?.("button,a");
  if ((key === " " || key === "Enter") && !onButton) {
    event.preventDefault();
    flipCard();
  } else if (key === "ArrowLeft" || key === "ArrowRight") {
    event.preventDefault();
    moveCard(key === "ArrowLeft" ? -1 : 1);
  } else if (key === "k" || key === "K") markCard(true);
  else if (key === "a" || key === "A") markCard(false);
  else if (key === "s" || key === "S") {
    buildDeck(true);
    renderCard();
  }
}
document.addEventListener("click", (event) => {
  const button = event.target.closest?.("button[data-action]");
  if (!button || button.disabled) return;
  switch (button.dataset.action) {
    case "ref-jump": {
      const target = document.getElementById(button.dataset.target);
      if (target) target.scrollIntoView({ block: "start" });
      break;
    }
    case "flip":
      flipCard();
      break;
    case "card-prev":
      moveCard(-1);
      break;
    case "card-next":
      moveCard(1);
      break;
    case "card-known":
      markCard(true);
      break;
    case "card-again":
      markCard(false);
      break;
    case "shuffle":
      buildDeck(true);
      renderCard();
      break;
    case "clear-ref":
      $("refFilter").value = "";
      renderReference();
      break;
  }
});
$("refFilter").addEventListener("input", renderReference);
$("deckSelect").addEventListener("change", (event) => {
  deckTopic = event.target.value;
  buildDeck(false);
  renderCard();
});
$("hideKnown").addEventListener("change", (event) => {
  hideKnown = Boolean(event.target.checked);
  buildDeck(false);
  renderCard();
});
