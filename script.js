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
  
  // Scroll to top
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
  
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add loading animation to buttons
function addLoadingState(button) {
  const originalText = button.textContent;
  button.textContent = 'Loading...';
  button.disabled = true;
  
  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
  }, 2000);
}
  
// Add event listeners to project links
document.querySelectorAll('.project-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    addLoadingState(this);
  });
});
  
  // Keyboard navigation
document.addEventListener('keydown', function(e) {
  if (e.altKey) {
    switch(e.key) {
      case '1':
        e.preventDefault();
        showSection('home');
        break;
      case '2':
        e.preventDefault();
        showSection('about');
        break;
      case '3':
        e.preventDefault();
        showSection('projects');
        break;
      case '4':
        e.preventDefault();
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