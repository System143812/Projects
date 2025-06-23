const canvas = document.getElementById('gabCanvas');
const ctx = canvas.getContext("2d");

const sprite = new Image();
sprite.src = "../assets/sprites/idle.png";
const canvasWidth = 300;
const canvasHeight = 200;
let x = canvasWidth / 2;
let y = canvasHeight / 2;
const moveSize = 5;
const spriteWidth = 35;
const spriteHeight = 45;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

const idle1x = [10, 75];
let currentIdle = 0;
let currentIdle1x = idle1x[currentIdle];
const idle1y = 140;

let frameTime = 0;
const frameDelay = 20;

canvas.style.border = "solid red 1px";

document.addEventListener('keydown', function(e){
  is_moving = true;
  if((e.key === "ArrowRight" || e.key === "d") && x <= (canvasWidth - moveSize - spriteWidth)){
    x += moveSize;
    
  }
  if((e.key === "ArrowLeft" || e.key === "a") && x >= (0 + moveSize)){
    x -= moveSize;
    
  }
  if((e.key === "ArrowDown" || e.key === "s") && y <= (canvasHeight - moveSize - spriteHeight)){
    y += moveSize;
  }
  if((e.key === "ArrowUp" || e.key === "w") && y >= (0 + moveSize)){
    y -= moveSize;
  }
});

is_moving = false;

function drawAnimate(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(sprite, currentIdle1x, idle1y, 45, 55, x, y, spriteWidth, spriteHeight);
    frameTime++;
    if(frameTime >= frameDelay){
      if(currentIdle < idle1x.length -1){
        currentIdle ++;
      }
      else{
        currentIdle = 0;
      }
      currentIdle1x = idle1x[currentIdle];
      frameTime = 0;
    }
    requestAnimationFrame(drawAnimate);
    
}

sprite.onload = drawAnimate;