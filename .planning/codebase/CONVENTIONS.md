# Conventions & Standards — Personal Engineering Portfolio

## Coding Conventions

### HTML5
- Always declare valid language code: `<html lang="en">`.
- Wrap content inside `<main id="main-content" tabindex="-1">`.
- All external links opening new tabs MUST have `target="_blank" rel="noopener noreferrer"`.
- All icon-only interactive controls MUST have explicit `aria-label` and `title` attributes.
- No inline `<script>` blocks inside HTML; all script behavior lives in `dark-mode.js`.

### CSS3
- Use `:root` for global variables (`--bg`, `--surface`, `--accent`, `--border`, `--text`).
- Provide explicit light mode overrides in `body.light-mode`.
- Never remove focus rings without providing high-contrast `:focus-visible` replacements.
- Touch target sizes for interactive elements must meet or exceed 44x44px where practical.

### JavaScript
- Always wrap files in IIFE and enable `'use strict';`.
- Guard all element selections with null-checks before adding event listeners.
- Use `textContent` or `document.createElement()` instead of `innerHTML` when handling user input.
- Keep event handlers passive for performance on scroll events (`{ passive: true }`).

### Git & Delivery
- Follow Conventional Commits: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`.
