const hamburger = document.querySelector('#nav-btn');
const navMenu = document.querySelector('.nav-list');

const menuIcon = document.querySelector('#menu');
const closeIcon = document.querySelector('#close');
const navA = document.querySelectorAll('.nav_a');

function toggleMenu() {
  if (navMenu.classList.contains('show')) {
    navMenu.classList.remove('show');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    navMenu.classList.add('show');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

navA.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
  },
);