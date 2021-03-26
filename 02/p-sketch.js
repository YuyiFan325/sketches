function setup(){
	createCanvas(800,800);
	background(255);

	stroke(0);
	strokeWeight(110);
	strokeCap(SQUARE);
	arc(width/2,height/2,500,500,0,TWO_PI-QUARTER_PI*1.5);

	stroke(255);
	strokeWeight(2);
	noFill();
	arc(width/2,height/2, 570,570,0,TWO_PI-QUARTER_PI*1.5);

	stroke(0);
	strokeWeight(5);
	line(width/2, height/2,705,height/2);

	fill(0);
	rect(width/2,height/2,13,13);
}

function keyPressed(){
	if(keyCode==ENTER){
		saveCanvas("sketch-2","jpg");
	}
}