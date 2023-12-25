// Toggle mobile menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Toggle between light and dark themes
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme');

  // Store the selected theme in local storage
  const isDarkTheme = body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

// Check local storage for the theme preference
document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme');
  const body = document.body;

  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
  }

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
});
