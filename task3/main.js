let square = document.getElementById('square')
let startBtn = document.getElementById('btn1')
let stopBtn = document.getElementById('btn2')

let rotation = 0
let interVal;


startBtn.addEventListener('click', () => {
    setTimeout(() => {
        interVal = setInterval(() => {
            rotation += 90
            square.style.transform = `rotate(${rotation}deg)`
        }, 2000)
    }, 1000)
})


stopBtn.addEventListener('click', () => {
    clearInterval(interVal)
    let count = 3
    stopBtn.textContent = `stop ${count}`
    let countInterval = setInterval(() => {
        count -= 1
        stopBtn.textContent = `stop ${count}`
        if (count === 0) {
            clearInterval(countInterval)
            stopBtn.textContent = 'stop'
        }
    }, 1000)
})