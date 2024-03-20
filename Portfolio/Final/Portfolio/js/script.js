// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Select the theme switcher button
    var themeSwitcher = document.getElementById('theme-switcher');

    // Listen for a click event on the theme switcher
    themeSwitcher.addEventListener('click', function() {
        // Toggle the 'dark-mode' class on the body
        document.body.classList.toggle('dark-mode');
    });
});