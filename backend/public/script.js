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

// Add logic to implement product page into index page

const path = require('path');
const rootDir = require('../utils/pathUtils');

async function injectHTML() {
  try {
    const res = await fetch(path.join(rootDir,'views','product.html'));
    const html = await res.text();
    document
      .querySelectorAll(".manual-slider")
      .forEach((el) => el.insertAdjacentHTML("afterend", html));
  } catch (err) {
    console.error(err);
  }
}
injectHTML();

