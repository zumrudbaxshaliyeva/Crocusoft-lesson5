const body = document.querySelector('body')

function getRandomColor(){
    const letters = '0123456789ABCDEF'
    let color = '#'
    for(let i =0; i<6; i++){
        color+=letters[Math.floor(Math.random() * 16)]
    }
    return color
}


body.addEventListener('click', function(){
    const box = document.createElement('div')
    box.id = 'box'
    box.style.background = getRandomColor()
    body.appendChild(box)
})
