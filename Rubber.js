class Rubber {
	constructor(x, y) {
	  var options = {
		  'restitution':0.3,
		  'friction':5,
		  'density':1
	  }
	  this.body = Bodies.circle(x, y,40,options);
	  this.r = 40;
	  
	  World.add(world, this.body);
	}
	display(){
	  var pos =this.body.position;
	  var angle = this.body.angle;
	  push();
	  translate(pos.x,pos.y);
	  rotate(angle);
	  rectMode(CENTER);
	  strokeWeight(4);
	  stroke("black");
	  fill("blue");
	  ellipse(0, 0, this.r, this.r);
	  pop();
	}
  };