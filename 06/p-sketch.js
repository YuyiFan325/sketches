function  setup(){
	createCanvas(1000,1000);
	background(0);

	fill(255);
	arc(500,500,400,400,0,HALF_PI);

	
	noFill();
	stroke(255);
	strokeWeight(5);

	let a=0;
	let inc=TWO_PI/2;
	for(i=0;i<500;i++){
		arc(i*50,500,i*10,sin(a),0,HALF_PI+QUARTER_PI/2);
		a=a+inc;
	};
	
	arc(500,500,500,500,HALF_PI+QUARTER_PI,PI);
	
	arc(500,500,450,450,PI-QUARTER_PI/2,PI+QUARTER_PI);

	arc(500,500,550,550,PI+QUARTER_PI/2,PI+2.4*PI+QUARTER_PI);

}

function mousePressed(){
	saveCanvas("sketch-06","jpg");
}