//let c=color(0, 126, 255, 102);

function setup(){
	createCanvas(500,500, WEBGL);
}

function draw(){
	background(255);
	rotate(frameCount*0.02);

	for(let j=0;j<5;j++){
		push();
		for(let i=0; i<8; i++){
			translate(
				cos(frameCount+j)+i,
				sin(frameCount+j)+i,
				i*random(10)
				);
				push();
				rotate(frameCount*0.02);
				ambientLight(500);
				ambientMaterial(255,204,0);
				torus(100, 5);
				translate(100,600,-100);
				pop();

			push();
			translate(
				sin(frameCount+i)*j,
				sin(frameCount+i)*j,
				i*random(10)
				);
				push();
				rotate(frameCount*0.02);
				ambientLight(100);
				ambientMaterial(70, 130, 230);
				plane(10,1);
				pop();
			pop();

		}
		pop();

	}
}

function keyPressed(){
	if(keyCode===ENTER){
		saveCanvas("sketch-09-2","jpg");
	}
}












/*function setup(){
	createCanvas(500,500);
	background(255);

	v1=createVector(random(300), 0);
}

function draw(){
	ellipse(mouseX, mouseY, v1.x, v1.y);
}

function keyPressed(){
	if(keyCode==ENTER){
		saveCanvas("sketch-09","jpg");
	}
}*/