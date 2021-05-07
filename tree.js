class tree{
    constructor(x,y){
      var options = {
        
        isStatic: true,
        
      }
      this.body = Bodies.rectangle(x, y,this.width,this.height, options);
    this.image = loadImage("Images/tree.png");
    this.width = 450;
     this.height = 600;
  
      World.add(world, this.body);
    }
    display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    //rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width,this.height);
    pop();
  }
  }