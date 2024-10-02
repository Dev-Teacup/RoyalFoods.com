// Select the toggle button and the nav element
const toggleButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

// Add an event listener to toggle the 'active' class on the nav
toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active');
});
