
  
function preload(){
 
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
 ghost = createSprite(displayWidth/2+200,550,50,50);
 h = createSprite(displayWidth/2+400,550,50,50)
 ghost.velocity.y= Math.round(random(-5,-10));

 me = createSprite(displayWidth/2-200,550,50,50);
// console.log("hello")
 
}


function draw(){
  background(225,225,225);
 
  drawSprites();
  camera.position.x = displayWidth/2;
  camera.position.y = me.y;
 
}
function keyPressed(){
  if(keyIsDown(UP_ARROW)){
    console.log("hi");
    me.velocity.y+=-4
  }
}
