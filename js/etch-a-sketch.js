const drawingboard = document.querySelector('.drawingboard');
const makeGridBtn = document.querySelector('.button');
let C_WIDTH = drawingboard.getBoundingClientRect().width;
let mouseHasBeenClicked = false;

drawBoard(16);


makeGridBtn.addEventListener('click', () => {
    drawingboard.textContent = '';
    let gridSize = document.querySelector('input').value;
    if (gridSize > 0 && gridSize <= 100) {
        drawBoard(gridSize);
    } else {
        alert('Please Enter a Number 1 - 100');
    }
});

drawingboard.addEventListener('mousedown', clickSwitch);
drawingboard.addEventListener('mouseup', clickSwitch);

function clickSwitch(event) {
    if (!mouseHasBeenClicked) {
        startDraw(event);
        mouseHasBeenClicked = true;
    } else {
        finishDraw(event);
        mouseHasBeenClicked = false;
    }
}

function startDraw(event) {
    mouseOver(event);
    drawingboard.addEventListener('mouseover', mouseOver);
}

function finishDraw(event) {
    drawingboard.removeEventListener('mouseover', mouseOver);
}

function mouseOver(event) {
    event.target.style.backgroundColor = changeBackgroundColor();
   // event.target.style.border = '1px solid black';
}

function drawBoard(gridSize) {
    for (i = 0 ; i < gridSize ; i++){
        let gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');
        drawingboard.appendChild(gridRow);
        for (j = 0 ; j < gridSize ; j++){
            gridRow.appendChild(createPixel(gridSize));
        }
    }
}

function createPixel(gridSize) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.width = C_WIDTH * (1 / gridSize) + 'px';
    // pixel.style.height = C_WIDTH * (1 / gridSize) + 'px';
    pixel.style.aspectRatio = '1 / 1';
    return pixel;
}

function changeBackgroundColor() {
    return `rgb(${randomNumber()} ${randomNumber()} ${randomNumber()})`;
}

function randomNumber (){
    return Math.floor(Math.random() * 255);
}