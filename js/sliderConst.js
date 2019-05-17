import * as picHeight from './generHeight.js';

document.addEventListener('DOMContentLoaded', function() {

    const Slider = class {

        constructor(elemSelector, listOfPictures) {
            this.currentSlide = 0;
            this.sliderSelector = elemSelector;
            this.elem = null;
            this.slider = null;
            this.slides = listOfPictures;
            this.prev = null;
            this.next = null;
            this.dots = [];
            this.generateSlider();
            this.createNav();
            this.changeSlide(this.currentSlide);
        }
    
        generateSlider() {
            this.slider = document.querySelector(this.sliderSelector);
            this.slider.classList.add('slider-section');
            const slidesCnt = document.createElement('div');
            slidesCnt.classList.add('slides-cnt');
            for (let i = 0; i < this.slides.length; i++) {
                const newSlide = document.createElement("div");
                newSlide.classList.add('slide-offer');
                newSlide.innerHTML = `
                <img src=${this.slides[i]}>
                `;
                slidesCnt.appendChild(newSlide);
            }
            this.elem = slidesCnt.querySelectorAll('.slide-offer');
            this.slider.appendChild(slidesCnt);
        }
    
        createNav() {
            const navCnt = document.createElement('div');
            navCnt.classList.add('slider-nav');
            navCnt.classList.add('offer-nav');
    
            // /*----------  Create dots  ----------*/
            const dotsCnt = document.createElement('div');
            dotsCnt.classList.add('dots');
            dotsCnt.classList.add('offer-dots');
    
            for (let i = 0; i < this.elem.length; i++) {
                const dot = document.createElement('button');
                dot.classList.add('dot');
                dot.addEventListener('click', () => {
                    this.changeSlide(i);
                });
                dotsCnt.appendChild(dot);
                // this.dots.push(dot);
            }
    
            /*----------  Create arrows  ----------*/
            const arrowsCnt = document.createElement('div');
            arrowsCnt.classList.add('arrows');
            arrowsCnt.classList.add('offer-arr');
            this.prev = document.createElement('a');
            this.prev.classList.add('prev');
            this.prev.addEventListener('click', this.slidePrev.bind(this));
            this.next = document.createElement('a');
            this.next.classList.add('next');
            this.next.addEventListener('click', this.slideNext.bind(this));
            arrowsCnt.appendChild(this.prev);
            arrowsCnt.appendChild(this.next);
            /*----------  Append Arrows&Dots to Slider Nav ----------*/
            navCnt.appendChild(dotsCnt);
            navCnt.appendChild(arrowsCnt);
            this.slider.appendChild(navCnt);
        }
    
        changeSlide(index) {
            [].forEach.call(this.elem, function (slide) {
                slide.classList.remove('active-slide');
            });
            this.elem[index].classList.add('active-slide');
            this.dots.forEach(function (dot) {
                dot.classList.remove('active-dot');
                dot.classList.add('dot');
            });
            // this.dots[index].classList.remove('dot');
            // this.dots[index].classList.add('active-dot');
            this.currentSlide = index;
            clearInterval(this.time);
            this.time = setTimeout(() => {
                this.slideNext();
            }, 7400);
        }
    
        slidePrev() {
            this.currentSlide--;
            if (this.currentSlide < 0) {
                this.currentSlide = this.elem.length - 1;
            }
            this.changeSlide(this.currentSlide);
        }
        
        slideNext() {
            this.currentSlide++;
            if (this.currentSlide > this.elem.length - 1) {
                this.currentSlide = 0;
            }
            this.changeSlide(this.currentSlide);
        }
    }
    

    
    const createPic = function(numbOfPic, name, numb) {
    
        const arrayPic = []
    
        const picNumb = numbOfPic;
    
        for (let i = 0; i < picNumb; i++) {
    
            arrayPic.push(`http://wamazury.pl/wp-content/uploads/2019/04/${name}-${numb}-${i+1}.jpg`); 
        }
    
        return arrayPic 
    }


    const apartPic = function(){
    
    const sliderA1 = new Slider('#sliderA1', createPic(11, 'apart','one'));
    const sliderA2 = new Slider('#sliderA2', createPic(10, 'apart','two'));
    const sliderA3 = new Slider('#sliderA3', createPic(9, 'apart','three'));
    
    }

    const roomPic = function() {
        
        const sliderP4 = new Slider('#sliderP4', createPic(9, 'room', 'four'));
        const sliderP5 = new Slider('#sliderP5', createPic(9, 'room', 'five'));
        const sliderP6 = new Slider('#sliderP6', createPic(10, 'room', 'six'));
        const sliderP7 = new Slider('#sliderP7', createPic(9, 'room', 'seven'));
        const kitchen = new Slider('#kitchen', createPic(5, 'kitchen', 'kitchen'));
        
    }
    
    
    
  
    const apartPage = document.querySelector("#apart");
    const roomsPage = document.querySelector("#rooms");

   

    if (apartPage) {

        apartPic();
    
    } else {
        roomPic();
    }
    
    if (apartPage || roomsPage) {

        picHeight.generHeight();
    
    } 

});



        
        
    
    


