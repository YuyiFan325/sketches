function setup(){
	var c = createCanvas(800,800);
	background(0);

	noFill();
	stroke(255);
	strokeWeight(1);

	let b = 0;
	let incb = HALF_PI/25;

	for (let i=0; i<100; i++){
		line (0, i*20, sin(b)*800, 0);
		b=b+incb;
	}

	let a = 0;
	let inc = HALF_PI/50;
	translate(height/2, width/2);
	rotate(TWO_PI/100);
	for (let i=0; i<500; i++){
		line (i*10, 0, cos(a)*800, i*10);
		a=a+inc;
	}

}

function keyPressed(){
	if(keyCode==ENTER){
		saveCanvas("sketch-05","jpg");
	}
};