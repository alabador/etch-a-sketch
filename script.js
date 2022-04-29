const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const button = document.querySelector('.button-prompt');
let gridSize = 0;
// let columns = 0;
// let rows = 0;

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

button.addEventListener('click', function() {
    gridSize = prompt("Choose a grid size", "16");
    // columns = prompt("How many columns?", "16");
    // rows = prompt("How many rows?", "16");
    
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

