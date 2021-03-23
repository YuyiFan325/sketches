function setup(){
	createCanvas(600,600);
	background(255);

	stroke(0);
	strokeWeight(60);
	strokeCap(SQUARE);
	arc(width/2,height/2,300,300,0,TWO_PI-QUARTER_PI*1.5);

	stroke(255);
	strokeWeight(1);
	noFill();
	arc(width/2,height/2, 335,335,0,TWO_PI-QUARTER_PI*1.5);

	stroke(0);
	strokeWeight(4);
	line(width/2, height/2,480,height/2);

	fill(0);
	rect(width/2,height/2,7,7);
}

function mousePressed(){
	saveCanvas("sketch-2","jpg");
}