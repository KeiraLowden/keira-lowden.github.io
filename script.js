// 1) Check localStorage on load
const darkModeToggle = document.getElementById('dark-mode-toggle');
const savedMode = localStorage.getItem('darkMode'); 
if (savedMode === 'dark') {
  document.body.classList.add('dark-mode');
  if (darkModeToggle) {
    darkModeToggle.textContent = 'Light Mode';
  }
}

// 2) Toggle dark mode on button click
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    darkModeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';

    // Save to localStorage so we remember user preference
    localStorage.setItem('darkMode', isDark ? 'dark' : 'light');
  });
}

// 3) (Optional) everything else remains the same
// e.g. hamburger menu toggle, fade-ins, etc.

// Example IntersectionObserver fade-in
document.querySelectorAll('section').forEach(section => {
  section.classList.add('hidden-section');
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible-section');
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks   = document.querySelector('.navbar-links');

  mobileMenu.addEventListener('click', () => {
    // Toggle the visibility of the links
    navLinks.classList.toggle('active');
    // (Optional) give the menu icon an “open” class so you can animate it
    mobileMenu.classList.toggle('open');
  });
});

