let swiper = new Swiper(".swiper", {
    direction: 'vertical',
    effect: 'fade',
    autoplay: { delay: 2000, },
});

gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        duration: 2,
        scrollTrigger: {
          markers: true,
          start: 'center',
          toggleActions: 'restart complete reverse reset',
          trigger: '.no2',
        },
      })
        .from('.element.no2', { x: '-100%' })
          