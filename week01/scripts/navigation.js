const navButton = document.querySelector('#nav-btn');
const navlinks = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navlinks.classList.toggle('show');
});