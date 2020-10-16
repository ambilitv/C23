
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
var box1,box2;
function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  /*var object_options = {isStatic:true}
  object = Bodies.rectangle(200,200,50,50,object_options);
  World.add(world,object);*/
  box1= new Box(200,10,50,50);
  box2= new Box(240,150,50,100);
  ground = new Ground(400,370,800,20);
   
  console.log(box2);
  
  //console.log(object.position.x);
}

function draw() {
  background("black"); 
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
 
}