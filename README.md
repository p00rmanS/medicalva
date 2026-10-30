# MedVA Academy

A beginner-to-professional training hub for medical virtual assistants and medical coders. It has 184 lessons in two courses, English and Taglish explanations, "What to remember" summaries, pro tips, practice questions, coder cheat sheets, and flashcards. Progress stays in the learner's browser. Lesson completion records study progress; it is not certification or proof of professional competence.

## Courses

1. **Medical VA Foundations** (68 lessons, 13 sections): role and boundaries, privacy, calls, scheduling, referrals, insurance workflows, client onboarding, eight comprehensive workshops, eligibility verification, credentialing support, patient billing calls, medication vocabulary, spreadsheets, remote-work habits, lab and imaging coordination, portal support, breach response, and in-depth HIPAA Privacy and Security Rule lessons.
2. **Medical Coding and Billing Career Track** (116 lessons, 13 sections): terminology and anatomy (including six in-depth medical language lessons by body system), ICD-10-CM, CPT, HCPCS, E/M leveling, modifiers, global surgery and NCCI, specialty coding (hospital and emergency, skin, orthopedic, behavioral health, obstetric, anesthesia, cardiology testing, pediatrics, screening, operative reports), deeper diagnosis coding (cardiovascular, respiratory, diabetes and kidney, neoplasms, injuries and drug reactions), an inpatient coding primer, clinical documentation integrity, a CPC exam blueprint map and general-guidelines lessons, the CPT 20000 to 60000 surgery series in depth, radiology, pathology, Medicine section and HCPCS Level II deep dives, more ICD-10-CM chapters (symptoms, infections and sepsis, blood disorders, substance use, obesity and nutrition), workers' compensation and Medicaid billing, telehealth, pregnancy and newborn coding, mental health and nervous system coding, digestive and urinary coding, laboratory CPT, anesthesia payment, facility (UB-04) billing, four CPC-style case practice sets, working as a Philippines-based contractor, remote coding tools, finding clients safely, deep dives on E/M decision making, modifier 59 and NCCI, denial management programs, compliance programs, and Medicare, claims, remittance codes, denials, patient billing, A/R metrics, compliance, risk adjustment, quality reporting, audits, secure remote work, certification roadmap (AAPC and AHIMA), four timed practice sets, interview preparation, packaging coder VA services, and a capstone.

CPT is copyrighted by the American Medical Association. The lessons paraphrase concepts and cite code numbers only. Use a licensed, current code book for real coding, and verify every rule against the current year's edition.

## Using the site

- **Course content sidebar:** collapsible sections with progress, like Udemy or Coursera. Hide or show it with the Course content button or the `C` key.
- **Keyboard shortcuts:** `←` / `→` previous and next lesson, `1`–`3` choose an answer, `M` mark complete, `C` toggle course content, `/` search, `?` list all shortcuts. Flashcards use `Space`, `←` / `→`, `K`, `A`, and `S`. Shortcuts pause while you type in a field.
- **Reference:** `#/reference` has modifiers, E/M levels, remittance codes, ICD-10-CM chapters, CPT sections, HCPCS letters, place of service codes, CMS-1500 boxes, and abbreviations.
- **Flashcards:** `#/flashcards` drills every reference row and remembers the cards you know.
- **Notes:** each lesson has a private notes box saved in your browser only.
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
- `site/coding-build.js`, `coding-foundations.js`, `coding-procedures.js`, `coding-business.js`, `coding-specialty.js`, `coding-extra.js`, `coding-more.js`, `coding-systems.js`, `coding-depth.js`, `coding-blueprint.js`, `coding-surgery.js`, `coding-icd2.js`, `coding-payers2.js`, `coding-cases.js`, `va-business.js`, `coding-breadth.js`: Medical Coding and Billing Career Track. `site/va-extra.js`, `va-more.js`, `va-ops.js`, `va-depth.js`: extra Foundations lessons (registered in the Foundations course in `learning.js`).
- `site/mentor-notes.js`: Taglish explanations and pro tips. `site/remember-notes.js`: takeaways for the foundations lessons. Coding lessons carry their own.
- `site/reference.js`: cheat sheet data that also powers the flashcards. `site/distractors.js`: written wrong answers for the practice checks.
- `site/learning.js`: courses, sections, lesson player, course content sidebar, progress, preferences, and routing.
- `site/quick-nav.js`: Previous/Next bar and keyboard shortcuts. `site/study-tools.js`: reference and flashcards. `site/start.js`: startup.
- `tests/`: curriculum, behavior, security, and lesson-HTML regression checks.

Lesson ids are append-only so saved progress survives curriculum additions. Add new lessons at the end of a lesson file and register them in a section in `learning.js`.

## GitHub Pages

The workflow verifies every push and publishes only `site/` from `main`. Enable Settings → Pages → Source → GitHub Actions in p00rmanS/medicalva. The expected address is https://p00rmanS.github.io/medicalva/ once deployment succeeds. Pull requests run checks without deploying.

All asset paths are relative so the project works under `/medicalva/`. GitHub Pages serves public static files: never put credentials, patient information, or private documents in this repository or website. See SECURITY.md.
