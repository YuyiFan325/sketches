let t = 0;

function setup(){
	createCanvas(800,800);
	//colorMode(HSB,height,height,height);
	//createLoop({duration:3,gif:true})
}

function draw(){
	background(255);
	translate(width/2,height/2);
	strokeWeight(1.5);

	for(let i = 0;i<100;i++){
	line(x1(t+i),y1(t+i),x2(t+i)*10,y2(t+i)*10);
	stroke(random(255),random(50),random(100),mouseX);
	}
	t+=0.15;
}

function x1(t){
	return sin(t/10)*150+sin(t/20)*150+sin(t/30)*150;
}

function y1(t){
	return cos(t/10)*150+cos(t/20)*150+cos(t/30)*150;
}

function x2(t){
	return sin(t/15)*150+sin(t/25)*150+sin(t/35)*150;
}

function y2(t){
	return cos(t/15)*150+cos(t/25)*150+cos(t/35)*150;
}

function keyPressed(){
	if(keyCode==ENTER){
		saveCanvas("sketch-11","jpg");
	}
}




/*let myFont;

function preload(){
	myFont=loadFont('Poppins-ExtraBold.ttf');
}

function setup(){
	createCanvas(500,500);
	background(255);
	noStroke();
}

function draw(){
	fill(0);
	textFont(myFont);
	textSize(500);
	text('G',10,50);
	translate(0,height/2);
}*/

/*function draw(){
	colorMode(RGB,100);
	fill(0,10);
	rect(0,0,width,height);

	let n=random(0,width);

	xoff+=xincrement;

	fill(200);
	ellipse(n,height/2,50,50);
}*/