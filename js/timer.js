let timerButton = document.getElementById("timerButton");
let timerText = document.getElementById("timerText");

let isStarted = false;
let seconds = 0;
let intervalID;

timerButton.onclick = () => {
    if (!isStarted){
        timerButton.innerHTML = "Стоп";
        timerText.innerHTML = toTime(seconds);
        isStarted = true;
        intervalID = setInterval(() => {
            seconds += 1;
            timerText.innerHTML = toTime(seconds);
        }, 1000);
    }
    else{
        timerButton.innerHTML = "Начать";
        isStarted = false;
        seconds = 0;
        clearInterval(intervalID);
    }
}

function toTime(seconds){
    let minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    let hours = Math.floor(minutes / 60);
    minutes -= hours * 60;

    if (String(hours).length === 1) hours = "0" + hours;
    if (String(minutes).length === 1) minutes = "0" + minutes;
    if (String(seconds).length === 1) seconds = "0" + seconds;

    return hours + ":" + minutes + ":" + seconds;
}
