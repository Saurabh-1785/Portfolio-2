  // Navigation functionality
function showSection(sectionName) {
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));
  
  // Show selected section
  document.getElementById(sectionName).classList.add('active');
  
  // Update active nav item
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => item.classList.remove('active'));
  event.target.classList.add('active');
  
  // Close mobile menu if open
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.remove('active');
  
  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
  
// Mobile menu toggle
function toggleMobileMenu() {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('active');
}
  
// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const navMenu = document.getElementById('navMenu');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
    navMenu.classList.remove('active');
  }
});
  
  // Keyboard navigation
document.addEventListener('keydown', function(e) {
  if (e.altKey) {
    switch(e.key) {
      case '1':
        showSection('home');
        break;
      case '2':
        showSection('about');
        break;
      case '3':
        showSection('projects');
        break;
      case '4':
        showSection('contact');
        break;
    }
  }
});
  
    
// Add entrance animations
function animateOnScroll() {
  const elements = document.querySelectorAll('.project-card, .skill-item, .contact-item');
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

// Initialize animations
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);