const navigationList = document.querySelector('.header-nav');
const navigationToggle = document.querySelector('.header-nav__toggle');

navigationToggle.addEventListener('click', () => {
  if (navigationToggle.classList.contains('header-nav__toggle--open')) {
    navigationList.classList.remove('header-nav--open');
    navigationToggle.classList.remove('header-nav__toggle--open');
    document.body.classList.remove('page-body--menu-open');
  } else {
    navigationList.classList.add('header-nav--open');
    navigationToggle.classList.add('header-nav__toggle--open');
    document.body.classList.add('page-body--menu-open');
  }
});


