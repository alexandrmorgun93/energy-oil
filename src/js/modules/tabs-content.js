module.exports = (secondMenu,firstMenu, newsContent) => {


    secondMenu.addEventListener('click', () => {
        secondMenu.classList.add('active');
        newsContent.classList.add('active');
        firstMenu.classList.remove('active');

    });
    firstMenu.addEventListener('click', () => {
        firstMenu.classList.add('active');
        newsContent.classList.remove('active');
        secondMenu.classList.remove('active');
    });
};