// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Dark-mode toggle
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

  // Fade-in on scroll
  document.querySelectorAll('main.section').forEach(sec => sec.classList.add('hidden-section'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible-section');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('main.section').forEach(sec => observer.observe(sec));
});
