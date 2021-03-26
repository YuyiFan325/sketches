function  setup(){
	createCanvas(800,800);
	background(0);

	fill(255);
	arc(397,397,350,350,0,HALF_PI);

	
	noFill();
	stroke(255);
	strokeWeight(5);

	let a=0;
	let inc=TWO_PI/2;
	for(i=0;i<500;i++){
		arc(i*50,400,i*10,sin(a),0,HALF_PI+QUARTER_PI/2);
		a=a+inc;
	};
	
	arc(400,400,400,400,HALF_PI+QUARTER_PI,PI);
	
	arc(400,400,350,350,PI-QUARTER_PI/2,PI+QUARTER_PI);

	arc(400,400,450,450,PI+QUARTER_PI/2,PI+2.4*PI+QUARTER_PI);

}

function keyPressed(){
	if(keyCode==ENTER){
		saveCanvas("sketch-06","jpg");
	}
}