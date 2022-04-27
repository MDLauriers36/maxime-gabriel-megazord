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

const spritesheet = document.querySelector('.spritesheet');
let isScrolling;

window.addEventListener('scroll', function() {
	window.clearTimeout( isScrolling );
  
	isScrolling = setTimeout(function() {
    spritesheet.classList.remove("scroll-up", "scroll-down");
    spritesheet.classList.add("spritesheet");
	}, 200);
});

let anim = gsap.timeline({
  scrollTrigger: {
    trigger: '#main',
    
    onUpdate: (e) => {
      
      if(e.progress){
         if(e.direction==-1){
          spritesheet.classList.add("scroll-up");
          spritesheet.classList.remove("spritesheet");
          spritesheet.classList.remove("scroll-down");
        }else{
          spritesheet.classList.add("scroll-down");
          spritesheet.classList.remove("scroll-up");
          spritesheet.classList.remove("spritesheet");
        }
      }
    }
  
  }
});

let formSubmit = document.querySelector('.formSubmit');
let formInputText = document.querySelector('.formInputText')

formSubmit.addEventListener("submit", function() {
    e.preventDefault();
    if(formInputText != null){
        
    }
})