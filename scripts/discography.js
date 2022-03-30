let swiper = new Swiper(".swiper", {
    direction: 'vertical',
    effect: 'fade',
    autoplay: { delay: 2000, },
});

gsap.registerPlugin(ScrollTrigger);

gsap.timeline()
    .to('.no2', {
        scrollTrigger: {
            markers: true,
            start: 'center 75%',
            trigger: '.no2',
        },
        x: '100%',
        duration: 2,
    })
    .to('.no2', {
        scrollTrigger: {
            markers: true,
            start: 'center 75%',
            trigger: '.no2',
        },
        x: '100%',
        duration: 2,
    })
    .to('.no2', {
        scrollTrigger: {
            markers: true,
            start: 'center 75%',
            trigger: '.no2',
        },
        x: '100%',
        duration: 2,
    })
    .to('.no2', {
        scrollTrigger: {
            markers: true,
            start: 'center 75%',
            trigger: '.no2',
        },
        x: '100%',
        duration: 2,
    })
    .to('.no2', {
        scrollTrigger: {
            markers: true,
            start: 'center 75%',
            trigger: '.no2',
        },
        x: '100%',
        duration: 2,
    })