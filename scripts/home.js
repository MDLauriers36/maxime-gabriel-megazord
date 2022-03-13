import Swiper from 'swiper';
  // import Swiper styles
  import 'swiper/css';
  let swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });