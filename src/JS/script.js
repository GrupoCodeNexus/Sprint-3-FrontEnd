
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function moveSlide(step) {
    currentSlide += step;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    showSlide(currentSlide);
  }

// Inicializa o primeiro slide
showSlide(currentSlide);
