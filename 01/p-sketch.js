function setup(){
	createCanvas(800,800);
	background(255);

	noFill();
	stroke(0);
	strokeWeight(25);
	ellipse(width/2,height/2,500,500);

	strokeWeight(3);
	ellipse(width/2,height/2,400,400);

	noStroke();
	fill(255);
	rect(450,320,400,150);

	fill(0);
	rect(450,395,215,75);
	rect(650,395,15,175);
}

function keyPressed(){
	if(keyCode==ENTER){
	saveCanvas("sketch-01","jpg");
	}
}