const div = document.querySelector('div')
let moving = 0

setInterval(()=>{
    if(moving){
        div.style.width = '400px'
        div.style.height = '400px'
    }else{
        div.style.width = '200px'
        div.style.height = '200px'
    }
    moving = !moving
}, 1000)