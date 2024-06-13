function abc(){
    let table = document.getElementById('table')
    let cells = table.getElementsByTagName('td')
    
    let max = Number.NEGATIVE_INFINITY
    let min = Number.POSITIVE_INFINITY

    let minCell
    let maxCell

    for(const cell of cells){
        const val = parseInt(cell.textContent, 9)
        if(val>max){
            max = val
            maxCell = cell
        } else if(val<min){
            min = val
            minCell = cell
        }
    }

    if(maxCell) maxCell.classList.add('max')
    if(minCell) minCell.classList.add('min')
}

abc()