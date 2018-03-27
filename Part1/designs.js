const canvas = document.getElementById("pixelCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(20, 20, 150, 150);


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

function makeGrid() {

// Your code goes here!

}
