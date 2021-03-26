// Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4

//let bigG;
var myFont;
var vehicles=[];

function preload(){
	//bigG=loadImage('G.jpg');
	myFont=loadFont('BlackOpsOne-Regular.ttf');
}

function setup(){
	createCanvas(800,800);
	background(255);
	// textFont(myFont);
	// textSize(650);
	// fill(0);
	// noStroke();
	// text('G',130,620);

	var points=myFont.textToPoints('G',130,620,650);

	for(i=0;i<points.length;i++){
		var pt=points[i];
		var vehicle=new Vehicle(pt.x,pt.y);
		vehicles.push(vehicle);
		// stroke(0);
		// strokeWeight(8);
		// point(pt.x,pt.y);
	}
}

function draw(){
	for(var i=0;i<vehicles.length;i++){
		var v=vehicles[i];
		v.behaviors();
		v.update();
		v.show();
	}
}

function keyPressed(){
	if(keyCode==ENTER){
		saveCanvas("sketch-17","jpg");
	}
}