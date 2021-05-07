
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 const Constraint = Matter.Constraint;




function preload()
{
	boy = loadImage("Images/boy.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(600,height,1200,20);

tree1= new tree(950,600,600,600);
stn1= new Stone(250,200,30);
launcherObject= new Launcher(stn1.body,{x:235,y:420});

mango1= new Mango(950,70,30);
mango2= new Mango(900,150,30);
mango3= new Mango(1100,200,25);
mango4= new Mango(1000,230,25);
mango5= new Mango(1120,160,30);
mango6= new Mango(1140,300,25);
//mango7= new mango(950,500,50,50,(options));
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);

image(boy,200,340,200,300);

  ground1.display();
launcherObject.display();
  tree1.display();
  mango1.display();
  mango2.display()
  mango3.display();
  mango4.display();
mango5.display();
mango6.display();
stn1.display();

  drawSprites();
 
}



 function detectcollision(){
mangoBodyPosition=lmango.body.bodyPosition
stoneBodyPosition=lstone.body.body.Position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r)
{
Matter.Body.setStatic(lmango.body,false);
}
 }
function  keyPressed(){
  if(keyCode === 32) {
    Matter.Body.setPosition(stn1.body,{x:235,y:420})
    launcherObject.attach(stn1.body)
  }
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
 launcherObject.fly();

}