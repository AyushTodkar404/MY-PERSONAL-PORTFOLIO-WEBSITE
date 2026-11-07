# Concerns & Risk Analysis — Personal Engineering Portfolio

## Architectural & Security Concerns

1. **Content Security Policy on Static Hosts**:
   - Because GitHub Pages serves static files without custom HTTP response headers, meta-tag CSP is utilized.
   - Note: Some headers like `Strict-Transport-Security` and `X-Frame-Options` cannot be set via meta tags; however, GitHub Pages enforces HTTPS and standard edge protections by default.

2. **Clipboard API Permissions**:
   - The 1-click email copy pill utilizes `navigator.clipboard.writeText` with an automatic graceful fallback to temporary `textarea` execution (`document.execCommand('copy')`) in environments where clipboard permissions are restricted.

3. **Terminal Input Sanitization**:
   - Untrusted commands entered by visitors into the interactive console are rendered exclusively via `textContent`, eliminating any possibility of DOM-based XSS attacks.

4. **Performance & Asset Loading**:
   - Profile photos and resume are served directly without external third-party CDN latency, ensuring 100% offline and localized self-containment.
