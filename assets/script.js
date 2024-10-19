document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);
});

function toggleMenu() {
    const menu = document.querySelector('nav .menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}
