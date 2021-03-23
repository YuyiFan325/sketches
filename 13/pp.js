function setup(){
	createCanvas(1000,400);
}

function draw(){
	background(0);

	for(let x=0;x<width/2;x+=10){
		fill(255);
		rect(x,0,10,x);
	}
}

/*for(let x=0;x<width;x+=10){				
		if(x==100){
			x=x-10;
			fill(255);
			rect(x,0,10,x);
			x=x+10;
			fill(255);
			rect(x,0,10,x);
		};
	};
}
*/