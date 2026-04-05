document.addEventListener("DOMContentLoaded", () => {
    // --- 1. Active Page Highlighting ---
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        // Check if the link's href matches the current path
        if (link.getAttribute('href') === currentPath.split('/').pop() || 
           (currentPath.endsWith('/') && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // --- 2. Light/Dark Mode Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const rootElement = document.documentElement;
    
    // Check local storage for saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    rootElement.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = rootElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        rootElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        if (theme === 'dark') {
            themeToggle.textContent = '☀️'; // Show sun when dark
        } else {
            themeToggle.textContent = '🌙'; // Show moon when light
        }
    }
});
