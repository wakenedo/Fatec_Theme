const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const bullets = document.querySelector('.bullets');

let slidePosition = 0;

function goToSlide(n) {
  slidePosition = n;

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  // Show the slide at the current position
  slides[slidePosition].classList.add('active');

  // Update bullets
  updateBullets();
}

function updateBullets() {
  // Remove all active bullets
  bullets.innerHTML = '';

  // Create bullets for each slide
  for (let i = 0; i < slides.length; i++) {
    const bullet = document.createElement('span');
    bullet.classList.add('bullet');

    // Add an "active" class to the current bullet
    if (i === slidePosition) {
      bullet.classList.add('active');
    }

    // Add click event listener to bullets
    bullet.addEventListener('click', function () {
      goToSlide(i);
    });

    bullets.appendChild(bullet);
  }
}

// Go to the next slide
function nextSlide() {
  if (slidePosition === slides.length - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  goToSlide(slidePosition);
}

// Go to the previous slide
function prevSlide() {
  if (slidePosition === 0) {
    slidePosition = slides.length - 1;
  } else {
    slidePosition--;
  }

  goToSlide(slidePosition);
}

// Add click event listeners to buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Initialize carousel
goToSlide(0);