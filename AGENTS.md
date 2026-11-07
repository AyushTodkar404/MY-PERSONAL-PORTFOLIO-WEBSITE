# AGENTS.md — Development & Engineering Guidelines

This repository follows the unified standards across five core engineering frameworks:
1. **GSD (Get Shit Done)**: Spec-driven, atomic changes, structured codebase documentation in `.planning/codebase/`.
2. **Ponytail (Lazy Senior Dev Mode)**: Minimal code, zero bloat, native web capabilities over heavy bundlers/libraries, assert-based verification.
3. **ECC (Agentic Engineering)**: Conventional commits, defensive validation, clean modular code.
4. **OWASP (Static Web Defense)**: Strict CSP, subresource integrity, reverse-tabnabbing protection (`rel="noopener noreferrer"`), zero unescaped DOM injections.
5. **Unslop (UI Craft & Character)**: Non-boring interface, authentic engineer persona, interactive terminal console, high contrast WCAG 2.1 AA accessibility, smooth theme switching.

---

## 1. Operating Rules

- **Zero Third-Party Bundlers**: This is a pure static website. Never introduce Node build systems, npm bundling steps, Webpack/Vite, or heavyweight CSS frameworks unless explicitly directed.
- **Safe DOM Injection**: Never use raw `innerHTML` with untrusted or user-provided input. Use `document.createElement`, `textContent`, and safe DOM manipulation.
- **Security Headers**: Maintain strict CSP meta tags in `<head>`, with `script-src 'self'` and `object-src 'none'`.
- **Anti-Tabnabbing**: Every external `target="_blank"` link MUST have `rel="noopener noreferrer"`.
- **Accessibility**:
  - Always keep the skip link `<a href="#main-content" class="skip-link">Skip to main content</a>`.
  - Maintain `:focus-visible` high-contrast rings for all interactive elements.
  - Preserve WCAG AA color contrast across both dark and light modes.
- **Testing**: Run `node test.js` before every commit to ensure 100% pass rate.

