function setup(){
	var c = createCanvas(1000,1000);
	background(0);

	noFill();
	stroke(255);
	strokeWeight(1);

	let b = 0;
	let incb = HALF_PI/25;

	for (let i=0; i<100; i++){
		line (0, i*20, 25+sin(b)*1000, 0);
		b=b+incb;
	}

	let a = 0;
	let inc = HALF_PI/50;
	translate(height/2, width/2);
	rotate(TWO_PI/100);
	for (let i=0; i<500; i++){
		line (i*15, 0, cos(a)*1000, i*15);
		a=a+inc;
	}

}

function mousePressed(){
	saveCanvas("sketch-05","jpg");
};