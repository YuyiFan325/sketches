// Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4

function Vehicle(x,y){
	this.pos=createVector(x,y);
	this.target=createVector(x.y);
	this.vel=p5.Vector.random2D();
	this.acc=createVector();
	this.r=8;
	this.maxspeed=0;
	this.maxforce=300;
}

Vehicle.prototype.behaviors=function(){
	var seek=this.seek(this.target);
	this.applyForce(seek);
}

Vehicle.prototype.applyForce=function(f){
	this.acc.add(f);
}

Vehicle.prototype.update=function(){
	this.pos.add(this.vel);
	this.vel.add(this.acc);
	this.acc.mult(0);
}

Vehicle.prototype.show=function(){
	stroke(0);
	strokeWeight(5);
	point(this.pos.x,this.pos.y);
}

Vehicle.prototype.seek=function(target){
	var desired=p5.Vector.sub(target,this.pos)
	desired.setMag(this.maxspeed);
	var steer=p5.Vector.sub(desired,this.vel);
	steer.limit(this.maxforce);
	return steer;
}