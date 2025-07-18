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

//Logic for toggling the dark color mode

black = false;
const btn = document.getElementById("darkBtn");
document.getElementById("darkBtn").onclick = function(){
      document.body.style.background = black? "linear-gradient(to right, #C3FFDB 42%, #B6FBFE 75%, #B7FBFF 91%)":"linear-gradient(to right, #040404ff 42%, #2d2b2bff 75%, #111717ff 91%)";
      
      
      if(black)  btn.style.backgroundColor = "white";
      else btn.style.backgroundColor =" black";

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
