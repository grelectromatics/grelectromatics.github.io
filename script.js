// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section?.scrollIntoView({ behavior: 'smooth' });
  });
});

// Floating chat icon toggle
const chatBtn = document.querySelector('.chat-icon');
const chatModal = document.querySelector('.chat-modal');
const closeBtn = document.querySelector('.close-btn');

chatBtn?.addEventListener('click', () => {
  chatModal.style.display = 'block';
});

closeBtn?.addEventListener('click', () => {
  chatModal.style.display = 'none';
});

// Shrink navbar on scroll
const navbar = document.querySelector('.top-bar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.padding = '0.5rem 2rem';
    navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
  } else {
    navbar.style.padding = '0.8rem 2rem';
    navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
  }
});

// Scroll animation effect (basic)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-target').forEach(el => observer.observe(el));
