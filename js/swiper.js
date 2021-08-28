
new Swiper('.achievements__slider--container',{
  initialSlide: 1,
  centeredSlides: true,
  slidesPerView: 3,
  loop: true,

  pagination: {
    el: '.achievements__slider--pagination',
    dynamicBullets: true,
  },

  breakpoints:{
    0: {
      slidesPerView: 1,
      spaceBetween: 40,
    }, 

    300: {
      slidesPerView: 1.65
    },

    380:{
      slidesPerView: 1.9
    },
    
    450:{
      slidesPerView: 2.5,
      spaceBetween: 40
    },

    650:{
      slidesPerView: 3
    }
  }
});