var lineY=[488,530,570,438,340,300,245,280,200,240,275,310,345,560,  575,610,645,675,645,675];
var lineX=[328,245,116,151,186,80, 0,  0,  0,  55, 125,0,  220,260,  445,480,435,540,500,445];

function setup(){
	var c =createCanvas(800,800);
	background(0);

	var i = 0;
	stroke(255);
	strokeWeight(0.6);
	noFill();
	for(var i=1; i<100; i++) {
		ellipse(i,i,100*i,100*i);
	};

	strokeCap(ROUND);
	strokeWeight(5);
	translate(0,150);

	for(var j=0;j<lineY.length;j++){
		startX=lineY[j];
		startY=j*40;
		distanceX=lineX[j];
		endY=j*40;

		if(j>=14){
			for(var h=7;h<8;h++){
				line(startX,startY-40*h,distanceX,endY-40*h);
			}
		}else{

		line(startX,startY,distanceX,endY);
		}
		
	}
};

function keyPressed(){
	if(keyCode==ENTER){
	saveCanvas("sketch-04","jpg");
	}
}



//01
/*function setup() {
	var c = createCanvas(1000,1000);



	fill(0);
	ellipse(500,500,500,500);

	fill(255);
	ellipse(500,500,450,450);

	fill(255);
	ellipse(500,500,330,330);

	stroke(255);
	rect(550,450,250,100);
	
	fill(0);
	noStroke();
	rect(550, 520, 200, 60);

	fill(0);
	noStroke();
	rect(730, 550, 20, 150);
};*/

/*function mousePressed(){
	saveCanvas("sketch-01","jpg");
};*/























/*function setup() {
	var c = createCanvas(1000,1000);
	background(255);




	var i = 0;
	stroke(0)
	fill(255)
	for(var i=0; i<100; i++) {
		ellipse(10*i,10/i,250,250)
		//i++;//i=i+1
	}


	fill(0);
	noStroke(550);
	ellipse(500,500,500,500);
	fill(255);
	ellipse(500,500,330,330);
	fill(255);
	rect(550,450,250,100);
	fill(0);
	rect(750,580,100,250);	


}


function draw() {
	stroke(0)
	noFill()
	rRadius = random(50)+50
	ellipse(mouseX,mouseY,rRadius,rRadius)

}


function mousePressed() {
	saveCanvas("sketch-01","jpg")
}

stroke(255);
	// strokeWeight(5);
	// noFill();
	// line(728,250,325,250);

	// stroke(255);
	// strokeWeight(5);
	// noFill();
	// line(685,210,413,210);

	// stroke(255);
	// strokeWeight(5);
	// noFill();
	// line(645,170,485,170);

	// stroke(255);
	// strokeWeight(5);
	// noFill();
	// line(600,290,290,290);

	// stroke(255);
	// strokeWeight(5);
	// noFill();
	// line(520,330,245,330);

	// stroke(255);
	// strokeWeight(5);
	// noFill();
	// line(430,370,180,370);

	// stroke(255);
	// strokeWeight(5);
	// noFill();
	// line(390,410,218,410);

	// stroke(255);
	// strokeWeight(5);
	// noFill();
	// line(340,450,95,450);

	// stroke(255);
	// strokeWeight(5);
	// noFill();
	// line(280,490,155,490);

	// stroke(255);
	// strokeWeight(5);
	// noFill();
	// line(310,530,0,530);

	// stroke(255);
	// strokeWeight(5);
	// noFill();
	// line(345,570,230,570);

	// stroke(255);
	// strokeWeight(5);
	// noFill();
	// line(380,610,80,610);

	// stroke(255);
	// strokeWeight(5);
	// noFill();
	// line(310,650,140,650);

	// stroke(255);
	// strokeWeight(5);
	// noFill();
	// line(445,690,200,690);

	// stroke(255);
	// strokeWeight(5);
	// noFill();
	// line(480,730,380,730);

	// stroke(255);
	// strokeWeight(5);
	// noFill();
	// line(410,770,280,770);

	// stroke(255);
	// strokeWeight(5);
	// noFill();
	// line(713,810,320,810);

	// stroke(255);
	// strokeWeight(5);
	// noFill();
	// line(665,850,360,850);

	// stroke(255);
	// strokeWeight(5);
	// noFill();
	// line(828,770,600,770);

	// stroke(255);
	// strokeWeight(5);
	// noFill();
	// line(863,730,725,730);

	// stroke(255);
	// strokeWeight(5);
	// noFill();
	// line(830,690,765,690);

	// stroke(255);
	// strokeWeight(5);
	// noFill();
	// line(795,650,730,650);

	// stroke(255);
	// strokeWeight(5);
	// noFill();
	// line(828,610,628,610);

	// stroke(255);
	// strokeWeight(5);
	// noFill();
	// line(795,570,520,570);

	// stroke(255);
	// strokeWeight(5);
	// noFill();
	// line(630,530,560,530);
*/