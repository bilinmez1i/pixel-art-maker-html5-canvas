const canvas = document.getElementById("pixelCanvas");
const ctx = canvas.getContext("2d");

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
}

// Select color input => 

// Select size input => 
const rowsInput = document.getElementById("rows-input");
const colsInput = document.getElementById("cols-input");
const submitBtn = document.getElementById("submit-btn");



function makeGrid(numRows, numCols, color) {
    // Your code goes here!
    ctx.fillStyle = "white";//To clear the canvas
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = color || "black"; //I added the last part just in case color is undefined
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    let width = canvasWidth / numCols;
    let height = canvasHeight / numRows;

    for (let i = width; i < canvasWidth; i += width) {
        drawLine(i, 0, i, canvasHeight);
    }

    for (let i = height; i < canvasHeight; i += height) {
        drawLine(0, i, canvasWidth, i);
    }

}

makeGrid(20, 20, "lightGray");

// When size is submitted by the user, call makeGrid()
submitBtn.onclick = function(event){
    //alert("clicked!");

    event.preventDefault();

    let numRows = rowsInput.value;
    let numCols = colsInput.value;

    console.log(typeof numRows);
    console.log(numRows + 1);
    console.log("Rows: " + numRows);
    console.log("Columns: " + numCols);

    makeGrid(numRows, numCols, "lightGray");
};

