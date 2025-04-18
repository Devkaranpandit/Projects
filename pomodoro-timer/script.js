const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const box = document.getElementById('box');

let interval;
let totalTime = 25*60;
let currentTime = totalTime;
function startTimer(){
    interval = setInterval(()=>{
        if(currentTime > 0){
            currentTime--;
            updateTimer(currentTime);
        }
        else{
            const pop = document.createElement('div')
            pop.innerHTML = 
            `<p id="pop">Times up</p>
            <p id="rest">Take 5 minutes break</p>
            <button id="restart">OK</button>
            `
            pop.id = "popUp";
            document.body.appendChild(pop);
            const restart = document.getElementById('restart');
            restart.addEventListener('click',()=>{
                resetTimer();
                pop.remove();
            })
            clearInterval(interval);
        }
    },1000);
}



function updateTimer(sec){
    const minutes = Math.floor(sec/60);
    const seconds = sec % 60;
    timer.textContent = `${pad(minutes)}:${pad(seconds)}`;
}

function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    currentTime = totalTime;
    updateTimer(currentTime);
}

function pad(num){
    return num.toString().padStart(2, "0");
}

start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);