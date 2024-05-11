const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

const context = canvas.getContext('2d')
context.strokeStyle = 'black'
const changeColor = color => context.strokeStyle = color;

//Resizing 
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//variables
let painting = false;

function startPosition(event){
    painting = true;
    draw(event);
}

function endPosition(){
    painting = false;
    ctx.beginPath();
}

function draw(event){
    if (!painting){
        return;
    }
    ctx.lineWidth = 10;
    ctx.lineCap = "round";

    ctx.lineTo(event.clientX, event.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX, event.clientY);
}

//EventListeners
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mousemove", draw);
