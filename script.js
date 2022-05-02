/*Variables*/
const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const gridSizeText = document.querySelector('.grid-size-text');
const resetButton = document.querySelector('.reset-button');
const colors = document.querySelectorAll('.color');
const eraser = document.querySelector('.eraser');

let color;
let gridSize = 0;

/*Create initial grid*/
for (let i=0; i<(16*16); i++) {
    let div = document.createElement('div');
    div.className = 'square';
    container.appendChild(div);
}

/*Click on color buttons to choose color*/
colors.forEach(currentColor => {
    currentColor.addEventListener('click', chooseColor);
});

eraser.addEventListener('click', chooseColor);

/*Color selection*/
function chooseColor(e) {
    if (e.target.dataset.color == 'red') {
        color = 'red';
    }
    if (e.target.dataset.color == 'orange') {
        color = 'orange'; 
    }
    if (e.target.dataset.color == 'yellow') {
        color = 'yellow';
    }
    if (e.target.dataset.color == 'green') {
        color = 'green';
    }
    if (e.target.dataset.color == 'blue') {
        color = 'blue';
    }
    if (e.target.dataset.color == 'violet') {
        color = 'violet';
    }
    if (e.target.dataset.color == 'white') {
        color = 'white';
    }
    if (e.target.dataset.color == 'black') {
        color = 'black';
    }
    if (e.target.dataset.color == 'eraser') {
        color = '#1e1e38';
    }
}

/*Changes pixel color on hover*/
container.addEventListener('mouseover', function(e) {
    const target = e.target;
    if (target.matches('.square')) {
        target.style.backgroundColor = color;
    }
})

/*Creates new grid based on slider input*/
slider.addEventListener('input', function() {
    gridSize = slider.value;
    gridSizeText.innerText = `${gridSize} x ${gridSize}`;
    
    const squares = document.querySelectorAll('.square');
    
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

/*Reset etch-a-sketch*/
resetButton.addEventListener('click', function() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.remove();
    });

    gridSize = slider.value;
    gridSizeText.innerText = `${gridSize} x ${gridSize}`;

    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i=0; i<(gridSize*gridSize); i++) {
        let div = document.createElement('div');
        div.className = 'square';
        container.appendChild(div);
    }
})
