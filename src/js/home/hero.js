import swiper from 'swiper';

const swiper = new Swiper('.swiper', {
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        
  },
  
    slidesPerView: 0,
    centeredSlides: false,
    slidesPerGroupSkip: 0,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  
     //безкінцево
    loop : true,    

  });