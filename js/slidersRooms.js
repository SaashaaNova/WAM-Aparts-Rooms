import Slider from './sliderConst.js';

const roomPic = function() {

    const createRoomPic = function(numbOfPic, roomName, roomNumb) {

        const roomPic = []
    
        const picNumb = numbOfPic;
    
        for (let i = 0; i < picNumb; i++) {
    
            roomPic.push(`./img/${roomName}/room-${roomNumb}-${i+1}.jpg`);
        }
    
        return roomPic
    }
    
    const createKitchenPic = function(numbOfPic) {
    
        const kitchenPic = []
    
        const picNumb = numbOfPic;
    
        for (let i = 0; i < picNumb; i++) {
    
            kitchenPic.push(`./img/Kitchen/kitchen-${i+1}.jpg`);
        }
    
        return kitchenPic
    }
    
    
    const sliderP4 = new Slider('#sliderP4', createRoomPic(9, 'P4', 'four'));
    const sliderP5 = new Slider('#sliderP5', createRoomPic(9, 'P5', 'five'));
    const sliderP6 = new Slider('#sliderP6', createRoomPic(10, 'P6', 'six'));
    const sliderP7 = new Slider('#sliderP7', createRoomPic(9, 'P7', 'seven'));
    const kitchen = new Slider('#kitchen', createKitchenPic(5));
}


roomPic();