// JavaScript for Floating Chat Box and Smooth Scroll

document.addEventListener('DOMContentLoaded', function () {
  const chatBtn = document.querySelector('.chat-icon');
  const chatModal = document.querySelector('.chat-modal');
  const closeBtn = document.querySelector('.close-btn');

  chatBtn.addEventListener('click', () => {
    chatModal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    chatModal.style.display = 'none';
  });

  // Smooth Scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Newsletter and Chat Form Handler (placeholder - needs backend or form service)
  document.querySelector('.contact-right button')?.addEventListener('click', () => {
    const email = document.querySelector('.contact-right input').value;
    if (email) alert('Newsletter subscribed with: ' + email);
  });

  document.querySelector('.chat-box button')?.addEventListener('click', () => {
    const message = document.querySelector('.chat-box textarea').value;
    if (message) alert('Chat message sent: ' + message);
  });
});
