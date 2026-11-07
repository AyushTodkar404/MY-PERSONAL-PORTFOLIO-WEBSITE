# Tech Stack — Personal Engineering Portfolio

## Technology Choices

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Markup** | HTML5 (Semantic) | Zero framework overhead, instantaneous parsing, native accessibility landmarks. |
| **Styling** | Modern CSS3 (Custom Properties) | Native CSS variables, zero runtime CSS-in-JS cost, fluid responsive grid & flexbox. |
| **Scripting** | Vanilla ES6+ JavaScript | Strict mode, zero external bundlers/transpilers, sub-10ms execution, high FPS. |
| **Theme Engine** | Custom LocalStorage + CSS variables | Zero layout shift or theme flashing on page load. |
| **Security** | OWASP Hardened Meta Tags | In-browser CSP (`script-src 'self'`), `X-Content-Type-Options: nosniff`. |
| **Verification** | Node.js Test Runner (`test.js`) | Lightweight built-in assertion tests, zero external npm dependencies. |
| **Hosting** | GitHub Pages / Static CDN | Edge cached, HTTPS-enforced, global CDN distribution. |
