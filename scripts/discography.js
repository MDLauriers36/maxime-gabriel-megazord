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
                trigger: section,
                start: 'top 50%',
                end: 'bottom 10%',
                toggleActions: 'restart reset play reverse'
            }
        });
        tl.fromTo(section,
            { opacity: '0%'},
            { opacity: '100%'}
        );
    });

    let detailsDroite = document.querySelectorAll('.detailsDroite');
    detailsDroite.forEach( function(detailDroit) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: detailDroit,
                start: 'top 50%',
                end: 'bottom 10%',
                toggleActions: 'restart reset play reverse'
            }
        });
        tl.from(detailDroit, { x: '110%' });
    });

    let detailsGauche = document.querySelectorAll('.detailsGauche');
    detailsGauche.forEach( function(detailGauche) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: detailGauche,
                start: 'top 50%',
                end: 'bottom 10%',
                toggleActions: 'restart reset play reverse'
            }
        });
        tl.from(detailGauche, { x: '-165%' });
    });