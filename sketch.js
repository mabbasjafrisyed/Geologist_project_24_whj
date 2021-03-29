var hammer;
var stone;
var iron;
var sand1;
var sand2;
var sand3;
var sand4;
var rubber;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(width/2,height-10,width,20);
	hammer=new Hammer(200,100); 
	stone = new Stone(800,320);
	rubber = new Rubber(1000,350);
	iron = new Iron(200,120);
	sand1 = new Sand(700,260,10);
	sand2 = new Sand(650,180,10);
	sand3 = new Sand(600,120,10);
	sand4 = new Sand(550,120,10);
	



	Engine.run(engine);
  
}


function draw() {
  background("lightblue");
  Engine.update(engine)
  rubber.display();
  ground.display();
  iron.display();
  stone.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  hammer.display();
 
}



