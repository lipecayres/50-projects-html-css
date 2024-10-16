const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const clear = document.getElementById("clear");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const colorDisplay = document.getElementById("color");
const sizeDisplay = document.getElementById("size");

let isPressed = false;

let size = Number(sizeDisplay.innerText);
let color = "black";

let x, y;
let x1, y1, x2, y2;

// Clear function
clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, 804, 804);
});

// Increase size button
increase.addEventListener("click", () => {
  if (size < 30) {
    size += 5;
  }
  updateScreen()
});

// decrease size button
decrease.addEventListener("click", () => {
    if (size >5) {
      size -= 5;
    }
    updateScreen()
  });

// Update info on screen
function updateScreen() {
  sizeDisplay.textContent = size;
  colorDisplay.textContent = color;
}

// Drawing movements
canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;

});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;

});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

