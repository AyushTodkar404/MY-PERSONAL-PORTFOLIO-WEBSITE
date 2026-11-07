# Architecture — Personal Engineering Portfolio

## Overview
The personal engineering portfolio is an ultra-lean, static web application designed for high-performance delivery, zero-dependency hosting on GitHub Pages, and memorable user interactivity.

## Core Architectural Layers

1. **Presentation Layer (`index.html`)**:
   - Single-page architecture with semantic HTML5 landmarks (`header`, `main#main-content`, `section`, `article`, `footer`).
   - Accessible skip-link at root of body.
   - Meta-tag security policy (CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy).

2. **Design System & Theme Engine (`style.css`)**:
   - CSS custom property design tokens in `:root` and `body.light-mode`.
   - Responsive breakpoints (1024px, 768px, 480px).
   - High-contrast accessibility with `:focus-visible` ring.
   - Micro-interactions for interactive widgets (terminal console, filter pills, copy pills, reading bar).

3. **Behavioral Layer (`dark-mode.js`)**:
   - Strictly isolated IIFE (`(function () { 'use strict'; ... })()`).
   - Pure DOM manipulation using `document.createElement` and `textContent`.
   - Feature controllers:
     - Theme Controller (`localStorage` sync + system preference).
     - Responsive Mobile Navigation Drawer.
     - Scrollspy via native `IntersectionObserver`.
     - Reading Scroll Progress Indicator.
     - Back-to-Top Floating Button.
     - 1-Click Clipboard Copy Pill with feedback timer.
     - Project Category Filter (`data-filter` matching `data-category`).
     - Interactive Mini-Terminal Console with command router (`help`, `skills`, `projects`, `cloudvault`, `security`, `about`, `contact`, `clear`, `sudo`, `date`).
     - Direct Form Handlers for WhatsApp and Gmail compose URLs.

4. **Verification Layer (`test.js`)**:
   - Node-based assert engine validating 47 automated rules across OWASP, WCAG AA, JS syntax, and asset integrity.

