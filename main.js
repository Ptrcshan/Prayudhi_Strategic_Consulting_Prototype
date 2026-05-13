/* =============================================
   Prayudhi Strategic Consulting - Main JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ─── NAV: Add scrolled class on scroll ─── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  /* ─── HERO BG: Subtle zoom-out on load ─── */
  setTimeout(() => {
    const heroBg = document.getElementById('heroBg');
    if (heroBg) heroBg.classList.add('loaded');
  }, 100);

  /* ─── MOBILE MENU ─── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');

  if (hamburger && mobileMenu && mobileClose) {
    hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
    mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }

  /* ─── SCROLL REVEAL: Fade-in sections on scroll ─── */
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('active'), 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => revealObserver.observe(el));

  /* ─── BUSINESS CARDS: Staggered reveal delay ─── */
  document.querySelectorAll('.biz-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.12}s`;
  });

  /* ─── APPROACH STEPS: Staggered fade-in ─── */
  document.querySelectorAll('.step').forEach((step, i) => {
    step.style.opacity = 0;
    step.style.transform = 'translateY(24px)';
    step.style.transition = `opacity 0.6s ${i * 0.15}s ease, transform 0.6s ${i * 0.15}s ease`;

    const stepObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = 1;
          e.target.style.transform = 'translateY(0)';
          stepObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });

    stepObserver.observe(step);
  });

});
