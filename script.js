// Dark mode toggle, mobile menu & fade-ins
document.addEventListener('DOMContentLoaded', () => {
  // 1) Dark‐Mode Toggle with Icons
  const toggle = document.getElementById('dark-mode-toggle');
  const saved = localStorage.getItem('darkMode');

  // Initialize state
  if (saved === 'dark') {
    document.body.classList.add('dark-mode');
    toggle.innerHTML = '☀️';
  } else {
    toggle.innerHTML = '🌙';
  }

  // On‐click: switch mode + swap icon
  toggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    toggle.innerHTML = isDark ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDark ? 'dark' : 'light');
  });

  // 2) Hamburger Menu Toggle
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks   = document.querySelector('.navbar-links');
  mobileMenu?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('open');
  });

  // 3) Section Fade‐In on Scroll
  document.querySelectorAll('section').forEach(sec => sec.classList.add('hidden-section'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible-section');
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('section').forEach(sec => observer.observe(sec));
});
