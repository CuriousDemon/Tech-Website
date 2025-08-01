// Add Logic to implement slider function into Html page

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}


// const path = require('path');
// const rootDir = require('../utils/pathUtils');

async function injectHTML() {
  try {
    const res = await fetch('/product.html');
    const html = await res.text();
    document
      .querySelectorAll(".manual-slider")
      .forEach((el) => el.insertAdjacentHTML("afterend", html));
  } catch (err) {
    console.error(err);
  }
}
injectHTML();

//Logic for toggling the dark color mode

let black = false;
const btn = document.getElementById("darkBtn");
document.getElementById("darkBtn").onclick = function () {
  document.body.style.background = black ? "linear-gradient(to right, #C3FFDB 42%, #B6FBFE 75%, #B7FBFF 91%)" : "linear-gradient(to right, #040404ff 42%, #2d2b2bff 75%, #111717ff 91%)";


  if (black) btn.style.backgroundColor = "white";
  else btn.style.backgroundColor = " black";

  btn.style.color = black ? "black" : "white";

  black = !black;
}


// For Cart pop-up

document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.querySelector(".cart");
  const cartPopup = document.querySelector(".cart-popup");

  cartIcon.addEventListener("click", function () {
    cartPopup.classList.toggle("show");
  });

  // Optional: Hide cart popup when clicking outside
  document.addEventListener("click", function (e) {
    if (!cartPopup.contains(e.target) && !cartIcon.contains(e.target)) {
      cartPopup.classList.remove("show");
    }
  });
});


//   cart array to track items
let cartItems = [];

document.addEventListener("DOMContentLoaded", function () {
  // Attach event listener to all "Add to Cart" buttons
  document.querySelectorAll(".but1").forEach((btn, index) => {
    btn.addEventListener("click", function () {
      const productCard = btn.closest(".product-card");
      const name = productCard.querySelector("h3").textContent;
      const priceText = productCard.querySelector("p").textContent.replace(/[₹,]/g, '').trim();
      const price = parseFloat(priceText);
      const imageSrc = productCard.querySelector("img").getAttribute("src");

      // Check if item already exists
      const existing = cartItems.find(item => item.name === name);

      if (existing) {
        existing.quantity++;
      } else {
        cartItems.push({ name, price, quantity: 1, imageSrc });
      }

      updateCartUI();
    });
  });
});

function updateCartUI() {
  const cartContainer = document.querySelector(".cart-items-container");
  cartContainer.innerHTML = ""; // Clear previous

 

  cartItems.forEach(item => {
   

    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <div class="item-image" style="width: 60px; height: 60px; background: url('${item.imageSrc}') center/cover no-repeat;"></div>
      <div class="item-details-without-pic">
        <div class="item-name">${item.name}</div>
        <div class="item-price">Rs. ${item.price}</div>
        <div class="item-quantity">
          <button class="plus-minus" onclick="changeQuantity('${item.name}', -1)">-</button>
          <span>${item.quantity}</span>
          <button class="plus-minus" onclick="changeQuantity('${item.name}', 1)">+</button>
        </div>
      </div>
    `;

    cartContainer.appendChild(div);
  });

}

function changeQuantity(name, change) {
  const item = cartItems.find(item => item.name === name);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    cartItems = cartItems.filter(i => i.name !== name);
  }

  updateCartUI();
}
