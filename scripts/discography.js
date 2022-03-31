let swiper = new Swiper(".swiper", {
    direction: 'vertical',
    effect: 'fade',
    autoplay: { delay: 2000, },
});

gsap.registerPlugin(ScrollTrigger);

    // gsap.timeline({
    //     scrollTrigger: {
    //       markers: true,
    //       start: 'top 50%',
    //       end: 'bottom 10%',
    //       toggleActions: 'restart reset play reverse',
    //       trigger: 'section',
    //     },
    //   })
    //     .from('.iridescent', { x: '110%' })
    //     .from('.iridescentDetails', { x: '-155%' }, '<' )
    //     .from('.wteb', { x: '-165%' })
    //     .from('.wtebDetails', { x: '110%' });
        
        // gsap.timeline()
        // .from('.iridescent', { x: '110%', scrollTrigger: {
        //     markers: true,
        //     start: 'top 50%',
        //     end: 'bottom 10%',
        //     toggleActions: 'play',
        //     trigger: '.album-iridescent',
        //   }, })
        // .from('.iridescentDetails', { x: '-155%', scrollTrigger: {
        //     markers: true,
        //     start: 'top 50%',
        //     end: 'bottom 10%',
        //     toggleActions: 'restart reset play reverse',
        //     trigger: '.album-iridescent',
        //   }, }, '<' )
        // .from('.wteb', { x: '-165%', scrollTrigger: {
        //     markers: true,
        //     start: 'top 50%',
        //     end: 'bottom 10%',
        //     toggleActions: 'restart reset play reverse',
        //     trigger: '.album-wteb',
        //   }, })
        // .from('.wtebDetails', { x: '110%', scrollTrigger: {
        //     markers: true,
        //     start: 'top 50%',
        //     end: 'bottom 10%',
        //     toggleActions: 'restart reset play reverse',
        //     trigger: '.album-wteb',
        //   }, });

    // let sections = gsap.utils.toArray('.album');

    // sections.forEach((section) => {
      
    //   gsap.timeline(section, {
    //     scrollTrigger: {
    //         trigger: section,
    //         start: 'top 50%',
    //         end: 'bottom 10%',
    //         toggleActions: 'restart reset play reverse',
    //         markers: true
    //     },
    // })
    // .from('.iridescent', { x: '110%' })
    // .from('.iridescentDetails', { x: '-155%' }, '<' )
    // .from('.wteb', { x: '-165%' })
    // .from('.wtebDetails', { x: '110%' })
    // });