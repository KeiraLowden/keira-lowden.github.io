// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Update button text accordingly
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
  });
}

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navbarLinks = document.querySelector('.navbar-links');
if (mobileMenu) {
  mobileMenu.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });
}

// Fade-in sections on scroll
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

console.log("Single-page site loaded. Footer fixed, fade-in animation, and dark/light mode toggles are active.");
