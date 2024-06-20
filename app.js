const startElement = document.querySelectorAll(".start")[0];
const stopElement = document.querySelectorAll(".stop")[0];
const resetElement = document.querySelectorAll(".reset")[0];
const timerElement = document.querySelectorAll("h1")[0];


let milliSeconds = 00;
let seconds = 00;
let minutes = 00;

let stopTimer;
let timer = null

startElement.addEventListener('click', () => {
    if(timer !== null){
        clearInterval(stopTimer)
    }
    stopTimer = setInterval(() => {
        startTimer()
    },  10)
})

stopElement.addEventListener('click', () => {
    clearInterval(stopTimer)
})


resetElement.addEventListener('click', () => {
    clearInterval(stopTimer)
    timerElement.innerHTML = "00 : 00 : 00"
    milliSeconds = seconds = minutes = 0
})

function startTimer() {
    milliSeconds++
    if(milliSeconds === 60){
        milliSeconds = 0
        seconds++
        if(seconds === 60){
            seconds = 0
            minutes++
            if(minutes === 60){
                minutes = 0
            }
        }
    }

    let milli = milliSeconds < 10 ? `0${milliSeconds}`: milliSeconds
    let sec = seconds < 10 ? `0${seconds}` : seconds
    let min = minutes < 10 ? `0${minutes}` : minutes

    timerElement.innerHTML = `${milli} : ${sec} ${min}`
}