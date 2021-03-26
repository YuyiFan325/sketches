
function setup(){
	createCanvas(800,800);
}

function draw(){
	background(0);

	translate(width/2,height/2);
	for(let i=0;i<width*2;i+=80){
		noFill();
		stroke(255);
		strokeWeight(1);
		ellipse(0,0,i,i);
	}	

	for(let i=0;i<width;i+=30){
		noFill();
		stroke(255);
		strokeWeight(1);
		arc(tan(i)*4,sin(i)*2,i,i,0,PI);
	}

	for(let i=0;i<width;i+=10){
		noFill();
		stroke(255);
		strokeWeight(1);
		arc(tan(i)*2,sin(i),i,i,PI,PI+QUARTER_PI);
	}

	for(let i=0;i<width;i+=10){
		noFill();
		stroke(255);
		strokeWeight(1);
		arc(sin(i),tan(i)*2,i,i,PI,PI+QUARTER_PI*2.5);
	}

	for(let i=0;i<width/1.5;i+=10){
		noFill();
		stroke(255);
		strokeWeight(1);
		arc(cos(i)*10,tan(i)*2,i,i,0,PI-QUARTER_PI*2);
	}

	for(let i=0;i<width/1.5;i+=8){
		noFill();
		let c=color(255);
		c.setAlpha(random(255));
		stroke(c);
		strokeWeight(20);
		strokeCap(SQUARE);
		arc(i,-height/160,cos(i)*10,tan(i)*2,0,PI-QUARTER_PI*2);
	}

}

function mousePressed(){
	saveCanvas("sketch-14","jpg");
}