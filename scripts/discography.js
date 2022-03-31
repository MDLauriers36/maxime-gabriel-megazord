let swiper = new Swiper(".swiper", {
    direction: 'vertical',
    effect: 'fade',
    autoplay: { delay: 2000, },
});

gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
          markers: true,
          start: 'top 25%',
          end: 'bottom 15%',
          toggleActions: 'restart reset play reset',
          trigger: '.album-iridescent',
        },
      })
        .from('.iridescent', { x: '110%' })
        .from('.iridescentDetails', { x: '-155%' }, '<' )
        