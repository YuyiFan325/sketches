let myFont;
let bigG;

function preload(){
	//myFont=loadFont('AvenirNextLTPro-Demi.otf');
	bigG=loadImage('G.jpg');
}

function setup(){
	createCanvas(800,800);

	background(255);
	noStroke();
	//fill(0);
	//textFont(myFont);
	//textSize(700);
	//text('G',width/7.5,height/1.3);
	//image(bigG,0,0);
}

function draw(){
	unitSize=50
	for(i=0;i<height;i+=unitSize){
		for(j=10;j<width;j+=unitSize){
			pixelColor=bigG.get(j,i);

			fill(pixelColor);
			//randomSize=random(5,10);
			let x=map(mouseX,0,width,5,30)
			let y=map(mouseY,0,height,5,30)
			ellipse(j,i,y,x);
			//rotateY(QUARTER_PI);
		}
	}
}

function mousePressed(){
	saveCanvas("sketch-16","jpg");
}