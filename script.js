// Dark mode toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('dark-mode-toggle');
  const saved = localStorage.getItem('darkMode');

  if (saved === 'dark') {
    document.body.classList.add('dark-mode');
    if (toggle) toggle.textContent = 'Light Mode';
  }
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      toggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
      localStorage.setItem('darkMode', isDark ? 'dark' : 'light');
    });
  }

  // Hamburger menu
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.navbar-links');
  if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });
  }

  // Fade-in observer
  document.querySelectorAll('section').forEach(sec => sec.classList.add('hidden-section'));
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible-section');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('section').forEach(sec => obs.observe(sec));
});
