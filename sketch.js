function setup() {  
  createCanvas(900, 900);
     background("silver");
 
}

function draw(silver)  { 
  
  stroke("white");
  fill ("silver");
 
  if(mouseIsPressed){  
    circle(mouseX, mouseY, 20, 20);
  }
}
