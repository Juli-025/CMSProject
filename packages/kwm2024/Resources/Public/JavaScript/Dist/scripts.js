/*!
 * KWM 2024 v1.0.0 (https://www.fh-ooe.at)
 * Copyright 2017-2024 Julia Trimmel
 * Licensed under the GPL-2.0-or-later license
 */
console.log("WE LOVE TYPO3");

// Banner slider
const maskSwiper = new Swiper('.mask-swiper', {
    // Optional parameters
    loop: true, // Enables looping of slides

    // If we need pagination
    pagination: {
        el: '.swiper-pagination', // Pagination element
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next', // Button to go to the next slide
        prevEl: '.swiper-button-prev', // Button to go to the previous slide
    },

    autoplay: {
        delay: 10000, // Auto-advance delay in milliseconds
    },

    centeredSlides: true, // Centers the active slides

    effect: 'slide', // Transition effect
});

// News slider
const newsSwiper = new Swiper('.news-swiper', {
    loop: true, // Enables looping of slides
    pagination: {
        el: '.swiper-pagination', // Pagination element
        clickable: true, // Allows clicking on pagination dots
    },
    navigation: {
        nextEl: '.swiper-button-next', // Button to go to the next slide
        prevEl: '.swiper-button-prev', // Button to go to the previous slide
    },

    // Default settings: displays 1 slide
    slidesPerView: 1,
    centeredSlides: true, // Centers the active slides

    // Responsive breakpoints
    breakpoints: {
        // When the viewport width is >= 768px
        768: {
            slidesPerView: 2, // Displays 2 slides
            spaceBetween: 20, // Spacing between slides in pixels
        },
        // When the viewport width is >= 1024px
        1024: {
            slidesPerView: 3, // Displays 3 slides
            spaceBetween: 30, // Larger spacing between slides
        },
    },
});

// Switch between articles
document.addEventListener('click', function (e) {
    // Check if the clicked link is a "previous" or "next" link
    if (e.target.closest('.news-prev a, .news-next a')) {
        e.preventDefault(); // Prevent the default link behavior
        window.location.href = e.target.closest('a').href; // Fully load the new page
    }
});

// Gallery functionality
document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion-item");

    accordions.forEach((accordion, index) => {
        const smallImageLinks = accordion.querySelectorAll(".small-image-link");
        const largeImage = accordion.querySelector(`#large-image-container-${index} img`);

        smallImageLinks.forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault(); // Prevent default link behavior

                // Remove the "active" class from all images
                smallImageLinks.forEach(img => img.classList.remove("active"));

                // Add the "active" class to the currently clicked image
                this.classList.add("active");

                // Update the large image
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

// Navbar fitting size
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('.navbar-nav');
    const items = nav.querySelectorAll('.nav-item');
    const totalWidth = Array.from(items).reduce((width, item) => {
        return width + item.offsetWidth + 13; // Add up the width of all items with spacing
    }, 0);
    nav.style.width = `${totalWidth}px`; // Set the navbar width dynamically
});
