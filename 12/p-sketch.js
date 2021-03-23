let t = 0;


function setup(){
	createCanvas(600,600,WEBGL);
	colorMode(RGB,100);
}

function draw(){
	background(255,255,0);
	//translate(width/2,height/2);
	rotateX(-QUARTER_PI/2);
	rotateY((1/sqrt(2))/2)
	noStroke();
	blendMode(ADD);
	fill(100,100,100);
	stroke(0);
	strokeWeight(1.5);

	ortho(250,-250,250,-250,0,1000);

	for(let i = 0;i<20;i++){
	plane(x1(t+i),y2(t+i));
	}
	t+=0.15;
}
function x1(t){
  return sin(t/10)*25+sin(t/20)*25+sin(t/30)*25;
}

function y1(t){
  return cos(t/10)*125+cos(t/20)*125+cos(t/30)*125;
}

function x2(t){
  return sin(t/15)*125+sin(t/25)*125+sin(t/35)*125;
}

function y2(t){
  return cos(t/15)*125+cos(t/25)*125+cos(t/35)*125;
}

function keyPressed(){
	if(keyCode===ENTER){
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