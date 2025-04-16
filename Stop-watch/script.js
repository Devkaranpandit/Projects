const timer = document.getElementById('timer')
const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')
const resetButton = document.getElementById('reset')

let time = 0;
let elapsedTime = 0;
let timeInterval;

function startTimer(){
    time = Date.now() - elapsedTime;
    timeInterval = setInterval(()=>{
        elapsedTime = Date.now() - time;
        timer.textContent = formatTime(elapsedTime)
    },10)
    startButton.disabled = true;
    stopButton.disabled = false;
}

function formatTime(elapsedTime){
    const milliseconds = Math.floor((elapsedTime%1000)/10);
    const seconds = Math.floor((elapsedTime%(1000*60))/1000);
    const minutes = Math.floor((elapsedTime%(1000*60*60)/(1000*60)));
    const hours = Math.floor(elapsedTime/(1000*60*60));
    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
        (minutes ? (minutes > 9 ? minutes : "0" +minutes) :"00") + ":" +
        (seconds ? (seconds > 9 ? seconds : "0" +seconds) :"00") + ":" +
        (milliseconds > 9 ?milliseconds :"0" + milliseconds))
}

function stopTimer(){
    clearInterval(timeInterval);
    stopButton.disabled = true;
    startButton.disabled = false;
}

function resetTimer(){
    clearInterval(timeInterval);
    elapsedTime = 0;
    timer.textContent = "00:00:00";
    resetButton.disabled = true;
    stopButton.disabled = false;
}

startButton.addEventListener('click',startTimer);
stopButton.addEventListener('click',stopTimer);
resetButton.addEventListener('click',resetTimer);