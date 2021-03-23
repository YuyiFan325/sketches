let bigG;

function preload(){
	bigG=loadImage('G.jpg');
}

function setup(){
	createCanvas(800,800);

	background(255);
	noStroke();
}

function draw(){
	unitSize=random(5,10);
	for(i=0;i<height;i+=unitSize){
		for(j=10;j<width;j+=unitSize){
			pixelColor=bigG.get(j,i);

			fill(pixelColor);
			randomSize=random(10,15);
			ellipse(j,i,randomSize,randomSize);
		}
	}
}

function mousePressed(){
	saveCanvas("sketch-17","jpg");
}