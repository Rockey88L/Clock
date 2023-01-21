setInterval(setTime, 1000)

// declaring our elements here
const hoursHand = document.querySelector('[data-hour-hand]');
const minutesHand = document.querySelector('[data-minute-hand]');
const secondsHand = document.querySelector('[data-second-hand]');

// getting and setting a get currrent date function
function setTime() {
    const currentDate = new Date(); 
    const secondsCount = currentDate.getSeconds() / 60;
    const minutesCount = ( secondsCount + currentDate.getMinutes()) / 60;
    const hoursCount = (minutesCount + currentDate.getHours()) / 12;
    setRotation(secondsHand, secondsCount);
    setRotation(minutesHand, minutesCount);
    setRotation(hoursHand, hoursCount);
    
}
// setting a rotation function here, allowing elements to rotate
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotVar', rotationRatio * 360);
}

setTime();