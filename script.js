const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const main = document.querySelector('main');

function toggleNav() {
  navLinks.classList.toggle('open');
  links.forEach((link) => {
    link.classList.toggle('fade');
  });
}

hamburger.addEventListener('click', toggleNav);

main.addEventListener('click', () => {
  navLinks.className == 'nav-links open' ? toggleNav() : null;
});
