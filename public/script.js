const themeToggleBtn = document.getElementById('themeToggleBtn');
const html = document.documentElement;
const menuBtn = document.getElementById('menu-btn');
const navDropDown = document.querySelector('.nav-dropdown');
const dropdownContent = document.getElementById('dropdownContent');
const nameDropdown = document.getElementById('namedropdown');
const stylishNameDropdown = document.getElementById('stylishName');

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
  navDropDown.classList.toggle('opacity-0');
  navDropDown.classList.toggle('opacity-100');
  navDropDown.classList.toggle('pointer-events-none');
  navDropDown.classList.toggle('pointer-events-auto');
  menuBtn.classList.toggle('active');
  dropdownContent.classList.toggle('opacity-0');
  dropdownContent.classList.toggle('opacity-100');
  dropdownContent.classList.toggle('-translate-y-60');
  dropdownContent.classList.toggle('translate-y-0');
  nameDropdown.classList.toggle('opacity-0');
  nameDropdown.classList.toggle('opacity-100');
  nameDropdown.classList.toggle('-translate-y-40');
  nameDropdown.classList.toggle('-translate-y-0');
  stylishNameDropdown.classList.toggle('opacity-0');
  stylishNameDropdown.classList.toggle('opacity-100');
  stylishNameDropdown.classList.toggle('-translate-y-72');
  stylishNameDropdown.classList.toggle('-translate-y-0');
});
