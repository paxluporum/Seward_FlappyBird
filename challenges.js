//SETUP


import { PipeObstacle } from "./pipeObstacle.js";
import { Bird } from "./bird.js";

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); // This gives you the drawing context, like a pencil
let fish1 = document.getElementById("fish1");

//GAMELOOP
function gameLoop() {
    
    //erase the canvas
    pencil.clearRect(0, 0, canvas.width, canvas.height);

   
    testPipe.move();
    testPipe.draw();

    bird.gravity();
    bird.draw();

    let wasHit = bird.isHitByPipe(testPipe);
    if(wasHit) {
        score = 0;
        bird.y = 50;  // Reset bird position
        bird.ySpeed = 1;  // Reset speed
        testPipe.x = canvas.width;  // Reset pipe off-screen
        console.log("you're dead, comrade!");

    
    }
}

setInterval(gameLoop, 50);

//HANDLES SCORE
let score = 0;

//score goes up every second
function raiseScore() {
    score += 1;
    let scoreElement = document.getElementById("scoreDisplay");
    scoreElement.innerHTML = "SCORE:" + score;
}
setInterval(raiseScore, 1000);

//HANDLES INPUT
function detectClick() {
    bird.flap();
}

function detectKey() {
    bird.flap();

}

canvas.addEventListener("click", detectClick);
document.addEventListener("keypress", detectKey)

//CREATE INSTANCES OF CLASSES
let testPipe = new PipeObstacle(canvas, pencil);
testPipe.draw();
let bird = new Bird(canvas, pencil);