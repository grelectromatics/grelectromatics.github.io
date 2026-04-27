/* NAV */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger?.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

/* SCROLL EFFECT */
const topBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

/* SCROLL TO TOP */
topBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* CART SYSTEM */
const CART_KEY = "gr_cart";

function getCart(){
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  renderCart();
}

function addToCart(product){
  let cart = getCart();
  let existing = cart.find(i => i.id === product.id);

  if(existing){
    existing.qty += product.qty;
  } else {
    cart.push(product);
  }

  saveCart(cart);
}

document.querySelectorAll(".add-to-cart").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const parent = btn.closest(".product-card");
    const qty = parseInt(parent.querySelector(".quantity").value) || 1;

    addToCart({
      id: btn.dataset.id,
      name: btn.dataset.name,
      price: Number(btn.dataset.price),
      qty
    });
  });
});

/* RENDER CART */
function renderCart(){
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  let cart = getCart();
  let total = 0;
  cartItems.innerHTML = "";

  cart.forEach(item=>{
    total += item.price * item.qty;

    cartItems.innerHTML += `<p>${item.name} x ${item.qty}</p>`;
  });

  cartTotal.textContent = total;
}

/* CART OPEN */
document.getElementById("cartLink")?.addEventListener("click",(e)=>{
  e.preventDefault();
  document.getElementById("cartDrawer").classList.add("open");
});

document.getElementById("closeCart")?.addEventListener("click",()=>{
  document.getElementById("cartDrawer").classList.remove("open");
});

/* CHAT */
const chatIcon = document.getElementById("chatIcon");
const chatModal = document.getElementById("chatModal");

chatIcon?.addEventListener("click",()=>{
  chatModal.classList.toggle("open");
});

/* TYPING EFFECT */
const typing = document.getElementById("typing");

if(typing){
  let text = typing.textContent;
  typing.textContent = "";
  let i = 0;

  function type(){
    if(i < text.length){
      typing.textContent += text[i++];
      setTimeout(type, 50);
    }
  }

  type();
}

/* FADE IN */
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("fade-in");
    }
  });
});

document.querySelectorAll(".fade-target").forEach(el=>{
  observer.observe(el);
});

/* INIT */
renderCart();
