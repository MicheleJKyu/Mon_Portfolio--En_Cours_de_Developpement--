const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabcursor: true,
    spaceBetween: 20,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
  
    // Fleches de Navigation
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },

        20: {
            slidesPerView: 2
        },

        55: {
            slidesPerView: 3
        },
  }

});