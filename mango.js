class Mango{
  constructor(x,y,radius){
    var options = {
        'restitution':0,
      isStatic: true,
      friction:1,
    }
    this.body = Bodies.circle(x, y,this.radius, options);
  this.image = loadImage("Images/mango.png");
  this.radius = radius;
   

    World.add(world, this.body);
  }
  display(){
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.image, 0, 0, this.radius*2,this.radius*2);
  pop();
}
}