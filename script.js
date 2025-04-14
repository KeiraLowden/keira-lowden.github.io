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

// Optional: You can add additional JS for smooth transitions or nav highlighting here
console.log("Website loaded. Dark mode and mobile menu are active.");
