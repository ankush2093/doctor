
const swiper = new Swiper('.hm-testimonial-swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,


    pagination: false,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    }
});
