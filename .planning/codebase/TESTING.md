# Testing & Verification Guide — Personal Engineering Portfolio

## Verification Framework

The automated verification suite lives in `test.js` and requires zero external npm packages. It executes natively in Node.js.

### Execution Command
```bash
node test.js
```

### Coverage Scope (47 Automated Assertions)
1. **Asset Integrity (7 assertions)**: Confirms existence and non-zero byte size of `index.html`, `style.css`, `dark-mode.js`, `Resume.pdf`, `profile-photo.jpeg`, `me.jpg`, and `README.md`.
2. **Script Validation (7 assertions)**: Executes `node --check` syntax check and verifies strict mode and core controllers.
3. **OWASP Hardening (9 assertions)**: Validates CSP directives, `nosniff`, `strict-origin`, and verifies that all external `target="_blank"` links have `rel="noopener noreferrer"` with zero inline script tags.
4. **WCAG AA Accessibility (5 assertions)**: Checks `lang="en"`, skip link, main landmark target ID, and semantic structure.
5. **Interactive UI Craft (12 assertions)**: Verifies terminal output, terminal input, quick command actions, project category filter pills, flagship projects, reading progress bar, back-to-top button, and copy email pill.
6. **Design System (7 assertions)**: Validates `:focus-visible`, `.skip-link`, custom CSS properties, light mode overrides, terminal styling, and back-to-top styles.
