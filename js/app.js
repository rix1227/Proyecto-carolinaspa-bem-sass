window.swiper = new Swiper ({
    el: '.slider__contenedor',
    slideClass: 'slider__slide',
    createElements: true,
    autoplay:{
        delay: 3000
    },
    loop:true,
    spaceBetween: 20,
    pagination: true,
    navigation: true
});