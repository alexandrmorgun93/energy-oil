;
(() => {
    'use strict';

    /*variables*/


    // btnMenu
    let openMenu = document.querySelector('.btn_head');
    let btnMenu = document.querySelector('.menu');
    let closeMenu = document.querySelector('.menu_close');

    if (openMenu !== null) {
        (require('./modules/btnMenu'))(openMenu, btnMenu, closeMenu);
    }
    // tabs content
    let secondMenu = document.querySelector('.second_menu');
    let firstMenu = document.querySelector('.first_menu');
    let newsContent = document.querySelector('.left_news_content');

    if (secondMenu !== null) {
        (require('./modules/tabs-content'))(secondMenu, firstMenu, newsContent);
    }

    let XMLHttpRequestPromise = require('xhr-promise');
    let usd = null, euro = null;
    let xhr = new XMLHttpRequestPromise();
    let currenciesUsd = document.querySelector('.currencies_usd');
    let currenciesEuro = document.querySelector('.currencies_euro');
    let temperatureItem = document.querySelector('.temperature_item');

    if (currenciesUsd !== null) {
        (require('./modules/xml'))(usd, euro, xhr, currenciesUsd, currenciesEuro, temperatureItem);
    }
})
();






