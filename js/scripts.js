const btnMenu = document.getElementById('hamburguer');
const menu = document.querySelector('.main-nav');

let menuOpen = false;

const openMenu = () => {
  if (!menuOpen) {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
    menuOpen = true;
  } else {
    menu.classList.remove('active');
    document.body.style.overflow = 'visible';
    menuOpen = false;
  }
};

btnMenu.addEventListener('click', openMenu);
