
/*----------  Resizing img of sliders presenatations  ----------*/

export function generHeight() {

    const imgOffer= document.querySelectorAll(".slide-offer img");
    const slidesCnt= document.querySelectorAll(".slides-cnt");

    for (let i=0; i<slidesCnt.length; i++) {

        const imgWidth = imgOffer[0].clientWidth;

        const imgHeight = Math.round(imgWidth / 1.4);

        slidesCnt[i].style.height = imgHeight + 'px';
    }

    window.addEventListener('resize', function(e) {
        e.preventDefault();
    
        for (let i=0; i<slidesCnt.length; i++) {

            const imgWidth = imgOffer[0].clientWidth;

            const imgHeight = Math.round(imgWidth / 1.4);

            slidesCnt[i].style.height = imgHeight + 'px';
        }
    });

}




