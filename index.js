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


  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const slides = document.querySelectorAll('.slide');
  let currentSlideIndex = 0;
  let autoSlideInterval;
  
  function showSlide(index) {
      slides.forEach((slide, i) => {
          if (i === index) {
              slide.classList.add('active');
          } else {
              slide.classList.remove('active');
          }
      });
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
  
  