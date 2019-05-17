
import * as home from './sliderHome.js';

document.addEventListener("DOMContentLoaded", function(){
    
    /*----------  Logo Hover   ----------*/

    const logoText = document.querySelector('.text-img');
    const logoBoat = document.querySelector('.boat-img');
    
    let toggleLogoClass = (e) => {
        e.preventDefault();
    

        logoBoat.classList.toggle('remove-logo', e.type === 'mouseenter');
        logoText.classList.toggle('remove-logo', e.type === 'mouseleave');
     
    }

    logoBoat.addEventListener('mouseenter', toggleLogoClass);
    logoText.addEventListener('mouseleave', toggleLogoClass);


    
    /*----------  Full View Navigation  ----------*/

    const menuMobile = document.querySelector('.nav-bottom-mobile');
    const openMenu = document.querySelectorAll('#menu-link');
    const menuFullSrc = document.querySelector('.main-fullscreen-nav');
    const fixedLink = document.querySelector('.wam-fixed-link');
    const langOpt = document.querySelectorAll('#langTxt');
    const langOptDash = document.querySelector('.dash');
    


    let toggleNavigation = (e) => {
        e.preventDefault()

        if (menuFullSrc.classList.contains('open-nav')) {   
            menuFullSrc.classList.add("close-nav");
            menuFullSrc.classList.remove("open-nav");
            fixedLink.className="wam-fixed-link";
            langOptDash.style.background = '#07465b';
            menuMobile.style.background = 'white';
            

            for (let i=0; i<openMenu.length; i++) {
                openMenu[i].classList.remove("before-ele");
            }

            for (let i=0; i<langOpt.length; i++) {
                langOpt[i].style.color = '#07465b';
            }
            
        } else {
            menuFullSrc.classList.add("open-nav");
            menuFullSrc.classList.remove("close-nav");
            fixedLink.className="wam-fixed-link before-ele";
            langOptDash.style.background = 'white';
            menuMobile.style.background = '#07465b'

            for (let i=0; i<openMenu.length; i++) {
                openMenu[i].classList.add("before-ele");
            }

            for (let i=0; i<langOpt.length; i++) {
                langOpt[i].style.color = 'white';
            }
        }
        
    }
    
    for (let i=0; i<openMenu.length; i++) {
        openMenu[i].addEventListener('click', toggleNavigation);
    }

    
    /*----------  Reservation Circle info  ----------*/
    
    const reserFullSize = document.querySelector("#reservation-info");
    const closeInfo = document.querySelector("#closeBtn-reservtion");
    const reservationLink = document.querySelectorAll("#reservation-link");
    const circle = document.querySelector("#circle-info");

    closeInfo.addEventListener('click', function(e) {
        e.preventDefault();

            reserFullSize.classList.add("hide-reservation");
            circle.classList.remove("circle-scale");
        
        
    });

    for (let i=0; i<reservationLink.length; i++) {
        reservationLink[i].addEventListener('click', function(e) {
            e.preventDefault();
            reserFullSize.classList.remove("hide-reservation");
            circle.classList.add("circle-scale");
            
        });
    }
    
    /*----------  Slide Down List Presentation  ----------*/
    
    const titleSlide = document.querySelectorAll("#title-slideDown");
    const listSlide = document.querySelectorAll("#list-slideDown");

    for (let i=0; i<titleSlide.length; i++) {
        titleSlide[i].addEventListener('click', function(e) {
            e.preventDefault();
     
            titleSlide[i].classList.toggle('active-list');
            listSlide[i].classList.toggle('hide-list');
            
     
         });
    }

    const homePage = document.getElementById("#home");
    if (homePage) {
        home.sliderHome();
    } 

});
