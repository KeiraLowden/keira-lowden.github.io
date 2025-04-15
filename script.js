// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
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

// Fade-In Sections on Scroll
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

// "Back to Home" Link in Footer
const backToHomeLink = document.querySelector('.back-to-home');
if (backToHomeLink) {
  backToHomeLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "index.html";
  });
}

console.log("Multi-page site loaded. Dark mode, mobile menu, fade-in animations, and footer enhancements are active.");
