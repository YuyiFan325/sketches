// Daniel Shiffman
// The Pixel Array
// Video: https://www.youtube.com/watch?v=nMUMZ5YRxHI&t=42s

let font;

function preload(){
	font=loadFont('BlackOpsOne-Regular.ttf');
}

function setup(){
	createCanvas(800,800);
	colorMode(RGB,100);

	
	loadPixels();

	for(var y=0;y<height;y++){
		for(var x=0;x<width;x++){
			var index=(x+y*width)*4;
			pixels[index+0]=x;
			pixels[index+1]=0;
			pixels[index+2]=y;
			pixels[index+3]=255;
		}
	}
	updatePixels();


	var points=font.textToPoints('G',90,650,800);

	for(var i=0;i<points.length;i++){
		var pt=points[i];
		//var d=map(mouseX,0,800,0,20);
		stroke(255);
		strokeWeight(5);
		line(pt.x,pt.y,pt.x+20,pt.y+20);
	}
}

function keyPressed(){
	if(keyCode==ENTER){
		saveCanvas("sketch-12","jpg");
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