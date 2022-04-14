gsap.registerPlugin(ScrollTrigger);


let tl = gsap.timeline({

    scrollTrigger: {
        trigger: '.trigger_1',
        start: "top 60%",
        end: "top 30%",
        toggleActions: "play none none reverse",
        
        
      },
  })
  
  let tl2 = gsap.timeline({
       scrollTrigger: {
        trigger: '.hero',
        start: "top 60%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
        
        
      },
  })
  let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.clip',
        start: "top 90%",
        end: "bottom 90%",
        toggleActions: "play none none reverse",
        
        
        
        
      },
  })
   
    
    let tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: '.promotion',
            start: "top 90%",
            end: "bottom 100%",
            toggleActions: "play none none reverse",
            
            
            
          },
    })

    tl.fromTo('.trigger_1', { opacity: '0%', scaleZ: '5%', rotation:-180,}, {opacity: '100%', scaleZ: '100%', rotation: 0, duration: 1,});
    tl2.fromTo('.hero', { opacity: '0%', scale:0.10}, {opacity: '100%', scale:1, duration: 0.5,});
    tl3.fromTo('.clip', {opacity: 0, rotation: 90, scale:0.10}, {opacity: 1, rotation: 0,scale:1, duration: 0.5,});
    tl4.fromTo('.promotion', {opacity: '0%', scale:0.10}, {opacity: '100%', scale:1});

    ScrollTrigger.create({
      onUpdate: ({progress, direction, isActive}) => {
        console.log(isActive);
        if (direction == 1) {
          document.querySelector('.animation').classList.add('scroll-down');
          document.querySelector('.animation').classList.remove('idle');
          document.querySelector('.animation').classList.remove('scroll-up');
        } if (direction == -1 ) {
          document.querySelector('.animation').classList.add('scroll-up');
          document.querySelector('.animation').classList.remove('scroll-down');
          document.querySelector('.animation').classList.remove('idle');
        } 
         if (velocity < -1) {
          document.querySelector('.animation').classList.add('idle');
          document.querySelector('.animation').classList.remove('scroll-up');
          document.querySelector('.animation').classList.remove('scroll-down');
        } 
          
        
      }

    });