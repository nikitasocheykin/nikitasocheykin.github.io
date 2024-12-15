const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
  
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },

    effect: 'creative',
    creativeEffect: {
        prev: {
          translate: ['-20px', '-20px', 0],
          opacity: 0,
        },
        next: {
          translate: ['20px', '20px', 0],
          opacity: 1,
        },
    },
});

document.querySelector('.next').addEventListener('click', function() {
    swiper.slideNext();
});

document.querySelector('.prev').addEventListener('click', function() {
    swiper.slidePrev();
});