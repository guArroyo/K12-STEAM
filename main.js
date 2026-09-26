// K–12 STEAM Programs — small interactions (no libraries needed)
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
    nav.querySelectorAll('a').forEach((link) =>
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      })
    );
  }

  // Program filter by district (each card has data-district="ausd", "scesd" or "ausd scesd")
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.program-card');
  const status = document.getElementById('filter-status');
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filterButtons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      let shown = 0;
      cards.forEach((card) => {
        const match = filter === 'all' || card.dataset.district.split(' ').includes(filter);
        card.hidden = !match;
        if (match) shown += 1;
      });
      if (status) status.textContent = status.dataset.template.replace('{n}', shown);
    });
  });

  // Newsletter form — shows a message only. Connect it to your email service
  // (Mailchimp, Google Forms, Constant Contact, etc.) before launch.
  const form = document.querySelector('.newsletter');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = form.querySelector('.form-msg');
      const input = form.querySelector('input[type="email"]');
      if (!input.checkValidity()) {
        msg.textContent = form.dataset.error;
        input.focus();
        return;
      }
      msg.textContent = form.dataset.success;
      form.reset();
    });
  }
});
