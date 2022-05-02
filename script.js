const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const gridSizeText = document.querySelector('.grid-size-text');
const resetButton = document.querySelector('.reset-button');
const colors = document.querySelectorAll('.color');
let gridSize = 0;
let colorArr = [];

for (let i=0; i<(16*16); i++) {
    let div = document.createElement('div');
    div.className = 'square';
    container.appendChild(div);
}

// colors.forEach(color => {
//     color.addEventListener('click', function(e) {
//         let fullClass = e.target.className;
//         let colorClass = fullClass.replace('color', '');
//         return colorClass;
//     })
// });



// colors.forEach(color => {
//     colorArr.push(color.className.replace('color ', ''));
//     console.log(colorArr);
// });

container.addEventListener('mouseover', function(e) {
    const target = e.target;
    if (target.matches('.square')) {
        target.classList.add('change-color');
        // target.classList.add(colorClass);
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
