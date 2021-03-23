function setup(){
	createCanvas(600,600);
	background(255);

	noFill();
	stroke(0);
	strokeWeight(15);
	ellipse(width/2,height/2,300,300);

	strokeWeight(1);
	ellipse(width/2,height/2,200,200);

	noStroke();
	fill(255);
	rect(325,265,150,80);

	fill(0);
	rect(325,310,135,40);
	rect(448,350,12,70);
}

function mousePressed(){
	saveCanvas("sketch-01","jpg");
}