const div = document.querySelector('div')

let leftPosition = 0

const distance = 20
const intervalTime = 2000
const stopTime = 20000
const generalMoves = stopTime / intervalTime

let moves = 0


function movingDiv() {
    if (moves < generalMoves) {
        leftPosition += distance
        div.style.left = leftPosition + 'px'
        moves++
    } else {
        clearInterval(moveInterval)
    }
}

const moveInterval = setInterval(movingDiv, intervalTime)