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


async function injectHTML() {
  try {
    const res = await fetch("./product.html");
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

black = false;
const btn = document.getElementById("darkBtn");
document.getElementById("darkBtn").onclick = function(){
      document.body.style.background = black? "linear-gradient(to right, #C3FFDB 42%, #B6FBFE 75%, #B7FBFF 91%)":"linear-gradient(to right, #040404ff 42%, #2d2b2bff 75%, #111717ff 91%)";
      
      
      if(black)  btn.style.backgroundColor = "white";
      else btn.style.backgroundColor =" black";

      btn.style.color = black ? "black" : "white";

      black = !black;
}



