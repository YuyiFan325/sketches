function setup(){
	createCanvas(800,800);
	background(255);
}

function draw(){
	noFill();
	stroke(0);
	strokeWeight(3);
	line(560,530,465,620);
	line(610,550,480,635);

	noFill();
	stroke(0);
	strokeWeight(70);
	strokeCap(ROUND);
	line(width/2, height/2, 630,height/2);
	line(630,height/2,630,450);
	line(630,450,590,530);

	noFill();
	stroke(255);
	strokeWeight(5);
	strokeCap(ROUND);
	line(width/2,380,630,380);
	line(655,height/2,655,450);

	fill(255);
	ellipse(590,530,55,55);

	noFill();
	stroke(0);
	strokeWeight(3);
	ellipse(590,530,40,40);

	noFill();
	stroke(0);
	strokeWeight(1);
	line(180,540,140,450);

	noFill();
	stroke(0);
	strokeWeight(40);
	line(480,620,250,620);
	line(250,620,180,540);

	noStroke();
	fill(255);
	ellipse(480,620,25,25);
	ellipse(250,620,25,25);
	ellipse(180,540,25,25);

	noFill();
	stroke(0);
	strokeWeight(3);
	line(140,450,140,340);

	noFill();
	stroke(0);
	strokeWeight(10);
	line(140,340,175,250);

	noStroke();
	fill(255);
	ellipse(140,340,7,7);

	noFill();
	stroke(0);
	strokeWeight(23);
	strokeCap(ROUND);
	line(290,150,490,150);

	noStroke();
	fill(255);
	ellipse(290,150,10,10);

	noFill();
	stroke(0);
	strokeWeight(2);
	line(175,250,280,147);
	line(175,250,300,150);
}

function mousePressed(){
	saveCanvas("sketch-3","jpg");
}