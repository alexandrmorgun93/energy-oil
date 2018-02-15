module.exports = (openMenu, btnMenu, closeMenu) => {

    openMenu.addEventListener('click', () => {
        btnMenu.classList.add('active');
    });
    closeMenu.addEventListener('click', () => {
        btnMenu.classList.remove('active');
    });
};