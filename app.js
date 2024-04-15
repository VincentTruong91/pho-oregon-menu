document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const body = document.querySelector('body');
  
    burgerMenu.addEventListener('click', function () {
      this.classList.toggle('open');
      navLinks.classList.toggle('open');
      body.classList.toggle('burger-menu-open');
    });
  });
  