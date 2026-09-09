/* Evidenzia la sezione in lettura senza cambiare URL, focus o scorrimento. */
(() => {
  const header = document.querySelector('.site-header');
  const links = [...document.querySelectorAll('.main-nav a[href^="#"]')];
  const sections = links.map(link => ({
    link,
    section: document.getElementById(link.hash.slice(1)),
  })).filter(item => item.section);
  if (!header || !sections.length) return;

  let scheduled = false;
  let current = null;

  function update() {
    scheduled = false;
    const headerBottom = Math.max(0, header.getBoundingClientRect().bottom);
    const readingLine = Math.min(window.innerHeight * 0.45, headerBottom + 100);
    const active = sections.find(({ section }) => {
      const bounds = section.getBoundingClientRect();
      return bounds.top <= readingLine && bounds.bottom > readingLine;
    })?.link ?? null;

    if (active === current) return;
    current = active;
    links.forEach(link => {
      if (link === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  function scheduleUpdate() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(update);
  }

  function measureHeader() {
    document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
    scheduleUpdate();
  }

  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', measureHeader);
  window.addEventListener('pageshow', measureHeader);
  window.addEventListener('hashchange', scheduleUpdate);
  // FAQ e immagini possono spostare le sezioni senza un evento di scroll.
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(measureHeader);
    observer.observe(header);
    document.querySelectorAll('main > section').forEach(section => observer.observe(section));
  }
  measureHeader();
})();

/* Il selettore usa collegamenti reali: nessuna preferenza salvata o redirect. */
(() => {
  const switcher = document.querySelector('.language-switcher');
  if (!switcher) return;
  const summary = switcher.querySelector('summary');

  document.addEventListener('click', event => {
    if (!switcher.contains(event.target)) switcher.open = false;
  });
  switcher.addEventListener('keydown', event => {
    if (event.key === 'Escape' && switcher.open) {
      switcher.open = false;
      summary.focus();
      event.preventDefault();
    }
  });
  // Non chiudere su focusout: può precedere il clic su un collegamento
  // e nasconderlo prima che il browser esegua la navigazione.
})();
