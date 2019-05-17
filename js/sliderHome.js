export function sliderHome(){

     /*----------  Slider ----------*/
    
     const slides = document.querySelectorAll("#slide");
     const prevBtn = document.querySelector("#prevBtn");
     const nextBtn = document.querySelector("#nextBtn");
     const dots = document.querySelectorAll("#dotBtn")
 
     let currentIndex = 0;
     let sliderTime = null;
 
     const prevSlide = function() {
         currentIndex--;
         if (currentIndex < 0) {
             currentIndex = slides.length - 1;
         }
         autoMoveSlides(currentIndex);
     }
 
     const nextSlide = function() {
         currentIndex++;
         if (currentIndex > slides.length - 1) {
             currentIndex = 0;
         }
         autoMoveSlides(currentIndex);
     }
 
     function autoMoveSlides(index){
 
         slides.forEach(function(slide) {
             slide.classList.remove('active-slide');
         });
 
         dots.forEach(function(dot) {
             dot.classList.remove('active-dot');
             dot.classList.add('dot');
         });
 
         slides[index].classList.add('active-slide');
         dots[index].classList.remove('dot');
         dots[index].classList.add('active-dot');
 
         clearInterval(sliderTime);
         sliderTime = setTimeout( () => {
             nextSlide();
         }, 7400);
     }
 
     autoMoveSlides(currentIndex);
 
     prevBtn.addEventListener('click', prevSlide);
     nextBtn.addEventListener('click', nextSlide);   
 
 
     /*----------  Hover effect on slide ----------*/
 
     const slideSpan = document.querySelectorAll("#slide a>span");
 
     if (slides) {
         for (let i=0; i < slides.length; i++) {
 
         const hoverEffectOverSlides = (e) => {
             e.preventDefault();
 
             if (e.type === 'mouseenter') {
                 slideSpan[i].classList.remove('slider-link') 
                 slideSpan[i].classList.add('slider-link-hover')
             } else {
                 slideSpan[i].classList.add('slider-link') 
                 slideSpan[i].classList.remove('slider-link-hover')
             }
         }
 
           slides[i].addEventListener("mouseenter", hoverEffectOverSlides);
           slides[i].addEventListener("mouseleave", hoverEffectOverSlides);
       }
 
     }
 

}
   
  