// open/close menu
const openMenuBtn = document.querySelector('.btn-burger');
const menu = document.querySelector('.side-menu');
const closeMenuBtn = document.querySelector('.menu-close');
const menuLinks = document.querySelectorAll('.menu-nav a');

if (openMenuBtn) {
  openMenuBtn.addEventListener('click', () => {
    menu.classList.add('open');
  });

  closeMenuBtn.addEventListener('click', () => {
    menu.classList.remove('open');
  });

  // close the menu when a section is selected
  menuLinks.forEach((element) => {
    element.addEventListener('click', () => {
      menu.classList.remove('open');
    });
  });
}
