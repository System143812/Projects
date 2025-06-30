const canvas = document.getElementById('gabCanvas');
const ctx = canvas.getContext("2d");

const sprite = new Image();
const runSprite = new Image();
const bgImage = new Image();
runSprite.src = "../assets/sprites/run.png";
sprite.src = "../assets/sprites/idle.png";
bgImage.src = "../assets/sprites/terrain/terrain.png";
const canvasWidth = 500;
const canvasHeight = 250;
let x = canvasWidth / 2;
let y = canvasHeight / 2;
const moveSize = 4;
const spriteWidth = 45;
const spriteHeight = 55; 
canvas.width = canvasWidth;
canvas.height = canvasHeight;

let is_moving = 0;
let action = 0;
let recentAction = 0;
let lastDirection = "down";
let animationX = [[10, 75], [10, 75, 140, 205, 270, 335, 400, 460]];
let currentFrame = 0;
let currentAction;
let animationFrame = animationX[is_moving][currentFrame];
let animationY = 140;
let frameTime = 0;
const frameDelay = 12;

canvas.style.border = "solid red 1px";

function run(){
  
}

function idle(){
  
}

function pressKey(e){
  console.log("is moving");
  if((e.key === "ArrowRight" || e.key === "d") && x <= (canvasWidth - moveSize - spriteWidth)){
    x += moveSize;
    is_moving = 1;
    action = 1;
    if(action !== recentAction){
      recentAction = 1;
      currentFrame = 0;
    }
    animationY = 203;
  }
  if((e.key === "ArrowLeft" || e.key === "a") && x >= (0 + moveSize)){
    x -= moveSize;
    is_moving = 1;
    action = 1;
    if (action !== recentAction) {
      recentAction = 1;
      currentFrame = 0;
    }
    animationY = 75;
  }
  if((e.key === "ArrowDown" || e.key === "s") && y <= (canvasHeight - moveSize - spriteHeight)){
    y += moveSize;
    is_moving = 1;
    action = 1;
    if (action !== recentAction) {
      recentAction = 1;
      currentFrame = 0;
    }
    animationY = 140;
  }
  if((e.key === "ArrowUp" || e.key === "w") && y >= (0 + moveSize)){
    y -= moveSize;
    is_moving = 1;
    action = 1;
    if (action !== recentAction) {
      recentAction = 1;
      currentFrame = 0;
    }
    animationY = 10;
    
  }
}

document.addEventListener('keydown', pressKey);

function drawAnimate(){
  //iloloop neto yung buong animaton frame ng sprite's through x
  if(is_moving === 0 && recentAction === 1){
    action = 0;
    recentAction = 0;
    currentFrame = 0;
  }
  animationFrame = animationX[is_moving][currentFrame];
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.drawImage(bgImage, 0, 0, 600, 600);
  if(is_moving === 1){
   ctx.drawImage(runSprite, animationFrame, animationY, 45, 55, x, y, spriteWidth, spriteHeight); 
  }
  else if(is_moving === 0){
    ctx.drawImage(sprite, animationFrame, animationY, 45, 55, x, y, spriteWidth, spriteHeight);  
  }
  frameTime ++;
  if(frameTime >= frameDelay){
    if(currentFrame >= animationX[is_moving].length -1){
      currentFrame = 0;
    }
    else if(currentFrame < animationX[is_moving].length -1){
      currentFrame ++;
    }
    is_moving = 0;
    frameTime = 0;
    console.log("not moving");
  }
  requestAnimationFrame(drawAnimate);
}

sprite.onload = drawAnimate;