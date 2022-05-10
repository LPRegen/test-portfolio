// ! View
const navbarElement = document.querySelector('#navbar');
const navToggle = document.querySelector('#nav-toggle');
const headerElement = document.querySelector('.header');

// ! Controller
navbarElement.addEventListener('click', () => {
  navToggle.checked = false;
});

navToggle.addEventListener('click', () => {
  headerElement.style.backgroundColor
    ? (headerElement.style.backgroundColor = '')
    : (headerElement.style.backgroundColor = '#1d1f20');
});
