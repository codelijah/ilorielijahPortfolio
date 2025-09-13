const themeToggleBtn = document.getElementById('themeToggleBtn');
const html = document.documentElement;
const menuBtn = document.getElementById('menu-btn');
const navDropDown = document.querySelector('.nav-dropdown');
const dropdownContent = document.getElementById('dropdownContent');
const nameSlide = document.getElementById('name-slide');
const stylishNameDropdown = document.getElementById('stylishName');
const headerText = document.getElementById('header-text');

themeToggleBtn.addEventListener('click', () => {
  html.classList.toggle('dark');
  // Optionally, save theme preference
  // if (html.classList.contains('dark')) {
  //   localStorage.setItem('theme', 'dark');
  // } else {
  //   localStorage.setItem('theme', 'light');
  // }
});

// if (localStorage.getItem('theme') === 'dark') {
//   html.classList.add('dark');
// } else {
//   html.classList.remove('dark');
// }

html.classList.add('dark');

menuBtn.addEventListener('click', function () {
  // Toggle dropdown visibility
  navDropDown.classList.toggle('opacity-0');
  navDropDown.classList.toggle('opacity-100');
  navDropDown.classList.toggle('pointer-events-none');
  navDropDown.classList.toggle('pointer-events-auto');
  headerText.classList.toggle('backdrop-blur-md');

  // Toggle hamburger animation (optional)
  menuBtn.classList.toggle('active');

  // Animate content
  dropdownContent.classList.toggle('opacity-0');
  dropdownContent.classList.toggle('opacity-100');
  dropdownContent.classList.toggle('-translate-y-60');
  dropdownContent.classList.toggle('translate-y-0');

  stylishNameDropdown.classList.toggle('opacity-0');
  stylishNameDropdown.classList.toggle('opacity-100');
  stylishNameDropdown.classList.toggle('-translate-y-72');
  stylishNameDropdown.classList.toggle('translate-y-0');

  nameSlide.classList.toggle('translate-x-10');
  menuBtn.classList.toggle('-translate-x-10');
  // Lock / Unlock scroll for mobile
  if (document.body.style.overflow === 'hidden') {
    document.body.style.overflow = '';
  } else {
    document.body.style.overflow = 'hidden';
  }
});
