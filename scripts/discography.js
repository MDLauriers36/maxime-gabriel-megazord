let swiper = new Swiper(".swiper", {
    direction: 'vertical',
    effect: 'fade',
    autoplay: { delay: 2000, },
});

gsap.registerPlugin(ScrollTrigger);

    let sections = document.querySelectorAll('section');
    sections.forEach( function(section) {
        let tl = gsap.timeline({
            scrollTrigger: {
                marker: true,
                trigger: section,
                start: 'top 50%',
                end: 'bottom 10%',
                toggleActions: 'restart reset play reverse'
            }
        });
        tl.from(section, { x: '110%' });
    });