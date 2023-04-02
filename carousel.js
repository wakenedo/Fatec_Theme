document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  const prev = document.querySelector('.prev');
  prev.addEventListener('click', function () {
    showSlide(currentSlide - 1);
  });

  const next = document.querySelector('.next');
  next.addEventListener('click', function () {
    showSlide(currentSlide + 1);
  });
});