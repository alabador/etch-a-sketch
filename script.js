const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const button = document.querySelector('.button-prompt');

for (let i=0; i<(16*16); i++) {
    let div = document.createElement('div');
    div.className = 'square';
    container.appendChild(div);
}

button.addEventListener('click', function() {
    let columns = prompt("How many columns?", "16");
    let rows = prompt("How many rows?", "16");
    
})

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseover', function() {
        square.classList.add('change-color');
    })
});

