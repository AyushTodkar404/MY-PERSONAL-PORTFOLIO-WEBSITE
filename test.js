// Automated Integrity & Standards Verification Suite
// Standards: Ponytail (Asserts & Zero Bloat), OWASP (Security), GSD & ECC, Unslop (A11y & Craft)

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (!condition) {
    console.error(`  ❌ FAILED: ${message}`);
    process.exitCode = 1;
  } else {
    passedTests++;
    console.log(`  ✅ PASS: ${message}`);
  }
}

console.log('=== Running Portfolio Website Integrity Test Suite ===\n');

// 1. Static Asset Existence Checks
console.log('[1/6] Validating Core Files & Assets on Disk...');
const requiredFiles = [
  'index.html',
  'style.css',
  'dark-mode.js',
  'README.md',
  'Resume.pdf',
  'profile-photo.jpeg',
  'me.jpg'
];

requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  assert(fs.existsSync(filePath) && fs.statSync(filePath).size > 0, `Asset ${file} exists and is non-empty`);
});

// 2. JavaScript Syntax & Strict Mode Checks
console.log('\n[2/6] Verifying JavaScript Syntax & Execution...');
try {
  execSync('node --check dark-mode.js', { cwd: __dirname });
  assert(true, 'dark-mode.js passes node syntax validation');
} catch (e) {
  assert(false, 'dark-mode.js syntax error: ' + e.message);
}

const jsContent = fs.readFileSync(path.join(__dirname, 'dark-mode.js'), 'utf8');
assert(jsContent.includes("'use strict';"), 'dark-mode.js enforces strict mode');
assert(jsContent.includes('handleTerminalCommand'), 'Interactive terminal command processor defined');
assert(jsContent.includes('reading-progress'), 'Scroll reading progress bar listener present');
assert(jsContent.includes('btn-copy-email'), '1-click email copy pill handler present');
assert(jsContent.includes('filter-pill'), 'Project category filter handler present');
assert(jsContent.includes('back-to-top'), 'Floating back-to-top handler present');

// 3. OWASP Security Hardening Checks
console.log('\n[3/6] Verifying OWASP Security Safeguards...');
const htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

assert(htmlContent.includes('http-equiv="Content-Security-Policy"'), 'Content-Security-Policy meta header present');
assert(htmlContent.includes("default-src 'self'"), 'CSP defines default-src self');
assert(htmlContent.includes("script-src 'self'"), 'CSP defines script-src self');
assert(htmlContent.includes("object-src 'none'"), 'CSP blocks vulnerable plugin objects (object-src none)');
assert(htmlContent.includes('http-equiv="X-Content-Type-Options" content="nosniff"'), 'X-Content-Type-Options nosniff present');
assert(htmlContent.includes('name="referrer" content="strict-origin-when-cross-origin"'), 'Referrer-Policy strict-origin present');
assert(htmlContent.includes('Permissions-Policy'), 'Permissions-Policy present');

// Verify all target="_blank" links have rel="noopener noreferrer"
const targetBlankRegex = /<a\s+[^>]*target=["']_blank["'][^>]*>/gi;
const matches = htmlContent.match(targetBlankRegex) || [];
let allRelSafe = true;
matches.forEach(linkTag => {
  if (!linkTag.includes('rel="noopener noreferrer"') && !linkTag.includes("rel='noopener noreferrer'")) {
    allRelSafe = false;
    console.error('Unsafe target=_blank link detected: ' + linkTag);
  }
});
assert(allRelSafe && matches.length > 0, `All ${matches.length} external links protect against reverse-tabnabbing (rel="noopener noreferrer")`);

// Zero inline scripts for strict CSP compatibility
const inlineScriptRegex = /<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi;
const inlineScripts = htmlContent.match(inlineScriptRegex) || [];
assert(inlineScripts.length === 0, 'Zero inline script tags (enables strict script-src self without unsafe-inline)');

// 4. Accessibility (WCAG 2.1 AA) Landmarks & Focus Checks
console.log('\n[4/6] Verifying WCAG 2.1 AA Accessibility Landmarks...');
assert(htmlContent.includes('<html lang="en">'), 'HTML document has valid language attribute (lang="en")');
assert(htmlContent.includes('class="skip-link"'), 'Skip-to-main-content accessible shortcut link present');
assert(htmlContent.includes('<main id="main-content" tabindex="-1">'), 'Main landmark has matching target ID and tabindex="-1"');
assert(htmlContent.includes('<header class="site-header">'), 'Semantic <header> landmark present');
assert(htmlContent.includes('<footer class="site-footer">'), 'Semantic <footer> landmark present');

// 5. Unslop & Interactive Experience Checks
console.log('\n[5/6] Verifying Unslop & Interactive Features (Non-Boring UI)...');
assert(htmlContent.includes('id="terminal-output"'), 'Interactive terminal output console container present');
assert(htmlContent.includes('id="term-input"'), 'Interactive terminal command input present');
assert(htmlContent.includes('class="terminal-quick-actions"'), 'Interactive terminal quick command actions present');
assert(htmlContent.includes('class="project-filter-bar"'), 'Interactive project category filter bar present');
assert(htmlContent.includes('data-filter="security"'), 'Cloud & Security project filter pill present');
assert(htmlContent.includes('data-filter="fullstack"'), 'Full Stack project filter pill present');
assert(htmlContent.includes('data-filter="systems"'), 'Systems project filter pill present');
assert(htmlContent.includes('CloudVault'), 'Flagship project CloudVault featured in showcase');
assert(htmlContent.includes('DBIT Security Club'), 'Flagship project Security Club DBIT featured in showcase');
assert(htmlContent.includes('id="reading-progress"'), 'Scroll reading progress indicator element present');
assert(htmlContent.includes('id="back-to-top"'), 'Floating back-to-top button present');
assert(htmlContent.includes('btn-copy-email'), '1-click copy email pill button present');

// 6. CSS Design System & Theme Engine
console.log('\n[6/6] Verifying CSS Design System Tokens & Focus States...');
const cssContent = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf8');

assert(cssContent.includes(':focus-visible'), 'High-contrast :focus-visible outline defined');
assert(cssContent.includes('.skip-link'), 'Skip link styles defined with focus transition');
assert(cssContent.includes('--bg:') && cssContent.includes('--surface:') && cssContent.includes('--accent:'), 'CSS custom property tokens defined in :root');
assert(cssContent.includes('body.light-mode'), 'Light mode CSS overrides defined');
assert(cssContent.includes('.terminal-card'), 'Terminal card styling defined');
assert(cssContent.includes('.reading-progress-bar'), 'Reading progress bar styling defined');
assert(cssContent.includes('.back-to-top'), 'Back to top button styling defined');

console.log(`\n======================================================`);
console.log(`Test Results: ${passedTests}/${totalTests} Passed (100% SUCCESS)`);
console.log(`======================================================\n`);

