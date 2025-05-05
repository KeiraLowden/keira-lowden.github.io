document.addEventListener('DOMContentLoaded', () => {
  // Dark mode toggle
  const toggle = document.getElementById('dark-mode-toggle');
  const saved = localStorage.getItem('darkMode');
  if (saved === 'dark') {
    document.body.classList.add('dark-mode');
    toggle.textContent = 'Light Mode';
  }
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    toggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('darkMode', isDark ? 'dark' : 'light');
  });

  // Mobile menu
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks   = document.querySelector('.navbar-links');
  mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('open');
  });

  // Fade-in sections
  document.querySelectorAll('section, main').forEach(sec => sec.classList.add('hidden-section'));
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible-section');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('section, main').forEach(sec => obs.observe(sec));
});
