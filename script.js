/* ========= Smooth internal navigation ========= */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // close mobile menu after click
      navMenu.classList.remove('open');
      hamburger.classList.remove('active');
    }
  });
});

/* ========= Shrink nav shadow on scroll ========= */
const topbar = document.querySelector('.top-bar');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 12;
  topbar.style.boxShadow = scrolled ? '0 6px 20px rgba(0,0,0,.08)' : '0 1px 3px rgba(0,0,0,.05)';
  topbar.style.padding   = scrolled ? '0.7rem 1.3rem' : '0.9rem 1.5rem';
});

/* ========= Mobile hamburger ========= */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');
hamburger?.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  hamburger.classList.toggle('active');
});

/* ========= Cart button scrolls to catalogue ========= */
document.getElementById('cartLink')?.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('section2')?.scrollIntoView({ behavior: 'smooth' });
});

/* ========= Typing effect (hero) ========= */
const titleEl = document.getElementById('typing');
if (titleEl) {
  const full = titleEl.textContent.trim();
  titleEl.textContent = '';
  let i = 0;
  const type = () => {
    if (i <= full.length) {
      titleEl.textContent = full.slice(0, i++);
      setTimeout(type, 60);
    }
  };
  type();
}

/* ========= Fade-in on scroll ========= */
const observer = new IntersectionObserver(
  entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('fade-in')),
  { threshold: 0.12 }
);
document.querySelectorAll('.fade-target').forEach(el => observer.observe(el));

/* ========= Floating chat ========= */
const chatIcon  = document.getElementById('chatIcon');
const chatModal = document.getElementById('chatModal');
const closeChat = document.getElementById('closeChat');

chatIcon?.addEventListener('click', () => chatModal.classList.add('open'));
closeChat?.addEventListener('click', () => chatModal.classList.remove('open'));

/* Send chat via email (mailto) */
document.getElementById('chatForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = document.getElementById('chatMessage').value.trim();
  if (!msg) return;
  const subject = encodeURIComponent('Website Chat Message');
  const body    = encodeURIComponent(msg);
  // Change the email below if you prefer a different inbox
  window.location.href = `mailto:info@grelectromatics.com?subject=${subject}&body=${body}`;
  chatModal.classList.remove('open');
});

/* ========= Scroll-to-top button ========= */
const topBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
topBtn?.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);
