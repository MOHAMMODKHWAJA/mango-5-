class Stone{
  constructor(x,y,radius){
    var options = {
        'restitution':0,
      isStatic: false,
      density:1.2,
      friction:1
    }
    this.body = Bodies.circle(x, y,this.radius/2, options);
  this.image = loadImage("Images/stone.png");
  this.radius = radius;
   

    World.add(world, this.body);
  }
  display(){
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  //rotate(angle);
  imageMode(CENTER);
  ellispeMode(radius);
  image(this.image, 0, 0, this.radius*2,this.radius*2);
  pop();
}
}

