'use strict';

const swiper = new window.Swiper(".swiper-1", {
    initialSlide: 1,
    slidesPerView: 1,
    centeredSlides: true,
    direction: "horizontal",
    loop: true,
  
    pagination: {
      el: ".swiper-pagination-1",
      clickable: true,
    },
  
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
});

const swiper2 = new window.Swiper(".swiper-2", {
    initialSlide: 1,
    slidesPerView: 1,
    centeredSlides: true,
    direction: "horizontal",
    loop: true,
  
    pagination: {
      el: ".swiper-pagination-2",
      clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2',
    },

    breakpoints: {
        767: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 5,
        }
    },
    
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
});

const swiper3 = new window.Swiper(".swiper-3", {
    initialSlide: 2,
    slidesPerView: 2,
    centeredSlides: false,
    direction: "horizontal",
    loop: true,
  
    pagination: {
      el: ".swiper-pagination-3",
      clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next-3',
        prevEl: '.swiper-button-prev-3',
    },

    breakpoints: {
        767: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 6,
        },
        1280: {
            slidesPerView: 9,
        }
    },
});

export { swiper, swiper2, swiper3 };