let cor;
let posicaoHorizontal;
let posicaoVertical;


function setup() {
  
  createCanvas(400, 400);
   background("violet");
  cor = color(random(0, 255), random(0,255), random(0, 255))
 posicaoHorizontal = 100;
 posicaoVertical = 200;
 }
                            

function draw() {
  
  stroke(cor);
  fill(cor);
 circle(posicaoHorizontal, posicaoVertical, 40);

  if(mouseX < posicaoHorizontal){ 
  posicaoHorizontal -=  1 
  }
  if(mouseX > posicaoHorizontal){
    
    posicaoHorizontal += 1 
  }
if(mouseY > posicaoVertical){
  
  posicaoVertical += 1
}    
  if(mouseY < posicaoVertical){
    posicaoVertical -= 1
  }
  if(mouseIsPressed){
    cor = color(random(0, 255), random(0,255), random(0, 255), random(0, 100));
  }
}