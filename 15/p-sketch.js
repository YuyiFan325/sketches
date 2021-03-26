let angle=0;
let w=24;
let w2=12;
let ma;
let maxD;

function setup(){
	createCanvas(800,800,WEBGL);
	ma=atan(1/sqrt(2));
	maxD=dist(0,0,63,63);
	//createLoop({duration:3,gif:true});

};

function draw(){
	background(0);
	ortho(-800,800,-800,800,0,1000);

	//translate(0,50,-50);
	rotateX(-QUARTER_PI/2);
	rotateY(ma/2)
	//rotateX(angle);
	//translate(width/2,height/2);
	//rectMode(CENTER);
	//rotateX(angle*0.25);


	//big G form
	for (let z=0;z<height;z+=w*2)
		for (let x=0; x<width/2.4; x+=w){
			push();
			let d=dist(x,z,width/2,height/2);
			let offset=map(d,0,maxD,-1,1);
			let a=angle + offset;
			let h=sin(x)+x/4+map(sin(a),-1,1,260,300);
			fill(255);
			//normalMaterial();
			translate(x-width/2,0,z-height/2);
			box(w-2,h*3,w-2);
			//rect(x-width/2 + w/2,0,w-2,h);
			pop();
	}

	for (let z=0;z<height;z+=w*2)
		for (let x=0; x<width/2; x+=w){
			push();
			let d=dist(x,z,width/2,height/2);
			let offset=map(d,0,maxD,-1,1);
			let a=angle + offset;
			let h=sin(x)+x/4+map(sin(a),-1,1,200,300);
			fill(255);
			//normalMaterial();
			rotateY(PI);
			translate(x-width/2.5,-400,z-height/2.2);
			box(w-2,h/1.3,w-2);
			//rect(x-width/2 + w/2,0,w-2,h);
			pop();
	}

	ortho(-800,800,-800,800,0,1000);

	//translate(0,50,-50);
	rotateX(PI);
	rotateY(PI);

	//small black space
	// for (let z=0;z<height/3;z+=w*2)
	// 	for (let x=0; x<width; x+=w){
	// 		push();
	// 		let d=dist(x,z,width/2,height/2);
	// 		let offset=map(d,0,maxD,-2,2);
	// 		let a=angle + offset;
	// 		let h=map(sin(a/2),-1,1,250,300);
	// 		fill(0);
	// 		stroke(255);
	// 		rotateY(PI);
	// 		//normalMaterial();
	// 		translate(x-width/6,250,z-height/2);
	// 		box(w*2,h/2,w*2);
	// 		//rect(x-width/2 + w/2,0,w-2,h);
	// 		pop();
	// }

		ortho(-800,800,-800,800,0,1000);

	//translate(0,50,-50);
	rotateX(PI);
	rotateY(PI);


	//little serif
	for (let z=0;z<height;z+=w*2)
		for (let x=0; x<width/1.7; x+=w){
			push();
			let d=dist(x,z,width/2,height/2);
			let offset=map(d,0,maxD,-1,1);
			let a=angle + offset;
			let h=sin(x)+x/4+map(sin(a),-1,1,180,300);
			fill(255);
			//normalMaterial();
			rotateY(PI);
			translate(x-width/2,400,z-height/2.2);
			box(w-2,h/1.3,w-2);
			//rect(x-width/2 + w/2,0,w-2,h);
			pop();
	}

	for (let z=0;z<height;z+=w*2)
		for (let x=0; x<width/3.35; x+=w){
			push();
			let d=dist(x,z,width/2,height/2);
			let offset=map(d,0,maxD,-1,1);
			let a=angle + offset;
			let h=sin(x)+x/4+map(sin(a),-1,1,180,300);
			fill(255);
			//normalMaterial();
			rotateY(PI);
			translate(x-width/2,225,z-height/2.2);
			box(w-2,h,w-2);
			//rect(x-width/2 + w/2,0,w-2,h);
			pop();
	}

	angle+=0.1;
}

function keyPressed(){
	if(keyCode==ENTER){
		saveCanvas("sketch-15","jpg");
	}
}