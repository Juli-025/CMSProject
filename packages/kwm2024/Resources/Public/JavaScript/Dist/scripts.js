/*!
 * KWM 2024 v1.0.0 (https://www.fh-ooe.at)
 * Copyright 2017-2024 Julia Trimmel
 * Licensed under the GPL-2.0-or-later license
 */
console.log("WE LOVE TYPO3");

//banner slider
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

//news slider
const newsSwiper = new Swiper('.news-swiper', {
    loop: true, // Aktiviert das Schleifen von Slides
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Ermöglicht das Klicken auf die Pagination-Punkte
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Standard-Einstellung: Zeigt 3 Slides an
    slidesPerView: 1,
    centeredSlides: true, // Zentriert die aktiven Slides

    // Responsive Breakpoints
    breakpoints: {
        // Wenn die Fensterbreite >= 768px ist
        768: {
            slidesPerView: 2, // Zeigt 2 Slides an
            spaceBetween: 20, // Abstand zwischen Slides
        },
        // Wenn die Fensterbreite >= 1024px ist
        1024: {
            slidesPerView: 3, // Zeigt 3 Slides an
            spaceBetween: 30, // Größerer Abstand zwischen Slides
        },
    },
});


//switch between article
document.addEventListener('click', function (e) {
    // Prüfen, ob der geklickte Link ein Vor-/Zurück-Link ist
    if (e.target.closest('.news-prev a, .news-next a')) {
        e.preventDefault(); // Verhindert den Standard-Link-Aufruf
        window.location.href = e.target.closest('a').href; // Lädt die neue Seite vollständig
    }
});


//gallery
document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion-item");

    accordions.forEach((accordion, index) => {
        const smallImageLinks = accordion.querySelectorAll(".small-image-link");
        const largeImage = accordion.querySelector(`#large-image-container-${index} img`);

        smallImageLinks.forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();

                // Entferne die "active" Klasse von allen Bildern
                smallImageLinks.forEach(img => img.classList.remove("active"));

                // Setze die "active" Klasse für das aktuelle Bild
                this.classList.add("active");

                // Aktualisiere das große Bild
                const newLargeImageSrc = this.getAttribute("data-large-image");
                if (largeImage) {
                    largeImage.src = newLargeImageSrc;
                } else {
                    console.error("Large image not found for index:", index);
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('.navbar-nav');
    const items = nav.querySelectorAll('.nav-item');
    const totalWidth = Array.from(items).reduce((width, item) => {
        return width + item.offsetWidth + 13;
    }, 0);
    nav.style.width = `${totalWidth}px`;
});

