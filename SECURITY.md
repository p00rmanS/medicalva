# Security and privacy

This is a public static training website. It has no login, API, backend, uploads, analytics, external JavaScript, or environment configuration. Use fictional information only. It is not a system for storing or processing patient information.

Completion IDs and the last lesson index are stored under `medical-va-learning-v1` in localStorage. They stay on that browser and device. Clearing site storage resets progress. Imported values are validated before use. Shared devices share this progress.

The browser policy blocks inline scripts, third-party scripts, network API requests, forms, plugins, and inline styles. Controls use event listeners. Plain-text lesson metadata is escaped before HTML rendering. Curriculum bodies are trusted HTML reviewed in source control; do not replace them with user input or remote HTML. Security tests reject active content and unsafe URLs in lesson bodies.

GitHub Pages cannot apply this project's own HTTP response headers. The content security policy is delivered through an HTML meta tag; frame-ancestors protection cannot be enforced that way. There is no sensitive authenticated flow to protect here.

`.gitignore` excludes environment files, private keys, local hosting metadata, old archives, and the original Sites checkout. This is defense in depth: review `git diff --cached` before each push. Never place secrets in client JavaScript; GitHub Actions secrets must remain in server-side workflows. This deployment requires no custom secrets.

Deployment actions are pinned to full commits and permissions are scoped to each job. Pull requests verify code without publishing. Keep action pins and the development formatter current after reviewing updates.

To report an issue, contact the repository owner without including credentials or patient data in a public issue.
