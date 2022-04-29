const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const button = document.querySelector('.button-prompt');
let columns = 0;
let rows = 0;

for (let i=0; i<(16*16); i++) {
    let div = document.createElement('div');
    div.className = 'square';
    container.appendChild(div);
}

const squares = document.querySelectorAll('.square');


button.addEventListener('click', function() {
    const squares = document.querySelectorAll('.square');

    columns = prompt("How many columns?", "16");
    rows = prompt("How many rows?", "16");
    
    squares.forEach(square => {
        square.remove();
    });
    
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    for (let i=0; i<(columns*rows); i++) {
        let div = document.createElement('div');
        div.className = 'square';
        container.appendChild(div);
    }
    
    squares.forEach(square => {
        square.addEventListener('mouseover', function() {
            square.classList.add('change-color');
        })
    });
})

squares.forEach(square => {
    square.addEventListener('mouseover', function() {
        square.classList.add('change-color');
    })
});

