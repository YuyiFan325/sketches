var img;

function preload(){
	img=loadImage('G4.jPG');
}

function setup(){
	createCanvas(800,800);
	background(255);

}

function draw(){
	unitSize=10
		for(i=0;i<height;i+=unitSize){
			for(j=10;j<width;j+=unitSize){
				pixelColor=img.get(j,i);

				fill(pixelColor);
				noStroke();
				let x=map(mouseX,0,width,5,30)
				let y=map(mouseY,0,height,5,30)
				ellipse(j,i,y,x);
				//rotateY(QUARTER_PI);
			}
		}
}


function keyPressed(){
	if(keyCode==ENTER){
		saveCanvas("sketch-09","jpg");
	}
}












/*function setup(){
	createCanvas(500,500);
	background(255);

	v1=createVector(random(300), 0);
}

function draw(){
	ellipse(mouseX, mouseY, v1.x, v1.y);
}

function keyPressed(){
	if(keyCode==ENTER){
		saveCanvas("sketch-09","jpg");
	}
}*/