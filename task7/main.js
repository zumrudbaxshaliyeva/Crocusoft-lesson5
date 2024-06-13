document.addEventListener('keydown', function(e){
    if(e.code === 'Space'){
        const animal = document.getElementById('animal')
        animal.style.transform = 'translateY(-200px)'
        setTimeout(()=>{
            animal.style.transform = 'translateY(0)'
        }, 300)
    }
})