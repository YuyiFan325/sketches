var particles=[];

function setup(){
	createCanvas(1000,1000);
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
		this.x=this.x+random(-5,5);
		this.y=this.y+random(-5,5);

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
		saveCanvas("sketch-10","jpg");
	}
}