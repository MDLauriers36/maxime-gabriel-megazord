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
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'restart complete reverse reset',
          trigger: '.no2',
        },
      })
        .to('.element.no2', { x: '100%' })
          