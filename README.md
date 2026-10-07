# Medical VA First Steps

A beginner training hub with 54 lessons, English and Taglish explanations, pro tips, practice questions, and eight comprehensive workshops. Progress stays in the learner's browser. Lesson completion records study progress; it is not certification or proof of professional competence.

## Run locally

Install Node.js 22 or later, then run:

```sh
npm run dev
```

Open http://127.0.0.1:4173/medicalva/. No environment variables or API keys are required. The website has no runtime dependencies or build step.

```sh
npm test
npm ci
npm run format:check
```

`npm ci` installs only the pinned development formatter. It is unnecessary for viewing the site or running tests.

## Source guide

- `site/index.html`, `base.css`, and `usability.css`: layout and responsive styling.
- `site/app.js`, `more-lessons.js`, `pro-lessons.js`, `client-lessons.js`, `workshops.js`, and `advanced-lessons.js`: curriculum.
- `site/mentor-notes.js`: Taglish explanations and mentor tips.
- `site/learning.js`: rendering, search, practice checks, and browser-local progress.
- `site/quick-nav.js`: sticky Previous/Next controls and left/right keyboard shortcuts.
- `tests/`: curriculum flow and security regression checks.

Use Previous/Next with mouse or touch. Left/right arrow keys work when reading a lesson and do not interrupt form controls. The lesson picker and search provide direct access to topics.

## GitHub Pages

The workflow verifies every push and publishes only `site/` from `main`. Enable **Settings → Pages → Source → GitHub Actions** in `p00rmanS/medicalva`. The expected address is https://p00rmanS.github.io/medicalva/ once deployment succeeds. Pull requests run checks without deploying. The workflow follows [GitHub's Pages guidance](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

All asset paths are relative so the project works under `/medicalva/`. GitHub Pages serves public static files: never put credentials, patient information, or private documents in this repository or website. See [SECURITY.md](SECURITY.md).
