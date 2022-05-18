var box;



function setup() {
  createCanvas(600,600);
  
  box=createSprite(300,300,50,50);
  box.shapeColor="blue";



}

function draw() 
{
  background(0);

  if (keyDown("w")) {
     box.y=box.y-5; 
  }
    
  if (keyDown("s")) {
    box.y+=5; 
 }
 if(keyDown("a")){
   box.x-=5;
 }
  if(keyDown("d")){
    box.x+=5;
  }
  drawSprites();
}




