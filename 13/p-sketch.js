let angle=0;
let w=24;
let w2=12;
let ma;
let maxD;

function setup(){
	createCanvas(400,400,WEBGL);
	ma=atan(1/sqrt(2));
	maxD=dist(0,0,63,63);
	angleMode(DEGREES);

};

function draw(){
	background(0);
	ortho(-900,900,-900,900,0,1000);

	//translate(0,50,-50);
	rotateX(mouseY);
	rotateY(mouseX);
	//rotateX(angle);
	//translate(width/2,height/2);
	//rectMode(CENTER);
	//rotateX(angle*0.25);


	//big G form
	for (let z=0;z<height;z+=w*2)
		for (let x=0; x<width; x+=w){
			push();
			let d=dist(x,z,width/2,height/2);
			let offset=map(d,0,maxD,-1,1);
			let a=angle + offset;
			let h=sin(x)+x/2+map(sin(a),-1,1,450,500);
			fill(255);
			//normalMaterial();
			translate(x-width*1.3,0,z-height/2);
			box(w-2,h*1.5,w-2);
			//rect(x-width/2 + w/2,0,w-2,h);
			pop();
	}

	for (let z=0;z<height;z+=w*2)
		for (let x=0; x<width; x+=w){
			push();
			let d=dist(x,z,width/2,height/2);
			let offset=map(d,0,maxD,-1,1);
			let a=angle + offset;
			let h=sin(x)+x/2+map(sin(a),-1,1,450,500);
			fill(255);
			//normalMaterial();
			rotateY(PI);
			translate(x-width/1.5,0,z-height/2);
			box(w-2,h*1.5,w-2);
			//rect(x-width/2 + w/2,0,w-2,h);
			pop();
	}

	ortho(-500,500,-500,500,0,1500);

	//translate(0,50,-50);
	rotateX(PI);
	rotateY(PI);

	//small black space
	for (let z=0;z<height;z+=w*2)
		for (let x=0; x<width; x+=w){
			push();
			let d=dist(x,z,width/2,height/2);
			let offset=map(d,0,maxD,-2,2);
			let a=angle + offset;
			let h=map(sin(a/2),-1,1,250,300);
			fill(0);
			//normalMaterial();
			translate(x-width,0,z-height/2);
			box(w*2,h/2,w*2);
			//rect(x-width/2 + w/2,0,w-2,h);
			pop();
	}

		ortho(-1000,1000,-1000,1000,0,2000);

	//translate(0,50,-50);
	rotateX(PI);
	rotateY(PI);


	//little serif
	for (let z=0;z<height;z+=w*2)
		for (let x=0; x<width; x+=w){
			push();
			let d=dist(x,z,width/2,height/2);
			let offset=map(d,0,maxD,-2,2);
			let a=angle + offset;
			let h=map(sin(a),-1,1,250,300);
			fill(255);
			//normalMaterial();
			translate(x+width/4,h*1.2,z-height/6);
			box(w*2,h*2,w*2);
			//rect(x-width/2 + w/2,0,w-2,h);
			pop();
	}

	angle+=0.1;
}

function keyPressed(){
	if(keyCode==ENTER){
		saveCanvas("sketch-13","jpg");
	}
}








/*let angle=0;

function setup(){
	createCanvas(400,400);
}

function draw(){
	background(0);
	translate(width/2,height/2);
	rectMode(CENTER);

	for(let x=0;x<width/2;x+=10){
	let h=sin(x)+x+map(sin(angle),-1,1,50,100);
	fill(255);
	rect(x,0,9,h);
}
	angle += 0.1;
}*/