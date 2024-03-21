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


  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  
  function showSlide(index) {
      console.log('Current Slide:', currentSlide);
      slides.forEach((slide, i) => {
          if (i === index) {
              console.log('Adding active class to slide', i);
              slide.classList.add('active');
          } else {
              console.log('Removing active class from slide', i);
              slide.classList.remove('active');
          }
      });
  }
  
  function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) {
          currentSlide = 0;
      }
      showSlide(currentSlide);
  }
  
  showSlide(currentSlide);
  
  setInterval(nextSlide, 3000);
  
  

  