const input = document.querySelector('input')
const div = document.querySelector('div')


input.addEventListener('input', ()=>{
    const size = 10
    const inputVal = parseInt(input.value)
    const newSize = size + inputVal

    div.style.width = `${newSize}px`
    div.style.height = `${newSize}px`
})