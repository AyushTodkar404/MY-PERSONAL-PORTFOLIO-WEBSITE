# External Integrations — Personal Engineering Portfolio

## Integration Points

1. **WhatsApp Messaging**:
   - URL: `https://wa.me/917021729332?text=...`
   - Purpose: Direct mobile client message dispatch encoded from user contact form payload.
   - Security: Payload values URL-encoded with `encodeURIComponent`; opened with `noopener,noreferrer`.

2. **Gmail Direct Compose**:
   - URL: `https://mail.google.com/mail/?view=cm&fs=1&to=ayushtodkar404@gmail.com&su=...&body=...`
   - Purpose: Direct browser-based email compose screen without triggering OS native mail client popups.
   - Security: Sanitized and URL-encoded; opened with `noopener,noreferrer`.

3. **External Profiles**:
   - GitHub: `https://github.com/AyushTodkar404`
   - LinkedIn: `https://www.linkedin.com/in/ayush-todkar-801527411`
   - Instagram: `https://www.instagram.com/_theayushtodkar404_/?hl=en`
   - Security: Hardened with `rel="noopener noreferrer"` across all references.

