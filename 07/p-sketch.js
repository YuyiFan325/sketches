let angle=0;
let w=24;
let w2=12;
let ma;
let maxD;

function setup(){
	createCanvas(400,400,WEBGL);
	ma=atan(1/sqrt(2));
	maxD=dist(0,0,63,63);

};

function draw(){
	background(0);
	ortho(-500,500,-500,500,0,1000);

	//translate(0,50,-50);
	rotateX(-QUARTER_PI/2);
	rotateY(ma/2)
	//rotateX(angle);
	//translate(width/2,height/2);
	//rectMode(CENTER);
	//rotateX(angle*0.25);

	for (let z=0;z<height;z+=w*2)
		for (let x=0; x<width; x+=w){
			push();
			let d=dist(x,z,width/2,height/2);
			let offset=map(d,0,maxD,-2,2);
			let a=angle + offset;
			let h=map(sin(a),-1,1,250,300);
			fill(255);
			//normalMaterial();
			translate(x-width/2,0,z-height/2);
			box(w-2,h*2,w-2);
			//rect(x-width/2 + w/2,0,w-2,h);
			pop();
	}

	ortho(-500,500,-500,500,0,1500);

	//translate(0,50,-50);
	rotateX(PI);
	rotateY(PI);

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

function mousePressed(){
	saveCanvas("sketch-07","jpg");
}