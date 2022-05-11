// ! View
const navbarElement = document.querySelector('#navbar');
const navToggle = document.querySelector('#nav-toggle');
const headerElement = document.querySelector('.header');

// ! Controller
navbarElement.addEventListener('click', () => {
  navToggle.checked = false;
});
