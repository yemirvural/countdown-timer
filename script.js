const eventTime = prompt(`Hesaplamak isteğiniz tarihi girin: `, "1 Jan 2023");

const titleDOM = document.querySelector('#title');
titleDOM.innerHTML = `${eventTime}'e`;

const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minutesEl = document.querySelector('#mins');
const secondsEl = document.querySelector('#secs');

function countdown(){
    const currentDate = new Date();
    const eventDate = new Date(eventTime);

    const totalSec = ((eventDate - currentDate) / 1000);

    const days = Math.floor(totalSec / 3600 / 24);
    const hours = Math.floor(totalSec / 3600) %24; 
    const minutes = Math.floor(totalSec / 60 ) %60;
    const seconds = Math.floor(totalSec) %60; 

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

setInterval(countdown, 1000);

function formatTime(time){
    return time < 10 ? `0${time}`: time;
}
