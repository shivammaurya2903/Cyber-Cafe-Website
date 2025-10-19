// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  // Toggle menu on hamburger click
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  }, { passive: true });

  // Close menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    }, { passive: true });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    }
  }, { passive: true });
});
