document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.querySelector('.menu');
  const secondMenu = document.querySelector('.second-menu');

  menuToggle.addEventListener('change', function () {
    if (menuToggle.checked) {
      menu.classList.add('active');
      secondMenu.classList.add('active');
    } else {
      menu.classList.remove('active');
      secondMenu.classList.remove('active');
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentSlideIndex = 0;
  let autoSlideInterval;
  const slideNumber = document.querySelector('.slide-number'); // Select the slide number element

  function updateSlideNumber(index) {
      slideNumber.textContent = index + 1; // Update the slide number
  }

  function showSlide(index) {
      slides.forEach((slide, i) => {
          if (i === index) {
              slide.classList.add('active');
          } else {
              slide.classList.remove('active');
          }
      });
      updateSlideNumber(index); // Update the slide number
  }

  function showNextSlide() {
      currentSlideIndex++;
      if (currentSlideIndex >= slides.length) {
          currentSlideIndex = 0;
      }
      showSlide(currentSlideIndex);
  }

  function showPrevSlide() {
      currentSlideIndex--;
      if (currentSlideIndex < 0) {
          currentSlideIndex = slides.length - 1;
      }
      showSlide(currentSlideIndex);
  }

  function startAutoSlide() {
      autoSlideInterval = setInterval(showNextSlide, 3000); // Change the interval time as needed
  }

  function stopAutoSlide() {
      clearInterval(autoSlideInterval);
  }

  prevBtn.addEventListener('click', function() {
      stopAutoSlide();
      showPrevSlide();
  });

  nextBtn.addEventListener('click', function() {
      stopAutoSlide();
      showNextSlide();
  });

  startAutoSlide(); // Start automatic sliding by default
});

//////////////////////////////////////////////////////////////////////////////////////

const prevBtns = document.querySelector('.prev-btn');
const nextBtns = document.querySelector('.next-btn');
const slidess = document.querySelectorAll('.slide'); // Updated variable name
let currentSlideIndexs = 0; // Updated variable name
const slideNumber = document.querySelector('.slide-number');

function updateSlideNumber(index) {
    slideNumber.textContent = index + 1; // Display slide number starting from 1
}

function showSlide(index) {
    slidess.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    updateSlideNumber(index);
}

function showNextSlide() {
    currentSlideIndexs++;
    if (currentSlideIndexs >= slidess.length) {
        currentSlideIndexs = 0;
    }
    showSlide(currentSlideIndexs);
}

function showPrevSlide() {
    currentSlideIndexs--;
    if (currentSlideIndexs < 0) {
        currentSlideIndexs = slidess.length - 1;
    }
    showSlide(currentSlideIndexs);
}

prevBtns.addEventListener('click', showPrevSlide);
nextBtns.addEventListener('click', showNextSlide);

showSlide(currentSlideIndexs); // Show initial slide


//////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.querySelector('.testimonial-prev-btn');
    const nextBtn = document.querySelector('.testimonial-next-btn');
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonialIndex = 0;
    let autoSlideInterval;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                testimonial.style.display = 'inline-block';
            } else {
                testimonial.style.display = 'none';
            }
        });
    }

    function showNextTestimonial() {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        showTestimonial(currentTestimonialIndex);
    }

    function showPrevTestimonial() {
        currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonialIndex);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(showNextTestimonial, 2000); // Faster interval (change as needed)
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function startAutoSlideIfNotRunning() {
        if (!autoSlideInterval) {
            startAutoSlide();
        }
    }

    prevBtn.addEventListener('click', function () {
        showPrevTestimonial();
        stopAutoSlide(); // Stop auto sliding when button is clicked
        startAutoSlideIfNotRunning(); // Restart auto sliding if not already running
    });

    nextBtn.addEventListener('click', function () {
        showNextTestimonial();
        stopAutoSlide(); // Stop auto sliding when button is clicked
        startAutoSlideIfNotRunning(); // Restart auto sliding if not already running
    });

    startAutoSlide(); // Start automatic sliding by default
});
