const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const gridSizeText = document.querySelector('.grid-size-text');
let gridSize = 0;

for (let i=0; i<(16*16); i++) {
    let div = document.createElement('div');
    div.className = 'square';
    container.appendChild(div);
}


container.addEventListener('mouseover', function(e) {
    const target = e.target;
    if (target.matches('.square')) {
        target.classList.add('change-color');
    }
})


slider.addEventListener('input', function() {
    gridSize = slider.value;
    gridSizeText.innerText = `${gridSize} x ${gridSize}`;
    
    const squares = document.querySelectorAll('.square');
    //I think I can also use remove child here
    squares.forEach(square => {
        square.remove();
    });
    
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i=0; i<(gridSize*gridSize); i++) {
        let div = document.createElement('div');
        div.className = 'square';
        container.appendChild(div);
    }
    

})
