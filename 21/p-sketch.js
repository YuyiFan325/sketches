let max_distance;
let img

function preload(){
  img=loadImage("img3.jpg");
}

function setup(){
  createCanvas(800,800);
  noStroke();
  max_distance=dist(0,0,width,height);
}

function draw(){
  background(255);

  unitSize=10
  for(i=0;i<height;i+=unitSize){
    for(j=10;j<width;j+=unitSize){
      pixelColor=img.get(j,i);

      fill(pixelColor);
      randomSze=random(5,20);
      //let x=map(mouseX,0,width,5,30)
      //let y=map(mouseY,0,height,5,30)
      ellipse(j,i,randomSze,randomSze);
    }
  }

  for(let i=0;i<width;i+=20){
    for(let j=0;j<height;j+=20){
      let size=dist(mouseX,mouseY,i,j);
      size=(size/max_distance)*60;
      rect(i,j,size,size);
      fill(0,0,0,255);
    }
  }
}

function keyPressed(){
  if(keyCode==ENTER){
    saveCanvas("sketch-21","jpg");
  }
}