document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu-list-items');

    toggleButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });
});