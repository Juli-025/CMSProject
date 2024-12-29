/*!
 * KWM 2024 v1.0.0 (https://www.fh-ooe.at)
 * Copyright 2017-2024 Julia Trimmel
 * Licensed under the GPL-2.0-or-later license
 */
console.log("WE LOVE TYPO3");
const maskSwiper = new Swiper('.mask-swiper', {
    // Optional parameters

    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 10000,
    },

    centeredSlides: true,

    effect: 'slide',



});


const newsSwiper = new Swiper('.news-swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: 3,
    centeredSlides: true,

});




