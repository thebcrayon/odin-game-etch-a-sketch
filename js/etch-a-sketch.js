const container = document.querySelector('.container');
const makeGridBtn = document.querySelector('.button');
const C_WIDTH = container.getBoundingClientRect().width;
let mouseHasBeenClicked = false;

drawBoard(16);

makeGridBtn.addEventListener('click', () => {
    container.textContent = '';
    let gridSize = document.querySelector('input').value;
    if (gridSize > 0 && gridSize <= 100) {
        drawBoard(gridSize);
    } else {
        alert('Please Enter a Number 1 - 100');
    }
});

container.addEventListener('click', clickSwitch);

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
    container.addEventListener('mouseover', mouseOver);
}

function finishDraw(event) {
    container.removeEventListener('mouseover', mouseOver);
}

function mouseOver(event) {
    event.target.style.backgroundColor = "black";
}

function drawBoard(gridSize) {
    let unit = gridSize;
    for (let i = 0; i < unit; i++) {
        for (let j = 0; j < unit; j++) {
            container.appendChild(createPixel(gridSize));
        }
    }
}

function createPixel(gridSize) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.width = C_WIDTH * (1 / gridSize) + 'px';
    pixel.style.height = C_WIDTH * (1 / gridSize) + 'px';
    return pixel;
}

function changeBackgroundColor() {
    return `black`;
}