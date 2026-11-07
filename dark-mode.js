// Theme, Navigation, Interactive Terminal & Interaction Controller
// Standards: Unslop (Character & Craft), Ponytail (Zero Bloat), OWASP (Strict XSS-Free Safe DOM), GSD & ECC

(function () {
  'use strict';

  // ==========================================================================
  // 1. Theme Controller (Dark / Light)
  // ==========================================================================
  const themeToggle = document.getElementById('theme-toggle');
  const sunIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
  const moonIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
  }

  function updateThemeUI() {
    if (!themeToggle) return;
    const isLight = document.body.classList.contains('light-mode');
    themeToggle.innerHTML = isLight ? moonIcon : sunIcon;
    const label = isLight ? 'Switch to dark mode' : 'Switch to light mode';
    themeToggle.setAttribute('aria-label', label);
    themeToggle.title = label;
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      updateThemeUI();
    });
    updateThemeUI();
  }

  // ==========================================================================
  // 2. Responsive Mobile Menu Controller
  // ==========================================================================
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    function toggleMobileMenu(open) {
      const willOpen = typeof open === 'boolean' ? open : !navMenu.classList.contains('is-open');
      navMenu.classList.toggle('is-open', willOpen);
      mobileToggle.classList.toggle('is-active', willOpen);
      mobileToggle.setAttribute('aria-expanded', String(willOpen));
      document.body.classList.toggle('menu-locked', willOpen);
    }

    mobileToggle.addEventListener('click', () => toggleMobileMenu());

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggleMobileMenu(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        toggleMobileMenu(false);
      }
    });

    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('is-open') &&
          !navMenu.contains(e.target) &&
          !mobileToggle.contains(e.target)) {
        toggleMobileMenu(false);
      }
    });
  }

  // ==========================================================================
  // 3. Scrollspy: Highlight active nav link dynamically
  // ==========================================================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (sections.length > 0 && navLinks.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === '#' + id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -70% 0px'
    });

    sections.forEach(section => observer.observe(section));
  }

  // ==========================================================================
  // 4. Reading Scroll Progress Bar & Back to Top Controller
  // ==========================================================================
  const progressBar = document.getElementById('reading-progress');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (progressBar && docHeight > 0) {
      const scrollPercent = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
      progressBar.style.width = scrollPercent + '%';
    }

    if (backToTopBtn) {
      if (scrollTop > 350) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================================================
  // 5. One-Click Copy Email Pill
  // ==========================================================================
  const copyEmailButtons = document.querySelectorAll('.btn-copy-email');
  copyEmailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const email = 'ayushtodkar404@gmail.com';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          showCopyFeedback(btn);
        }).catch(() => {
          fallbackCopyText(email, btn);
        });
      } else {
        fallbackCopyText(email, btn);
      }
    });
  });

  function showCopyFeedback(button) {
    const badge = button.querySelector('.copy-status-badge');
    if (!badge) return;
    const originalText = badge.textContent;
    button.classList.add('copied');
    badge.textContent = 'Copied! ✓';
    setTimeout(() => {
      button.classList.remove('copied');
      badge.textContent = originalText;
    }, 2000);
  }

  function fallbackCopyText(text, button) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showCopyFeedback(button);
    } catch (e) {
      // noop
    }
    document.body.removeChild(textarea);
  }

  // ==========================================================================
  // 6. Project Category Filter
  // ==========================================================================
  const filterPills = document.querySelectorAll('.filter-pill');
  const projectCards = document.querySelectorAll('.project-item');

  if (filterPills.length > 0 && projectCards.length > 0) {
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const category = pill.getAttribute('data-filter');

        filterPills.forEach(p => {
          p.classList.remove('active');
          p.setAttribute('aria-selected', 'false');
        });
        pill.classList.add('active');
        pill.setAttribute('aria-selected', 'true');

        projectCards.forEach(card => {
          const cardCat = card.getAttribute('data-category') || '';
          if (category === 'all' || cardCat.includes(category)) {
            card.classList.remove('is-hidden');
          } else {
            card.classList.add('is-hidden');
          }
        });
      });
    });
  }

  // ==========================================================================
  // 7. Interactive Mini-Terminal Console Widget (OWASP Safe DOM)
  // ==========================================================================
  const termForm = document.getElementById('terminal-form');
  const termInput = document.getElementById('term-input');
  const termOutput = document.getElementById('terminal-output');
  const termQuickBtns = document.querySelectorAll('.term-btn');

  function appendTermRow(text, className, isCommand) {
    if (!termOutput) return;
    const row = document.createElement('div');
    row.className = 'term-row' + (className ? ' ' + className : '');

    if (isCommand) {
      const promptSpan = document.createElement('span');
      promptSpan.className = 'term-prompt';
      promptSpan.textContent = 'visitor@ayush.dev:~$ ';
      row.appendChild(promptSpan);

      const cmdSpan = document.createElement('span');
      cmdSpan.className = 'term-cmd-text';
      cmdSpan.textContent = text;
      row.appendChild(cmdSpan);
    } else {
      row.textContent = text;
    }

    termOutput.appendChild(row);
    termOutput.scrollTop = termOutput.scrollHeight;
  }

  function handleTerminalCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    appendTermRow(cmd, '', true);

    switch (cmd) {
      case 'help':
        appendTermRow('⚡ Available commands:', 'term-accent');
        appendTermRow('  skills      - List programming languages, cloud & cybersecurity tools');
        appendTermRow('  projects    - List all featured software engineering projects');
        appendTermRow('  cloudvault  - Deep dive into the Azure 5-pillar CloudVault architecture');
        appendTermRow('  security    - Details on DBIT Security Club & CTF sandbox portal');
        appendTermRow('  about       - Academic background, DBIT honors & mission');
        appendTermRow('  contact     - View email, LinkedIn, WhatsApp & GitHub endpoints');
        appendTermRow('  date        - Print current timestamp');
        appendTermRow('  clear       - Wipe the terminal output buffer');
        break;

      case 'skills':
        appendTermRow('🛠️ Technical Arsenal:', 'term-accent');
        appendTermRow('  • Languages: Python, JavaScript (ES6+), C/C++, Java, SQL, HTML5/CSS3');
        appendTermRow('  • Cloud & Security: Azure Blob Storage, AES-256-GCM, Argon2id, Ethical Hacking, OWASP Top 10');
        appendTermRow('  • Frameworks: Flask, React.js, Node.js, Express.js, Tailwind CSS');
        appendTermRow('  • Systems & Tools: Linux, Git, Docker, Banker\'s Algorithm, REST APIs');
        break;

      case 'projects':
        appendTermRow('🚀 Featured Engineering Projects (6 Total):', 'term-accent');
        appendTermRow('  1. CloudVault — Secure cloud document vault with Azure Blob Storage & AES-256-GCM');
        appendTermRow('  2. DBIT Security Club (Full Stack) — Club community portal, event REST APIs & member management');
        appendTermRow('  3. DBIT Security Club (Static) — High-speed static SPA & in-browser CTF challenge sandbox');
        appendTermRow('  4. FixMySpot — Full-stack municipal civic issue tracker with maps & offline caching');
        appendTermRow('  5. Deadlock Detector — Operating systems resource allocation graph & Banker\'s Algorithm simulator');
        appendTermRow('  6. Personal Portfolio — Lean zero-bloat developer portfolio with terminal CLI emulator');
        break;

      case 'cloudvault':
        appendTermRow('🔒 CloudVault Architecture:', 'term-accent');
        appendTermRow('  • Azure Blob Storage backend with AES-256-GCM envelope encryption & SHA-256 integrity');
        appendTermRow('  • Argon2id password hashing + automated 55-extension file upload security scanner');
        appendTermRow('  • Full Azure-synchronized recycle bin lifecycle (trash/restore/purge) & time-bounded sharing');
        appendTermRow('  • GitHub: https://github.com/AyushTodkar404/cloudvault');
        break;

      case 'security':
        appendTermRow('🛡️ DBIT Security Club Platforms (Dynamic & Static):', 'term-accent');
        appendTermRow('  • Dynamic Platform: Node/Express event hub, member directory & operations API');
        appendTermRow('  • Static Edition: Lightning-fast static architecture with in-browser CTF cryptographic sandbox');
        appendTermRow('  • GitHub (Dynamic): https://github.com/AyushTodkar404/SECURITY-CLUB-WEBSITE');
        appendTermRow('  • GitHub (Static): https://github.com/AyushTodkar404/STATIC-VERSION-SECURITY-CLUB-WEBSITE');
        break;

      case 'about':
        appendTermRow('👨‍💻 Ayush Todkar:', 'term-accent');
        appendTermRow('  Computer Engineering undergraduate at DBIT Mumbai with an Honors specialization in Ethical Hacking. Passionate about architecting secure, resilient, user-centric software.');
        break;

      case 'contact':
        appendTermRow('📬 Reach Out Directly:', 'term-accent');
        appendTermRow('  • Email: ayushtodkar404@gmail.com');
        appendTermRow('  • WhatsApp / Phone: +91 70217 29332');
        appendTermRow('  • GitHub: https://github.com/AyushTodkar404');
        appendTermRow('  • LinkedIn: https://www.linkedin.com/in/ayush-todkar-801527411');
        break;

      case 'sudo':
        appendTermRow('🚫 [AUTH FAILURE] visitor is not in the sudoers file. This incident has been logged and reported to DBIT Security Club. ;)', 'term-code');
        break;

      case 'date':
        appendTermRow('🕒 System time: ' + new Date().toLocaleString(), 'term-dim');
        break;

      case 'clear':
        termOutput.innerHTML = '';
        appendTermRow('✨ Screen cleared. Type "help" or click a quick action above.', 'term-dim');
        break;

      default:
        appendTermRow('Command not found: "' + cmd + '". Type "help" or click a quick command button above.', 'term-dim');
        break;
    }
  }

  if (termForm && termInput) {
    termForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const value = termInput.value;
      termInput.value = '';
      handleTerminalCommand(value);
    });
  }

  termQuickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      if (cmd) {
        handleTerminalCommand(cmd);
      }
    });
  });

  // ==========================================================================
  // 8. Contact Form Dispatchers (WhatsApp & Gmail - OWASP Strict CSP Compliant)
  // ==========================================================================
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const gmailBtn = document.getElementById('btn-submit-gmail');

  function getFormPayload() {
    if (!contactForm || !contactForm.reportValidity()) return null;
    return {
      name: (nameInput ? nameInput.value : '').trim(),
      email: (emailInput ? emailInput.value : '').trim(),
      message: (messageInput ? messageInput.value : '').trim()
    };
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const data = getFormPayload();
      if (!data) return;
      const whatsappMessage = encodeURIComponent(
        'Hello Ayush, I am contacting you through your portfolio.\n\n' +
        'Name: ' + data.name + '\n' +
        'Email: ' + data.email + '\n\n' +
        'Message:\n' + data.message
      );
      window.open('https://wa.me/917021729332?text=' + whatsappMessage, '_blank', 'noopener,noreferrer');
    });
  }

  if (gmailBtn) {
    gmailBtn.addEventListener('click', function (event) {
      event.preventDefault();
      const data = getFormPayload();
      if (!data) return;
      const subject = encodeURIComponent('Portfolio Inquiry from ' + data.name);
      const body = encodeURIComponent(
        'Hello Ayush,\n\n' +
        data.message + '\n\n' +
        '---\n' +
        'Sender Name: ' + data.name + '\n' +
        'Sender Email: ' + data.email
      );
      const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=ayushtodkar404@gmail.com&su=' + subject + '&body=' + body;
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    });
  }

})();
