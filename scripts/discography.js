let swiper = new Swiper(".swiper", {
    direction: 'vertical',
    effect: 'fade',
    autoplay: { delay: 2000, },
});

gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
          markers: true,
          start: 'top 75%',
          end: 'bottom 10%',
          toggleActions: 'restart reset play',
          trigger: 'section',
        },
      })
        .from('.iridescent', { x: '110%' })
        .from('.iridescentDetails', { x: '-155%' }, '<' )
        