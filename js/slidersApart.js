import {Slider} from './sliderConst.js'; 

document.addEventListener('DOMContentLoaded', function() {

    const apartPic = function(){
 
        const createApartPic = function(numbOfPic, apartName, apartNumb) {
    
        const apartPic = []
    
        const picNumb = numbOfPic;
    
        for (let i = 0; i < picNumb; i++) {
    
            apartPic.push(`./img/${apartName}/apart-${apartNumb}-${i+1}.jpg`);
        }
    
        return apartPic
    }
    
    
    const sliderA1 = new Slider('#sliderA1', createApartPic(11, 'A1', 'one'));
    const sliderA2 = new Slider('#sliderA2', createApartPic(10, 'A2', 'two'));
    const sliderA3 = new Slider('#sliderA3', createApartPic(9, 'A3', 'three'));
    
    }
    
    
    apartPic();

});

