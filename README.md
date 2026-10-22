# MedVA Academy

A beginner-to-professional training hub for medical virtual assistants and medical coders. It has 109 lessons in two courses, English and Taglish explanations, "What to remember" summaries, pro tips, practice questions, coder cheat sheets, and flashcards. Progress stays in the learner's browser. Lesson completion records study progress; it is not certification or proof of professional competence.

## Courses

1. **Medical VA Foundations** (60 lessons, 12 sections): role and boundaries, privacy, calls, scheduling, referrals, insurance workflows, client onboarding, eight comprehensive workshops, eligibility verification, credentialing support, patient billing calls, medication vocabulary, spreadsheets, and remote-work habits.
2. **Medical Coding and Billing Career Track** (49 lessons, 8 sections): terminology and anatomy, ICD-10-CM, CPT, HCPCS, E/M leveling, modifiers, global surgery and NCCI, specialty coding (hospital and emergency, skin, orthopedic, behavioral health, obstetric, anesthesia, operative reports), claims, remittance codes, denials, patient billing, A/R metrics, compliance, risk adjustment, quality reporting, audits, secure remote work, certification roadmap (AAPC and AHIMA), three timed practice sets, interview preparation, packaging coder VA services, and a capstone.

CPT is copyrighted by the American Medical Association. The lessons paraphrase concepts and cite code numbers only. Use a licensed, current code book for real coding, and verify every rule against the current year's edition.

## Using the site

- **Course content sidebar:** collapsible sections with progress, like Udemy or Coursera. Hide or show it with the Course content button or the `C` key.
- **Keyboard shortcuts:** `←` / `→` previous and next lesson, `1`–`3` choose an answer, `M` mark complete, `C` toggle course content, `/` search, `?` list all shortcuts. Flashcards use `Space`, `←` / `→`, `K`, `A`, and `S`. Shortcuts pause while you type in a field.
- **Reference:** `#/reference` has modifiers, E/M levels, remittance codes, ICD-10-CM chapters, CPT sections, HCPCS letters, place of service codes, CMS-1500 boxes, and abbreviations.
- **Flashcards:** `#/flashcards` drills every reference row and remembers the cards you know.
- **Themes:** light, dark, or match the device.
- Every lesson, reference sheet, and the flashcards have shareable links such as `#/lesson/66`. Lesson links use the stable lesson id, so they keep working when new lessons are added.

## Run locally

Install Node.js 22 or later, then run:

```bash
npm run dev
```

Open http://127.0.0.1:4173/medicalva/. No environment variables or API keys are required. The website has no runtime dependencies or build step.

```bash
npm test
npm ci
npm run format:check
```

`npm ci` installs only the pinned development formatter. It is unnecessary for viewing the site or running tests.

## Source guide

- `site/index.html`, `styles.css`, `theme.js`: layout, design tokens, light and dark themes.
- `site/app.js`, `more-lessons.js`, `pro-lessons.js`, `client-lessons.js`, `workshops.js`, `advanced-lessons.js`: Medical VA Foundations curriculum.
- `site/coding-build.js`, `coding-foundations.js`, `coding-procedures.js`, `coding-business.js`, `coding-specialty.js`, `coding-extra.js`: Medical Coding and Billing Career Track. `site/va-extra.js`: extra Foundations lessons (registered in the Foundations course in `learning.js`).
- `site/mentor-notes.js`: Taglish explanations and pro tips. `site/remember-notes.js`: takeaways for the foundations lessons. Coding lessons carry their own.
- `site/reference.js`: cheat sheet data that also powers the flashcards.
- `site/learning.js`: courses, sections, lesson player, course content sidebar, progress, preferences, and routing.
- `site/quick-nav.js`: Previous/Next bar and keyboard shortcuts. `site/study-tools.js`: reference and flashcards. `site/start.js`: startup.
- `tests/`: curriculum, behavior, security, and lesson-HTML regression checks.

Lesson ids are append-only so saved progress survives curriculum additions. Add new lessons at the end of a lesson file and register them in a section in `learning.js`.

## GitHub Pages

The workflow verifies every push and publishes only `site/` from `main`. Enable Settings → Pages → Source → GitHub Actions in p00rmanS/medicalva. The expected address is https://p00rmanS.github.io/medicalva/ once deployment succeeds. Pull requests run checks without deploying.

All asset paths are relative so the project works under `/medicalva/`. GitHub Pages serves public static files: never put credentials, patient information, or private documents in this repository or website. See SECURITY.md.
