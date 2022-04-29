const container = document.querySelector('.container');

for (let i=0; i<(16*16); i++) {
    let div = document.createElement('div');
    div.className = 'square';
    // div.innerText = i;
    container.appendChild(div);
}

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseover', function() {
        square.classList.add('change-color');
    })
});
