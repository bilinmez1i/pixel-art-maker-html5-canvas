const canvas = document.getElementById("pixelCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
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
// Select color input => LATER
// Select size input => LATER

// When size is submitted by the user, call makeGrid()
ctx.strokeStyle = "slateGray";

for(let i = 20; i < canvas.width; i+=20){
    drawLine(i, 0, i, canvas.height);
}

for(let i = 20; i < canvas.height; i+= 20){
    drawLine(0, i, canvas.width, i);
}

function makeGrid(numRows, numCols) {

// Your code goes here!


}
