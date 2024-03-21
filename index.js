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

 const slide=document.querySelectorAll('.carousel')
 console.log(slide)