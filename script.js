/* ========= CACHE ELEMENTS ========= */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');
const topbar    = document.querySelector('.top-bar');
const topBtn    = document.getElementById('scrollTopBtn');
const cartDrawer = document.getElementById('cartDrawer');
const cartLink = document.getElementById('cartLink');
const closeCartBtn = document.getElementById('closeCart');

/* ========= SMOOTH INTERNAL NAVIGATION ========= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    navMenu?.classList.remove('open');
    hamburger?.classList.remove('active');
  });
});

/* ========= SHRINK NAV ON SCROLL ========= */
window.addEventListener('scroll', () => {
  if (!topbar) return;
  const scrolled = window.scrollY > 12;
  topbar.style.boxShadow = scrolled
    ? '0 6px 20px rgba(0,0,0,.08)'
    : '0 1px 3px rgba(0,0,0,.05)';
  topbar.style.padding = scrolled
    ? '0.7rem 1.3rem'
    : '0.9rem 1.5rem';

  if (topBtn) {
    topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  }
});

/* ========= MOBILE HAMBURGER ========= */
hamburger?.addEventListener('click', () => {
  navMenu?.classList.toggle('open');
  hamburger.classList.toggle('active');
});

/* ========= CART SYSTEM WITH LOCALSTORAGE ========= */
const CART_KEY = 'gr_cart';

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
  renderCartDrawer();
}

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('gr_cart')) || [];
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.qty += product.qty;
  } else {
    cart.push(product);
  }

  localStorage.setItem('gr_cart', JSON.stringify(cart));
  renderCartDrawer();
  updateCartBadge();
}

document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const productDiv = btn.closest('.product-card');
    const qty = parseInt(productDiv.querySelector('.quantity').value) || 1;
    addToCart({
      id: btn.dataset.id,
      name: btn.dataset.name,
      price: Number(btn.dataset.price),
      qty: qty
    });
  });
});

function removeFromCart(id) {
  const cart = getCart().filter(item => item.id !== id);
  saveCart(cart);
}

function updateQty(id, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty = qty <= 0 ? 1 : qty;
  saveCart(cart);
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (!badge) return;

  const count = getCart().reduce((s, i) => s + i.qty, 0);
  badge.textContent = count;
}

/* ========= OPEN/CLOSE CART DRAWER ========= */
cartLink?.addEventListener('click', e => {
  e.preventDefault();
  cartDrawer?.classList.add('open');
  renderCartDrawer();
});

closeCartBtn?.addEventListener('click', () => {
  cartDrawer?.classList.remove('open');
});

/* ========= RENDER CART ========= */
function renderCartDrawer() {
  const cartItemsDiv = document.getElementById('cartItems');
  const cartTotalSpan = document.getElementById('cartTotal');
  const cart = JSON.parse(localStorage.getItem('gr_cart')) || [];

  let total = 0;
  cartItemsDiv.innerHTML = '';

  cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;

    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `<p>${item.name} × ${item.qty} = Rs ${itemTotal}</p>`;
    cartItemsDiv.appendChild(div);
  });

  cartTotalSpan.textContent = total;
}

/* ========= INITIALIZE CART BUTTONS ========= */
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    addToCart({
      id: btn.dataset.id,
      name: btn.dataset.name,
      price: Number(btn.dataset.price)
    });
  });
});

/* ========= FLOATING CHAT ========= */
const chatIcon  = document.getElementById('chatIcon');
const chatModal = document.getElementById('chatModal');
const closeChat = document.getElementById('closeChat');

chatIcon?.addEventListener('click', () =>
  chatModal?.classList.add('open')
);
closeChat?.addEventListener('click', () =>
  chatModal?.classList.remove('open')
);

document.getElementById('chatForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const msg = document.getElementById('chatMessage')?.value.trim();
  if (!msg) return;

  window.location.href =
    `mailto:info@grelectromatics.com?subject=Website Chat&body=${encodeURIComponent(msg)}`;

  chatModal?.classList.remove('open');
});

/* ========= SCROLL TO TOP BUTTON ========= */
topBtn?.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);

/* ========= TYPING EFFECT ========= */
const titleEl = document.getElementById('typing');
if (titleEl) {
  const fullText = titleEl.textContent.trim();
  titleEl.textContent = '';
  let i = 0;

  (function type() {
    if (i <= fullText.length) {
      titleEl.textContent = fullText.slice(0, i++);
      setTimeout(type, 60);
    }
  })();
}

/* ========= FADE-IN ON SCROLL ========= */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-target').forEach(el => observer.observe(el));

/* ========= INITIAL RENDER ========= */
updateCartBadge();
renderCartDrawer();
