var particles=[];

function setup(){
	createCanvas(800,800);
	particle=new Particle(5,5);
}

function mouseDragged(){
	particles.push(new Particle(mouseX,mouseY));
}

function draw(){
	background(0);

	for(let i=0;i<particles.length;i++){
		particles[i].update();
		particles[i].show();
	}
}

class Particle{

	constructor(x,y){
		this.x=x;
		this.y=y;
		this.history=[];
	}

	update(){
		this.x=this.x+random(-1,1);
		this.y=this.y+random(-1,1);

		let v=createVector(this.x,this.y);

		this.history.push(v);

		if(this.history.length>100){
			this.history.splice(0,1);
		}
	}

	show(){
		stroke(0);
		fill(0);
		ellipse(this.x,this.y,5,5);

		for (var i=0;i<this.history.length;i++){
			var pos=this.history[i]; 
			fill(random(255));
			ellipse(pos.x,pos.y,i,i);
		}
	}
}

function keyPressed(){
	if(keyCode==ENTER){
		saveCanvas("sketch-08","jpg");
	}
}



/*function Particle(x,y){
	this.x=x;
	this.y=y;

	this.history=[]; 

	this.update=function(){
		this.x+=random(-10,10);
		this.y+=random(-10,10);

		var v=createVector(this.x,this.y);
		this.history.push(v);

		if(this.history.length>25){
			this.history.splice(0,1);
		}
	}

	this.show=function(){
		stroke(0);
		fill(0);
		ellipse(this.x,this.y,24,24);

		for (var i=0;i<this.history.length;i++){
			var pos=this.history[i]; 
			fill(random(255));
			ellipse(pos.x,pos.y,i,i);
		}
	}
}*/


/*var particle=[];

function setup(){
	createCanvas(600,600);
	p = new Particle();
}

function mousePressed(){
	particles.push(new Particle(mouseX,mouseY));
}

function draw(){
	background(0);
	for (var i=0;i<particle.length;i++){
		particles[i].update();
		particles[i].show();
	}

}*/

/*let particles=[];

function setup(){
	createCanvas(600,400);

}

function draw(){
	background(251);
	let p=new Particle();
	particles.push(p);
	for (let i=0;i<particles.length;i++){
		particles[i].update();
		particles[i].show();

	}
}*/

/*class Particle{
	
	constructor(){
		this.x=300;
		this.y=380;
		this.vx=random(-1,1);
		this.vy=random(-5,-1);
		this.alpha=255;
	}

	update(){
		this.x += this.vx;
		this.y +=this.vy;
		this.alpha --;
	}

	show(){
		noStroke();
		fill(255, this.alpha);
		ellipse(this.x,this.y,16);
	}
}
*/







/*let x=0.5;
let y=0.5;
let spacing=-10;

function setup(){
	createCanvas(400,400);
	background(0);
}

function draw(){

	stroke(255);
	if(random(1)<0.5){
		ellipse(x,y,x+spacing,y+spacing);
	}else{
		ellipse(x,y+spacing,x+spacing,y);
	};

	x=x+spacing;

	if(x>width){
		x=0;
		y=y+spacing;
	}
}*/