const canvas = document.getElementById("pixelCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(20, 20, 150, 100);

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
}

drawLine(15, 175, 250, 350);

/*ctx.strokeStyle = "slateGray";

for (let i = 20; i < canvas.width; i += 20) {
    drawLine(i, 0, i, canvas.height);
}

for (let i = 20; i < canvas.height; i += 20) {
    drawLine(0, i, canvas.width, i);
}*/


// Select color input => LATER
// Select size input => LATER

// When size is submitted by the user, call makeGrid()

function makeGrid(numRows, numCols, color) {
    // Your code goes here!
    ctx.strokeStyle = color || "black"; //I added the last part just in case color is undefined
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    let width = canvasWidth / numCols;
    let height = canvasHeight / numRow;

    for (let i = width; i < canvasWidth; i += width) {
        drawLine(i, 0, i, canvasHeight);
    }

    for (let i = height; i < canvasHeight; i += height) {
        drawLine(0, i, canvasWidth, i);
    }

}