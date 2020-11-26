var fixed_rect,moving_rect;

function setup() {
  createCanvas(1200,800);
  moving_rect=createSprite(400, 200, 80, 30);
  fixed_rect=createSprite(600, 400, 50, 80);
  moving_rect.shapeColor="green";
  fixed_rect.shapeColor="green";

}

function draw() {
  background(255,255,255);  
  moving_rect.x=World.mouseX;
  moving_rect.y=World.mouseY;
  console.log(moving_rect.y-fixed_rect.y);
 if( moving_rect.x-fixed_rect.x <moving_rect.width/2+fixed_rect.width/2 && fixed_rect.x-moving_rect.x< moving_rect.width/2+fixed_rect.width/2 && moving_rect.y-fixed_rect.y<moving_rect.height/2+fixed_rect.height/2 && fixed_rect.y-moving_rect.y<moving_rect.height/2+fixed_rect.height/2 ){
   moving_rect.shapeColor="red";
   fixed_rect.shapeColor="red";
 }else{
  moving_rect.shapeColor="green";
  fixed_rect.shapeColor="green";
 }
  drawSprites();
}