// Initialisation Swiper pour carousel d'avis
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3500,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
