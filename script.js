const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Scroll para o fim da página
document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.getElementById('scrollButton');
    
    scrollButton.addEventListener('click', function () {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    });
});